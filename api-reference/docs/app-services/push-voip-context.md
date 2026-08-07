---
title: "VoIPExtensionContext（应用内通话消息扩展Context）（废弃）"
upstream_id: "harmonyos-references/push-voip-context"
catalog: "harmonyos-references"
content_hash: "0db242e347e8"
synced_at: "2026-08-07T15:59:43.964860"
---

# VoIPExtensionContext（应用内通话消息扩展Context）（废弃）

VoIPExtensionContext是VoIPExtensionAbility的上下文环境，继承自[UIExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiextensioncontext)。

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.Push.PushService

起始版本： 4.1.0(11)

废弃版本： 26.0.0

#### 导入模块

```
import { VoIPExtensionContext } from '@kit.PushKit';
```

#### VoIPExtensionContext(deprecated)

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.Push.PushService

设备行为差异： 对于6.1.0(23)以前版本，该属性在Phone、Tablet中可正常使用，在其他设备类型中无效果。对于6.1.0(23)及之后版本，该属性在Phone、Tablet、PC/2in1中可正常使用，在其他设备类型中无效果。

起始版本： 4.1.0(11)

废弃版本： 26.0.0

本类继承自[UIExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiextensioncontext)，未新增内容。
