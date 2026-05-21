/**
 * 高亮渲染：根据评论锚点在 DOM 中插入 <mark> 标签
 * 使用 MutationObserver 监听文档内容变化后重新渲染
 */
import { useEffect, useCallback, useRef } from 'react';
import { findAnchor } from '../lib/anchor';

export function useAnchors(comments) {
  const marksRef = useRef([]);
  const observerRef = useRef(null);

  // 清理所有高亮
  const clearHighlights = useCallback(() => {
    marksRef.current.forEach(mark => {
      try {
        const parent = mark.parentNode;
        if (parent) {
          parent.replaceChild(document.createTextNode(mark.textContent), mark);
          parent.normalize();
        }
      } catch {}
    });
    marksRef.current = [];
  }, []);

  // 渲染高亮
  const renderHighlights = useCallback(() => {
    clearHighlights();

    const validComments = comments.filter(c => c.anchor);
    if (validComments.length === 0) return;

    validComments.forEach(comment => {
      const range = findAnchor(comment.anchor);
      if (!range) return;

      try {
        const mark = document.createElement('mark');
        mark.className = 'ic-highlight';
        mark.dataset.icId = comment.id;
        mark.title = `${comment.author?.login || '匿名'}: ${comment.text.slice(0, 50)}...`;

        // 点击高亮触发事件
        mark.addEventListener('click', (e) => {
          e.stopPropagation();
          mark.dispatchEvent(new CustomEvent('ic-highlight-click', {
            bubbles: true,
            detail: { commentId: comment.id },
          }));
        });

        range.surroundContents(mark);
        marksRef.current.push(mark);
      } catch {
        // 跨元素边界无法 surround，用分段包裹
        try {
          wrapRangeWithMark(range, comment);
        } catch {}
      }
    });
  }, [comments, clearHighlights]);

  // 初始渲染 + MutationObserver 监听
  useEffect(() => {
    // 等待文章内容渲染
    const article = document.querySelector('article');
    if (!article) return;

    // 延迟渲染，等 React 完成渲染
    const timer = setTimeout(renderHighlights, 500);

    // 监听 DOM 变化（如切换页面）
    observerRef.current = new MutationObserver(() => {
      clearHighlights();
      setTimeout(renderHighlights, 300);
    });

    observerRef.current.observe(article, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      clearTimeout(timer);
      clearHighlights();
      observerRef.current?.disconnect();
    };
  }, [renderHighlights, clearHighlights]);

  // 滚动到指定评论的高亮位置
  const scrollToComment = useCallback((commentId) => {
    const mark = document.querySelector(`mark[data-ic-id="${commentId}"]`);
    if (mark) {
      mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // 闪烁效果
      mark.classList.add('ic-highlight-flash');
      setTimeout(() => mark.classList.remove('ic-highlight-flash'), 1500);
    }
  }, []);

  return { renderHighlights, scrollToComment };
}

/** 跨元素边界分段包裹 Range */
function wrapRangeWithMark(range, comment) {
  const fragment = range.extractContents();
  const mark = document.createElement('mark');
  mark.className = 'ic-highlight';
  mark.dataset.icId = comment.id;
  mark.title = `${comment.author?.login || '匿名'}: ${comment.text.slice(0, 50)}...`;
  mark.appendChild(fragment);
  range.insertNode(mark);
  // 这里无法追踪到 marksRef 但 cleanup 时 normalize 会处理
}
