---
format: md
title: "编译报错“There are some dependency names that are inconsistent with the actual package names”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-144
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-144
last_sync: 2026-06-07
sync_hash: 8af8d8f1
---
**错误描述**

依赖名称与包名称不匹配。

**可能原因**

依赖名称与依赖包中oh-package.json5文件的name字段不一致。

![](./img/efd13ba3.png)

**解决措施**

将依赖名修改为依赖包在oh-package.json5中定义的name。
