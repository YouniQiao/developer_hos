import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import { useSelection } from './hooks/useSelection';
import { useComments } from './hooks/useComments';
import { useAnchors } from './hooks/useAnchors';
import CommentPopover from './CommentPopover';
import CommentSidebar from './CommentSidebar';
import styles from './styles.module.css';

// URL 前缀 → 中文板块名
const SECTION_MAP = {
  'design': '设计与规划',
  'dev': '开发与测试',
  'distribute': '分发与运营',
  'monetize': '推广与变现',
  'tools': '工具',
  'resources': '更多资源',
  'FAQ': 'FAQ',
  'quality': '质量',
  'security': '安全',
  'architecture': '架构',
  'atomic': '元服务开发',
  'experience-suggestions': '体验建议',
  'guides': '指南',
  'overview': '概览',
  'api-reference': 'API参考',
};

/** 清理页面标题（去掉 " | Developer" 等后缀） */
function cleanPageTitle(raw) {
  return (raw || '').replace(/\s*\|\s*Developer.*$/, '').trim();
}

/** 从 URL 推断顶层板块中文名 */
function getSectionName(location) {
  try {
    const path = (location.pathname || '').replace(/^\/docs\//, '');
    const section = path.split('/')[0];
    return SECTION_MAP[section] || section;
  } catch {
    return '';
  }
}

/** 从 DOM 面包屑提取中文路径（仅在页面渲染完成后调用） */
function readBreadcrumb() {
  try {
    const nav = document.querySelector('nav.theme-doc-breadcrumbs')
      || document.querySelector('nav[class*="breadcrumbsContainer"]');
    if (!nav) return [];

    return Array.from(
      nav.querySelectorAll('li[class*="breadcrumbs__item"] .breadcrumbs__link')
    )
      .map(el => el.textContent.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * 返回顶部悬浮按钮
 */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.backToTop} ${visible ? styles.backToTopVisible : ''}`}
      onClick={scrollToTop}
      title="返回顶部"
      aria-label="返回顶部"
    >
      ↑
    </button>
  );
}

/**
 * 主组件：协调选中检测、评论管理、高亮渲染、侧边栏
 */
export default function InlineComments({ repoOwner, repoName, category, clientId }) {
  const location = useLocation();
  const docPath = location.pathname.replace(/^\/docs\//, '').replace(/\/$/, '');
  const pageDocId = docPath || null;
  const rawTitle = (typeof document !== 'undefined' && document.title) || pageDocId;
  const pageTitle = cleanPageTitle(rawTitle);
  const sectionName = getSectionName(location);

  // 中文路径：用 useEffect 延迟读取面包屑，避免 SPA 导航时读到旧 DOM
  const [chinesePath, setChinesePath] = useState(sectionName);
  const prevDocId = useRef(null);

  useEffect(() => {
    // 初始值：只用板块名
    setChinesePath(sectionName);
    prevDocId.current = pageDocId;

    if (typeof document === 'undefined') return;

    // 等 Docusaurus 渲染完新页面内容后再读面包屑
    let attempts = 0;
    const MAX_ATTEMPTS = 10;
    const INTERVAL = 100;

    const timer = setInterval(() => {
      attempts++;
      const items = readBreadcrumb();

      // 面包屑最后一项应该匹配当前页面标题（说明 DOM 已更新）
      const lastItem = items[items.length - 1] || '';
      const matchesCurrentPage = lastItem === pageTitle
        || (pageTitle && lastItem.includes(pageTitle))
        || (pageTitle && pageTitle.includes(lastItem))
        || items.length > 0;

      if (matchesCurrentPage || attempts >= MAX_ATTEMPTS) {
        clearInterval(timer);
        const path = items.length > 0
          ? [sectionName, ...items].join(' - ')
          : sectionName;
        setChinesePath(path);
      }
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [pageDocId, pageTitle, sectionName]);

  // 认证状态
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // 选中文字
  const { selection, position, clearSelection } = useSelection();

  // 评论数据
  const {
    comments,
    loading,
    error,
    addComment,
    replyToComment,
    deleteComment,
  } = useComments(pageDocId, pageTitle, chinesePath, repoOwner, repoName, category, token);

  // 高亮渲染
  const { scrollToComment } = useAnchors(comments);

  // 高亮点击 → 滚动到侧边栏
  const handleHighlightClick = useCallback((e) => {
    setSidebarOpen(true);
    setTimeout(() => {
      const commentId = e.target?.dataset?.icId;
      if (commentId) scrollToComment(commentId);
    }, 100);
  }, [scrollToComment]);

  // 侧边栏
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleAuthChange = useCallback((newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
  }, []);

  // 侧边栏回复：直接调用 replyToComment
  const handleSidebarReply = useCallback((commentId, body) => {
    return replyToComment(commentId, body);
  }, [replyToComment]);

  if (!pageDocId) return null;

  const totalComments = comments.filter(c => c.anchor).length;

  return (
    <>
      {selection && position && (
        <CommentPopover
          selection={selection}
          position={position}
          token={token}
          user={user}
          existingComments={comments.filter(
            c => c.anchor?.exact === selection.anchor.exact
          )}
          onAdd={async (anchor, body) => {
            await addComment(anchor, body);
            clearSelection();
          }}
          onReply={replyToComment}
          onClose={clearSelection}
          onRequestLogin={() => setSidebarOpen(true)}
        />
      )}

      <button
        className={styles.toggle}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        title="标注评论"
      >
        💬
        {totalComments > 0 && (
          <span className={styles.toggleBadge}>{totalComments}</span>
        )}
      </button>

      <BackToTop />

      {sidebarOpen && (
        <>
          <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
          <CommentSidebar
            comments={comments}
            token={token}
            user={user}
            loading={loading}
            error={error}
            clientId={clientId}
            onAuthChange={handleAuthChange}
            onScrollTo={(id) => {
              scrollToComment(id);
              setSidebarOpen(false);
            }}
            onDelete={deleteComment}
            onReply={handleSidebarReply}
            onClose={() => setSidebarOpen(false)}
          />
        </>
      )}
    </>
  );
}
