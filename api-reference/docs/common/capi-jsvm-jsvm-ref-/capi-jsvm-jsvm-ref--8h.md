---
title: "JSVM_Ref__*"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-ref--8h"
catalog: "harmonyos-references"
content_hash: "f2adc398c0cd"
synced_at: "2026-07-09T01:01:47.838812"
---

# JSVM_Ref__*

```
typedef struct JSVM_Ref__* JSVM_Ref
```

#### 概述

表示JavaScript值的引用。

使用场景： 在Native与JavaScript交互场景中，需要持有JavaScript对象引用时使用。

功能特点： 提供对JavaScript值的稳定引用，防止被垃圾回收。支持跨函数、跨作用域传递JavaScript值。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 11

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)
