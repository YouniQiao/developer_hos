/**
 * GitHub GraphQL API 封装
 * Discussions 的查找、创建、评论读写
 */

const GITHUB_API = 'https://api.github.com/graphql';

/** 生成隐藏的 docId 标记，用于在 body 中标识 Discussion 归属 */
function docIdMarker(pageDocId) {
  return `<!-- ic-doc:${pageDocId} -->`;
}

export class GitHubClient {
  constructor(token, repoOwner, repoName) {
    this.token = token;
    this.owner = repoOwner;
    this.name = repoName;
    this._repoId = null;
    this._categoryId = null;
  }

  // ---- 初始化 ----

  /** 获取仓库 ID 和指定 category ID */
  async init(categoryName) {
    const query = `
      query($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          id
          discussionCategories(first: 20) {
            nodes { id name }
          }
        }
      }`;
    const data = await this._query(query, { owner: this.owner, name: this.name });
    this._repoId = data.repository.id;
    const cat = data.repository.discussionCategories.nodes.find(c => c.name === categoryName);
    if (!cat) throw new Error(`Discussion category "${categoryName}" not found. Please create it in repo settings.`);
    this._categoryId = cat.id;
    return { repoId: this._repoId, categoryId: this._categoryId };
  }

  // ---- Discussions ----

  /**
   * 查找页面对应的 Discussion（不创建）
   * 通过 body 中的隐藏标记匹配
   */
  async findDiscussion(pageDocId) {
    if (!this._categoryId) throw new Error('Client not initialized. Call init() first.');

    const marker = docIdMarker(pageDocId);
    // 拉取分类下讨论，通过 body 中的标记匹配
    const searchQuery = `
      query($repoId: ID!, $categoryId: ID!) {
        node(id: $repoId) {
          ... on Repository {
            discussions(first: 100, categoryId: $categoryId, orderBy: {field: CREATED_AT, direction: DESC}) {
              nodes { id number title body url }
            }
          }
        }
      }`;
    const searchData = await this._query(searchQuery, {
      repoId: this._repoId, categoryId: this._categoryId
    });
    return searchData.node.discussions.nodes.find(
      d => d.body && d.body.includes(marker)
    ) || null;
  }

  /**
   * 创建页面对应的 Discussion
   * @param {string} pageDocId  - 文件路径，如 "design/general-design-basics/layout"
   * @param {string} pageTitle  - 页面标题，如 "布局"
   * @param {string} chinesePath - 中文路径，如 "设计与规划 - 通用设计基础 - 布局"
   */
  async getOrCreateDiscussion(pageDocId, pageTitle, chinesePath) {
    if (!this._categoryId) throw new Error('Client not initialized. Call init() first.');

    // 1. 先查找已有 Discussion
    const existing = await this.findDiscussion(pageDocId);
    if (existing) return existing;

    // 2. 不存在则创建
    const body = [
      chinesePath || pageDocId,
      pageDocId,
      '',
      docIdMarker(pageDocId),
    ].join('\n');

    const createQuery = `
      mutation($repoId: ID!, $categoryId: ID!, $title: String!, $body: String!) {
        createDiscussion(input: {
          repositoryId: $repoId,
          categoryId: $categoryId,
          title: $title,
          body: $body
        }) {
          discussion { id number title body url }
        }
      }`;
    const createData = await this._query(createQuery, {
      repoId: this._repoId,
      categoryId: this._categoryId,
      title: pageTitle,
      body,
    });
    return createData.createDiscussion.discussion;
  }

  // ---- Comments ----

  /** 获取 Discussion 下所有评论（含锚点数据） */
  async getComments(discussionId, pageSize = 50) {
    const query = `
      query($discussionId: ID!, $first: Int!) {
        node(id: $discussionId) {
          ... on Discussion {
            comments(first: $first) {
              nodes {
                id body author { login avatarUrl }
                createdAt replies(first: 10) {
                  nodes {
                    id body author { login avatarUrl } createdAt
                  }
                }
              }
            }
          }
        }
      }`;
    const data = await this._query(query, { discussionId, first: pageSize });
    const comments = data.node?.comments?.nodes || [];

    // 解析锚点和纯文本
    return comments.map(c => ({
      id: c.id,
      body: c.body,
      author: c.author,
      createdAt: c.createdAt,
      anchor: parseCommentAnchor(c.body),
      text: stripAnchor(c.body),
      replies: (c.replies?.nodes || []).map(r => ({
        id: r.id,
        body: r.body,
        author: r.author,
        createdAt: r.createdAt,
      })),
    }));
  }

  /** 添加评论（含锚点） */
  async addComment(discussionId, anchor, body) {
    const anchorComment = `<!-- ic-anchor:${anchorToHash(anchor)} -->`;
    const fullBody = `${anchorComment}\n\n${body}`;

    const query = `
      mutation($discussionId: ID!, $body: String!) {
        addDiscussionComment(input: { discussionId: $discussionId, body: $body }) {
          comment { id body author { login avatarUrl } createdAt }
        }
      }`;
    const data = await this._query(query, { discussionId, body: fullBody });
    return data.addDiscussionComment.comment;
  }

  /** 回复评论 */
  async replyToComment(discussionId, commentId, body) {
    const replyQuery = `
      mutation($discussionId: ID!, $commentId: ID!, $body: String!) {
        addDiscussionComment(input: { discussionId: $discussionId, body: $body, replyToId: $commentId }) {
          comment { id body author { login avatarUrl } createdAt }
        }
      }`;
    const data = await this._query(replyQuery, { discussionId, commentId, body });
    return data.addDiscussionComment.comment;
  }

  /** 删除评论 */
  async deleteComment(commentId) {
    const query = `
      mutation($commentId: ID!) {
        deleteDiscussionComment(input: { id: $commentId }) {
          clientMutationId
        }
      }`;
    await this._query(query, { commentId });
  }

  // ---- 内部 ----

  async _query(query, variables) {
    const res = await fetch(GITHUB_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `GitHub API error: ${res.status}`);
    }
    const json = await res.json();
    if (json.errors) {
      throw new Error(json.errors.map(e => e.message).join('; '));
    }
    return json.data;
  }
}

// ---- 工具函数 ----

function parseCommentAnchor(body) {
  const match = body.match(/<!-- ic-anchor:(.+?) -->/);
  if (!match) return null;
  try {
    const [prefix, exact, suffix] = JSON.parse(decodeURIComponent(atob(match[1])));
    return { prefix, exact, suffix };
  } catch {
    return null;
  }
}

function stripAnchor(body) {
  return body.replace(/<!-- ic-anchor:.+? -->/, '').trim();
}

function anchorToHash(anchor) {
  return btoa(encodeURIComponent(JSON.stringify([anchor.prefix, anchor.exact, anchor.suffix])));
}
