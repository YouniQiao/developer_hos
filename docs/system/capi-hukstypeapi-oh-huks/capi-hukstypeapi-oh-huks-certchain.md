---
title: "OH_Huks_CertChain"
upstream_id: "harmonyos-references/capi-hukstypeapi-oh-huks-certchain"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:44.007580"
---

# OH_Huks_CertChain

```
struct OH_Huks_CertChain {...}
```

#### 概述

定义证书链的结构体类型。

起始版本： 9

相关模块： [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

所在头文件： [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| struct [OH_Huks_Blob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-blob) *certs | 指向证书数据的指针。 |
| uint32_t certsCount | 证书数量。 |
