---
title: "OH_QoS_GewuSubmitRequestResult"
upstream_id: "harmonyos-references/capi-qos-oh-qos-gewusubmitrequestresult"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:25.879210"
---

# OH_QoS_GewuSubmitRequestResult

```
typedef struct { ... } OH_QoS_GewuSubmitRequestResult
```

#### 概述

OH_QoS_GewuSubmitRequest()接口的返回结果，成功时返回请求的 request，失败时 error 会置为对应的错误码 。

起始版本： 20

相关模块： [QoS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos)

所在头文件： [qos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| OH_QoS_GewuRequest request | 创建出来的请求句柄 |
| [OH_QoS_GewuErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos-h#oh_qos_gewuerrorcode) error | 错误码。- 请求提交成功返回OH_QOS_GEWU_OK。- 由于没有足够的内存而创建会话失败返回OH_QOS_GEWU_NOMEM。 |
