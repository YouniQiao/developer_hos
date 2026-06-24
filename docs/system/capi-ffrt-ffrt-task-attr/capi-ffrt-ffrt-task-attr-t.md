---
title: "ffrt_task_attr_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-task-attr-t"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:16.874177"
---

# ffrt_task_attr_t

```
typedef struct {...} ffrt_task_attr_t
```

#### 概述

并行任务属性结构。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t storage[(ffrt_task_attr_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)] | 任务属性占用空间 |
