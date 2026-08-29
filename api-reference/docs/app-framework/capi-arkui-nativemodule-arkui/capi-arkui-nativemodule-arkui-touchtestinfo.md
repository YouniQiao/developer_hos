---
title: "ArkUI_TouchTestInfo"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-touchtestinfo"
catalog: "harmonyos-references"
content_hash: "956f2bcbbe6d"
synced_at: "2026-08-29T18:15:53.733693"
---

# ArkUI_TouchTestInfo

```
typedef struct ArkUI_TouchTestInfo ArkUI_TouchTestInfo
```

#### 概述

定义触摸测试信息，用于在命中测试过程中获取触摸测试策略、参与命中测试的子组件ID及触摸测试信息项列表，适用于需要在子组件触摸事件中获取命中测试详细信息以自定义命中测试逻辑、优化触摸事件分发与响应的场景。

当用户通过[registerNodeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent)注册了[NODE_ON_CHILD_TOUCH_TEST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)事件时，才能接收到此事件。触摸测试信息包含触摸测试策略、命中测试过程中需要参与命中测试的子组件ID和触摸测试信息项的列表。

起始版本： 22

相关模块： [ArkUI_EventModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-eventmodule)

所在头文件： [ui_input_event.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ui-input-event-h)
