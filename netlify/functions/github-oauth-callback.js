/**
 * Netlify Function: GitHub OAuth 回调
 *
 * 路由: /api/github/oauth/callback
 * 职责: 用 code 向 GitHub 换 token，302 跳回原页面带 ic_token
 */

const CLIENT_ID = 'Ov23liKyrxXiGvlZQjCW';
const CLIENT_SECRET = '4991d19a761bae0800f2f8748978fd4fd9ba5a2e';

exports.handler = async (event) => {
  const { code, state } = event.queryStringParameters || {};

  if (!code) {
    return {
      statusCode: 400,
      body: '<h1>Missing code</h1><p>授权回调缺少 code 参数。</p>',
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    };
  }

  // 解码 state 获取返回路径
  let returnPath = '/';
  try {
    returnPath = decodeURIComponent(Buffer.from(state || '', 'base64').toString('utf-8')) || '/';
  } catch (e) {}

  // redirect_uri 必须和授权请求中的一致，从请求 host 动态获取
  const host = event.headers.host || 'developer.harmonyos.cool';
  const protocol = host.startsWith('localhost') ? 'http' : 'https';
  const redirectUri = `${protocol}://${host}/api/github/oauth/callback`;

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: redirectUri,
      }),
    });

    const data = await tokenRes.json();

    if (data.error) {
      return {
        statusCode: 400,
        body: `<h1>OAuth 错误</h1><p>${data.error_description || data.error}</p>`,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      };
    }

    if (!data.access_token) {
      return {
        statusCode: 500,
        body: 'No access_token',
      };
    }

    // 跳回用户原始页面，token 放 hash 里
    return {
      statusCode: 302,
      headers: {
        Location: `${returnPath}#ic_token=${data.access_token}`,
      },
    };
  } catch (err) {
    console.error('OAuth error:', err.message);
    return {
      statusCode: 502,
      body: `<h1>网络错误</h1><p>${err.message}</p>`,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    };
  }
};
