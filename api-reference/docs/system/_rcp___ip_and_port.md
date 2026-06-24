---
title: "Rcp_IpAndPort"
upstream_id: "harmonyos-references/_rcp___ip_and_port"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:00.795623"
---

# Rcp_IpAndPort

#### 概述

该接口用在[Rcp_DnsServers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___dns_servers)中，表示一个DNS服务器的地址和端口。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char [ip](#ip) [[RCP_IP_MAX_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_ip_max_len)] | IPv4或IPv6地址。 |
| uint16_t [port](#port) | 表示端口。取值范围：[0, 65535]。 |

#### 结构体成员变量说明

#### [h2]ip

```
char Rcp_IpAndPort::ip[RCP_IP_MAX_LEN]
```
 描述

IPv4或IPv6地址。

#### [h2]port

```
uint16_t Rcp_IpAndPort::port
```
 描述

表示端口。取值范围：[0, 65535]。
