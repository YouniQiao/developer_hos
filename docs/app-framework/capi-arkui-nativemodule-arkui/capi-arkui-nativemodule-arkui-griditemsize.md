---
title: "ArkUI_GridItemSize"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-griditemsize"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:58.602017"
---

# ArkUI_GridItemSize

```
typedef struct {...} ArkUI_GridItemSize
```

#### 概述

定义Grid布局选项onGetIrregularSizeByIndex回调返回值结构体。

起始版本： 22

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

相关示例： [native_type_sample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeTypeSample)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t rowSpan | GridItem占用的行数。 |
| uint32_t columnSpan | GridItem占用的列数。 |
