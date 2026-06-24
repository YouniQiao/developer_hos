---
title: "Input_TouchEvent"
upstream_id: "harmonyos-references/capi-input-input-touchevent"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:19.998408"
---

# Input_TouchEvent

```
typedef struct Input_TouchEvent Input_TouchEvent
```

#### 概述

触屏输入事件对象，用于表示触屏输入的详细信息，包括触摸点位置、触摸状态、时间戳等。

起始版本： 12

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_Input_CreateTouchEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_createtouchevent) | 创建触屏输入事件对象。通过调用[OH_Input_DestroyTouchEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroytouchevent)销毁触屏输入事件对象。 |
| [OH_Input_DestroyTouchEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroytouchevent) | 销毁触屏输入事件对象。 |
