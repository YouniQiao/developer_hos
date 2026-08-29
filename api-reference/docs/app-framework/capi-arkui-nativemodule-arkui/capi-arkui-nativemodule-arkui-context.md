---
title: "ArkUI_Context"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-context"
catalog: "harmonyos-references"
content_hash: "b40cf430ce4f"
synced_at: "2026-08-29T18:15:42.787620"
---

# ArkUI_Context

```
typedef struct ArkUI_Context ArkUI_Context
```

#### 概述

ArkUI native UI 的上下文实例对象，用于表示组件所在页面的 UIContext。其指针类型为 [ArkUI_ContextHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-context8h)，开发者可通过 [OH_ArkUI_GetContextByNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_getcontextbynode) 获取对应上下文，并将其作为拖拽操作、动画、UI 任务调度等接口的上下文入参。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)
