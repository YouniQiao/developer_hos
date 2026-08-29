---
title: "Input_InterceptorEventCallback"
upstream_id: "harmonyos-references/capi-input-input-interceptoreventcallback"
catalog: "harmonyos-references"
content_hash: "9d95b407e7a7"
synced_at: "2026-08-29T18:17:05.374438"
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
| [Input_MouseEventCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#input_mouseeventcallback) mouseCallback | 鼠标事件的回调函数。 |
| [Input_TouchEventCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#input_toucheventcallback) touchCallback | 触屏输入事件的回调函数。 |
| [Input_AxisEventCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#input_axiseventcallback) axisCallback | 轴事件的回调函数。 |
