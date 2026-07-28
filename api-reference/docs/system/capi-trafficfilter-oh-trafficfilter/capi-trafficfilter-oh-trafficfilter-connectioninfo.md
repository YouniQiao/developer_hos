---
title: "OH_TrafficFilter_ConnectionInfo"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-connectioninfo"
catalog: "harmonyos-references"
content_hash: "57a32b2f1d51"
synced_at: "2026-07-28T16:50:47.239574"
---

# OH_TrafficFilter_ConnectionInfo

```
typedef struct OH_TrafficFilter_ConnectionInfo {...} OH_TrafficFilter_ConnectionInfo
```

#### 概述

连接信息结构体。描述一条网络连接的五元组信息（源IP、目的IP、源端口、目的端口、协议类型），用于查询发起该连接的进程信息。

初始化规则：调用[OH_TrafficFilter_QueryProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_queryprocess)之前，调用者必须将该结构体清零（例如使用memset），然后将[size](#成员变量)设置为调用者分配的结构体实际大小，通常为sizeof(OH_TrafficFilter_ConnectionInfo)。

二进制兼容规则（ABI，即应用程序二进制接口，保证新旧版本编译的代码能互相识别结构体布局）：系统通过[size](#成员变量)来确定哪些字段可以被安全读取。如果[size](#成员变量)小于当前接口所需的最小大小，接口将返回[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode)。如果[size](#成员变量)大于系统已知的大小，多余的字段将被忽略。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t size | 调用者分配的结构体实际大小。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_IPAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-ipaddress) srcIp | 源IP地址，支持IPv4和IPv6。 **起始版本：** 26.0.0 |
| uint16_t srcPort | 源端口。0表示任意源端口。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_IPAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-ipaddress) dstIp | 目的IP地址，支持IPv4和IPv6，需要与源IP地址的地址族相同。 **起始版本：** 26.0.0 |
| uint16_t dstPort | 目的端口。0表示任意目的端口。 **起始版本：** 26.0.0 |
| uint8_t protocol | 协议类型。支持的取值：- OH_TRAFFICFILTER_PROTO_TCP (6)- OH_TRAFFICFILTER_PROTO_UDP (17) **起始版本：** 26.0.0 |
