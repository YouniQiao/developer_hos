---
title: "HiTraceId"
upstream_id: "harmonyos-references/capi-hitrace-hitraceid"
catalog: "harmonyos-references"
content_hash: "489a8cae6694"
synced_at: "2026-07-09T01:00:05.600293"
---

# HiTraceId

```
typedef struct HiTraceId {...} HiTraceId
```

#### 概述

HiTraceId定义。

起始版本： 12

相关模块： [HiTrace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hitrace)

所在头文件： [trace.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trace-h)

#### 汇总

#### [h2]成员变量

如果字节序为小端模式，结构体顺序如下表所示：

| 字段 | 字段bit数 | 描述 |
| --- | --- | --- |
| uint64_t valid | 1 | HiTraceId是否有效。 |
| uint64_t ver | 3 | HiTraceId的版本号。 |
| uint64_t chainId | 60 | HiTraceId的跟踪链标识。 |
| uint64_t flags | 12 | HiTraceId的跟踪标志位。 |
| uint64_t spanId | 26 | HiTraceId的分支标识。 |
| uint64_t parentSpanId | 26 | HiTraceId的父分支标识。 |

如果字节序为大端模式，结构体顺序如下表所示：

| 字段 | 字段bit数 | 描述 |
| --- | --- | --- |
| uint64_t chainId | 60 | HiTraceId的跟踪链标识。 |
| uint64_t ver | 3 | HiTraceId的版本号。 |
| uint64_t valid | 1 | HiTraceId是否有效。 |
| uint64_t parentSpanId | 26 | HiTraceId的父分支标识。 |
| uint64_t spanId | 26 | HiTraceId的分支标识。 |
| uint64_t flags | 12 | HiTraceId的跟踪标志位。 |
