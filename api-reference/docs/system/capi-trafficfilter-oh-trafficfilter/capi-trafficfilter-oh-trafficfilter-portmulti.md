---
title: "OH_TrafficFilter_PortMulti"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-portmulti"
catalog: "harmonyos-references"
content_hash: "fb380d61eba3"
synced_at: "2026-07-28T16:50:47.137120"
---

# OH_TrafficFilter_PortMulti

```
typedef struct OH_TrafficFilter_PortMulti {...} OH_TrafficFilter_PortMulti
```

#### 概述

多端口匹配的端口匹配值。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t portCount | 数组中的端口数量。 **起始版本：** 26.0.0 |
| uint16_t ports[OH_TRAFFICFILTER_MAX_MULTI_PORT_COUNT] | 端口数组。 **起始版本：** 26.0.0 |
