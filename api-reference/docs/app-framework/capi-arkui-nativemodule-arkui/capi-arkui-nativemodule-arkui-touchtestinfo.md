---
title: "ArkUI_TouchTestInfo"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-touchtestinfo"
catalog: "harmonyos-references"
content_hash: "8411bdd9fb89"
synced_at: "2026-07-09T00:58:47.411071"
---

# ArkUI_TouchTestInfo

```
typedef struct ArkUI_TouchTestInfo ArkUI_TouchTestInfo
```

#### 概述

定义触摸测试信息。

当用户通过[registerNodeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent)注册了[NODE_ON_CHILD_TOUCH_TEST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodeeventtype)事件时，才能接收到此事件。触摸测试信息包含触摸测试策略、命中测试过程中需要作用的子组件ID和触摸测试信息项的列表。

起始版本： 22

相关模块： [ArkUI_EventModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-eventmodule)

所在头文件： [ui_input_event.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ui-input-event-h)
