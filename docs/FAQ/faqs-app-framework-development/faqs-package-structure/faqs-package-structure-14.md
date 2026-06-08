---
format: md
title: "如何判断应用可被卸载"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-14
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-14
last_sync: 2026-06-07
sync_hash: 49280a9e
upstream_hash: d477e4fff373
---

1. 使用bundleManager.getApplicationInfo获取应用程序信息。
2. ApplicationInfo具有removable属性，可用于判断应用是否可卸载。

**参考链接**

[ApplicationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-applicationinfo)
