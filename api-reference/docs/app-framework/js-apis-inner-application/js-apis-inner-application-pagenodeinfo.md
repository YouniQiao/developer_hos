---
title: "PageNodeInfo"
upstream_id: "harmonyos-references/js-apis-inner-application-pagenodeinfo"
catalog: "harmonyos-references"
content_hash: "08f54f33736e"
synced_at: "2026-08-29T18:12:04.109596"
---

# PageNodeInfo

用于自动填充的页面节点信息。

起始版本： 26.0.0

#### 导入模块

```
import { autoFillManager } from '@kit.AbilityKit';
```

#### PageNodeInfo

起始版本： 26.0.0

元服务API：从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Ability.AbilityRuntime.AbilityCore

模型约束：此接口仅可在Stage模型下使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id | number | 否 | 否 | 页面节点的ID。 |
| autoFillType | [AutoFillType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-autofilltype) | 否 | 否 | 页面节点的自动填充类型。 |
| value | string | 否 | 否 | 页面节点的值。 |
| placeholder | string | 否 | 是 | 页面节点的占位符。 |
| rect | [AutoFillRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-autofillrect) | 否 | 否 | 当前节点的坐标和宽高信息。 |
| isFocus | boolean | 否 | 否 | 当前节点是否获焦。 true表示当前节点获焦， false表示当前节点未获焦。 |
