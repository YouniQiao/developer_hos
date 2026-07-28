---
title: "ArkUI_DragAction"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-dragaction"
catalog: "harmonyos-references"
content_hash: "8e5e57c1e706"
synced_at: "2026-07-28T16:49:27.229990"
---

# ArkUI_DragAction

```
typedef struct ArkUI_DragAction ArkUI_DragAction
```

#### 概述

拖拽行为句柄，用于主动发起拖拽操作，即由开发者主动调用接口启动拖拽，区别于被动响应拖拽事件。该句柄支持创建、配置、执行和销毁拖拽行为，可设置拖拽数据并主动启动拖拽。

ArkUI_DragAction的使用流程如下：

1. 通过[OH_ArkUI_CreateDragActionWithNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h#oh_arkui_createdragactionwithnode)或[OH_ArkUI_CreateDragActionWithContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h#oh_arkui_createdragactionwithcontext)创建对象。
2. 调用OH_ArkUI_DragAction_SetData等接口配置拖拽参数。
3. 调用[OH_ArkUI_StartDrag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h#oh_arkui_startdrag)发起拖拽。
4. 不再使用时，调用[OH_ArkUI_DragAction_Dispose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h#oh_arkui_dragaction_dispose)销毁对象并释放资源。

关于创建、配置和执行机制的详细说明，请参见[绑定拖拽事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-drag-event)。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [drag_and_drop.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h)
