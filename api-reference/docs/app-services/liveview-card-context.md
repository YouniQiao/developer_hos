---
title: "LiveViewCardExtensionContext"
upstream_id: "harmonyos-references/liveview-card-context"
catalog: "harmonyos-references"
content_hash: "dbd1046d2944"
synced_at: "2026-08-29T18:18:18.995971"
---

# LiveViewCardExtensionContext

LiveViewCardExtensionContext是[LiveViewCardExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-card-ability)的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)，该类在API定义中未显式定义具体的属性和方法，其功能主要通过继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)的通用上下文能力实现。主要用于查询所属 [LiveViewCardExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-card-ability)的信息、Module的配置信息以及HAP包的信息，开发者可根据自身业务需求使用对应的信息。

起始版本： 26.0.0

#### 导入模块

```
import { LiveViewCardExtensionContext } from '@kit.LiveViewKit';
```
 设备行为差异： 该模块在Phone、Tablet中可正常调用，在其他设备类型中无效果。

#### LiveViewCardExtensionContext

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.LiveView.LiveViewService

设备行为差异： 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。

起始版本： 26.0.0
