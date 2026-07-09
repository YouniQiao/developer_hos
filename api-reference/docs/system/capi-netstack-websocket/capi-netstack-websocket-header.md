---
title: "WebSocket_Header"
upstream_id: "harmonyos-references/capi-netstack-websocket-header"
catalog: "harmonyos-references"
content_hash: "a39169d691a2"
synced_at: "2026-07-09T00:59:30.153174"
---

# WebSocket_Header

```
struct WebSocket_Header {...}
```

#### 概述

websocket客户端增加header的链表节点。

起始版本： 11

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_websocket_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char *fieldName | header的字段名。 |
| const char *fieldValue | header的字段内容。 |
| struct [WebSocket_Header](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-websocket-header) *next | header链表的next指针。 |
