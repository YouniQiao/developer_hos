---
title: "ArkUI_NodeAttributeType（基础属性）"
upstream_id: "harmonyos-references/capi-native-node-h-nodeattributetype-base"
catalog: "harmonyos-references"
content_hash: "ca46ca66c348"
synced_at: "2026-07-09T00:58:34.277967"
---

# ArkUI_NodeAttributeType（基础属性）

```
enum ArkUI_NodeAttributeType
```

#### 概述

定义ArkUI在Native侧可以设置的基础属性集合，包含背景、背景图片样式和组件标识等属性设置。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)

#### NODE_BACKGROUND_COLOR

```
NODE_BACKGROUND_COLOR = 2
```
 背景色属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].u32 | 背景色数值，0xargb格式，形如 0xFFFF0000 表示红色。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].u32 | 背景色数值，0xargb格式，形如 0xFFFF0000 表示红色。 |

#### NODE_BACKGROUND_IMAGE

```
NODE_BACKGROUND_IMAGE = 3
```
 背景色图片属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .string | 图片地址。API version 22及之前版本，支持网络图片资源地址、本地图片资源地址、Base64和[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)资源，不支持[svg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg)图片、gif和webp等类型的动图。从API version 23开始，新增支持webp和gif类型的动图，显示动图第一帧，不支持其他类型的动图。 |
| .value[0]?.i32 | 可选值，repeat参数，参数类型[ArkUI_ImageRepeat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_imagerepeat)，默认值为ARKUI_IMAGE_REPEAT_NONE。 |
| .object | PixelMap图片数据，参数类型为[ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)。.object参数和.string参数二选一，不可同时设置。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .string | 图片地址。API version 22及之前版本，支持网络图片资源地址、本地图片资源地址、Base64和PixelMap资源，不支持svg图片、gif和webp等类型的动图。从API version 23开始，新增支持webp和gif类型的动图，显示动图第一帧，不支持其他类型的动图。 |
| .value[0].i32 | repeat参数，参数类型[ArkUI_ImageRepeat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_imagerepeat)。 |
| .object | PixelMap图片数据，参数类型为[ArkUI_DrawableDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawabledescriptor)。 |

#### NODE_ID

```
NODE_ID = 5
```
 组件ID属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .string | ID的内容。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .string | ID的内容。 |

#### NODE_BACKGROUND_IMAGE_SIZE

```
NODE_BACKGROUND_IMAGE_SIZE = 30
```
 背景图片的宽高属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 图片的宽度值，取值范围[0,+∞)，单位为vp。 |
| .value[1].f32 | 图片的高度值，取值范围[0,+∞)，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 图片的宽度值，单位为vp。 |
| .value[1].f32 | 图片的高度值，单位为vp。 |

#### NODE_BACKGROUND_IMAGE_SIZE_WITH_STYLE

```
NODE_BACKGROUND_IMAGE_SIZE_WITH_STYLE = 31
```
 背景图片的宽高样式属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 背景图片的宽高样式，取[ArkUI_ImageSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_imagesize)枚举值。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 背景图片的宽高样式，取[ArkUI_ImageSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_imagesize)枚举值。 |

#### NODE_BACKGROUND_IMAGE_POSITION

```
NODE_BACKGROUND_IMAGE_POSITION = 56
```
 背景图在组件中显示位置，即相对于组件左上角的坐标，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | x轴位置，单位为px。 |
| .value[1].f32 | y轴位置，单位为px。 |
| .value[2]?.i32 | 可选值，对齐方式，参数类型[ArkUI_Alignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_alignment)，默认值为ARKUI_ALIGNMENT_TOP_START。该参数从API version 21开始支持。 |
| .value[3]?.i32 | 可选值，布局方向，参数类型[ArkUI_Direction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_direction)，默认值为ARKUI_DIRECTION_AUTO。多数场景下建议设置为AUTO，由系统自动处理布局方向；若需要固定方向，可设置为LTR或RTL。该参数从API version 21开始支持。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | x轴位置，单位为px。 |
| .value[1].f32 | y轴位置，单位为px。 |
| .value[2].i32 | 对齐方式，参数类型[ArkUI_Alignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_alignment)。该返回值从API version 21开始支持。 |
| .value[3].i32 | 布局方向，参数类型[ArkUI_Direction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_direction)。该返回值从API version 21开始支持。 |

#### NODE_RENDER_GROUP

```
NODE_RENDER_GROUP = 80
```
 设置当前组件和子组件是否先整体离屏渲染绘制后再与父控件融合绘制，支持属性设置，属性重置和属性获取。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 参数类型为1表示当前组件与子组件需要先整体离屏渲染绘制后再与父控件融合绘制，参数类型为0表示不需要整体离屏渲染绘制后再与父控件融合绘制。默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 参数类型为1表示当前组件与子组件完成整体离屏渲染绘制，参数类型为0表示当前组件与子组件未完成整体离屏渲染绘制。 |

#### NODE_UNIQUE_ID

```
NODE_UNIQUE_ID = 95
```
 组件标识ID，支持属性获取。

组件标识ID只读，且进程内唯一。

起始版本： 12

废弃版本： 从API version 12开始支持，从API version 20开始废弃。建议使用[OH_ArkUI_NodeUtils_GetNodeUniqueId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeutils_getnodeuniqueid)替代。

#### NODE_CLICK_DISTANCE

```
NODE_CLICK_DISTANCE = 97
```
 组件所绑定的点击手势移动距离限制，支持属性设置。

作为属性设置方法参数[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 表示识别点击手势时允许手指在该范围内移动，单位为vp。 |
