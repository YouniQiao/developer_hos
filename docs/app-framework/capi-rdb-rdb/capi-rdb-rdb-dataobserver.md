---
title: "Rdb_DataObserver"
upstream_id: "harmonyos-references/capi-rdb-rdb-dataobserver"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:47:08.797540"
---

# Rdb_DataObserver

```
typedef struct Rdb_DataObserver {...} Rdb_DataObserver
```

#### 概述

表示数据观察者。

起始版本： 11

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| void* context | 表示数据观察者的上下文。 |
| [Rdb_SubscribeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-rdb-subscribecallback) callback | 数据观察者的回调。 |
