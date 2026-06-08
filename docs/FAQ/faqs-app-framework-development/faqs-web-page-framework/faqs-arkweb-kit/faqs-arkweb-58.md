---
format: md
title: "能否同步webview的cookie与app中的cookie"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-58
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-58
last_sync: 2026-06-07
sync_hash: b840427d
---
由于App和Web组件属于不同的应用程序域且会话上下文独立，二者的请求通常使用不同的Cookie进行身份验证和会话管理。当App采用WebView加载同源页面时，可通过CookieManager实现Cookie同步。例如，如果用户在Web浏览器中登录了一个网站，并且该网站也有一个App，那么该App可能使用与Web浏览器相同的Cookie来验证用户身份和管理会话。
