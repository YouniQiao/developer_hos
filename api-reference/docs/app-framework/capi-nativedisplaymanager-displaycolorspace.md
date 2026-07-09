---
title: "NativeDisplayManager_DisplayColorSpace"
upstream_id: "harmonyos-references/capi-nativedisplaymanager-displaycolorspace"
catalog: "harmonyos-references"
content_hash: "40487ed00d53"
synced_at: "2026-07-09T00:58:46.316334"
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
| uint32_t colorSpaceLength | 显示设备支持的色域类型数量。 |
| uint32_t* colorSpaces | 显示设备支持的色域类型数据。 |
