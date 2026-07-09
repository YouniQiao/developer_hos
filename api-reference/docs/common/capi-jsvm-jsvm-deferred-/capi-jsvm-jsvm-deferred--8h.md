---
title: "JSVM_Deferred__*"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-deferred--8h"
catalog: "harmonyos-references"
content_hash: "809e502dc59c"
synced_at: "2026-07-09T01:01:48.001171"
---

# JSVM_Deferred__*

```
typedef struct JSVM_Deferred__* JSVM_Deferred
```

#### 概述

表示Promise延迟对象。

使用场景： 在JSVM Native模块中需要创建Promise对象并延迟处理异步操作结果时，需要在Native层手动控制Promise的resolve或reject时机的场景，将Native层的异步操作结果封装为Promise返回给JavaScript层。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 11

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)
