---
title: "OH_HiDebug_ProfilingResult"
upstream_id: "harmonyos-references/capi-hidebug-oh-hidebug-profilingresult"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:49.853258"
---

# OH_HiDebug_ProfilingResult

```
typedef struct OH_HiDebug_ProfilingResult {...} OH_HiDebug_ProfilingResult
```

#### 概述

封装单次资源采集的结果。

起始版本： 24

相关模块： [HiDebug](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug)

所在头文件： [hidebug_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_HiDebug_ResourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h#oh_hidebug_resourcetype) resourceType | 资源采集类型。 **起始版本：** 24 |
| const char* filePath | 资源采集结果文件路径。如果采集失败则为空值。 **起始版本：** 24 |
