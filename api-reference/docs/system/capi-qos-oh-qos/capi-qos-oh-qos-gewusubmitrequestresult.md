---
title: "OH_QoS_GewuSubmitRequestResult"
upstream_id: "harmonyos-references/capi-qos-oh-qos-gewusubmitrequestresult"
catalog: "harmonyos-references"
content_hash: "5507a82a9244"
synced_at: "2026-07-28T16:51:11.672277"
---

# OH_QoS_GewuSubmitRequestResult

```
typedef struct { ... } OH_QoS_GewuSubmitRequestResult
```

#### 概述

OH_QoS_GewuSubmitRequest()接口的返回结果，用于获取格物服务（Gewu service，端侧AI推理加速服务）推理请求的提交状态和结果。请求提交成功时，request字段包含创建的请求句柄，可用于后续中止该请求；失败时，error字段保存错误码，便于开发者根据具体错误原因进行处理。该结构体适用于提交端侧AI推理请求后判断请求是否成功进入会话并获取请求句柄的场景。

起始版本： 20

相关模块： [QoS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos)

所在头文件： [qos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| request | [OH_QoS_GewuRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos-h#oh_qos_gewurequest) | 请求提交成功后创建的请求句柄，可用于后续中止该请求。仅在error为OH_QOS_GEWU_OK时有效，失败时该字段无效。 |
| error | [OH_QoS_GewuErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-qos-h#oh_qos_gewuerrorcode) | 错误码。 - OH_QOS_GEWU_OK：请求提交成功。 - OH_QOS_GEWU_NOMEM：内存不足，表示没有足够的内存处理该请求，建议释放资源后重试。 - OH_QOS_GEWU_INVAL：参数错误，表示传入的会话句柄、请求内容或回调等参数无效，请检查参数类型、格式和取值。 - OH_QOS_GEWU_NOENT：找不到会话，表示指定的会话不存在或已被销毁，请确认会话是否已成功创建且仍然有效。 - OH_QOS_GEWU_NOPERM：权限不足，表示调用者缺少接口所需权限，请检查应用权限配置。 - OH_QOS_GEWU_NOSYS：找不到子系统，表示系统不支持相关功能或依赖子系统不可用，请确认系统版本和依赖库状态。 上述枚举值与数字的对应关系：OH_QOS_GEWU_OK=0、OH_QOS_GEWU_NOPERM=201、OH_QOS_GEWU_NOMEM=203、OH_QOS_GEWU_INVAL=401、OH_QOS_GEWU_NOENT=502、OH_QOS_GEWU_NOSYS=801。 |
