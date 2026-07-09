---
title: "drawing_color.h"
upstream_id: "harmonyos-references/capi-drawing-color-h"
catalog: "harmonyos-references"
content_hash: "88ab771176c2"
synced_at: "2026-07-09T01:00:54.833714"
---

# drawing_color.h

#### 概述

文件中定义了与颜色相关的功能函数。

引用文件： <native_drawing/drawing_color.h>

库： libnative_drawing.so

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 8

相关模块： [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [uint32_t OH_Drawing_ColorSetArgb(uint32_t alpha, uint32_t red, uint32_t green, uint32_t blue)](#oh_drawing_colorsetargb) | 用于将4个变量（分别描述透明度、红色、绿色和蓝色）转化为一个描述颜色的32位（ARGB）变量。 |

#### 函数说明

#### [h2]OH_Drawing_ColorSetArgb()

```
uint32_t OH_Drawing_ColorSetArgb(uint32_t alpha, uint32_t red, uint32_t green, uint32_t blue)
```
 描述

用于将4个变量（分别描述透明度、红色、绿色和蓝色）转化为一个描述颜色的32位（ARGB）变量。

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 8

参数：

| 参数项 | 描述 |
| --- | --- |
| uint32_t alpha | 描述透明度的变量, 变量范围是0x00~0xFF。 |
| uint32_t red | 描述红色的变量, 变量范围是0x00~0xFF。 |
| uint32_t green | 描述绿色的变量, 变量范围是0x00~0xFF。 |
| uint32_t blue | 描述蓝色的变量, 变量范围是0x00~0xFF。 |

返回：

| 类型 | 说明 |
| --- | --- |
| uint32_t | 函数返回一个描述颜色的32位（ARGB）变量。 |
