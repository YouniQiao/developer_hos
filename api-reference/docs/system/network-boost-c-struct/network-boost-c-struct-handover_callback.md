---
title: "HMS_NetworkBoost_HandoverCallback"
upstream_id: "harmonyos-references/network-boost-c-struct-handover_callback"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:57.747582"
---

# HMS_NetworkBoost_HandoverCallback

#### 概述

回调函数，返回连接迁移开始和完成的详细信息。

起始版本： 5.1.0(18)

相关模块： [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

所在头文件： [network_boost_handover.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-handover)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [HMS_NetworkBoost_OnHandoverStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#hms_networkboost_onhandoverstart) [onNetworkHandoverStart](#onnetworkhandoverstart) | 连接迁移开始的回调。 |
| [HMS_NetworkBoost_OnHandoverComplete](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#hms_networkboost_onhandovercomplete) [onNetworkHandoverComplete](#onnetworkhandovercomplete) | 连接迁移结束的回调。 |

#### 结构体成员变量说明

#### [h2]onNetworkHandoverStart

```
HMS_NetworkBoost_OnHandoverStart HMS_NetworkBoost_HandoverCallback::onNetworkHandoverStart
```
 描述

连接迁移开始的回调。

#### [h2]onNetworkHandoverComplete

```
HMS_NetworkBoost_OnHandoverComplete HMS_NetworkBoost_HandoverCallback::onNetworkHandoverComplete
```
 描述

连接迁移结束的回调。
