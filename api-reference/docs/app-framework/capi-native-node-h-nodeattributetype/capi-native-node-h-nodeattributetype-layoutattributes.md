---
title: "ArkUI_NodeAttributeType（布局属性）"
upstream_id: "harmonyos-references/capi-native-node-h-nodeattributetype-layoutattributes"
catalog: "harmonyos-references"
content_hash: "a7e67d173af5"
synced_at: "2026-07-09T00:58:34.820347"
---

# ArkUI_NodeAttributeType（布局属性）

```
enum ArkUI_NodeAttributeType
```

#### 概述

定义ArkUI在Native侧可以设置的布局相关属性集合，包含尺寸、百分比尺寸、内外边距、边框、位置、对齐、方向、约束、Flex参数、布局规则及布局类组件相关属性设置。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)

#### NODE_WIDTH

```
NODE_WIDTH = 0
```
 宽度属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置宽度数值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 宽度数值，单位为vp。 |

#### NODE_HEIGHT

```
NODE_HEIGHT = 1
```
 高度属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置高度数值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 高度数值，单位为vp。 |

#### NODE_PADDING

```
NODE_PADDING = 4
```
 内间距属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：只传入一个参数，表示统一设置上下左右四个位置的内间距值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 统一设置上下左右四个位置的内间距值，单位为vp。 |

2：传入四个参数，表示分别设置上下左右四个位置的内间距值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置上内间距数值，单位为vp，默认值为0vp。 |
| .value[1].f32 | 设置右内间距数值，单位为vp，默认值为0vp。 |
| .value[2].f32 | 设置下内间距数值，单位为vp，默认值为0vp。 |
| .value[3].f32 | 设置左内间距数值，单位为vp，默认值为0vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 上内间距数值，单位为vp。 |
| .value[1].f32 | 右内间距数值，单位为vp。 |
| .value[2].f32 | 下内间距数值，单位为vp。 |
| .value[3].f32 | 左内间距数值，单位为vp。 |

#### NODE_MARGIN

```
NODE_MARGIN = 7
```
 外间距属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：只传入一个参数，表示统一设置上下左右四个位置的外间距值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 统一设置上下左右四个位置的外间距值，单位为vp。 |

2：传入四个参数，表示分别设置上下左右四个位置的外间距值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置上外间距数值，单位为vp，默认值为0vp。 |
| .value[1].f32 | 设置右外间距数值，单位为vp，默认值为0vp。 |
| .value[2].f32 | 设置下外间距数值，单位为vp，默认值为0vp。 |
| .value[3].f32 | 设置左外间距数值，单位为vp，默认值为0vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 上外间距数值，单位为vp。 |
| .value[1].f32 | 右外间距数值，单位为vp。 |
| .value[2].f32 | 下外间距数值，单位为vp。 |
| .value[3].f32 | 左外间距数值，单位为vp。 |

#### NODE_ALIGNMENT

```
NODE_ALIGNMENT = 15
```
 设置组件内容在元素绘制区域内的对齐方式，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置对齐方式，参数类型[ArkUI_Alignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_alignment)，默认值为ARKUI_ALIGNMENT_CENTER。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 对齐方式，参数类型[ArkUI_Alignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_alignment)。 |

#### NODE_BORDER_WIDTH

```
NODE_BORDER_WIDTH = 17
```
 边框宽度属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：只传入一个参数，表示统一设置四条边的边框宽度。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 统一设置四条边的边框宽度，单位为vp。 |

2：传入四个参数，表示分别设置四条边的边框宽度。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置上边框的边框宽度，单位为vp，默认值为0vp。 |
| .value[1].f32 | 设置右边框的边框宽度，单位为vp，默认值为0vp。 |
| .value[2].f32 | 设置下边框的边框宽度，单位为vp，默认值为0vp。 |
| .value[3].f32 | 设置左边框的边框宽度，单位为vp，默认值为0vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 上边框的边框宽度。 |
| .value[1].f32 | 右边框的边框宽度。 |
| .value[2].f32 | 下边框的边框宽度。 |
| .value[3].f32 | 左边框的边框宽度。 |

