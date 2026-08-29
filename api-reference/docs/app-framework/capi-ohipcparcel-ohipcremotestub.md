---
title: "OHIPCRemoteStub"
upstream_id: "harmonyos-references/capi-ohipcparcel-ohipcremotestub"
catalog: "harmonyos-references"
content_hash: "ed2fe60d819d"
synced_at: "2026-08-29T18:16:15.676180"
---

# OHIPCRemoteStub

```
typedef struct OHIPCRemoteStub OHIPCRemoteStub;
```

#### 概述

IPC远端服务对象。该结构体用于在服务端表示一个远端服务，作为IPC通信中服务端的服务代理，用于处理客户端的请求并实现跨进程通信。OHIPCRemoteStub是IPC Kit提供的核心结构体，使用OHIPCRemoteStub可以简化IPC服务开发流程，提供统一的请求处理机制，帮助开发者快速实现跨进程通信能力。

系统能力： SystemCapability.Communication.IPC.Core

起始版本： 12

相关模块：[OHIPCParcel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohipcparcel)

所在头文件： [ipc_cparcel.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ipc-cparcel-h)
