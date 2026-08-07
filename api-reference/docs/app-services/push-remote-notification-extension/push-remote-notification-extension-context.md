---
title: "RemoteNotificationExtensionContext（通知扩展Context）"
upstream_id: "harmonyos-references/push-remote-notification-extension-context"
catalog: "harmonyos-references"
content_hash: "12b5e490362b"
synced_at: "2026-08-07T15:59:43.846378"
---

# RemoteNotificationExtensionContext（通知扩展Context）

RemoteNotificationExtensionContext是[RemoteNotificationExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-remote-notification-extension-ability)的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)，未新增内容。RemoteNotificationExtensionContext模块提供访问RemoteNotificationExtensionAbility资源的能力。

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.Push.PushService

起始版本： 4.1.0(11)

#### 导入模块

```
import { RemoteNotificationExtensionContext } from '@kit.PushKit';
```

#### RemoteNotificationExtensionContext

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.Push.PushService

设备行为差异： 对于5.1.0(18)以前版本，该属性在Phone、Tablet、PC/2in1中可正常使用，在其他设备类型中无效果。对于5.1.0(18)~6.0.2(22)版本，该属性在Phone、Tablet、PC/2in1、Wearable中可正常使用，在其他设备类型中无效果。对于6.1.0(23)及之后版本，该属性在Phone、Tablet、PC/2in1、Wearable、TV中均可正常使用。

起始版本： 4.1.0(11)
