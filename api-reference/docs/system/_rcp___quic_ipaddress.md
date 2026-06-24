---
title: "Rcp_QuicIpAddress"
upstream_id: "harmonyos-references/_rcp___quic_ipaddress"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:03.005708"
---

# Rcp_QuicIpAddress

#### 概述

用于存储IP地址的数据结构。

起始版本： 26.0.0

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp_quic.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_quic_h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char [ip](#ip) [[RCP_QUIC_IP_MAX_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_quic_ip_max_len)] | 用于存储IP地址。长度不超过40字节。 |

#### 结构体成员变量说明

#### [h2]ip

```
char Rcp_QuicIpAddress::ip[RCP_QUIC_IP_MAX_LEN]
```
 描述

用于存储IP地址。长度不超过40字节。
