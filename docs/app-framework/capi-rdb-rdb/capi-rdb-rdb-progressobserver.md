---
title: "Rdb_ProgressObserver"
upstream_id: "harmonyos-references/capi-rdb-rdb-progressobserver"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:47:08.999023"
---

# Rdb_ProgressObserver

```
typedef struct Rdb_ProgressObserver {...} Rdb_ProgressObserver
```

#### 概述

端云同步进度观察者。

起始版本： 11

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| void* context | 端云同步进度观察者的上下文。 |
| [Rdb_ProgressCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h#rdb_progresscallback) callback | 端云同步进度观察者的回调函数。 |
