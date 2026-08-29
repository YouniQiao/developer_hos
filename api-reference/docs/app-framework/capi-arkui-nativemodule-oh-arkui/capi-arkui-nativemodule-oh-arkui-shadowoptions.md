---
title: "OH_ArkUI_ShadowOptions"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-shadowoptions"
catalog: "harmonyos-references"
content_hash: "6ece9eb27dbe"
synced_at: "2026-08-29T18:15:54.632467"
---

# OH_ArkUI_ShadowOptions

```
typedef struct OH_ArkUI_ShadowOptions OH_ArkUI_ShadowOptions
```

#### 概述

定义阴影选项，用于设置组件的阴影效果，包括阴影颜色、偏移量、模糊半径、阴影类型、是否填充等属性。

调用[OH_ArkUI_ShadowOptions_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h#oh_arkui_shadowoptions_create)接口创建对应的阴影选项对象。

调用[OH_ArkUI_ShadowOptions_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h#oh_arkui_shadowoptions_destroy)接口销毁阴影选项对象。

对象创建后，调用OH_ArkUI_ShadowOptions_SetXXX系列接口设置生效的具体样式。例如调用[OH_ArkUI_ShadowOptions_SetRadius](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h#oh_arkui_shadowoptions_setradius)设置阴影模糊半径。若创建对象失败（返回空指针），调用SetXXX系列接口将不会生效。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type_visual.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h)
