---
title: "NetworkBoost_SceneDesc"
upstream_id: "harmonyos-references/network-boost-c-struct-scene_desc"
catalog: "harmonyos-references"
content_hash: "fb72a3a94425"
synced_at: "2026-07-09T00:59:32.986511"
---

# NetworkBoost_SceneDesc

#### 概述

业务场景描述信息。

起始版本： 6.0.2(22)

相关模块： [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

所在头文件： [network_boost.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-boost)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [NetworkBoost_ServiceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#networkboost_servicetype) [scene](#scene) | 表示业务场景类型。 |
| [NetworkBoost_SceneEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#networkboost_sceneevent) [sceneEvent](#sceneevent) | 表示业务场景事件。 |
| uint32_t [startTime](#starttime) | 表示要经过多长时间进入到sceneEvent事件，单位为s。 - 0表示立即发生sceneEvent事件，默认为0。 - 大于0表示预测未来多长时间进入sceneEvent事件。 |
| uint32_t [duration](#duration) | 预计本次设置的业务场景会持续的时长，单位为s。0表示持续时长未知，以SceneEvent的离开事件表示终止。开发者可以依据实际的场景类型进行选填。 例如：应用即将在10s后进入秒杀场景，预计持续20s。scene可以传入'seckillService'类型，sceneEvent填写SCENE_EVENT_ENTER，startTime可填写10，duration填写20。 |

#### 结构体成员变量说明

#### scene

```
NetworkBoost_ServiceType NetworkBoost_SceneDesc::scene
```
 描述

表示业务场景类型。

#### sceneEvent

```
NetworkBoost_SceneEvent NetworkBoost_SceneDesc::sceneEvent
```
 描述

表示业务场景事件。

#### startTime

```
uint32_t NetworkBoost_SceneDesc::startTime
```
 描述

表示要经过多长时间进入到sceneEvent事件，单位为s。

#### duration

```
uint32_t NetworkBoost_SceneDesc::duration
```
 描述

预计本次设置的业务场景会持续的时长，单位为s。
