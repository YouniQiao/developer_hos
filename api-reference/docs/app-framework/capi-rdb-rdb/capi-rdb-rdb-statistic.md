---
title: "Rdb_Statistic"
upstream_id: "harmonyos-references/capi-rdb-rdb-statistic"
catalog: "harmonyos-references"
content_hash: "6b7fa06d7507"
synced_at: "2026-07-09T00:57:20.595819"
---

# Rdb_Statistic

```
typedef struct Rdb_Statistic {...} Rdb_Statistic
```

#### 概述

描述数据库表的端云同步过程的统计信息。

起始版本： 11

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int total | 表示数据库表中需要端云同步的总行数。 |
| int successful | 表示数据库表中端云同步成功的行数。 |
| int failed | 表示数据库表中端云同步失败的行数。 |
| int remained | 表示数据库表中端云同步剩余未执行的行数。 |
