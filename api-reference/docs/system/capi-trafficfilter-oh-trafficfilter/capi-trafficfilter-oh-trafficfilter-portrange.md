---
title: "OH_TrafficFilter_PortRange"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-portrange"
catalog: "harmonyos-references"
content_hash: "a5dfe319a53e"
synced_at: "2026-07-28T16:50:46.923178"
---

# OH_TrafficFilter_PortRange

```
typedef struct OH_TrafficFilter_PortRange {...} OH_TrafficFilter_PortRange
```

#### 概述

范围匹配的端口匹配值。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint16_t startPort | 范围的起始端口。 **起始版本：** 26.0.0 |
| uint16_t endPort | 范围的结束端口。 **起始版本：** 26.0.0 |
