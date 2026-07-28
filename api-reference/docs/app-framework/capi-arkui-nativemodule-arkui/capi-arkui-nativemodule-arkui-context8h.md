---
title: "ArkUI_Context*"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-context8h"
catalog: "harmonyos-references"
content_hash: "12d6c18bb148"
synced_at: "2026-07-28T16:49:26.991494"
---

# ArkUI_Context*

```
typedef struct ArkUI_Context* ArkUI_ContextHandle
```

#### 概述

ArkUI 在 Native 侧的上下文实例对象指针，用于表示组件所在页面的 UIContext。开发者可通过[OH_ArkUI_GetContextByNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_getcontextbynode)或[OH_ArkUI_GetContextFromNapiValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-napi-h#oh_arkui_getcontextfromnapivalue)获取该指针，并将其作为 UI 任务调度、动画、焦点控制等接口的上下文入参。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)
