---
title: "ArkUI_NodeComponentEvent"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-nodecomponentevent"
catalog: "harmonyos-references"
content_hash: "4788a98ee5f9"
synced_at: "2026-08-29T18:15:46.848936"
---

# ArkUI_NodeComponentEvent

```
typedef struct {...} ArkUI_NodeComponentEvent
```

#### 概述

定义组件回调事件的参数类型，用于在组件回调触发时传递事件相关数据，便于应用获取回调事件参数。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [ArkUI_NumberValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-numbervalue) data[[MAX_COMPONENT_EVENT_ARG_NUM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#宏定义)] | 用于存储组件回调事件的参数数据，数组元素按照回调事件定义的参数顺序排列；各事件类型的参数定义详见[native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)相关说明。 |
