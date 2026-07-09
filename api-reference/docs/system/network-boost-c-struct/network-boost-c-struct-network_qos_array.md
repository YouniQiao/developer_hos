---
title: "NetworkBoost_NetworkQosArray"
upstream_id: "harmonyos-references/network-boost-c-struct-network_qos_array"
catalog: "harmonyos-references"
content_hash: "5f962f4e9b8f"
synced_at: "2026-07-09T00:59:32.639746"
---

# NetworkBoost_NetworkQosArray

#### 概述

网络质量变化的详细信息。

起始版本： 5.1.0(18)

相关模块： [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

所在头文件： [network_boost_quality.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-quality)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [pathNum](#pathnum) | 网络质量信息中的路径数量，取值范围 [1, 4]。 |
| [NetworkBoost_NetworkQos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-network_qos) [networkQos](#networkqos) [[NETBOOST_MAX_PATH_NUM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#netboost_max_path_num)] | 多条路径的网络质量信息，每一项为一条路径的网络质量信息，取值范围 [0, pathNum-1]。 |

#### 结构体成员变量说明

#### [h2]networkQos

```
NetworkBoost_NetworkQos NetworkBoost_NetworkQosArray::networkQos[NETBOOST_MAX_PATH_NUM]
```
 描述

多条路径的网络质量信息，每一项为一条路径的网络质量信息，取值范围 [0, pathNum-1]。

#### [h2]pathNum

```
uint32_t NetworkBoost_NetworkQosArray::pathNum
```
 描述

网络质量信息中的路径数量，取值范围 [1, 4]。
