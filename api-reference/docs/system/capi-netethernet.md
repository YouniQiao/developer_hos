---
title: "NetEthernet"
upstream_id: "harmonyos-references/capi-netethernet"
catalog: "harmonyos-references"
content_hash: "401a47caf45b"
synced_at: "2026-07-28T16:50:43.989223"
---

# NetEthernet

#### 概述

该模块主要用于获取设备上所有以太网网卡的MAC地址列表和IP地址列表，适用于需要获取有线网络连接信息的场景。

以太网网卡是指设备上的有线网络接口，每个以太网网卡都有唯一的MAC地址（物理地址）和可能配置的IP地址。MAC地址用于在网络中唯一标识网络设备，IP地址用于网络通信。

使用方法：调用OH_Ethernet_GetMacAddress获取以太网网卡的MAC地址列表，调用OH_Ethernet_GetNetAddress获取以太网网卡的IP地址列表。返回的数据结构中包含接口名称和对应的地址信息。

起始版本： 26.0.0

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [net_ethernet.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ethernet-h) | 为以太网网卡模块提供C接口。 |
| [net_ethernet_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ethernet-type-h) | 为以太网网卡模块C接口定义数据结构。 |
