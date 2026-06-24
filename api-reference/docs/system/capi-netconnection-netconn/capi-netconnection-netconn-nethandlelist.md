---
title: "NetConn_NetHandleList"
upstream_id: "harmonyos-references/capi-netconnection-netconn-nethandlelist"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:54.292575"
---

# NetConn_NetHandleList

```
typedef struct NetConn_NetHandleList {...} NetConn_NetHandleList
```

#### 概述

网络列表。

起始版本： 11

相关模块： [NetConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection)

所在头文件： [net_connection_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [NetConn_NetHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection-netconn-nethandle) netHandles[[NETCONN_MAX_NET_SIZE]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) | netHandle列表。 |
| int32_t netHandleListSize | netHandleList的实际大小。 |
