---
format: md
title: "AppStorage是否支持线程间共享对象，如果不支持，推荐替代方案是什么"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-49
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-49
last_sync: 2026-06-07
sync_hash: e31e1f43
---
AppStorage 支持应用主线程中多个 UIAbility 实例之间的状态共享。AppStorage 是与 UI 相关的数据，必须在 UI 线程中运行，无法与其他线程共享。当前没有替代方案。

**参考链接**

[AppStorage：应用全局的UI状态存储](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage)
