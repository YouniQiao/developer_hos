---
title: "NativeDisplayManager_CutoutInfo"
upstream_id: "harmonyos-references/capi-nativedisplaymanager-cutoutinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:57.026425"
---

# NativeDisplayManager_CutoutInfo

```
typedef struct {...} NativeDisplayManager_CutoutInfo
```

#### 概述

挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。

起始版本： 12

相关模块： [OH_DisplayManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-displaymanager)

所在头文件： [oh_display_info.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-display-info-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t boundingRectsLength | 挖孔屏、刘海屏不可用屏幕区域长度。 |
| [NativeDisplayManager_Rect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativedisplaymanager-rect)* boundingRects | 挖孔屏、刘海屏等区域的边界矩形。 |
| [NativeDisplayManager_WaterfallDisplayAreaRects](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativedisplaymanager-waterfalldisplayarearects) waterfallDisplayAreaRects | 瀑布屏曲面部分显示区域。 |
