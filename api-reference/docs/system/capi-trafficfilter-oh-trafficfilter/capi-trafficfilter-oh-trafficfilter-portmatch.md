---
title: "OH_TrafficFilter_PortMatch"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-portmatch"
catalog: "harmonyos-references"
content_hash: "cc978a57ba81"
synced_at: "2026-09-04T18:12:06.107497"
---

# OH_TrafficFilter_PortMatch

```
typedef struct OH_TrafficFilter_PortMatch {...} OH_TrafficFilter_PortMatch
```

#### 概述

端口匹配条件。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_TrafficFilter_PortMatchType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_portmatchtype) type | 匹配类型。 **起始版本：** 26.0.0 |
| bool invert | 是否反转匹配结果。true表示反转匹配结果，false表示不反转匹配结果。 **起始版本：** 26.0.0 |
| union | 匹配规则。 **起始版本：** 26.0.0 |
