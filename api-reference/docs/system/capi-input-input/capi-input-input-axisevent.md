---
title: "Input_AxisEvent"
upstream_id: "harmonyos-references/capi-input-input-axisevent"
catalog: "harmonyos-references"
content_hash: "76d604392a37"
synced_at: "2026-07-09T00:59:50.136530"
---

# Input_AxisEvent

```
typedef struct Input_AxisEvent Input_AxisEvent
```

#### 概述

轴事件对象。用于表示输入设备的轴事件数据，如游戏手柄的摇杆移动、鼠标滚轮滚动等场景。开发者可以通过轴事件获取输入设备的轴值变化，实现精细的输入控制，提升用户交互体验。

起始版本： 12

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_Input_CreateAxisEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_createaxisevent) | 创建轴事件对象。通过调用[OH_Input_DestroyAxisEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroyaxisevent)销毁轴事件对象。 |
| [OH_Input_DestroyAxisEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroyaxisevent) | 销毁轴事件对象。 |
