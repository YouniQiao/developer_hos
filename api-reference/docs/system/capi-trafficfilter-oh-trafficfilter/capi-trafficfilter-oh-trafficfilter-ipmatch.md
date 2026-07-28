---
title: "OH_TrafficFilter_IPMatch"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-ipmatch"
catalog: "harmonyos-references"
content_hash: "5eaacd5753d8"
synced_at: "2026-07-28T16:50:46.866205"
---

# OH_TrafficFilter_IPMatch

```
typedef struct OH_TrafficFilter_IPMatch {...} OH_TrafficFilter_IPMatch
```

#### 概述

IP匹配条件。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_TrafficFilter_IPMatchType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_ipmatchtype) type | 匹配类型。 **起始版本：** 26.0.0 |
| bool invert | 是否反转匹配结果。 **起始版本：** 26.0.0 |
| union | 匹配规则。 **起始版本：** 26.0.0 |
