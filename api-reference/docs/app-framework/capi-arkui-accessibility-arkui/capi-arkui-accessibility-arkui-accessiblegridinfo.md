---
title: "ArkUI_AccessibleGridInfo"
upstream_id: "harmonyos-references/capi-arkui-accessibility-arkui-accessiblegridinfo"
catalog: "harmonyos-references"
content_hash: "87bd50d49dd2"
synced_at: "2026-07-28T16:49:30.433184"
---

# ArkUI_AccessibleGridInfo

```
typedef struct {...} ArkUI_AccessibleGridInfo
```

#### 概述

用于描述网格组件的整体布局属性。该结构体用于向无障碍服务提供网格组件的行数、列数和选择模式等信息，支持无障碍服务获取网格的整体布局信息。

起始版本： 13

相关模块： [ArkUI_Accessibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-accessibility)

所在头文件： [native_interface_accessibility.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t rowCount | 网格的行数。取值范围为大于0的整数，传入非正整数时不生效。 |
| int32_t columnCount | 网格的列数。取值范围为大于0的整数，传入非正整数时不生效。 |
| int32_t selectionMode | 选择模式。值为0时表示仅选中网格的一行，非0值时表示选中网格的多行。 |
