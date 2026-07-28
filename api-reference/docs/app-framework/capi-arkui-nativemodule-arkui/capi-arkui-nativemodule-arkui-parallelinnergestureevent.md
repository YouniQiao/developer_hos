---
title: "ArkUI_ParallelInnerGestureEvent"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-parallelinnergestureevent"
catalog: "harmonyos-references"
content_hash: "ac159c5fcd03"
synced_at: "2026-07-28T16:49:29.783572"
---

# ArkUI_ParallelInnerGestureEvent

```
typedef struct ArkUI_ParallelInnerGestureEvent ArkUI_ParallelInnerGestureEvent
```

#### 概述

定义并行内部手势事件。该结构体作为[setInnerGestureParallelTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-1#setinnergestureparallelto)回调函数的参数传递，包含当前内置手势识别器、响应链中的冲突手势识别器和用户自定义数据，供回调选择需要与当前内置手势并行识别的对象。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_gesture.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h)
