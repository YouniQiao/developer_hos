---
format: md
title: "ArkWeb组件是否支持深拷贝"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-90
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-90
last_sync: 2026-06-07
sync_hash: 820f240e
---
**问题描述**

ArkWeb组件支持深拷贝。将ArkWeb组件A深拷贝给ArkWeb组件B后，即使A组件关闭或从路由栈中退出，B仍可继续使用A中的资源。

**解决措施**

当前不支持该功能，只能通过动态创建Web组件的方式，构建一个Web组件池。需要使用时，直接从池中获取组件并挂载到节点树上进行展示。

**参考链接**

[使用Web组件加载页面](/docs/dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components)
