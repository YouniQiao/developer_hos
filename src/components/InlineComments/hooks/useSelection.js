/**
 * 监听用户选中文字，计算锚点
 */
import { useState, useEffect, useCallback } from 'react';
import { createAnchor } from '../lib/anchor';

export function useSelection() {
  const [selection, setSelection] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    function handleMouseUp(e) {
      // 同步判断点击是否在 popover 内部（setTimeout 回调中 DOM 可能已变化）
      const clickedInsidePopover = e.target instanceof Element && e.target.closest('[data-ic-popover]');

      // 延迟执行，确保 selection 已稳定
      setTimeout(() => {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed || !sel.toString().trim()) {
          if (clickedInsidePopover) return;
          setSelection(null);
          setPosition(null);
          return;
        }

        // 限制：只在 article 区域内生效
        const container = document.querySelector('article');
        if (container && !container.contains(sel.anchorNode)) {
          setSelection(null);
          setPosition(null);
          return;
        }

        // 限制：最短 3 个字符
        const text = sel.toString().trim();
        if (text.length < 3) {
          setSelection(null);
          setPosition(null);
          return;
        }

        const anchor = createAnchor(sel);
        if (!anchor) {
          setSelection(null);
          setPosition(null);
          return;
        }

        // 计算弹窗位置（选中文字中心下方）
        const range = sel.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.bottom + window.scrollY + 8,
        });
        setSelection({ text, anchor });
      }, 10);
    }

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const clearSelection = useCallback(() => {
    setSelection(null);
    setPosition(null);
    window.getSelection()?.removeAllRanges();
  }, []);

  return { selection, position, clearSelection };
}
