---
title: "ArkUI_ParallelGestureEvent"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-parallelgestureevent"
catalog: "harmonyos-references"
content_hash: "db58ca30128c"
synced_at: "2026-07-28T16:49:48.524787"
---

# ArkUI_ParallelGestureEvent

```
typedef struct ArkUI_ParallelGestureEvent ArkUI_ParallelGestureEvent
```

#### 概述

定义并行手势事件。该结构体作为[setGestureParallelTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-3#setgestureparallelto)回调函数的参数传递，包含当前手势识别器、响应链中的冲突手势识别器和用户自定义数据，供回调选择需要与当前手势并行识别的对象。

起始版本： 26.0.0

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_gesture.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h)
