---
title: "Rcp_OnGetDataCallback"
upstream_id: "harmonyos-references/_rcp___on_get_data_callback"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:02.713218"
---

# Rcp_OnGetDataCallback

#### 概述

获取数据的回调。可以通过[HMS_Rcp_SetRequestGetDataCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#hms_rcp_setrequestgetdatacallback)为请求设置相应回调函数。

起始版本： 26.0.0

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp_GetDataCallbackFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_ongetdatacallback) [callback](#callback) | 请求过程中获取数据的回调函数。 |
| void *[userObject](#userobject) | 用户定义的对象，在回调函数中使用。 |

#### 结构体成员变量说明

#### [h2]callback

```
Rcp_GetDataCallbackFunc Rcp_OnGetDataCallback::callback
```
 描述

获取数据的回调函数。

#### [h2]userObject

```
void* Rcp_OnGetDataCallback::userObject
```
 描述

用户定义的对象，在回调函数中使用。
