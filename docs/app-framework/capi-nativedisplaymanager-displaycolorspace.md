---
title: "NativeDisplayManager_DisplayColorSpace"
upstream_id: "harmonyos-references/capi-nativedisplaymanager-displaycolorspace"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:57.279812"
---

# NativeDisplayManager_DisplayColorSpace

```
typedef struct {...} NativeDisplayManager_DisplayColorSpace
```

#### 概述

显示设备支持的所有色域类型。

起始版本： 14

相关模块： [OH_DisplayManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-displaymanager)

所在头文件： [oh_display_info.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-display-info-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t colorSpaceLength | 显示设备的色域长度。 |
| uint32_t* colorSpaces | 显示设备的色域数据。 |
