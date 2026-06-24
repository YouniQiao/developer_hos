---
title: "GraphicsAccelerate"
upstream_id: "harmonyos-references/_graphics_accelerate"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:12.725903"
---

# GraphicsAccelerate

#### 概述

提供Graphics Accelerate Kit图形渲染加速能力的相关接口。

系统能力： SystemCapability.GraphicsGame.RenderAccelerate

起始版本： 5.0.0(12)

#### 汇总

#### [h2]文件

| 名称 | 描述 |
| --- | --- |
| [abr_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/abr__base_8h) | 声明不区分图形API平台的ABR（自适应稳态渲染）接口。 |
| [abr_gles.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/abr__gles_8h) | 声明OpenGL ES图形API平台的ABR接口。 |
| [frame_generation_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__base_8h) | 声明不区分图形API平台的超帧接口。 |
| [frame_generation_gles.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__gles_8h) | 声明OpenGL ES图形API平台的超帧接口。 |
| [frame_generation_vk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__vk_8h) | 声明Vulkan图形API平台的超帧接口。 |
| [opengtx_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengtx__base_8h) | 声明不区分OpenGL ES和Vulkan图形API平台的OpenGTX接口。 |

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [ABR_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___vector3) | 此结构体描述ABR三维向量。 |
| struct [ABR_CameraData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___camera_data) | 此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。 |
| struct [FG_Mat4x4](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___mat4x4) | 此结构体描述列主序4x4矩阵。列主序是指在连续的线性内存地址中，优先按列遍历矩阵元素。 |
| struct [FG_AlgorithmModeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___algorithm_mode_info) | 此结构体描述超帧算法模式信息。 |
| struct [FG_Dimension2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dimension2_d) | 此结构体描述2D图像分辨率，以px为单位。 |
| struct [FG_ResolutionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___resolution_info) | 此结构体描述超帧输入输出图像的分辨率。 |
| struct [FG_Vec3D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___vec3_d) | 此结构体描述超帧三维向量。 |
| struct [FG_PerFrameExtendedCameraInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___per_frame_extended_camera_info) | 此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时（超过十万），可以提供更加详细的相机信息以获得更加准确的超帧预测效果。 |
| struct [FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info) | 此结构体描述超帧集成的信息。包括送显模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。仅在[FG_PredictionMode](#fg_predictionmode-1)为FG_PREDICTION_MODE_INTERPOLATION时生效。 |
| struct [FG_DispatchDescription_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___g_l_e_s) | 此结构体描述下发帧生成命令[HMS_FG_Dispatch_GLES](#hms_fg_dispatch_gles)需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。 |
| struct [FG_ContextDescription_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___context_description___v_k) | 此结构体描述创建超帧上下文实例[FG_Context_VK](#fg_context_vk)所需的属性信息，该接口仅适配Vulkan图形API平台。 |
| struct [FG_ImageFormat_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_format___v_k) | 此结构体描述超帧输入输出图像的格式信息，该接口仅适配Vulkan图形API平台。 |
| struct [FG_ImageSync_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_sync___v_k) | 此结构体描述超帧输入输出图像同步状态信息，用于创建超帧图像内存屏障。该接口仅适配Vulkan图形API平台。 |
| struct [FG_ImageInfo_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_info___v_k) | 此结构体描述超帧输入输出图像信息，该接口仅适配Vulkan图形API平台。 |
| struct [FG_DispatchDescription_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___v_k) | 此结构体描述下发帧生成命令[HMS_FG_Dispatch_VK](#hms_fg_dispatch_vk)需要的参数信息，每一帧都需要进行更新。该接口仅适配Vulkan图形API平台。 |
| struct [OpenGTX_ConfigDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___config_description) | 此结构体描述OpenGTX属性配置。 |
| struct [OpenGTX_GameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___game_scene_info) | 此结构体描述游戏场景信息，游戏应用获取到场景后传递此参数。 |
| struct [OpenGTX_FrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___frame_render_info) | 此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。 |
| struct [OpenGTX_NetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_info) | 此结构体描述当前设备网络信息，游戏应用获取到网络信息后传递此参数。 |
| struct [OpenGTX_ResolutionValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___resolution_value) | 此结构体描述游戏应用的分辨率值。 |
| struct [OpenGTX_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___vector3) | 此结构体描述OpenGTX三维向量。 |
| struct [OpenGTX_NetworkLatency](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_latency) | 此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [ABR_Context](#abr_context) [ABR_Context](#abr_context) | 此结构体描述ABR上下文。 |
| typedef enum [ABR_RenderAPI_Type](#abr_renderapi_type-1) [ABR_RenderAPI_Type](#abr_renderapi_type) | 此枚举描述ABR支持的图形API类型。 |
| typedef struct [ABR_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___vector3) [ABR_Vector3](#abr_vector3) | 此结构体描述ABR三维向量。 |
| typedef struct [ABR_CameraData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___camera_data) [ABR_CameraData](#abr_cameradata) | 此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。 |
| typedef enum [ABR_ErrorCode](#abr_errorcode-1) [ABR_ErrorCode](#abr_errorcode) | 此枚举描述ABR接口调用错误码。 |
| typedef struct [FG_Mat4x4](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___mat4x4) [FG_Mat4x4](#fg_mat4x4) | 此结构体描述列主序4x4矩阵。列主序是指在连续的线性内存地址中，优先按列遍历矩阵元素。 |
| typedef enum [FG_PredictionMode](#fg_predictionmode-1) [FG_PredictionMode](#fg_predictionmode) | 此枚举描述超帧预测算法模式。 |
| typedef enum [FG_MeMode](#fg_memode-1) [FG_MeMode](#fg_memode) | 此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。 |
| typedef enum [FG_PresentMode](#fg_presentmode-1) [FG_PresentMode](#fg_presentmode) | 此枚举定义预测帧送显模式，支持游戏端送显预测帧模式和系统端送显预测帧模式。 |
| typedef struct [FG_AlgorithmModeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___algorithm_mode_info) [FG_AlgorithmModeInfo](#fg_algorithmmodeinfo) | 此结构体描述超帧算法模式信息。 |
| typedef struct [FG_Vec3D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___vec3_d) [FG_Vec3D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___vec3_d) | 此结构体描述超帧三维向量。 |
| typedef struct [FG_PerFrameExtendedCameraInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___per_frame_extended_camera_info) [FG_PerFrameExtendedCameraInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___per_frame_extended_camera_info) | 此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时（超过十万），可以提供更加详细的相机信息以获得更加准确的超帧预测效果。 |
| typedef struct [FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info) | 此结构体描述超帧集成的信息。包括送显模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。仅在[FG_PredictionMode](#fg_predictionmode-1)为FG_PREDICTION_MODE_INTERPOLATION时生效。 |
| typedef enum [FG_ErrorCode](#fg_errorcode-1) [FG_ErrorCode](#fg_errorcode) | 此枚举描述超帧接口调用错误码。 |
| typedef enum [FG_CvvZSemantic](#fg_cvvzsemantic-1) [FG_CvvZSemantic](#fg_cvvzsemantic) | 此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。 |
| typedef struct [FG_Dimension2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dimension2_d) [FG_Dimension2D](#fg_dimension2d) | 此结构体描述2D图像分辨率，以px为单位。 |
| typedef struct [FG_ResolutionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___resolution_info) [FG_ResolutionInfo](#fg_resolutioninfo) | 此结构体描述超帧输入输出图像的分辨率。 |
| typedef struct [FG_Context_GLES](#fg_context_gles) [FG_Context_GLES](#fg_context_gles) | 此结构体描述超帧上下文，该接口仅适配OpenGL ES图形API平台。 |
| typedef struct [FG_DispatchDescription_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___g_l_e_s) [FG_DispatchDescription_GLES](#fg_dispatchdescription_gles) | 此结构体描述下发帧生成命令[HMS_FG_Dispatch_GLES](#hms_fg_dispatch_gles)需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。 |
| typedef enum [FG_ImageFormat_GLES](#fg_imageformat_gles-1) [FG_ImageFormat_GLES](#fg_imageformat_gles) | 此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。 |
| typedef struct [FG_Context_VK](#fg_context_vk) [FG_Context_VK](#fg_context_vk) | 此结构体描述超帧上下文，该接口仅适配Vulkan图形API平台。 |
| typedef struct [FG_Image_VK](#fg_image_vk) [FG_Image_VK](#fg_image_vk) | 超帧输入输出图像结构体，该接口仅适配Vulkan图形API平台。 |
| typedef struct [FG_ContextDescription_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___context_description___v_k) [FG_ContextDescription_VK](#fg_contextdescription_vk) | 此结构体描述创建超帧上下文实例[FG_Context_VK](#fg_context_vk)所需的属性信息，该接口仅适配Vulkan图形API平台。 |
| typedef struct [FG_ImageFormat_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_format___v_k) [FG_ImageFormat_VK](#fg_imageformat_vk) | 此结构体描述超帧输入输出图像的格式信息，该接口仅适配Vulkan图形API平台。 |
| typedef struct [FG_ImageSync_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_sync___v_k) [FG_ImageSync_VK](#fg_imagesync_vk) | 此结构体描述超帧输入输出图像同步状态信息，用于创建超帧图像内存屏障。该接口仅适配Vulkan图形API平台。 |
| typedef struct [FG_ImageInfo_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_info___v_k) [FG_ImageInfo_VK](#fg_imageinfo_vk) | 此结构体描述超帧输入输出图像信息，该接口仅适配Vulkan图形API平台。 |
| typedef struct [FG_DispatchDescription_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___v_k) [FG_DispatchDescription_VK](#fg_dispatchdescription_vk) | 此结构体描述下发帧生成命令[HMS_FG_Dispatch_VK](#hms_fg_dispatch_vk)需要的参数信息，每一帧都需要进行更新。该接口仅适配Vulkan图形API平台。 |
| typedef enum [FG_FeatureType](#fg_featuretype-1) [FG_FeatureType](#fg_featuretype) | 此枚举定义超帧的特性类型，根据平台（OPENGL ES，Vulkan）、超帧方式（内插，外插）以及算法等因素划分不同类型。 |
| typedef enum [OpenGTX_ErrorCode](#opengtx_errorcode-1) [OpenGTX_ErrorCode](#opengtx_errorcode) | 此枚举描述OpenGTX接口调用错误码。 |
| typedef enum [OpenGTX_LTPO_Mode](#opengtx_ltpo_mode-1) [OpenGTX_LTPO_Mode](#opengtx_ltpo_mode) | 此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。 |
| typedef enum [OpenGTX_EngineType](#opengtx_enginetype-1) [OpenGTX_EngineType](#opengtx_enginetype) | 此枚举描述游戏应用的底层游戏引擎类型。 |
| typedef enum [OpenGTX_GameType](#opengtx_gametype-1) [OpenGTX_GameType](#opengtx_gametype) | 此枚举描述游戏应用的类型。 |
| typedef enum [OpenGTX_SceneID](#opengtx_sceneid-1) [OpenGTX_SceneID](#opengtx_sceneid) | 此枚举描述OpenGTX算法的游戏场景类型。 |
| typedef enum [OpenGTX_PictureQualityMaxLevel](#opengtx_picturequalitymaxlevel-1) [OpenGTX_PictureQualityMaxLevel](#opengtx_picturequalitymaxlevel) | 此枚举描述游戏应用的图像质量。 |
| typedef enum [OpenGTX_TempLevel](#opengtx_templevel-1) [OpenGTX_TempLevel](#opengtx_templevel) | 此枚举描述设备的温度级别。 |
| typedef struct [OpenGTX_Context](#opengtx_context) [OpenGTX_Context](#opengtx_context) | 此结构体描述OpenGTX上下文。 |
| typedef struct [OpenGTX_ConfigDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___config_description) [OpenGTX_ConfigDescription](#opengtx_configdescription) | 此结构体描述OpenGTX属性配置。 |
| typedef struct [OpenGTX_GameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___game_scene_info) [OpenGTX_GameSceneInfo](#opengtx_gamesceneinfo) | 此结构体描述游戏场景信息，游戏应用获取到场景后传递此参数。 |
| typedef struct [OpenGTX_FrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___frame_render_info) [OpenGTX_FrameRenderInfo](#opengtx_framerenderinfo) | 此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。 |
| typedef struct [OpenGTX_NetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_info) [OpenGTX_NetworkInfo](#opengtx_networkinfo) | 此结构体描述当前设备网络信息，游戏应用获取到网络信息后传递此参数。 |
| typedef struct [OpenGTX_ResolutionValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___resolution_value) [OpenGTX_ResolutionValue](#opengtx_resolutionvalue) | 此结构体描述游戏应用的分辨率值。 |
| typedef struct [OpenGTX_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___vector3) [OpenGTX_Vector3](#opengtx_vector3) | 此结构体描述OpenGTX三维向量。 |
| typedef struct [OpenGTX_NetworkLatency](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_latency) [OpenGTX_NetworkLatency](#opengtx_networklatency) | 此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。 |
| typedef void(* [OpenGTX_DeviceInfoCallback](#opengtx_deviceinfocallback)) ([OpenGTX_TempLevel](#opengtx_templevel-1)) | 设备的温度信息回调。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [ABR_RenderAPI_Type](#abr_renderapi_type-1) { RENDER_API_GLES = 0 } | 此枚举描述ABR支持的图形API类型。RENDER_API_GLES表示OpenGL ES API。 |
| [ABR_ErrorCode](#abr_errorcode-1) { ABR_SUCCESS = 0, ABR_INVALID_PARAMETER = 401, ABR_CONTEXT_CONFIG_AFTER_ACTIVE = 1009501001, ABR_CONTEXT_NOT_CONFIG = 1009501002, ABR_CONTEXT_NOT_ACTIVE = 1009501003, ABR_METADATA_INVALID = 1009501004, ABR_FRAMEBUFFER_INVALID = 1009501005 } | 此枚举描述ABR接口调用错误码。 |
| [FG_PredictionMode](#fg_predictionmode-1) { FG_PREDICTION_MODE_INTERPOLATION = 0, FG_PREDICTION_MODE_EXTRAPOLATION = 1 } | 此枚举描述超帧预测算法模式。 |
| [FG_MeMode](#fg_memode-1) { FG_ME_MODE_BASIC = 0, FG_ME_MODE_ENHANCED = 1 } | 此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。 |
| [FG_ErrorCode](#fg_errorcode-1) { FG_SUCCESS = 0, FG_INVALID_PARAMETER = 401, FG_CONTEXT_NOT_CONFIG = 1009500001, FG_CONTEXT_NOT_ACTIVE = 1009500002, FG_COLLECTING_PREVIOUS_FRAMES = 1009500003 } | 此枚举描述超帧接口调用错误码。 |
| [FG_CvvZSemantic](#fg_cvvzsemantic-1) { FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z = 0, FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_REVERSE_Z = 1, FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_REVERSE_Z = 2, FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z = 3 } | 此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。 |
| [FG_ImageFormat_GLES](#fg_imageformat_gles-1) { FG_FORMAT_R8G8B8A8_UNORM = 0, FG_FORMAT_R11G11B10_SFLOAT = 1, FG_FORMAT_R16G16B16A16_SFLOAT = 2 } | 此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。 |
| [FG_PresentMode](#fg_presentmode-1) { FG_PRESENT_BY_GAME = 0, FG_PRESENT_BY_SYSTEM = 1 } | 定义预测帧送显模式，该模式包括两种：游戏端预测帧送显和系统端预测帧送显。 |
| [FG_FeatureType](#fg_featuretype-1) { INTERPOLATION_GPU_GLES = 0, INTERPOLATION_GPU_VULKAN = 1, EXTRAPOLATION_GPU_GLES = 2, EXTRAPOLATION_GPU_VULKAN = 3, INTERPOLATION_AI_VULKAN = 4 } | 此枚举定义超帧的特性类型，根据平台（OPENGL ES，Vulkan）、超帧方式（内插，外插）以及算法等因素划分不同类型。 |
| [OpenGTX_ErrorCode](#opengtx_errorcode-1) { OPENGTX_SUCCESS = 0, OPENGTX_INVALID_PARAMETER = 401, OPENGTX_CONTEXT_NOT_CONFIG = 1009502001, OPENGTX_CONTEXT_NOT_ACTIVE = 1009502002 } | 此枚举描述OpenGTX接口调用错误码。 |
| [OpenGTX_LTPO_Mode](#opengtx_ltpo_mode-1) { SCENE_MODE = 0x0001, TOUCH_MODE = 0x0010, ADAPTIVE_MODE = 0x0100 } | 此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。 |
| [OpenGTX_EngineType](#opengtx_enginetype-1) { UNITY = 1, UNREAL = 2, MESSIAH = 3, COCOS = 4, OTHERS_ENGINE = 100 } | 此枚举描述游戏应用的底层游戏引擎类型。 |
| [OpenGTX_GameType](#opengtx_gametype-1) { MOBA = 1, RPG = 2, FPS = 3, RAC = 4, OTHERS_TYPE = 100 } | 此枚举描述游戏应用的类型。 |
| [OpenGTX_SceneID](#opengtx_sceneid-1) { LOGIN = 1, GAME_INTERFACE = 2, LOADING = 3, PLAYING = 4, SPECTATOR = 5, DEATH = 6, HEAVY_LOAD = 7, OTHERS_SCENE = 100 } | 此枚举描述OpenGTX算法的游戏场景类型。 |
| [OpenGTX_PictureQualityMaxLevel](#opengtx_picturequalitymaxlevel-1) { SD = 1, HD = 2, FHD = 3, QHD = 4, UHD = 5 } | 此枚举描述游戏应用的图像质量。 |
| [OpenGTX_TempLevel](#opengtx_templevel-1) { TEMP_LEVEL1 = 1, TEMP_LEVEL2 = 2, TEMP_LEVEL3 = 3, TEMP_LEVEL4 = 4, TEMP_LEVEL5 = 5, TEMP_LEVEL6 = 6 } | 此枚举描述设备的温度级别。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [ABR_Context](#abr_context)* [HMS_ABR_CreateContext](#hms_abr_createcontext)([ABR_RenderAPI_Type](#abr_renderapi_type-1) type) | 创建ABR上下文实例，每次调用会新建[ABR_Context](#abr_context)对象，并返回指向[ABR_Context](#abr_context)对象的指针，当前仅支持RENDER_API_GLES类型，其他类型会导致创建上下文失败。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_SetTargetFps](#hms_abr_settargetfps)([ABR_Context](#abr_context)* context, const uint32_t targetFps) | 配置ABR上下文实例的目标帧率属性。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_SetScaleRange](#hms_abr_setscalerange)([ABR_Context](#abr_context)* context, const float minValue, const float maxValue) | 配置ABR上下文实例的Buffer分辨率因子范围属性，minValue和maxValue取值范围[0.5, 1.0]，minValue应小于等于maxValue，不满足约束条件时，会返回错误码ABR_INVALID_PARAMETER。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_Activate](#hms_abr_activate)([ABR_Context](#abr_context)* context) | 激活ABR上下文实例。激活ABR上下文实例前需调用[HMS_ABR_SetTargetFps](#hms_abr_settargetfps)和[HMS_ABR_SetScaleRange](#hms_abr_setscalerange)接口进行实例属性的配置，若未正确配置目标帧率或分辨率范围，调用[HMS_ABR_Activate](#hms_abr_activate)将返回错误码ABR_CONTEXT_NOT_CONFIG。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_IsActive](#hms_abr_isactive)([ABR_Context](#abr_context)* context, bool* isActive) | 查询ABR上下文实例是否处于激活状态。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_Deactivate](#hms_abr_deactivate)([ABR_Context](#abr_context)* context) | 去激活ABR上下文实例，可通过[HMS_ABR_Activate](#hms_abr_activate)重新激活。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_UpdateCameraData](#hms_abr_updatecameradata)([ABR_Context](#abr_context)* context, [ABR_CameraData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___camera_data)* data) | 更新每帧相机运动数据，ABR更新相机运动数据前需调用[HMS_ABR_Activate](#hms_abr_activate)接口激活ABR上下文实例，在未激活状态下调用此函数，会返回ABR_CONTEXT_NOT_ACTIVE错误码。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_GetScale](#hms_abr_getscale)([ABR_Context](#abr_context)* context, float* scale) | 获取ABR Buffer分辨率因子。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_GetNextScale](#hms_abr_getnextscale)([ABR_Context](#abr_context)* context, float* scale) | 获取下一帧的ABR Buffer分辨率因子。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_DestroyContext](#hms_abr_destroycontext)([ABR_Context](#abr_context)** context) | 销毁ABR上下文实例并释放内存资源。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_MarkFrameBuffer_GLES](#hms_abr_markframebuffer_gles)([ABR_Context](#abr_context)* context) | 标记ABR进行自适应渲染处理的GLES Buffer，需要在GLES Buffer开始渲染前调用此接口。 |
| [ABR_ErrorCode](#abr_errorcode-1) [HMS_ABR_GetScaledTexture_GLES](#hms_abr_getscaledtexture_gles)([ABR_Context](#abr_context)* context, uint32_t originTexture, uint32_t* scaledTexture) | 根据原始分辨率的GLES纹理索引获取ABR自适应缩放后的GLES纹理索引。调用前需确认原始纹理有效、渲染上下文有效。originTexture为原始纹理ID，该值不能为0，否则无法正确获取scaledTexture，接口功能失效；scaledTexture不能为空指针，否则会返回错误码ABR_INVALID_PARAMETER。 |
| bool [HMS_FG_IsFrameGenerationSupported](#hms_fg_isframegenerationsupported)([FG_FeatureType](#fg_featuretype) featureType) | 表示当前设备是否支持此类型的超帧功能，不同机型支持的超帧功能不同。以AI超帧特性为例，该接口会判断当前机型是否含有NPU及NPU算力是否满足特性要求，如果不满足则会返回false。 |
| [FG_Context_GLES](#fg_context_gles)* [HMS_FG_CreateContext_GLES](#hms_fg_createcontext_gles)(void) | 创建超帧上下文实例，调用成功则返回指向[FG_Context_GLES](#fg_context_gles)对象的指针，失败返回nullptr。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetAlgorithmMode_GLES](#hms_fg_setalgorithmmode_gles)([FG_Context_GLES](#fg_context_gles)* context, const [FG_AlgorithmModeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___algorithm_mode_info)* predictionModeInfo) | 设置超帧预测算法模式和运动估计模式，必选。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetResolution_GLES](#hms_fg_setresolution_gles)([FG_Context_GLES](#fg_context_gles)* context, const [FG_ResolutionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___resolution_info)* resolutionInfo) | 设置超帧输入输出图像分辨率，必选。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetCvvZSemantic_GLES](#hms_fg_setcvvzsemantic_gles)([FG_Context_GLES](#fg_context_gles)* context, [FG_CvvZSemantic](#fg_cvvzsemantic-1) semantic) | 设置超帧齐次裁剪空间Z/W范围及深度测试函数，可选调用，未调用则默认模式设置为FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetImageFormat_GLES](#hms_fg_setimageformat_gles)([FG_Context_GLES](#fg_context_gles)* context, [FG_ImageFormat_GLES](#fg_imageformat_gles-1) format) | 设置真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式，可选调用，未调用则模式默认设置为FG_FORMAT_R8G8B8A8_UNORM。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetDepthStencilYDirectionInverted_GLES](#hms_fg_setdepthstencilydirectioninverted_gles)([FG_Context_GLES](#fg_context_gles)* context, bool inverted) | 设置颜色缓冲区相对深度模板缓冲区基于y轴翻转的标志位，可选调用，未调用则默认无翻转。如果渲染管线中颜色缓冲区相对深度模板缓冲区基于y轴翻转了180度，则设为true；如果颜色缓冲区与深度模板缓冲区绘制方向一致则设为false。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_Activate_GLES](#hms_fg_activate_gles)([FG_Context_GLES](#fg_context_gles)* context) | 激活超帧上下文实例。已激活的超帧实例可调用[HMS_FG_Dispatch_GLES](#hms_fg_dispatch_gles)接口生成预测帧，激活超帧上下文实例前必须先调用[HMS_FG_SetAlgorithmMode_GLES](#hms_fg_setalgorithmmode_gles)和[HMS_FG_SetResolution_GLES](#hms_fg_setresolution_gles)接口完成配置。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_Deactivate_GLES](#hms_fg_deactivate_gles)([FG_Context_GLES](#fg_context_gles)* context) | 去激活超帧上下文实例，可通过[HMS_FG_Activate_GLES](#hms_fg_activate_gles)接口重新激活。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_IsActive_GLES](#hms_fg_isactive_gles)([FG_Context_GLES](#fg_context_gles)* context, bool* isActive) | 查询超帧上下文实例是否处于激活状态。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_Dispatch_GLES](#hms_fg_dispatch_gles)([FG_Context_GLES](#fg_context_gles)* context, const [FG_DispatchDescription_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___g_l_e_s)* desc) | 配置帧预测所需的参数信息，生成预测帧，当前处于激活状态时有效，该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetExtendedCameraInfo_GLES](#hms_fg_setextendedcamerainfo_gles)([FG_Context_GLES](#fg_context_gles)* context, const [FG_PerFrameExtendedCameraInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___per_frame_extended_camera_info)* info) | 设置超帧相机扩展属性信息，当视图投影矩阵的平移分量非常大时，提供该信息以获得更加准确的超帧效果。可选调用，该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_DestroyContext_GLES](#hms_fg_destroycontext_gles)([FG_Context_GLES](#fg_context_gles)** context) | 销毁超帧上下文实例并释放内存资源。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetIntegrationMode_GLES](#hms_fg_setintegrationmode_gles)([FG_Context_GLES](#fg_context_gles)* context, const [FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info)* integrationInfo) | 设置超帧预测的集成信息，当[FG_PredictionMode](#fg_predictionmode-1)为FG_PREDICTION_MODE_INTERPOLATION时，[FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info)中的presentMode、textureCachedByGame、needFlipInputColor、needFlipOutputColor成员才会生效。其他情况下这些参数应忽略或设置为默认值。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetUiPredictionEnabled_GLES](#hms_fg_setuipredictionenabled_gles)([FG_Context_GLES](#fg_context_gles)* context, bool isEnabled) | 选择是否启用UI预测功能，这个功能只能在系统送显模式下启用，在游戏送显模式下无效。该接口仅适配OpenGL ES图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetTargetFps_GLES](#hms_fg_settargetfps_gles)([FG_Context_GLES](#fg_context_gles)* context, int targetFps) | 设置超帧后的目标帧率，这个设置仅在系统送显模式下生效，对游戏送显模式无影响。参数targetFps的取值范围[30, 144]，旨在确保在不同平台上的性能稳定性和用户体验一致性。开发者应根据实际业务场景选择合适的帧率。该接口在游戏初次上架之后生效且仅适配OpenGL ES图形API平台。 |
| [FG_Context_VK](#fg_context_vk)* [HMS_FG_CreateContext_VK](#hms_fg_createcontext_vk)(const [FG_ContextDescription_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___context_description___v_k)* contextDescription) | 创建超帧上下文实例，调用成功则返回指向[FG_Context_VK](#fg_context_vk)对象的指针，失败返回nullptr。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetAlgorithmMode_VK](#hms_fg_setalgorithmmode_vk)([FG_Context_VK](#fg_context_vk)* context, const [FG_AlgorithmModeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___algorithm_mode_info)* predictionModeInfo) | 设置超帧算法模式，包括预测算法模式和运动估计模式，必选。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetResolution_VK](#hms_fg_setresolution_vk)([FG_Context_VK](#fg_context_vk)* context, const [FG_ResolutionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___resolution_info)* resolutionInfo) | 设置超帧输入输出图像分辨率，必选。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetCvvZSemantic_VK](#hms_fg_setcvvzsemantic_vk)([FG_Context_VK](#fg_context_vk)* context, [FG_CvvZSemantic](#fg_cvvzsemantic-1) semantic) | 设置超帧齐次裁剪空间Z/W范围及深度测试函数，可选调用，未调用则默认模式设置为FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z。 该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetImageFormat_VK](#hms_fg_setimageformat_vk)([FG_Context_VK](#fg_context_vk)* context, const [FG_ImageFormat_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_format___v_k)* format) | 设置超帧输入输出图像格式，可选调用。未调用则真实帧颜色缓冲区和预测帧缓冲区图像格式默认为VK_FORMAT_R8G8B8A8_UNORM； 深度模板缓冲区图像格式默认为VK_FORMAT_D24_UNORM_S8_UINT。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetDepthStencilYDirectionInverted_VK](#hms_fg_setdepthstencilydirectioninverted_vk)([FG_Context_VK](#fg_context_vk)* context, bool inverted) | 设置颜色缓冲区相对深度模板缓冲区是否存在y轴翻转的标志位，可选调用，未调用则默认无翻转。如果渲染管线中颜色缓冲区相对深度模板缓冲区基于y轴翻转了180度，则设为true；如果颜色缓冲区与深度模板缓冲区绘制方向一致则设为false。该接口仅适配Vulkan图形API平台。 |
| [FG_Image_VK](#fg_image_vk)* [HMS_FG_CreateImage_VK](#hms_fg_createimage_vk)([FG_Context_VK](#fg_context_vk)* context, VkImage image, VkImageView view) | 创建超帧输入输出图像实例。真实帧颜色缓冲区、深度模板缓冲区、预测帧缓冲区均需要通过该接口创建对应的图像实例，并传入预测帧生成接口[HMS_FG_Dispatch_VK](#hms_fg_dispatch_vk)进行预测帧绘制。该接口将用户提供的图像资源和超帧算法实现之间建立关联且仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_DestroyImage_VK](#hms_fg_destroyimage_vk)([FG_Context_VK](#fg_context_vk)* context, [FG_Image_VK](#fg_image_vk)* image) | 销毁超帧输入输出图像实例，取消对应关联。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_Activate_VK](#hms_fg_activate_vk)([FG_Context_VK](#fg_context_vk)* context) | 激活超帧上下文实例。已激活的超帧实例可调用[HMS_FG_Dispatch_VK](#hms_fg_dispatch_vk)接口生成预测帧，激活超帧上下文实例前必须先调用[HMS_FG_SetAlgorithmMode_VK](#hms_fg_setalgorithmmode_vk)和[HMS_FG_SetResolution_VK](#hms_fg_setresolution_vk)接口完成配置。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_Deactivate_VK](#hms_fg_deactivate_vk)([FG_Context_VK](#fg_context_vk)* context) | 去激活超帧上下文实例，可通过[HMS_FG_Activate_VK](#hms_fg_activate_vk)接口重新激活。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_IsActive_VK](#hms_fg_isactive_vk)([FG_Context_VK](#fg_context_vk)* context, bool* isActive) | 查询超帧上下文实例是否处于激活状态。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_Dispatch_VK](#hms_fg_dispatch_vk)([FG_Context_VK](#fg_context_vk)* context, const [FG_DispatchDescription_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___v_k)* desc) | 配置帧预测所需的参数信息，生成预测帧，当前处于激活状态时有效，该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_DestroyContext_VK](#hms_fg_destroycontext_vk)([FG_Context_VK](#fg_context_vk)** context) | 销毁超帧上下文实例并释放内存资源，该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode) [HMS_FG_SetIntegrationMode_VK](#hms_fg_setintegrationmode_vk)([FG_Context_VK](#fg_context_vk)* context, const [FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info)* integrationInfo) | 设置超帧预测的集成信息，当[FG_PredictionMode](#fg_predictionmode-1)为FG_PREDICTION_MODE_INTERPOLATION时，[FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info)中的presentMode、textureCachedByGame、needFlipInputColor、needFlipOutputColor成员才会生效。其他情况下这些参数应忽略或设置为默认值。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetUiPredictionEnabled_VK](#hms_fg_setuipredictionenabled_vk)([FG_Context_VK](#fg_context_vk)* context, bool isEnabled) | 选择是否启用UI预测功能，这个功能只能在系统送显模式下启用，在游戏送显模式下无效。该接口仅适配Vulkan图形API平台。 |
| [FG_ErrorCode](#fg_errorcode-1) [HMS_FG_SetTargetFps_VK](#hms_fg_settargetfps_vk)([FG_Context_VK](#fg_context_vk)* context, int targetFps) | 设置超帧后的目标帧率，这个设置仅在系统送显模式下生效，对游戏送显模式无影响。参数targetFps的取值范围[30, 144]，旨在确保在不同平台上的性能稳定性和用户体验一致性。开发者应根据实际业务场景选择合适的帧率。该接口在游戏初次上架之后生效且仅适配Vulkan图形API平台。 |
| [OpenGTX_Context](#opengtx_context)* [HMS_OpenGTX_CreateContext](#hms_opengtx_createcontext)([OpenGTX_DeviceInfoCallback](#opengtx_deviceinfocallback) deviceInfoCallback) | 创建OpenGTX上下文实例，每次调用会新建[OpenGTX_Context](#opengtx_context)对象，并返回指向[OpenGTX_Context](#opengtx_context)对象的指针。 |
| [OpenGTX_ErrorCode](#opengtx_errorcode-1) [HMS_OpenGTX_Activate](#hms_opengtx_activate)([OpenGTX_Context](#opengtx_context)* context) | 激活OpenGTX上下文实例。使用OpenGTX上下文实例前需要激活实例。 |
| [OpenGTX_ErrorCode](#opengtx_errorcode-1) [HMS_OpenGTX_Deactivate](#hms_opengtx_deactivate)([OpenGTX_Context](#opengtx_context)* context) | 去激活OpenGTX上下文实例，可通过[HMS_OpenGTX_Activate](#hms_opengtx_activate)重新激活。 |
| [OpenGTX_ErrorCode](#opengtx_errorcode-1) [HMS_OpenGTX_SetConfiguration](#hms_opengtx_setconfiguration)([OpenGTX_Context](#opengtx_context)* context, const [OpenGTX_ConfigDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___config_description)* config) | 初始化OpenGTX上下文实例，配置OpenGTX实例属性。 |
| [OpenGTX_ErrorCode](#opengtx_errorcode-1) [HMS_OpenGTX_DispatchFrameRenderInfo](#hms_opengtx_dispatchframerenderinfo)([OpenGTX_Context](#opengtx_context)* context, const [OpenGTX_FrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___frame_render_info)* frameRenderInfo) | 设置OpenGTX运行所需的场景渲染关键信息，每帧变化均需要更新。 |
| [OpenGTX_ErrorCode](#opengtx_errorcode-1) [HMS_OpenGTX_DispatchGameSceneInfo](#hms_opengtx_dispatchgamesceneinfo)([OpenGTX_Context](#opengtx_context)* context, const [OpenGTX_GameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___game_scene_info)* gameSceneInfo) | 设置OpenGTX运行所需的游戏场景信息。 |
| [OpenGTX_ErrorCode](#opengtx_errorcode-1) [HMS_OpenGTX_DispatchNetworkInfo](#hms_opengtx_dispatchnetworkinfo)([OpenGTX_Context](#opengtx_context)* context, const [OpenGTX_NetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_info)* networkInfo) | 设置OpenGTX运行所需的网络延迟信息。 |
| [OpenGTX_ErrorCode](#opengtx_errorcode-1) [HMS_OpenGTX_DestroyContext](#hms_opengtx_destroycontext)([OpenGTX_Context](#opengtx_context)** context) | 销毁OpenGTX上下文实例并释放内存资源。 |

#### 类型定义说明

#### [h2]ABR_CameraData

```
typedef struct ABR_CameraData ABR_CameraData
```
 描述

此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。

起始版本： 5.0.0(12)

#### [h2]ABR_Context

```
typedef struct ABR_Context ABR_Context
```
 描述

此结构体描述ABR上下文。

起始版本： 5.0.0(12)

#### [h2]ABR_ErrorCode

```
typedef enum ABR_ErrorCode ABR_ErrorCode
```
 描述

此枚举描述ABR接口调用错误码。

起始版本： 5.0.0(12)

#### [h2]ABR_RenderAPI_Type

```
typedef enum ABR_RenderAPI_Type ABR_RenderAPI_Type
```
 描述

此枚举描述ABR支持的图形API类型。

起始版本： 5.0.0(12)

#### [h2]ABR_Vector3

```
typedef struct ABR_Vector3 ABR_Vector3
```
 描述

此结构体描述ABR三维向量。

起始版本： 5.0.0(12)

#### [h2]FG_AlgorithmModeInfo

```
typedef struct FG_AlgorithmModeInfo FG_AlgorithmModeInfo
```
 描述

此结构体描述超帧算法模式信息。

起始版本： 5.0.0(12)

#### [h2]FG_Context_GLES

```
typedef struct FG_Context_GLES FG_Context_GLES
```
 描述

此结构体描述超帧上下文，该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_Context_VK

```
typedef struct FG_Context_VK FG_Context_VK
```
 描述

此结构体描述超帧上下文，该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_ContextDescription_VK

```
typedef struct FG_ContextDescription_VK FG_ContextDescription_VK
```
 描述

此结构体描述创建超帧上下文实例[FG_Context_VK](#fg_context_vk)所需的属性信息，该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_CvvZSemantic

```
typedef enum FG_CvvZSemantic FG_CvvZSemantic
```
 描述

此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。

起始版本： 5.0.0(12)

#### [h2]FG_Dimension2D

```
typedef struct FG_Dimension2D FG_Dimension2D
```
 描述

此结构体描述2D图像分辨率，以px为单位。

起始版本： 5.0.0(12)

#### [h2]FG_DispatchDescription_GLES

```
typedef struct FG_DispatchDescription_GLES FG_DispatchDescription_GLES
```
 描述

此结构体描述下发帧生成命令[HMS_FG_Dispatch_GLES](#hms_fg_dispatch_gles)需要的参数信息，每一帧都需要进行更新。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_DispatchDescription_VK

```
typedef struct FG_DispatchDescription_VK FG_DispatchDescription_VK
```
 描述

此结构体描述下发帧生成命令[HMS_FG_Dispatch_VK](#hms_fg_dispatch_vk)需要的参数信息，每一帧都需要进行更新。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_ErrorCode

```
typedef enum FG_ErrorCode FG_ErrorCode
```
 描述

此枚举描述超帧接口调用错误码。

起始版本： 5.0.0(12)

#### [h2]FG_Image_VK

```
typedef struct FG_Image_VK FG_Image_VK
```
 描述

超帧输入输出图像结构体，该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_ImageFormat_GLES

```
typedef enum FG_ImageFormat_GLES FG_ImageFormat_GLES
```
 描述

此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_ImageFormat_VK

```
typedef struct FG_ImageFormat_VK FG_ImageFormat_VK
```
 描述

此结构体描述超帧输入输出图像的格式信息，该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_ImageInfo_VK

```
typedef struct FG_ImageInfo_VK FG_ImageInfo_VK
```
 描述

此结构体描述超帧输入输出图像信息，该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_ImageSync_VK

```
typedef struct FG_ImageSync_VK FG_ImageSync_VK
```
 描述

此结构体描述超帧输入输出图像同步状态信息，用于创建超帧图像内存屏障。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

#### [h2]FG_Mat4x4

```
typedef struct FG_Mat4x4 FG_Mat4x4
```
 描述

此结构体描述列主序4x4矩阵。列主序是指在连续的线性内存地址中，优先按列遍历矩阵元素。

起始版本： 5.0.0(12)

#### [h2]FG_MeMode

```
typedef enum FG_MeMode FG_MeMode
```
 描述

此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。

起始版本： 5.0.0(12)

#### [h2]FG_PredictionMode

```
typedef enum FG_PredictionMode FG_PredictionMode
```
 描述

此枚举描述超帧预测算法模式。

起始版本： 5.0.0(12)

#### [h2]FG_PresentMode

```
typedef enum FG_PresentMode FG_PresentMode
```
 描述

此枚举定义预测帧送显模式，支持游戏端送显预测帧模式和系统端送显预测帧模式。

起始版本： 5.1.0(18)

#### [h2]FG_FeatureType

```
typedef enum FG_FeatureType FG_FeatureType
```
 描述

此枚举定义超帧的特性类型，根据平台（OPENGL ES，Vulkan）、超帧方式（内插，外插）以及算法等因素划分不同类型。

起始版本： 26.0.0

#### [h2]FG_ResolutionInfo

```
typedef struct FG_ResolutionInfo FG_ResolutionInfo
```
 描述

此结构体描述超帧输入输出图像的分辨率。

起始版本： 5.0.0(12)

#### [h2]FG_Vec3D

```
typedef struct FG_Vec3D FG_Vec3D
```
 描述

此结构体描述超帧三维向量。

起始版本： 5.0.0(12)

#### [h2]FG_PerFrameExtendedCameraInfo

```
typedef struct FG_PerFrameExtendedCameraInfo FG_PerFrameExtendedCameraInfo
```
 描述

此结构体描述相机扩展信息。当视图投影矩阵的平移分量非常大时（超过十万），可以提供更加详细的相机信息以获得更加准确的超帧预测效果。

起始版本： 5.0.0(12)

#### [h2]FG_IntegrationInfo

```
typedef struct FG_IntegrationInfo
```
 描述

此结构体描述超帧集成的信息。包括送显模式，是否需要额外缓存深度和颜色纹理，以及是否需要翻转颜色纹理。仅在[FG_PredictionMode](#fg_predictionmode-1)为FG_PREDICTION_MODE_INTERPOLATION时生效。

起始版本： 5.1.0(18)

#### [h2]OpenGTX_ConfigDescription

```
typedef struct OpenGTX_ConfigDescription OpenGTX_ConfigDescription
```
 描述

此结构体描述OpenGTX属性配置。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_Context

```
typedef struct OpenGTX_Context OpenGTX_Context
```
 描述

此结构体描述OpenGTX上下文。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_DeviceInfoCallback

```
typedef void(* OpenGTX_DeviceInfoCallback) (OpenGTX_TempLevel)
```
 描述

设备的温度信息回调。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| OpenGTX_TempLevel | 设备的温度级别[OpenGTX_TempLevel](#opengtx_templevel)。 |

#### [h2]OpenGTX_EngineType

```
typedef enum OpenGTX_EngineType OpenGTX_EngineType
```
 描述

此枚举描述游戏应用的底层游戏引擎类型。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_ErrorCode

```
typedef enum OpenGTX_ErrorCode OpenGTX_ErrorCode
```
 描述

此枚举描述OpenGTX接口调用错误码。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_FrameRenderInfo

```
typedef struct OpenGTX_FrameRenderInfo OpenGTX_FrameRenderInfo
```
 描述

此结构体描述帧渲染信息，游戏应用获取到帧属性后传递此参数。该参数中的相机矩阵通常用于优化渲染层降负载方案的画质效果。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_GameSceneInfo

```
typedef struct OpenGTX_GameSceneInfo OpenGTX_GameSceneInfo
```
 描述

此结构体描述游戏场景信息，游戏应用获取到场景后传递此参数。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_GameType

```
typedef enum OpenGTX_GameType OpenGTX_GameType
```
 描述

此枚举描述游戏应用的类型。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_LTPO_Mode

```
typedef enum OpenGTX_LTPO_Mode OpenGTX_LTPO_Mode
```
 描述

此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_NetworkInfo

```
typedef struct OpenGTX_NetworkInfo OpenGTX_NetworkInfo
```
 描述

此结构体描述当前设备网络信息，游戏应用获取到网络信息后传递此参数。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_NetworkLatency

```
typedef struct OpenGTX_NetworkLatency OpenGTX_NetworkLatency
```
 描述

此结构体描述当前设备网络延迟信息，游戏应用获取到网络延迟后传递此参数。该参数通常用于针对性优化网络延迟。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_PictureQualityMaxLevel

```
typedef enum OpenGTX_PictureQualityMaxLevel OpenGTX_PictureQualityMaxLevel
```
 描述

此枚举描述游戏应用的图像质量。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_ResolutionValue

```
typedef struct OpenGTX_ResolutionValue OpenGTX_ResolutionValue
```
 描述

此结构体描述游戏应用的分辨率值。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_SceneID

```
typedef enum OpenGTX_SceneID OpenGTX_SceneID
```
 描述

此枚举描述OpenGTX算法的游戏场景类型。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_TempLevel

```
typedef enum OpenGTX_TempLevel OpenGTX_TempLevel
```
 描述

此枚举描述设备的温度级别。

起始版本： 5.0.0(12)

#### [h2]OpenGTX_Vector3

```
typedef struct OpenGTX_Vector3 OpenGTX_Vector3
```
 描述

此结构体描述OpenGTX三维向量。

起始版本： 5.0.0(12)

#### 枚举类型说明

#### [h2]ABR_ErrorCode

```
enum ABR_ErrorCode
```
 描述

此枚举描述ABR接口调用错误码。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| ABR_SUCCESS | 接口执行成功。 |
| ABR_INVALID_PARAMETER | 参数检查失败，包括必选参数没有传入，参数类型错误，参数值不合法等。 |
| ABR_CONTEXT_CONFIG_AFTER_ACTIVE | 激活ABR上下文实例后配置ABR上下文实例属性。当配置ABR上下文实例属性时ABR上下文实例处于已激活状态则返回该状态码。 |
| ABR_CONTEXT_NOT_CONFIG | ABR上下文实例属性未配置。当调用[HMS_ABR_Activate](#hms_abr_activate)函数时ABR上下文实例属性未配置或配置失败则返回该错误码。 |
| ABR_CONTEXT_NOT_ACTIVE | ABR上下文实例属性未激活。当调用[HMS_ABR_MarkFrameBuffer_GLES](#hms_abr_markframebuffer_gles)函数或ABR Update相关函数时ABR上下文实例未激活则返回该错误码。 |
| ABR_METADATA_INVALID | 无效的ABR MetaData（元数据）。当配置ABR上下文实例属性时，ABR检测到无效MetaData则返回该错误码 |
| ABR_FRAMEBUFFER_INVALID | 无效的FrameBuffer。当调用[HMS_ABR_MarkFrameBuffer_GLES](#hms_abr_markframebuffer_gles)函数时，ABR检测到无效FrameBuffer则返回该错误码。 |

#### [h2]ABR_RenderAPI_Type

```
enum ABR_RenderAPI_Type
```
 描述

此枚举描述ABR支持的图形API类型。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| RENDER_API_GLES | OpenGL ES API |

#### [h2]FG_CvvZSemantic

```
enum FG_CvvZSemantic
```
 描述

此枚举描述经过相机投影变换后，齐次裁剪空间Z/W范围及深度测试模式。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z | 投影变换后的齐次裁剪空间Z/W范围在[-1, 1]之间，深度测试比较函数为less equal，如OpenGL ES API平台。 |
| FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_REVERSE_Z | 投影变换后的齐次裁剪空间Z/W范围在[0, 1]之间，深度测试比较函数为greater equal，如DirectX/Vulkan API平台。 |
| FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_REVERSE_Z | 投影变换后的齐次裁剪空间Z/W范围在[-1, 1]之间，深度测试比较函数为greater equal。 |
| FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z | 投影变换后的齐次裁剪空间Z/W范围在[0, 1]之间，深度测试比较函数为less equal。 |

#### [h2]FG_ErrorCode

```
enum FG_ErrorCode
```
 描述

此枚举描述超帧接口调用错误码。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| FG_SUCCESS | 接口执行成功。 |
| FG_INVALID_PARAMETER | 参数检查失败，包括必选参数没有传入，参数类型错误，参数值不合法等。 |
| FG_CONTEXT_NOT_CONFIG | 超帧上下文实例属性未配置。当调用[HMS_FG_Activate_GLES](#hms_fg_activate_gles)函数时超帧上下文实例属性未配置或配置失败则返回该错误码。 |
| FG_CONTEXT_NOT_ACTIVE | 超帧上下文实例未激活。当调用[HMS_FG_Dispatch_GLES](#hms_fg_dispatch_gles)函数时超帧上下文实例处于未激活状态则返回该错误码。 |
| FG_COLLECTING_PREVIOUS_FRAMES | 超帧需要多帧历史帧信息进行运动估计，当调用[HMS_FG_Dispatch_GLES](#hms_fg_dispatch_gles)函数时，如果传入真实渲染帧数量小于固定阈值（GLES基础内插模式为2，GLES基础外插模式为3，GLES增强内插模式为2，GLES增强外插模式为2，Vulkan基础内插模式为3，Vulkan基础外插模式为3），此时无预测帧生成，返回该状态码。当调用次数大于等于固定阈值后，函数调用成功则返回FG_SUCCESS。 |

#### [h2]FG_ImageFormat_GLES

```
enum FG_ImageFormat_GLES
```
 描述

此枚举描述真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| FG_FORMAT_R8G8B8A8_UNORM | GL_RGBA8图像格式。 |
| FG_FORMAT_R11G11B10_SFLOAT | GL_R11F_G11F_B10F图像格式。 |
| FG_FORMAT_R16G16B16A16_SFLOAT | GL_RGBA16F图像格式。 |

#### [h2]FG_MeMode

```
enum FG_MeMode
```
 描述

此枚举描述超帧运动估计算法模式，支持基础模式和增强模式。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| FG_ME_MODE_BASIC | 基础模式，即利用历史帧颜色信息、深度信息及相机矩阵信息进行运动估计。 |
| FG_ME_MODE_ENHANCED | 增强模式，即利用历史帧中的几何顶点信息进行更精准的运动估计，生成的预测帧效果更优。该模式需要开发者对绘制顶点的draw call进行标记。不传入深度图的情况下切换到AI超帧算法进行预测。 |

#### [h2]FG_PredictionMode

```
enum FG_PredictionMode
```
 描述

此枚举描述超帧预测算法模式。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| FG_PREDICTION_MODE_INTERPOLATION | 内插模式，即通过第N-1帧真实渲染帧及第N帧真实渲染帧生成N-0.5帧预测帧。该模式适用于高渲染画质游戏和对运行平滑度要求高的游戏，如角色扮演游戏、竞速类游戏等。 |
| FG_PREDICTION_MODE_EXTRAPOLATION | 外插模式，即通过N-1帧真实渲染帧及第N帧真实渲染帧生成N+0.5帧预测帧。该模式适用于对响应时延和操作跟手性要求高的游戏，如动作类游戏、射击类游戏等。 |

#### [h2]FG_PresentMode

```
enum FG_PresentMode
```
 描述

此枚举定义预测帧送显模式，支持游戏端送显预测帧模式和系统端送显预测帧模式。

起始版本： 5.1.0(18)

| 枚举值 | 描述 |
| --- | --- |
| FG_PRESENT_BY_GAME | 游戏申请和管理预测帧，并负责预测帧的送显。 |
| FG_PRESENT_BY_SYSTEM | 系统申请和管理预测帧，并负责预测帧的送显。 |

#### [h2]FG_FeatureType

```
enum FG_FeatureType
```
 描述

此枚举定义超帧的特性类型，根据平台（OPENGL ES，Vulkan）、超帧方式（内插，外插）以及算法等因素划分不同类型。

起始版本： 26.0.0

| 枚举值 | 描述 |
| --- | --- |
| INTERPOLATION_GPU_GLES | OpenGL ES平台上的GPU内插。 |
| INTERPOLATION_GPU_VULKAN | Vulkan平台上的GPU内插。 |
| EXTRAPOLATION_GPU_GLES | OpenGL ES平台上的GPU外插。 |
| EXTRAPOLATION_GPU_VULKAN | Vulkan平台上的GPU外插。 |
| INTERPOLATION_AI_VULKAN | Vulkan平台上的AI内插。 |

#### [h2]OpenGTX_EngineType

```
enum OpenGTX_EngineType
```
 描述

此枚举描述游戏应用的底层游戏引擎类型。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| UNITY | 游戏引擎类型为UNITY。 |
| UNREAL | 游戏引擎类型为UNREAL。 |
| MESSIAH | 游戏引擎类型为MESSIAH。 |
| COCOS | 游戏引擎类型为COCOS。 |
| OTHERS_ENGINE | 游戏引擎类型为OTHERS_ENGINE。 |

#### [h2]OpenGTX_ErrorCode

```
enum OpenGTX_ErrorCode
```
 描述

此枚举描述OpenGTX接口调用错误码。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| OPENGTX_SUCCESS | 接口执行成功。 |
| OPENGTX_INVALID_PARAMETER | 参数检查失败，包括必选参数没有传入，参数类型错误，参数值不合法等。 |
| OPENGTX_CONTEXT_NOT_CONFIG | OpenGTX上下文实例属性未配置。 当调用[HMS_OpenGTX_DispatchFrameRenderInfo](#hms_opengtx_dispatchframerenderinfo)等函数时，OpenGTX上下文实例未配置则返回该错误码。 |
| OPENGTX_CONTEXT_NOT_ACTIVE | OpenGTX上下文实例属性未激活。 当调用[HMS_OpenGTX_DispatchFrameRenderInfo](#hms_opengtx_dispatchframerenderinfo)等函数时，OpenGTX上下文实例未激活则返回该错误码。 |

#### [h2]OpenGTX_GameType

```
enum OpenGTX_GameType
```
 描述

此枚举描述游戏应用的类型。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| MOBA | 游戏应用类型为MOBA。 |
| RPG | 游戏应用类型为RPG。 |
| FPS | 游戏应用类型为FPS。 |
| RAC | 游戏应用类型为RAC。 |
| OTHERS_TYPE | 游戏应用类型为OTHERS_TYPE。 |

#### [h2]OpenGTX_LTPO_Mode

```
enum OpenGTX_LTPO_Mode
```
 描述

此枚举描述OpenGTX_LTPO模式类型，以控制游戏中的帧率。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| SCENE_MODE | 场景模式。 |
| TOUCH_MODE | 触控模式。 |
| ADAPTIVE_MODE | 自适应模式。 |

#### [h2]OpenGTX_PictureQualityMaxLevel

```
enum OpenGTX_PictureQualityMaxLevel
```
 描述

此枚举描述游戏应用的图像质量。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| SD | 图像质量为SD，如480p。 |
| HD | 图像质量为HD，如720p。 |
| FHD | 图像质量为FHD，如1080p。 |
| QHD | 图像质量为QHD，如2k。 |
| UHD | 图像质量为UHD，如4k。 |

#### [h2]OpenGTX_SceneID

```
enum OpenGTX_SceneID
```
 描述

此枚举描述OpenGTX算法的游戏场景类型。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| LOGIN | 游戏场景类型为登录。 |
| GAME_INTERFACE | 游戏场景类型为游戏大厅界面。 |
| LOADING | 游戏场景类型为游戏加载中。 |
| PLAYING | 游戏场景类型为游戏对局中。 |
| SPECTATOR | 游戏场景类型为游戏观战中。 |
| DEATH | 游戏场景类型为人物战斗准备中。 |
| HEAVY_LOAD | 游戏场景类型为重负载。 |
| OTHERS_SCENE | 游戏场景类型为其他场景。 |

#### [h2]OpenGTX_TempLevel

```
enum OpenGTX_TempLevel
```
 描述

此枚举描述设备的温度级别。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| TEMP_LEVEL1 | 温度等级1。游戏可以保持当前配置。 |
| TEMP_LEVEL2 | 温度等级2。游戏应该减少不必要的服务，如减少后台更新。 |
| TEMP_LEVEL3 | 温度等级3。游戏应该停止非重点服务。 |
| TEMP_LEVEL4 | 温度等级4。游戏应该降低游戏效果。 |
| TEMP_LEVEL5 | 温度等级5。游戏要降低游戏场景配置，如帧分辨率、帧率、画质等。 |
| TEMP_LEVEL6 | 温度等级6。游戏应保持最低配置。 |

#### 函数说明

#### [h2]HMS_ABR_Activate()

```
ABR_ErrorCode HMS_ABR_Activate(ABR_Context* context)
```
 描述

激活ABR上下文实例。激活ABR上下文实例前需调用[HMS_ABR_SetTargetFps](#hms_abr_settargetfps)和[HMS_ABR_SetScaleRange](#hms_abr_setscalerange)接口进行实例属性的配置，若未正确配置目标帧率或分辨率范围，调用[HMS_ABR_Activate](#hms_abr_activate)将返回错误码ABR_CONTEXT_NOT_CONFIG。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_CreateContext()

```
ABR_Context* HMS_ABR_CreateContext(ABR_RenderAPI_Type type)
```
 描述

创建ABR上下文实例，每次调用会新建[ABR_Context](#abr_context)对象，并返回指向[ABR_Context](#abr_context)对象的指针，当前仅支持RENDER_API_GLES类型，其他类型会导致创建上下文失败。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| type | 图形API类型[ABR_RenderAPI_Type](#abr_renderapi_type)。 |

返回：

成功时返回指向ABR上下文结构体[ABR_Context](#abr_context)的指针，失败返回空指针。

#### [h2]HMS_ABR_Deactivate()

```
ABR_ErrorCode HMS_ABR_Deactivate(ABR_Context* context)
```
 描述

去激活ABR上下文实例，可通过[HMS_ABR_Activate](#hms_abr_activate)重新激活。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_DestroyContext()

```
ABR_ErrorCode HMS_ABR_DestroyContext(ABR_Context** context)
```
 描述

销毁ABR上下文实例并释放内存资源。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的指向ABR上下文实例[ABR_Context](#abr_context)的二级指针，非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_GetScale()

```
ABR_ErrorCode HMS_ABR_GetScale(ABR_Context* context, float* scale )
```
 描述

获取ABR Buffer分辨率因子。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |
| scale | 指向一个用来接收ABR分辨率因子的变量，非空，否则返回失败。scale取值范围[0.5, 1.0]。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_GetNextScale()

```
ABR_ErrorCode HMS_ABR_GetNextScale(ABR_Context* context, float* scale)
```
 描述

获取下一帧的ABR Buffer分辨率因子。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |
| scale | 指向一个用来接收ABR分辨率因子的变量，非空，否则返回失败。scale取值范围[0.5, 1.0]。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_IsActive()

```
ABR_ErrorCode HMS_ABR_IsActive(ABR_Context* context, bool* isActive )
```
 描述

查询ABR上下文实例是否处于激活状态。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |
| isActive | ABR上下文实例的激活状态。 - true : ABR上下文实例处于激活状态； - false : ABR上下文实例处于去激活状态。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_MarkFrameBuffer_GLES()

```
ABR_ErrorCode HMS_ABR_MarkFrameBuffer_GLES(ABR_Context* context)
```
 描述

标记ABR进行自适应渲染处理的GLES Buffer，需要在GLES Buffer开始渲染前调用此接口。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_GetScaledTexture_GLES()

```
ABR_ErrorCode HMS_ABR_GetScaledTexture_GLES(ABR_Context* context, uint32_t originTexture, uint32_t* scaledTexture)
```
 描述

根据原始分辨率的GLES纹理索引获取ABR自适应缩放后的GLES纹理索引。调用前需确认原始纹理有效、渲染上下文有效。originTexture为原始纹理ID，该值不能为0，否则无法正确获取scaledTexture，接口功能失效；scaledTexture不能为空指针，否则会返回错误码ABR_INVALID_PARAMETER。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |
| originTexture | 原始分辨率的GLES纹理索引。 |
| scaledTexture | ABR自适应缩放后的GLES纹理索引。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_SetScaleRange()

```
ABR_ErrorCode HMS_ABR_SetScaleRange(ABR_Context* context, const float minValue, const float maxValue )
```
 描述

配置ABR上下文实例的Buffer分辨率因子范围属性，minValue和maxValue取值范围[0.5, 1.0]，minValue应小于等于maxValue，不满足约束条件时，会返回错误码ABR_INVALID_PARAMETER。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |
| minValue | ABR上下文实例的最小Buffer分辨率因子属性，取值范围[0.5, 1.0]。参数不在范围内会返回ABR_INVALID_PARAMETER错误码。 |
| maxValue | ABR上下文实例的最大Buffer分辨率因子属性，取值范围[0.5, 1.0]。参数不在范围内会返回ABR_INVALID_PARAMETER错误码。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_SetTargetFps()

```
ABR_ErrorCode HMS_ABR_SetTargetFps(ABR_Context* context, const uint32_t targetFps )
```
 描述

配置ABR上下文实例的目标帧率属性。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |
| targetFps | ABR上下文实例的目标帧率属性，取值范围[30, 120]。参数不在范围内会返回ABR_INVALID_PARAMETER错误码。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_ABR_UpdateCameraData()

```
ABR_ErrorCode HMS_ABR_UpdateCameraData(ABR_Context* context, ABR_CameraData* data )
```
 描述

更新每帧相机运动数据，ABR更新相机运动数据前需调用[HMS_ABR_Activate](#hms_abr_activate)接口激活ABR上下文实例，在未激活状态下调用此函数，会返回ABR_CONTEXT_NOT_ACTIVE错误码。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的ABR上下文实例，即指向[ABR_Context](#abr_context)实例的指针，非空，否则返回失败。 |
| data | 游戏应用每帧的相机运动数据，即指向ABR相机运动数据[ABR_CameraData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___camera_data)的指针，非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回ABR_SUCCESS；失败返回具体错误码，具体失败错误码可参考[ABR_ErrorCode](#abr_errorcode)。

#### [h2]HMS_FG_IsFrameGenerationSupported()

```
bool HMS_FG_IsFrameGenerationSupported(FG_FeatureType featureType)
```
 描述

表示当前设备是否支持此类型的超帧功能，不同机型支持的超帧功能不同。以AI超帧特性为例，该接口会判断当前机型是否含有NPU及NPU算力是否满足特性要求，如果不满足则会返回false。

起始版本： 26.0.0

参数:

| 名称 | 描述 |
| --- | --- |
| featureType | 超帧的特性类型[FG_FeatureType](#fg_featuretype)。 |

返回：

如果当前设备支持此功能，则返回true，否则返回false。

#### [h2]HMS_FG_Activate_GLES()

```
FG_ErrorCode HMS_FG_Activate_GLES(FG_Context_GLES* context)
```
 描述

激活超帧上下文实例。已激活的超帧实例可调用[HMS_FG_Dispatch_GLES](#hms_fg_dispatch_gles)接口生成预测帧，激活超帧上下文实例前必须先调用[HMS_FG_SetAlgorithmMode_GLES](#hms_fg_setalgorithmmode_gles)和[HMS_FG_SetResolution_GLES](#hms_fg_setresolution_gles)接口完成配置。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_Activate_VK()

```
FG_ErrorCode HMS_FG_Activate_VK(FG_Context_VK* context)
```
 描述

激活超帧上下文实例。已激活的超帧实例可调用[HMS_FG_Dispatch_VK](#hms_fg_dispatch_vk)接口生成预测帧，激活超帧上下文实例前必须先调用[HMS_FG_SetAlgorithmMode_VK](#hms_fg_setalgorithmmode_vk)和[HMS_FG_SetResolution_VK](#hms_fg_setresolution_vk)接口完成配置。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_CreateContext_GLES()

```
FG_Context_GLES* HMS_FG_CreateContext_GLES(void )
```
 描述

创建超帧上下文实例，调用成功则返回指向[FG_Context_GLES](#fg_context_gles)对象的指针，失败返回nullptr。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

返回：

成功时返回指向超帧上下文结构体[FG_Context_GLES](#fg_context_gles)对象的指针，失败返回空指针。

#### [h2]HMS_FG_CreateContext_VK()

```
FG_Context_VK* HMS_FG_CreateContext_VK(const FG_ContextDescription_VK* contextDescription)
```
 描述

创建超帧上下文实例，调用成功则返回指向[FG_Context_VK](#fg_context_vk)对象的指针，失败返回nullptr。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| contextDescription | 指向创建超帧上下文实例所需属性信息结构体[FG_ContextDescription_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___context_description___v_k)对象的指针，不允许为空。 |

返回：

成功时返回指向超帧上下文结构体[FG_Context_VK](#fg_context_vk)对象的指针，失败返回空指针。

#### [h2]HMS_FG_CreateImage_VK()

```
FG_Image_VK* HMS_FG_CreateImage_VK(FG_Context_VK* context, VkImage image, VkImageView view )
```
 描述

创建超帧输入输出图像实例。真实帧颜色缓冲区、深度模板缓冲区、预测帧缓冲区均需要通过该接口创建对应的图像实例，并传入预测帧生成接口[HMS_FG_Dispatch_VK](#hms_fg_dispatch_vk)进行预测帧绘制。该接口将用户提供的图像资源和超帧算法实现之间建立关联且仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| image | VkImage对象。 |
| view | VkImageView对象。 |

返回：

超帧输入输出图像实例。

#### [h2]HMS_FG_Deactivate_GLES()

```
FG_ErrorCode HMS_FG_Deactivate_GLES(FG_Context_GLES* context)
```
 描述

去激活超帧上下文实例，可通过[HMS_FG_Activate_GLES](#hms_fg_activate_gles)接口重新激活。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_Deactivate_VK()

```
FG_ErrorCode HMS_FG_Deactivate_VK(FG_Context_VK* context)
```
 描述

去激活超帧上下文实例，可通过[HMS_FG_Activate_VK](#hms_fg_activate_vk)接口重新激活。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_DestroyContext_GLES()

```
FG_ErrorCode HMS_FG_DestroyContext_GLES(FG_Context_GLES** context)
```
 描述

销毁超帧上下文实例并释放内存资源。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的指向超帧上下文结构体[FG_Context_GLES](#fg_context_gles)对象的二级指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_DestroyContext_VK()

```
FG_ErrorCode HMS_FG_DestroyContext_VK(FG_Context_VK** context)
```
 描述

销毁超帧上下文实例并释放内存资源。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的指向超帧上下文结构体[FG_Context_VK](#fg_context_vk)对象的二级指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_DestroyImage_VK()

```
FG_ErrorCode HMS_FG_DestroyImage_VK(FG_Context_VK* context, FG_Image_VK* image )
```
 描述

销毁超帧输入输出图像实例，取消对应关联。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| image | 指向[FG_Image_VK](#fg_image_vk)对象的指针。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_Dispatch_GLES()

```
FG_ErrorCode HMS_FG_Dispatch_GLES(FG_Context_GLES* context, const FG_DispatchDescription_GLES* desc )
```
 描述

配置帧预测所需的参数信息，生成预测帧，当前处于激活状态时有效，该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| desc | 下发帧生成命令的参数结构体[FG_DispatchDescription_GLES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___g_l_e_s)的指针，不允许为空，需每帧更新。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；当输入历史帧数量未达到固定阈值时（基础内插模式为2，基础外插模式为3，增强内插模式为2，增强外插模式为2），返回FG_COLLECTING_PREVIOUS_FRAMES；当执行失败则返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetExtendedCameraInfo_GLES()

```
FG_ErrorCode HMS_FG_SetExtendedCameraInfo_GLES(FG_Context_GLES* context, const FG_PerFrameExtendedCameraInfo* info)
```
 描述

设置超帧相机扩展属性信息，当视图投影矩阵的平移分量非常大时，提供该信息以获得更加准确的超帧效果。可选调用，该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| info | 指向相机扩展信息结构体[FG_PerFrameExtendedCameraInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___per_frame_extended_camera_info)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_Dispatch_VK()

```
FG_ErrorCode HMS_FG_Dispatch_VK(FG_Context_VK* context, const FG_DispatchDescription_VK* desc )
```
 描述

配置帧预测所需的参数信息，生成预测帧，当前处于激活状态时有效，该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| desc | 下发帧生成命令的参数结构体[FG_DispatchDescription_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___dispatch_description___v_k)的指针，不允许为空，需每帧更新。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；当输入历史帧数量未达到固定阈值时（内插模式和外插模式均为3），返回FG_COLLECTING_PREVIOUS_FRAMES；当执行失败则返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_IsActive_GLES()

```
FG_ErrorCode HMS_FG_IsActive_GLES(FG_Context_GLES* context, bool* isActive )
```
 描述

查询超帧上下文实例是否处于激活状态。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| isActive | 超帧上下文实例的激活状态。 true : 超帧上下文实例处于激活状态； false : 超帧上下文实例处于未激活状态。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_IsActive_VK()

```
FG_ErrorCode HMS_FG_IsActive_VK(FG_Context_VK* context, bool* isActive )
```
 描述

查询超帧上下文实例是否处于激活状态。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| isActive | 超帧上下文实例的激活状态。 true : 超帧上下文实例处于激活状态； false : 超帧上下文实例处于未激活状态。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetAlgorithmMode_GLES()

```
FG_ErrorCode HMS_FG_SetAlgorithmMode_GLES(FG_Context_GLES* context, const FG_AlgorithmModeInfo* predictionModeInfo )
```
 描述

设置超帧预测算法模式和运动估计模式，必选。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| predictionModeInfo | 指向超帧算法模式结构体[FG_AlgorithmModeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___algorithm_mode_info)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetAlgorithmMode_VK()

```
FG_ErrorCode HMS_FG_SetAlgorithmMode_VK(FG_Context_VK* context, const FG_AlgorithmModeInfo* predictionModeInfo )
```
 描述

设置超帧算法模式，包括预测算法模式和运动估计模式，必选。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| predictionModeInfo | 指向超帧算法模式结构体[FG_AlgorithmModeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___algorithm_mode_info)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetCvvZSemantic_GLES()

```
FG_ErrorCode HMS_FG_SetCvvZSemantic_GLES(FG_Context_GLES* context, FG_CvvZSemantic semantic )
```
 描述

设置超帧齐次裁剪空间Z/W范围及深度测试函数，可选调用，未调用则默认模式设置为FG_CVV_Z_SEMANTIC_MINUS_ONE_TO_ONE_FORWARD_Z。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| semantic | 表示齐次裁剪空间Z/W范围及深度测试函数的枚举值。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetCvvZSemantic_VK()

```
FG_ErrorCode HMS_FG_SetCvvZSemantic_VK(FG_Context_VK* context, FG_CvvZSemantic semantic )
```
 描述

设置超帧齐次裁剪空间Z/W范围及深度测试函数，可选调用，未调用则默认模式设置为FG_CVV_Z_SEMANTIC_ZERO_TO_ONE_FORWARD_Z。 该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| semantic | 表示齐次裁剪空间Z/W范围及深度测试函数的枚举值。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetDepthStencilYDirectionInverted_GLES()

```
FG_ErrorCode HMS_FG_SetDepthStencilYDirectionInverted_GLES(FG_Context_GLES* context, bool inverted )
```
 描述

设置颜色缓冲区相对深度模板缓冲区基于y轴翻转的标志位，可选调用，未调用则默认无翻转。如果渲染管线中颜色缓冲区相对深度模板缓冲区基于y轴翻转了180度，则设为true；如果颜色缓冲区与深度模板缓冲区绘制方向一致则设为false。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| inverted | 颜色缓冲区相对深度模板缓冲区基于y轴翻转的标志位。 true : 颜色缓冲区相对深度模板缓冲区基于y轴翻转180°； false : 颜色缓冲区相对深度模板缓冲区无翻转。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetDepthStencilYDirectionInverted_VK()

```
FG_ErrorCode HMS_FG_SetDepthStencilYDirectionInverted_VK(FG_Context_VK* context, bool inverted )
```
 描述

设置颜色缓冲区相对深度模板缓冲区是否存在y轴翻转的标志位，可选调用，未调用则默认无翻转。如果渲染管线中颜色缓冲区相对深度模板缓冲区基于y轴翻转了180度，则设为true；如果颜色缓冲区与深度模板缓冲区绘制方向一致则设为false。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| inverted | 颜色缓冲区相对深度模板缓冲区是否存在y轴翻转的标志位。 true : 颜色缓冲区相对深度模板缓冲区基于y轴翻转180°； false : 颜色缓冲区相对深度模板缓冲区无翻转。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetImageFormat_GLES()

```
FG_ErrorCode HMS_FG_SetImageFormat_GLES(FG_Context_GLES* context, FG_ImageFormat_GLES format )
```
 描述

设置真实渲染帧颜色缓冲区和预测帧缓冲区的图像格式，可选调用，未调用则模式默认设置为FG_FORMAT_R8G8B8A8_UNORM。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| format | 表示真实渲染帧颜色缓冲区和预测帧缓冲区图像格式的枚举值。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetImageFormat_VK()

```
FG_ErrorCode HMS_FG_SetImageFormat_VK(FG_Context_VK* context, const FG_ImageFormat_VK* format )
```
 描述

设置超帧输入输出图像格式，可选调用。未调用则真实帧颜色缓冲区和预测帧缓冲区图像格式默认为VK_FORMAT_R8G8B8A8_UNORM； 深度模板缓冲区图像格式默认为VK_FORMAT_D24_UNORM_S8_UINT。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| format | 指向超帧输入输出图像格式结构体[FG_ImageFormat_VK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___image_format___v_k)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetResolution_GLES()

```
FG_ErrorCode HMS_FG_SetResolution_GLES(FG_Context_GLES* context, const FG_ResolutionInfo* resolutionInfo )
```
 描述

设置超帧输入输出图像分辨率，必选。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| resolutionInfo | 指向超帧输入输出图像分辨率结构体[FG_ResolutionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___resolution_info)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetResolution_VK()

```
FG_ErrorCode HMS_FG_SetResolution_VK(FG_Context_VK* context, const FG_ResolutionInfo* resolutionInfo )
```
 描述

设置超帧输入输出图像分辨率，必选。该接口仅适配Vulkan图形API平台。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| resolutionInfo | 指向超帧输入输出图像分辨率结构体[FG_ResolutionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___resolution_info)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetIntegrationMode_GLES()

```
FG_ErrorCode HMS_FG_SetIntegrationMode_GLES(FG_Context_GLES* context, const FG_IntegrationInfo* integrationInfo)
```
 描述

设置超帧预测的集成信息，当[FG_PredictionMode](#fg_predictionmode-1)为FG_PREDICTION_MODE_INTERPOLATION时，[FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info)中的presentMode、textureCachedByGame、needFlipInputColor、needFlipOutputColor成员才会生效。其他情况下这些参数应忽略或设置为默认值。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.1.0(18)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| integrationInfo | 指向超帧集成信息的结构体[FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetIntegrationMode_VK()

```
FG_ErrorCode HMS_FG_SetIntegrationMode_VK(FG_Context_VK* context, const FG_IntegrationInfo* integrationInfo)
```
 描述

设置超帧预测的集成信息，当[FG_PredictionMode](#fg_predictionmode-1)为FG_PREDICTION_MODE_INTERPOLATION时，[FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info)中的presentMode、textureCachedByGame、needFlipInputColor、needFlipOutputColor成员才会生效。其他情况下这些参数应忽略或设置为默认值。该接口仅适配Vulkan图形API平台。

起始版本： 5.1.0(18)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| integrationInfo | 指向超帧集成信息的结构体[FG_IntegrationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_g___intergration_info)对象的指针，不允许为空。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetUiPredictionEnabled_GLES()

```
FG_ErrorCode HMS_FG_SetUiPredictionEnabled_GLES(FG_Context_GLES* context, bool isEnabled)
```
 描述

选择是否启用UI预测功能，这个功能只能在系统送显模式下启用，在游戏送显模式下无效。该接口仅适配OpenGL ES图形API平台。

起始版本： 5.1.0(18)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| isEnabled | UI预测的激活状态。 true : UI预测处于激活状态。 false : UI预测处于未激活状态。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetUiPredictionEnabled_VK()

```
FG_ErrorCode HMS_FG_SetUiPredictionEnabled_VK(FG_Context_VK* context, bool isEnabled)
```
 描述

选择是否启用UI预测功能，这个功能只能在系统送显模式下启用，在游戏送显模式下无效。该接口仅适配Vulkan图形API平台。

起始版本： 5.1.0(18)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| isEnabled | UI预测的激活状态。 true : UI预测处于激活状态。 false : UI预测处于未激活状态。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetTargetFps_GLES()

```
FG_ErrorCode HMS_FG_SetTargetFps_GLES(FG_Context_GLES* context, int targetFps)
```
 描述

设置超帧后的目标帧率，这个设置仅在系统送显模式下生效，对游戏送显模式无影响。参数targetFps的取值范围[30, 144]，旨在确保在不同平台上的性能稳定性和用户体验一致性。开发者应根据实际业务场景选择合适的帧率。该接口在游戏初次上架之后生效且仅适配OpenGL ES图形API平台。

起始版本： 5.1.0(18)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_GLES](#fg_context_gles)对象的指针，不允许为空。 |
| targetFps | 超帧后的目标帧率。最小值为30，最大值为144，参数不在范围内会返回FG_INVALID_PARAMETER错误码。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_FG_SetTargetFps_VK()

```
FG_ErrorCode HMS_FG_SetTargetFps_VK(FG_Context_VK* context, int targetFps)
```
 描述

设置超帧后的目标帧率，这个设置仅在系统送显模式下生效，对游戏送显模式无影响。参数targetFps的取值范围[30, 144]，旨在确保在不同平台上的性能稳定性和用户体验一致性。开发者应根据实际业务场景选择合适的帧率。该接口在游戏初次上架之后生效且仅适配Vulkan图形API平台。

起始版本： 5.1.0(18)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的超帧上下文实例，即指向[FG_Context_VK](#fg_context_vk)对象的指针，不允许为空。 |
| targetFps | 超帧后的目标帧率。最小值为30，最大值为144，参数不在范围内会返回FG_INVALID_PARAMETER错误码。 |

返回：

函数执行结果状态。执行成功返回FG_SUCCESS；失败返回具体错误码，具体失败错误码可参考[FG_ErrorCode](#fg_errorcode)。

#### [h2]HMS_OpenGTX_Activate()

```
OpenGTX_ErrorCode HMS_OpenGTX_Activate(OpenGTX_Context* context)
```
 描述

激活OpenGTX上下文实例。使用OpenGTX上下文实例前需要激活实例。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的OpenGTX上下文实例，即指向[OpenGTX_Context](#opengtx_context)实例的指针；非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考[OpenGTX_ErrorCode](#opengtx_errorcode)。

#### [h2]HMS_OpenGTX_CreateContext()

```
OpenGTX_Context* HMS_OpenGTX_CreateContext(OpenGTX_DeviceInfoCallback deviceInfoCallback)
```
 描述

创建OpenGTX上下文实例，每次调用会新建[OpenGTX_Context](#opengtx_context)对象，并返回指向[OpenGTX_Context](#opengtx_context)对象的指针。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| deviceInfoCallback | 设备的温度信息回调[OpenGTX_DeviceInfoCallback](#opengtx_deviceinfocallback)。 |

返回：

成功时返回指向OpenGTX上下文结构体[OpenGTX_Context](#opengtx_context)的指针，失败返回空指针。

#### [h2]HMS_OpenGTX_Deactivate()

```
OpenGTX_ErrorCode HMS_OpenGTX_Deactivate(OpenGTX_Context* context)
```
 描述

去激活OpenGTX上下文实例，可通过[HMS_OpenGTX_Activate](#hms_opengtx_activate)重新激活。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的OpenGTX上下文实例，即指向[OpenGTX_Context](#opengtx_context)实例的指针；非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考[OpenGTX_ErrorCode](#opengtx_errorcode)。

#### [h2]HMS_OpenGTX_DestroyContext()

```
OpenGTX_ErrorCode HMS_OpenGTX_DestroyContext(OpenGTX_Context** context)
```
 描述

销毁OpenGTX上下文实例并释放内存资源。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的OpenGTX上下文实例，即指向[OpenGTX_Context](#opengtx_context)实例的指针；非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考[OpenGTX_ErrorCode](#opengtx_errorcode)。

#### [h2]HMS_OpenGTX_DispatchFrameRenderInfo()

```
OpenGTX_ErrorCode HMS_OpenGTX_DispatchFrameRenderInfo(OpenGTX_Context* context, const OpenGTX_FrameRenderInfo* frameRenderInfo )
```
 描述

设置OpenGTX运行所需的场景渲染关键信息，每帧变化均需要更新。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的OpenGTX上下文实例，即指向[OpenGTX_Context](#opengtx_context)实例的指针；非空，否则返回失败。 |
| frameRenderInfo | 帧渲染信息结构，即指向OpenGTX每帧渲染信息结构体[OpenGTX_FrameRenderInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___frame_render_info)的指针；非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考[OpenGTX_ErrorCode](#opengtx_errorcode)。

#### [h2]HMS_OpenGTX_DispatchGameSceneInfo()

```
OpenGTX_ErrorCode HMS_OpenGTX_DispatchGameSceneInfo(OpenGTX_Context* context, const OpenGTX_GameSceneInfo* gameSceneInfo )
```
 描述

设置OpenGTX运行所需的游戏场景信息。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的OpenGTX上下文实例，即指向[OpenGTX_Context](#opengtx_context)实例的指针；非空，否则返回失败。 |
| gameSceneInfo | 游戏场景信息，即指向OpenGTX场景信息结构体[OpenGTX_GameSceneInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___game_scene_info)的指针；非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考[OpenGTX_ErrorCode](#opengtx_errorcode)。

#### [h2]HMS_OpenGTX_DispatchNetworkInfo()

```
OpenGTX_ErrorCode HMS_OpenGTX_DispatchNetworkInfo(OpenGTX_Context* context, const OpenGTX_NetworkInfo* networkInfo )
```
 描述

设置OpenGTX运行所需的网络延迟信息。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的OpenGTX上下文实例，即指向[OpenGTX_Context](#opengtx_context)实例的指针；非空，否则返回失败。 |
| networkInfo | 网络信息，即指向OpenGTX网络信息结构体[OpenGTX_NetworkInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___network_info)的指针；非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考[OpenGTX_ErrorCode](#opengtx_errorcode)。

#### [h2]HMS_OpenGTX_SetConfiguration()

```
OpenGTX_ErrorCode HMS_OpenGTX_SetConfiguration (OpenGTX_Context* context, const OpenGTX_ConfigDescription* config )
```
 描述

初始化OpenGTX上下文实例，配置OpenGTX实例属性。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| context | 已创建的OpenGTX上下文实例，即指向[OpenGTX_Context](#opengtx_context)实例的指针；非空，否则返回失败。 |
| config | OpenGTX上下文实例的初始化参数，即指向OpenGTX配置数据[OpenGTX_ConfigDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___config_description)的指针；非空，否则返回失败。 |

返回：

函数执行结果状态。执行成功返回OPENGTX_SUCCESS；失败返回具体错误码，具体失败错误码可参考[OpenGTX_ErrorCode](#opengtx_errorcode)。
