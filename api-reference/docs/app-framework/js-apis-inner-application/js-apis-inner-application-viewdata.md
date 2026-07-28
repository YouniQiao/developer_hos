---
title: "ViewData"
upstream_id: "harmonyos-references/js-apis-inner-application-viewdata"
catalog: "harmonyos-references"
content_hash: "0bf90f3dafe2"
synced_at: "2026-07-28T16:40:40.078763"
---

# ViewData

自动填充的视图数据信息。

起始版本： 26.0.0

#### ViewData

起始版本： 26.0.0

元服务API：从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Ability.AbilityRuntime.AbilityCore

模型约束：此接口仅可在Stage模型下使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| bundleName | string | 否 | 否 | 应用名称。 |
| pageUrl | string | 否 | 否 | 页面的url。 |
| pageNodeInfos | Array | 否 | 否 | 页面节点的信息。 |
| pageRect | [AutoFillRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-autofillrect) | 否 | 否 | 页面的坐标和宽高信息。 |
