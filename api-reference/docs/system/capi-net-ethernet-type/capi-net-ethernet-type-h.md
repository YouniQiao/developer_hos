---
title: "net_ethernet_type.h"
upstream_id: "harmonyos-references/capi-net-ethernet-type-h"
catalog: "harmonyos-references"
content_hash: "80d8c4b5217e"
synced_at: "2026-08-29T18:16:44.831427"
---

# net_ethernet_type.h

#### 概述

为以太网网卡模块C接口定义数据结构。

引用文件： <network/netmanager_ext/net_ethernet_type.h>

库： libnet_ethernet.so

系统能力： SystemCapability.Communication.NetManager.Ethernet

起始版本： 26.0.0

相关模块： [NetEthernet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [Ethernet_MacAddressInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-macaddressinfo) | Ethernet_MacAddressInfo | 以太网网卡MAC地址信息。 |
| [Ethernet_MacAddrInfoList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-macaddrinfolist) | Ethernet_MacAddrInfoList | 以太网网卡MAC地址信息列表。 |
| [Ethernet_NetAddr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-netaddr) | Ethernet_NetAddr | 网络地址。 |
| [Ethernet_NetAddrInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-netaddrinfo) | Ethernet_NetAddrInfo | 以太网网卡网络地址信息，包含以太网网卡名称及网络地址信息。 |
| [Ethernet_NetAddrList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-netaddrlist) | Ethernet_NetAddrList | 以太网网卡网络地址列表。 |

#### [h2]宏定义

| 名称 | 描述 |
| --- | --- |
| ETHERNET_MAX_NET_SIZE 32 | 以太网网卡最大连接数量。 **起始版本：** 26.0.0 |
| ETHERNET_MAX_STR_LEN 256 | 以太网网卡MAC地址、IP地址最大长度。 **起始版本：** 26.0.0 |
