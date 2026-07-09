---
title: "Types"
upstream_id: "harmonyos-references/map-map-types"
catalog: "harmonyos-references"
content_hash: "bf1e432251bb"
synced_at: "2026-07-09T01:01:26.380646"
---

# Types

#### MassPointOverlayCallback

type MassPointOverlayCallback = (massPointOverlay: MassPointOverlay, massPointItem: mapCommon.MassPointItem) => void

回调函数，无返回结果。用于监听海量点图层的点击事件。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本6.0.0(20)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 6.0.0(20)

参数：

| **名称** | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| massPointOverlay | [MassPointOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-masspointoverlay) | 是 | 海量点管理对象。 |
| massPointItem | [mapCommon.MassPointItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#masspointitem) | 是 | 海量点项。 |
