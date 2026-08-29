---
title: "drawing_surface.h"
upstream_id: "harmonyos-references/capi-drawing-surface-h"
catalog: "harmonyos-references"
content_hash: "e29c76213550"
synced_at: "2026-08-29T18:17:55.281790"
---

# drawing_surface.h

#### 概述

本文件定义了与surface相关的功能函数，包括surface的创建、销毁和使用等。surface对象用于管理画布绘制的内容，支持通过图形处理器上下文创建离屏surface和与屏幕窗口绑定的surface。

本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

引用文件： <native_drawing/drawing_surface.h>

库： libnative_drawing.so

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 12

相关模块： [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [OH_Drawing_Surface* OH_Drawing_SurfaceCreateFromGpuContext(OH_Drawing_GpuContext* gpuContext, bool flag, OH_Drawing_Image_Info imageInfo)](#oh_drawing_surfacecreatefromgpucontext) | 使用图形处理器上下文创建离屏surface对象，用于管理画布绘制的内容。若需将绘制内容上屏显示（配合[OH_Drawing_SurfaceFlush](#oh_drawing_surfaceflush)使用），请改用[OH_Drawing_SurfaceCreateOnScreen](#oh_drawing_surfacecreateonscreen)创建与屏幕窗口绑定的surface对象。 本接口会产生错误码，可以通过[OH_Drawing_ErrorCodeGet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。 gpuContext为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。 |
| [OH_Drawing_Surface* OH_Drawing_SurfaceCreateOnScreen(OH_Drawing_GpuContext* gpuContext, OH_Drawing_Image_Info imageInfo, void* window)](#oh_drawing_surfacecreateonscreen) | 使用图形处理器上下文创建一个与屏幕窗口绑定的surface对象，用于管理画布绘制的内容。若不需要上屏显示，请改用[OH_Drawing_SurfaceCreateFromGpuContext](#oh_drawing_surfacecreatefromgpucontext)创建离屏surface对象。 本接口会产生错误码，可以通过[OH_Drawing_ErrorCodeGet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。 gpuContext或window为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。 imageInfo的宽高和window的宽高需保持一致，否则对象创建失败。 |
| [OH_Drawing_Canvas* OH_Drawing_SurfaceGetCanvas(OH_Drawing_Surface* surface)](#oh_drawing_surfacegetcanvas) | 通过surface对象获取画布对象。 本接口会产生错误码，可以通过[OH_Drawing_ErrorCodeGet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。 surface为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。 |
| [OH_Drawing_ErrorCode OH_Drawing_SurfaceFlush(OH_Drawing_Surface* surface)](#oh_drawing_surfaceflush) | 将surface对象上的画布绘制内容提交给图形处理器处理，完成绘制内容上屏显示。 |
| [void OH_Drawing_SurfaceDestroy(OH_Drawing_Surface* surface)](#oh_drawing_surfacedestroy) | 销毁surface对象并回收该对象占用的内存。调用本接口销毁surface对象后，通过[OH_Drawing_SurfaceGetCanvas](#oh_drawing_surfacegetcanvas)获取的画布对象不应再使用，其生命周期由surface对象管理。 |

#### 函数说明

#### [h2]OH_Drawing_SurfaceCreateFromGpuContext()

```
OH_Drawing_Surface* OH_Drawing_SurfaceCreateFromGpuContext(OH_Drawing_GpuContext* gpuContext, bool flag, OH_Drawing_Image_Info imageInfo)
```
 描述

使用图形处理器上下文创建离屏surface对象，用于管理画布绘制的内容。若需将绘制内容上屏显示（配合[OH_Drawing_SurfaceFlush](#oh_drawing_surfaceflush)使用），请改用[OH_Drawing_SurfaceCreateOnScreen](#oh_drawing_surfacecreateonscreen)创建与屏幕窗口绑定的surface对象。

本接口会产生错误码，可以通过[OH_Drawing_ErrorCodeGet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。

gpuContext为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)* gpuContext | 指向图形处理器上下文对象[OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)的指针。 |
| bool flag | 用于控制内存分配是否计入缓存预算。true则计入缓存预算，false则不计入缓存预算。缓存预算为图形处理器缓存可使用的内存上限，计入预算的内存分配会占用缓存额度。当需要将绘制内容纳入缓存管理以提升性能时，flag设置为true；当绘制内容为临时数据、不需要长期缓存时，flag设置为false。 |
| [OH_Drawing_Image_Info](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-image-info) imageInfo | 图像信息[OH_Drawing_Image_Info](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-image-info)结构体，用于指定所创建surface的图像宽度、高度、颜色类型和透明度类型等属性。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)* | 返回指向创建的surface对象[OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)的指针。 |

#### [h2]OH_Drawing_SurfaceCreateOnScreen()

```
OH_Drawing_Surface* OH_Drawing_SurfaceCreateOnScreen(OH_Drawing_GpuContext* gpuContext, OH_Drawing_Image_Info imageInfo, void* window)
```
 描述

使用图形处理器上下文创建一个与屏幕窗口绑定的surface对象，用于管理画布绘制的内容。若不需要上屏显示，请改用[OH_Drawing_SurfaceCreateFromGpuContext](#oh_drawing_surfacecreatefromgpucontext)创建离屏surface对象。

本接口会产生错误码，可以通过[OH_Drawing_ErrorCodeGet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。

gpuContext或window为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。

imageInfo的宽高和window的宽高需保持一致，否则对象创建失败。

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 16

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)* gpuContext | 指向图形处理器上下文对象[OH_Drawing_GpuContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-gpucontext)的指针。 |
| [OH_Drawing_Image_Info](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-image-info) imageInfo | 图像信息[OH_Drawing_Image_Info](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-image-info)结构体，用于指定所创建surface的图像宽度、高度、颜色类型和透明度类型等属性。 |
| void* window | 指向屏幕窗口对象（OHNativeWindow）的指针，实际应传入OHNativeWindow*类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)* | 返回指向创建的surface对象[OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)的指针。 |

#### [h2]OH_Drawing_SurfaceGetCanvas()

```
OH_Drawing_Canvas* OH_Drawing_SurfaceGetCanvas(OH_Drawing_Surface* surface)
```
 描述

通过surface对象获取画布对象。

本接口会产生错误码，可以通过[OH_Drawing_ErrorCodeGet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-error-code-h#oh_drawing_errorcodeget)查看错误码的取值。

surface为NULL时返回OH_DRAWING_ERROR_INVALID_PARAMETER。

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)* surface | 指向已创建的surface对象的指针[OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)，用于从中获取画布对象。该surface对象可由[OH_Drawing_SurfaceCreateFromGpuContext](#oh_drawing_surfacecreatefromgpucontext)或[OH_Drawing_SurfaceCreateOnScreen](#oh_drawing_surfacecreateonscreen)创建。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Drawing_Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-canvas)* | 返回指向获取的画布对象[OH_Drawing_Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-canvas)的指针。返回的指针不需要由调用者管理，其生命周期由对应的surface对象管理。调用[OH_Drawing_SurfaceDestroy](#oh_drawing_surfacedestroy)销毁surface对象后，不应再使用该画布对象。 |

#### [h2]OH_Drawing_SurfaceFlush()

```
OH_Drawing_ErrorCode OH_Drawing_SurfaceFlush(OH_Drawing_Surface* surface)
```
 描述

将surface对象上的画布绘制内容提交给图形处理器处理，完成绘制内容上屏显示。

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 16

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)* surface | 指向创建的surface对象的指针[OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)。该surface对象必须由[OH_Drawing_SurfaceCreateOnScreen](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-surface-h#oh_drawing_surfacecreateonscreen)创建，否则该接口调用不会将绘制内容上屏显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Drawing_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-error-code-h#oh_drawing_errorcode) | 函数返回执行错误码。 返回OH_DRAWING_SUCCESS，表示执行成功。 返回OH_DRAWING_ERROR_INVALID_PARAMETER，表示参数surface为NULL。 |

#### [h2]OH_Drawing_SurfaceDestroy()

```
void OH_Drawing_SurfaceDestroy(OH_Drawing_Surface* surface)
```
 描述

销毁surface对象并回收该对象占用的内存。调用本接口销毁surface对象后，通过[OH_Drawing_SurfaceGetCanvas](#oh_drawing_surfacegetcanvas)获取的画布对象不应再使用，其生命周期由surface对象管理。

系统能力： SystemCapability.Graphic.Graphic2D.NativeDrawing

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)* surface | 指向待销毁的surface对象的指针[OH_Drawing_Surface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-surface)。该surface对象可由[OH_Drawing_SurfaceCreateFromGpuContext](#oh_drawing_surfacecreatefromgpucontext)或[OH_Drawing_SurfaceCreateOnScreen](#oh_drawing_surfacecreateonscreen)创建，销毁后该指针不应再被使用。 |
