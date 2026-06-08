---
format: md
title: "编译报错“Duplicate 'routerMap' object names detected.”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-161
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-161
last_sync: 2026-06-07
sync_hash: 36894f05
---
**错误描述**

routerMap配置中存在重复名称。

**可能原因**

当前模块的router\_map.json文件中存在name重复的routerMap配置，或者当前模块与依赖模块之间存在name重复的routerMap配置。

![](./img/4195d922.png)

**解决措施**

修改router\_map.json文件中的name字段，确保其值唯一。
