---
title: "NativeDisplayManager_DisplayHdrFormat"
upstream_id: "harmonyos-references/capi-nativedisplaymanager-displayhdrformat"
catalog: "harmonyos-references"
content_hash: "53ef1f994beb"
synced_at: "2026-07-09T00:58:46.309710"
---

# NativeDisplayManager_DisplayHdrFormat

```
typedef struct {...} NativeDisplayManager_DisplayHdrFormat
```

#### 概述

显示设备支持的所有HDR格式。

起始版本： 14

相关模块： [OH_DisplayManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-displaymanager)

所在头文件： [oh_display_info.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-display-info-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t hdrFormatLength | 显示设备支持的HDR格式数量。 |
| uint32_t* hdrFormats | 显示设备支持的HDR格式数据。 |
