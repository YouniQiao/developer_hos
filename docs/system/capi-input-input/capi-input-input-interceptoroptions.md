---
title: "Input_InterceptorOptions"
upstream_id: "harmonyos-references/capi-input-input-interceptoroptions"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:20.357547"
---

# Input_InterceptorOptions

```
typedef struct Input_InterceptorOptions Input_InterceptorOptions
```

#### 概述

事件拦截选项，用于配置输入事件拦截的参数和规则，支持按键事件、鼠标事件、触屏事件和轴事件的拦截控制。

起始版本： 12

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_Input_AddKeyEventInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_addkeyeventinterceptor) | 添加按键事件的拦截，重复添加只有第一次生效。仅在应用获焦时拦截按键事件。 |
| [OH_Input_RemoveKeyEventInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_removekeyeventinterceptor) | 移除按键事件拦截。 |
| [OH_Input_AddInputEventInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_addinputeventinterceptor) | 添加输入事件拦截，包括鼠标、触屏和轴事件，重复添加只有第一次生效。仅命中应用窗口时拦截输入事件。 |
| [OH_Input_RemoveInputEventInterceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_removeinputeventinterceptor) | 移除输入事件拦截，包括鼠标、触屏和轴事件。 |