#### NODE_BORDER_RADIUS

```
NODE_BORDER_RADIUS = 18
```
 边框圆角属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：只传入一个参数，表示统一设置四条边的边框圆角。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 统一设置四条边的边框圆角。 |

2：传入四个参数，表示分别设置四条边的边框圆角。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置左上角圆角半径，单位为vp，默认值为0vp。 |
| .value[1].f32 | 设置右上角圆角半径，单位为vp，默认值为0vp。 |
| .value[2].f32 | 设置左下角圆角半径，单位为vp，默认值为0vp。 |
| .value[3].f32 | 设置右下角圆角半径，单位为vp，默认值为0vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 设置左上角圆角半径。 |
| .value[1].f32 | 设置右上角圆角半径。 |
| .value[2].f32 | 设置左下角圆角半径。 |
| .value[3].f32 | 设置右下角圆角半径。 |

#### NODE_BORDER_COLOR

```
NODE_BORDER_COLOR = 19
```
 边框颜色属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：统一设置四条边的边框颜色。

| 参数项 | 描述 |
| --- | --- |
| .value[0].u32 | 统一设置四条边的边框颜色，使用0xargb表示，如0xFFFF11FF。 |

2：分别设置四条边的边框颜色。

| 参数项 | 描述 |
| --- | --- |
| .value[0].u32 | 设置上侧边框颜色，使用0xargb表示，默认值为0xFF000000。 |
| .value[1].u32 | 设置右侧边框颜色，使用0xargb表示，默认值为0xFF000000。 |
| .value[2].u32 | 设置下侧边框颜色，使用0xargb表示，默认值为0xFF000000。 |
| .value[3].u32 | 设置左侧边框颜色，使用0xargb表示，默认值为0xFF000000。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].u32 | 上侧边框颜色，使用0xargb表示，如0xFFFF11FF。 |
| .value[1].u32 | 右侧边框颜色，使用0xargb表示，如0xFFFF11FF。 |
| .value[2].u32 | 下侧边框颜色，使用0xargb表示，如0xFFFF11FF。 |
| .value[3].u32 | 左侧边框颜色，使用0xargb表示，如0xFFFF11FF。 |

#### NODE_BORDER_STYLE

