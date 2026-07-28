---
title: "ffrt_queue_attr_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-queue-attr-t"
catalog: "harmonyos-references"
content_hash: "69c874ea763e"
synced_at: "2026-07-28T16:51:05.976251"
---

# ffrt_queue_attr_t

```
typedef struct {...} ffrt_queue_attr_t
```

#### 概述

队列属性结构体，用于存储队列的属性信息。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t storage[(ffrt_queue_attr_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)] | 队列属性的内部存储。请勿直接访问，通过[ffrt_queue_attr_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-queue-h#ffrt_queue_attr_init)和ffrt_queue_attr_set_*等接口管理内容。 |
