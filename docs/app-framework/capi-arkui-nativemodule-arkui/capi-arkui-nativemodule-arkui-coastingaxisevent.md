---
title: "ArkUI_CoastingAxisEvent"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-coastingaxisevent"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:58.415201"
---

# ArkUI_CoastingAxisEvent

```
typedef struct ArkUI_CoastingAxisEvent ArkUI_CoastingAxisEvent
```

#### 概述

定义惯性滚动轴事件。

当用户在触控板上用双指滑动时，系统会根据手指抬起时的速度，按照一定的衰减曲线构造滑动事件。可以监听此类事件，以便在常规轴事件之后立即处理抛滑效果。

仅当用户在触控板上双指抛滑，且指针位置下存在通过[registerNodeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent)注册了[NODE_ON_COASTING_AXIS_EVENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)事件的组件时，才能接收到此事件。

起始版本： 22

相关模块： [ArkUI_EventModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-eventmodule)

所在头文件： [ui_input_event.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ui-input-event-h)