```
NODE_BORDER_STYLE = 20
```
 边框线条样式属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：只传入一个参数，表示统一设置四条边的边框线条样式。

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 统一设置四条边的边框线条样式，参数类型[ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI_BORDER_STYLE_SOLID。 |

2：传入四个参数，表示分别设置四条边的边框线条样式。

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置上侧边框线条样式，参数类型[ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI_BORDER_STYLE_SOLID。 |
| .value[1].i32 | 设置右侧边框线条样式，参数类型[ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI_BORDER_STYLE_SOLID。 |
| .value[2].i32 | 设置下侧边框线条样式，参数类型[ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI_BORDER_STYLE_SOLID。 |
| .value[3].i32 | 设置左侧边框线条样式，参数类型[ArkUI_BorderStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_borderstyle)，默认值为ARKUI_BORDER_STYLE_SOLID。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 上侧边框线条样式对应的数值。 |
| .value[1].i32 | 右侧边框线条样式对应的数值。 |
| .value[2].i32 | 下侧边框线条样式对应的数值。 |
| .value[3].i32 | 左侧边框线条样式对应的数值。 |

#### NODE_POSITION

```
NODE_POSITION = 27
```
 元素左上角相对于父容器左上角偏移位置，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置x轴坐标。 |
| .value[1].f32 | 设置y轴坐标。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | x轴坐标。 |
| .value[1].f32 | y轴坐标。 |

#### NODE_DIRECTION

```
NODE_DIRECTION = 47
```
 设置容器元素内主轴方向上的布局，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置主轴方向，参数类型[ArkUI_Direction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_direction)，默认值为ARKUI_DIRECTION_AUTO。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 主轴方向，参数类型[ArkUI_Direction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_direction)。 |

#### NODE_CONSTRAINT_SIZE

```
NODE_CONSTRAINT_SIZE = 48
```
 约束尺寸属性，组件布局时，进行尺寸范围限制，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置最小宽度，单位为vp。 |
| .value[1].f32 | 设置最大宽度，单位为vp。 |
| .value[2].f32 | 设置最小高度，单位为vp。 |
| .value[3].f32 | 设置最大高度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 最小宽度，单位为vp。 |
| .value[1].f32 | 最大宽度，单位为vp。 |
| .value[2].f32 | 最小高度，单位为vp。 |
| .value[3].f32 | 最大高度，单位为vp。 |

#### NODE_OFFSET

```
NODE_OFFSET = 54
```
 组件子元素相对组件自身的额外偏移属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置x轴偏移量，单位为vp。 |
| .value[1].f32 | 设置y轴偏移量，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | x轴偏移量，单位为vp。 |
| .value[1].f32 | y轴偏移量，单位为vp。 |

#### NODE_MARK_ANCHOR

```
NODE_MARK_ANCHOR = 55
```
 组件子元素在位置定位时的锚点属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置锚点x轴坐标，单位为vp。 |
| .value[1].f32 | 设置锚点y轴坐标，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 锚点x轴坐标，单位为vp。 |
| .value[1].f32 | 锚点y轴坐标，单位为vp。 |

#### NODE_ALIGN_RULES

```
NODE_ALIGN_RULES = 57
```
 相对容器中子组件的对齐规则属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | 设置相对容器中子组件的对齐规则，参数类型为[ArkUI_AlignmentRuleOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-alignmentruleoption)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .object | 相对容器中子组件的对齐规则，参数类型为[ArkUI_AlignmentRuleOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-alignmentruleoption)。 |

#### NODE_ALIGN_SELF

```
NODE_ALIGN_SELF = 58
```
 设置子组件在父容器交叉轴的对齐格式，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置子组件在父容器交叉轴上的对齐方式，参数类型[ArkUI_ItemAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_itemalignment)，默认值为ARKUI_ITEM_ALIGNMENT_AUTO。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 子组件在父容器交叉轴上的对齐方式，参数类型[ArkUI_ItemAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_itemalignment)。 |

#### NODE_FLEX_GROW

```
NODE_FLEX_GROW = 59
```
 设置组件在父容器的剩余空间所占比例，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置组件在父容器剩余空间中所占比例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 组件在父容器剩余空间中所占比例。 |

#### NODE_FLEX_SHRINK

```
NODE_FLEX_SHRINK = 60
```
 设置父容器压缩尺寸分配给此属性所在组件的比例，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置父容器压缩尺寸分配给当前组件的比例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 父容器压缩尺寸分配给当前组件的比例。 |

#### NODE_FLEX_BASIS

```
NODE_FLEX_BASIS = 61
```
 设置组件的基准尺寸，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置组件在父容器主轴上的基准尺寸。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 组件在父容器主轴上的基准尺寸。 |

#### NODE_ASPECT_RATIO

```
NODE_ASPECT_RATIO = 67
```
 设置组件的宽高比，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置组件宽高比，格式为宽度/高度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 组件宽高比，格式为宽度/高度。 |

#### NODE_LAYOUT_WEIGHT

```
NODE_LAYOUT_WEIGHT = 68
```
 Row/Column/Flex布局下的子组件布局权重参数，支持属性设置、属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].u32 | 设置组件在主轴上的布局权重。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].u32 | 组件在主轴上的布局权重。 |

#### NODE_DISPLAY_PRIORITY

```
NODE_DISPLAY_PRIORITY = 69
```
 Row/Column/Flex（单行）布局下的子组件在布局容器中显示的优先级，支持属性设置，属性重置和属性获取接口。

当displayPriority大于1时，值越大优先级越高。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].u32 | 设置组件在布局容器中的显示优先级。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].u32 | 组件在布局容器中的显示优先级。 |

#### NODE_OUTLINE_WIDTH

