---
title: "Interface (AnimateResult)"
upstream_id: "harmonyos-references/map-map-animateresult"
catalog: "harmonyos-references"
content_hash: "1459424564b9"
synced_at: "2026-07-09T01:01:25.807574"
---

# Interface (AnimateResult)

#### AnimateResult

动画结果类。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 5.0.0(12)

参数：

| **名称** | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| isFinished | boolean | 否 | 是 | 动画是否结束。 - true：已结束 - false：未结束 |
| isCanceled | boolean | 否 | 是 | 动画是否取消。 - true：已取消 - false：未取消 |
