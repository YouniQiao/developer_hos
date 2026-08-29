---
title: "Rdb_ChangeInfo"
upstream_id: "harmonyos-references/capi-rdb-rdb-changeinfo"
catalog: "harmonyos-references"
content_hash: "a31a34ed4346"
synced_at: "2026-08-29T18:12:15.827798"
---

# Rdb_ChangeInfo

```
typedef struct Rdb_ChangeInfo {...} Rdb_ChangeInfo
```

#### 概述

记录端云同步过程详情。

起始版本： 11

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int version | 用于唯一标识Rdb_ChangeInfo结构体的版本。 |
| const char* tableName | 表示发生变化的表的名称。 |
| int ChangeType | 表示发生变化的数据的类型。0表示数据发生变化，1表示资产附件发生变化。 |
| [Rdb_KeyInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-keyinfo) inserted | 记录插入数据的位置，如果该表的主键是string类型，该值是主键的值，否则该值表示插入数据的行号。 |
| [Rdb_KeyInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-keyinfo) updated | 记录更新数据的位置，如果该表的主键是string类型，该值是主键的值，否则该值表示更新数据的行号。 |
| [Rdb_KeyInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-keyinfo) deleted | 记录删除数据的位置，如果该表的主键是string类型，该值是主键的值，否则该值表示删除数据的行号。 |
