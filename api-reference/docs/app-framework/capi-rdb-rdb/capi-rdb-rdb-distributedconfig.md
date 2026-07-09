---
title: "Rdb_DistributedConfig"
upstream_id: "harmonyos-references/capi-rdb-rdb-distributedconfig"
catalog: "harmonyos-references"
content_hash: "9d58024b19f5"
synced_at: "2026-07-09T00:57:20.171905"
---

# Rdb_DistributedConfig

```
typedef struct Rdb_DistributedConfig {...} Rdb_DistributedConfig
```

#### 概述

记录表的分布式配置信息。

起始版本： 11

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int version | 用于唯一标识Rdb_DistributedConfig结构的版本。 |
| bool isAutoSync | 表示该表是否支持端云自动同步。为true时，支持系统自动触发端云同步；为false时不支持系统自动触发端云同步，需要调用[OH_Rdb_CloudSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h#oh_rdb_cloudsync)接口触发端云同步。 |
