---
title: "ArkUI_NodeAttributeType（EmbeddedComponent组件相关属性）"
upstream_id: "harmonyos-references/capi-native-node-h-nodeattributetype-embeddedcomponent"
catalog: "harmonyos-references"
content_hash: "6ff292247953"
synced_at: "2026-08-29T18:15:38.976910"
---

# ArkUI_NodeAttributeType（EmbeddedComponent组件相关属性）

```
enum ArkUI_NodeAttributeType
```

#### 概述

定义ArkUI在Native侧可以设置的EmbeddedComponent组件相关属性样式集合，支持配置启动EmbeddedAbility的want参数以及控制嵌入式Ability的UI显示行为等运行选项，适用于需要在Native侧对嵌入式组件进行属性设置的场景。EmbeddedComponent适用于需要在当前应用页面内嵌入其他Ability（如系统设置、地图等）提供的UI页面的场景。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)

#### NODE_EMBEDDED_COMPONENT_WANT

```
NODE_EMBEDDED_COMPONENT_WANT = MAX_NODE_SCOPE_NUM * ARKUI_NODE_EMBEDDED_COMPONENT = 1016000
```
 定义用于启动嵌入式Ability的want参数。支持属性设置。使用场景：当应用需要在当前页面嵌入指定Ability（如嵌入系统设置页面、嵌入地图组件等）时，通过该属性指定目标Ability。

作为属性设置方法参数时，[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | EmbeddedComponent的want参数，用于指定启动EmbeddedAbility所需的目标信息。参数类型为[AbilityBase_Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-abilitybase-want)。默认值为nullptr。 |

#### NODE_EMBEDDED_COMPONENT_OPTION

```
NODE_EMBEDDED_COMPONENT_OPTION = 1016001
```
 定义EmbeddedComponent的运行选项，用于控制EmbeddedAbility的UI显示行为。支持属性设置。

作为属性设置方法参数时，[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | EmbeddedComponent的选项列表。参数类型为[ArkUI_EmbeddedComponentOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-embeddedcomponentoption)。默认值为nullptr。 |
