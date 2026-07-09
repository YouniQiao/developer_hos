---
title: "OH_Huks_Param"
upstream_id: "harmonyos-references/capi-hukstypeapi-oh-huks-param"
catalog: "harmonyos-references"
content_hash: "9847a854142b"
synced_at: "2026-07-09T00:59:21.490931"
---

# OH_Huks_Param

```
struct OH_Huks_Param {...}
```

#### 概述

定义参数集中的参数结构体类型。

起始版本： 9

相关模块： [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

所在头文件： [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t tag | 标签值。 |
| union { bool boolParam; int32_t int32Param; uint32_t uint32Param; uint64_t uint64Param; [struct OH_Huks_Blob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-blob) blob; } | boolParam：bool型参数。 int32Param：int32_t型参数。 uint32Param：uint32_t型参数。 uint64Param：uint64_t型参数。 blob：OH_Huks_Blob型参数。 |
