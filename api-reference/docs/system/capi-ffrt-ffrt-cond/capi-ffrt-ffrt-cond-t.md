---
title: "ffrt_cond_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-cond-t"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:17.353289"
---

# ffrt_cond_t

```
typedef struct {...} ffrt_cond_t
```

#### 概述

FFRT条件变量结构。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t storage[(ffrt_cond_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)] | FFRT条件变量占用空间 |