```
NODE_OUTLINE_WIDTH = 70
```
 设置元素的外描边宽度，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 左侧外描边宽度，单位为vp。 |
| .value[1].f32 | 上侧外描边宽度，单位为vp。 |
| .value[2].f32 | 右侧外描边宽度，单位为vp。 |
| .value[3].f32 | 下侧外描边宽度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 左侧外描边宽度，单位为vp。 |
| .value[1].f32 | 上侧外描边宽度，单位为vp。 |
| .value[2].f32 | 右侧外描边宽度，单位为vp。 |
| .value[3].f32 | 下侧外描边宽度，单位为vp。 |

#### NODE_WIDTH_PERCENT

```
NODE_WIDTH_PERCENT = 71
```
 宽度属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置宽度数值，单位为百分比。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 宽度数值，单位为百分比。 |

#### NODE_HEIGHT_PERCENT

```
NODE_HEIGHT_PERCENT = 72
```
 高度属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置高度数值，单位为百分比。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 高度数值，单位为百分比。 |

#### NODE_PADDING_PERCENT

```
NODE_PADDING_PERCENT = 73
```
 内间距属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：只传入一个参数，表示统一设置上下左右四个位置的内间距百分比数值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 统一设置上下左右四个位置的内间距数值，单位为百分比。 |

2：传入四个参数，表示分别设置上下左右四个位置的内间距百分比数值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置上内间距数值，单位为百分比。 |
| .value[1].f32 | 设置右内间距数值，单位为百分比。 |
| .value[2].f32 | 设置下内间距数值，单位为百分比。 |
| .value[3].f32 | 设置左内间距数值，单位为百分比。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 上内间距数值，单位为百分比。 |
| .value[1].f32 | 右内间距数值，单位为百分比。 |
| .value[2].f32 | 下内间距数值，单位为百分比。 |
| .value[3].f32 | 左内间距数值，单位为百分比。 |

#### NODE_MARGIN_PERCENT

```
NODE_MARGIN_PERCENT = 74
```
 外间距属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：只传入一个参数，表示统一设置上下左右四个位置的外间距百分比数值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 统一设置上下左右四个位置的外间距数值，单位为百分比。 |

2：传入四个参数，表示分别设置上下左右四个位置的外间距百分比数值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置上外间距数值，单位为百分比。 |
| .value[1].f32 | 设置右外间距数值，单位为百分比。 |
| .value[2].f32 | 设置下外间距数值，单位为百分比。 |
| .value[3].f32 | 设置左外间距数值，单位为百分比。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 上外间距数值，单位为百分比。 |
| .value[1].f32 | 右外间距数值，单位为百分比。 |
| .value[2].f32 | 下外间距数值，单位为百分比。 |
| .value[3].f32 | 左外间距数值，单位为百分比。 |

#### NODE_RELATIVE_LAYOUT_CHAIN_MODE

```
NODE_RELATIVE_LAYOUT_CHAIN_MODE = 76
```
 指定以该组件为链头所构成的链的参数，支持属性设置、属性重置和属性获取接口。仅当父容器为RelativeContainer时生效。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置链的方向。枚举[ArkUI_Axis](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_axis)。 |
| .value[1].i32 | 设置链的样式。枚举[ArkUI_RelativeLayoutChainStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_relativelayoutchainstyle)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 链的方向。枚举[ArkUI_Axis](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_axis)。 |
| .value[1].i32 | 链的样式。枚举[ArkUI_RelativeLayoutChainStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_relativelayoutchainstyle)。 |

#### NODE_SIZE

```
NODE_SIZE = 79
```
 设置高宽尺寸，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置宽度数值，单位为vp。 |
| .value[1].f32 | 设置高度数值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 宽度数值，单位为vp。 |
| .value[1].f32 | 高度数值，单位为vp。 |

#### NODE_LAYOUT_RECT

```
NODE_LAYOUT_RECT = 83
```
 组件布局大小位置属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置组件x轴坐标，单位为px。 |
