---
title: "JSVM_ScriptOrigin"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-scriptorigin"
catalog: "harmonyos-references"
content_hash: "17bdec95803f"
synced_at: "2026-07-09T01:01:47.138442"
---

# JSVM_ScriptOrigin

```
typedef struct {...} JSVM_ScriptOrigin
```

#### 概述

某段JavaScript代码的原始信息，如sourceMap路径、源文件名、源文件中的起始行/列号等。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 12

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* sourceMapUrl | Sourcemap 路径。 |
| const char* resourceName | 源文件名。 |
| size_t resourceLineOffset | 这段代码在源文件中的起始行号。 |
| size_t resourceColumnOffset | 这段代码在源文件中的起始列号。 |
