---
format: md
title: "应用申请位置信息权限为什么没有弹窗"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-access-control/faqs-access-control-11
upstream_id: FAQ/faqs-system-development/faqs-security/faqs-access-control/faqs-access-control-11
last_sync: 2026-06-07
sync_hash: 0e6c1f73
---
**可能原因**

未申请ohos.permission.LOCATION权限。

**解决措施**

开发应用时，需要先申请权限ohos.permission.LOCATION，才能获取位置信息。

**参考链接**

[开放权限（系统授权）](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all)
