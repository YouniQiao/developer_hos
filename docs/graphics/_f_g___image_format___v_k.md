---
title: "FG_ImageFormat_VK"
upstream_id: "harmonyos-references/_f_g___image_format___v_k"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:13.460742"
---

# FG_ImageFormat_VK

#### 概述

此结构体描述超帧输入输出图像的格式信息，该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

相关模块： [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

所在头文件： [frame_generation_vk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__vk_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkFormat [inputColorFormat](#inputcolorformat) | 真实渲染帧颜色缓冲区图像格式。 |
| VkFormat [inputDepthStencilFormat](#inputdepthstencilformat) | 深度模板缓冲区图像格式。 |
| VkFormat [outputColorFormat](#outputcolorformat) | 预测帧缓冲区图像格式。 |

#### 结构体成员变量说明

#### [h2]inputColorFormat

```
VkFormat FG_ImageFormat_VK::inputColorFormat
```
 描述

真实渲染帧颜色缓冲区图像格式。

#### [h2]inputDepthStencilFormat

```
VkFormat FG_ImageFormat_VK::inputDepthStencilFormat
```
 描述

深度模板缓冲区图像格式。

#### [h2]outputColorFormat

```
VkFormat FG_ImageFormat_VK::outputColorFormat
```
 描述

预测帧缓冲区图像格式。
