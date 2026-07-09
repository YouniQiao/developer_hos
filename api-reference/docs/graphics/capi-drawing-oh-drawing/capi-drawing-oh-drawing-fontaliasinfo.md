---
title: "OH_Drawing_FontAliasInfo"
upstream_id: "harmonyos-references/capi-drawing-oh-drawing-fontaliasinfo"
catalog: "harmonyos-references"
content_hash: "a6f51ead877a"
synced_at: "2026-07-09T01:01:01.049926"
---

# OH_Drawing_FontAliasInfo

```
typedef struct OH_Drawing_FontAliasInfo {...} OH_Drawing_FontAliasInfo
```

#### 概述

别名字体信息结构体。

起始版本： 12

相关模块： [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

所在头文件： [drawing_text_typography.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-typography-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* familyName | 字体家族名。 |
| int weight | 字体字重值，当字重值大于0时，表示此字体集只包含所指定weight的字体，当字重值等于0时，表示此字体集包含所有字体。 |
