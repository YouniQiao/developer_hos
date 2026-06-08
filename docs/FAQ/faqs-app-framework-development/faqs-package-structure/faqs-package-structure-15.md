---
format: md
title: "HAR、HSP不能支持Ability、Page声明，限制的理由是什么？后续是否会支持"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-15
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-15
last_sync: 2026-06-07
sync_hash: d11c6ace
---
Page：HAR和HSP支持page；HAR中的page需要通过命名路由的方式跳转，具体请参见参考资料。Ability：HAR和HSP不支持，推荐在HAP中配置Ability。

**参考链接**

[命名路由](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing#命名路由)
