---
title: "ffrt_mutexattr_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-mutexattr-t"
catalog: "harmonyos-references"
content_hash: "7afad3579b6e"
synced_at: "2026-07-28T16:51:06.076342"
---

# ffrt_mutexattr_t

```
typedef struct {...} ffrt_mutexattr_t
```

#### 概述

互斥锁属性结构体，用于存储互斥锁的属性信息。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| long storage | 互斥锁属性的内部存储。请勿直接访问，通过[ffrt_mutexattr_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutexattr_init)初始化。 |
