---
title: "OH_IPC_MessageOption"
upstream_id: "harmonyos-references/capi-ohipcremoteobject-oh-ipc-messageoption"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:21.744646"
---

# OH_IPC_MessageOption

```
typedef struct {...} OH_IPC_MessageOption
```

#### 概述

IPC消息选项定义。

起始版本： 12

相关模块： [OHIPCRemoteObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohipcremoteobject)

所在头文件： [ipc_cremote_object.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ipc-cremote-object-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_IPC_RequestMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ipc-cremote-object-h#oh_ipc_requestmode) mode | 消息请求模式。 |
| uint32_t timeout | RPC预留参数，该参数对IPC无效。 |
| void* reserved | 保留参数，必须为空 |
