---
title: "NetConn_TraceRouteInfo"
upstream_id: "harmonyos-references/capi-netconnection-netconn-tracerouteinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:54.425214"
---

# NetConn_TraceRouteInfo

```
typedef struct NetConn_TraceRouteInfo {...} NetConn_TraceRouteInfo
```

#### 概述

定义跟踪路由信息。

起始版本： 20

相关模块： [NetConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection)

所在头文件： [net_connection_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t jumpNo | 跳数。 |
| char address[[NETCONN_MAX_STR_LEN]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) | 主机名或地址。 |
| uint32_t rtt[[NETCONN_MAX_RTT_NUM]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) | 往返时间（单位：毫秒)，包含最大、最小、平均、标准差。 |
