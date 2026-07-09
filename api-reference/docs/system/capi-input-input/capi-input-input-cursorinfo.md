---
title: "Input_CursorInfo"
upstream_id: "harmonyos-references/capi-input-input-cursorinfo"
catalog: "harmonyos-references"
content_hash: "a49580383d1a"
synced_at: "2026-07-09T00:59:50.654573"
---

# Input_CursorInfo

```
typedef struct Input_CursorInfo Input_CursorInfo
```

#### 概述

定义鼠标光标信息，用于在输入系统中管理和控制鼠标光标的显示行为和外观属性。包括光标显示状态、光标样式、光标大小档位、光标颜色。

起始版本： 22

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_Input_CursorInfo_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_cursorinfo_create) | 创建鼠标光标信息对象。通过调用[OH_Input_CursorInfo_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_cursorinfo_destroy)销毁鼠标光标信息对象。 |
| [OH_Input_CursorInfo_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_cursorinfo_destroy) | 销毁鼠标光标信息对象。 |
