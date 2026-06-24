---
title: "network_boost.h"
upstream_id: "harmonyos-references/network-boost-c-files-boost"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:57.499296"
---

# network_boost.h

#### 概述

声明用于网络加速的API。提供基本的函数、结构体和const定义。

引用文件： <NetworkBoostKit/network_boost.h>

库： libnetwork_boost.so

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 6.0.2(22)

相关模块： [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

#### 汇总

#### 结构体

| 名称 | 描述 |
| --- | --- |
| struct [NetworkBoost_SceneDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-scene_desc) | 业务场景描述信息。 |

#### 枚举

| 名称 | 描述 |
| --- | --- |
| struct [NetworkBoost_SceneEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#networkboost_sceneevent){ NB_SCENE_EVENT_ENTER = 0, NB_SCENE_EVENT_UPDATE = 1, NB_SCENE_EVENT_LEAVE = 2 } | 业务事件枚举。 |

#### 函数

| 名称 | 描述 |
| --- | --- |
| int32_t [HMS_NetworkBoost_SetSceneDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#hms_networkboost_setscenedesc)([NetworkBoost_SceneDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-scene_desc) sceneDesc) | 设置业务场景。 |
