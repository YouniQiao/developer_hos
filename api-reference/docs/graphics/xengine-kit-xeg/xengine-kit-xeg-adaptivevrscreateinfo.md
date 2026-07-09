---
title: "XEG_AdaptiveVRSCreateInfo"
upstream_id: "harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo"
catalog: "harmonyos-references"
content_hash: "872232b04c1f"
synced_at: "2026-07-09T01:01:10.044654"
---

# XEG_AdaptiveVRSCreateInfo

#### 概述

此结构体描述创建[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象的参数信息，当结构体中的信息变化时，需要创建新的[XEG_AdaptiveVRS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_adaptivevrs)对象。

起始版本： 5.0.0(12)

相关模块： [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

所在头文件： [xeg_vulkan_adaptive_vrs.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-adaptive-vrs-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkExtent2D [inputSize](#inputsize) | 上一帧渲染管线最终渲染的图像尺寸。 |
| VkRect2D [inputRegion](#inputregion) | 上一帧渲染管线最终渲染的图像区域。此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为渲染图像区域的左上角点的x与y值，extent为渲染图像区域的宽与高。 |
| int32_t [adaptiveTileSize](#adaptivetilesize) | 自适应VRS(Variable Rate Shading，可变速率着色)的渲染的分片大小，分片大的情况下性能会更好，但是画质会劣化。当前自适应VRS支持16和8两种规格。 |
| float [errorSensitivity](#errorsensitivity) | 控制最终生成着色率纹理结果的阈值。该值越大，平均着色率越小，即性能更好但画质会劣化。取值范围为[0.0, 1.0]。 |
| bool [flip](#flip) | 是否执行图像上下翻转。true表示进行图像上下翻转，false表示不进行图像上下翻转。 |

#### 结构体成员变量说明

#### [h2]adaptiveTileSize

```
int32_t XEG_AdaptiveVRSCreateInfo::adaptiveTileSize
```
 描述

自适应VRS（Variable Rate Shading，可变速率着色）的渲染的分片大小，分片大的情况下性能会更好，但是画质会劣化。当前自适应VRS支持16和8两种规格。

#### [h2]errorSensitivity

```
float XEG_AdaptiveVRSCreateInfo::errorSensitivity
```
 描述

控制最终生成着色率纹理结果的阈值。该值越大，平均着色率越小，即性能更好但画质会劣化。取值范围为[0.0, 1.0]。

#### [h2]flip

```
bool XEG_AdaptiveVRSCreateInfo::flip
```
 描述

是否执行图像上下翻转。true表示进行图像上下翻转，false表示不进行图像上下翻转。

#### [h2]inputRegion

```
VkRect2D XEG_AdaptiveVRSCreateInfo::inputRegion
```
 描述

上一帧渲染管线最终渲染的图像区域。此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为渲染图像区域的左上角点的x与y值，extent为渲染图像区域的宽与高。

#### [h2]inputSize

```
VkExtent2D XEG_AdaptiveVRSCreateInfo::inputSize
```
 描述

上一帧渲染管线最终渲染的图像尺寸。
