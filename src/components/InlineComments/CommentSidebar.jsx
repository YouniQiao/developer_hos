import React, { useState } from 'react';
import AuthButton from './AuthButton';
import styles from './styles.module.css';

export default function CommentSidebar({
  comments,
  token,
  user,
  loading,
  error,
  clientId,
  onAuthChange,
  onScrollTo,
  onDelete,
  onReply,
  onClose,
}) {
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [replyTarget, setReplyTarget] = useState(null); // { commentId, author }
  const [replyText, setReplyText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const validComments = comments.filter(c => c.anchor);
  const orphanComments = comments.filter(c => !c.anchor);

  const handleReplySubmit = async (commentId) => {
    if (!replyText.trim()) return;
    setSubmitting(true);
    try {
      await onReply?.(commentId, replyText.trim());
      setReplyText('');
      setReplyTarget(null);
    } catch {
      // error handled by parent
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.sidebar}>
      {/* 头部 */}
      <div className={styles.sidebarHeader}>
        <h3>标注评论</h3>
        <button className={styles.sidebarClose} onClick={onClose}>✕</button>
      </div>

      {/* 认证 */}
      <div className={styles.sidebarAuth}>
        <AuthButton clientId={clientId} onAuthChange={onAuthChange} />
      </div>

      {/* 错误提示 */}
      {error && <div className={styles.sidebarError}>{error}</div>}

      {/* 加载中 */}
      {loading && <div className={styles.sidebarLoading}>加载中...</div>}

      {/* 评论列表 */}
      {!loading && validComments.length === 0 && (
        <div className={styles.sidebarEmpty}>
          <p>选中正文文字，添加第一条标注</p>
        </div>
      )}

      <div className={styles.sidebarList}>
        {validComments.map(comment => (
          <div
            key={comment.id}
            className={styles.sidebarItem}
          >
            <div
              className={styles.sidebarItemClickable}
              onClick={() => onScrollTo(comment.id)}
            >
              <div className={styles.sidebarItemHeader}>
                <img
                  src={comment.author?.avatarUrl}
                  alt=""
                  className={styles.sidebarItemAvatar}
                  width={20}
                  height={20}
                  style={{ width: 20, height: 20, minWidth: 20, maxWidth: 20, borderRadius: '50%', objectFit: 'cover' }}
                />
                <span className={styles.sidebarItemAuthor}>
                  {comment.author?.login || '匿名'}
                </span>
                <span className={styles.sidebarItemTime}>
                  {formatTime(comment.createdAt)}
                </span>
              </div>
              <div className={styles.sidebarItemQuote}>
                "{comment.anchor?.exact?.slice(0, 60)}{(comment.anchor?.exact?.length || 0) > 60 ? '...' : ''}"
              </div>
              <div className={styles.sidebarItemText}>{comment.text}</div>
              {/* 回复列表 */}
              {comment.replies?.length > 0 && (
                <div className={styles.sidebarReplies}>
                  {comment.replies.map(reply => (
                    <div key={reply.id} className={styles.sidebarReply}>
                      <strong>{reply.author?.login}</strong>: {reply.body}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 内联回复输入框 */}
            {replyTarget?.commentId === comment.id && (
              <div className={styles.sidebarReplyInput}>
                <div className={styles.sidebarReplyInputHeader}>
                  回复 @{replyTarget.author}
                  <button
                    className={styles.sidebarReplyCancel}
                    onClick={() => { setReplyTarget(null); setReplyText(''); }}
                  >
                    取消
                  </button>
                </div>
                <textarea
                  className={styles.sidebarReplyTextarea}
                  value={replyText}
                  onChange={e => setReplyText(e.target.value)}
                  placeholder={`回复 @${replyTarget.author}...`}
                  rows={2}
                  autoFocus
                />
                <button
                  className={styles.sidebarReplySubmit}
                  disabled={!replyText.trim() || submitting}
                  onClick={() => handleReplySubmit(comment.id)}
                >
                  {submitting ? '提交中...' : '回复'}
                </button>
              </div>
            )}

            {/* 操作按钮 */}
            {token && (
              <div className={styles.sidebarItemActions}>
                <button
                  className={styles.sidebarReplyBtn}
                  onClick={e => {
                    e.stopPropagation();
                    setReplyTarget({ commentId: comment.id, author: comment.author?.login || '匿名' });
                    setReplyText('');
                  }}
                >
                  回复
                </button>
                {deleteConfirm === comment.id ? (
                  <span className={styles.sidebarDeleteConfirm}>
                    确认删除？
                    <button onClick={e => {
                      e.stopPropagation();
                      onDelete(comment.id);
                      setDeleteConfirm(null);
                    }}>是</button>
                    <button onClick={e => {
                      e.stopPropagation();
                      setDeleteConfirm(null);
                    }}>否</button>
                  </span>
                ) : (
                  <button
                    className={styles.sidebarDeleteBtn}
                    onClick={e => {
                      e.stopPropagation();
                      setDeleteConfirm(comment.id);
                    }}
                  >
                    删除
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 孤立评论（锚点失效的） */}
      {orphanComments.length > 0 && (
        <div className={styles.sidebarOrphans}>
          <h4>已失效的标注 ({orphanComments.length})</h4>
          {orphanComments.map(c => (
            <div key={c.id} className={styles.sidebarOrphanItem}>
              {c.text.slice(0, 100)}
            </div>
          ))}
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
