---
title: "Ethernet_MacAddressInfo"
upstream_id: "harmonyos-references/capi-netethernet-ethernet-macaddressinfo"
catalog: "harmonyos-references"
content_hash: "e6914460749e"
synced_at: "2026-07-28T16:50:47.602272"
---

# Ethernet_MacAddressInfo

```
typedef struct Ethernet_MacAddressInfo {...} Ethernet_MacAddressInfo
```

#### 概述

以太网网卡MAC地址信息。

起始版本： 26.0.0

相关模块： [NetEthernet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet)

所在头文件： [net_ethernet_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ethernet-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char ifaceName[ETHERNET_MAX_STR_LEN] | 以太网网卡名称。 |
| char macAddr[ETHERNET_MAX_STR_LEN] | 以太网网卡MAC地址。 |
