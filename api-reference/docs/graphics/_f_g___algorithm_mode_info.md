---
title: "FG_AlgorithmModeInfo"
upstream_id: "harmonyos-references/_f_g___algorithm_mode_info"
catalog: "harmonyos-references"
content_hash: "c1b4b61f31f1"
synced_at: "2026-07-09T01:01:07.236380"
---

# FG_AlgorithmModeInfo

#### 概述

此结构体描述超帧算法模式信息。

起始版本： 5.0.0(12)

相关模块： [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

所在头文件： [frame_generation_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__base_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [FG_PredictionMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_predictionmode-1) [predictionMode](#predictionmode) | 超帧预测算法模式，支持内插模式和外插模式。 |
| [FG_MeMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_memode-1) [meMode](#memode) | 超帧运动估计算法模式，支持基础模式和增强模式。 |

#### 结构体成员变量说明

#### [h2]meMode

```
FG_MeMode FG_AlgorithmModeInfo::meMode
```
 描述

超帧运动估计算法模式，支持基础模式和增强模式。

#### [h2]predictionMode

```
FG_PredictionMode FG_AlgorithmModeInfo::predictionMode
```
 描述

超帧预测算法模式，支持内插模式和外插模式。
