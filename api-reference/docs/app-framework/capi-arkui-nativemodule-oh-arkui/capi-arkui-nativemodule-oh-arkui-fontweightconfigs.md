---
title: "OH_ArkUI_FontWeightConfigs"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-fontweightconfigs"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:44.567490"
---

# OH_ArkUI_FontWeightConfigs

```
typedef struct OH_ArkUI_FontWeightConfigs OH_ArkUI_FontWeightConfigs
```

#### 概述

定义文本的字体粗细配置。可以通过[OH_ArkUI_FontWeightConfigs_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_fontweightconfigs_create) 接口创建对应的文本字体粗细配置对象。可以通过[OH_ArkUI_FontWeightConfigs_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_fontweightconfigs_destroy) 接口销毁文本字体粗细配置对象。配置创建后通过[OH_ArkUI_FontWeightConfigs_SetEnableVariableFontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_fontweightconfigs_setenablevariablefontweight) 接口设置是否启用可变字重调节。配置创建后通过[OH_ArkUI_FontWeightConfigs_GetEnableVariableFontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_fontweightconfigs_getenablevariablefontweight) 接口查看是否启用了可变字重调节。配置创建后通过[OH_ArkUI_FontWeightConfigs_SetEnableDeviceFontWeightCategory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_fontweightconfigs_setenabledevicefontweightcategory) 接口设置文本字体粗细是否跟随设备的字体粗细级别更新。配置创建后通过[OH_ArkUI_FontWeightConfigs_GetEnableDeviceFontWeightCategory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_fontweightconfigs_getenabledevicefontweightcategory) 接口查看文本字体粗细是否跟随设备的字体粗细级别更新。当该配置对象被使用且不为空指针时，若用户未通过接口显式设置，各项配置将使用默认值。当该配置为空指针时，不应用默认值，文本字体粗细行为与父组件保持一致。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)
