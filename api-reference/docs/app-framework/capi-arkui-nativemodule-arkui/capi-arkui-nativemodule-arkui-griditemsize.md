---
title: "ArkUI_GridItemSize"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-griditemsize"
catalog: "harmonyos-references"
content_hash: "77b288fccc04"
synced_at: "2026-07-28T16:49:41.928921"
---

# ArkUI_GridItemSize

```
typedef struct {...} ArkUI_GridItemSize
```

#### 概述

定义Grid布局选项[OH_ArkUI_GridLayoutOptions_RegisterGetIrregularSizeByIndexCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-grid-h#oh_arkui_gridlayoutoptions_registergetirregularsizebyindexcallback)回调返回值结构体，用于通过GridItem索引指定不规则GridItem占用的行数和列数。

起始版本： 22

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [grid.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-grid-h)

相关示例： [native_type_sample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeTypeSample)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t rowSpan | GridItem占用的行数，用于设置GridItem在行方向上的跨度。取值范围：[1, +∞)，设置为0时按1处理；Grid横向布局时，超过Grid实际行数的值按实际行数处理。 |
| uint32_t columnSpan | GridItem占用的列数，用于设置GridItem在列方向上的跨度。取值范围：[1, +∞)，设置为0时按1处理；Grid纵向布局时，超过Grid实际列数的值按实际列数处理。 |
