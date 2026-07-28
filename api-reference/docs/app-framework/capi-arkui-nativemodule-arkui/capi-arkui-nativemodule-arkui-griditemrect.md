---
title: "ArkUI_GridItemRect"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-griditemrect"
catalog: "harmonyos-references"
content_hash: "63551f505f59"
synced_at: "2026-07-28T16:49:41.941319"
---

# ArkUI_GridItemRect

```
typedef struct {...} ArkUI_GridItemRect
```

#### 概述

定义Grid布局选项[OH_ArkUI_GridLayoutOptions_RegisterGetRectByIndexCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-grid-h#oh_arkui_gridlayoutoptions_registergetrectbyindexcallback)回调返回值结构体，用于通过GridItem索引指定该GridItem在Grid中的起始行列位置和占用的行列数。

起始版本： 22

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [grid.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-grid-h)

相关示例： [native_type_sample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeTypeSample)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t rowStart | GridItem行起始位置，从0开始计数，用于确定GridItem在Grid中的起始行。 |
| uint32_t columnStart | GridItem列起始位置，从0开始计数，用于确定GridItem在Grid中的起始列。 |
| uint32_t rowSpan | GridItem占用的行数，用于设置GridItem在行方向上的跨度。 |
| uint32_t columnSpan | GridItem占用的列数，用于设置GridItem在列方向上的跨度。 |
