---
format: md
title: "构建报错“proxy data is duplicated”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-112
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-112
last_sync: 2026-06-07
sync_hash: 60cc1fe6
---
**问题现象**

打包APP时，出现“uri datashareproxy://bundleName/\*\* in proxy data is duplicated”的提示。

![](./img/2183a9a8.png)

**解决措施**

proxyData 标识模块提供的数据代理列表，仅允许 entry 和 feature 配置，不同 proxyData 中配置的 URI 不得重复。遇到此问题，检查模块间是否配置了相同的 URI。

![](./img/157793f4.png)
