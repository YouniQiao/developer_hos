---
displayed_sidebar: appDevSidebar
title: "应用市场更新功能抛出不在前台异常"
original_url: /docs/dev/app-dev/application-services/store-kit-guide/store-faq/store-faq-4
format: md
upstream_id: dev/app-dev/application-services/store-kit-guide/store-faq/store-faq-4
last_sync: 2026-06-07
sync_hash: 2c783c38
---
**问题现象**

调用应用市场更新功能相关API时，提示应用不在前台异常。

**解决措施**

应用市场更新功能API要求应用必须在前台时进行调用，请在应用处于前台时调用相关接口。
