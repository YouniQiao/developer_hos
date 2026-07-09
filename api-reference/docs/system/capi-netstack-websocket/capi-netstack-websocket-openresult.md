---
title: "WebSocket_OpenResult"
upstream_id: "harmonyos-references/capi-netstack-websocket-openresult"
catalog: "harmonyos-references"
content_hash: "07c8a368d7b8"
synced_at: "2026-07-09T00:59:29.953187"
---

# WebSocket_OpenResult

```
struct WebSocket_OpenResult {...}
```

#### 概述

websocket客户端来自服务端连接成功的参数。

起始版本： 11

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_websocket_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t code | websocket客户端连接成功码。 |
| const char *reason | websocket客户端连接成功原因。 |
