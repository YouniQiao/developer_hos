---
title: "ArkUI_NodeAttributeType（布局类组件相关属性）"
upstream_id: "harmonyos-references/capi-native-node-h-nodeattributetype-layoutcomponent"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:37.391804"
---

# ArkUI_NodeAttributeType（布局类组件相关属性）

```
enum ArkUI_NodeAttributeType
```

#### 概述

定义ArkUI在Native侧可以设置的布局类组件相关属性集合。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)

#### NODE_STACK_ALIGN_CONTENT

```
NODE_STACK_ALIGN_CONTENT = MAX_NODE_SCOPE_NUM * ARKUI_NODE_STACK = 1000000
```
 设置子组件在容器内的对齐方式，支持属性设置，属性重置和属性获取接口。该属性与通用属性NODE_ALIGNMENT同时设置时，后设置的属性生效。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 对齐方式，数据类型[ArkUI_Alignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_alignment)，默认值ARKUI_ALIGNMENT_CENTER。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 对齐方式，数据类型[ArkUI_Alignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_alignment)。 |

#### NODE_COLUMN_ALIGN_ITEMS

```
NODE_COLUMN_ALIGN_ITEMS = MAX_NODE_SCOPE_NUM * ARKUI_NODE_COLUMN = 1006000
```
 设置Column子组件在水平方向上的对齐格式，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 子组件在水平方向上的对齐格式，数据类型[ArkUI_HorizontalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_horizontalalignment)，默认值ARKUI_HORIZONTAL_ALIGNMENT_CENTER。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 子组件在水平方向上的对齐格式，数据类型[ArkUI_HorizontalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_horizontalalignment)。 |

#### NODE_COLUMN_JUSTIFY_CONTENT

```
NODE_COLUMN_JUSTIFY_CONTENT = 1006001
```
 设置Column子组件在垂直方向上的对齐格式，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 子组件在垂直方向上的对齐格式，数据类型[ArkUI_FlexAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_flexalignment)，默认值ARKUI_FLEX_ALIGNMENT_START。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 子组件在垂直方向上的对齐格式，数据类型[ArkUI_FlexAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_flexalignment)。 |

#### NODE_LINEAR_LAYOUT_SPACE

```
NODE_LINEAR_LAYOUT_SPACE = 1006002
```
 设置Column或Row子组件的间距，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 子组件之间的间距，单位vp，默认值：0。 取值范围：[0, +∞)。 设置异常值时，按默认值显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 子组件之间的间距，单位vp。 |

#### NODE_LINEAR_LAYOUT_REVERSE

```
NODE_LINEAR_LAYOUT_REVERSE = 1006003
```
 设置Column或Row中沿主轴方向的子组件排列是否反向，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 主轴方向的子组件排列是否反向，默认值：false。值为true时，子组件在主轴方向上反转排列。值为false时，子组件在主轴方向上正序排列。 设置异常值时，按默认值显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 主轴方向的子组件排列是否反向。 |

#### NODE_ROW_ALIGN_ITEMS

```
NODE_ROW_ALIGN_ITEMS = MAX_NODE_SCOPE_NUM * ARKUI_NODE_ROW = 1007000
```
 设置Row子组件在垂直方向上的对齐格式，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 子组件在垂直方向上的对齐格式，数据类型[ArkUI_VerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_verticalalignment)，默认值ARKUI_VERTICAL_ALIGNMENT_CENTER。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 子组件在垂直方向上的对齐格式，数据类型[ArkUI_VerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_verticalalignment)。 |

#### NODE_ROW_JUSTIFY_CONTENT

```
NODE_ROW_JUSTIFY_CONTENT = 1007001
```
 设置Row子组件在水平方向上的对齐格式，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 子组件在水平方向上的对齐格式，数据类型[ArkUI_FlexAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_flexalignment)，默认值ARKUI_FLEX_ALIGNMENT_START。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 子组件在水平方向上的对齐格式，数据类型[ArkUI_FlexAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_flexalignment)。 |

#### NODE_FLEX_OPTION

```
NODE_FLEX_OPTION = MAX_NODE_SCOPE_NUM * ARKUI_NODE_FLEX = 1008000
```
 设置Flex属性，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0]?.i32 | 子组件在Flex容器上排列的方向[ArkUI_FlexDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_flexdirection)，默认值为ARKUI_FLEX_DIRECTION_ROW。 |
| .value[1]?.i32 | 排列规则[ArkUI_FlexWrap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_flexwrap)，默认值为ARKUI_FLEX_WRAP_NO_WRAP。 |
| .value[2]?.i32 | 主轴上的对齐格式[ArkUI_FlexAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_flexalignment)，默认值为ARKUI_FLEX_ALIGNMENT_START。 |
| .value[3]?.i32 | 交叉轴上的对齐格式[ArkUI_ItemAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_itemalignment)，默认值为ARKUI_ITEM_ALIGNMENT_START。 |
| .value[4]?.i32 | 交叉轴中有额外的空间时，多行内容的对齐方式[ArkUI_FlexAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_flexalignment)，默认值为ARKUI_FLEX_ALIGNMENT_START。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 子组件在Flex容器上排列的方向的枚举值。 |
| .value[1].i32 | 排列规则的枚举值。 |
| .value[2].i32 | 主轴上的对齐格式的枚举值。 |
| .value[3].i32 | 交叉轴上的对齐格式的枚举值。 |
| .value[4].i32 | 交叉轴中有额外的空间时，多行内容的对齐方式的枚举值。 |

#### NODE_FLEX_SPACE

```
NODE_FLEX_SPACE = 1008001
```
 设置Flex容器内子组件的间距，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | Flex容器主轴方向的间距，单位vp，默认值：0。 取值范围：[0, +∞)。 设置异常值时，按默认值显示。 |
| .value[1].f32 | Flex容器交叉轴方向的间距，单位vp，默认值：0。 取值范围：[0, +∞)。 设置异常值时，按默认值显示。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | Flex容器主轴方向的间距，单位vp。 |
| .value[1].f32 | Flex容器交叉轴方向的间距，单位vp。 |

#### NODE_RELATIVE_CONTAINER_GUIDE_LINE

```
NODE_RELATIVE_CONTAINER_GUIDE_LINE = MAX_NODE_SCOPE_NUM * ARKUI_NODE_RELATIVE_CONTAINER = 1012000
```
 设置RelativeContainer容器内的辅助线，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | RelativeContainer容器内的辅助线，参数类型为[ArkUI_GuidelineOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-guidelineoption)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .object | RelativeContainer容器内的辅助线，参数类型为[ArkUI_GuidelineOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-guidelineoption)。 |

#### NODE_RELATIVE_CONTAINER_BARRIER

```
NODE_RELATIVE_CONTAINER_BARRIER = 1012001
```
 设置RelativeContainer容器内的屏障，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | RelativeContainer容器内的屏障，参数类型为[ArkUI_BarrierOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-barrieroption)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .object | RelativeContainer容器内的屏障，参数类型为[ArkUI_BarrierOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-barrieroption)。 |
