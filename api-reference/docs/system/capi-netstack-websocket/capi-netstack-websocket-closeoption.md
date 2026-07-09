---
title: "WebSocket_CloseOption"
upstream_id: "harmonyos-references/capi-netstack-websocket-closeoption"
catalog: "harmonyos-references"
content_hash: "67cf5474cf02"
synced_at: "2026-07-09T00:59:29.943391"
---

# WebSocket_CloseOption

```
struct WebSocket_CloseOption {...}
```

#### 概述

websocket客户端主动关闭的参数。

起始版本： 11

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_websocket_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t code | 错误值。 |
| const char *reason | 错误原因。 |
