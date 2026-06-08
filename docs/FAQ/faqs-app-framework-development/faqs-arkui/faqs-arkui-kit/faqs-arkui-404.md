---
format: md
title: "Navigation组件中，NavDestination页面是否可以缓存，下次入栈可以复用"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-404
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-404
last_sync: 2026-06-07
sync_hash: aee66957
---
**问题描述**

NavDestination是否有缓存页面的功能，每次pushStack后都要刷新页面。

**解决措施**

NavDestination不支持缓存功能，页面出栈后会被销毁。
