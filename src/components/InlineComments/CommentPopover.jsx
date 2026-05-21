import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

export default function CommentPopover({
  selection,
  position,
  token,
  user,
  existingComments,
  onAdd,
  onReply,
  onClose,
  onRequestLogin,
}) {
  const [mode, setMode] = useState('view'); // 'view' | 'add' | 'reply'
  const [replyTarget, setReplyTarget] = useState(null);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    if ((mode === 'add' || mode === 'reply') && inputRef.current) {
      inputRef.current.focus();
    }
  }, [mode]);

  // 点击外部关闭
  useEffect(() => {
    function handleClick(e) {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  async function handleSubmit() {
    if (!text.trim() || submitting) return;
    setSubmitting(true);
    try {
      if (mode === 'add') {
        await onAdd(selection.anchor, text.trim());
      } else if (mode === 'reply') {
        await onReply(replyTarget, text.trim());
      }
      setText('');
      setMode('view');
    } catch (e) {
      // error handled by parent
    } finally {
      setSubmitting(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
    if (e.key === 'Escape') onClose();
  }

  const style = position ? {
    left: Math.min(position.x, window.innerWidth - 320),
    top: position.y,
  } : {};

  return (
    <div className={styles.popover} ref={popoverRef} style={style} data-ic-popover>
      {/* 选中文字 */}
      <div className={styles.popoverSelection}>
        标注: <em>"{selection.text.slice(0, 80)}{selection.text.length > 80 ? '...' : ''}"</em>
      </div>

      {/* 已有评论列表 */}
      {existingComments.length > 0 && (
        <div className={styles.popoverComments}>
          {existingComments.map(c => (
            <div key={c.id} className={styles.popoverComment}>
              <div className={styles.commentHeader}>
                <img src={c.author?.avatarUrl} alt="" className={styles.commentAvatar} />
                <span className={styles.commentAuthor}>{c.author?.login || '匿名'}</span>
                <span className={styles.commentTime}>{formatTime(c.createdAt)}</span>
              </div>
              <div className={styles.commentBody}>{c.text}</div>
              {/* 回复列表 */}
              {c.replies?.map(r => (
                <div key={r.id} className={styles.commentReply}>
                  <div className={styles.commentHeader}>
                    <img src={r.author?.avatarUrl} alt="" className={styles.commentAvatar} />
                    <span className={styles.commentAuthor}>{r.author?.login || '匿名'}</span>
                    <span className={styles.commentTime}>{formatTime(r.createdAt)}</span>
                  </div>
                  <div className={styles.commentBody}>{r.body}</div>
                </div>
              ))}
              {/* 回复按钮 */}
              {token && (
                <button
                  className={styles.commentReplyBtn}
                  onClick={() => { setMode('reply'); setReplyTarget(c.id); }}
                >
                  💬 回复
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 输入区 */}
      {token && (mode === 'add' || mode === 'reply') && (
        <div className={styles.popoverInput}>
          {mode === 'reply' && (
            <div className={styles.replyingTo}>
              回复评论中... <button onClick={() => setMode('view')}>取消</button>
            </div>
          )}
          <textarea
            ref={inputRef}
            className={styles.popoverTextarea}
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入标注评论... (⌘+Enter 提交)"
            rows={3}
          />
          <div className={styles.popoverActions}>
            <button
              className={styles.popoverSubmit}
              onClick={handleSubmit}
              disabled={!text.trim() || submitting}
            >
              {submitting ? '提交中...' : '提交'}
            </button>
            <button className={styles.popoverCancel} onClick={onClose}>
              取消
            </button>
          </div>
        </div>
      )}

      {/* 操作按钮 */}
      {token && mode === 'view' && (
        <div className={styles.popoverActions}>
          <button className={styles.popoverAddBtn} onClick={() => setMode('add')}>
            {existingComments.length > 0 ? '💬 新增标注' : '💬 添加标注'}
          </button>
        </div>
      )}

      {/* 未登录提示 */}
      {!token && (
        <div className={styles.popoverAuthPrompt}>
          <p>请先登录 GitHub 才能添加标注</p>
          <button
            className={styles.icAuthLogin}
            onClick={() => {
              onClose();
              onRequestLogin?.();
            }}
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            使用 GitHub 登录
          </button>
        </div>
      )}
    </div>
  );
}

function formatTime(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = now - d;
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
  return d.toLocaleDateString('zh-CN');
}
