---
title: "Enums"
upstream_id: "harmonyos-references/map-map-enums"
catalog: "harmonyos-references"
content_hash: "13c7af87ac49"
synced_at: "2026-07-09T01:01:26.423143"
---

# Enums

#### AnimationFillMode

动画执行完成后的状态。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| FORWARDS | 0 | 动画执行后保持在最后一帧。 |
| BACKWARDS | 1 | 动画执行后保持在第一帧。 |

#### AnimationRepeatMode

重复执行的模式。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| RESTART | 0 | 动画结束后从头播放。 |
| REVERSE | 1 | 动画结束后从尾倒放。 |
