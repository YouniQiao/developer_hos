---
title: "WebSocket_ErrorResult"
upstream_id: "harmonyos-references/capi-netstack-websocket-errorresult"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:54.915687"
---

# WebSocket_ErrorResult

```
struct WebSocket_ErrorResult {...}
```

#### 概述

websocket客户端来自服务端连接错误的参数。

起始版本： 11

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_websocket_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t errorCode | 错误码。 |
| const char *errorMessage | 错误的消息。 |
