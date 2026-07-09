---
title: "TransientTask_TransientTaskInfo"
upstream_id: "harmonyos-references/capi-transienttask-transienttask-transienttaskinfo"
catalog: "harmonyos-references"
content_hash: "e96927eac3c7"
synced_at: "2026-07-09T00:58:57.642469"
---

# TransientTask_TransientTaskInfo

```
typedef struct TransientTask_TransientTaskInfo {...} TransientTask_TransientTaskInfo
```

#### 概述

定义所有短时任务信息结构体。用于返回当日剩余总配额和已申请的所有短时任务信息。

起始版本： 20

相关模块： [TransientTask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transienttask)

所在头文件： [transient_task_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transient-task-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t remainingQuota | 当日剩余总配额。单位：毫秒。 |
| [TransientTask_DelaySuspendInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transienttask-transienttask-delaysuspendinfo) transientTasks[[TRANSIENT_TASK_MAX_NUM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transient-task-type-h#宏定义)] | 已申请的所有短时任务信息。包括短时任务请求ID、剩余时间（单位：毫秒）。 |
