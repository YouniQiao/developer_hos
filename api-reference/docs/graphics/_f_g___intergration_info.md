---
title: "FG_IntegrationInfo"
upstream_id: "harmonyos-references/_f_g___intergration_info"
catalog: "harmonyos-references"
content_hash: "8d99cc0e28ee"
synced_at: "2026-07-09T01:01:07.939667"
---

# FG_IntegrationInfo

#### 概述

此结构体描述超帧集成的信息。包括送显模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。仅在[FG_PredictionMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_predictionmode-1)为FG_PREDICTION_MODE_INTERPOLATION时生效。

起始版本：5.1.0(18)

相关模块： [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

所在头文件： [frame_generation_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__base_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [FG_PresentMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#fg_presentmode) [presentMode](#presentmode) | 预测帧展示模式。 |
| bool [textureCachedByGame](#texturecachedbygame) | 深度纹理和颜色纹理是否被游戏单独缓存来用于超帧。缓存情况下算法将直接使用不再额外缓存。 false：算法自行缓存和管理纹理，默认值。 true：直接使用游戏缓存，不再额外缓存。 |
| bool [needFlipInputColor](#needflipinputcolor) | 输入的颜色纹理是否需要翻转。需要翻转情况下，算法映射Y轴坐标读取颜色纹理。 false：不需要翻转，默认值。 true：需要翻转。 |
| bool [needFlipOutputColor](#needflipoutputcolor) | 预测帧是否需要翻转。需要翻转情况下，算法映射Y轴坐标进行翻转输出。 false：不需要翻转，默认值。 true：需要翻转。 |

#### 结构体成员变量说明

#### [h2]presentMode

```
FG_PresentMode FG_IntegrationInfo::presentMode
```
 描述

预测帧展示模式。

#### [h2]textureCachedByGame

```
bool FG_IntegrationInfo::textureCachedByGame
```
 描述

深度纹理和颜色纹理是否被游戏单独缓存来用于超帧。缓存情况下算法将直接使用不再额外缓存。

#### [h2]needFlipInputColor

```
bool FG_IntegrationInfo::needFlipInputColor
```
 描述

输入的颜色纹理是否需要翻转。需要翻转情况下，算法映射Y轴坐标读取颜色纹理。

#### [h2]needFlipOutputColor

```
bool FG_IntegrationInfo::needFlipOutputColor
```
 描述

预测帧是否需要翻转。需要翻转情况下，算法映射Y轴坐标进行翻转输出。
