---
title: "ArkUI_NativeGestureAPI_3"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-3"
catalog: "harmonyos-references"
content_hash: "c525e22d92d7"
synced_at: "2026-08-29T18:15:54.739821"
---

# ArkUI_NativeGestureAPI_3

```
typedef struct {...} ArkUI_NativeGestureAPI_3
```

#### 概述

定义手势模块接口集合。包含[ArkUI_NativeGestureAPI_1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-1)、[ArkUI_NativeGestureAPI_2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-2)结构体中的手势接口及新增手势接口，支持为ArkUI节点设置并行手势事件回调，适用于需要进行并行手势识别处理的交互场景。

起始版本： 26.0.0

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_gesture.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [ArkUI_NativeGestureAPI_2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-2)* gestureApi2 | 指向ArkUI_NativeGestureAPI_2结构体的指针。 |

#### [h2]成员函数

| 名称 | 描述 |
| --- | --- |
| [ArkUI_ErrorCode (*setGestureParallelTo)(ArkUI_NodeHandle node, void* userData, ArkUI_GestureRecognizer* (*parallelGesture)(ArkUI_ParallelGestureEvent* event))](#setgestureparallelto) | 设置并行手势事件的回调函数。 |

#### 成员函数说明

#### [h2]setGestureParallelTo()

```
ArkUI_ErrorCode (*setGestureParallelTo)(ArkUI_NodeHandle node, void* userData, ArkUI_GestureRecognizer* (*parallelGesture)(ArkUI_ParallelGestureEvent* event))
```
 描述：

设置并行手势事件的回调函数。此接口适用于开发者自定义手势与响应链上其他组件手势需要并行处理的场景。

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node | 需要设置并行手势事件回调的ArkUI节点指针。 |
| void* userData | 用户自定义数据，在并行手势事件回调中传递调用方自定义上下文信息。不需要关联自定义上下文时可传入nullptr。传入非空指针时，调用者需要确保数据的生命周期安全，若数据在回调过程中被释放可能导致回调执行异常。 |
| ArkUI_GestureRecognizer* (*parallelGesture)(ArkUI_ParallelGestureEvent* event) | 并行手势事件的回调函数。event为并行手势事件对象，包含触发该回调时的手势事件信息；parallelGesture返回需要并行识别的手势识别器指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)表示成功。 返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)表示参数错误。 |
