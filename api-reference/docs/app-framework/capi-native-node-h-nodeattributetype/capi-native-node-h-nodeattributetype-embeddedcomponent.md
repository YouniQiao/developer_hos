---
title: "ArkUI_NodeAttributeType（EmbeddedComponent组件相关属性）"
upstream_id: "harmonyos-references/capi-native-node-h-nodeattributetype-embeddedcomponent"
catalog: "harmonyos-references"
content_hash: "6beb015aec56"
synced_at: "2026-07-09T00:58:36.027419"
---

# ArkUI_NodeAttributeType（EmbeddedComponent组件相关属性）

```
enum ArkUI_NodeAttributeType
```

#### 概述

定义ArkUI在Native侧可以设置的EmbeddedComponent组件相关属性样式集合。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)

#### NODE_EMBEDDED_COMPONENT_WANT

```
NODE_EMBEDDED_COMPONENT_WANT = MAX_NODE_SCOPE_NUM * ARKUI_NODE_EMBEDDED_COMPONENT = 1016000
```
 定义用于启动EmbeddedAbility的want。支持属性设置。

作为属性设置方法参数[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | EmbeddedComponent的want参数。参数类型为[AbilityBase_Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-abilitybase-want)。默认值为nullptr。 |

#### NODE_EMBEDDED_COMPONENT_OPTION

```
NODE_EMBEDDED_COMPONENT_OPTION = 1016001
```
 EmbeddedComponent的选项。支持属性设置。

作为属性设置方法参数[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | EmbeddedComponent的选项列表，参数类型为[ArkUI_EmbeddedComponentOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-embeddedcomponentoption)。 |
