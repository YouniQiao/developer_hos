---
title: "drawing_pixel_map.h"
upstream_id: "harmonyos-references/capi-drawing-pixel-map-h"
catalog: "harmonyos-references"
content_hash: "382245359f43"
synced_at: "2026-08-29T18:17:54.351390"
---

# drawing_pixel_map.h

#### 概述

声明与绘图模块中的像素图对象相关的函数。支持从图像框架定义的像素图对象中获取本模块定义的像素图对象，支持解除两者之间的关系。

本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

引用文件： <native_drawing/drawing_pixel_map.h>

库： libnative_drawing.so

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 12

相关模块： [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [NativePixelMap_](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-nativepixelmap-) | NativePixelMap_ | 声明由图像框架定义的像素图对象。 |
| [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-pixelmapnative) | OH_PixelmapNative | 声明由图像框架定义的像素图对象。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [OH_Drawing_PixelMap* OH_Drawing_PixelMapGetFromNativePixelMap(NativePixelMap_* nativePixelMap)](#oh_drawing_pixelmapgetfromnativepixelmap) | 从图像框架定义的像素图对象中获取本模块定义的像素图对象。对象使用完毕后，调用[OH_Drawing_PixelMapDissolve](#oh_drawing_pixelmapdissolve)解除关系，否则会引发内存泄漏问题。 |
| [OH_Drawing_PixelMap* OH_Drawing_PixelMapGetFromOhPixelMapNative(OH_PixelmapNative* pixelmapNative)](#oh_drawing_pixelmapgetfromohpixelmapnative) | 从图像框架定义的像素图对象中获取本模块定义的像素图对象。对象使用完毕后，调用[OH_Drawing_PixelMapDissolve](#oh_drawing_pixelmapdissolve)解除关系，否则会引发内存泄漏问题。 |
| [void OH_Drawing_PixelMapDissolve(OH_Drawing_PixelMap* pixelMap)](#oh_drawing_pixelmapdissolve) | 解除本模块定义的像素图对象和图像框架定义的像素图对象之间的关系。必须先调用[OH_Drawing_PixelMapGetFromNativePixelMap](#oh_drawing_pixelmapgetfromnativepixelmap)或[OH_Drawing_PixelMapGetFromOhPixelMapNative](#oh_drawing_pixelmapgetfromohpixelmapnative)获取像素图对象并建立关联关系后，才能调用本方法解除该关系。 |

#### 函数说明

#### [h2]OH_Drawing_PixelMapGetFromNativePixelMap()

```
OH_Drawing_PixelMap* OH_Drawing_PixelMapGetFromNativePixelMap(NativePixelMap_* nativePixelMap)
```
 描述

从图像框架定义的像素图对象中获取本模块定义的像素图对象。对象使用完毕后，调用[OH_Drawing_PixelMapDissolve](#oh_drawing_pixelmapdissolve)解除关系，否则会引发内存泄漏问题。

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [NativePixelMap_](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-nativepixelmap-)* nativePixelMap | 指向图像框架定义的像素图对象[NativePixelMap_](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-nativepixelmap-)的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)* | 返回一个指向本模块定义的像素图对象[OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)的指针。如果返回NULL，表示获取失败；原因是参数nativePixelMap为NULL。 |

#### [h2]OH_Drawing_PixelMapGetFromOhPixelMapNative()

```
OH_Drawing_PixelMap* OH_Drawing_PixelMapGetFromOhPixelMapNative(OH_PixelmapNative* pixelmapNative)
```
 描述

从图像框架定义的像素图对象中获取本模块定义的像素图对象。对象使用完毕后，调用[OH_Drawing_PixelMapDissolve](#oh_drawing_pixelmapdissolve)解除关系，否则会引发内存泄漏问题。

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-pixelmapnative)* pixelmapNative | 指向图像框架定义的像素图对象[OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-pixelmapnative)的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)* | 返回一个指向本模块定义的像素图对象[OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)的指针。如果返回NULL，表示获取失败；原因是参数pixelmapNative为NULL。 |

#### [h2]OH_Drawing_PixelMapDissolve()

```
void OH_Drawing_PixelMapDissolve(OH_Drawing_PixelMap* pixelMap)
```
 描述

解除本模块定义的像素图对象和图像框架定义的像素图对象之间的关系。必须先调用[OH_Drawing_PixelMapGetFromNativePixelMap](#oh_drawing_pixelmapgetfromnativepixelmap)或[OH_Drawing_PixelMapGetFromOhPixelMapNative](#oh_drawing_pixelmapgetfromohpixelmapnative)获取像素图对象并建立关联关系后，才能调用本方法解除该关系。

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)* pixelMap | 指向像素图对象[OH_Drawing_PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-pixelmap)的指针。 |
