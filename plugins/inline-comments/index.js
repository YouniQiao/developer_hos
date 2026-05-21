/**
 * Inline Comments Plugin
 *
 * 职责：
 * 1. 验证配置参数
 * 2. 注入 OAuth 回调代理路由（dev server 中间件）
 * 3. 不注入 client modules（CSS 由组件自行 import）
 */
module.exports = function inlineCommentsPlugin(context, options) {
  const { repo, category, clientId, clientSecret } = options;

  if (!repo) throw new Error('inline-comments plugin: "repo" is required (e.g. "YouniQiao/developer_hos")');
  if (!category) throw new Error('inline-comments plugin: "category" is required');
  if (!clientId) throw new Error('inline-comments plugin: "clientId" is required');
  if (!clientSecret) throw new Error('inline-comments plugin: "clientSecret" is required');

  return {
    name: 'inline-comments',

    configureWebpack(config, isServer, utils) {
      // 只在 client bundle 且 dev server 模式下注入中间件
      if (isServer) return {};

      return {
        devServer: {
          setupMiddlewares(middlewares, devServer) {
            // OAuth 回调代理：用 code 换 token，避免暴露 client_secret 到前端
            devServer.app.get('/api/github/oauth/callback', async (req, res) => {
              const { code, state } = req.query;

              if (!code) {
                res.status(400).send('Missing code parameter');
                return;
              }

              try {
                const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    code,
                  }),
                });

                const data = await tokenRes.json();

                if (data.error) {
                  res.status(400).send(`OAuth error: ${data.error_description || data.error}`);
                  return;
                }

                if (!data.access_token) {
                  res.status(400).send('No access_token in response');
                  return;
                }

                // 将 token 通过 URL hash 传回前端
                const stateParam = state ? `&state=${encodeURIComponent(state)}` : '';
                res.redirect(`/docs/dev/app-dev/overview#ic_token=${data.access_token}${stateParam}`);
              } catch (err) {
                res.status(500).send(`Proxy error: ${err.message}`);
              }
            });

            return middlewares;
          },
        },
      };
    },
  };
};
