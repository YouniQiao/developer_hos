---
title: "Ethernet_MacAddrInfoList"
upstream_id: "harmonyos-references/capi-netethernet-ethernet-macaddrinfolist"
catalog: "harmonyos-references"
content_hash: "bb307f7b6784"
synced_at: "2026-07-28T16:50:47.607566"
---

# Ethernet_MacAddrInfoList

```
typedef struct Ethernet_MacAddrInfoList {...} Ethernet_MacAddrInfoList
```

#### 概述

以太网网卡MAC地址信息列表。

起始版本： 26.0.0

相关模块： [NetEthernet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet)

所在头文件： [net_ethernet_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ethernet-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Ethernet_MacAddressInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-macaddressinfo) macInfoList[ETHERNET_MAX_NET_SIZE] | 以太网网卡MAC地址列表。 |
| int32_t macInfoListSize | macInfoList数组的实际大小。 |
