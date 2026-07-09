---
title: "HMS_GCP_PickedColorInfo"
upstream_id: "harmonyos-references/pen-imagefeaturepicker-struct-colorinfo"
catalog: "harmonyos-references"
content_hash: "62c5fdecb083"
synced_at: "2026-07-09T00:59:59.282518"
---

# HMS_GCP_PickedColorInfo

#### 概述

定义取色颜色信息的结构体。

系统能力： SystemCapability.Stylus.ColorPicker

起始版本： 5.0.0(12)

相关模块： [GlobalColorPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-c)

所在头文件： [native_gcp_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-headerfile-declare)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [HMS_GCP_Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-struct-color) color | 提取的颜色值。 |
| [HMS_GCP_ColorSpace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-imagefeaturepicker-c#hms_gcp_colorspace) colorSpace | 颜色所属的颜色空间。 |
| int64_t [timestamp](#timestamp) | 提取颜色的时间戳，单位为ms。 |

#### 结构体成员变量说明

#### [h2]color

```
HMS_GCP_Color HMS_GCP_PickedColorInfo::color
```
 描述

提取的颜色值。

#### [h2]colorSpace

```
HMS_GCP_ColorSpace HMS_GCP_PickedColorInfo::colorSpace
```
 描述

颜色所属的颜色空间。

#### [h2]timestamp

```
int64_t HMS_GCP_PickedColorInfo::timestamp
```
 描述

提取颜色的时间戳，单位为ms。
