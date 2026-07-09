---
title: "Input_KeyState"
upstream_id: "harmonyos-references/capi-input-input-keystate"
catalog: "harmonyos-references"
content_hash: "266b40e4f13f"
synced_at: "2026-07-09T00:59:49.795224"
---

# Input_KeyState

```
typedef struct Input_KeyState Input_KeyState
```

#### 概述

定义按键信息，用于标识按键行为。例如，“Ctrl”按键信息包含键值和键状态。适用于快捷键处理、输入事件状态管理、按键状态检测等场景。

起始版本： 12

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_Input_CreateKeyState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_createkeystate) | 创建按键状态的枚举对象。通过调用[OH_Input_DestroyKeyState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroykeystate)销毁按键状态的枚举对象。 |
| [OH_Input_DestroyKeyState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroykeystate) | 销毁按键状态的枚举对象。 |
