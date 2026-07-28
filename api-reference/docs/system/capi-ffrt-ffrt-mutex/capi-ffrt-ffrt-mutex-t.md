---
title: "ffrt_mutex_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-mutex-t"
catalog: "harmonyos-references"
content_hash: "9278fdc5c8bd"
synced_at: "2026-07-28T16:51:06.140646"
---

# ffrt_mutex_t

```
typedef struct {...} ffrt_mutex_t
```

#### 概述

互斥锁结构体，用于存储互斥锁的内部数据。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t storage[(ffrt_mutex_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)] | 互斥锁的内部存储。请勿直接访问，通过ffrt_mutex_*等接口管理。 |
