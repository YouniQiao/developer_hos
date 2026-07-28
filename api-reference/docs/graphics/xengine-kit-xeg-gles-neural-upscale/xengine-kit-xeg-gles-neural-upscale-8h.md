---
title: "xeg_gles_neural_upscale.h"
upstream_id: "harmonyos-references/xengine-kit-xeg-gles-neural-upscale-8h"
catalog: "harmonyos-references"
content_hash: "da27d2bdb194"
synced_at: "2026-07-28T16:52:26.361524"
---

# xeg_gles_neural_upscale.h

#### 概述

XEngine空域AI超分特性OpenGL ES接口。使用此头文件中的接口前需要通过[HMS_XEG_GetString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_getstring)接口查询[XEG_NEURAL_UPSCALE_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale_extension_name)或者[XEG_NEURAL_UPSCALE2_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale2_extension_name)扩展可用。

当[XEG_NEURAL_UPSCALE_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale_extension_name)扩展可用时，推荐超分倍率为(1.0, 1.5]。

当[XEG_NEURAL_UPSCALE2_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale2_extension_name)扩展可用时，推荐超分倍率为(1.0, 2.0]。

引用文件：<xengine/xeg_gles_neural_upscale.h>

库： libxengine.so

系统能力： SystemCapability.Graphic.XEngine

起始版本： 5.0.0(12)

相关模块： [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

#### 汇总

#### [h2]宏定义

| 名称 | 描述 |
| --- | --- |
| [XEG_NEURAL_UPSCALE_SCISSOR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale_scissor) 0x1U | 用于通过[HMS_XEG_NeuralUpscaleParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_neuralupscaleparameter)接口设置超分的裁剪窗口参数，裁剪窗口用于确定对输入图像采样的区域。 使用此宏定义设置裁剪窗口参数时，向接口传递的param值必须是长度为4的无符号整数数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。数组中的值依次为：x，y，width，height，其中x、y确定裁剪窗口的左下角，width、height分别确定裁剪窗口的宽和高。 可选参数，不设置裁剪窗口参数时的默认值为(0, 0, 输入纹理的宽, 输入纹理的高)。 |
| [XEG_NEURAL_UPSCALE_SHARPNESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale_sharpness) 0x2U | 用于通过[HMS_XEG_NeuralUpscaleParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_neuralupscaleparameter)接口设置超分的锐化度参数，锐化度的建议取值范围为[0.0, 1.0]。 使用此宏定义设置超分的锐化度参数时，向接口传递的param值必须是指向一个float值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，不设置锐化度参数时的默认值为0.2。 |
| [XEG_NEURAL_UPSCALE_INPUT_HANDLE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale_input_handle) 0x4U | 用于通过[HMS_XEG_NeuralUpscaleParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_neuralupscaleparameter)接口设置与超分输入纹理关联的OH_NativeBuffer handle。 当[XEG_NEURAL_UPSCALE_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale_extension_name)扩展可用时，该参数为必选参数。 当[XEG_NEURAL_UPSCALE2_EXTENSION_NAME](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_neural_upscale2_extension_name)扩展可用时，不需要设置该参数。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_NEURALUPSCALEPARAMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_neuralupscaleparameter)) (GLenum pname, GLvoid *param) | 设置空域AI超分输入参数的函数指针定义。 |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_RENDERNEURALUPSCALE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_renderneuralupscale)) (GLuint inputTexture) | 执行空域AI超分渲染命令的函数指针定义。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| GL_APICALL void GL_APIENTRY [HMS_XEG_NeuralUpscaleParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_neuralupscaleparameter) (GLenum pname, GLvoid *param) | 设置空域AI超分输入参数。 |
| GL_APICALL void GL_APIENTRY [HMS_XEG_RenderNeuralUpscale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_renderneuralupscale) (GLuint inputTexture) | 执行空域AI超分渲染命令。 |
