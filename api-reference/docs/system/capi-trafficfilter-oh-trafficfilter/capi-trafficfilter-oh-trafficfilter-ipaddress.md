---
title: "OH_TrafficFilter_IPAddress"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-ipaddress"
catalog: "harmonyos-references"
content_hash: "dcbdb27d4f8c"
synced_at: "2026-07-28T16:50:46.800760"
---

# OH_TrafficFilter_IPAddress

```
typedef struct OH_TrafficFilter_IPAddress {...} OH_TrafficFilter_IPAddress
```

#### 概述

二进制形式的IP地址，支持IPv4和IPv6。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_TrafficFilter_IPFamily](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_ipfamily) family | 地址族。若指定为OH_TRAFFICFILTER_IP_FAMILY_UNSPEC，默认使用IPv4。 **起始版本：** 26.0.0 |
| uint8_t addr[OH_TRAFFICFILTER_IP_ADDRLEN] | IP地址字节。字节必须以网络字节序存储。对于IPv4，[addr](#成员变量)[0]到[addr](#成员变量)[3]存储IPv4地址，[addr](#成员变量)[4]到[addr](#成员变量)[15]必须设置为0。对于IPv6，[addr](#成员变量)[0]到[addr](#成员变量)[15]存储IPv6地址。如果字节与[family](#成员变量)要求的地址布局不匹配，使用该结构的接口将返回[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode)。 **起始版本：** 26.0.0 |
