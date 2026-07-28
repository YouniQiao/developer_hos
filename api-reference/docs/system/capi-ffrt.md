---
title: "FFRT"
upstream_id: "harmonyos-references/capi-ffrt"
catalog: "harmonyos-references"
content_hash: "00093661f691"
synced_at: "2026-07-28T16:51:04.466593"
---

# FFRT

#### 概述

提供Function Flow Runtime（FFRT）C接口。FFRT是一种基于任务的并发运行时库，根据任务依赖关系自动调度任务，开发者无需手动管理线程。

起始版本： 10

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [condition_variable.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h) | 声明条件变量的C接口。 |
| [fiber.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fiber-h) | 声明纤程的C接口。 纤程是一种轻量级的用户态线程，用于在用户空间内实现高效的任务调度和上下文切换。 |
| [loop.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-loop-h) | 声明事件循环的C接口。 |
| [mutex.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h) | 声明互斥锁（mutex）的C接口，用于在并发任务间提供互斥访问，保护共享资源免受竞争条件影响。 |
| [queue.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-queue-h) | 声明队列的C接口。 |
| [shared_mutex.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-shared-mutex-h) | 声明读写锁（rwlock）的C接口。 |
| [sleep.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-sleep-h) | 声明[ffrt_usleep](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-sleep-h#ffrt_usleep)和[ffrt_yield](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-sleep-h#ffrt_yield)的C接口。 |
| [task.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-task-h) | 声明FFRT任务的C接口，提供任务属性的初始化与销毁、任务QoS设置与获取、任务延迟时间管理、并发队列任务优先级管理、任务栈大小管理、任务提交调度执行、任务句柄引用计数管理以及任务等待等功能。 |
| [timer.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timer-h) | 声明定时器的C接口。 提供基于QoS等级的定时器能力，支持在指定超时时间后执行回调函数，可用于延时任务调度等场景。 |
| [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h) | 定义通用类型。 |
