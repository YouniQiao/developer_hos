---
title: "Relationship Window概述"
original_url: /docs/dev/game-dev/pgd-tool-window-overview-0000002526434903
format: md
upstream_id: dev/game-dev/pgd-tool-window-overview-0000002526434903
last_sync: 2026-06-07
sync_hash: ff9f3b3f
---
Relationship Window是一套专为PGD设计的可视化调试与分析工具。该工具包含以下特性：

* 逻辑可视化：清晰展示System（系统）通过Query（查询）筛选和处理的数据集合。
* 数据反查：快速定位Component（组件）被使用的系统集合，以及被挂载的实体集合。
* 运行时监控：实时监控Entity（实体）的处理状态、组件挂载情况以及数值变化。

该工具共包含三个核心视窗（[System窗口](/docs/dev/game-dev/pgd-tool-window-system-0000002526440151)、[Component窗口](/docs/dev/game-dev/pgd-tool-window-component-0000002494360504)、[Entity窗口](/docs/dev/game-dev/pgd-tool-window-entity-0000002494200518)），分别对应ECS的三个组成部分。这三个维度的窗口帮助开发者实时观测ECS世界的底层运行状态、数据流向及逻辑依赖关系。

## 视觉图例

为了帮助开发者快速区分信息类型，工具采用了统一的颜色编码。

| 元素类型 | 颜色 | 含义 |
| --- | --- | --- |
| 系统（System） | 橙色 | 逻辑处理单元。 |
| 查询（Query） | 紫色 | 筛选条件。 |
| 组件（Component/Tag） | 蓝色 | 数据组件。 |
| 实体（Entity） | 绿色 | 实体对象。 |
