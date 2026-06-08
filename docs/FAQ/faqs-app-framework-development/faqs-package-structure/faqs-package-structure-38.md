---
format: md
title: "HAR包是否支持依赖传递"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-38
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-38
last_sync: 2026-06-07
sync_hash: 5e14b748
upstream_hash: 37a1cd6e5866
---

**问题现象**

例如，有三个HAR分别为A、B、C，A依赖B，B依赖C。A可以直接引用C的资源。

**解决措施**

A不能直接引用C的资源。A需直接依赖C，才能进行引用。
