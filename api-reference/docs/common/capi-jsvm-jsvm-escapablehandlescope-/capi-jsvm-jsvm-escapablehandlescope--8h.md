---
title: "JSVM_EscapableHandleScope__*"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-escapablehandlescope--8h"
catalog: "harmonyos-references"
content_hash: "59e32a9c2c3a"
synced_at: "2026-07-09T01:01:47.932193"
---

# JSVM_EscapableHandleScope__*

```
typedef struct JSVM_EscapableHandleScope__* JSVM_EscapableHandleScope
```

#### 概述

表示一种特殊类型的handle scope，用于将在特定handle scope内创建的值返回到父作用域。

使用场景： 当需要在子函数中创建JS对象并将其返回给父函数或更上层作用域时使用，在JSVM API开发中，需要将局部创建的JS值传递出当前作用域的场景。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 11

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)
