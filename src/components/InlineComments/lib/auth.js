/**
 * GitHub 认证
 * - OAuth Web Flow：代理服务端换 token → 302 带 ic_token 回原页面
 * - PAT 令牌（备选，手工粘贴）
 */

const TOKEN_KEY = 'ic_github_token';
const USER_KEY = 'ic_github_user';

// ---- OAuth Web Flow ----

/** 跳转到 GitHub 授权页面 */
export function startOAuthFlow(clientId) {
  const returnPath = window.location.pathname + window.location.search;
  const state = btoa(encodeURIComponent(returnPath));

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: window.location.origin + '/api/github/oauth/callback',
    scope: 'public_repo',
    state,
  });

  window.location.href = `https://github.com/login/oauth/authorize?${params}`;
}

/** 从 URL hash 提取 token（代理已交换好，直接读取 ic_token） */
export function extractTokenFromHash() {
  const hash = window.location.hash;
  if (!hash) return null;

  const params = new URLSearchParams(hash.slice(1));
  const token = params.get('ic_token');
  if (!token) return null;

  // 清理 hash
  params.delete('ic_token');
  const rest = params.toString();
  window.location.hash = rest ? '#' + rest : '';

  return token;
}

// ---- PAT 令牌 ----

/** 用 token 获取用户信息（验证 token 有效性） */
export async function fetchUserInfo(token) {
  const res = await fetch('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Token 无效，请检查后重试');
  const user = await res.json();
  storeUser(user);
  return user;
}

// ---- Token 存储 ----

export function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch {
    return null;
  }
}

function storeUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify({
    login: user.login,
    avatarUrl: user.avatar_url,
  }));
}

export function storeToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
