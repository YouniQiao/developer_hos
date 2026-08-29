---
title: "OH_Rdb_Config"
upstream_id: "harmonyos-references/capi-rdb-oh-rdb-config"
catalog: "harmonyos-references"
content_hash: "c0e7c4ce3d8f"
synced_at: "2026-08-29T18:12:15.742964"
---

# OH_Rdb_Config

```
typedef struct  {...} OH_Rdb_Config
```

#### 概述

管理关系数据库配置。

起始版本： 10

相关模块： [RDB](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb)

所在头文件： [relational_store.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int selfSize | 该结构体的大小。 |
| const char* dataBaseDir | 数据库文件所在目录。完整路径由dataBaseDir与storeName组合而成，完整路径总长度不超过1024个字符。不能为空。 |
| const char* storeName | 数据库名称，不能为空且不能包含路径分隔符/。 |
| const char* bundleName | 应用包名，不能为空。 |
| const char* moduleName | 应用模块名，不能为空。 |
| bool isEncrypt | 指定数据库是否加密。true表示加密，false表示不加密。 |
| int securityLevel | 数据库安全级别[OH_Rdb_SecurityLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h#oh_rdb_securitylevel)。 |
| int area | 数据库安全区域等级[Rdb_SecurityArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-h#rdb_securityarea) **起始版本：** 11 |
