---
title: "OH_TrafficFilter_ProcessInfo"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-processinfo"
catalog: "harmonyos-references"
content_hash: "e993d83825c3"
synced_at: "2026-07-28T16:50:47.226397"
---

# OH_TrafficFilter_ProcessInfo

```
typedef struct OH_TrafficFilter_ProcessInfo {...} OH_TrafficFilter_ProcessInfo
```

#### 概述

进程信息结构体。存储[OH_TrafficFilter_QueryProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_queryprocess)返回的进程信息。

初始化规则：调用[OH_TrafficFilter_QueryProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_queryprocess)之前，调用者必须将该结构体清零（例如使用memset），然后将[size](#成员变量)设置为调用者分配的结构体实际大小，通常为sizeof(OH_TrafficFilter_ProcessInfo)。

二进制兼容规则（ABI，即应用程序二进制接口，保证新旧版本编译的代码能互相识别结构体布局）：系统通过[size](#成员变量)来确定哪些输出字段可以被安全写入。只有被[size](#成员变量)完全覆盖的字段才会被系统写入。如果[size](#成员变量)小于读取[size](#成员变量)字段本身所需的最小大小，接口将返回[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode)。如果[size](#成员变量)大于系统已知的大小，多余的字段将被忽略。

输出有效性规则：当[OH_TrafficFilter_QueryProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_queryprocess)返回[OH_TRAFFICFILTER_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode)时，被[size](#成员变量)覆盖的字段包含有效的输出值。当接口返回错误时，调用者不应依赖[size](#成员变量)以外的输出字段的值。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t size | 调用者分配的结构体实际大小。 **起始版本：** 26.0.0 |
| uint32_t pid | 进程ID。 **起始版本：** 26.0.0 |
| uint32_t uid | 应用UID。 **起始版本：** 26.0.0 |
