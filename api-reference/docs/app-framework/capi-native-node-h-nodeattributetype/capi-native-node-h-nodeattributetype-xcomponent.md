---
title: "ArkUI_NodeAttributeType（XComponent组件相关属性）"
upstream_id: "harmonyos-references/capi-native-node-h-nodeattributetype-xcomponent"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:39.446331"
---

# ArkUI_NodeAttributeType（XComponent组件相关属性）

```
enum ArkUI_NodeAttributeType
```

#### 概述

定义ArkUI在Native侧可以设置的XComponent组件相关属性集合。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)

#### NODE_XCOMPONENT_ID

```
NODE_XCOMPONENT_ID = MAX_NODE_SCOPE_NUM * ARKUI_NODE_XCOMPONENT = 12000
```
 XComponent组件ID属性，支持属性设置和属性获取接口。

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

#### NODE_XCOMPONENT_TYPE

```
NODE_XCOMPONENT_TYPE = 12001
```
 XComponent组件的类型，仅支持属性获取接口。

XComponent组件的类型需要在组件创建时通过[ArkUI_NodeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodetype)中的ARKUI_NODE_XCOMPONENT或者ARKUI_NODE_XCOMPONENT_TEXTURE明确，不允许后续修改。

使用[setAttribute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#setattribute)接口尝试修改XComponent组件的类型时会发生绘制内容异常。

作为属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | XComponent组件的类型，参数类型为[ArkUI_XComponentType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_xcomponenttype)。 |

#### NODE_XCOMPONENT_SURFACE_SIZE

```
NODE_XCOMPONENT_SURFACE_SIZE = 12002
```
 XComponent组件的宽高，仅支持属性获取接口。

使用[setAttribute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#setattribute)接口尝试修改XComponent组件的宽高时设置不会生效。

作为属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].u32 | 宽数值，单位为px。 |
| .value[1].u32 | 高数值，单位为px。 |

#### NODE_XCOMPONENT_SURFACE_RECT

```
NODE_XCOMPONENT_SURFACE_RECT = 12003
```
 设置XComponent组件持有Surface的显示区域，支持属性设置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | Surface显示区域相对于XComponent组件左上角的x轴坐标，单位为px。 |
| .value[1].i32 | Surface显示区域相对于XComponent组件左上角的y轴坐标，单位为px。 |
| .value[2].i32 | Surface显示区域的宽度，单位为px。 |
| .value[3].i32 | Surface显示区域的高度，单位为px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | Surface显示区域相对于XComponent组件左上角的x轴坐标，单位为px。 |
| .value[1].i32 | Surface显示区域相对于XComponent组件左上角的y轴坐标，单位为px。 |
| .value[2].i32 | Surface显示区域的宽度，单位为px。 |
| .value[3].i32 | Surface显示区域的高度，单位为px。 |

#### NODE_XCOMPONENT_ENABLE_ANALYZER

```
NODE_XCOMPONENT_ENABLE_ANALYZER = 12004
```
 设置XComponent组件是否支持图像分析，支持属性设置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 是否支持图像分析，1表示支持图像分析，0表示不支持图像分析，默认值：0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 是否支持图像分析，1表示支持图像分析，0表示不支持图像分析，默认值：0。 |
