---
title: "ArkUI_NativeGestureAPI_2"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-2"
catalog: "harmonyos-references"
content_hash: "88bafcd93900"
synced_at: "2026-07-28T16:49:29.268068"
---

# ArkUI_NativeGestureAPI_2

```
typedef struct {...} ArkUI_NativeGestureAPI_2
```

#### 概述

定义手势模块接口集合，在[ArkUI_NativeGestureAPI_1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-1)的基础上扩展提供设置手势打断事件回调函数的能力，用于在手势识别过程中根据回调结果继续或打断手势。开发者可以通过[gestureApi1](#成员变量)访问基础手势接口，配合[setGestureInterrupterToNode](#setgestureinterruptertonode)处理手势打断。

起始版本： 18

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_gesture.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [ArkUI_NativeGestureAPI_1](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-1)* gestureApi1 | 指向ArkUI_NativeGestureAPI_1结构体的指针。 |

#### [h2]成员函数

| 名称 | 描述 |
| --- | --- |
| [int32_t (*setGestureInterrupterToNode)(ArkUI_NodeHandle node, void* userData, ArkUI_GestureInterruptResult (*interrupter)(ArkUI_GestureInterruptInfo* info))](#setgestureinterruptertonode) | 设置手势打断事件的回调函数，适用于需要在手势识别过程中根据当前交互状态决定手势继续响应或打断的场景。 |

#### 成员函数说明

#### [h2]setGestureInterrupterToNode()

```
int32_t (*setGestureInterrupterToNode)(ArkUI_NodeHandle node, void* userData, ArkUI_GestureInterruptResult (*interrupter)(ArkUI_GestureInterruptInfo* info))
```
 描述：

设置手势打断事件的回调函数，适用于需要在手势识别过程中根据当前交互状态决定手势继续响应或打断的场景。

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node | 需要设置手势打断回调函数的ArkUI节点句柄。 |
| void* userData | 开发者自定义数据，供手势打断回调函数关联上下文使用；无需关联上下文时可传入nullptr，此时回调函数中无法获取自定义上下文数据。传入非空指针时，需确保数据在回调函数触发期间仍可安全访问。 |
| [ArkUI_GestureInterruptResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h#arkui_gestureinterruptresult) (*interrupter)([ArkUI_GestureInterruptInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-gestureinterruptinfo)* info) | 手势打断回调函数，info提供手势打断数据。interrupter返回GESTURE_INTERRUPT_RESULT_CONTINUE时手势正常进行；返回GESTURE_INTERRUPT_RESULT_REJECT时手势打断。设置此参数为nullptr时将取消注册回调函数。 **说明：** 该手势打断回调函数注册后，后续在单次手势处理流程中都会存在。即使在同一次手势处理流程中将回调函数重置为nullptr，或者使用[dispose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativegestureapi-1#dispose)销毁即将触发的手势，该回调函数在满足触发条件后仍会响应。如回调函数中引用的对象可能在触发前被释放，需确保该对象在回调函数触发期间仍可安全访问。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 错误码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 参数错误。 |
