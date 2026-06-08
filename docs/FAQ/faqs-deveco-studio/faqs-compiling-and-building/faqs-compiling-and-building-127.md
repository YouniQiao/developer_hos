---
format: md
title: "如何解决编译报错“Declaration merging is not supported(arkts-no-decl-merging)” 或 “Cannot redeclare block-scoped variable 'xxx'”的问题"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-127
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-127
last_sync: 2026-06-07
sync_hash: a8f76264
---
**问题现象**

在不同的文件中声明相同变量、interface、enum等类型，DevEco Studio不报错，但编译时会报错。

![](./img/abc30fa6.png)

**解决方案**

如果文件中不包含export关键字，该文件将视为全局命名空间的一部分。
