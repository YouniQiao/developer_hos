---
title: "OH_Huks_ParamSet"
upstream_id: "harmonyos-references/capi-hukstypeapi-oh-huks-paramset"
catalog: "harmonyos-references"
content_hash: "72db3499cb26"
synced_at: "2026-07-09T00:59:21.700316"
---

# OH_Huks_ParamSet

```
struct OH_Huks_ParamSet {...}
```

#### 概述

定义参数集的结构体类型。

起始版本： 9

相关模块： [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

所在头文件： [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t paramSetSize | 参数集的内存大小。 |
| uint32_t paramsCnt | 参数的个数。 |
| struct [OH_Huks_Param](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-param) params[] | 参数数组。 |
