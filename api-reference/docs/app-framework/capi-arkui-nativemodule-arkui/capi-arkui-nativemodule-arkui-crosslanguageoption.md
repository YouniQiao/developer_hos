---
title: "ArkUI_CrossLanguageOption"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-crosslanguageoption"
catalog: "harmonyos-references"
content_hash: "ce826a4aa540"
synced_at: "2026-07-28T16:49:35.981200"
---

# ArkUI_CrossLanguageOption

```
typedef struct ArkUI_CrossLanguageOption ArkUI_CrossLanguageOption
```

#### 概述

定义跨语言配置项，用于配置目标节点的跨语言访问能力，例如是否允许跨语言修改属性；从API version 26.0.0开始，还可配置节点树跨语言操作状态。

起始版本： 15

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_ArkUI_NodeUtils_SetCrossLanguageOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeutils_setcrosslanguageoption) | 设置目标节点的跨语言配置项。 |
| [OH_ArkUI_NodeUtils_GetCrossLanguageOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeutils_getcrosslanguageoption) | 获取目标节点的跨语言配置项。 |
| [OH_ArkUI_CrossLanguageOption_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_crosslanguageoption_create) | 创建跨语言配置项实例。使用完毕后，需调用[OH_ArkUI_CrossLanguageOption_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_crosslanguageoption_destroy)销毁实例。 |
| [OH_ArkUI_CrossLanguageOption_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_crosslanguageoption_destroy) | 销毁跨语言配置项实例。 |
| [OH_ArkUI_CrossLanguageOption_SetAttributeSettingStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_crosslanguageoption_setattributesettingstatus) | 设置配置项中是否允许跨语言修改属性。 |
| [OH_ArkUI_CrossLanguageOption_GetAttributeSettingStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_crosslanguageoption_getattributesettingstatus) | 获取配置项中是否允许跨语言修改属性。 |
| [OH_ArkUI_CrossLanguageOption_SetTreeOperatingStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_crosslanguageoption_settreeoperatingstatus) | 设置跨语言配置项的节点树操作状态。 |
| [OH_ArkUI_CrossLanguageOption_GetTreeOperatingStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_crosslanguageoption_gettreeoperatingstatus) | 获取跨语言配置项的节点树操作状态。 |
