---
title: "Asset_ResultSet"
upstream_id: "harmonyos-references/capi-assettype-asset-resultset"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:29.327121"
---

# Asset_ResultSet

```
typedef struct {...} Asset_ResultSet
```

#### 概述

关键资产查询结果集合，用于定义多条关键资产。

起始版本： 11

相关模块： [AssetType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype)

所在头文件： [asset_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t count | 关键资产的条数。 |
| [Asset_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype-asset-result) *results | 指向关键资产数组的指针。 |
