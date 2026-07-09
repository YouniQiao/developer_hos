---
title: "ArkTS组件错误码"
upstream_id: "harmonyos-references/errorcode-scenario-fusion"
catalog: "harmonyos-references"
content_hash: "990f7ca1a8cd"
synced_at: "2026-07-09T01:01:39.145151"
---

# ArkTS组件错误码

ArkTS组件错误码由通用错误码、语言基础类库错误码、依赖kit错误码和特有错误码组成。

[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)

[Map Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-map)

[Ability Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ability-arkts-errcode)

[Account Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-account-kit)

[Live View Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-error-code)

[Push Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-error-code)

[语言基础类库错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-utils)

[REST API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-server-error-code)

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码。

#### 10004 系统内部异常

错误信息

Internal error.

错误描述

系统内部异常。

可能原因

系统内部异常。

处理步骤

检查是否是网络问题，如果是服务动态授权码Button报错，查看是否对子场景进行了邮件申请，详见[参考文档](https://developer.huawei.com/consumer/cn/doc/atomic-guides/push-as-timeline#section18702113217305)。

#### 10006 获取分享数据失败

错误信息

Failed to get data.

错误描述

获取分享数据失败。

可能原因

系统内部异常。

处理步骤

检查网络环境，如非网络环境影响需要结合具体日志分析。

#### 10008 调用方非元服务

错误信息

Not atomic service.

错误描述

调用方非元服务。

可能原因

非元服务调用了此接口。

处理步骤

通过元服务应用调用此接口。

#### 1007601001 无效的分享参数值

错误信息

Invalid share parameter value. Possible causes: 1. The uniformDataType parameter verification failed; 2. Invalid content parameter format. [since 26.0.0]

错误描述

无效的分享参数值。

可能原因

1.分享参数uniformDataType不在支持的取值范围内。

2.content参数格式非法。

处理步骤

1.按照取值范围修改分享参数[uniformDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#shareparam)的值。

2.确认[content](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#shareparam)参数的格式是否正确。
