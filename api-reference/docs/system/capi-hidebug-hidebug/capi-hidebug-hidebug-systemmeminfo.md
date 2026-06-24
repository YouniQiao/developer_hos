---
title: "HiDebug_SystemMemInfo"
upstream_id: "harmonyos-references/capi-hidebug-hidebug-systemmeminfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:48.856311"
---

# HiDebug_SystemMemInfo

```
typedef struct HiDebug_SystemMemInfo {...} HiDebug_SystemMemInfo
```

#### 概述

系统内存信息结构类型定义。

起始版本： 12

相关模块： [HiDebug](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug)

所在头文件： [hidebug_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t totalMem | 系统总的内存，以KB为单位。 |
| uint32_t freeMem | 系统空闲的内存，以KB为单位。 |
| uint32_t availableMem | 系统可用的内存，以KB为单位。 |
