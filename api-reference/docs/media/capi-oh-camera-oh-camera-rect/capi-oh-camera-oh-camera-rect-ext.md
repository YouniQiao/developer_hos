---
title: "OH_Camera_Rect_Ext"
upstream_id: "harmonyos-references/capi-oh-camera-oh-camera-rect-ext"
catalog: "harmonyos-references"
content_hash: "1cf7f3b5ff71"
synced_at: "2026-07-28T16:51:43.915169"
---

# OH_Camera_Rect_Ext

```
typedef struct OH_Camera_Rect_Ext {...} OH_Camera_Rect_Ext
```

#### 概述

矩形定义。

检测点应在0-1坐标系内，该坐标系左上角为(0，0)，右下角为(1，1)。

此坐标系以设备充电口在右侧时的横向设备方向为基准。

例如应用的预览界面布局以设备充电口在下侧时的竖向方向为基准，布局宽高为(w，h)，返回点为(x，y)，则转换后的坐标点为(1-y，x)。

起始版本： 26.0.0

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| double topLeftX | 矩形左上角的X坐标，范围[0, 1]。 **起始版本：** 26.0.0 |
| double topLeftY | 矩形左上角的Y坐标，范围[0, 1]。 **起始版本：** 26.0.0 |
| double width | 矩形宽度，范围[0, 1]。 **起始版本：** 26.0.0 |
| double height | 矩形高度，范围[0, 1]。 **起始版本：** 26.0.0 |
