---
title: "JSVM_ScriptOrigin"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-scriptorigin"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:03.220142"
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
