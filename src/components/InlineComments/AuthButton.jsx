import React, { useState, useEffect } from 'react';
import {
  getStoredToken, getStoredUser, storeToken, clearAuth,
  startOAuthFlow, extractTokenFromHash, fetchUserInfo,
} from './lib/auth';

const S = {
  // 通用 flex 行
  flexRow: { display: 'flex', alignItems: 'center', gap: 8 },
  // 登录按钮
  loginBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '6px 14px', background: '#24292f', color: '#fff',
    border: 'none', borderRadius: 6, fontSize: 13, cursor: 'pointer',
  },
  // 退出按钮
  logoutBtn: {
    fontSize: 12, color: 'var(--ifm-color-emphasis-600)',
    background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline',
  },
  // 用户名
  name: { fontSize: 13, fontWeight: 500 },
  // 错误
  error: { color: '#e53e3e', fontSize: 12, marginTop: 4 },
  // PAT 输入
  input: {
    width: '100%', padding: '6px 10px', border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: 6, fontSize: 13, fontFamily: 'monospace',
    background: 'var(--ifm-background-color)', color: 'var(--ifm-color-emphasis-900)',
    marginBottom: 8,
  },
  hint: { fontSize: 12, color: 'var(--ifm-color-emphasis-600)', margin: '0 0 8px', lineHeight: 1.5 },
  submitBtn: {
    padding: '4px 14px', background: 'var(--ifm-color-primary)', color: '#fff',
    border: 'none', borderRadius: 6, fontSize: 13, cursor: 'pointer',
  },
  cancelBtn: {
    padding: '4px 14px', background: 'var(--ifm-color-emphasis-200)',
    color: 'var(--ifm-color-emphasis-800)', border: 'none', borderRadius: 6,
    fontSize: 13, cursor: 'pointer',
  },
};

export default function AuthButton({ clientId, onAuthChange }) {
  const [token, setToken] = useState(getStoredToken);
  const [user, setUser] = useState(getStoredUser);
  const [loading, setLoading] = useState(false);
  const [patMode, setPatMode] = useState(false);
  const [patValue, setPatValue] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    onAuthChange?.(token, user);
  }, [token, user]);

  // 处理 OAuth 回调
  useEffect(() => {
    if (token) return;
    const hashToken = extractTokenFromHash();
    if (!hashToken) return;

    setLoading(true);
    fetchUserInfo(hashToken).then(userInfo => {
      storeToken(hashToken);
      setToken(hashToken);
      setUser(userInfo);
    }).catch(e => {
      setError(e.message);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  function handleOAuthLogin() {
    setError(null);
    startOAuthFlow(clientId);
  }

  async function handleSubmitPAT() {
    const trimmed = patValue.trim();
    if (!trimmed) return;
    setLoading(true);
    setError(null);
    try {
      const userInfo = await fetchUserInfo(trimmed);
      storeToken(trimmed);
      setToken(trimmed);
      setUser(userInfo);
      setPatMode(false);
      setPatValue('');
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    clearAuth();
    setToken(null);
    setUser(null);
  }

  // --- 已登录 ---
  if (token && user) {
    return (
      <div style={S.flexRow}>
        <img
          src={user.avatarUrl}
          alt={user.login}
          style={{ width: 20, height: 20, minWidth: 20, maxWidth: 20, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <span style={S.name}>{user.login}</span>
        <button style={S.logoutBtn} onClick={handleLogout} title="退出登录">
          退出
        </button>
      </div>
    );
  }

  // --- 加载中 ---
  if (loading) {
    return (
      <div style={S.flexRow}>
        <p>登录中...</p>
      </div>
    );
  }

  // --- PAT 模式 ---
  if (patMode) {
    return (
      <div style={{ padding: '4px 0' }}>
        <p style={S.hint}>
          创建 <a href="https://github.com/settings/tokens/new?scopes=public_repo&description=developer_hos+comments" target="_blank" rel="noopener">GitHub Token</a>（勾选 <code>public_repo</code>），粘贴到下方：
        </p>
        <input
          type="password"
          style={S.input}
          value={patValue}
          onChange={e => setPatValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmitPAT()}
          placeholder="***"
          autoFocus
        />
        {error && <p style={S.error}>{error}</p>}
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={S.submitBtn} onClick={handleSubmitPAT} disabled={!patValue.trim()}>
            确认
          </button>
          <button style={S.cancelBtn} onClick={() => { setPatMode(false); setError(null); }}>
            取消
          </button>
        </div>
      </div>
    );
  }

  // --- 未登录 ---
  return (
    <div style={{ ...S.flexRow, justifyContent: 'center' }}>
      <button style={S.loginBtn} onClick={handleOAuthLogin}>
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        使用 GitHub 登录
      </button>
      {error && <p style={S.error}>{error}</p>}
    </div>
  );
}
