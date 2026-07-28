---
title: "HiCollie_SetTimerParam"
upstream_id: "harmonyos-references/capi-hicollie-hicollie-settimerparam"
catalog: "harmonyos-references"
content_hash: "6dcadfb5cf2c"
synced_at: "2026-07-28T16:51:23.166627"
---

# HiCollie_SetTimerParam

```
typedef struct HiCollie_SetTimerParam {...} HiCollie_SetTimerParam
```

#### 概述

定义OH_HiCollie_SetTimer函数的输入参数，用于设置定时器监控任务的名称、任务超时时间阈值、超时回调函数及执行动作标志。

使用场景：适用于需要监控任务执行时间的场景，帮助开发者监控和处理任务超时问题。

起始版本： 18

相关模块： [HiCollie](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie)

所在头文件： [hicollie.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char *name | timer任务名称。任务名称不可为空。 |
| unsigned int timeout | 任务超时时间阈值，单位：s，取值为大于0的正整数。当任务执行时间超过该阈值时，将触发超时处理机制。建议根据实际业务场景设置。 |
| [OH_HiCollie_Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-h#oh_hicollie_callback) func | 超时发生时执行的回调函数。 |
| void *arg | 回调函数的参数。 |
| [HiCollie_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-h#hicollie_flag) flag | 超时发生时执行的动作，参考[HiCollie_Flag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-h#hicollie_flag)。 |
