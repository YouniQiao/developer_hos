---
title: "FG_ResolutionInfo"
upstream_id: "harmonyos-references/_f_g___resolution_info"
catalog: "harmonyos-references"
content_hash: "2e5f0f0839a7"
synced_at: "2026-07-09T01:01:07.852524"
---

# FG_ResolutionInfo

#### 概述

此结构体描述超帧输入输出图像的分辨率。

起始版本： 5.0.0(12)

相关模块： [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

所在头文件： [frame_generation_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__base_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [FG_Dimension2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dimension2_d) [inputColorResolution](#inputcolorresolution) | 真实渲染帧颜色缓冲区分辨率。 |
| [FG_Dimension2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dimension2_d) [inputDepthStencilResolution](#inputdepthstencilresolution) | 真实渲染帧深度模板缓冲区分辨率。当设置成0时，系统中会默认使用[inputColorResolution](#inputcolorresolution)作为真实帧深度模板缓冲区分辨率。 |
| [FG_Dimension2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dimension2_d) [outputColorResolution](#outputcolorresolution) | 预测帧缓冲区分辨率。当设置成0时，系统中会默认使用[inputColorResolution](#inputcolorresolution)作为预测帧缓冲区分辨率。 |

#### 结构体成员变量说明

#### [h2]inputColorResolution

```
FG_Dimension2D FG_ResolutionInfo::inputColorResolution
```
 描述

真实渲染帧颜色缓冲区分辨率。

#### [h2]inputDepthStencilResolution

```
FG_Dimension2D FG_ResolutionInfo::inputDepthStencilResolution
```
 描述

真实渲染帧深度模板缓冲区分辨率。当设置成0时，系统中会默认使用[inputColorResolution](#inputcolorresolution)作为真实帧深度模板缓冲区分辨率。

#### [h2]outputColorResolution

```
FG_Dimension2D FG_ResolutionInfo::outputColorResolution
```
 描述

预测帧缓冲区分辨率。当设置成0时，系统中会默认使用[inputColorResolution](#inputcolorresolution)作为预测帧缓冲区分辨率。
