/**
 * 合并 serve：静态文件 + OAuth 回调
 *
 * 用法: node scripts/serve.js [port]
 *
 * 替代 npx docusaurus serve，同时处理 /api/github/oauth/callback
 * 避免额外的代理进程。
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.argv[2]) || 3000;
const BUILD_DIR = path.join(__dirname, '..', 'build');

// ---- OAuth 配置 ----
const CLIENT_ID = 'Ov23liKyrxXiGvlZQjCW';
const CLIENT_SECRET = '4991d19a761bae0800f2f8748978fd4fd9ba5a2e';

// ---- MIME ----
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
};

function serveStatic(req, res) {
  let filePath = path.join(BUILD_DIR, req.url.split('?')[0]);
  if (filePath.endsWith('/')) filePath = path.join(filePath, 'index.html');

  // 无后缀 → 尝试目录/index.html，再尝试加 .html
  if (!path.extname(filePath)) {
    const indexPath = path.join(filePath, 'index.html');
    if (fs.existsSync(indexPath)) {
      filePath = indexPath;
    } else {
      filePath += '.html';
    }
  }

  // SPA 回退
  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    filePath = path.join(BUILD_DIR, '404.html');
  }

  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 Not Found</h1>');
  }
}

async function handleOAuthCallback(req, res) {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (!code) {
    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Missing code</h1><p>授权回调缺少 code 参数。</p>');
    return;
  }

  // 解码 state 获取返回路径
  let returnPath = '/';
  try {
    returnPath = decodeURIComponent(Buffer.from(state || '', 'base64').toString('utf-8')) || '/';
  } catch (e) {}

  // redirect_uri 必须和授权请求中的一致
  const redirectUri = `http://localhost:${PORT}/api/github/oauth/callback`;

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
      res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1>OAuth 错误</h1><p>${data.error_description || data.error}</p>`);
      return;
    }

    if (!data.access_token) {
      res.writeHead(500);
      res.end('No access_token');
      return;
    }

    // 跳回用户原始页面，token 放 hash 里
    res.writeHead(302, { Location: `${returnPath}#ic_token=${data.access_token}` });
    res.end();
  } catch (err) {
    console.error('OAuth error:', err.message);
    res.writeHead(502, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h1>网络错误</h1><p>${err.message}</p>`);
  }
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/github/oauth/callback')) {
    handleOAuthCallback(req, res);
  } else {
    serveStatic(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Serve + OAuth on http://localhost:${PORT}`);
});
