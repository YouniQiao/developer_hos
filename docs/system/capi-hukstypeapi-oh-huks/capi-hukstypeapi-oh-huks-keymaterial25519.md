---
title: "OH_Huks_KeyMaterial25519"
upstream_id: "harmonyos-references/capi-hukstypeapi-oh-huks-keymaterial25519"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:44.477074"
---

# OH_Huks_KeyMaterial25519

```
struct OH_Huks_KeyMaterial25519 {...}
```

#### 概述

定义25519类型密钥的结构体类型。

起始版本： 9

相关模块： [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

所在头文件： [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| enum [OH_Huks_KeyAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_keyalg) keyAlg | 密钥的算法类型。 |
| uint32_t keySize | 25519类型密钥的长度。 |
| uint32_t pubKeySize | 公钥的长度。 |
| uint32_t priKeySize | 私钥的长度。 |
| uint32_t reserved | 预留字段。建议开发者赋值为0。 |
