---
title: "ArkUI_AccessibleAction"
upstream_id: "harmonyos-references/capi-arkui-accessibility-arkui-accessibleaction"
catalog: "harmonyos-references"
content_hash: "a9748cc8b209"
synced_at: "2026-08-29T18:15:45.243139"
---

# ArkUI_AccessibleAction

```
typedef struct {...} ArkUI_AccessibleAction
```

#### 概述

无障碍操作内容结构，用于描述组件支持的无障碍操作。开发者可通过该结构体定义操作类型（actionType）及对应的操作描述信息（description），以便无障碍服务向用户播报可执行的操作。支持无障碍服务向用户呈现节点可执行的操作（如点击、长按、滚动等），并提供操作的文字说明，以帮助用户理解操作含义。

起始版本： 13

相关模块： [ArkUI_Accessibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-accessibility)

所在头文件： [native_interface_accessibility.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [ArkUI_Accessibility_ActionType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h#arkui_accessibility_actiontype) actionType | 无障碍操作类型。 |
| const char* description | 无障碍操作的描述信息。 |
