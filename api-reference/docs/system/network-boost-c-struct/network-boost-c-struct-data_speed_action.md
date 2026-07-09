---
title: "NetworkBoost_DataSpeedAction"
upstream_id: "harmonyos-references/network-boost-c-struct-data_speed_action"
catalog: "harmonyos-references"
content_hash: "31e92c5672da"
synced_at: "2026-07-09T00:59:32.418817"
---

# NetworkBoost_DataSpeedAction

#### 概述

发包速率建议。

起始版本： 5.1.0(18)

相关模块： [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

所在头文件： [network_boost_handover.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-handover)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [NetworkBoost_DataSpeedSimpleAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#networkboost_dataspeedsimpleaction-1) [dataSpeedSimpleAction](#dataspeedsimpleaction) | 应用发包策略的简单建议。 |
| uint64_t [linkUpBandwidth](#linkupbandwidth) | 上行带宽，单位为bps。 |
| uint64_t [linkDownBandwidth](#linkdownbandwidth) | 下行带宽，单位为bps。 |

#### 结构体成员变量说明

#### [h2]dataSpeedSimpleAction

```
NetworkBoost_DataSpeedSimpleAction NetworkBoost_DataSpeedAction::dataSpeedSimpleAction
```
 描述

应用发包策略的简单建议。

#### [h2]linkDownBandwidth

```
uint64_t NetworkBoost_DataSpeedAction::linkDownBandwidth
```
 描述

下行带宽。

#### [h2]linkUpBandwidth

```
uint64_t NetworkBoost_DataSpeedAction::linkUpBandwidth
```
 描述

上行带宽。
