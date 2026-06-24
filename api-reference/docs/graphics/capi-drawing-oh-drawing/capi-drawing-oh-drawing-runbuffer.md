---
title: "OH_Drawing_RunBuffer"
upstream_id: "harmonyos-references/capi-drawing-oh-drawing-runbuffer"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:05.981797"
---

# OH_Drawing_RunBuffer

```
typedef struct {...} OH_Drawing_RunBuffer
```

#### 概述

结构体用于描述一块内存，描述文字和位置信息。

起始版本： 11

相关模块： [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

所在头文件： [drawing_text_blob.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-blob-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint16_t* glyphs | 存储文字索引。 |
| float* pos | 存储文字的位置。 |
| char* utf8text | 存储文字UTF-8编码。 |
| uint32_t* clusters | 存储文字簇UTF-8编码（簇指的是集合）。 |