| .value[1].i32 | 设置组件y轴坐标，单位为px。 |
| .value[2].i32 | 设置组件宽度，单位为px。 |
| .value[3].i32 | 设置组件高度，单位为px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 组件x轴坐标，单位为px。 |
| .value[1].i32 | 组件y轴坐标，单位为px。 |
| .value[2].i32 | 组件宽度，单位为px。 |
| .value[3].i32 | 组件高度，单位为px。 |

#### NODE_BORDER_WIDTH_PERCENT

```
NODE_BORDER_WIDTH_PERCENT = 85
```
 边框宽度属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：只传入一个参数，表示统一设置四条边的边框宽度百分比数值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 统一设置四条边的边框宽度数值，单位为百分比。 |

2：传入四个参数，表示分别设置四条边的边框宽度百分比数值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置上边框的边框宽度，单位为百分比。 |
| .value[1].f32 | 设置右边框的边框宽度，单位为百分比。 |
| .value[2].f32 | 设置下边框的边框宽度，单位为百分比。 |
| .value[3].f32 | 设置左边框的边框宽度，单位为百分比。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 上边框的边框宽度，单位为百分比。 |
| .value[1].f32 | 右边框的边框宽度，单位为百分比。 |
| .value[2].f32 | 下边框的边框宽度，单位为百分比。 |
| .value[3].f32 | 左边框的边框宽度，单位为百分比。 |

#### NODE_BORDER_RADIUS_PERCENT

```
NODE_BORDER_RADIUS_PERCENT = 86
```
 边框圆角属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 12

参数：

支持传入一个或四个参数：

1：只传入一个参数，表示统一设置四条边的边框圆角半径百分比数值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 统一设置四条边的边框圆角半径数值，单位为百分比。 |

2：传入四个参数，表示分别设置四条边的边框圆角半径百分比数值。

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置左上角圆角半径，单位为百分比。 |
| .value[1].f32 | 设置右上角圆角半径，单位为百分比。 |
| .value[2].f32 | 设置左下角圆角半径，单位为百分比。 |
| .value[3].f32 | 设置右下角圆角半径，单位为百分比。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 左上角圆角半径，单位为百分比。 |
| .value[1].f32 | 右上角圆角半径，单位为百分比。 |
| .value[2].f32 | 左下角圆角半径，单位为百分比。 |
| .value[3].f32 | 右下角圆角半径，单位为百分比。 |

#### NODE_WIDTH_LAYOUTPOLICY

```
NODE_WIDTH_LAYOUTPOLICY = 105
```
 设置组件宽度布局策略，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置组件宽度布局策略，参数类型[ArkUI_LayoutPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_layoutpolicy)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 组件宽度布局策略，参数类型[ArkUI_LayoutPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_layoutpolicy)。 |

#### NODE_HEIGHT_LAYOUTPOLICY

```
NODE_HEIGHT_LAYOUTPOLICY = 106
```
 设置组件高度布局策略，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置组件高度布局策略，参数类型[ArkUI_LayoutPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_layoutpolicy)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 组件高度布局策略，参数类型[ArkUI_LayoutPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_layoutpolicy)。 |

#### NODE_POSITION_EDGES

```
NODE_POSITION_EDGES = 107
```
 设置组件相对容器内容区边界的位置，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | 设置组件相对容器内容区边界的位置，参数类型为[ArkUI_PositionEdges](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-positionedges)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .object | 组件相对容器内容区边界的位置，参数类型为[ArkUI_PositionEdges](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-positionedges)。 |

#### NODE_CHAIN_WEIGHT

```
NODE_CHAIN_WEIGHT = 118
```
 父组件为RelativeContainer时，设置已形成链的组件的布局位置，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置组件在水平方向的布局权重，默认值：0。设置异常值时，按默认值显示。 |
| .value[1].f32 | 设置组件在竖直方向的布局权重，默认值：0。设置异常值时，按默认值显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 组件在水平方向的布局权重。 |
| .value[1].f32 | 组件在竖直方向的布局权重。 |

#### NODE_IGNORE_LAYOUT_SAFE_AREA

