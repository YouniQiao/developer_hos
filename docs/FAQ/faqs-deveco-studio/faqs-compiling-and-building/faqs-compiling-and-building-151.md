---
format: md
title: "编译报错“The name of the 'xxx' module must be a string, but received a value of type 'xxx'.”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-151
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-151
last_sync: 2026-06-07
sync_hash: 9c7a84cb
upstream_hash: c1d9d8f870fd
---

**错误描述**

模块名称必须是字符串类型。

**可能原因**

模块下oh-package.json5中配置的模块名name字段，配置值不是字符串类型。

**解决措施**

在模块的oh-package.json5文件中，将name字段的值修改为字符串类型。
