---
title: "native_gcp_api.h"
upstream_id: "harmonyos-references/pen-headerfile-declare"
catalog: "harmonyos-references"
content_hash: "4449db1cfbeb"
synced_at: "2026-07-09T00:59:59.081807"
---

# native_gcp_api.h

#### 概述

声明用于对外提供全局取色能力。

库： libcolorpicker_ndk.z.so

引用文件： <color_picker/native_gcp_api.h>

系统能力： SystemCapability.Stylus.ColorPicker

起始版本： 5.0.0(12)

相关模块： [GlobalColorPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-c)

#### 汇总

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [HMS_GCP_Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-struct-color) | 定义颜色值的结构体。 |
| struct [HMS_GCP_PickedColorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-struct-colorinfo) | 定义取色的颜色信息的结构体。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef void(* [HMS_GCP_OnResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-c#hms_gcp_onresult)) (void *userData, [HMS_GCP_PickedColorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-struct-colorinfo) colorInfo, const int32_t code) | 当用户完成取色操作后，系统将调用此回调函数，并传入颜色信息和操作结果码。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [HMS_GCP_ColorSpace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-c#hms_gcp_colorspace) { HMS_GCP_UNKNOWN = 0, HMS_GCP_ADOBE_RGB_1998 = 1, HMS_GCP_DCI_P3 = 2, HMS_GCP_DISPLAY_P3 = 3, HMS_GCP_SRGB = 4, HMS_GCP_BT709 = 6, HMS_GCP_BT601_EBU = 7, HMS_GCP_BT601_SMPTE_C = 8, HMS_GCP_BT2020_HLG = 9, HMS_GCP_BT2020_PQ = 10, HMS_GCP_P3_HLG = 11, HMS_GCP_P3_PQ = 12, HMS_GCP_ADOBE_RGB_1998_LIMIT = 13, HMS_GCP_DISPLAY_P3_LIMIT = 14, HMS_GCP_SRGB_LIMIT = 15, HMS_GCP_BT709_LIMIT = 16, HMS_GCP_BT601_EBU_LIMIT = 17, HMS_GCP_BT601_SMPTE_C_LIMIT = 18, HMS_GCP_BT2020_HLG_LIMIT = 19, HMS_GCP_BT2020_PQ_LIMIT = 20, HMS_GCP_P3_HLG_LIMIT = 21, HMS_GCP_P3_PQ_LIMIT = 22, HMS_GCP_LINEAR_P3 = 23, HMS_GCP_LINEAR_SRGB = 24, HMS_GCP_LINEAR_BT2020 = 25, CUSTOM = 5 } | 颜色空间枚举。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| int32_t [HMS_GCP_StartColorPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-c#hms_gcp_startcolorpicker) (int32_t initialPosX, int32_t initialPosY, [HMS_GCP_OnResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-c#hms_gcp_onresult) onResultCallback, void *userData) | 启动全局取色器。此API用于启动取色器，在取色器移动时不显示值。 |
| int32_t [HMS_GCP_StartColorPickerWithColorValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-c#hms_gcp_startcolorpickerwithcolorvalue) (int32_t initialPosX, int32_t initialPosY, [HMS_GCP_OnResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-c#hms_gcp_onresult) onResultCallback, void *userData) | 启动全局取色器。此API用于启动取色器，在取色器移动时显示值。 |
