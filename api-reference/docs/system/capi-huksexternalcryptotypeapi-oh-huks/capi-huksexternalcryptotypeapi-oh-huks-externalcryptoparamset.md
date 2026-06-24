---
title: "OH_Huks_ExternalCryptoParamSet"
upstream_id: "harmonyos-references/capi-huksexternalcryptotypeapi-oh-huks-externalcryptoparamset"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:43.801589"
---

# OH_Huks_ExternalCryptoParamSet

```
typedef struct OH_Huks_ExternalCryptoParamSet {...} OH_Huks_ExternalCryptoParamSet
```

#### 概述

定义外部加密参数集合的结构。

起始版本： 22

相关模块： [HuksExternalCryptoTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-huksexternalcryptotypeapi)

所在头文件： [native_huks_external_crypto_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t paramSetSize | 参数集合所占内存大小，单位：Byte。 **起始版本：** 22 |
| uint32_t paramsCnt | 参数集合中的参数数量。 **起始版本：** 22 |
| [OH_Huks_ExternalCryptoParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-huksexternalcryptotypeapi-oh-huks-externalcryptoparam) params[] | 参数数组，大小由paramSetSize与paramsCnt决定。 **起始版本：** 22 |
