---
format: md
title: "多Module应用通过startAbility()启动时报错"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-20
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-20
last_sync: 2026-06-07
sync_hash: d9ffc714
---
**原因**

在同一个工程和设备中存在多个模块，并且这些模块之间存在调用关系，但并非所有HAP包都已安装到设备中。

**解决措施**

单击Run > Edit Configurations，设置指定模块的HAP安装方式，勾选“Keep Application Data”，表示采用覆盖安装方式，保留应用和服务的缓存数据。

![](./img/a8c62534.png "点击放大")

**参考链接**

[设置HAP安装方式](/docs/tools/coding-debug/ide-run-debug-configurations#section531811771410)

[module.json5配置文件](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)
