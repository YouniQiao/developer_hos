---
title: "Telephony_NetworkState"
upstream_id: "harmonyos-references/capi-telephony-telephony-networkstate"
catalog: "harmonyos-references"
content_hash: "2cc5c07fc8de"
synced_at: "2026-08-29T18:16:54.448820"
---

# Telephony_NetworkState

```
typedef struct {...} Telephony_NetworkState
```

#### 概述

网络状态信息。可用于获取设备当前注册网络的运营商名称、PLMN码、漫游状态、网络注册状态、无线接入技术等，适用于需要展示当前网络状态或根据网络状态进行业务逻辑判断的场景。

起始版本： 13

相关模块： [Telephony](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony)

所在头文件： [telephony_radio_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony-radio-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char longOperatorName_[TELEPHONY_MAX_OPERATOR_LEN] | 注册网络的长运营商名称。 |
| char shortOperatorName_[TELEPHONY_MAX_OPERATOR_LEN] | 注册网络的短运营商名称。 |
| char plmnNumeric_[TELEPHONY_MAX_PLMN_NUMERIC_LEN] | 注册网络的PLMN码。 |
| bool isRoaming_ | 是否处于漫游状态。true表示处于漫游状态，false表示未处于漫游状态。 |
| Telephony_RegState regState_ | 设备的网络注册状态。 |
| Telephony_RadioTechnology cfgTech_ | 设备的无线接入技术。 |
| Telephony_NsaState nsaState_ | 设备的NSA网络注册状态。 |
| bool isCaActive_ | CA（Carrier Aggregation，载波聚合）是否处于激活状态。true表示CA已激活，false表示CA未激活。 |
| bool isEmergency_ | 此设备是否只允许拨打紧急呼叫。true表示只允许拨打紧急呼叫，false表示不限于紧急呼叫。 |
