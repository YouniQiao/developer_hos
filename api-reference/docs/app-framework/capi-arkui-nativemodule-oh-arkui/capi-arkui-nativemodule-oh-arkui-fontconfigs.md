---
title: "OH_ArkUI_FontConfigs"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-fontconfigs"
catalog: "harmonyos-references"
content_hash: "6d2b500f8071"
synced_at: "2026-07-28T16:49:27.561765"
---

# OH_ArkUI_FontConfigs

```
typedef struct OH_ArkUI_FontConfigs OH_ArkUI_FontConfigs
```

#### 概述

定义文本的字体配置，当前支持通过相关接口设置和获取字体粗细配置，适用于需要自定义字体粗细显示效果的场景。可以通过[OH_ArkUI_FontConfigs_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#oh_arkui_fontconfigs_create)接口创建字体配置对象，通过[OH_ArkUI_FontConfigs_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#oh_arkui_fontconfigs_destroy)接口销毁字体配置对象。配置创建后通过[OH_ArkUI_FontConfigs_SetFontWeightConfigs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#oh_arkui_fontconfigs_setfontweightconfigs)接口设置字体粗细配置，通过[OH_ArkUI_FontConfigs_GetFontWeightConfigs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#oh_arkui_fontconfigs_getfontweightconfigs)接口获取字体粗细配置。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [text.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h)
