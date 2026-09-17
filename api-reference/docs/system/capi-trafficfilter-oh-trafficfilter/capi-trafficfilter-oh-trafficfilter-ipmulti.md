---
title: "OH_TrafficFilter_IPMulti"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-ipmulti"
catalog: "harmonyos-references"
content_hash: "fd1641640085"
synced_at: "2026-09-17T18:53:11.602664"
---

# OH_TrafficFilter_IPMulti

```
typedef struct OH_TrafficFilter_IPMulti {...} OH_TrafficFilter_IPMulti
```

#### 概述

多IP匹配的IP匹配值。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t ipCount | 数组中的IP地址数量。 |
| [OH_TrafficFilter_IPAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-ipaddress) ips[OH_TRAFFICFILTER_MAX_MULTI_IP_COUNT] | IP地址数组。 |
