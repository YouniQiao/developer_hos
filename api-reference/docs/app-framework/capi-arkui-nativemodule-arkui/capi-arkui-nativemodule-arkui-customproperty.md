---
title: "ArkUI_CustomProperty"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-customproperty"
catalog: "harmonyos-references"
content_hash: "fa5cc89cd4e6"
synced_at: "2026-07-28T16:49:35.632279"
---

# ArkUI_CustomProperty

```
typedef struct ArkUI_CustomProperty ArkUI_CustomProperty
```

#### 概述

定义表示组件自定义属性的 ArkUI_CustomProperty 结构体。通过相关接口，可以为 ArkUI 组件添加、移除和获取自定义属性，以及获取自定义属性的字符串值。

起始版本： 14

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_ArkUI_NodeUtils_AddCustomProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeutils_addcustomproperty) | 添加组件的自定义属性。 |
| [OH_ArkUI_NodeUtils_RemoveCustomProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeutils_removecustomproperty) | 移除组件已设置的自定义属性。 |
| [OH_ArkUI_NodeUtils_GetCustomProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeutils_getcustomproperty) | 获取组件的自定义属性，并通过handle返回ArkUI_CustomProperty实例。 |
| [OH_ArkUI_CustomProperty_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_customproperty_destroy) | 销毁 ArkUI_CustomProperty 实例。 |
| [OH_ArkUI_CustomProperty_GetStringValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_customproperty_getstringvalue) | 获取自定义属性的字符串值。 |
