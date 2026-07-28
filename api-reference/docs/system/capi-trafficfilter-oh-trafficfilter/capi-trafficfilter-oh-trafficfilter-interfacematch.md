---
title: "OH_TrafficFilter_InterfaceMatch"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-interfacematch"
catalog: "harmonyos-references"
content_hash: "c5de5741215b"
synced_at: "2026-07-28T16:50:46.876178"
---

# OH_TrafficFilter_InterfaceMatch

```
typedef struct OH_TrafficFilter_InterfaceMatch {...} OH_TrafficFilter_InterfaceMatch
```

#### 概述

接口匹配条件。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool enabled | 是否启用接口匹配，true表示启用接口匹配，false表示不启用接口匹配。 **起始版本：** 26.0.0 |
| bool invert | 是否反转匹配结果，true表示反转匹配结果，false表示不反转匹配结果。 **起始版本：** 26.0.0 |
| bool isPrefix | 接口名称是否按前缀匹配，true表示按前缀匹配，false表示不按前缀匹配。 **起始版本：** 26.0.0 |
| char ifName[OH_TRAFFICFILTER_IFNAMSIZ] | 接口名称。字符串必须使用UTF-8编码且以NULL结尾。该缓冲区容量为[OH_TRAFFICFILTER_IFNAMSIZ](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#宏定义)字节，包含结尾的NULL字符。因此接口名称最大长度为[OH_TRAFFICFILTER_IFNAMSIZ](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#宏定义) - 1字节，不包含结尾的NULL字符。如果[enabled](#成员变量)为true，该字符串不能为空。如果该字符串在[OH_TRAFFICFILTER_IFNAMSIZ](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#宏定义)字节内未以NULL结尾，或其长度超过[OH_TRAFFICFILTER_IFNAMSIZ](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#宏定义) - 1字节，使用该结构的接口将返回[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode)。如果[enabled](#成员变量)为false，该字段将被忽略。建议在禁用接口匹配时将该缓冲区全部置零。 **起始版本：** 26.0.0 |
