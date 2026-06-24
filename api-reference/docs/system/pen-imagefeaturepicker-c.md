---
title: "GlobalColorPicker"
upstream_id: "harmonyos-references/pen-imagefeaturepicker-c"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:39.117497"
---

# GlobalColorPicker

#### 概述

该模块对外提供全局取色能力。

系统能力： SystemCapability.Stylus.ColorPicker

起始版本： 5.0.0(12)

#### 汇总

#### [h2]文件

| 名称 | 描述 |
| --- | --- |
| [native_gcp_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-headerfile-declare) | 声明用于对外提供全局取色能力。 |

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [HMS_GCP_Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-struct-color) | 定义颜色值的结构体。 |
| struct [HMS_GCP_PickedColorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-struct-colorinfo) | 定义取色的颜色信息的结构体。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef void(* [HMS_GCP_OnResult](#hms_gcp_onresult)) (void *userData, [HMS_GCP_PickedColorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-struct-colorinfo) colorInfo, const int32_t code) | 此回调用于接收拾取的颜色结果。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [HMS_GCP_ColorSpace](#hms_gcp_colorspace) { HMS_GCP_UNKNOWN = 0, HMS_GCP_ADOBE_RGB_1998 = 1, HMS_GCP_DCI_P3 = 2, HMS_GCP_DISPLAY_P3 = 3, HMS_GCP_SRGB = 4, HMS_GCP_BT709 = 6, HMS_GCP_BT601_EBU = 7, HMS_GCP_BT601_SMPTE_C = 8, HMS_GCP_BT2020_HLG = 9, HMS_GCP_BT2020_PQ = 10, HMS_GCP_P3_HLG = 11, HMS_GCP_P3_PQ = 12, HMS_GCP_ADOBE_RGB_1998_LIMIT = 13, HMS_GCP_DISPLAY_P3_LIMIT = 14, HMS_GCP_SRGB_LIMIT = 15, HMS_GCP_BT709_LIMIT = 16, HMS_GCP_BT601_EBU_LIMIT = 17, HMS_GCP_BT601_SMPTE_C_LIMIT = 18, HMS_GCP_BT2020_HLG_LIMIT = 19, HMS_GCP_BT2020_PQ_LIMIT = 20, HMS_GCP_P3_HLG_LIMIT = 21, HMS_GCP_P3_PQ_LIMIT = 22, HMS_GCP_LINEAR_P3 = 23, HMS_GCP_LINEAR_SRGB = 24, HMS_GCP_LINEAR_BT2020 = 25, CUSTOM = 5 } | 颜色空间枚举。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| int32_t [HMS_GCP_StartColorPicker](#hms_gcp_startcolorpicker) (int32_t initialPosX, int32_t initialPosY, [HMS_GCP_OnResult](#hms_gcp_onresult) onResultCallback, void *userData) | 启动全局取色器。此API用于启动取色器，在取色器移动时不显示值。 |
| int32_t [HMS_GCP_StartColorPickerWithColorValue](#hms_gcp_startcolorpickerwithcolorvalue) (int32_t initialPosX, int32_t initialPosY, [HMS_GCP_OnResult](#hms_gcp_onresult) onResultCallback, void *userData) | 启动全局取色器。此API用于启动取色器，在取色器移动时显示值。 **起始版本：** 5.1.0(18) |

#### 类型定义说明

#### [h2]HMS_GCP_OnResult

```
typedef void(* HMS_GCP_OnResult) (void *userData, HMS_GCP_PickedColorInfo colorInfo, const int32_t code)
```
 描述

此回调用于接收拾取的颜色结果。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| userData | 指针类型，指向用户数据。可以是空指针。 |
| colorInfo | 需要用户保存的提取的颜色信息。 |
| code | 结果码。 0：取色成功 1013900001：IPC通信失败 1013900002：内存不足 1013900003：服务无效 1013900004：多应用调用 1013900005：后台服务呼叫 |

#### 枚举类型说明

#### [h2]HMS_GCP_ColorSpace

```
enum HMS_GCP_ColorSpace
```
 描述

颜色空间枚举。

起始版本： 5.0.0(12)

| 枚举值 | 描述 |
| --- | --- |
| HMS_GCP_UNKNOWN | 未知的色彩空间。 |
| HMS_GCP_ADOBE_RGB_1998 | 基于Adobe RGB的色彩空间。 |
| HMS_GCP_DCI_P3 | 基于SMPTE RP 431-2-2007和IEC 61966-2.1:1999的颜色空间。 |
| HMS_GCP_DISPLAY_P3 | 基于SMPTE RP 431-2-2007和IEC 61966-2.1:1999的颜色空间。 |
| HMS_GCP_SRGB | 基于IEC 61966-2.1:1999的标准红绿蓝（SRGB）颜色空间。 |
| HMS_GCP_BT709 | 颜色空间基于ITU-R BT.709、PRIMARIES_BT709 | TRANSFUNC_BT709 | RANGE_FULL。 |
| HMS_GCP_BT601_EBU | 颜色空间基于ITU-R BT.601、PRIMARIES_BT601_P | TRANSFUNC_BT709 | RANGE_FULL。 |
| HMS_GCP_BT601_SMPTE_C | 颜色空间基于ITU-R BT.601、PRIMARIES_BT601_N | TRANSFUNC_BT709 | RANGE_FULL。 |
| HMS_GCP_BT2020_HLG | 颜色空间基于ITU-R BT.2020、PRIMARIES_BT2020 | TRANSFUNC_HLG | RANGE_FULL。 |
| HMS_GCP_BT2020_PQ | 颜色空间基于ITU-R BT.2020、PRIMARIES_BT2020 | TRANSFUNC_PQ | RANGE_FULL。 |
| HMS_GCP_P3_HLG | PRIMARIES_P3_D65 | TRANSFUNC_HLG | RANGE_FULL。 |
| HMS_GCP_P3_PQ | PRIMARIES_P3_D65 | TRANSFUNC_PQ | RANGE_FULL。 |
| HMS_GCP_ADOBE_RGB_1998_LIMIT | PRIMARIES_ADOBE_RGB | TRANSFUNC_ADOBE_RGB | RANGE_LIMIT。 |
| HMS_GCP_DISPLAY_P3_LIMIT | PRIMARIES_P3_D65 | TRANSFUNC_SRGB | RANGE_LIMIT。 |
| HMS_GCP_SRGB_LIMIT | PRIMARIES_SRGB | TRANSFUNC_SRGB | RANGE_LIMIT。 |
| HMS_GCP_BT709_LIMIT | PRIMARIES_BT709 | TRANSFUNC_BT709 | RANGE_LIMIT。 |
| HMS_GCP_BT601_EBU_LIMIT | PRIMARIES_BT601_P | TRANSFUNC_BT709 | RANGE_LIMIT。 |
| HMS_GCP_BT601_SMPTE_C_LIMIT | PRIMARIES_BT601_N | TRANSFUNC_BT709 | RANGE_LIMIT。 |
| HMS_GCP_BT2020_HLG_LIMIT | PRIMARIES_BT2020 | TRANSFUNC_HLG | RANGE_LIMIT。 |
| HMS_GCP_BT2020_PQ_LIMIT | PRIMARIES_BT2020 | TRANSFUNC_PQ | RANGE_LIMIT。 |
| HMS_GCP_P3_HLG_LIMIT | PRIMARIES_P3_D65 | TRANSFUNC_HLG | RANGE_LIMIT。 |
| HMS_GCP_P3_PQ_LIMIT | PRIMARIES_P3_D65 | TRANSFUNC_PQ | RANGE_LIMIT。 |
| HMS_GCP_LINEAR_P3 | PRIMARIES_P3_D65 | TRANSFUNC_LINEAR。 |
| HMS_GCP_LINEAR_SRGB | PRIMARIES_SRGB | TRANSFUNC_LINEAR。 |
| HMS_GCP_LINEAR_BT2020 | PRIMARIES_BT2020 | TRANSFUNC_LINEAR。 |
| CUSTOM | 开发者自定义的色彩空间。 |

#### 函数说明

#### [h2]HMS_GCP_StartColorPicker()

```
int32_t HMS_GCP_StartColorPicker (int32_t initialPosX, int32_t initialPosY, HMS_GCP_OnResult onResultCallback, void *userData)
```
 描述

启动全局取色器，并且在取色器移动时不显示值。

起始版本： 5.0.0(12)

参数:

| 名称 | 描述 |
| --- | --- |
| initialPosX | 取色器初始位置的x轴坐标。取值范围：0~屏幕的实际宽度，单位px。 |
| initialPosY | 取色器初始位置的y轴坐标。取值范围：0~屏幕的实际高度，单位px。 |
| onResultCallback | 接收提取的颜色信息的回调。 |
| userData | 指针类型，指向用户数据。可以是空指针。 |

#### [h2]HMS_GCP_StartColorPickerWithColorValue()

```
int32_t HMS_GCP_StartColorPickerWithColorValue (int32_t initialPosX, int32_t initialPosY, HMS_GCP_OnResult onResultCallback, void *userData)
```
 描述

启动全局取色器。

此API用于启动取色器，在取色器移动时显示值。

起始版本： 5.1.0(18)

参数：

| 名称 | 描述 |
| --- | --- |
| initialPosX | 取色器初始位置的x轴坐标。取值范围：0~屏幕的实际宽度，单位px。 |
| initialPosY | 取色器初始位置的y轴坐标。取值范围：0~屏幕的实际高度，单位px。 |
| onResultCallback | 接收提取的颜色信息的回调。 |
| userData | 指针类型，指向用户数据。可以是空指针。 |

返回： 结果码。

0 - 取色成功

1013900001 - IPC通信失败

1013900002 - 内存不足

1013900003 - 服务无效

1013900004 - 多应用调用

1013900005 - 后台服务呼叫
