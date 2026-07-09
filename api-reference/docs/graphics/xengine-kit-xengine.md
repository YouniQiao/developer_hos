---
title: "XEngine"
upstream_id: "harmonyos-references/xengine-kit-xengine"
catalog: "harmonyos-references"
content_hash: "4e02cb70e0d7"
synced_at: "2026-07-09T01:01:09.885932"
---

# XEngine

#### 概述

提供XEngine图形相关能力接口。

系统能力： SystemCapability.Graphic.XEngine

起始版本： 5.0.0(12)

#### 汇总

#### [h2]文件

| 名称 | 描述 |
| --- | --- |
| [xeg_extension_defs.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extension-defs-8h) | 提供XEngine扩展特性宏定义信息。 |
| [xeg_gles_adaptive_vrs.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-gles-adaptive-vrs-8h) | XEngine自适应VRS（Variable Rate Shading，可变速率着色）特性GLES接口。使用此头文件的接口前需要通过[HMS_XEG_GetString](#hms_xeg_getstring)接口查询[XEG_ADAPTIVE_VRS_EXTENSION_NAME](#xeg_adaptive_vrs_extension_name)扩展可用。 |
| [xeg_gles_extension.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-gles-extension-8h) | XEngine扩展特性查询接口（OpenGL ES）。 |
| [xeg_gles_neural_upscale.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-gles-neural-upscale-8h) | XEngine空域AI超分特性OpenGL ES接口。使用此头文件中的接口前需要通过[HMS_XEG_GetString](#hms_xeg_getstring)接口查询[XEG_NEURAL_UPSCALE_EXTENSION_NAME](#xeg_neural_upscale_extension_name)或者[XEG_NEURAL_UPSCALE2_EXTENSION_NAME](#xeg_neural_upscale2_extension_name)扩展可用。[XEG_NEURAL_UPSCALE_EXTENSION_NAME](#xeg_neural_upscale_extension_name)扩展可用时，推荐超分倍率为(1.0, 1.5]。[XEG_NEURAL_UPSCALE2_EXTENSION_NAME](#xeg_neural_upscale2_extension_name)扩展可用时，推荐超分倍率为(1.0, 2.0]。 |
| [xeg_gles_spatial_upscale.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-gles-spatial-upscale-8h) | XEngine空域GPU超分特性OpenGL ES接口。使用此头文件的接口前需要通过[HMS_XEG_GetString](#hms_xeg_getstring)接口查询[XEG_SPATIAL_UPSCALE_EXTENSION_NAME](#xeg_spatial_upscale_extension_name)扩展可用。 |
| [xeg_gles_temporal_upscale.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-gles-temporal-upscale-8h) | XEngine时域AI超分特性OpenGL ES接口。推荐超分倍率为[1.25, 2.0]，使用此头文件中的接口前需要通过[HMS_XEG_GetString](#hms_xeg_getstring)接口查询[XEG_TEMPORAL_UPSCALE_EXTENSION_NAME](#xeg_temporal_upscale_extension_name)扩展可用。 |
| [xeg_vulkan_adaptive_vrs.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-adaptive-vrs-8h) | XEngine自适应VRS（Variable Rate Shading，可变速率着色）特性vulkan接口。使用此头文件的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_ADAPTIVE_VRS_EXTENSION_NAME](#xeg_adaptive_vrs_extension_name)扩展可用。 |
| [xeg_vulkan_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-common-8h) | 包含XEngine中Vulkan相关的通用类型定义。 |
| [xeg_vulkan_extension.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-extension-8h) | XEngine 扩展特性查询接口（Vulkan）。 |
| [xeg_vulkan_hps.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-hps-8h) | XEngine 高性能着色器接口。使用此头文件中的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展可用。 |
| [xeg_vulkan_rt_reflection.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rt-reflection-8h) | XEngine Ray-Traced Reflection（光线追踪反射）特性接口。使用此头文件中的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询 [XEG_RT_REFLECTION_EXTENSION_NAME](#xeg_rt_reflection_extension_name)扩展可用。 |
| [xeg_vulkan_rt_visible_mask.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rt-visible-mask-8h) | XEngine Ray-Traced VisibleMask（光线追踪阴影和环境光遮蔽）特性接口。使用此头文件中的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_RT_SHADOW_AO_EXTENSION_NAME](#xeg_rt_shadow_ao_extension_name)扩展可用。 |
| [xeg_vulkan_rtgi.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rtgi-8h) | XEngine光线追踪全局光照特性Vulkan接口，提供动态漫反射全局光照（DDGI）及神经网络全局光照（NNGI）两种特性。使用此头文件的接口前，需要先调用[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询扩展[XEG_RTGI_EXTENSION_NAME](#xeg_rtgi_extension_name)可用。 |
| [xeg_vulkan_spatial_upscale.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-spatial-upscale-8h) | XEngine空域GPU超分特性Vulkan接口。使用此头文件的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_SPATIAL_UPSCALE_EXTENSION_NAME](#xeg_spatial_upscale_extension_name)扩展可用。 |
| [xeg_vulkan_temporal_upscale.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-temporal-upscale-8h) | XEngine时域AI超分特性接口，推荐超分倍率为[1.25, 2.0]。使用此头文件中的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_TEMPORAL_UPSCALE_EXTENSION_NAME](#xeg_temporal_upscale_extension_name)扩展可用。 |
| [xeg_vulkan_neural_upscale.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-neural-upscale-8h) | XEngine空域AI超分特性Vulkan接口。使用此头文件的接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询[XEG_NEURAL_UPSCALE_EXTENSION_NAME](#xeg_neural_upscale_extension_name)扩展可用。 |
| [xeg_control_display_separation.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-control-display-separation) | XEngine控显分离特性接口。 |

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo) | 此结构体描述创建[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象的参数信息，当结构体中的信息变化时，需要创建新的[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。 |
| struct [XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription) | 此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。 |
| struct [XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties) | 此结构体描述通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询到的XEngine扩展特性集合。 |
| struct [XEG_HPSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpscreateinfo) | 此结构体描述创建[XEG_HPS](#xeg_hps)对象的信息。 |
| struct [XEG_HPSRadixSort](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsort) | 此结构体描述HPS基数排序扩展结构信息。 |
| struct [XEG_HPSRadixSortDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsortdescription) | 此结构体描述使用[XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展进行排序时所需的信息。 |
| struct [XEG_RTReflectionCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectioncreateinfo) | 此结构体描述创建[XEG_RTReflection](#xeg_rtreflection)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_RTReflection](#xeg_rtreflection)对象。 |
| struct [XEG_RTReflectionDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectiondescription) | 此结构体描述下发光线求交命令时的输入信息。 |
| struct [XEG_RTShadowAOCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaocreateinfo) | 此结构体描述创建支持光线追踪阴影和环境光遮蔽效果[XEG_RTVisibleMask](#xeg_rtvisiblemask)实例的初始化信息。当结构体中的信息变化时，需要创建新的[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象。 |
| struct [XEG_RTShadowParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowparameters) | 光线追踪阴影（Shadow）算法参数。 |
| struct [XEG_RTAOParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtaoparameters) | 光线追踪环境光遮蔽（AO）算法参数。 |
| struct [XEG_RTShadowAODenoiserParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaodenoiserparameters) | 光线追踪阴影和环境光遮蔽算法去噪参数。 |
| struct [XEG_RTShadowAODescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaodescription) | 此结构体描述光线追踪阴影和环境光遮蔽算法渲染命令的输入信息。 |
| struct [XEG_DDGIVolumeEntryParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgivolumeentryparameters) | 此结构体描述每一个DDGI体积的必要参数。 |
| struct [XEG_DDGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgicreateinfo) | 此结构体描述创建具有DDGI特性的[XEG_RTGI](#xeg_rtgi)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_RTGI](#xeg_rtgi)对象。 |
| struct [XEG_DDGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgidescription) | 此结构体描述更新DDGI探针辐照度及渲染输出GI图像所需的信息。 |
| struct [XEG_NNGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngicreateinfo) | 此结构体描述创建具有NNGI特性的[XEG_RTGI](#xeg_rtgi)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_RTGI](#xeg_rtgi)对象。 |
| struct [XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription) | 此结构体描述更新NNGI用于计算光线追踪全局光照的所需的信息。 |
| struct [XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo) | 此结构体描述创建[XEG_SpatialUpscale](#xeg_spatialupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_SpatialUpscale](#xeg_spatialupscale)对象。 |
| struct [XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription) | 此结构体描述下发空域GPU超分渲染命令时需要的图像信息。 |
| struct [XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo) | 此结构体描述创建[XEG_TemporalUpscale](#xeg_temporalupscale)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_TemporalUpscale](#xeg_temporalupscale)对象。 |
| struct [XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription) | 此结构体描述下发时域AI超分渲染命令时的输入信息。 |
| struct [XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo) | 此结构体描述创建[XEG_NeuralUpscale](#xeg_neuralupscale)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_NeuralUpscale](#xeg_neuralupscale)对象。 |
| struct [XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription) | 此结构体描述下发空域AI超分渲染命令时的输入信息。 |

#### [h2]宏定义

| 名称 | 描述 |
| --- | --- |
| [XEG_spatial_upscale](#xeg_spatial_upscale) 1 | XEngine空域GPU超分扩展特性宏定义。 |
| [XEG_SPATIAL_UPSCALE_VERSION](#xeg_spatial_upscale_version) 1 | XEngine空域GPU超分扩展特性版本号。 |
| [XEG_SPATIAL_UPSCALE_EXTENSION_NAME](#xeg_spatial_upscale_extension_name) "XEG_spatial_upscale" | XEngine空域GPU超分扩展特性名称。 |
| [XEG_neural_upscale](#xeg_neural_upscale) 1 | XEngine空域AI超分扩展特性宏定义。 |
| [XEG_NEURAL_UPSCALE_VERSION](#xeg_neural_upscale_version) 1 | XEngine空域AI超分扩展特性版本号。 |
| [XEG_NEURAL_UPSCALE_EXTENSION_NAME](#xeg_neural_upscale_extension_name) "XEG_neural_upscale" | XEngine空域AI超分扩展特性名称。 |
| [XEG_NEURAL_UPSCALE2_EXTENSION_NAME](#xeg_neural_upscale2_extension_name) "XEG_neural_upscale2" | XEngine空域AI超分（版本2）扩展特性名称。 |
| [XEG_temporal_upscale](#xeg_temporal_upscale) 1 | XEngine时域AI超分扩展特性宏定义。 |
| [XEG_TEMPORAL_UPSCALE_VERSION](#xeg_temporal_upscale_version) 1 | XEngine时域AI超分扩展特性版本号。 |
| [XEG_TEMPORAL_UPSCALE_EXTENSION_NAME](#xeg_temporal_upscale_extension_name) "XEG_temporal_upscale" | XEngine时域AI超分扩展特性名称。 |
| [XEG_adaptive_vrs](#xeg_adaptive_vrs) 1 | XEngine自适应VRS(Variable Rate Shading)扩展特性宏定义。 |
| [XEG_ADAPTIVE_VRS_VERSION](#xeg_adaptive_vrs_version) 1 | XEngine自适应VRS(Variable Rate Shading)扩展特性版本号。 |
| [XEG_ADAPTIVE_VRS_EXTENSION_NAME](#xeg_adaptive_vrs_extension_name) "XEG_adaptive_vrs" | XEngine自适应VRS(Variable Rate Shading)扩展特性名称。 |
| [XEG_RTGI_EXTENSION_NAME](#xeg_rtgi_extension_name) "XEG_rtgi" | XEngine光线追踪全局光照扩展特性名称。 |
| [XEG_RT_SHADOW_AO_EXTENSION_NAME](#xeg_rt_shadow_ao_extension_name) "XEG_rt_shadow_ao" | XEngine光线追踪阴影和环境光遮蔽扩展特性名称。 |
| [XEG_RT_REFLECTION_EXTENSION_NAME](#xeg_rt_reflection_extension_name) "XEG_rt_reflection" | XEngine光线追踪反射扩展特性名称。 |
| [XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name) "XEG_hps_radix_sort" | XEngine 高性能基数排序扩展特性名称。 |
| [XEG_ADAPTIVE_VRS_INPUT_SIZE](#xeg_adaptive_vrs_input_size) 0x1U | 用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的INPUT_SIZE参数，表示上一帧渲染管线最终渲染的图像宽度和高度。 |
| [XEG_ADAPTIVE_VRS_INPUT_REGION](#xeg_adaptive_vrs_input_region) 0x2U | 用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的INPUT_REGION参数，表示上一帧渲染管线最终渲染的图像区域。 |
| [XEG_ADAPTIVE_VRS_TEXEL_SIZE](#xeg_adaptive_vrs_texel_size) 0x3U | 用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的TEXEL_SIZE参数。 |
| [XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY](#xeg_adaptive_vrs_error_sensitivity) 0x4U | 用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的ERROR_SENSITIVITY参数，表示控制生成着色率图像的阈值。该值越大，平均着色率越小，即性能会越好但画质会劣化。建议取值范围为[0.0, 1.0]。 |
| [XEG_ADAPTIVE_VRS_FLIP](#xeg_adaptive_vrs_flip) 0x5U | 用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的FLIP参数，该参数用于控制是否执行图像上下翻转。 |
| [XEG_EXTENSIONS](#xeg_extensions) 0x01U | 作为[HMS_XEG_GetString](#hms_xeg_getstring)接口的入参，以获取XEngine支持的OpenGL ES扩展特性。 |
| [XEG_NEURAL_UPSCALE_SCISSOR](#xeg_neural_upscale_scissor) 0x1U | 用于通过[HMS_XEG_NeuralUpscaleParameter](#hms_xeg_neuralupscaleparameter)接口设置超分的裁剪窗口参数，裁剪窗口用于确定对输入图像采样的区域。 |
| [XEG_NEURAL_UPSCALE_SHARPNESS](#xeg_neural_upscale_sharpness) 0x2U | 用于通过[HMS_XEG_NeuralUpscaleParameter](#hms_xeg_neuralupscaleparameter)接口设置超分的锐化度参数，锐化度的建议取值范围为[0.0, 1.0]。 |
| [XEG_NEURAL_UPSCALE_INPUT_HANDLE](#xeg_neural_upscale_input_handle) 0x4U | 用于通过[HMS_XEG_NeuralUpscaleParameter](#hms_xeg_neuralupscaleparameter)接口设置与超分输入纹理关联的[OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer) handle。 |
| [XEG_SPATIAL_UPSCALE_SCISSOR](#xeg_spatial_upscale_scissor) 0x1U | 用于设置[HMS_XEG_SpatialUpscaleParameter](#hms_xeg_spatialupscaleparameter)接口的SCISSOR参数。 |
| [XEG_SPATIAL_UPSCALE_SHARPNESS](#xeg_spatial_upscale_sharpness) 0x2U | 用于设置[HMS_XEG_SpatialUpscaleParameter](#hms_xeg_spatialupscaleparameter)接口的SHARPNESS参数。 |
| [XEG_TEMPORAL_UPSCALE_INPUT_SIZE](#xeg_temporal_upscale_input_size) 0x1U | 用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置超分输入纹理的真实宽高。 |
| [XEG_TEMPORAL_UPSCALE_JITTER_NUM](#xeg_temporal_upscale_jitter_num) 0x2U | 用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置相机抖动的周期数，取值范围为[4, 16]，推荐8。 |
| [XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED](#xeg_temporal_upscale_depth_reversed) 0x3U | 用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置是否存在深度反转。true表示存在深度反转，false表示不存在深度反转。 |
| [XEG_TEMPORAL_UPSCALE_RESET_HISTORY](#xeg_temporal_upscale_reset_history) 0x4U | 用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，并且当前帧开始使用超分的情况下建议设置为true。 |
| [XEG_TEMPORAL_UPSCALE_STEADY_LEVEL](#xeg_temporal_upscale_steady_level) 0x5U | 用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。 |
| [XEG_MAX_EXTENSION_NAME_SIZE](#xeg_max_extension_name_size) 256 | XEngine扩展特性名称支持的最大长度。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_ADAPTIVEVRSPARAMETER](#pfn_hms_xeg_adaptivevrsparameter)) (GLenum pname, GLvoid *param) | 设置自适应VRS(Variable Rate Shading)输入参数的函数指针定义。 |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_DISPATCHADAPTIVEVRS](#pfn_hms_xeg_dispatchadaptivevrs)) (GLfloat *reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage) | 计算着色率图像的函数指针定义。 |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_APPLYADAPTIVEVRS](#pfn_hms_xeg_applyadaptivevrs)) (GLuint shadingRateImage) | 将着色率图像应用到渲染目标中的函数指针定义。 |
| typedef const GLubyte *(GL_APIENTRYP [PFN_HMS_XEG_GETSTRING](#pfn_hms_xeg_getstring)) (GLenum name) | XEngine OpenGL ES扩展特性查询接口函数指针定义。 |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_NEURALUPSCALEPARAMETER](#pfn_hms_xeg_neuralupscaleparameter)) (GLenum pname, GLvoid *param) | 设置空域AI超分输入参数的函数指针定义。 |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_RENDERNEURALUPSCALE](#pfn_hms_xeg_renderneuralupscale)) (GLuint inputTexture) | 执行空域AI超分渲染命令的函数指针定义。 |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_SPATIALUPSCALEPARAMETER](#pfn_hms_xeg_spatialupscaleparameter)) (GLenum pname, GLvoid *param) | 设置空域GPU超分输入参数的函数指针定义。 |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_RENDERSPATIALUPSCALE](#pfn_hms_xeg_renderspatialupscale)) (GLuint inputTexture) | 执行空域GPU超分渲染命令的函数指针定义。 |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_TemporalUpscaleParameter](#pfn_hms_xeg_temporalupscaleparameter)) (GLenum pname, GLvoid *param) | 设置时域AI超分输入参数的函数指针定义。 |
| typedef void(GL_APIENTRYP [PFN_HMS_XEG_RenderTemporalUpscale](#pfn_hms_xeg_rendertemporalupscale)) (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY) | 执行时域AI超分渲染命令的函数指针定义。 |
| VK_DEFINE_HANDLE([XEG_AdaptiveVRS](#xeg_adaptivevrs)) | [XEG_AdaptiveVRS](#xeg_adaptivevrs)的句柄。 |
| typedef struct [XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo) [XEG_AdaptiveVRSCreateInfo](#xeg_adaptivevrscreateinfo) | 此结构体描述创建[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象的参数信息，当结构体中的信息变化时，需要创建新的[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。 |
| typedef struct [XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription) [XEG_AdaptiveVRSDescription](#xeg_adaptivevrsdescription) | 此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateAdaptiveVRS](#pfn_hms_xeg_createadaptivevrs)) (VkDevice device, const [XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo) *pXegAdaptiveVRSCreateInfo, [XEG_AdaptiveVRS](#xeg_adaptivevrs) *pXegAdaptiveVRS) | 创建[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象的函数指针定义。 |
| typedef void(VKAPI_PTR * [PFN_HMS_XEG_CmdDispatchAdaptiveVRS](#pfn_hms_xeg_cmddispatchadaptivevrs)) (VkCommandBuffer commandBuffer, [XEG_AdaptiveVRS](#xeg_adaptivevrs) xegAdaptiveVRS, [XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription) *pXegAdaptiveVRSDescription) | 执行计算自适应VRS命令的函数指针定义。 |
| typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroyAdaptiveVRS](#pfn_hms_xeg_destroyadaptivevrs)) ([XEG_AdaptiveVRS](#xeg_adaptivevrs) xegAdaptiveVRS) | 销毁[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象的函数指针定义。 |
| typedef enum [XEG_StructureType](#xeg_structuretype) XEG_StructureType | XEngine结构体类型的枚举。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CmdSetSynchronization](#pfn_hms_xeg_cmdsetsynchronization)) (VkCommandBuffer commandBuffer, const void *xegHandle) | 设置同步信号，等待渲染结果写入指定图像的函数指针定义。使用RTGI特性时，为等待GI渲染结果到写入指定图像。 |
| typedef struct [XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties) [XEG_ExtensionProperties](#xeg_extensionproperties) | 此结构体描述通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询到的XEngine扩展特性集合。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_EnumerateDeviceExtensionProperties](#pfn_hms_xeg_enumeratedeviceextensionproperties)) (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, [XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties) *pProperties) | XEngine Vulkan扩展特性查询接口函数指针定义。 |
| VK_DEFINE_HANDLE([XEG_HPS](#xeg_hps)) | [XEG_HPS](#xeg_hps)的句柄。 |
| typedef struct [XEG_HPSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpscreateinfo) [XEG_HPSCreateInfo](#xeg_hpscreateinfo) | 此结构体描述创建[XEG_HPS](#xeg_hps)对象的信息。 |
| typedef struct [XEG_HPSRadixSort](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsort) [XEG_HPSRadixSort](#xeg_hpsradixsort) | 此结构体描述HPS基数排序扩展结构信息。 |
| typedef struct [XEG_HPSRadixSortDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsortdescription) [XEG_HPSRadixSortDescription](#xeg_hpsradixsortdescription) | 此结构体描述使用[XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展进行排序时所需的信息。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateHPS](#pfn_hms_xeg_createhps)) (VkDevice device, const [XEG_HPSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpscreateinfo) *pCreateInfo, [XEG_HPS](#xeg_hps) *pHps) | 创建[XEG_HPS](#xeg_hps)对象的函数指针定义。 |
| typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroyHPS](#pfn_hms_xeg_destroyhps)) ([XEG_HPS](#xeg_hps) hps) | 销毁[XEG_HPS](#xeg_hps)对象的函数指针定义。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CmdRadixSortHPS](#pfn_hms_xeg_cmdradixsorthps)) (VkCommandBuffer commandBuffer, [XEG_HPS](#xeg_hps) hps, const [XEG_HPSRadixSortDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsortdescription) *pDescription) | 录制HPS排序命令的函数指针定义，使用此接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询是否支持[XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展。 |
| VK_DEFINE_HANDLE([XEG_RTReflection](#xeg_rtreflection)) | [XEG_RTReflection](#xeg_rtreflection)的句柄。 |
| typedef struct [XEG_RTReflectionCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectioncreateinfo) [XEG_RTReflectionCreateInfo](#xeg_rtreflectioncreateinfo) | 此结构体描述创建[XEG_RTReflection](#xeg_rtreflection)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_RTReflection](#xeg_rtreflection)对象。 |
| typedef struct [XEG_RTReflectionDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectiondescription) [XEG_RTReflectionDescription](#xeg_rtreflectiondescription) | 此结构体描述下发光线求交命令时的输入信息。 |
| typedef VkResult(VKAPI_ATTR * [PFN_HMS_XEG_CreateRTReflection](#pfn_hms_xeg_creatertreflection)) (VkDevice device, const void *pCreateInfo, [XEG_RTReflection](#xeg_rtreflection) *pRtReflection) | 创建[XEG_RTReflection](#xeg_rtreflection)对象的函数指针定义。 |
| typedef VkResult(VKAPI_ATTR * [PFN_HMS_XEG_CmdRenderRTReflection](#pfn_hms_xeg_cmdrenderrtreflection)) (VkCommandBuffer commandBuffer, [XEG_RTReflection](#xeg_rtreflection) rtReflection, const void *pDescription) | 录制计算RT反射命中信息命令的函数指针定义。 |
| typedef void(VKAPI_ATTR * [PFN_HMS_XEG_DestroyRTReflection](#pfn_hms_xeg_destroyrtreflection)) ([XEG_RTReflection](#xeg_rtreflection) rtReflection) | 销毁[XEG_RTReflection](#xeg_rtreflection)对象的函数指针定义。 |
| VK_DEFINE_HANDLE([XEG_RTVisibleMask](#xeg_rtvisiblemask)) | [XEG_RTVisibleMask](#xeg_rtvisiblemask)的句柄。表示光线追踪VisibleMask特性实例，支持阴影和环境光遮蔽效果。 |
| typedef enum [XEG_DenoiseQualityMode](#xeg_denoisequalitymode) XEG_DenoiseQualityMode | 去噪质量模式枚举。 |
| typedef enum [XEG_TraversalMode](#xeg_traversalmode) XEG_TraversalMode | 遍历模式枚举。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateRTVisibleMask](#pfn_hms_xeg_creatertvisiblemask)) (VkDevice device, const void *pCreateInfo, [XEG_RTVisibleMask](#xeg_rtvisiblemask) *pRTVisibleMask) | 创建[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象的函数指针定义。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CmdRenderRTVisibleMask](#pfn_hms_xeg_cmdrenderrtvisiblemask)) (VkCommandBuffer commandBuffer, [XEG_RTVisibleMask](#xeg_rtvisiblemask) rtVisibleMask, const void *pDescription) | 录制光线追踪VisibleMask渲染命令的函数指针定义。 |
| typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroyRTVisibleMask](#pfn_hms_xeg_destroyrtvisiblemask)) ([XEG_RTVisibleMask](#xeg_rtvisiblemask) rtVisibleMask) | 销毁[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象的函数指针定义。 |
| VK_DEFINE_HANDLE([XEG_RTGI](#xeg_rtgi)) | [XEG_RTGI](#xeg_rtgi)的句柄。 |
| typedef enum [XEG_RTGIQualityMode](#xeg_rtgiqualitymode) XEG_RTGIQualityMode | 输出图像质量模式的枚举。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateRTGI](#pfn_hms_xeg_creatertgi)) (VkDevice device, const void *pCreateInfo, [XEG_RTGI](#xeg_rtgi) *pRtGI) | 创建[XEG_RTGI](#xeg_rtgi)对象的函数指针定义。 |
| typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroyRTGI](#pfn_hms_xeg_destroyrtgi)) ([XEG_RTGI](#xeg_rtgi) rtGI) | 销毁[XEG_RTGI](#xeg_rtgi)对象的函数指针定义。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CmdRenderRTGI](#pfn_hms_xeg_cmdrenderrtgi)) (VkCommandBuffer commandBuffer, [XEG_RTGI](#xeg_rtgi) rtGI, const void *pDescription) | 执行渲染命令的函数指针定义。 |
| VK_DEFINE_HANDLE([XEG_SpatialUpscale](#xeg_spatialupscale)) | [XEG_SpatialUpscale](#xeg_spatialupscale)的句柄。 |
| typedef struct [XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo) [XEG_SpatialUpscaleCreateInfo](#xeg_spatialupscalecreateinfo) | 此结构体描述创建[XEG_SpatialUpscale](#xeg_spatialupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_SpatialUpscale](#xeg_spatialupscale)对象。 |
| typedef struct [XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription) [XEG_SpatialUpscaleDescription](#xeg_spatialupscaledescription) | 此结构体描述下发空域GPU超分渲染命令时需要的图像信息。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateSpatialUpscale](#pfn_hms_xeg_createspatialupscale)) (VkDevice device, const [XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo) *pXegSpatialUpscaleCreateInfo, [XEG_SpatialUpscale](#xeg_spatialupscale) *pXegSpatialUpscale) | 创建[XEG_SpatialUpscale](#xeg_spatialupscale)对象的函数指针定义。 |
| typedef void(VKAPI_PTR * [PFN_HMS_XEG_CmdRenderSpatialUpscale](#pfn_hms_xeg_cmdrenderspatialupscale)) (VkCommandBuffer commandBuffer, [XEG_SpatialUpscale](#xeg_spatialupscale) xegSpatialUpscale, [XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription) *pXegSpatialUpscaleDescription) | 执行空域GPU超分渲染命令的函数指针定义。 |
| typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroySpatialUpscale](#pfn_hms_xeg_destroyspatialupscale)) ([XEG_SpatialUpscale](#xeg_spatialupscale) xegSpatialUpscale) | 销毁[XEG_SpatialUpscale](#xeg_spatialupscale)对象的函数指针定义。 |
| VK_DEFINE_HANDLE([XEG_TemporalUpscale](#xeg_temporalupscale)) | [XEG_TemporalUpscale](#xeg_temporalupscale)的句柄。 |
| typedef struct [XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo) [XEG_TemporalUpscaleCreateInfo](#xeg_temporalupscalecreateinfo) | 此结构体描述创建[XEG_TemporalUpscale](#xeg_temporalupscale)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_TemporalUpscale](#xeg_temporalupscale)对象。 |
| typedef struct [XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription) [XEG_TemporalUpscaleDescription](#xeg_temporalupscaledescription) | 此结构体描述下发时域AI超分渲染命令时的输入信息。 |
| typedef VkResult(VKAPI_ATTR * [PFN_HMS_XEG_CreateTemporalUpscale](#pfn_hms_xeg_createtemporalupscale)) (VkDevice device, [XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo) *pTemporalUpscaleInfo, [XEG_TemporalUpscale](#xeg_temporalupscale) *pTemporalUpscale) | 创建[XEG_TemporalUpscale](#xeg_temporalupscale)对象的函数指针定义。 |
| typedef void(VKAPI_ATTR * [PFN_HMS_XEG_CmdRenderTemporalUpscale](#pfn_hms_xeg_cmdrendertemporalupscale)) (VkCommandBuffer commandBuffer, [XEG_TemporalUpscale](#xeg_temporalupscale) temporalUpscale, [XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription) *pDescription) | 录制时域AI超分渲染命令的函数指针定义。 |
| typedef void(VKAPI_ATTR * [PFN_HMS_XEG_DestroyTemporalUpscale](#pfn_hms_xeg_destroytemporalupscale)) ([XEG_TemporalUpscale](#xeg_temporalupscale) temporalUpscale) | 销毁[XEG_TemporalUpscale](#xeg_temporalupscale)对象的函数指针定义。 |
| VK_DEFINE_HANDLE([XEG_NeuralUpscale](#xeg_neuralupscale)) | [XEG_NeuralUpscale](#xeg_neuralupscale)的句柄。 |
| typedef struct [XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo) [XEG_NeuralUpscaleCreateInfo](#xeg_neuralupscalecreateinfo) | 此结构体描述创建[XEG_NeuralUpscale](#xeg_neuralupscale)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_NeuralUpscale](#xeg_neuralupscale)对象。 |
| typedef struct [XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription) [XEG_NeuralUpscaleDescription](#xeg_neuralupscaledescription) | 此结构体描述下发空域AI超分渲染命令时的输入信息。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CreateNeuralUpscale](#pfn_hms_xeg_createneuralupscale)) (VkDevice device, const [XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo) *pCreateInfo, [XEG_NeuralUpscale](#xeg_neuralupscale) *pNeuralUpscale) | 创建[XEG_NeuralUpscale](#xeg_neuralupscale)对象的函数指针定义。 |
| typedef VkResult(VKAPI_PTR * [PFN_HMS_XEG_CmdRenderNeuralUpscale](#pfn_hms_xeg_cmdrenderneuralupscale)) (VkCommandBuffer commandBuffer, [XEG_NeuralUpscale](#xeg_neuralupscale) neuralUpscale, const [XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription) *pDescription) | 录制空域AI超分渲染命令的函数指针定义。 |
| typedef void(VKAPI_PTR * [PFN_HMS_XEG_DestroyNeuralUpscale](#pfn_hms_xeg_destroyneuralupscale)) ([XEG_NeuralUpscale](#xeg_neuralupscale) neuralUpscale) | 销毁[XEG_NeuralUpscale](#xeg_neuralupscale)对象的函数指针定义。 |
| typedef enum [XEG_ControlDisplaySeparationStatus](#xeg_controldisplayseparationstatus) XEG_ControlDisplaySeparationStatus | 此枚举描述控显分离当前的状态信息。 |
| typedef void(*[PFN_HMS_XEG_ControlDisplaySeparationStatusCallback](#pfn_hms_xeg_controldisplayseparationstatuscallback)) ([XEG_ControlDisplaySeparationStatus](#xeg_controldisplayseparationstatus) status) | 控显分离特性监听函数的函数指针定义。 |
| typedef bool(*[PFN_HMS_XEG_SetControlDisplaySeparationStatusListener](#pfn_hms_xeg_setcontroldisplayseparationstatuslistener)) ([PFN_HMS_XEG_ControlDisplaySeparationStatusCallback](#pfn_hms_xeg_controldisplayseparationstatuscallback) callback) | 设置控显分离特性全局唯一监听函数的函数指针定义。 |
| typedef void(*[PFN_HMS_XEG_RemoveControlDisplaySeparationStatusListener](#pfn_hms_xeg_removecontroldisplayseparationstatuslistener)) () | 移除控显分离特性全局唯一监听函数的函数指针定义。 |
| typedef bool(*[PFN_HMS_XEG_SetControlDisplaySeparationActive](#pfn_hms_xeg_setcontroldisplayseparationactive)) (bool flag) | 设置控显分离特性使能开关的函数指针定义。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [XEG_StructureType](#xeg_structuretype) { XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO = 0, XEG_STRUCTURE_TYPE_RT_SHADOWAO_DESCRIPTION = 1, XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO = 2, XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION = 3, XEG_STRUCTURE_TYPE_NNGI_CREATE_INFO = 4, XEG_STRUCTURE_TYPE_NNGI_DESCRIPTION = 5, XEG_STRUCTURE_TYPE_DDGI_CREATE_INFO = 6, XEG_STRUCTURE_TYPE_DDGI_DESCRIPTION = 7, XEG_STRUCTURE_TYPE_NEURAL_UPSCALE_CREATE_INFO = 8, XEG_STRUCTURE_TYPE_NEURAL_UPSCALE_DESCRIPTION = 9, XEG_STRUCTURE_TYPE_HPS_CREATE_INFO = 1001, XEG_STRUCTURE_TYPE_HPS_RADIX_SORT = 1002, XEG_STRUCTURE_TYPE_HPS_RADIX_SORT_DESCRIPTION = 1003 } | XEngine结构体类型的枚举。 |
| [XEG_DenoiseQualityMode](#xeg_denoisequalitymode) { XEG_DENOISE_QUALITY_MODE_NONE = 0, XEG_DENOISE_QUALITY_MODE_QUALITY = 1, XEG_DENOISE_QUALITY_MODE_BALANCED = 2, XEG_DENOISE_QUALITY_MODE_PERFORMANCES = 3 } | 去噪质量模式枚举。 |
| [XEG_TraversalMode](#xeg_traversalmode) { XEG_TRAVERSAL_MODE_DEFAULT = 0, XEG_TRAVERSAL_MODE_PERFORMANCES = 1 } | 遍历模式枚举。 |
| [XEG_RTGIQualityMode](#xeg_rtgiqualitymode) { XEG_RTGI_QUALITY_MODE_QUALITY = 0, XEG_RTGI_QUALITY_MODE_BALANCED = 1, XEG_RTGI_QUALITY_MODE_PERFORMANCE = 2 } | 输出图像质量模式的枚举。 |
| [XEG_ControlDisplaySeparationStatus](#xeg_controldisplayseparationstatus) { UNAVAILABLE = 0, AVAILABLE = 1} | 控显分离当前的状态信息的枚举。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| GL_APICALL void GL_APIENTRY [HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter) (GLenum pname, GLvoid *param) | 设置自适应VRS(Variable Rate Shading)的参数。 |
| GL_APICALL void GL_APIENTRY [HMS_XEG_DispatchAdaptiveVRS](#hms_xeg_dispatchadaptivevrs) (GLfloat *reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage) | 计算着色率图像。 |
| GL_APICALL void GL_APIENTRY [HMS_XEG_ApplyAdaptiveVRS](#hms_xeg_applyadaptivevrs) (GLuint shadingRateImage) | 将着色率图像应用到渲染目标中。 |
| const GLubyte * [HMS_XEG_GetString](#hms_xeg_getstring) (GLenum name) | XEngine OpenGL ES扩展特性查询接口。 |
| GL_APICALL void GL_APIENTRY [HMS_XEG_NeuralUpscaleParameter](#hms_xeg_neuralupscaleparameter) (GLenum pname, GLvoid *param) | 设置空域AI超分输入参数。 |
| GL_APICALL void GL_APIENTRY [HMS_XEG_RenderNeuralUpscale](#hms_xeg_renderneuralupscale) (GLuint inputTexture) | 执行空域AI超分渲染命令。 |
| GL_APICALL void GL_APIENTRY [HMS_XEG_SpatialUpscaleParameter](#hms_xeg_spatialupscaleparameter) (GLenum pname, GLvoid *param) | 设置空域GPU超分输入参数。 |
| GL_APICALL void GL_APIENTRY [HMS_XEG_RenderSpatialUpscale](#hms_xeg_renderspatialupscale) (GLuint inputTexture) | 执行空域GPU超分渲染命令。 |
| GL_APICALL void GL_APIENTRY [HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter) (GLenum pname, const GLvoid *param) | 设置时域AI超分输入参数。 |
| GL_APICALL void GL_APIENTRY [HMS_XEG_RenderTemporalUpscale](#hms_xeg_rendertemporalupscale) (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY) | 执行时域AI超分渲染命令。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateAdaptiveVRS](#hms_xeg_createadaptivevrs) (VkDevice device, [XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo) *pXegAdaptiveVRSCreateInfo, [XEG_AdaptiveVRS](#xeg_adaptivevrs) *pXegAdaptiveVRS) | 创建[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_CmdDispatchAdaptiveVRS](#hms_xeg_cmddispatchadaptivevrs) (VkCommandBuffer commandBuffer, [XEG_AdaptiveVRS](#xeg_adaptivevrs) xegAdaptiveVRS, [XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription) *pXegAdaptiveVRSDescription) | 执行计算自适应VRS命令。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyAdaptiveVRS](#hms_xeg_destroyadaptivevrs) ([XEG_AdaptiveVRS](#xeg_adaptivevrs) xegAdaptiveVRS) | 销毁[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdSetSynchronization](#hms_xeg_cmdsetsynchronization) (VkCommandBuffer commandBuffer, const void *xegHandle) | 设置同步信号，等待渲染结果写入指定图像。使用RTGI特性时，为等待GI渲染结果写入指定图像。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties) (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, [XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties) *pProperties) | XEngine Vulkan扩展特性查询接口。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateHPS](#hms_xeg_createhps) (VkDevice device, const [XEG_HPSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpscreateinfo) *pCreateInfo, [XEG_HPS](#xeg_hps) *pHps) | 创建[XEG_HPS](#xeg_hps)对象。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyHPS](#hms_xeg_destroyhps) ([XEG_HPS](#xeg_hps) hps) | 销毁[XEG_HPS](#xeg_hps)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdRadixSortHPS](#hms_xeg_cmdradixsorthps) (VkCommandBuffer commandBuffer, [XEG_HPS](#xeg_hps) hps, const [XEG_HPSRadixSortDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsortdescription) *pDescription) | 录制HPS排序命令，使用此接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询是否支持[XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateRTReflection](#hms_xeg_creatertreflection) (VkDevice device, const void *pCreateInfo, [XEG_RTReflection](#xeg_rtreflection) *pRtReflection) | 创建[XEG_RTReflection](#xeg_rtreflection)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdRenderRTReflection](#hms_xeg_cmdrenderrtreflection) (VkCommandBuffer commandBuffer, [XEG_RTReflection](#xeg_rtreflection) rtReflection, const void *pDescription) | 录制计算RT反射命中信息命令。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyRTReflection](#hms_xeg_destroyrtreflection) ([XEG_RTReflection](#xeg_rtreflection) rtReflection) | 销毁[XEG_RTReflection](#xeg_rtreflection)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateRTVisibleMask](#hms_xeg_creatertvisiblemask) (VkDevice device, const void *pCreateInfo, [XEG_RTVisibleMask](#xeg_rtvisiblemask) *pRTVisibleMask) | 创建[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdRenderRTVisibleMask](#hms_xeg_cmdrenderrtvisiblemask) (VkCommandBuffer commandBuffer, [XEG_RTVisibleMask](#xeg_rtvisiblemask) rtVisibleMask, const void *pDescription) | 录制光线追踪VisibleMask渲染命令。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyRTVisibleMask](#hms_xeg_destroyrtvisiblemask) ([XEG_RTVisibleMask](#xeg_rtvisiblemask) rtVisibleMask) | 销毁[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateRTGI](#hms_xeg_creatertgi) (VkDevice device, const void *pCreateInfo, [XEG_RTGI](#xeg_rtgi) *pRtGI) | 创建[XEG_RTGI](#xeg_rtgi)对象。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyRTGI](#hms_xeg_destroyrtgi) ([XEG_RTGI](#xeg_rtgi) rtGI) | 销毁[XEG_RTGI](#xeg_rtgi)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdRenderRTGI](#hms_xeg_cmdrenderrtgi) (VkCommandBuffer commandBuffer, [XEG_RTGI](#xeg_rtgi) rtGI, const void *pDescription) | 执行渲染命令。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateSpatialUpscale](#hms_xeg_createspatialupscale) (VkDevice device, const [XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo) *pXegSpatialUpscaleCreateInfo, [XEG_SpatialUpscale](#xeg_spatialupscale) *pXegSpatialUpscale) | 创建[XEG_SpatialUpscale](#xeg_spatialupscale)对象。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_CmdRenderSpatialUpscale](#hms_xeg_cmdrenderspatialupscale) (VkCommandBuffer commandBuffer, [XEG_SpatialUpscale](#xeg_spatialupscale) xegSpatialUpscale, [XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription) *pXegSpatialUpscaleDescription) | 执行空域GPU超分渲染命令。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroySpatialUpscale](#hms_xeg_destroyspatialupscale) ([XEG_SpatialUpscale](#xeg_spatialupscale) xegSpatialUpscale) | 销毁[XEG_SpatialUpscale](#xeg_spatialupscale)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateTemporalUpscale](#hms_xeg_createtemporalupscale) (VkDevice device, [XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo) *pTemporalUpscaleInfo, [XEG_TemporalUpscale](#xeg_temporalupscale) *pTemporalUpscale) | 创建[XEG_TemporalUpscale](#xeg_temporalupscale)对象。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_CmdRenderTemporalUpscale](#hms_xeg_cmdrendertemporalupscale) (VkCommandBuffer commandBuffer, [XEG_TemporalUpscale](#xeg_temporalupscale) temporalUpscale, [XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription) *pDescription) | 录制时域AI超分渲染命令。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyTemporalUpscale](#hms_xeg_destroytemporalupscale) ([XEG_TemporalUpscale](#xeg_temporalupscale) temporalUpscale) | 销毁[XEG_TemporalUpscale](#xeg_temporalupscale)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CreateNeuralUpscale](#hms_xeg_createneuralupscale) (VkDevice device, const [XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo) *pCreateInfo, [XEG_NeuralUpscale](#xeg_neuralupscale) *pNeuralUpscale) | 创建[XEG_NeuralUpscale](#xeg_neuralupscale)对象。 |
| VKAPI_ATTR VkResult VKAPI_CALL [HMS_XEG_CmdRenderNeuralUpscale](#hms_xeg_cmdrenderneuralupscale) (VkCommandBuffer commandBuffer, [XEG_NeuralUpscale](#xeg_neuralupscale) neuralUpscale, const [XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription) *pDescription) | 录制空域AI超分渲染命令。 |
| VKAPI_ATTR void VKAPI_CALL [HMS_XEG_DestroyNeuralUpscale](#hms_xeg_destroyneuralupscale) ([XEG_NeuralUpscale](#xeg_neuralupscale) neuralUpscale) | 销毁[XEG_NeuralUpscale](#xeg_neuralupscale)对象。 |
| bool [HMS_XEG_SetControlDisplaySeparationStatusListener](#hms_xeg_setcontroldisplayseparationstatuslistener) ([PFN_HMS_XEG_ControlDisplaySeparationStatusCallback](#pfn_hms_xeg_controldisplayseparationstatuscallback) callback) | 设置控显分离特性全局唯一监听函数。 |
| void [HMS_XEG_RemoveControlDisplaySeparationStatusListener](#hms_xeg_removecontroldisplayseparationstatuslistener) () | 移除控显分离特性全局唯一监听函数。 |
| bool [HMS_XEG_SetControlDisplaySeparationActive](#hms_xeg_setcontroldisplayseparationactive) (bool flag) | 设置控显分离特性使能开关。 |

#### 宏定义说明

#### [h2]XEG_adaptive_vrs

```
#define XEG_adaptive_vrs   1
```
 描述

XEngine自适应VRS(Variable Rate Shading)扩展特性宏定义。

起始版本： 5.0.0(12)

#### [h2]XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY

```
#define XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY   0x4U
```
 描述

用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的ERROR_SENSITIVITY参数，表示控制生成着色率图像的阈值。该值越大，平均着色率越小，即性能会越好但画质会劣化。建议取值范围为[0.0, 1.0]。

使用此宏定义时通过[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口设置ERROR_SENSITIVITY参数，向接口传递的param必须是GLfloat指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为0.5。

起始版本： 5.0.0(12)

#### [h2]XEG_ADAPTIVE_VRS_EXTENSION_NAME

```
#define XEG_ADAPTIVE_VRS_EXTENSION_NAME   "XEG_adaptive_vrs"
```
 描述

XEngine自适应VRS(Variable Rate Shading)扩展特性名称。

起始版本： 5.0.0(12)

#### [h2]XEG_ADAPTIVE_VRS_FLIP

```
#define XEG_ADAPTIVE_VRS_FLIP   0x5U
```
 描述

用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的FLIP参数，该参数用于控制是否执行图像上下翻转。

使用此宏定义时通过[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口设置FLIP参数，向接口传递的param必须是GLboolean指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为false。true表示执行上下翻转，false表示不执行上下翻转。

起始版本： 5.0.0(12)

#### [h2]XEG_ADAPTIVE_VRS_INPUT_REGION

```
#define XEG_ADAPTIVE_VRS_INPUT_REGION   0x2U
```
 描述

用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的INPUT_REGION参数，表示上一帧渲染管线最终渲染的图像区域。

使用此宏定义时通过[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口设置INPUT_REGION参数，向接口传递的param必须是长度为4的GLuint类型数组，依次为渲染图像区域左下角的坐标和渲染图像区域的宽高，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为[0, 0, INPUT_SIZE[0], INPUT_SIZE[1]]。

起始版本： 5.0.0(12)

#### [h2]XEG_ADAPTIVE_VRS_INPUT_SIZE

```
#define XEG_ADAPTIVE_VRS_INPUT_SIZE   0x1U
```
 描述

用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的INPUT_SIZE参数，表示上一帧渲染管线最终渲染的图像宽度和高度。

使用此宏定义时通过[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口设置INPUT_SIZE参数，向接口传递的param必须是长度为2的GLsizei类型数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 必填参数，且需要保证和[HMS_XEG_DispatchAdaptiveVRS](#hms_xeg_dispatchadaptivevrs)的inputColorImage宽高相同。

起始版本： 5.0.0(12)

#### [h2]XEG_ADAPTIVE_VRS_TEXEL_SIZE

```
#define XEG_ADAPTIVE_VRS_TEXEL_SIZE   0x3U
```
 描述

用于设置[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口的TEXEL_SIZE参数。

使用此宏定义时通过[HMS_XEG_AdaptiveVRSParameter](#hms_xeg_adaptivevrsparameter)接口设置TEXEL_SIZE参数，向接口传递的param必须是长度为2的GLsizei类型数组，依次为TEXEL_WIDTH和TEXEL_HEIGHT，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，默认为[8, 8]，支持[8, 8]和[16, 16]。

起始版本： 5.0.0(12)

#### [h2]XEG_ADAPTIVE_VRS_VERSION

```
#define XEG_ADAPTIVE_VRS_VERSION   1
```
 描述

XEngine自适应VRS扩展特性版本号。

起始版本： 5.0.0(12)

#### [h2]XEG_EXTENSIONS

```
#define XEG_EXTENSIONS   0x01U
```
 描述

作为[HMS_XEG_GetString](#hms_xeg_getstring)接口的入参，以获取XEngine支持的OpenGL ES扩展特性。

起始版本： 5.0.0(12)

#### [h2]XEG_HPS_RADIX_SORT_EXTENSION_NAME

```
#define XEG_HPS_RADIX_SORT_EXTENSION_NAME   "XEG_hps_radix_sort"
```
 描述

XEngine 高性能基数排序扩展特性名称。

起始版本： 6.0.0(20)

#### [h2]XEG_MAX_EXTENSION_NAME_SIZE

```
#define XEG_MAX_EXTENSION_NAME_SIZE   256
```
 描述

XEngine扩展特性名称支持的最大长度。

起始版本： 5.0.0(12)

#### [h2]XEG_neural_upscale

```
#define XEG_neural_upscale   1
```
 描述

XEngine空域AI超分扩展特性宏定义。

起始版本： 5.0.0(12)

#### [h2]XEG_NEURAL_UPSCALE_EXTENSION_NAME

```
#define XEG_NEURAL_UPSCALE_EXTENSION_NAME   "XEG_neural_upscale"
```
 描述

XEngine空域AI超分扩展特性名称。

起始版本： 5.0.0(12)

#### [h2]XEG_NEURAL_UPSCALE2_EXTENSION_NAME

```
#define XEG_NEURAL_UPSCALE2_EXTENSION_NAME   "XEG_neural_upscale2"
```
 描述

XEngine空域AI超分（版本2）扩展特性名称。

起始版本： 26.0.0

#### [h2]XEG_NEURAL_UPSCALE_INPUT_HANDLE

```
#define XEG_NEURAL_UPSCALE_INPUT_HANDLE   0x4U
```
 描述

用于通过[HMS_XEG_NeuralUpscaleParameter](#hms_xeg_neuralupscaleparameter)接口设置与超分输入纹理关联的[OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer) handle。

使用此宏定义设置超分输入参数时，向接口传递的param值必须是与向[HMS_XEG_RenderNeuralUpscale](#hms_xeg_renderneuralupscale)接口传递的inputTexture纹理参数对应的合法的[OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer) handle，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。

[XEG_NEURAL_UPSCALE_EXTENSION_NAME](#xeg_neural_upscale_extension_name)扩展可用时，该参数为必选参数。

[XEG_NEURAL_UPSCALE2_EXTENSION_NAME](#xeg_neural_upscale2_extension_name)扩展可用时，不需要设置该参数。

起始版本： 5.0.0(12)

#### [h2]XEG_NEURAL_UPSCALE_SCISSOR

```
#define XEG_NEURAL_UPSCALE_SCISSOR   0x1U
```
 描述

用于通过[HMS_XEG_NeuralUpscaleParameter](#hms_xeg_neuralupscaleparameter)接口设置超分的裁剪窗口参数，裁剪窗口用于确定对输入图像采样的区域。

使用此宏定义设置裁剪窗口参数时，向接口传递的param值必须是长度为4的无符号整数数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。数组中的值依次为：x， y， width， height，其中x、y确定裁剪窗口的左下角，width、height分别确定裁剪窗口的宽和高。 可选参数，不设置裁剪窗口参数时的默认值为（0， 0， 输入纹理的宽， 输入纹理的高）。

起始版本： 5.0.0(12)

#### [h2]XEG_NEURAL_UPSCALE_SHARPNESS

```
#define XEG_NEURAL_UPSCALE_SHARPNESS   0x2U
```
 描述

用于通过[HMS_XEG_NeuralUpscaleParameter](#hms_xeg_neuralupscaleparameter)接口设置超分的锐化度参数，锐化度的建议取值范围为[0.0, 1.0]。

使用此宏定义设置超分的锐化度参数时，向接口传递的param值必须是指向一个float值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 可选参数，不设置锐化度参数时的默认值为0.2。

起始版本： 5.0.0(12)

#### [h2]XEG_NEURAL_UPSCALE_VERSION

```
#define XEG_NEURAL_UPSCALE_VERSION   1
```
 描述

XEngine空域AI超分扩展特性版本号。

起始版本： 5.0.0(12)

#### [h2]XEG_RT_REFLECTION_EXTENSION_NAME

```
#define XEG_RT_REFLECTION_EXTENSION_NAME   "XEG_rt_reflection"
```
 描述

XEngine光线追踪反射扩展特性名称。

起始版本： 6.0.0(20)

#### [h2]XEG_RT_SHADOW_AO_EXTENSION_NAME

```
#define XEG_RT_SHADOW_AO_EXTENSION_NAME   "XEG_rt_shadow_ao"
```
 描述

XEngine光线追踪阴影和环境光遮蔽扩展特性名称。

起始版本： 6.0.0(20)

#### [h2]XEG_RTGI_EXTENSION_NAME

```
#define XEG_RTGI_EXTENSION_NAME   "XEG_rtgi"
```
 描述

XEngine光线追踪全局光照扩展特性名称。

起始版本： 6.0.0(20)

#### [h2]XEG_spatial_upscale

```
#define XEG_spatial_upscale   1
```
 描述

XEngine空域GPU超分扩展特性宏定义。

起始版本： 5.0.0(12)

#### [h2]XEG_SPATIAL_UPSCALE_EXTENSION_NAME

```
#define XEG_SPATIAL_UPSCALE_EXTENSION_NAME   "XEG_spatial_upscale"
```
 描述

XEngine空域GPU超分扩展特性名称。

起始版本： 5.0.0(12)

#### [h2]XEG_SPATIAL_UPSCALE_SCISSOR

```
#define XEG_SPATIAL_UPSCALE_SCISSOR   0x1U
```
 描述

用于设置[HMS_XEG_SpatialUpscaleParameter](#hms_xeg_spatialupscaleparameter)接口的SCISSOR参数。

使用此宏定义时通过[HMS_XEG_SpatialUpscaleParameter](#hms_xeg_spatialupscaleparameter)接口设置SCISSOR参数，向接口传递的param值必须是指向长度为4的无符号整数数组的指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。 SCISSOR四个值依次为裁剪窗口的左下角点的x与y的值和裁剪窗口的宽高。

起始版本： 5.0.0(12)

#### [h2]XEG_SPATIAL_UPSCALE_SHARPNESS

```
#define XEG_SPATIAL_UPSCALE_SHARPNESS   0x2U
```
 描述

用于设置[HMS_XEG_SpatialUpscaleParameter](#hms_xeg_spatialupscaleparameter)接口的SHARPNESS参数。

使用此宏定义时通过[HMS_XEG_SpatialUpscaleParameter](#hms_xeg_spatialupscaleparameter)接口设置SHARPNESS参数，向接口传递的param值必须是指向float类型的指针。SHARPNESS参数建议取值范围为[0.0, 1.0]，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。SHARPNESS参数越大锐化效果越强，不同风格图像锐化值需要调整，否则会导致过度锐化现象，如出现大量噪点。

起始版本： 5.0.0(12)

#### [h2]XEG_SPATIAL_UPSCALE_VERSION

```
#define XEG_SPATIAL_UPSCALE_VERSION   1
```
 描述

XEngine空域GPU超分扩展特性版本号。

起始版本： 5.0.0(12)

#### [h2]XEG_temporal_upscale

```
#define XEG_temporal_upscale   1
```
 描述

XEngine时域AI超分扩展特性宏定义。

起始版本： 5.0.0(12)

#### [h2]XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED

```
#define XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED   0x3U
```
 描述

用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置是否存在深度反转。true表示存在深度反转，false表示不存在深度反转。

使用此宏定义设置是否存在深度反转时，向接口传递的param值必须是指向一个GLboolean值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。必选参数。

起始版本： 6.0.0(20)

#### [h2]XEG_TEMPORAL_UPSCALE_EXTENSION_NAME

```
#define XEG_TEMPORAL_UPSCALE_EXTENSION_NAME   "XEG_temporal_upscale"
```
 描述

XEngine时域AI超分扩展特性名称。

起始版本： 5.0.0(12)

#### [h2]XEG_TEMPORAL_UPSCALE_INPUT_SIZE

```
#define XEG_TEMPORAL_UPSCALE_INPUT_SIZE   0x1U
```
 描述

用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置超分输入纹理的真实宽高。

使用此宏定义设置输入宽高时，向接口传递的param值必须是长度为2的无符号整数数组，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。数组中的值依次为：width, height。width和height分别确定输入纹理的宽和高。必选参数。

起始版本： 6.0.0(20)

#### [h2]XEG_TEMPORAL_UPSCALE_JITTER_NUM

```
#define XEG_TEMPORAL_UPSCALE_JITTER_NUM   0x2U
```
 描述

用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置相机抖动的周期数，取值范围为[4, 16]，推荐8。

使用此宏定义设置相机抖动的周期数时，向接口传递的param值必须是指向一个GLuint值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。必选参数。

起始版本： 6.0.0(20)

#### [h2]XEG_TEMPORAL_UPSCALE_RESET_HISTORY

```
#define XEG_TEMPORAL_UPSCALE_RESET_HISTORY   0x4U
```
 描述

用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置是否重置历史帧数据，true表示重置，false表示不重置。在历史帧未使用超分，并且当前帧开始使用超分的情况下建议设置为true。

使用此宏定义设置是否重置历史帧数据时，向接口传递的param值必须是指向一个GLboolean值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。必选参数。

起始版本： 6.0.0(20)

#### [h2]XEG_TEMPORAL_UPSCALE_STEADY_LEVEL

```
#define XEG_TEMPORAL_UPSCALE_STEADY_LEVEL   0x5U
```
 描述

用于通过[HMS_XEG_TemporalUpscaleParameter](#hms_xeg_temporalupscaleparameter)接口设置画面偏向当前帧（鬼影少但可能存在闪烁）还是历史帧（鬼影多但是更稳定）的平衡程度。取值范围为[0.0, 1.0]，值越大越偏向历史帧。

使用此宏定义设置平衡程度时，向接口传递的param值必须是指向一个GLfloat值的合法指针，否则将产生未定义行为，如渲染效果不正确或者程序崩溃。可选参数，默认值是0.5。

起始版本： 6.0.0(20)

#### [h2]XEG_TEMPORAL_UPSCALE_VERSION

```
#define XEG_TEMPORAL_UPSCALE_VERSION   1
```
 描述

XEngine时域AI超分扩展特性版本号。

起始版本： 5.0.0(12)

#### 类型定义说明

#### [h2]PFN_HMS_XEG_ADAPTIVEVRSPARAMETER

```
typedef void(GL_APIENTRYP PFN_HMS_XEG_ADAPTIVEVRSPARAMETER) (GLenum pname, GLvoid *param)
```
 描述

设置自适应VRS(Variable Rate Shading)输入参数的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| pname | 输入参数的枚举名，取值范围是[XEG_ADAPTIVE_VRS_INPUT_SIZE](#xeg_adaptive_vrs_input_size)、[XEG_ADAPTIVE_VRS_INPUT_REGION](#xeg_adaptive_vrs_input_region)、[XEG_ADAPTIVE_VRS_TEXEL_SIZE](#xeg_adaptive_vrs_texel_size)、[XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY](#xeg_adaptive_vrs_error_sensitivity)、[XEG_ADAPTIVE_VRS_FLIP](#xeg_adaptive_vrs_flip)。 |
| param | 输入参数值，取值详见输入参数枚举名的说明。 |

#### [h2]PFN_HMS_XEG_APPLYADAPTIVEVRS

```
typedef void(GL_APIENTRYP PFN_HMS_XEG_APPLYADAPTIVEVRS) (GLuint shadingRateImage)
```
 描述

将着色率图像应用到渲染目标中的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| shadingRateImage | 计算得到的着色率图像，传入0表示关闭自适应VRS(Variable Rate Shading)。 |

#### [h2]PFN_HMS_XEG_CmdDispatchAdaptiveVRS

```
typedef void(VKAPI_PTR *PFN_HMS_XEG_CmdDispatchAdaptiveVRS) (VkCommandBuffer commandBuffer, XEG_AdaptiveVRS xegAdaptiveVRS, XEG_AdaptiveVRSDescription *pXegAdaptiveVRSDescription)
```
 描述

执行计算自适应VRS命令的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | 当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。 |
| xegAdaptiveVRS | 已创建的[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。 |
| pXegAdaptiveVRSDescription | 下发命令的参数结构体[XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription)的指针，不允许为空。 |

#### [h2]PFN_HMS_XEG_CmdRadixSortHPS

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CmdRadixSortHPS) (VkCommandBuffer commandBuffer, XEG_HPS hps, const XEG_HPSRadixSortDescription *pDescription)
```
 描述

录制HPS排序命令的函数指针定义，使用此接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询是否支持[XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象。 |
| hps | 已创建的[XEG_HPS](#xeg_hps)对象。 |
| pDescription | [XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展输入信息结构体[XEG_HPSRadixSortDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsortdescription)的指针，不允许为空。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CmdRenderRTGI

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CmdRenderRTGI) (VkCommandBuffer commandBuffer, XEG_RTGI rtGI, const void *pDescription)
```
 描述

执行渲染命令的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | 当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。 |
| rtGI | 已创建的[XEG_RTGI](#xeg_rtgi)对象。 |
| pDescription | 执行渲染命令的信息结构体的指针，若使用DDGI渲染，为结构体[XEG_DDGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgidescription)的指针，若使用NNGI渲染，为结构体[XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription)的指针，不允许为空。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CmdRenderRTReflection

```
typedef VkResult (VKAPI_ATTR *PFN_HMS_XEG_CmdRenderRTReflection)(VkCommandBuffer commandBuffer, XEG_RTReflection rtReflection, const void *pDescription)
```
 描述

录制计算RT反射命中信息命令的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象，需要是Primary类型。 |
| rtReflection | 已创建的[XEG_RTReflection](#xeg_rtreflection)对象。 |
| pDescription | 反射渲染输入信息结构体[XEG_RTReflectionDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectiondescription)的指针，不允许为空。 |

#### [h2]PFN_HMS_XEG_CmdRenderRTVisibleMask

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CmdRenderRTVisibleMask) (VkCommandBuffer commandBuffer, XEG_RTVisibleMask rtVisibleMask, const void *pDescription)
```
 描述

录制光线追踪VisibleMask渲染命令的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象。 |
| rtVisibleMask | 已创建的[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象。 |
| pDescription | 执行渲染命令的输入参数结构体指针，当前仅支持[XEG_RTShadowAODescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaodescription)类型的指针，不允许为空。 |

返回：

VkResult类型的错误码，值为VK_SUCCESS时表示执行成功。

#### [h2]PFN_HMS_XEG_CmdRenderSpatialUpscale

```
typedef void(VKAPI_PTR *PFN_HMS_XEG_CmdRenderSpatialUpscale) (VkCommandBuffer commandBuffer, XEG_SpatialUpscale xegSpatialUpscale, XEG_SpatialUpscaleDescription *pXegSpatialUpscaleDescription)
```
 描述

执行空域GPU超分渲染命令的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | 当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行超分。 |
| xegSpatialUpscale | 已创建的[XEG_SpatialUpscale](#xeg_spatialupscale)对象。 |
| pXegSpatialUpscaleDescription | 渲染命令的参数结构体[XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription)的指针，不允许为空。 |

#### [h2]PFN_HMS_XEG_CmdRenderTemporalUpscale

```
typedef void(VKAPI_ATTR *PFN_HMS_XEG_CmdRenderTemporalUpscale) (VkCommandBuffer commandBuffer, XEG_TemporalUpscale temporalUpscale, XEG_TemporalUpscaleDescription *pDescription)
```
 描述

录制时域AI超分渲染命令的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象，需要是Primary类型。 |
| temporalUpscale | 已创建的[XEG_TemporalUpscale](#xeg_temporalupscale)对象。 |
| pDescription | 超分渲染输入信息结构体[XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription)的指针，不允许为空。 |

#### [h2]PFN_HMS_XEG_CmdRenderNeuralUpscale

```
typedef VkResult (VKAPI_PTR *PFN_HMS_XEG_CmdRenderNeuralUpscale) (VkCommandBuffer commandBuffer, XEG_NeuralUpscale neuralUpscale, const XEG_NeuralUpscaleDescription *pDescription)
```
 描述

录制空域AI超分渲染命令的函数指针定义。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象，需要是Primary类型。 |
| neuralUpscale | 已创建的[XEG_NeuralUpscale](#xeg_neuralupscale)对象。 |
| pDescription | 超分渲染输入信息结构体[XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription)的指针，不允许为空。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CmdSetSynchronization

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CmdSetSynchronization) (VkCommandBuffer commandBuffer, const void *xegHandle)
```
 描述

设置同步信号，等待渲染结果写入指定图像的函数指针定义。使用RTGI特性时，为等待GI渲染结果到写入指定图像。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | 当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。 |
| xegHandle | 已创建句柄对象。使用RTGI特性时，为已创建的[XEG_RTGI](#xeg_rtgi)对象。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CreateAdaptiveVRS

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CreateAdaptiveVRS) (VkDevice device, const XEG_AdaptiveVRSCreateInfo *pXegAdaptiveVRSCreateInfo, XEG_AdaptiveVRS *pXegAdaptiveVRS)
```
 描述

创建[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pXegAdaptiveVRSCreateInfo | 结构体[XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo)的指针，不允许为空。 |
| pXegAdaptiveVRS | 指向句柄的指针，创建的[XEG_AdaptiveVRS](#xeg_adaptivevrs)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CreateHPS

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CreateHPS) (VkDevice device, const XEG_HPSCreateInfo *pCreateInfo, XEG_HPS *pHps)
```
 描述

创建[XEG_HPS](#xeg_hps)对象的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | [XEG_HPS](#xeg_hps)实例句柄创建信息结构体的指针。不允许为空。 |
| pHps | 指向HPS实例句柄的指针，创建的[XEG_HPS](#xeg_hps)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CreateRTGI

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CreateRTGI) (VkDevice device, const void *pCreateInfo, XEG_RTGI *pRtGI)
```
 描述

创建[XEG_RTGI](#xeg_rtgi)对象的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | 创建[XEG_RTGI](#xeg_rtgi)对象的信息结构体的指针，若创建DDGI句柄，为结构体[XEG_DDGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgicreateinfo)的指针，若创建NNGI句柄，为结构体[XEG_NNGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngicreateinfo)的指针，不允许为空。 |
| pRtGI | 指向句柄的指针，创建的[XEG_RTGI](#xeg_rtgi)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CreateRTReflection

```
typedef VkResult(VKAPI_ATTR *PFN_HMS_XEG_CreateRTReflection) (VkDevice device, const void *pCreateInfo, XEG_RTReflection *pRtReflection)
```
 描述

创建[XEG_RTReflection](#xeg_rtreflection)对象的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | 反射实例句柄创建信息结构体的指针，当前仅支持[XEG_RTReflectionCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectioncreateinfo)类型的指针，不允许为空。 |
| pRtReflection | 指向反射实例句柄的指针，创建的[XEG_RTReflection](#xeg_rtreflection)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CreateRTVisibleMask

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CreateRTVisibleMask) (VkDevice device, const void *pCreateInfo, XEG_RTVisibleMask *pRTVisibleMask)
```
 描述

创建[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | 创建VisibleMask实例句柄所需描述信息的结构体的指针，当前仅支持[XEG_RTShadowAOCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaocreateinfo)类型的指针，不允许为空。 |
| pRTVisibleMask | 指向VisibleMask实例句柄的指针，创建的[XEG_RTVisibleMask](#xeg_rtvisiblemask)在此句柄中返回。 |

返回：

VkResult类型的错误码，值为VK_SUCCESS时表示创建成功。

#### [h2]PFN_HMS_XEG_CreateSpatialUpscale

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CreateSpatialUpscale) (VkDevice device, const XEG_SpatialUpscaleCreateInfo *pXegSpatialUpscaleCreateInfo, XEG_SpatialUpscale *pXegSpatialUpscale)
```
 描述

创建[XEG_SpatialUpscale](#xeg_spatialupscale)对象的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pXegSpatialUpscaleCreateInfo | 结构体[XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo)的指针，不允许为空。 |
| pXegSpatialUpscale | 指向句柄的指针，创建的[XEG_SpatialUpscale](#xeg_spatialupscale)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CreateTemporalUpscale

```
typedef VkResult(VKAPI_ATTR *PFN_HMS_XEG_CreateTemporalUpscale) (VkDevice device, XEG_TemporalUpscaleCreateInfo *pTemporalUpscaleInfo, XEG_TemporalUpscale *pTemporalUpscale)
```
 描述

创建[XEG_TemporalUpscale](#xeg_temporalupscale)对象的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pTemporalUpscaleInfo | 超分实例句柄创建信息结构体[XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo)的指针，不允许为空。 |
| pTemporalUpscale | 指向句柄的指针，创建的[XEG_TemporalUpscale](#xeg_temporalupscale)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_CreateNeuralUpscale

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_CreateNeuralUpscale) (VkDevice device, const XEG_NeuralUpscaleCreateInfo *pCreateInfo, XEG_NeuralUpscale *pNeuralUpscale)
```
 描述

创建[XEG_NeuralUpscale](#xeg_neuralupscale)对象的函数指针定义。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | 超分实例句柄创建信息结构体[XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo)的指针，不允许为空。 |
| pNeuralUpscale | 指向句柄的指针，创建的[XEG_NeuralUpscale](#xeg_neuralupscale)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]PFN_HMS_XEG_DestroyAdaptiveVRS

```
typedef void(VKAPI_PTR *PFN_HMS_XEG_DestroyAdaptiveVRS) (XEG_AdaptiveVRS xegAdaptiveVRS)
```
 描述

销毁[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| xegAdaptiveVRS | 已创建的[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。 |

#### [h2]PFN_HMS_XEG_DestroyHPS

```
typedef void(VKAPI_PTR *PFN_HMS_XEG_DestroyHPS) (XEG_HPS hps)
```
 描述

销毁[XEG_HPS](#xeg_hps)对象的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| hps | 需要销毁的[XEG_HPS](#xeg_hps)对象。 |

#### [h2]PFN_HMS_XEG_DestroyRTGI

```
typedef void(VKAPI_PTR *PFN_HMS_XEG_DestroyRTGI) (XEG_RTGI rtGI)
```
 描述

销毁[XEG_RTGI](#xeg_rtgi)对象的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| rtGI | 已创建的[XEG_RTGI](#xeg_rtgi)对象。 |

#### [h2]PFN_HMS_XEG_DestroyRTReflection

```
typedef void(VKAPI_ATTR *PFN_HMS_XEG_DestroyRTReflection) (XEG_RTReflection rtReflection)
```
 描述

销毁[XEG_RTReflection](#xeg_rtreflection)对象的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| rtReflection | 需要销毁的[XEG_RTReflection](#xeg_rtreflection)对象。 |

#### [h2]PFN_HMS_XEG_DestroyRTVisibleMask

```
typedef void(VKAPI_PTR *PFN_HMS_XEG_DestroyRTVisibleMask) (XEG_RTVisibleMask rtVisibleMask)
```
 描述

销毁[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| rtVisibleMask | 需要销毁的[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象。 |

#### [h2]PFN_HMS_XEG_DestroySpatialUpscale

```
typedef void(VKAPI_PTR *PFN_HMS_XEG_DestroySpatialUpscale) (XEG_SpatialUpscale xegSpatialUpscale)
```
 描述

销毁[XEG_SpatialUpscale](#xeg_spatialupscale)对象的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| xegSpatialUpscale | 已创建的[XEG_SpatialUpscale](#xeg_spatialupscale)对象。 |

#### [h2]PFN_HMS_XEG_DestroyTemporalUpscale

```
typedef void(VKAPI_ATTR *PFN_HMS_XEG_DestroyTemporalUpscale) (XEG_TemporalUpscale temporalUpscale)
```
 描述

销毁[XEG_TemporalUpscale](#xeg_temporalupscale)对象的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| temporalUpscale | 需要销毁的[XEG_TemporalUpscale](#xeg_temporalupscale)对象。 |

#### [h2]PFN_HMS_XEG_DestroyNeuralUpscale

```
typedef void(VKAPI_PTR *PFN_HMS_XEG_DestroyNeuralUpscale)(XEG_NeuralUpscale neuralUpscale)
```
 描述

销毁[XEG_NeuralUpscale](#xeg_neuralupscale)对象的函数指针定义。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| neuralUpscale | 需要销毁的[XEG_NeuralUpscale](#xeg_neuralupscale)对象。 |

#### [h2]PFN_HMS_XEG_DISPATCHADAPTIVEVRS

```
typedef void(GL_APIENTRYP PFN_HMS_XEG_DISPATCHADAPTIVEVRS) (GLfloat *reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)
```
 描述

计算着色率图像的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| reprojectionMatrix | 当前帧和上一帧进行计算的结果矩阵的指针，计算公式为：（上一帧投影矩阵* 上一帧的观察矩阵）* （（当前帧的投影矩阵* 当前帧的观察矩阵）的逆矩阵），矩阵必须是4*4列主序的矩阵。可选参数，非空时画质较优。 |
| inputColorImage | 上一帧渲染管线最终渲染结果颜色附件纹理ID。 |
| inputDepthImage | 当前帧渲染管线最终渲染结果深度附件纹理ID。 |
| shadingRateImage | 用于生成着色率图信息的纹理ID，需用户创建并输入。 |

![](./img/note_3.0-zh-cn.png) 纹理类型需要是GL_TEXTURE_2D且mipLevels为1。

#### [h2]PFN_HMS_XEG_EnumerateDeviceExtensionProperties

```
typedef VkResult(VKAPI_PTR *PFN_HMS_XEG_EnumerateDeviceExtensionProperties) (VkPhysicalDevice physicalDevice, uint32_t *pPropertyCount, XEG_ExtensionProperties *pProperties)
```
 描述

XEngine Vulkan扩展特性查询接口函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| physicalDevice | 当前使用的Vulkan物理设备。 |
| pPropertyCount | 查询或传入扩展特性的数量，当**pProperties**为nullptr时返回当前支持的XEngine扩展特性数量。 当传入的**propertyCount**大于或等于真实支持的XEngine扩展特性数量时，通过**pProperties**返回查询信息，返回结果为VK_SUCCESS。 当传入的**propertyCount**小于真实支持的XEngine扩展特性数量时，通过**pProperties**返回查询信息，但返回结果为VK_INCOMPLETE。 |
| pProperties | 查询到的XEngine扩展特性，通过结构体[XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties)指针返回。 |

返回：

返回VkResult类型错误码，查询成功时返回值为VK_SUCCESS。 当pProperties不为nullptr且传入的propertyCount小于实际支持的XEngine扩展特性数量时返回值为VK_INCOMPLETE，表示查询特性不完整。

#### [h2]PFN_HMS_XEG_GETSTRING

```
typedef const GLubyte *(GL_APIENTRYP PFN_HMS_XEG_GETSTRING) (GLenum name)
```
 描述

XEngine OpenGL ES扩展特性查询接口函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| name | 输入参数的枚举名，取值范围为[XEG_EXTENSIONS](#xeg_extensions)。 |

返回：

当参数为[XEG_EXTENSIONS](#xeg_extensions)时，返回XEngine支持的空格分隔的扩展列表，注意扩展名不包含空格字符。查询结果异常则返回空。

#### [h2]PFN_HMS_XEG_NEURALUPSCALEPARAMETER

```
typedef void(GL_APIENTRYP PFN_HMS_XEG_NEURALUPSCALEPARAMETER) (GLenum pname, GLvoid *param)
```
 描述

设置空域AI超分输入参数的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| pname | 输入参数的枚举名，取值范围为[XEG_NEURAL_UPSCALE_SCISSOR](#xeg_neural_upscale_scissor)、[XEG_NEURAL_UPSCALE_SHARPNESS](#xeg_neural_upscale_sharpness)、[XEG_NEURAL_UPSCALE_INPUT_HANDLE](#xeg_neural_upscale_input_handle)。 |
| param | 输入参数的值，取值详见输入参数枚举名的说明。 |

#### [h2]PFN_HMS_XEG_RENDERNEURALUPSCALE

```
typedef void(GL_APIENTRYP PFN_HMS_XEG_RENDERNEURALUPSCALE) (GLuint inputTexture)
```
 描述

执行空域AI超分渲染命令的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| inputTexture | 超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1。[XEG_NEURAL_UPSCALE_EXTENSION_NAME](#xeg_neural_upscale_extension_name)扩展可用时，纹理的宽度取值范围是[448, 1728]，否则可能会引起AI推理结果错误。此输入纹理必须是由[OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer)创建的，并需要在调用此接口前将[OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer)对应的handle设置为超分的输入参数，详见接口[HMS_XEG_NeuralUpscaleParameter](#hms_xeg_neuralupscaleparameter)。[XEG_NEURAL_UPSCALE2_EXTENSION_NAME](#xeg_neural_upscale2_extension_name)扩展可用时，纹理的宽度取值范围建议[448, 1792]，此输入纹理不需要由OH_NativeBuffer创建。 |

#### [h2]PFN_HMS_XEG_RENDERSPATIALUPSCALE

```
typedef void(GL_APIENTRYP PFN_HMS_XEG_RENDERSPATIALUPSCALE) (GLuint inputTexture)
```
 描述

执行空域GPU超分渲染命令的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| inputTexture | 超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1。此纹理必须在调用此接口前创建好，否则会导致渲染失败，如黑屏问题。 |

#### [h2]PFN_HMS_XEG_RenderTemporalUpscale

```
typedef void(GL_APIENTRYP PFN_HMS_XEG_RenderTemporalUpscale) (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY)
```
 描述

执行时域AI超分渲染命令的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| inputTexture | 超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，支持的最大尺寸为2048 * 1024。 |
| depthTexture | 深度纹理。 |
| motionVectorTexture | 运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。 |
| dynamicMaskTexture | 物体的动态遮罩图像，格式需要是GL_RED或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。 |
| jitterX | 相机在x方向的抖动，通常为超分依赖的前序渲染过程中应用的亚像素抖动，包含在相机的投影矩阵中；在ndc坐标系下，其取值范围是 [-1/width, 1/width], width是输入inputTexture纹理的宽度（像素数）。 |
| jitterY | 相机在y方向的抖动，通常为超分依赖的前序渲染过程中应用的亚像素抖动，包含在相机的投影矩阵中；在ndc坐标系下，其取值范围是 [-1/height, 1/height], height是输入inputTexture纹理的高度（像素数）。 |

#### [h2]PFN_HMS_XEG_SPATIALUPSCALEPARAMETER

```
typedef void(GL_APIENTRYP PFN_HMS_XEG_SPATIALUPSCALEPARAMETER) (GLenum pname, GLvoid *param)
```
 描述

设置空域GPU超分输入参数的函数指针定义。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| pname | 输入参数的枚举名，取值范围为[XEG_SPATIAL_UPSCALE_SCISSOR](#xeg_spatial_upscale_scissor)、[XEG_SPATIAL_UPSCALE_SHARPNESS](#xeg_spatial_upscale_sharpness)。 |
| param | 输入参数值，取值详见输入参数枚举名的说明。 |

#### [h2]PFN_HMS_XEG_TemporalUpscaleParameter

```
typedef void(GL_APIENTRYP PFN_HMS_XEG_TemporalUpscaleParameter) (GLenum pname, GLvoid *param)
```
 描述

设置时域AI超分输入参数的函数指针定义。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| pname | 输入参数的枚举名，取值范围为 [XEG_TEMPORAL_UPSCALE_INPUT_SIZE](#xeg_temporal_upscale_input_size)、[XEG_TEMPORAL_UPSCALE_JITTER_NUM](#xeg_temporal_upscale_jitter_num)、[XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED](#xeg_temporal_upscale_depth_reversed)、[XEG_TEMPORAL_UPSCALE_RESET_HISTORY](#xeg_temporal_upscale_reset_history)、[XEG_TEMPORAL_UPSCALE_STEADY_LEVEL](#xeg_temporal_upscale_steady_level)。 |
| param | 输入参数的值，取值详见输入参数枚举名的说明。 |

#### [h2]PFN_HMS_XEG_ControlDisplaySeparationStatusCallback

```
typedef void(*PFN_HMS_XEG_ControlDisplaySeparationStatusCallback) (XEG_ControlDisplaySeparationStatus status);
```
 描述

控显分离特性监听函数的函数指针定义。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| status | 控显分离状态信息的枚举值 |

#### [h2]PFN_HMS_XEG_SetControlDisplaySeparationStatusListener

```
typedef bool(*PFN_HMS_XEG_SetControlDisplaySeparationStatusListener) (PFN_HMS_XEG_ControlDisplaySeparationStatusCallback callback);
```
 描述

设置控显分离特性全局唯一监听函数的函数指针定义。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| callback | 待设置的回调函数，不允许为空 |

返回：

返回设置是否成功，true表示设置成功，false代表设置失败，只有当前设备支持控显分离特性并且应用在module.json中注册了控显分离特性才返回成功。

#### [h2]PFN_HMS_XEG_RemoveControlDisplaySeparationStatusListener

```
typedef void(*PFN_HMS_XEG_RemoveControlDisplaySeparationStatusListener) ();
```
 描述

移除控显分离特性全局唯一监听函数的函数指针定义。

起始版本： 26.0.0

#### [h2]PFN_HMS_XEG_SetControlDisplaySeparationActive

```
typedef bool(*PFN_HMS_XEG_SetControlDisplaySeparationActive) (bool flag);
```
 描述

设置控显分离特性使能开关的函数指针定义。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| flag | 待设置的特性使能开关状态，true表示开启，false表示关闭。 |

返回：

返回设置是否成功，true表示设置成功，false代表设置失败，设置控显分离特性使能成功的前提是必须设置控显分离特性监听函数并且监听函数回调的状态为可用。

#### [h2]XEG_AdaptiveVRS

```
VK_DEFINE_HANDLE(XEG_AdaptiveVRS)
```
 描述

[XEG_AdaptiveVRS](#xeg_adaptivevrs)的句柄。

起始版本： 5.0.0(12)

#### [h2]XEG_AdaptiveVRSCreateInfo

```
typedef struct XEG_AdaptiveVRSCreateInfo XEG_AdaptiveVRSCreateInfo
```
 描述

此结构体描述创建[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象的参数信息，当结构体中的信息变化时，需要创建新的[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。

起始版本： 5.0.0(12)

#### [h2]XEG_AdaptiveVRSDescription

```
typedef struct XEG_AdaptiveVRSDescription XEG_AdaptiveVRSDescription
```
 描述

此结构体描述下发绘制着色率纹理命令需要的参数信息，每一帧都需要进行更新。

起始版本： 5.0.0(12)

#### [h2]XEG_DenoiseQualityMode

```
typedef enum XEG_DenoiseQualityMode XEG_DenoiseQualityMode
```
 描述

去噪质量模式枚举。

起始版本： 6.0.0(20)

#### [h2]XEG_ExtensionProperties

```
typedef struct XEG_ExtensionProperties XEG_ExtensionProperties
```
 描述

此结构体描述通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询到的XEngine扩展特性集合。

起始版本： 5.0.0(12)

#### [h2]XEG_HPS

```
VK_DEFINE_HANDLE(XEG_HPS)
```
 描述

[XEG_HPS](#xeg_hps)的句柄。

起始版本： 6.0.0(20)

#### [h2]XEG_HPSCreateInfo

```
typedef struct XEG_HPSCreateInfo XEG_HPSCreateInfo
```
 描述

此结构体描述创建[XEG_HPS](#xeg_hps)对象的信息。

起始版本： 6.0.0(20)

#### [h2]XEG_HPSRadixSort

```
typedef struct XEG_HPSRadixSort XEG_HPSRadixSort
```
 描述

此结构体描述HPS基数排序扩展结构信息。

起始版本： 6.0.0(20)

#### [h2]XEG_HPSRadixSortDescription

```
typedef struct XEG_HPSRadixSortDescription XEG_HPSRadixSortDescription
```
 描述

此结构体描述使用[XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展进行排序时所需的信息。

起始版本： 6.0.0(20)

#### [h2]XEG_RTGI

```
VK_DEFINE_HANDLE(XEG_RTGI)
```
 描述

[XEG_RTGI](#xeg_rtgi)的句柄。

起始版本： 6.0.0(20)

#### [h2]XEG_RTGIQualityMode

```
typedef enum XEG_RTGIQualityMode XEG_RTGIQualityMode
```
 描述

输出图像质量模式的枚举。

起始版本： 6.0.0(20)

#### [h2]XEG_RTReflection

```
VK_DEFINE_HANDLE(XEG_RTReflection)
```
 描述

[XEG_RTReflection](#xeg_rtreflection)的句柄。

起始版本： 6.0.0(20)

#### [h2]XEG_RTReflectionCreateInfo

```
typedef struct XEG_RTReflectionCreateInfo XEG_RTReflectionCreateInfo
```
 描述

此结构体描述创建[XEG_RTReflection](#xeg_rtreflection)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_RTReflection](#xeg_rtreflection)对象。

起始版本： 6.0.0(20)

#### [h2]XEG_RTReflectionDescription

```
typedef struct XEG_RTReflectionDescription XEG_RTReflectionDescription
```
 描述

此结构体描述下发光线求交命令时的输入信息。

起始版本： 6.0.0(20)

#### [h2]XEG_RTVisibleMask

```
VK_DEFINE_HANDLE(XEG_RTVisibleMask)
```
 描述

[XEG_RTVisibleMask](#xeg_rtvisiblemask)的句柄。表示光线追踪VisibleMask特性实例，支持阴影和环境光遮蔽效果。

起始版本： 6.0.0(20)

#### [h2]XEG_SpatialUpscale

```
VK_DEFINE_HANDLE(XEG_SpatialUpscale)
```
 描述

[XEG_SpatialUpscale](#xeg_spatialupscale)的句柄。

起始版本： 5.0.0(12)

#### [h2]XEG_SpatialUpscaleCreateInfo

```
typedef struct XEG_SpatialUpscaleCreateInfo XEG_SpatialUpscaleCreateInfo
```
 描述

此结构体描述创建[XEG_SpatialUpscale](#xeg_spatialupscale)对象的信息，当结构体中的信息变化时，需要创建新的[XEG_SpatialUpscale](#xeg_spatialupscale)对象。

起始版本： 5.0.0(12)

#### [h2]XEG_SpatialUpscaleDescription

```
typedef struct XEG_SpatialUpscaleDescription XEG_SpatialUpscaleDescription
```
 描述

此结构体描述下发空域GPU超分渲染命令时需要的图像信息。

起始版本： 5.0.0(12)

#### [h2]XEG_StructureType

```
typedef enum XEG_StructureType XEG_StructureType
```
 描述

XEngine结构体类型的枚举。

起始版本： 6.0.0(20)

#### [h2]XEG_TemporalUpscale

```
VK_DEFINE_HANDLE(XEG_TemporalUpscale)
```
 描述

[XEG_TemporalUpscale](#xeg_temporalupscale)的句柄。

起始版本： 5.0.0(12)

#### [h2]XEG_TemporalUpscaleCreateInfo

```
typedef struct XEG_TemporalUpscaleCreateInfo XEG_TemporalUpscaleCreateInfo
```
 描述

此结构体描述创建[XEG_TemporalUpscale](#xeg_temporalupscale)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_TemporalUpscale](#xeg_temporalupscale)对象。

起始版本： 5.0.0(12)

#### [h2]XEG_TemporalUpscaleDescription

```
typedef struct XEG_TemporalUpscaleDescription XEG_TemporalUpscaleDescription
```
 描述

此结构体描述下发时域AI超分渲染命令时的输入信息。

起始版本： 5.0.0(12)

#### [h2]XEG_TraversalMode

```
typedef enum XEG_TraversalMode XEG_TraversalMode
```
 描述

遍历模式枚举。

起始版本： 6.0.0(20)

#### [h2]XEG_NeuralUpscale

```
VK_DEFINE_HANDLE(XEG_NeuralUpscale)
```
 描述

[XEG_NeuralUpscale](#xeg_neuralupscale)的句柄。

起始版本： 26.0.0

#### [h2]XEG_NeuralUpscaleCreateInfo

```
typedef struct XEG_NeuralUpscaleCreateInfo XEG_NeuralUpscaleCreateInfo
```
 描述

此结构体描述创建[XEG_NeuralUpscale](#xeg_neuralupscale)对象的信息。当结构体中的信息变化时，需要创建新的[XEG_NeuralUpscale](#xeg_neuralupscale)对象。

起始版本： 26.0.0

#### [h2]XEG_NeuralUpscaleDescription

```
typedef struct XEG_NeuralUpscaleDescription XEG_NeuralUpscaleDescription
```
 描述

此结构体描述下发空域AI超分渲染命令时的输入信息。

起始版本： 26.0.0

#### [h2]XEG_ControlDisplaySeparationStatus

```
typedef enum XEG_ControlDisplaySeparationStatus XEG_ControlDisplaySeparationStatus
```
 描述

控显分离当前的状态信息的枚举

起始版本： 26.0.0

#### 枚举类型说明

#### [h2]XEG_DenoiseQualityMode

```
enum XEG_DenoiseQualityMode
```
 描述

去噪质量模式枚举。

起始版本： 6.0.0(20)

| 枚举值 | 描述 |
| --- | --- |
| XEG_DENOISE_QUALITY_MODE_NONE | 不进行去噪。 |
| XEG_DENOISE_QUALITY_MODE_QUALITY | 生成高质量的无噪声结果，但速度可能较慢。 |
| XEG_DENOISE_QUALITY_MODE_BALANCED | 生成较高质量的无噪声结果，速度适中。 |
| XEG_DENOISE_QUALITY_MODE_PERFORMANCES | 高性能地生成无噪声结果。 |

#### [h2]XEG_RTGIQualityMode

```
enum XEG_RTGIQualityMode
```
 描述

输出图像质量模式的枚举。

起始版本： 6.0.0(20)

| 枚举值 | 描述 |
| --- | --- |
| XEG_RTGI_QUALITY_MODE_QUALITY | 质量模式。 |
| XEG_RTGI_QUALITY_MODE_BALANCED | 平衡模式。 |
| XEG_RTGI_QUALITY_MODE_PERFORMANCE | 性能模式。 |

#### [h2]XEG_StructureType

```
enum XEG_StructureType
```
 描述

XEngine结构体类型的枚举。

起始版本： 6.0.0(20)

| 枚举值 | 描述 |
| --- | --- |
| XEG_STRUCTURE_TYPE_RT_SHADOWAO_CREATE_INFO | 结构体[XEG_RTShadowAOCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaocreateinfo)的类型。 |
| XEG_STRUCTURE_TYPE_RT_SHADOWAO_DESCRIPTION | 结构体[XEG_RTShadowAODescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaodescription)的类型。 |
| XEG_STRUCTURE_TYPE_RT_REFLECTION_CREATE_INFO | 结构体[XEG_RTReflectionCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectioncreateinfo)的类型。 |
| XEG_STRUCTURE_TYPE_RT_REFLECTION_DESCRIPTION | 结构体[XEG_RTReflectionDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectiondescription)的类型。 |
| XEG_STRUCTURE_TYPE_NNGI_CREATE_INFO | 结构体[XEG_NNGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngicreateinfo)的类型。 |
| XEG_STRUCTURE_TYPE_NNGI_DESCRIPTION | 结构体[XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription)的类型。 |
| XEG_STRUCTURE_TYPE_DDGI_CREATE_INFO | 结构体[XEG_DDGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgicreateinfo)的类型。 |
| XEG_STRUCTURE_TYPE_DDGI_DESCRIPTION | 结构体[XEG_DDGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgidescription)的类型。 |
| XEG_STRUCTURE_TYPE_NEURAL_UPSCALE_CREATE_INFO | 结构体[XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo)的类型。 |
| XEG_STRUCTURE_TYPE_NEURAL_UPSCALE_DESCRIPTION | 结构体[XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription)的类型。 |
| XEG_STRUCTURE_TYPE_HPS_CREATE_INFO | 结构体[XEG_HPSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpscreateinfo)的类型。 |
| XEG_STRUCTURE_TYPE_HPS_RADIX_SORT | 结构体[XEG_HPSRadixSort](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsort)的类型。 |
| XEG_STRUCTURE_TYPE_HPS_RADIX_SORT_DESCRIPTION | 结构体[XEG_HPSRadixSortDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsortdescription)的类型。 |

#### [h2]XEG_TraversalMode

```
enum XEG_TraversalMode
```
 描述

遍历模式枚举。

起始版本： 6.0.0(20)

| 枚举值 | 描述 |
| --- | --- |
| XEG_TRAVERSAL_MODE_DEFAULT | 逐像素进行光线追踪场景遍历。 |
| XEG_TRAVERSAL_MODE_PERFORMANCES | 通过算法进行场景遍历，性能更好，画质可能有细微的差别。 |

#### [h2]XEG_ControlDisplaySeparationStatus

```
enum XEG_ControlDisplaySeparationStatus
```
 描述

控显分离当前的状态信息的枚举

起始版本： 26.0.0

| 枚举值 | 描述 |
| --- | --- |
| UNAVAILABLE | 控显分离不可用。 |
| AVAILABLE | 控显分离可用。 |

#### 函数说明

#### [h2]HMS_XEG_AdaptiveVRSParameter()

```
GL_APICALL void GL_APIENTRY HMS_XEG_AdaptiveVRSParameter (GLenum pname, GLvoid * param)
```
 描述

设置自适应VRS(Variable Rate Shading)的参数。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| pname | 输入参数的枚举名，取值范围是[XEG_ADAPTIVE_VRS_INPUT_SIZE](#xeg_adaptive_vrs_input_size)、[XEG_ADAPTIVE_VRS_INPUT_REGION](#xeg_adaptive_vrs_input_region)、[XEG_ADAPTIVE_VRS_TEXEL_SIZE](#xeg_adaptive_vrs_texel_size)、[XEG_ADAPTIVE_VRS_ERROR_SENSITIVITY](#xeg_adaptive_vrs_error_sensitivity)、[XEG_ADAPTIVE_VRS_FLIP](#xeg_adaptive_vrs_flip)。 |
| param | 输入参数值，取值详见输入参数枚举名的说明。 |

#### [h2]HMS_XEG_ApplyAdaptiveVRS()

```
GL_APICALL void GL_APIENTRY HMS_XEG_ApplyAdaptiveVRS (GLuint shadingRateImage)
```
 描述

将着色率图像应用到渲染目标中。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| shadingRateImage | 计算得到的着色率图像，传入0表示关闭自适应VRS(Variable Rate Shading)。 |

#### [h2]HMS_XEG_CmdDispatchAdaptiveVRS()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdDispatchAdaptiveVRS (VkCommandBuffer commandBuffer, XEG_AdaptiveVRS xegAdaptiveVRS, XEG_AdaptiveVRSDescription * pXegAdaptiveVRSDescription)
```
 描述

执行计算自适应VRS命令。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | 当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。 |
| xegAdaptiveVRS | 已创建的[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。 |
| pXegAdaptiveVRSDescription | 下发命令的参数结构体[XEG_AdaptiveVRSDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrsdescription)的指针，不允许为空。 |

#### [h2]HMS_XEG_CmdRadixSortHPS()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRadixSortHPS (VkCommandBuffer commandBuffer, XEG_HPS hps, const XEG_HPSRadixSortDescription * pDescription)
```
 描述

录制HPS排序命令，使用此接口前需要通过[HMS_XEG_EnumerateDeviceExtensionProperties](#hms_xeg_enumeratedeviceextensionproperties)接口查询是否支持[XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象。 |
| hps | 已创建的[XEG_HPS](#xeg_hps)对象。 |
| pDescription | [XEG_HPS_RADIX_SORT_EXTENSION_NAME](#xeg_hps_radix_sort_extension_name)扩展输入信息结构体[XEG_HPSRadixSortDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-hpsradixsortdescription)的指针，不允许为空。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CmdRenderRTGI()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTGI (VkCommandBuffer commandBuffer, XEG_RTGI rtGI, const void * pDescription)
```
 描述

执行渲染命令。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | 当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。 |
| rtGI | 已创建的[XEG_RTGI](#xeg_rtgi)对象。 |
| pDescription | 执行渲染命令的信息结构体的指针，若使用DDGI渲染，为结构体[XEG_DDGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgidescription)的指针，若使用NNGI渲染，为结构体[XEG_NNGIDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngidescription)的指针，不允许为空。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CmdRenderRTReflection()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTReflection (VkCommandBuffer commandBuffer, XEG_RTReflection rtReflection, const void * pDescription)
```
 描述

录制计算RT反射命中信息命令。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象，需要是Primary类型。 |
| rtReflection | 已创建的[XEG_RTReflection](#xeg_rtreflection)对象。 |
| pDescription | 反射渲染输入信息结构体[XEG_RTReflectionDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectiondescription)的指针，不允许为空。 |

#### [h2]HMS_XEG_CmdRenderRTVisibleMask()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderRTVisibleMask (VkCommandBuffer commandBuffer, XEG_RTVisibleMask rtVisibleMask, const void * pDescription)
```
 描述

录制光线追踪VisibleMask渲染命令。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象。 |
| rtVisibleMask | 已创建的[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象。 |
| pDescription | 执行渲染命令的输入参数结构体指针，当前仅支持[XEG_RTShadowAODescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaodescription)类型的指针，不允许为空。 |

返回：

VkResult类型的错误码，值为VK_SUCCESS时表示执行成功。

#### [h2]HMS_XEG_CmdRenderSpatialUpscale()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdRenderSpatialUpscale (VkCommandBuffer commandBuffer, XEG_SpatialUpscale xegSpatialUpscale, XEG_SpatialUpscaleDescription * pXegSpatialUpscaleDescription)
```
 描述

执行空域GPU超分渲染命令。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | 当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行超分。 |
| xegSpatialUpscale | 已创建的[XEG_SpatialUpscale](#xeg_spatialupscale)对象。 |
| pXegSpatialUpscaleDescription | 渲染命令的参数结构体[XEG_SpatialUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscaledescription)的指针，不允许为空。 |

#### [h2]HMS_XEG_CmdRenderTemporalUpscale()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_CmdRenderTemporalUpscale (VkCommandBuffer commandBuffer, XEG_TemporalUpscale temporalUpscale, XEG_TemporalUpscaleDescription * pDescription)
```
 描述

录制时域AI超分渲染命令。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象，需要是Primary类型。 |
| temporalUpscale | 已创建的[XEG_TemporalUpscale](#xeg_temporalupscale)对象。 |
| pDescription | 超分渲染输入信息结构体[XEG_TemporalUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscaledescription)的指针，不允许为空。 |

#### [h2]HMS_XEG_CmdRenderNeuralUpscale()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdRenderNeuralUpscale (VkCommandBuffer commandBuffer, XEG_NeuralUpscale neuralUpscale, const XEG_NeuralUpscaleDescription *pDescription)
```
 描述

录制空域AI超分渲染命令。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | Vulkan命令缓冲对象，需要是Primary类型。 |
| neuralUpscale | 已创建的[XEG_NeuralUpscale](#xeg_neuralupscale)对象。 |
| pDescription | 超分渲染输入信息结构体[XEG_NeuralUpscaleDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscaledescription)的指针，不允许为空。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CmdSetSynchronization()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CmdSetSynchronization (VkCommandBuffer commandBuffer, const void * xegHandle )
```
 描述

设置同步信号，等待渲染结果写入指定图像。使用RTGI特性时，为等待GI渲染结果写入指定图像。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| commandBuffer | 当前记录命令的VkCommandBuffer，此VkCommandBuffer必须被提交到vkQueueSubmit，否则无法执行。 |
| xegHandle | 已创建句柄对象。使用RTGI特性时，为已创建的[XEG_RTGI](#xeg_rtgi)对象。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CreateAdaptiveVRS()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateAdaptiveVRS (VkDevice device, XEG_AdaptiveVRSCreateInfo * pXegAdaptiveVRSCreateInfo, XEG_AdaptiveVRS * pXegAdaptiveVRS)
```
 描述

创建[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pXegAdaptiveVRSCreateInfo | 结构体[XEG_AdaptiveVRSCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-adaptivevrscreateinfo)的指针，不允许为空。 |
| pXegAdaptiveVRS | 指向句柄的指针，创建的[XEG_AdaptiveVRS](#xeg_adaptivevrs)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CreateHPS()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateHPS (VkDevice device, const XEG_HPSCreateInfo * pCreateInfo, XEG_HPS * pHps )
```
 描述

创建[XEG_HPS](#xeg_hps)对象。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | [XEG_HPS](#xeg_hps)实例句柄创建信息结构体的指针。不允许为空。 |
| pHps | 指向HPS实例句柄的指针，创建的[XEG_HPS](#xeg_hps)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CreateRTGI()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTGI (VkDevice device, const void * pCreateInfo, XEG_RTGI * pRtGI )
```
 描述

创建[XEG_RTGI](#xeg_rtgi)对象。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | 创建[XEG_RTGI](#xeg_rtgi)对象的信息结构体的指针，若创建DDGI句柄，为结构体[XEG_DDGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-ddgicreateinfo)的指针，若创建NNGI句柄，为结构体[XEG_NNGICreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-nngicreateinfo)的指针，不允许为空。 |
| pRtGI | 指向句柄的指针，创建的[XEG_RTGI](#xeg_rtgi)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CreateRTReflection()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTReflection (VkDevice device, const void * pCreateInfo, XEG_RTReflection * pRtReflection )
```
 描述

创建[XEG_RTReflection](#xeg_rtreflection)对象。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | 反射实例句柄创建信息结构体的指针，当前仅支持[XEG_RTReflectionCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtreflectioncreateinfo)类型的指针，不允许为空。 |
| pRtReflection | 指向反射实例句柄的指针，创建的[XEG_RTReflection](#xeg_rtreflection)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CreateRTVisibleMask()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateRTVisibleMask (VkDevice device, const void * pCreateInfo, XEG_RTVisibleMask * pRTVisibleMask )
```
 描述

创建[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | 创建VisibleMask实例句柄所需描述信息的结构体的指针，当前仅支持[XEG_RTShadowAOCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-rtshadowaocreateinfo)类型的指针，不允许为空。 |
| pRTVisibleMask | 指向VisibleMask实例句柄的指针，创建的[XEG_RTVisibleMask](#xeg_rtvisiblemask)在此句柄中返回。 |

返回：

VkResult类型的错误码，值为VK_SUCCESS时表示创建成功。

#### [h2]HMS_XEG_CreateSpatialUpscale()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateSpatialUpscale (VkDevice device, const XEG_SpatialUpscaleCreateInfo * pXegSpatialUpscaleCreateInfo, XEG_SpatialUpscale * pXegSpatialUpscale)
```
 描述

创建[XEG_SpatialUpscale](#xeg_spatialupscale)对象。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pXegSpatialUpscaleCreateInfo | 结构体[XEG_SpatialUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-spatialupscalecreateinfo)的指针，不允许为空。 |
| pXegSpatialUpscale | 指向句柄的指针，创建的[XEG_SpatialUpscale](#xeg_spatialupscale)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CreateTemporalUpscale()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateTemporalUpscale (VkDevice device, XEG_TemporalUpscaleCreateInfo * pTemporalUpscaleInfo, XEG_TemporalUpscale * pTemporalUpscale)
```
 描述

创建[XEG_TemporalUpscale](#xeg_temporalupscale)对象。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pTemporalUpscaleInfo | 超分实例句柄创建信息结构体[XEG_TemporalUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-temporalupscalecreateinfo)的指针，不允许为空。 |
| pTemporalUpscale | 指向句柄的指针，创建的[XEG_TemporalUpscale](#xeg_temporalupscale)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_CreateNeuralUpscale()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_CreateNeuralUpscale (VkDevice device, const XEG_NeuralUpscaleCreateInfo * pCreateInfo, XEG_NeuralUpscale * pNeuralUpscale)
```
 描述

创建[XEG_NeuralUpscale](#xeg_neuralupscale)对象。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| device | 必须是当前使用的VkDevice。 |
| pCreateInfo | 超分实例句柄创建信息结构体[XEG_NeuralUpscaleCreateInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-neuralupscalecreateinfo)的指针，不允许为空。 |
| pNeuralUpscale | 指向句柄的指针，创建的[XEG_NeuralUpscale](#xeg_neuralupscale)在此句柄中返回。 |

返回：

返回一个VkResult类型的错误码，返回值为VK_SUCCESS表示执行成功。

#### [h2]HMS_XEG_DestroyAdaptiveVRS()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyAdaptiveVRS (XEG_AdaptiveVRS xegAdaptiveVRS)
```
 描述

销毁[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| xegAdaptiveVRS | 已创建的[XEG_AdaptiveVRS](#xeg_adaptivevrs)对象。 |

#### [h2]HMS_XEG_DestroyHPS()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyHPS (XEG_HPS hps)
```
 描述

销毁[XEG_HPS](#xeg_hps)对象。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| hps | 需要销毁的[XEG_HPS](#xeg_hps)对象。 |

#### [h2]HMS_XEG_DestroyRTGI()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTGI (XEG_RTGI rtGI)
```
 描述

销毁[XEG_RTGI](#xeg_rtgi)对象。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| rtGI | 已创建的[XEG_RTGI](#xeg_rtgi)对象。 |

#### [h2]HMS_XEG_DestroyRTReflection()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTReflection (XEG_RTReflection rtReflection)
```
 描述

销毁[XEG_RTReflection](#xeg_rtreflection)对象。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| rtReflection | 需要销毁的[XEG_RTReflection](#xeg_rtreflection)对象。 |

#### [h2]HMS_XEG_DestroyRTVisibleMask()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyRTVisibleMask (XEG_RTVisibleMask rtVisibleMask)
```
 描述

销毁[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| rtVisibleMask | 需要销毁的[XEG_RTVisibleMask](#xeg_rtvisiblemask)对象。 |

#### [h2]HMS_XEG_DestroySpatialUpscale()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroySpatialUpscale (XEG_SpatialUpscale xegSpatialUpscale)
```
 描述

销毁[XEG_SpatialUpscale](#xeg_spatialupscale)对象。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| xegSpatialUpscale | 已创建的[XEG_SpatialUpscale](#xeg_spatialupscale)对象。 |

#### [h2]HMS_XEG_DestroyTemporalUpscale()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyTemporalUpscale (XEG_TemporalUpscale temporalUpscale)
```
 描述

销毁[XEG_TemporalUpscale](#xeg_temporalupscale)对象。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| temporalUpscale | 需要销毁的[XEG_TemporalUpscale](#xeg_temporalupscale)对象。 |

#### [h2]HMS_XEG_DestroyNeuralUpscale()

```
VKAPI_ATTR void VKAPI_CALL HMS_XEG_DestroyNeuralUpscale (XEG_NeuralUpscale neuralUpscale)
```
 描述

销毁[XEG_NeuralUpscale](#xeg_neuralupscale)对象。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| neuralUpscale | 需要销毁的[XEG_NeuralUpscale](#xeg_neuralupscale)对象。 |

#### [h2]HMS_XEG_DispatchAdaptiveVRS()

```
GL_APICALL void GL_APIENTRY HMS_XEG_DispatchAdaptiveVRS (GLfloat * reprojectionMatrix, GLuint inputColorImage, GLuint inputDepthImage, GLuint shadingRateImage)
```
 描述

计算着色率图像。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| reprojectionMatrix | 当前帧和上一帧进行计算的结果矩阵的指针，计算公式为：（上一帧投影矩阵* 上一帧的观察矩阵）* （（当前帧的投影矩阵* 当前帧的观察矩阵）的逆矩阵），矩阵必须是4*4列主序的矩阵。可选参数，非空时画质较优。 |
| inputColorImage | 上一帧渲染管线最终渲染结果颜色附件纹理ID。 |
| inputDepthImage | 当前帧渲染管线最终渲染结果深度附件纹理ID。 |
| shadingRateImage | 用于生成着色率图信息的纹理ID，需用户创建并输入。 |

![](./img/note_3.0-zh-cn.png) 纹理类型需要是GL_TEXTURE_2D且mipLevels为1。

#### [h2]HMS_XEG_EnumerateDeviceExtensionProperties()

```
VKAPI_ATTR VkResult VKAPI_CALL HMS_XEG_EnumerateDeviceExtensionProperties (VkPhysicalDevice physicalDevice, uint32_t * pPropertyCount, XEG_ExtensionProperties * pProperties)
```
 描述

XEngine Vulkan扩展特性查询接口。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| physicalDevice | 当前使用的Vulkan物理设备。 |
| pPropertyCount | 查询或传入扩展特性的数量，当**pProperties**为nullptr时返回当前支持的XEngine扩展特性数量。 当传入的**propertyCount**大于或等于真实支持的XEngine扩展特性数量时，通过**pProperties**返回查询信息，返回结果为VK_SUCCESS。 当传入的**propertyCount**小于真实支持的XEngine扩展特性数量时，通过**pProperties**返回查询信息，但返回结果为VK_INCOMPLETE。 |
| pProperties | 查询到的XEngine扩展特性，通过结构体[XEG_ExtensionProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-extensionproperties)指针返回。 |

返回：

返回VkResult类型错误码，查询成功时返回值为VK_SUCCESS。 当pProperties不为nullptr且传入的propertyCount小于实际支持的XEngine扩展特性数量时返回值为VK_INCOMPLETE，表示查询特性不完整。

#### [h2]HMS_XEG_GetString()

```
const GLubyte* HMS_XEG_GetString (GLenum name)
```
 描述

XEngine OpenGL ES扩展特性查询接口。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| name | 输入参数的枚举名，取值范围为[XEG_EXTENSIONS](#xeg_extensions)。 |

返回：

当参数为[XEG_EXTENSIONS](#xeg_extensions)时，返回XEngine支持的空格分隔的扩展列表，注意扩展名不包含空格字符。查询结果异常则返回空。

#### [h2]HMS_XEG_NeuralUpscaleParameter()

```
GL_APICALL void GL_APIENTRY HMS_XEG_NeuralUpscaleParameter (GLenum pname, GLvoid * param)
```
 描述

设置空域AI超分输入参数。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| pname | 输入参数的枚举名，取值范围为[XEG_NEURAL_UPSCALE_SCISSOR](#xeg_neural_upscale_scissor)、[XEG_NEURAL_UPSCALE_SHARPNESS](#xeg_neural_upscale_sharpness)、[XEG_NEURAL_UPSCALE_INPUT_HANDLE](#xeg_neural_upscale_input_handle)。 |
| param | 输入参数值，取值详见输入参数枚举名的说明。 |

#### [h2]HMS_XEG_RenderNeuralUpscale()

```
GL_APICALL void GL_APIENTRY HMS_XEG_RenderNeuralUpscale (GLuint inputTexture)
```
 描述

执行空域AI超分渲染命令。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| inputTexture | 超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1。[XEG_NEURAL_UPSCALE_EXTENSION_NAME](#xeg_neural_upscale_extension_name)扩展可用时，纹理的宽度取值范围是[448, 1728]，否则可能会引起AI推理结果错误。此输入纹理必须是由[OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer)创建的，并需要在调用此接口前将[OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer)对应的handle设置为超分的输入参数，详见接口[HMS_XEG_NeuralUpscaleParameter](#hms_xeg_neuralupscaleparameter)。[XEG_NEURAL_UPSCALE2_EXTENSION_NAME](#xeg_neural_upscale2_extension_name)扩展可用时，纹理的宽度取值范围建议[448, 1792]，此输入纹理不需要由OH_NativeBuffer创建。 |

#### [h2]HMS_XEG_RenderSpatialUpscale()

```
GL_APICALL void GL_APIENTRY HMS_XEG_RenderSpatialUpscale (GLuint inputTexture)
```
 描述

执行空域GPU超分渲染命令。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| inputTexture | 超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1。此纹理必须在调用此接口前创建好，否则会导致渲染失败，如黑屏问题。 |

#### [h2]HMS_XEG_RenderTemporalUpscale()

```
GL_APICALL void GL_APIENTRY HMS_XEG_RenderTemporalUpscale (GLuint inputTexture, GLuint depthTexture, GLuint motionVectorTexture, GLuint dynamicMaskTexture, GLfloat jitterX, GLfloat jitterY )
```
 描述

执行时域AI超分渲染命令。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| inputTexture | 超分输入纹理，输入纹理是GL_TEXTURE_2D类型且mipLevels为1，支持的最大尺寸为2048 * 1024。 |
| depthTexture | 深度纹理。 |
| motionVectorTexture | 运动矢量图像。运动矢量的计算方式为当前渲染像素的NDC坐标的XY值减去上一帧的NDC坐标的XY值。 |
| dynamicMaskTexture | 物体的动态遮罩图像，格式需要是GL_RED或其兼容格式。R通道的合法值为0.0，0.2或1.0，其中0.0表示静态物体，0.2表示运动物体如人物，1.0表示特效或半透明物体。 |
| jitterX | 相机在X方向上的抖动，通常为超分依赖的前序渲染过程中应用的亚像素抖动，包含在相机的投影矩阵中；在ndc坐标系下，其取值范围是 [-1/width, 1/width], width是输入inputTexture纹理的宽度（像素数）。 |
| jitterY | 相机在Y方向上的抖动，通常为超分依赖的前序渲染过程中应用的亚像素抖动，包含在相机的投影矩阵中；在ndc坐标系下，其取值范围是 [-1/height, 1/height], height是输入inputTexture纹理的高度（像素数）。 |

#### [h2]HMS_XEG_SpatialUpscaleParameter()

```
GL_APICALL void GL_APIENTRY HMS_XEG_SpatialUpscaleParameter (GLenum pname, GLvoid * param)
```
 描述

设置空域GPU超分输入参数。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| pname | 输入参数的枚举名，取值范围为[XEG_SPATIAL_UPSCALE_SCISSOR](#xeg_spatial_upscale_scissor)、[XEG_SPATIAL_UPSCALE_SHARPNESS](#xeg_spatial_upscale_sharpness)。 |
| param | 输入参数值，取值详见输入参数枚举名的说明。 |

#### [h2]HMS_XEG_TemporalUpscaleParameter()

```
GL_APICALL void GL_APIENTRY HMS_XEG_TemporalUpscaleParameter (GLenum pname, const GLvoid * param)
```
 描述

设置时域AI超分输入参数。

起始版本： 6.0.0(20)

参数:

| 名称 | 描述 |
| --- | --- |
| pname | 输入参数的枚举名，取值范围为[XEG_TEMPORAL_UPSCALE_INPUT_SIZE](#xeg_temporal_upscale_input_size)、[XEG_TEMPORAL_UPSCALE_JITTER_NUM](#xeg_temporal_upscale_jitter_num)、[XEG_TEMPORAL_UPSCALE_DEPTH_REVERSED](#xeg_temporal_upscale_depth_reversed)、[XEG_TEMPORAL_UPSCALE_RESET_HISTORY](#xeg_temporal_upscale_reset_history)、[XEG_TEMPORAL_UPSCALE_STEADY_LEVEL](#xeg_temporal_upscale_steady_level)。 |
| param | 输入参数的值，取值详见输入参数枚举名的说明。 |

#### [h2]HMS_XEG_SetControlDisplaySeparationStatusListener()

```
bool HMS_XEG_SetControlDisplaySeparationStatusListener(PFN_HMS_XEG_ControlDisplaySeparationStatusCallback callback);
```
 描述

设置控显分离特性全局唯一监听函数。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| callback | 待设置的回调函数，不允许为空。 |

返回:

返回设置是否成功，true表示设置成功，false代表设置失败，只有当前设备支持控显分离特性并且应用在module.json中注册了控显分离特性才返回成功。

#### [h2]HMS_XEG_RemoveControlDisplaySeparationStatusListener()

```
void HMS_XEG_RemoveControlDisplaySeparationStatusListener();
```
 描述

移除控显分离特性全局唯一监听函数。

起始版本： 26.0.0

#### [h2]HMS_XEG_SetControlDisplaySeparationActive()

```
bool HMS_XEG_SetControlDisplaySeparationActive(bool flag);
```
 描述

设置控显分离特性使能开关。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| flag | 待设置的特性使能开关状态，true表示开启，false表示关闭。 |

返回:

返回设置是否成功，true表示设置成功，false代表设置失败，设置控显分离特性使能成功的前提是必须设置控显分离特性监听函数并且监听函数回调的状态为可用。
