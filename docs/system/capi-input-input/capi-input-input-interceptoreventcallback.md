---
title: "Input_InterceptorEventCallback"
upstream_id: "harmonyos-references/capi-input-input-interceptoreventcallback"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:19.189448"
---

# Input_InterceptorEventCallback

```
typedef struct Input_InterceptorEventCallback {...} Input_InterceptorEventCallback
```

#### 概述

拦截回调事件结构体，用于定义输入事件拦截所需的回调函数类型，支持拦截鼠标事件、触屏输入事件、按键事件和轴事件。

起始版本： 12

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Input_KeyEventCallback](#input_keyeventcallback) keycallback | 按键事件的回调函数。 |
| [Input_MouseEventCallback](#input_mouseeventcallback) mouseCallback | 鼠标事件的回调函数。 |
| [Input_TouchEventCallback](#input_toucheventcallback) touchCallback | 触屏输入事件的回调函数。 |
| [Input_AxisEventCallback](#input_axiseventcallback) axisCallback | 轴事件的回调函数。 |

#### [h2]成员函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (*Input_KeyEventCallback)(const Input_KeyEvent* keyEvent)](#input_keyeventcallback) | Input_KeyEventCallback() | 按键事件的回调函数，keyEvent的生命周期为回调函数内。 |
| [typedef void (*Input_MouseEventCallback)(const Input_MouseEvent* mouseEvent)](#input_mouseeventcallback) | Input_MouseEventCallback() | 鼠标事件的回调函数，mouseEvent的生命周期为回调函数内。 |
| [typedef void (*Input_TouchEventCallback)(const Input_TouchEvent* touchEvent)](#input_toucheventcallback) | Input_TouchEventCallback() | 触屏输入事件的回调函数，touchEvent的生命周期为回调函数内。 |
| [typedef void (*Input_AxisEventCallback)(const Input_AxisEvent* axisEvent)](#input_axiseventcallback) | Input_AxisEventCallback() | 轴事件的回调函数，axisEvent的生命周期为回调函数内。 |

#### 成员函数说明

#### [h2]Input_KeyEventCallback()

```
typedef void (*Input_KeyEventCallback)(const Input_KeyEvent* keyEvent)
```
 描述

按键事件的回调函数，keyEvent的生命周期为回调函数内。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [Input_KeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input-input-keyevent)* keyEvent | 按键事件对象。 |

#### [h2]Input_MouseEventCallback()

```
typedef void (*Input_MouseEventCallback)(const Input_MouseEvent* mouseEvent)
```
 描述

鼠标事件的回调函数，mouseEvent的生命周期为回调函数内。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [Input_MouseEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input-input-mouseevent)* mouseEvent | 鼠标事件对象。 |

#### [h2]Input_TouchEventCallback()

```
typedef void (*Input_TouchEventCallback)(const Input_TouchEvent* touchEvent)
```
 描述

触屏输入事件的回调函数，touchEvent的生命周期为回调函数内。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [Input_TouchEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input-input-touchevent)* touchEvent | 触屏输入事件对象。 |

#### [h2]Input_AxisEventCallback()

```
typedef void (*Input_AxisEventCallback)(const Input_AxisEvent* axisEvent)
```
 描述

轴事件的回调函数，axisEvent的生命周期为回调函数内。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [Input_AxisEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input-input-axisevent)* axisEvent | 轴事件对象。 |
