---
format: md
title: "编译报错“Failed to obtain the module type.”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-162
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-162
last_sync: 2026-06-07
sync_hash: 6455dc9e
---
**错误描述**

未找到指定的模块类型。

**可能原因**

在FA模型中，config.json文件中的module/distro/moduleType字段缺失或配置错误。

![](./img/fd0827eb.png)

**解决措施**

确保在FA模型的config.json文件中，module/distro/moduleType字段存在且配置正确。
