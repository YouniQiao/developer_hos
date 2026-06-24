---
title: "native_handwrite_api.h"
upstream_id: "harmonyos-references/pen-handwrite-headerfile-declare"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:39.362749"
---

# native_handwrite_api.h

#### 概述

声明用于对外提供手写能力。

库： libhandwrite_ndk.z.so

引用文件： <handwrite/native_handwrite_api.h>

系统能力： SystemCapability.Stylus.Handwrite

起始版本： 6.0.0(20)

相关模块： [HandWrite](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-c)

#### 汇总

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [HandWrite_HistoricalPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-struct-historicalpoint) | 定义历史触摸点信息的结构体。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| enum [Handwrite_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-c#handwrite_errcode) { E_NO_ERROR = 0, E_PARAMS = 401, E_INNER_ERROR = 1010400001 } | 定义手写错误码。 |

#### [h2]函数

| 名称 | 函数 |
| --- | --- |
| int32_t [HMS_HandWrite_GetPredictPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-c#hms_handwrite_getpredictpoint)(const [HandWrite_HistoricalPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-struct-historicalpoint) *event, int32_t size, float *predictPointX, float *predictPointY) | 此接口用于获取预测点。 |
