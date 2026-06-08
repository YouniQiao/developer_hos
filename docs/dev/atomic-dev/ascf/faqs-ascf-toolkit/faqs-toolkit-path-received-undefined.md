---
title: "路径不可用报错"
original_url: /docs/dev/atomic-dev/ascf/faqs-ascf-toolkit/faqs-toolkit-path-received-undefined
format: md
upstream_id: dev/atomic-dev/ascf/faqs-ascf-toolkit/faqs-toolkit-path-received-undefined
last_sync: 2026-06-07
sync_hash: 14b7b2a2
---
**问题现象**

使用命令行转换工具时报错：“TypeError [ERR\_INVALID\_ARG\_TYPE]: The "path" argument must be of type string. Received undefined”

**解决措施**

* 方法一：确认输入路径是否存在且正确。
* 方法二：检查源项目中app.json文件是否存在，JSON结构是否存在格式错误。
