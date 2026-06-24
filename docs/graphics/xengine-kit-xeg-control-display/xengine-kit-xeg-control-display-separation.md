---
title: "xeg_control_display_separation.h"
upstream_id: "harmonyos-references/xengine-kit-xeg-control-display-separation"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:16.369173"
---

# xeg_control_display_separation.h

#### 概述

XEngine控显分离API接口。

引用文件：<xengine/xeg_control_display_separation.h>

库： libxengine.so

系统能力： SystemCapability.Graphic.XEngine

起始版本： 26.0.0

相关模块： [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

#### 汇总

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [XEG_ControlDisplaySeparationStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_controldisplayseparationstatus) { UNAVAILABLE = 0, AVAILABLE = 1} | 此枚举描述控显分离当前的状态信息。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef enum [XEG_ControlDisplaySeparationStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_controldisplayseparationstatus) XEG_ControlDisplaySeparationStatus | 此枚举描述控显分离当前的状态信息。 |
| typedef void(*[PFN_HMS_XEG_ControlDisplaySeparationStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_controldisplayseparationstatuscallback)) ([XEG_ControlDisplaySeparationStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_controldisplayseparationstatus) status) | 控显分离特性监听函数的函数指针定义。 |
| typedef bool(*[PFN_HMS_XEG_SetControlDisplaySeparationStatusListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_setcontroldisplayseparationstatuslistener)) ([PFN_HMS_XEG_ControlDisplaySeparationStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_controldisplayseparationstatuscallback) callback) | 设置控显分离特性全局唯一监听函数的函数指针定义。 |
| typedef void(*[PFN_HMS_XEG_RemoveControlDisplaySeparationStatusListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_removecontroldisplayseparationstatuslistener)) () | 移除控显分离特性全局唯一监听函数的函数指针定义。 |
| typedef bool(*[PFN_HMS_XEG_SetControlDisplaySeparationActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_setcontroldisplayseparationactive)) (bool flag) | 设置控显分离特性使能开关的函数指针定义。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| bool [HMS_XEG_SetControlDisplaySeparationStatusListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_setcontroldisplayseparationstatuslistener)([PFN_HMS_XEG_ControlDisplaySeparationStatusCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#pfn_hms_xeg_controldisplayseparationstatuscallback) callback) | 设置控显分离特性全局唯一监听函数。 |
| void [HMS_XEG_RemoveControlDisplaySeparationStatusListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_removecontroldisplayseparationstatuslistener)() | 移除控显分离特性全局唯一监听函数。 |
| bool [HMS_XEG_SetControlDisplaySeparationActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#hms_xeg_setcontroldisplayseparationactive)(bool flag) | 设置控显分离特性使能开关。 |
