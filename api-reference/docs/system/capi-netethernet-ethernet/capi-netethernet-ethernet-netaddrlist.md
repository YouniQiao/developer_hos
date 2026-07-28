---
title: "Ethernet_NetAddrList"
upstream_id: "harmonyos-references/capi-netethernet-ethernet-netaddrlist"
catalog: "harmonyos-references"
content_hash: "893da796383a"
synced_at: "2026-07-28T16:50:47.821622"
---

# Ethernet_NetAddrList

```
typedef struct Ethernet_NetAddrList {...} Ethernet_NetAddrList
```

#### 概述

以太网网卡网络地址列表。

起始版本： 26.0.0

相关模块： [NetEthernet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet)

所在头文件： [net_ethernet_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ethernet-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Ethernet_NetAddrInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-netaddrinfo) netAddrList[ETHERNET_MAX_NET_SIZE] | 以太网网络地址列表。 |
| int32_t netAddrListSize | netAddrList的实际大小。 |
