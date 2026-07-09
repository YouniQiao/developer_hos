---
title: "NetConn_NetAddr"
upstream_id: "harmonyos-references/capi-netconnection-netconn-netaddr"
catalog: "harmonyos-references"
content_hash: "f7091028b89e"
synced_at: "2026-07-09T00:59:29.243022"
---

# NetConn_NetAddr

```
typedef struct NetConn_NetAddr {...} NetConn_NetAddr
```

#### 概述

网络地址。

起始版本： 11

相关模块： [NetConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netconnection)

所在头文件： [net_connection_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t family | 网络地址族。 |
| uint8_t prefixlen | 前缀长度。 |
| uint8_t port | 端口号。 |
| char address[[NETCONN_MAX_STR_LEN]](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h#宏定义) | 地址。 |
