---
title: "Rdb_TableDetails"
upstream_id: "harmonyos-references/capi-rdb-rdb-tabledetails"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:47:08.930978"
---

# Rdb_TableDetails

```
typedef struct Rdb_TableDetails {...} Rdb_TableDetails
```

#### 概述

描述数据库表执行端云同步任务上传和下载的统计信息。

起始版本： 11

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* table | 数据库表名。 |
| [Rdb_Statistic](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-statistic) upload | 表示数据库表中端云同步上传过程的统计信息。 |
| [Rdb_Statistic](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-statistic) download | 表示数据库表中端云同步下载过程的统计信息。 |
