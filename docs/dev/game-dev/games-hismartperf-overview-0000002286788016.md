---
title: "业务介绍"
original_url: /docs/dev/game-dev/games-hismartperf-overview-0000002286788016
format: md
upstream_id: dev/game-dev/games-hismartperf-overview-0000002286788016
last_sync: 2026-06-07
sync_hash: e2bd4350
---
|  |  |
| --- | --- |
| 随着手机游戏的大规模发展，企业越来越关注应用的质量和性能，存在性能隐患的游戏对日活、留存会产生较严重的影响，对此，华为推出了游戏性能调优工具。工具依托华为在操作系统的技术积累，具备HarmonyOS 5.0及以上、HarmonyOS 3.1/4.0及以下、Android、快游戏平台性能的测试、分析能力，可通过工具监测，准确、高效地采集到游戏运行时的CPU、GPU等性能数据，了解游戏的性能状况。您可以使用工具测试游戏、查看报告、分析问题、调优程序，在游戏优化之后，使用工具再次验证优化收益。 |  |

## 平台支持说明

| 平台 | 是否已支持 |
| --- | --- |
| HarmonyOS 5.0及以上 | ![](./img/9a7bd9ad.png) |
| HarmonyOS 3.1/4.0及以下 | ![](./img/8dbe3aa0.png) |
| Android | ![](./img/9005e621.png) |
| iOS | ![](./img/8aef7a60.png) |
| 快游戏/微信小游戏 | ![](./img/07ce7411.png) |

## 主要功能

| 主要功能 | 功能描述 |
| --- | --- |
| 游戏性能测试 | 准确、高效、全面地采集系统、CPU以及GPU的性能数据，帮助您深度分析游戏的性能情况。  说明：  游戏性能调优服务还提供了HiSmartPerf-Device工具，支持在手机/平板上简单、快捷地采集FPS、功耗、温度、负载等基础性能数据，帮助您快速了解游戏的性能情况，详情请参见[Device](/docs/dev/game-dev/games-hismartperf-device-0000002286844738)。 |
| 其他功能 | * [整机测试](/docs/dev/game-dev/games-hismartperf-systemtest-0000002286788036)：提供RS树可视化展示、多应用内存数据测试、设备日志查看和设备状态监测工具。 * [其他工具](/docs/dev/game-dev/games-hismartperf-others-0000002321517305)：提供Graphics Profiler等辅助工具，可方便您进一步问题定位与应用调试。 |

## 实现流程

### Editor

![](./img/ebb4946c.png)

| 操作步骤 | 说明 |
| --- | --- |
| [准备工作](/docs/dev/game-dev/games-hismartperf-preparation-0000002286788020) | 提前做好注册开发者账号、安装工具等准备工作。 |
| [设置采集要求](/docs/dev/game-dev/games-hismartperf-setting-0000002321517289) | 在游戏性能调优工具中设置采集参数。 |
| [采集性能数据](/docs/dev/game-dev/games-hismartperf-collection-0000002321404205) | 根据设置的采集参数，在游戏性能调优工具中采集性能数据。 |
| [分析性能数据](/docs/dev/game-dev/games-hismartperf-management-0000002286844722) | 解读测试报告中的性能数据。 |

### Device

![](./img/5f5e857c.png)

| 操作步骤 | 说明 |
| --- | --- |
| 设置采集要求 | 在游戏性能调优工具中设置采集参数。 |
| 采集性能数据 | 根据设置的采集参数，在游戏性能调优工具中采集性能数据。 |
| 分析性能数据 | 解读测试报告中的性能数据。 |

## 如何收费

免费。
