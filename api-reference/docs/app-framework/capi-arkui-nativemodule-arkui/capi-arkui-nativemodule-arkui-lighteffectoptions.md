---
title: "ArkUI_LightEffectOptions"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-lighteffectoptions"
catalog: "harmonyos-references"
content_hash: "14fbcfa22b29"
synced_at: "2026-08-29T18:15:52.686920"
---

# ArkUI_LightEffectOptions

```
typedef struct ArkUI_LightEffectOptions ArkUI_LightEffectOptions
```

#### 概述

定义沉浸式材质的光感交互效果配置对象，用于配置沉浸式材质在用户交互时产生的光感响应效果。详细设计逻辑请参见[native_material.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h)。沉浸式材质是一种具有深度感和层次感的视觉材质风格，光感交互效果指用户与组件交互时产生的光影视觉反馈。创建后需通过[OH_ArkUI_NativeModule_ImmersiveMaterial_SetLightEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h#oh_arkui_nativemodule_immersivematerial_setlighteffect)将配置对象设置到沉浸式材质对象上才能生效。

未指定光感交互颜色时，默认光感交互颜色为白色（0xffffffff）。

起始版本： 26.0.0

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_material.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h)
