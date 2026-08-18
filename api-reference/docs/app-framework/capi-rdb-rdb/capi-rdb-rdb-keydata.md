---
title: "Rdb_KeyData"
upstream_id: "harmonyos-references/capi-rdb-rdb-keydata"
catalog: "harmonyos-references"
content_hash: "2ea24e22f3de"
synced_at: "2026-08-18T15:31:52.309441"
---

# Rdb_KeyData

```
union Rdb_KeyData { ... }
```

#### 概述

存放变化的具体数据。

起始版本： 11

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint64_t integer | 存放uint64_t类型的数据。 |
| double real | 存放double类型的数据。 |
| const char* text | 存放字符串类型的数据。 |
