---
title: "ArkUI_ParallelInnerGestureEvent"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-parallelinnergestureevent"
catalog: "harmonyos-references"
content_hash: "3203b3c9471c"
synced_at: "2026-08-29T18:15:44.912995"
---

# ArkUI_ParallelInnerGestureEvent

```
typedef struct ArkUI_ParallelInnerGestureEvent ArkUI_ParallelInnerGestureEvent
```

#### 概述

定义并行内部手势事件。该结构体作为[setInnerGestureParallelTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-1#setinnergestureparallelto)的回调函数的参数传递，用于将系统内置手势（如Scroll、List等容器组件的内置滑动手势）与响应链上其他组件设置为并行关系的场景。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_gesture.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h)
