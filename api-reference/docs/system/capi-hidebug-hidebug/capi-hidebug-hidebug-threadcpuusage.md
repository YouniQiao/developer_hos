---
title: "HiDebug_ThreadCpuUsage"
upstream_id: "harmonyos-references/capi-hidebug-hidebug-threadcpuusage"
catalog: "harmonyos-references"
content_hash: "3f8046fd1cc1"
synced_at: "2026-07-09T01:00:04.911038"
---

# HiDebug_ThreadCpuUsage

```
typedef struct HiDebug_ThreadCpuUsage {...} HiDebug_ThreadCpuUsage
```

#### 概述

当前进程所有线程的CPU使用率结构体定义。

使用场景：

应用性能监控：获取线程CPU使用率，监控应用的运行状态和性能瓶颈。

线程性能优化：分析各线程的CPU占用情况，优化线程调度和资源分配。

系统调试：在调试阶段追踪线程的CPU使用情况，定位性能问题。

起始版本： 12

相关模块： [HiDebug](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug)

所在头文件： [hidebug_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t threadId | 线程ID。 |
| double cpuUsage | 线程CPU使用率百分比。 |
| struct [HiDebug_ThreadCpuUsage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-threadcpuusage) *next | 下一个线程的使用率信息。 |
