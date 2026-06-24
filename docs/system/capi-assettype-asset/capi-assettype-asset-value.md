---
title: "Asset_Value"
upstream_id: "harmonyos-references/capi-assettype-asset-value"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:29.140673"
---

# Asset_Value

```
typedef union {...} Asset_Value
```

#### 概述

关键资产属性内容。

起始版本： 11

相关模块： [AssetType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype)

所在头文件： [asset_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool boolean | 该字段用于传入bool类型的关键资产。 |
| uint32_t u32 | 该字段用于传入uint32类型的关键资产。 |
| [Asset_Blob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype-asset-blob) blob | 该字段用于传入bytes类型的关键资产。 |
