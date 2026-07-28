---
title: "ArkUI_SnapshotOptions"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-snapshotoptions"
catalog: "harmonyos-references"
content_hash: "82fffda7b428"
synced_at: "2026-07-28T16:49:37.038184"
---

# ArkUI_SnapshotOptions

```
typedef struct ArkUI_SnapshotOptions ArkUI_SnapshotOptions
```

#### 概述

定义截图的配置选项结构体，用于在执行组件截图时配置截图行为，适用于需要按业务需求控制截图输出效果的场景。

使用本结构体时，应先调用[OH_ArkUI_CreateSnapshotOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-common-attributes-h#oh_arkui_createsnapshotoptions)创建截图选项对象，并通过[OH_ArkUI_SnapshotOptions_SetScale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-common-attributes-h#oh_arkui_snapshotoptions_setscale)、[OH_ArkUI_SnapshotOptions_SetColorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-common-attributes-h#oh_arkui_snapshotoptions_setcolormode)和[OH_ArkUI_SnapshotOptions_SetDynamicRangeMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-common-attributes-h#oh_arkui_snapshotoptions_setdynamicrangemode)配置截图参数；再将该对象作为snapshotOptions参数传入[OH_ArkUI_GetNodeSnapshot](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_getnodesnapshot)；不再使用时，必须调用[OH_ArkUI_DestroySnapshotOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-common-attributes-h#oh_arkui_destroysnapshotoptions)释放资源。

起始版本： 15

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [common_attributes.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-common-attributes-h)
