---
title: "HiDebug_ThreadCpuUsage"
upstream_id: "harmonyos-references/capi-hidebug-hidebug-threadcpuusage"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:48.782642"
---

# HiDebug_ThreadCpuUsage

```
typedef struct HiDebug_ThreadCpuUsage {...} HiDebug_ThreadCpuUsage
```

#### 概述

应用程序所有线程的CPU使用率结构体定义。

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
