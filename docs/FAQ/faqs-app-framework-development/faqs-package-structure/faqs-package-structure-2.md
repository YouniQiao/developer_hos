---
format: md
title: "HSP打包后，为什么会生成HAR包，它是否会导致App包大小膨胀"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-2
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-2
last_sync: 2026-06-07
sync_hash: 334ce93e
---
HSP编译生成的HAR包仅包含配置文件和接口定义，不包含代码逻辑。该HAR包仅用于开发阶段，不会影响App包的大小。
