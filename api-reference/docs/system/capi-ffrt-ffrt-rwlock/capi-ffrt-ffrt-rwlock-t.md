---
title: "ffrt_rwlock_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-rwlock-t"
catalog: "harmonyos-references"
content_hash: "736c71146ed5"
synced_at: "2026-07-09T00:59:48.084151"
---

# ffrt_rwlock_t

```
typedef struct {...} ffrt_rwlock_t
```

#### 概述

FFRT读写锁结构。

起始版本： 18

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t storage[(ffrt_rwlock_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)] | FFRT读写锁占用空间 |
