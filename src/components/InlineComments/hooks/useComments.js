/**
 * 评论数据管理：加载、创建、回复、删除
 */
import { useState, useEffect, useCallback, useRef } from 'react';
import { GitHubClient } from '../lib/github';

export function useComments(pageDocId, pageTitle, chinesePath, repoOwner, repoName, categoryName, token) {
  const [comments, setComments] = useState([]);
  const [discussion, setDiscussion] = useState(null);   // { id } | null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const clientRef = useRef(null);
  const discussionRef = useRef(null);  // 避免闭包过期
  const prevPageRef = useRef(null);    // 追踪页面切换

  // 初始化 client 并查找已有 Discussion（不创建）
  useEffect(() => {
    if (!token || !pageDocId) {
      // 无 token 或无页面 → 清空状态
      setComments([]);
      setDiscussion(null);
      discussionRef.current = null;
      prevPageRef.current = null;
      return;
    }

    // 页面切换时立即清空，避免闪现上一页评论
    if (prevPageRef.current !== pageDocId) {
      setComments([]);
      setDiscussion(null);
      discussionRef.current = null;
      prevPageRef.current = pageDocId;
    }

    const client = new GitHubClient(token, repoOwner, repoName);
    clientRef.current = client;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        await client.init(categoryName);
        // 只查找，不创建
        const disc = await client.findDiscussion(pageDocId);
        if (disc) {
          discussionRef.current = { id: disc.id, title: disc.title };
          setDiscussion({ id: disc.id });
          const cmts = await client.getComments(disc.id);
          setComments(cmts);
        }
        // disc 为 null → 保持已清空的状态（setComments([]) 在上面已执行）
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [token, pageDocId, pageTitle, repoOwner, repoName, categoryName]);

  // 确保 Discussion 存在（供 addComment 调用）
  const ensureDiscussion = useCallback(async () => {
    if (discussionRef.current) return discussionRef.current;
    if (!clientRef.current) throw new Error('Client not initialized');

    const disc = await clientRef.current.getOrCreateDiscussion(
      pageDocId, pageTitle, chinesePath
    );
    discussionRef.current = { id: disc.id, title: disc.title };
    setDiscussion({ id: disc.id });
    return discussionRef.current;
  }, [pageDocId, pageTitle, chinesePath]);

  // 新增标注评论
  const addComment = useCallback(async (anchor, body) => {
    if (!clientRef.current) return;
    setError(null);
    try {
      // 懒创建：只在首次评论时创建 Discussion
      const disc = await ensureDiscussion();
      const comment = await clientRef.current.addComment(disc.id, anchor, body);
      // 刷新评论列表
      const cmts = await clientRef.current.getComments(disc.id);
      setComments(cmts);
      return comment;
    } catch (e) {
      setError(e.message);
      throw e;
    }
  }, [ensureDiscussion]);

  // 回复评论
  const replyToComment = useCallback(async (commentId, body) => {
    if (!clientRef.current || !discussion) return;
    setError(null);
    try {
      await clientRef.current.replyToComment(discussion.id, commentId, body);
      // 刷新评论列表
      const cmts = await clientRef.current.getComments(discussion.id);
      setComments(cmts);
    } catch (e) {
      setError(e.message);
      throw e;
    }
  }, [discussion]);

  // 删除评论
  const deleteComment = useCallback(async (commentId) => {
    if (!clientRef.current) return;
    setError(null);
    try {
      await clientRef.current.deleteComment(commentId);
      setComments(prev => prev.filter(c => c.id !== commentId));
    } catch (e) {
      setError(e.message);
      throw e;
    }
  }, []);

  return {
    comments,
    discussionId: discussion?.id || null,
    loading,
    error,
    addComment,
    replyToComment,
    deleteComment,
    refresh: discussion?.id
      ? () => clientRef.current?.getComments(discussion.id).then(setComments)
      : () => {},
  };
}
