---
title: "Rdb_ProgressDetails"
upstream_id: "harmonyos-references/capi-rdb-rdb-progressdetails"
catalog: "harmonyos-references"
content_hash: "4a72771afe04"
synced_at: "2026-07-09T00:57:20.736820"
---

# Rdb_ProgressDetails

```
typedef struct Rdb_ProgressDetails {...} Rdb_ProgressDetails
```

#### 概述

描述数据库整体执行端云同步任务上传和下载的统计信息。

起始版本： 11

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int version | 用于唯一标识OH_TableDetails结构的版本。 |
| int schedule | 表示端云同步过程。 |
| int code | 表示端云同步过程的状态。 |
| int32_t tableLength | 表示端云同步的表的数量。 |
