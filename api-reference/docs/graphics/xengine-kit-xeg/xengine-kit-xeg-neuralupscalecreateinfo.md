---
title: "XEG_NeuralUpscaleCreateInfo"
upstream_id: "harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo"
catalog: "harmonyos-references"
content_hash: "a220640daea4"
synced_at: "2026-07-09T01:01:11.233735"
---

# XEG_NeuralUpscaleCreateInfo

#### 概述

此结构体描述创建[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象。

起始版本： 26.0.0

相关模块： [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

所在头文件： [xeg_vulkan_neural_upscale.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-neural-upscale-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| XEG_StructureType [sType](#stype) | 识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_NEURAL_UPSCALE_CREATE_INFO。 |
| const void * [pNext](#pnext) | 指向扩展结构的指针。若无扩展结构，应设为nullptr。 |
| VkExtent2D [inputSize](#inputsize) | 超分输入图像的尺寸，必须与超分输入图像的VkImageView的尺寸一致，否则会导致超分失败、程序崩溃等问题。 |
| VkRect2D [inputRegion](#inputregion) | 超分输入图像的采样区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染效果不符合预期、渲染失败等问题。此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。 |
| VkExtent2D [outputSize](#outputsize) | 超分输出图像的尺寸，必须与超分结果VkImageView的尺寸一致，否则会导致超分失败、程序崩溃等问题。 |
| VkRect2D [outputRegion](#outputregion) | 超分输出图像的绘制区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染效果不符合预期、渲染失败等问题。此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。 |
| VkFormat [outputFormat](#outputformat) | 超分输出图像的格式。 |

#### 结构体成员变量说明

#### [h2]sType

```
XEG_StructureType XEG_NeuralUpscaleCreateInfo::sType
```
 描述

识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_NEURAL_UPSCALE_CREATE_INFO。

#### [h2]pNext

```
const void* XEG_NeuralUpscaleCreateInfo::pNext
```
 描述

指向扩展结构的指针。若无扩展结构，应设为nullptr。

#### [h2]inputSize

```
VkExtent2D XEG_NeuralUpscaleCreateInfo::inputSize
```
 描述

超分输入图像的尺寸，必须与超分输入图像的VkImageView的尺寸一致，否则会导致超分失败、程序崩溃等问题。

#### [h2]inputRegion

```
VkRect2D XEG_NeuralUpscaleCreateInfo::inputRegion
```
 描述

超分输入图像的采样区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染效果不符合预期、渲染失败等问题。此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。

#### [h2]outputSize

```
VkExtent2D XEG_NeuralUpscaleCreateInfo::outputSize
```
 描述

超分输出图像的尺寸，必须与超分结果VkImageView的尺寸一致，否则会导致超分失败、程序崩溃等问题。

#### [h2]outputRegion

```
VkRect2D XEG_NeuralUpscaleCreateInfo::outputRegion
```
 描述

超分输出图像的绘制区域，图像超分区域参数必须大于0且小于等于图像尺寸，否则会导致渲染效果不符合预期、渲染失败等问题。此参数存在两个结构体：VkOffset2D offset和VkExtent2D extent。其中offset为图像区域的左上角点的x与y值，extent为图像区域的宽与高。

#### [h2]outputFormat

```
VkFormat XEG_NeuralUpscaleCreateInfo::outputFormat
```
 描述

超分输出图像的格式。
