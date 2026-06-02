---
title: "个人数据处理说明"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-hismartperf-personaldata-0000002321517309
has_merged_cells: true
---

此文档针对华为作为最终数据处理者，开发者作为最终数据控制者的数据处理进行说明，包括：

* 华为处理的个人数据清单
* 指导开发者如何实现对数据的控制

## 华为处理的个人数据清单

| 个人数据清单 | | 使用目的 | 存留期 |
| --- | --- | --- | --- |
| teamId | | 团队ID，开发者团队管理的唯一标识。 | 仅在上传和查看报告时使用，不会保存。 |
| projectId | | 项目ID，开发者项目管理的唯一标识。 |
| userId | | 华为账号ID，开发者身份的唯一标识。 |
| 游戏性能数据信息 | 设备信息、应用信息、性能数据（系统数据、GPU counter、CPU trace） | 用于开发者的游戏性能测试数据管理和分析。 | 1年。  说明：  单项目超过1000份报告时，会自动删除相关旧数据。 |

## 指导开发者如何实现对数据的控制

* 如何清除数据

  游戏性能调优工具最多保存最近1年的数据，超期将会自动删除。同时可通过删除云端报告、项目或开发者账号，以删除相关数据。
* 如何上传数据

  基于HiSmartPerf-Editor工具，将本地测试报告上传至云端后，团队账号可共同查看测试报告，具体请参见[上传报告](https://developer.huawei.com/consumer/cn/doc/games-guides/games-hismartperf-cloudview-0000002321404213#section1365144213172)。
