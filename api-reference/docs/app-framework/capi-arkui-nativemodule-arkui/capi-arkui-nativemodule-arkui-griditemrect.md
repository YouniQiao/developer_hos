---
title: "ArkUI_GridItemRect"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-griditemrect"
catalog: "harmonyos-references"
content_hash: "5ed05f2667e9"
synced_at: "2026-07-09T00:58:47.334914"
---

# ArkUI_GridItemRect

```
typedef struct {...} ArkUI_GridItemRect
```

#### 概述

定义Grid布局选项onGetRectByIndex回调返回值结构体。

起始版本： 22

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

相关示例： [native_type_sample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeTypeSample)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t rowStart | GridItem行起始位置。 |
| uint32_t columnStart | GridItem列起始位置。 |
| uint32_t rowSpan | GridItem占用的行数。 |
| uint32_t columnSpan | GridItem占用的列数。 |
