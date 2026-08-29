---
title: "注册节点渲染状态监听错误码"
upstream_id: "harmonyos-references/errorcode-node-render-monitor"
catalog: "harmonyos-references"
content_hash: "bf2a8a8bd842"
synced_at: "2026-08-29T18:15:55.637062"
---

# 注册节点渲染状态监听错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 161001 监听渲染状态的节点数超过限制

错误信息

The count of nodes monitoring render state is over the limitation.

错误描述

监听渲染状态的节点数超过限制。

可能原因

调用[on('nodeRenderState')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uiobserver#onnoderenderstate20)接口注册节点渲染状态监听时，单个UI实例中注册的监听节点数超过限制。

处理步骤

请确保单个UI实例中注册监听渲染状态的节点不超过64个。
