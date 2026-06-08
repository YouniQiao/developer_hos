---
format: md
title: "编译报错“Failed to generate test project build system”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-21
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-21
last_sync: 2026-06-07
sync_hash: 88c2c640
---
**问题现象**

执行多模块Native模块构建时，出现“Failed to generate test project build system.”错误信息。

![](./img/aff96bb7.png)

**解决措施**

请删除报错模块下的.cxx文件夹，然后选中需要构建的模块，执行Make Module \{moduleName\}完成单独构建。注意：此方案需避免多模块并行构建。

![](./img/3db5ce97.png)
