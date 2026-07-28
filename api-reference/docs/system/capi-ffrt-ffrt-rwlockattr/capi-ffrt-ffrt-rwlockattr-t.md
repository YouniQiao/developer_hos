---
title: "ffrt_rwlockattr_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-rwlockattr-t"
catalog: "harmonyos-references"
content_hash: "9a9650598201"
synced_at: "2026-07-28T16:51:06.081196"
---

# ffrt_rwlockattr_t

```
typedef struct {...} ffrt_rwlockattr_t
```

#### 概述

读写锁属性结构体，用于存储读写锁的属性信息。

起始版本： 18

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| long storage | 读写锁属性的内部存储。请勿直接访问，直接访问可能导致读写锁属性失效。 |
