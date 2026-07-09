---
title: "OH_Huks_KeyMaterialEcc"
upstream_id: "harmonyos-references/capi-hukstypeapi-oh-huks-keymaterialecc"
catalog: "harmonyos-references"
content_hash: "57c9983986cd"
synced_at: "2026-07-09T00:59:21.828102"
---

# OH_Huks_KeyMaterialEcc

```
struct OH_Huks_KeyMaterialEcc {...}
```

#### 概述

定义Ecc密钥的结构体类型。

起始版本： 9

相关模块： [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

所在头文件： [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| enum [OH_Huks_KeyAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_keyalg) keyAlg | 密钥的算法类型。 |
| uint32_t keySize | 密钥的长度。 |
| uint32_t xSize | x值的长度。 |
| uint32_t ySize | y值的长度。 |
| uint32_t zSize | z值的长度。 |
