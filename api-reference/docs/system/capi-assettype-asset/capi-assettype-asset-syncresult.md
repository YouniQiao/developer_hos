---
title: "Asset_SyncResult"
upstream_id: "harmonyos-references/capi-assettype-asset-syncresult"
catalog: "harmonyos-references"
content_hash: "86e4749cf9ae"
synced_at: "2026-07-28T16:50:19.019077"
---

# Asset_SyncResult

```
typedef struct {...} Asset_SyncResult
```

#### 概述

关键资产同步结果。

起始版本： 20

相关模块： [AssetType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype)

所在头文件： [asset_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t resultCode | 关键资产同步的结果码。同步成功时结果码为0，同步失败时结果码参考[Asset_ResultCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h#asset_resultcode)。 |
| uint32_t totalCount | 触发同步的关键资产总数。 |
| uint32_t failedCount | 关键资产同步失败的数量。 |
