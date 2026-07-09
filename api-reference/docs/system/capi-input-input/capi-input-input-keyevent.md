---
title: "Input_KeyEvent"
upstream_id: "harmonyos-references/capi-input-input-keyevent"
catalog: "harmonyos-references"
content_hash: "cab9ebb91eab"
synced_at: "2026-07-09T00:59:49.942989"
---

# Input_KeyEvent

```
typedef struct Input_KeyEvent Input_KeyEvent
```

#### 概述

按键事件对象，用于表示用户按键操作产生的输入事件，包含按键码、按键状态等信息，可用于处理键盘输入和实现按键响应功能。

起始版本： 12

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_Input_CreateKeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_createkeyevent) | 创建按键事件对象。通过调用[OH_Input_DestroyKeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroykeyevent)销毁按键事件对象。 |
| [OH_Input_DestroyKeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroykeyevent) | 销毁按键事件对象。 |
