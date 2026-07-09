---
title: "OH_Drawing_FontFallbackGroup"
upstream_id: "harmonyos-references/capi-drawing-oh-drawing-fontfallbackgroup"
catalog: "harmonyos-references"
content_hash: "6c82679c299e"
synced_at: "2026-07-09T01:01:00.756456"
---

# OH_Drawing_FontFallbackGroup

```
typedef struct OH_Drawing_FontFallbackGroup {...} OH_Drawing_FontFallbackGroup
```

#### 概述

备用字体集信息结构体。

起始版本： 12

相关模块： [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

所在头文件： [drawing_text_typography.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-typography-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* groupName | 备用字体集所对应的字体集名称，如果值为空，表示可以使用备用字体集列表集所有的字体。 |
| size_t fallbackInfoSize | 备用字体集数量。 |
| [OH_Drawing_FontFallbackInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontfallbackinfo)* fallbackInfoSet | 备用字体字体集列表。 |
