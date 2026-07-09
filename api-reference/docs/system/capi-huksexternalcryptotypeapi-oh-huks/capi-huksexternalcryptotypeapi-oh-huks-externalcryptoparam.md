---
title: "OH_Huks_ExternalCryptoParam"
upstream_id: "harmonyos-references/capi-huksexternalcryptotypeapi-oh-huks-externalcryptoparam"
catalog: "harmonyos-references"
content_hash: "21935281f8cd"
synced_at: "2026-07-09T00:59:21.018946"
---

# OH_Huks_ExternalCryptoParam

```
typedef struct {...} OH_Huks_ExternalCryptoParam
```

#### 概述

定义参数集合中单个参数的结构体。

起始版本： 22

相关模块： [HuksExternalCryptoTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-huksexternalcryptotypeapi)

所在头文件： [native_huks_external_crypto_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t tag | 标签值。 |
| union { bool boolParam; int32_t int32Param; uint32_t uint32Param; uint64_t uint64Param; [struct OH_Huks_Blob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-blob) blob; } | 标签内容。 boolParam：布尔类型参数。 int32Param：int32_t类型参数。 uint32Param：uint32_t类型参数。 uint64Param：uint64_t类型参数。 blob：OH_Huks_Blob类型参数。 |
