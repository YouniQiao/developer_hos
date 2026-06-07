---
format: md
title: "编译报错“Duplicate 'Module-Abilities' object names detected.”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-167
---


**错误描述**

Module-Abilities对象名称重复。

**可能原因**

依赖的HAR模块中module.json5的abilities数组中存在重复的ability对象名称。

![](./img/f6a051f5.png)

**解决措施**

检查依赖的HAR模块在module.json5文件中的abilities字段，确保每个ability的name唯一。
