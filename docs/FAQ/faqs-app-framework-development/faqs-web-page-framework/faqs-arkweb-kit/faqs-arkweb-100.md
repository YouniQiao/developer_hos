---
format: md
title: "同层渲染场景下控件使能沉浸光感效果变透明"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-100
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-100
last_sync: 2026-06-07
sync_hash: 85e9c060
---
**问题现象**

同层渲染场景下将ArkUI的控件设置沉浸光感效果时，发现控件背景变透明。

**解决措施**

API 23及以前SDK在同层渲染场景下暂不支持沉浸光感效果，建议在影响业务场景的对应控件上关闭沉浸光感或者关闭同层渲染。

**参考链接**

[同层渲染](/docs/dev/app-dev/application-framework/arkweb/web-same-layer)
