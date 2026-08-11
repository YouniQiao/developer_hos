---
title: "NetworkBoost_HandoverStart"
upstream_id: "harmonyos-references/network-boost-c-struct-handover_start"
catalog: "harmonyos-references"
content_hash: "3a254d6af410"
synced_at: "2026-08-11T16:02:46.109372"
---

# NetworkBoost_HandoverStart

#### 概述

连接迁移开始信息。该结构体用于配置连接迁移开始时的相关参数，通常系统发起多网迁移（Wi-Fi与蜂窝网络切换，主卡与副卡切换等）开始时使用，其主要作用是设置迁移过程中的超时时间和老链路的发包建议，以保证迁移过程的稳定性和效率。

起始版本： 5.1.0(18)

相关模块： [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

所在头文件： [network_boost_handover.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-handover)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [expires](#expires) | 连接迁移全流程的超时时间，单位为s，取值为任意正整数或者0。 |
| [NetworkBoost_DataSpeedAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-data_speed_action) [dataSpeedAction](#dataspeedaction) | 老链路的发包建议。 |

#### 结构体成员变量说明

#### [h2]dataSpeedAction

```
NetworkBoost_DataSpeedAction NetworkBoost_HandoverStart::dataSpeedAction
```
 描述

老链路的发包建议。

#### [h2]expires

```
uint32_t NetworkBoost_HandoverStart::expires
```
 描述

连接迁移全流程的超时时间，单位为s，取值为任意正整数或者0。
