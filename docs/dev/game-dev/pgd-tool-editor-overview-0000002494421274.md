---
title: "PGD Editor概述"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-tool-editor-overview-0000002494421274
format: md
---


PGD Editor是一套以引擎编辑器为核心的PGD构建工具，支持游戏创作者使用熟悉的GameObject工作流程来完成基于PGD的游戏逻辑设计。包括如下组件：

| 组件 | 说明 |
| --- | --- |
| [PGD World组件](https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-tool-editor-world-0000002526500915) | PGD World组件为World管理模块。  通过创建该组件可以新建IECSWorld，实时显示World中的实体数量，并提供给PGD Entity等组件使用。 |
| [PGD Entity组件](https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-tool-editor-entity-0000002494421276) | PGD Entity为实体操作模块。  通过可视化方式操作实体。 |
| [PGD Systems组件](https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-tool-editor-systems-0000002494261300) | PGD Systems组件为系统操作模块。  通过对该组件的Inspector进行配置，即可完成PGD中System集合的初始化运行。同时，系统的运行状态也将在Inspector中进行可视化展示。 |
| [PGD Spawner组件](https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-tool-editor-spawner-0000002526540939) | PGD Spawner组件用于对工程中的Prefab资产进行管理。  通过与已创建好的PGD Entity组件进行映射配置绑定，实现基于对象池管理机制，并通过极简代码在运行时基于Prefab进行对象派生。 |
