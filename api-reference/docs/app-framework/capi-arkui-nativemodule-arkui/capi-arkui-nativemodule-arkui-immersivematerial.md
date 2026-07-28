---
title: "ArkUI_ImmersiveMaterial"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-immersivematerial"
catalog: "harmonyos-references"
content_hash: "c836a7d68183"
synced_at: "2026-07-28T16:49:40.786398"
---

# ArkUI_ImmersiveMaterial

```
typedef struct ArkUI_ImmersiveMaterial ArkUI_ImmersiveMaterial
```

#### 概述

定义Native侧的沉浸式材质对象，根据设备算力等级提供适配的视觉效果。

沉浸式材质的等级根据设备算力等级而不同。

材质等级由[ArkUI_MaterialLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h#arkui_materiallevel)定义，可通过[OH_ArkUI_NativeModule_GetGlobalMaterialLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h#oh_arkui_nativemodule_getglobalmateriallevel)获取。

在高算力和中算力设备上，会影响沉浸式材质渲染层的滤镜效果和阴影（[NODE_SHADOW](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-animator#node_shadow)或[NODE_CUSTOM_SHADOW](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-animator#node_custom_shadow)）效果。在低算力设备上，会影响背景颜色[NODE_BACKGROUND_COLOR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-common#node_background_color)、边框颜色[NODE_BORDER_COLOR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-layoutattributes#node_border_color)、边框宽度[NODE_BORDER_WIDTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-layoutattributes#node_border_width)和阴影（[NODE_SHADOW](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-animator#node_shadow)或[NODE_CUSTOM_SHADOW](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-animator#node_custom_shadow)）效果。

起始版本： 26.0.0

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_material.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h)
