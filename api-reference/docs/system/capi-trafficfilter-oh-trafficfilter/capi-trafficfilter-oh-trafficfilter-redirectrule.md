---
title: "OH_TrafficFilter_RedirectRule"
upstream_id: "harmonyos-references/capi-trafficfilter-oh-trafficfilter-redirectrule"
catalog: "harmonyos-references"
content_hash: "65aa46b6ed0d"
synced_at: "2026-07-28T16:50:47.249540"
---

# OH_TrafficFilter_RedirectRule

```
typedef struct OH_TrafficFilter_RedirectRule {...} OH_TrafficFilter_RedirectRule
```

#### 概述

流量重定向规则。定义TCP流量重定向规则，将匹配的流量重定向到指定的代理服务器。

初始化规则：调用[OH_TrafficFilter_AddRedirectRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_addredirectrule)之前，调用者必须将该结构体清零（例如使用memset），然后将[size](#成员变量)设置为调用者分配的结构体实际大小，通常为sizeof(OH_TrafficFilter_RedirectRule)。

二进制兼容规则（ABI，即应用程序二进制接口，保证新旧版本编译的代码能互相识别结构体布局）：系统通过[size](#成员变量)来确定哪些字段可以被安全读取。如果[size](#成员变量)小于当前接口所需的最小大小，接口将返回[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode)。如果[size](#成员变量)大于系统已知的大小，多余的字段将被忽略。

失败规则：如果[OH_TrafficFilter_AddRedirectRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_addredirectrule)返回错误，不保证规则已被添加或生效。调用者应在假设规则生效之前检查返回值。

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

所在头文件： [net_trafficfilter_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t size | 调用者分配的结构体实际大小。 **起始版本：** 26.0.0 |
| uint32_t priority | 优先级（数值越小优先级越高，规则与报文过滤器相同）。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_HookPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_hookpoint) hookPoint | 钩子点，指定规则在网络协议栈中生效的位置（仅支持PREROUTING和OUTPUT），参见[OH_TrafficFilter_HookPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_hookpoint)。 **起始版本：** 26.0.0 |
| uint8_t protocol | 协议（固定为TCP=6）。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_IPMatch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-ipmatch) srcIp | 源IP匹配条件。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_PortMatch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-portmatch) srcPort | 源端口匹配条件。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_IPMatch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-ipmatch) dstIp | 目的IP匹配条件。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_PortMatch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-portmatch) dstPort | 目的端口匹配条件。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_InterfaceMatch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-interfacematch) inInterface | 入接口匹配条件。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_InterfaceMatch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-interfacematch) outInterface | 出接口匹配条件。 **起始版本：** 26.0.0 |
| uint32_t uidStart | 应用UID范围起始值，取值范围为[0，UINT32_MAX]（UINT32_MAX表示任意UID）。 **起始版本：** 26.0.0 |
| uint32_t uidEnd | 应用UID范围结束值，取值范围为[0，UINT32_MAX]（UINT32_MAX表示任意UID），通常需大于等于uidStart（应用UID范围起始值）。 **起始版本：** 26.0.0 |
| [OH_TrafficFilter_IPAddress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-ipaddress) proxyIp | 代理服务器IP地址（支持IPv4和IPv6）。 **起始版本：** 26.0.0 |
| uint16_t proxyPort | 代理服务器端口。 **起始版本：** 26.0.0 |
