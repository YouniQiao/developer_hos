---
title: "ArkUI_AccessibleGridItemInfo"
upstream_id: "harmonyos-references/capi-arkui-accessibility-arkui-accessiblegriditeminfo"
catalog: "harmonyos-references"
content_hash: "0f395d5ddad0"
synced_at: "2026-07-09T00:58:40.683908"
---

# ArkUI_AccessibleGridItemInfo

```
typedef struct {...} ArkUI_AccessibleGridItemInfo
```

#### 概述

用于配置特定组件（[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)、[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex)、[Select](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select)、[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)组件）的属性值。

起始版本： 13

相关模块： [ArkUI_Accessibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-accessibility)

所在头文件： [native_interface_accessibility.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-accessibility-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool heading | 是否是标题。true表示是标题，false表示不是标题。 |
| bool selected | 是否被选中。true表示被选中，false表示未被选中。 |
| int32_t columnIndex | 列下标。取值范围为大于0的整数。 |
| int32_t rowIndex | 行下标。取值范围为大于0的整数。 |
| int32_t columnSpan | 列跨度。取值范围为大于0的整数。 |
| int32_t rowSpan | 行跨度。取值范围为大于0的整数。 |