```
NODE_IGNORE_LAYOUT_SAFE_AREA = 119
```
 设置扩展组件布局时的安全区域，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].u32 | 设置扩展安全区域的类型。参数类型为[ArkUI_LayoutSafeAreaType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_layoutsafeareatype)，默认值：ARKUI_LAYOUT_SAFE_AREA_TYPE_SYSTEM。设置异常值时，按默认值显示。 |
| .value[1].u32 | 设置扩展安全区域的方向。参数类型为[ArkUI_LayoutSafeAreaEdge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_layoutsafeareaedge)，默认值：ARKUI_LAYOUT_SAFE_AREA_EDGE_ALL，例如：ARKUI_LAYOUT_SAFE_AREA_EDGE_TOP | ARKUI_LAYOUT_SAFE_AREA_EDGE_BOTTOM。设置异常值时，按默认值显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].u32 | 扩展安全区域的类型。 |
| .value[1].u32 | 扩展安全区域的方向。 |

#### NODE_DASH_WIDTH

```
NODE_DASH_WIDTH = 120
```
 设置边框样式为虚线时虚线的长度，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置上边框虚线的长度，单位vp。取值范围：[0, +∞)。设置异常值时，按默认的虚线效果显示。 |
| .value[1].f32 | 设置右边框虚线的长度，单位vp。取值范围：[0, +∞)。设置异常值时，按默认的虚线效果显示。 |
| .value[2].f32 | 设置下边框虚线的长度，单位vp。取值范围：[0, +∞)。设置异常值时，按默认的虚线效果显示。 |
| .value[3].f32 | 设置左边框虚线的长度，单位vp。取值范围：[0, +∞)。设置异常值时，按默认的虚线效果显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 上边框虚线的长度，单位vp。 |
| .value[1].f32 | 右边框虚线的长度，单位vp。 |
| .value[2].f32 | 下边框虚线的长度，单位vp。 |
| .value[3].f32 | 左边框虚线的长度，单位vp。 |

#### NODE_DASH_GAP

```
NODE_DASH_GAP = 121
```
 设置边框样式为虚线时虚线的间隙，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)中size为无效值。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 设置上边框虚线的间隙，单位vp。取值范围：[0, +∞)。设置异常值时，按默认的虚线效果显示。 |
| .value[1].f32 | 设置右边框虚线的间隙，单位vp。取值范围：[0, +∞)。设置异常值时，按默认的虚线效果显示。 |
| .value[2].f32 | 设置下边框虚线的间隙，单位vp。取值范围：[0, +∞)。设置异常值时，按默认的虚线效果显示。 |
| .value[3].f32 | 设置左边框虚线的间隙，单位vp。取值范围：[0, +∞)。设置异常值时，按默认的虚线效果显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 上边框虚线的间隙，单位vp。 |
| .value[1].f32 | 右边框虚线的间隙，单位vp。 |
| .value[2].f32 | 下边框虚线的间隙，单位vp。 |
| .value[3].f32 | 左边框虚线的间隙，单位vp。 |

#### NODE_LAYOUT_GRAVITY

```
NODE_LAYOUT_GRAVITY = 122
```
 设置Stack容器中子组件的对齐规则，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置Stack容器中子组件的对齐规则。参数类型为[ArkUI_LocalizedAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_localizedalignment)，默认值：ARKUI_ALIGNMENT_CENTER。设置异常值时，按默认值显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | Stack容器中子组件的对齐规则。参数类型为[ArkUI_LocalizedAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_localizedalignment)。 |

#### NODE_BORDER_RADIUS_TYPE

```
NODE_BORDER_RADIUS_TYPE = 123
```
 设置组件绘制圆角的模式，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置组件绘制圆角的模式。参数类型为[ArkUI_RenderStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_renderstrategy)，默认值：ARKUI_RENDERSTRATEGY_FAST。设置异常值时，按默认值显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 组件绘制圆角的模式。参数类型为[ArkUI_RenderStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_renderstrategy)。 |
