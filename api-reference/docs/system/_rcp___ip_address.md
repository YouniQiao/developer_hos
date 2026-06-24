---
title: "Rcp_IpAddress"
upstream_id: "harmonyos-references/_rcp___ip_address"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:00.784825"
---

# Rcp_IpAddress

#### 概述

指定静态DNS规则使用的IP地址组。用于[Rcp_StaticDnsRuleItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___static_dns_rule_item)。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char [ipAddress](#ipaddress) [[RCP_IP_MAX_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_ip_max_len)] | IP地址。 |
| struct [Rcp_IpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_address) * [next](#next) | 链式存储。指向下一个[Rcp_IpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_address)。 |

#### 结构体成员变量说明

#### [h2]ipAddress

```
char Rcp_IpAddress::ipAddress[RCP_IP_MAX_LEN]
```
 描述

ip地址。

#### [h2]next

```
struct Rcp_IpAddress* Rcp_IpAddress::next
```
 描述

链式存储。指向下一个[Rcp_IpAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___ip_address)。
