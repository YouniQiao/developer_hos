---
title: "ViewData"
upstream_id: "harmonyos-references/js-apis-inner-application-viewdata"
catalog: "harmonyos-references"
content_hash: "93ed8a76c9fc"
synced_at: "2026-08-29T18:12:05.040297"
---

# ViewData

自动填充的视图数据信息。

起始版本： 26.0.0

#### 导入模块

```
import { autoFillManager } from '@kit.AbilityKit';
```

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
| pageRect | [AutoFillRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-autofillrect) | 否 | 否 | 页面的位置坐标与宽高信息。在PC/2in1设备上，密码保险箱以弹窗形式展示，为保证弹窗位置跟随输入框，left和top需置为0。 |
