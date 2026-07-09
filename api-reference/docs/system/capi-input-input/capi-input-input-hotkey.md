---
title: "Input_Hotkey"
upstream_id: "harmonyos-references/capi-input-input-hotkey"
catalog: "harmonyos-references"
content_hash: "625f449b5ef1"
synced_at: "2026-07-09T00:59:50.288923"
---

# Input_Hotkey

```
typedef struct Input_Hotkey Input_Hotkey
```

#### 概述

定义快捷键结构体，用于描述快捷键的按键组合、触发条件和回调处理等设计逻辑，支持应用注册和管理自定义快捷键。

起始版本： 14

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_Input_CreateHotkey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_createhotkey) | 创建快捷键对象。通过调用[OH_Input_DestroyHotkey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroyhotkey)销毁快捷键对象。 |
| [OH_Input_DestroyHotkey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroyhotkey) | 销毁快捷键对象。 |
