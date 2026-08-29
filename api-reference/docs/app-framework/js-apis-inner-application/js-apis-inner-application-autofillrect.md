---
title: "AutoFillRect"
upstream_id: "harmonyos-references/js-apis-inner-application-autofillrect"
catalog: "harmonyos-references"
content_hash: "f6087a6b7b13"
synced_at: "2026-08-29T18:12:03.199681"
---

# AutoFillRect

用于自动填充的矩形区域。

起始版本： 26.0.0

#### 导入模块

```
import { autoFillManager } from '@kit.AbilityKit';
```

#### AutoFillRect

起始版本： 26.0.0

元服务API：从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Ability.AbilityRuntime.AbilityCore

模型约束：此接口仅可在Stage模型下使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| left | number | 否 | 否 | AutoFill表单或页面节点与页面左边界的距离，单位是px。 |
| top | number | 否 | 否 | AutoFill表单或页面节点与页面上边界的距离，单位是px。 |
| height | number | 否 | 否 | AutoFill表单或页面节点的高度，单位是px。 |
| width | number | 否 | 否 | AutoFill表单或页面节点的宽度，单位是px。 |
