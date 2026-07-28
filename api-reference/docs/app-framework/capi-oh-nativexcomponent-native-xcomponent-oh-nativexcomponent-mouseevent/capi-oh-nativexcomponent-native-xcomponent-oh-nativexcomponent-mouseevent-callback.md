---
title: "OH_NativeXComponent_MouseEvent_Callback"
upstream_id: "harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent-mouseevent-callback"
catalog: "harmonyos-references"
content_hash: "66f26dd3b8b8"
synced_at: "2026-07-28T16:49:31.401648"
---

# OH_NativeXComponent_MouseEvent_Callback

```
typedef struct OH_NativeXComponent_MouseEvent_Callback {...} OH_NativeXComponent_MouseEvent_Callback
```

#### 概述

提供了鼠标事件和悬停事件的回调注册能力，开发者可通过该回调结构体监听NativeXComponent上的鼠标交互行为，适用于需要在Native侧处理鼠标输入交互的场景。其中，DispatchMouseEvent侧重鼠标按键按下、释放、移动等组件内的操作行为，DispatchHoverEvent侧重鼠标或手写笔进入/离开组件的悬停状态变化，两者监听维度不同，可按需同时注册。

起始版本： 9

相关模块： [OH_NativeXComponent Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)

所在头文件： [native_interface_xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h)

#### 汇总

#### [h2]成员函数

| 名称 | 描述 |
| --- | --- |
| [void (*DispatchMouseEvent)(OH_NativeXComponent* component, void* window)](#dispatchmouseevent) | 当鼠标事件被触发时调用。 |
| [void (*DispatchHoverEvent)(OH_NativeXComponent* component, bool isHover)](#dispatchhoverevent) | 当悬停事件被触发时调用。 |

#### 成员函数说明

#### [h2]DispatchMouseEvent()

```
void (*DispatchMouseEvent)(OH_NativeXComponent* component, void* window)
```
 描述：

当鼠标事件（例如鼠标按键按下、释放、移动等操作）被触发时调用。

起始版本： 9

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_NativeXComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent)* component | 表示指向[OH_NativeXComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。 |
| void* window | 表示NativeWindow句柄。 |

#### [h2]DispatchHoverEvent()

```
void (*DispatchHoverEvent)(OH_NativeXComponent* component, bool isHover)
```
 描述：

当悬停事件被触发时调用。该函数在鼠标或手写笔进入或离开组件时触发。

起始版本： 9

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_NativeXComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent)* component | 表示指向[OH_NativeXComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent)实例的指针。 |
| bool isHover | 表示鼠标或手写笔是否悬停在组件上，进入时为true，离开时为false。 |
