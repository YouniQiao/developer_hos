---
format: md
title: "向用户申请授予权限但被用户拒绝后，如何处理才能避免应用二次进入时崩溃"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-access-control/faqs-access-control-12
upstream_id: FAQ/faqs-system-development/faqs-security/faqs-access-control/faqs-access-control-12
last_sync: 2026-06-07
sync_hash: adaaacf1
---
**可能原因**

* 业务功能所需的权限被用户拒绝后，直接返回结果。
* 若开发者未进行权限判断，应用可能会因没有权限而崩溃。

**解决措施**

1. 应用在调用受权限保护的接口前，需先校验是否已获取该权限。若已获取权限，可直接访问目标接口；否则，需通过动态弹框申请用户授权，并根据授权结果进行处理。
2. 如果用户拒绝授予某个权限，必须确保其他业务功能正常运行，不影响应用的注册或登录。
3. 当用户主动触发业务功能或为实现业务功能所必需时，应用程序可通过界面文字引导用户到“系统设置”中授权。

**参考链接**

[访问控制概述](/docs/dev/app-dev/system/system-security/access-control/access-token-overview)
