---
title: "记忆链接错误码"
upstream_id: "harmonyos-references/errorcode-metadatabinding"
catalog: "harmonyos-references"
content_hash: "fb72c2f84f99"
synced_at: "2026-07-09T00:59:58.101185"
---

# 记忆链接错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)说明文档。

#### 32100001 文件创建失败

错误信息

Internal handling failed.

错误描述

当调用记忆链接模块接口时，若服务异常，会报此错误码。

可能原因

服务状态异常。

处理步骤

1. 定时重试操作，如间隔1s或者按照指数增长间隔重试。
2. 连续重试3次不可用则停止尝试，返回原始图片文件。

#### 32100004 订阅失败

错误信息

Subscription failed. Possible causes: 1. Abnormal system capability; 2. IPC exception; 3. Algorithm loading exception.

错误描述

当调用metadataBinding模块on接口时，若订阅失败，会报此错误码。

可能原因

订阅异常。

处理步骤

1. 定时重试操作，如间隔1s或者按照指数增长间隔重试。
2. 连续重试3次不可用则停止尝试。

#### 32100005 取消订阅失败

错误信息

Unsubscription failed. Possible causes: 1. Abnormal system capability; 2. IPC exception.

错误描述

当调用metadataBinding模块off接口时，若取消订阅失败，会报此错误码。

可能原因

取消订阅异常。

处理步骤

1. 定时重试操作，如间隔1s或者按照指数增长间隔重试。
2. 连续重试3次不可用则停止尝试。
