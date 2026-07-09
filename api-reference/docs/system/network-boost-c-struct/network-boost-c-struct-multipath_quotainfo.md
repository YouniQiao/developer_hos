---
title: "NetworkBoost_MultiPathQuotaInfo"
upstream_id: "harmonyos-references/network-boost-c-struct-multipath_quotainfo"
catalog: "harmonyos-references"
content_hash: "739a51e0cb97"
synced_at: "2026-07-09T00:59:32.911747"
---

# NetworkBoost_MultiPathQuotaInfo

#### 概述

多网配额信息，包含配额次数信息和时长信息。

起始版本： 6.0.2(22)

相关模块： [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

所在头文件： [network_boost_handover.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-handover)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint16_t [count](#count) | 配额次数信息。 |
| uint16_t [duration](#duration) | 配额时长信息，单位为s。 |

#### 结构体成员变量说明

#### count

```
uint16_t NetworkBoost_MultiPathQuotaInfo::count
```
 描述

配额次数信息。

#### duration

```
uint16_t NetworkBoost_MultiPathQuotaInfo::duration
```
 描述

配额时长信息，单位为s。
