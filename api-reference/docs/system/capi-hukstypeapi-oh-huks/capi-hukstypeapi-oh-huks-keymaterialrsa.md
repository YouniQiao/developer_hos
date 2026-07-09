---
title: "OH_Huks_KeyMaterialRsa"
upstream_id: "harmonyos-references/capi-hukstypeapi-oh-huks-keymaterialrsa"
catalog: "harmonyos-references"
content_hash: "ee00dcaead92"
synced_at: "2026-07-09T00:59:21.803610"
---

# OH_Huks_KeyMaterialRsa

```
struct OH_Huks_KeyMaterialRsa {...}
```

#### 概述

定义Rsa密钥的结构体类型。

起始版本： 9

相关模块： [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

所在头文件： [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| enum [OH_Huks_KeyAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_keyalg) keyAlg | 密钥的算法类型。 |
| uint32_t keySize | 密钥的长度。 |
| uint32_t nSize | n值的长度。 |
| uint32_t eSize | e值的长度。 |
| uint32_t dSize | d值的长度。 |
