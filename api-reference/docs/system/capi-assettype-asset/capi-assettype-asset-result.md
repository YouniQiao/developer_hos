---
title: "Asset_Result"
upstream_id: "harmonyos-references/capi-assettype-asset-result"
catalog: "harmonyos-references"
content_hash: "79b74d374736"
synced_at: "2026-07-09T00:59:11.101559"
---

# Asset_Result

```
typedef struct {...} Asset_Result
```

#### 概述

关键资产查询结果，用于定义一条关键资产。

起始版本： 11

相关模块： [AssetType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype)

所在头文件： [asset_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t count | 关键资产属性的个数。 |
| [Asset_Attr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype-asset-attr) *attrs | 指向关键资产属性数组的指针。 |
