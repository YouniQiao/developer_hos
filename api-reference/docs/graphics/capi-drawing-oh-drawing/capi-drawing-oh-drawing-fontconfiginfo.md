---
title: "OH_Drawing_FontConfigInfo"
upstream_id: "harmonyos-references/capi-drawing-oh-drawing-fontconfiginfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:06.495805"
---

# OH_Drawing_FontConfigInfo

```
typedef struct OH_Drawing_FontConfigInfo {...} OH_Drawing_FontConfigInfo
```

#### 概述

系统字体配置信息结构体。

起始版本： 12

相关模块： [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

所在头文件： [drawing_text_typography.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-typography-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| size_t fontDirSize | 系统字体文件路径数量。 |
| size_t fontGenericInfoSize | 通用字体集列表数量。 |
| size_t fallbackGroupSize | 备用字体集列表数量。 |
| char** fontDirSet | 系统字体文件路径列表。 |
| [OH_Drawing_FontGenericInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontgenericinfo)* fontGenericInfoSet | 通用字体集列表。 |
| [OH_Drawing_FontFallbackGroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontfallbackgroup)* fallbackGroupSet | 备用字体集列表。 |
