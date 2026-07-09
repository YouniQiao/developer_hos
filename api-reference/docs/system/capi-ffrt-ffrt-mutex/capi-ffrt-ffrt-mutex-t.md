---
title: "ffrt_mutex_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-mutex-t"
catalog: "harmonyos-references"
content_hash: "93a32c725271"
synced_at: "2026-07-09T00:59:48.066785"
---

# ffrt_mutex_t

```
typedef struct {...} ffrt_mutex_t
```

#### 概述

FFRT互斥锁结构。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t storage[(ffrt_mutex_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)] | FFRT互斥锁占用空间 |
