---
title: "ffrt_function_header_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-function-header-t"
catalog: "harmonyos-references"
content_hash: "c607c7d5b485"
synced_at: "2026-07-28T16:51:05.477552"
---

# ffrt_function_header_t

```
typedef struct {...} ffrt_function_header_t
```

#### 概述

任务执行体，用于定义任务的执行和销毁回调。exec回调在任务被调度时调用，destroy回调在任务完成后被调用以释放任务相关资源。两者共同管理FFRT任务的完整生命周期。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [ffrt_function_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h#ffrt_function_t) exec | 执行任务的函数。在任务被调度时由框架调用。 |
| [ffrt_function_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h#ffrt_function_t) destroy | 销毁任务的函数。在任务执行完毕后由框架调用以释放资源。 |
| uint64_t reserve[2] | 保留字段。需设置为0。 |
