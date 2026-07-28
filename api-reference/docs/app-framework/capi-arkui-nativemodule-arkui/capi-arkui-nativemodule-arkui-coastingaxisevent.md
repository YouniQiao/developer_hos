---
title: "ArkUI_CoastingAxisEvent"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-coastingaxisevent"
catalog: "harmonyos-references"
content_hash: "287774b781fc"
synced_at: "2026-07-28T16:49:41.922157"
---

# ArkUI_CoastingAxisEvent

```
typedef struct ArkUI_CoastingAxisEvent ArkUI_CoastingAxisEvent
```

#### 概述

定义惯性滚动轴事件，支持监听触控板双指抛滑产生的衰减滑动过程，适用于在常规轴事件之后处理惯性滚动效果的场景。

当用户在触控板上双指抛滑时，系统根据手指抬起时的速度，按照系统预设的衰减曲线构造惯性滚动轴事件。开发者可以监听此类事件，以便在常规轴事件之后立即处理惯性滚动效果。

仅当满足以下条件时，开发者才能接收到此事件：用户在触控板上双指抛滑，且指针位置下存在通过[registerNodeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent)注册了[NODE_ON_COASTING_AXIS_EVENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)事件的组件。不再需要监听此事件时，应通过[unregisterNodeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#unregisternodeevent)注销事件监听，避免回调持续触发。

起始版本： 22

相关模块： [ArkUI_EventModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-eventmodule)

所在头文件： [ui_input_event.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ui-input-event-h)
