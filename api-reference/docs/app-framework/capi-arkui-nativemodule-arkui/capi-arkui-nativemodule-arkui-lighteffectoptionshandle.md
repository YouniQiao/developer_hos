---
title: "ArkUI_LightEffectOptions*"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-lighteffectoptionshandle"
catalog: "harmonyos-references"
content_hash: "91646eb03b66"
synced_at: "2026-07-28T16:49:40.881646"
---

# ArkUI_LightEffectOptions*

```
typedef ArkUI_LightEffectOptions* ArkUI_LightEffectOptionsHandle
```

#### 概述

定义指向光感交互效果配置对象的指针，开发者通过该指针可配置和管理光感交互效果的各项参数。

必须通过[OH_ArkUI_NativeModule_LightEffectOptions_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h#oh_arkui_nativemodule_lighteffectoptions_create)创建光感交互效果配置对象，使用完毕后必须调用[OH_ArkUI_NativeModule_LightEffectOptions_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h#oh_arkui_nativemodule_lighteffectoptions_destroy)接口销毁配置对象以释放资源，两者必须配对使用。未调用Destroy销毁对象会导致资源泄漏。

起始版本： 26.0.0

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_material.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h)
