---
title: "JSVM_CodeCache"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-codecache"
catalog: "harmonyos-references"
content_hash: "20d87102d93e"
synced_at: "2026-07-09T01:01:47.139081"
---

# JSVM_CodeCache

```
typedef struct {...} JSVM_CodeCache
```

#### 概述

表示当id为JSVM_COMPILE_CODE_CACHE时，content的类型。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 12

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t* cache | 缓存地址。 |
| size_t length | 缓存大小。 |
