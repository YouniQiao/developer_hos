---
title: "xeg_vulkan_neural_upscale.h"
upstream_id: "harmonyos-references/xengine-kit-xeg-vulkan-neural-upscale-8h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:16.207672"
---

# xeg_vulkan_neural_upscale.h

#### 概述

XEngine空域AI超分特性Vulkan接口。使用此头文件的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_NEURAL_UPSCALE_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale_extension_name)扩展可用。

引用文件：<xengine/xeg_vulkan_neural_upscale.h>

库： libxengine.so

系统能力： SystemCapability.Graphic.XEngine

起始版本： 26.0.0

相关模块： [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

#### 汇总

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo) | 此结构体描述创建[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象。 |
| struct [XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription) | 此结构体描述下发空域AI超分渲染命令时需要的图像信息。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| VK_DEFINE_HANDLE([XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)) | [XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)的句柄。 |
| typedef struct [XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo) XEG_NeuralUpscaleCreateInfo | 此结构体描述创建[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象。 |
| typedef struct [XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription) XEG_NeuralUpscaleDescription | 此结构体描述下发空域AI超分渲染命令时需要的图像信息。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateNeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_createneuralupscale)) (VkDevice device, const [XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo) *pCreateInfo, [XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale) *pNeuralUpscale) | 创建[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象的函数指针定义。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CmdRenderNeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_cmdrenderneuralupscale)) (VkCommandBuffer commandBuffer, [XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale) neuralUpscale, const [XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription) *pDescription) | 执行空域AI超分渲染命令的函数指针定义。 |
| typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroyNeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_destroyneuralupscale)) ([XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale) neuralUpscale) | 销毁[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象的函数指针定义。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateNeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_createneuralupscale)(VkDevice device, const [XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo) *pCreateInfo, [XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale) *pNeuralUpscale) | 创建[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdRenderNeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_cmdrenderneuralupscale)(VkCommandBuffer commandBuffer, [XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale) neuralUpscale, const [XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription) *pDescription) | 执行空域AI超分渲染命令。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyNeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_destroyneuralupscale)([XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale) neuralUpscale) | 销毁[XEG_NeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neuralupscale)对象。 |
