---
title: "OH_Huks_KeyMaterialDsa"
upstream_id: "harmonyos-references/capi-hukstypeapi-oh-huks-keymaterialdsa"
catalog: "harmonyos-references"
content_hash: "7a7bc21a0e64"
synced_at: "2026-07-09T00:59:21.836229"
---

# OH_Huks_KeyMaterialDsa

```
struct OH_Huks_KeyMaterialDsa {...}
```

#### 概述

定义DSA密钥的结构体类型。

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
| uint32_t pSize | p值的长度。 |
| uint32_t qSize | q值的长度。 |
| uint32_t gSize | g值的长度。 |
