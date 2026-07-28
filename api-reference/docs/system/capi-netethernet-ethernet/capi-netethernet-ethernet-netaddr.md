---
title: "Ethernet_NetAddr"
upstream_id: "harmonyos-references/capi-netethernet-ethernet-netaddr"
catalog: "harmonyos-references"
content_hash: "ea3069680063"
synced_at: "2026-07-28T16:50:47.612560"
---

# Ethernet_NetAddr

```
typedef struct Ethernet_NetAddr {...} Ethernet_NetAddr
```

#### 概述

网络地址。

起始版本： 26.0.0

相关模块： [NetEthernet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet)

所在头文件： [net_ethernet_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ethernet-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t family | 网络地址族。IPv4 = 1，IPv6 = 2。 |
| uint8_t prefixlen | 前缀长度。 |
| uint16_t port | 端口号。 |
| char address[ETHERNET_MAX_STR_LEN] | IP地址。 |
