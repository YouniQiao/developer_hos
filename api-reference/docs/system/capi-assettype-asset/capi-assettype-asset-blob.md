---
title: "Asset_Blob"
upstream_id: "harmonyos-references/capi-assettype-asset-blob"
catalog: "harmonyos-references"
content_hash: "15e833cd44b5"
synced_at: "2026-07-09T00:59:10.845417"
---

# Asset_Blob

```
typedef struct {...} Asset_Blob
```

#### 概述

二进制数组类型，即不定长的字节数组。

起始版本： 11

相关模块： [AssetType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-assettype)

所在头文件： [asset_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t size | 表示字节数组的大小。 |
| uint8_t *data | 指向字节数组的指针。 |
