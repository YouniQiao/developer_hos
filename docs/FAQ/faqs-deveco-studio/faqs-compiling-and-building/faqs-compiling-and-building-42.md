---
format: md
title: "编译报错“Property 'XX' does not exist on type 'typeof BuildProfile'”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-42
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-42
last_sync: 2026-06-07
sync_hash: e83938c4
---
**问题现象**

本地HSP模块对外提供的接口中使用了未在HAP中定义的自定义参数BuildProfileFields。HAP引用了HSP中的该接口，导致编译失败，提示“Property 'XX' does not exist on type 'typeof BuildProfile'”。

![](./img/b5995800.png)

**解决措施**

采用以下两种方式解决该问题：

* 在HAP中配置与HSP相同的自定义参数BuildProfileFields。
* 将与HSP相同的自定义参数BuildProfileFields配置到工程级build-profile.json5中。这种方法会使HSP中的自定义参数在全局生效。
