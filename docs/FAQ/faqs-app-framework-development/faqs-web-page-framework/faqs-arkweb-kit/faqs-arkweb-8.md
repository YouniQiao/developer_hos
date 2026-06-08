---
format: md
title: "如何解决Web组件加载的HTML页面内检测网络状态失败"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-8
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-8
last_sync: 2026-06-07
sync_hash: f764db6d
---
**问题现象**

在HTML页面中，使用window.navigator.onLine获取网络状态，在联网/断网情况下返回值均为false。

**解决措施**

配置应用以获取网络信息权限：ohos.permission.GET\_NETWORK\_INFO

**参考链接**

[ohos.permission.GET\_NETWORK\_INFO](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all#ohospermissionget_network_info)
