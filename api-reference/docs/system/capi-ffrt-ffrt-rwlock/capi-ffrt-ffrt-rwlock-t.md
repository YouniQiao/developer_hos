---
title: "ffrt_rwlock_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-rwlock-t"
catalog: "harmonyos-references"
content_hash: "0c9ad6b95d85"
synced_at: "2026-07-28T16:51:06.327836"
---

# ffrt_rwlock_t

```
typedef struct {...} ffrt_rwlock_t
```

#### 概述

读写锁结构体，用于存储读写锁的内部数据。

起始版本： 18

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t storage[(ffrt_rwlock_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)] | 读写锁的内部存储。请勿直接访问，通过ffrt_rwlock_*等接口管理。 |
