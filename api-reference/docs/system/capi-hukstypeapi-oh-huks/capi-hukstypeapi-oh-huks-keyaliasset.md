---
title: "OH_Huks_KeyAliasSet"
upstream_id: "harmonyos-references/capi-hukstypeapi-oh-huks-keyaliasset"
catalog: "harmonyos-references"
content_hash: "367d550942e2"
synced_at: "2026-07-09T00:59:22.094015"
---

# OH_Huks_KeyAliasSet

```
struct OH_Huks_KeyAliasSet {...}
```

#### 概述

定义密钥别名集的结构体类型。

起始版本： 20

相关模块： [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

所在头文件： [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t aliasesCnt | 密钥别名集个数。 |
| struct [OH_Huks_Blob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-blob) *aliases | 指向密钥别名集数据的指针。 |
