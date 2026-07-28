---
title: "image_animator.h"
upstream_id: "harmonyos-references/capi-image-animator-h"
catalog: "harmonyos-references"
content_hash: "1630e327d53a"
synced_at: "2026-07-28T16:49:17.615517"
---

# image_animator.h

#### 概述

为NativeNode API提供ImageAnimator节点类型定义。

引用文件： <arkui/node_attributes/image_animator.h>

库： libace_ndk.z.so

系统能力： SystemCapability.ArkUI.ArkUI.Full

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

相关示例： [NativeTypeSample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeType/native_type_sample)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo) | ArkUI_ImageAnimatorFrameInfo | 定义图片动画帧信息。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkUI_AnimationStatus](#arkui_animationstatus) | ArkUI_AnimationStatus | 定义帧动画的播放状态。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo* OH_ArkUI_ImageAnimatorFrameInfo_CreateFromString(char* src)](#oh_arkui_imageanimatorframeinfo_createfromstring) | 使用图片路径创建帧图片信息，图片格式为svg、png和jpg。支持应用沙箱内的相对路径和绝对路径。 |
| [ArkUI_ImageAnimatorFrameInfo* OH_ArkUI_ImageAnimatorFrameInfo_CreateFromDrawableDescriptor(ArkUI_DrawableDescriptor* drawable)](#oh_arkui_imageanimatorframeinfo_createfromdrawabledescriptor) | 使用DrawableDescriptor对象创建帧图片信息，图片格式为Resource和PixelMap。 |
| [void OH_ArkUI_ImageAnimatorFrameInfo_Dispose(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_dispose) | 销毁帧图片对象指针。 |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetWidth(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t width)](#oh_arkui_imageanimatorframeinfo_setwidth) | 设置图片宽度。 |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetWidth(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_getwidth) | 获取图片宽度。 |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetHeight(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t height)](#oh_arkui_imageanimatorframeinfo_setheight) | 设置图片高度。 |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetHeight(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_getheight) | 获取图片高度。 |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetTop(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t top)](#oh_arkui_imageanimatorframeinfo_settop) | 设置图片相对于组件左上角的纵向坐标。 |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetTop(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_gettop) | 获取图片相对于组件左上角的纵向坐标。 |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetLeft(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t left)](#oh_arkui_imageanimatorframeinfo_setleft) | 设置图片相对于组件左上角的横向坐标。 |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetLeft(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_getleft) | 获取图片相对于组件左上角的横向坐标。 |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetDuration(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t duration)](#oh_arkui_imageanimatorframeinfo_setduration) | 设置图片的播放时长。 |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetDuration(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_getduration) | 获取图片的播放时长。 |

#### 枚举类型说明

#### [h2]ArkUI_AnimationStatus

```
enum ArkUI_AnimationStatus
```
 描述

定义帧动画的播放状态。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_ANIMATION_STATUS_INITIAL = 0 | 动画初始状态。 |
| ARKUI_ANIMATION_STATUS_RUNNING = 1 | 动画处于播放状态。 |
| ARKUI_ANIMATION_STATUS_PAUSED = 2 | 动画处于暂停状态。 |
| ARKUI_ANIMATION_STATUS_STOPPED = 3 | 动画处于停止状态。 |

#### 函数说明

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_CreateFromString()

```
ArkUI_ImageAnimatorFrameInfo* OH_ArkUI_ImageAnimatorFrameInfo_CreateFromString(char* src)
```
 描述

使用图片路径创建帧图片信息，图片格式为svg、png和jpg。支持应用沙箱内的相对路径和绝对路径。返回的帧图片对象使用完毕后需调用[OH_ArkUI_ImageAnimatorFrameInfo_Dispose](#oh_arkui_imageanimatorframeinfo_dispose)释放，避免内存泄漏。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| char* src | 图片路径，支持应用沙箱内的相对路径和绝对路径。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* | 帧图片对象指针。使用完毕后需调用[OH_ArkUI_ImageAnimatorFrameInfo_Dispose](#oh_arkui_imageanimatorframeinfo_dispose)释放，避免内存泄漏；src为NULL时返回NULL。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_CreateFromDrawableDescriptor()

```
ArkUI_ImageAnimatorFrameInfo* OH_ArkUI_ImageAnimatorFrameInfo_CreateFromDrawableDescriptor(ArkUI_DrawableDescriptor* drawable)
```
 描述

使用[ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)对象创建帧图片信息，图片格式为Resource和PixelMap。返回的帧图片对象使用完毕后需调用[OH_ArkUI_ImageAnimatorFrameInfo_Dispose](#oh_arkui_imageanimatorframeinfo_dispose)释放，避免内存泄漏。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)* drawable | 使用Resource或PixelMap创建的ArkUI_DrawableDescriptor对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* | 帧图片对象指针。使用完毕后需调用[OH_ArkUI_ImageAnimatorFrameInfo_Dispose](#oh_arkui_imageanimatorframeinfo_dispose)释放，避免内存泄漏；drawable为NULL时返回NULL。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_Dispose()

```
void OH_ArkUI_ImageAnimatorFrameInfo_Dispose(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```
 描述

销毁帧图片对象指针。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_SetWidth()

```
void OH_ArkUI_ImageAnimatorFrameInfo_SetWidth(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t width)
```
 描述

设置图片宽度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |
| int32_t width | 图片宽度，单位为px，取值范围[0, +∞)。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_GetWidth()

```
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetWidth(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```
 描述

获取图片宽度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 图片宽度，单位为px，imageInfo为空指针或该字段未设置时返回0。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_SetHeight()

```
void OH_ArkUI_ImageAnimatorFrameInfo_SetHeight(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t height)
```
 描述

设置图片高度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |
| int32_t height | 图片高度，单位为px，取值范围[0, +∞)。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_GetHeight()

```
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetHeight(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```
 描述

获取图片高度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 图片高度，单位为px，imageInfo为空指针或该字段未设置时返回0。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_SetTop()

```
void OH_ArkUI_ImageAnimatorFrameInfo_SetTop(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t top)
```
 描述

设置图片相对于组件左上角的纵向坐标。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |
| int32_t top | 图片相对于组件左上角的纵向坐标，单位为px。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_GetTop()

```
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetTop(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```
 描述

获取图片相对于组件左上角的纵向坐标。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 图片相对于组件左上角的纵向坐标，单位为px，imageInfo为空指针或该字段未设置时返回0。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_SetLeft()

```
void OH_ArkUI_ImageAnimatorFrameInfo_SetLeft(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t left)
```
 描述

设置图片相对于组件左上角的横向坐标。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |
| int32_t left | 图片相对于组件左上角的横向坐标，单位为px。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_GetLeft()

```
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetLeft(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```
 描述

获取图片相对于组件左上角的横向坐标。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 图片相对于组件左上角的横向坐标，单位为px，imageInfo为空指针或该字段未设置时返回0。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_SetDuration()

```
void OH_ArkUI_ImageAnimatorFrameInfo_SetDuration(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t duration)
```
 描述

设置图片的播放时长。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |
| int32_t duration | 图片的播放时长，单位为ms，取值范围[0, +∞)。 |

#### [h2]OH_ArkUI_ImageAnimatorFrameInfo_GetDuration()

```
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetDuration(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```
 描述

获取图片的播放时长。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ImageAnimatorFrameInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-imageanimatorframeinfo)* imageInfo | 帧图片对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 图片的播放时长，单位为ms，imageInfo为空指针或该字段未设置时返回0。 |
