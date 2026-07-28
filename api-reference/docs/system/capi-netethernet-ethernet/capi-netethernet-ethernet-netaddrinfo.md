---
title: "Ethernet_NetAddrInfo"
upstream_id: "harmonyos-references/capi-netethernet-ethernet-netaddrinfo"
catalog: "harmonyos-references"
content_hash: "3b103af4cf50"
synced_at: "2026-07-28T16:50:47.635636"
---

# Ethernet_NetAddrInfo

```
typedef struct Ethernet_NetAddrInfo {...} Ethernet_NetAddrInfo
```

#### 概述

以太网网卡网络地址信息，包含以太网网卡名称及网络地址信息。

起始版本： 26.0.0

相关模块： [NetEthernet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet)

所在头文件： [net_ethernet_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ethernet-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char ifaceName[ETHERNET_MAX_STR_LEN] | 以太网网卡名称 |
| [Ethernet_NetAddr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-netaddr) netAddrInfo[ETHERNET_MAX_NET_SIZE] | 网络地址。 |
| int32_t netAddrInfoSize | 网络地址数组的实际大小。 |
