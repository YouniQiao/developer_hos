---
title: "ffrt_task_attr_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-task-attr-t"
catalog: "harmonyos-references"
content_hash: "18e9e396af5b"
synced_at: "2026-07-28T16:51:05.807582"
---

# ffrt_task_attr_t

```
typedef struct {...} ffrt_task_attr_t
```

#### 概述

任务属性结构体，用于存储任务的属性信息。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t storage[(ffrt_task_attr_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)] | 任务属性的内部存储。请勿直接访问，通过[ffrt_task_attr_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-task-h#ffrt_task_attr_init)和ffrt_task_attr_set_*等接口管理内容。 |
