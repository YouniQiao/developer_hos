---
title: "Rdb_KeyInfo"
upstream_id: "harmonyos-references/capi-rdb-rdb-keyinfo"
catalog: "harmonyos-references"
content_hash: "e22c0fc4d110"
synced_at: "2026-07-09T00:57:20.340386"
---

# Rdb_KeyInfo

```
typedef struct {...} Rdb_KeyInfo
```

#### 概述

描述发生变化的行的主键或者行号。

起始版本： 11

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int count | 表示发生变化的主键或者行号的数量。 |
| int type | 表示主键的类型[OH_ColumnType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-data-value-h#oh_columntype)。 |
| [Rdb_KeyData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-keydata)* data | 存放变化的具体数据 |
