---
title: "ArkUI_CustomDialogOptions"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-customdialogoptions"
catalog: "harmonyos-references"
content_hash: "52233824ec81"
synced_at: "2026-07-28T16:49:28.934767"
---

# ArkUI_CustomDialogOptions

```
typedef struct ArkUI_CustomDialogOptions ArkUI_CustomDialogOptions
```

#### 概述

定义自定义弹窗的选项对象。该对象不暴露任何成员字段，开发者通过 [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule) 中以 OH_ArkUI_CustomDialog_Set 为前缀的接口（如设置背景、圆角、阴影、模糊、位置、模态等）配置弹窗属性，再调用 OH_ArkUI_CustomDialog_OpenDialog 打开弹窗。

起始版本： 19

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_dialog.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h)
