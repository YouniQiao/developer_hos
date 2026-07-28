---
title: "ArkUI_GestureEventTargetInfo"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-gestureeventtargetinfo"
catalog: "harmonyos-references"
content_hash: "1928d200da94"
synced_at: "2026-07-28T16:49:29.627556"
---

# ArkUI_GestureEventTargetInfo

```
typedef struct ArkUI_GestureEventTargetInfo ArkUI_GestureEventTargetInfo
```

#### 概述

定义手势事件目标信息类型，用于在手势处理过程中查询手势事件目标对象的滚动开始、滚动结束等状态，主要适用于滚动类容器组件。开发者可通过[OH_ArkUI_GetGestureEventTargetInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h#oh_arkui_getgestureeventtargetinfo)从手势识别器中获取该对象，并通过目标信息查询接口读取目标状态。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_gesture.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h)
