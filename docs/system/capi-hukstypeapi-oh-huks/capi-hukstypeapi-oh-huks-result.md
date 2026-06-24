---
title: "OH_Huks_Result"
upstream_id: "harmonyos-references/capi-hukstypeapi-oh-huks-result"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:43.796770"
---

# OH_Huks_Result

```
struct OH_Huks_Result {...}
```

#### 概述

表示状态返回数据，包括返回码和消息。

起始版本： 9

相关模块： [HuksTypeApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi)

所在头文件： [native_huks_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t errorCode | 状态返回码，参考[OH_Huks_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_errcode)。 |
| const char *errorMsg | 对状态返回码的说明信息。 |
| uint8_t *data | 其他返回数据。 |
