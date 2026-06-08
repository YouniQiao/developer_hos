---
title: "在DevEco Studio无法开启热重载功能"
original_url: /docs/dev/atomic-dev/ascf/faqs-ascf-plugin/faqs-plugin-hot-reload
format: md
upstream_id: dev/atomic-dev/ascf/faqs-ascf-plugin/faqs-plugin-hot-reload
last_sync: 2026-06-07
sync_hash: c6789e6f
---
**问题现象**

“选择运行/调试配置（Select Run/Debug Configuration）”菜单中选择 ![](./img/496be4cf.png) 标志的entry，按钮数量没有变化（热重载模式只会保留启动![](./img/c680c328.png)和停止![](./img/97083a87.png)按钮）。

**可能原因**

ASCF Plugin版本低于最低依赖版本要求。

**解决措施**

请将ASCF Plugin版本升级至1.0.4.200以上，方法请参考：[自动升级ASCF Plugin](/docs/dev/atomic-dev/ascf/ascf-plugin#自动升级ascf-plugin)。
