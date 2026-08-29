---
title: "LiveViewLockScreenExtensionContext"
upstream_id: "harmonyos-references/liveview-lock-screen-context"
catalog: "harmonyos-references"
content_hash: "efe766cbac72"
synced_at: "2026-08-29T18:18:18.783640"
---

# LiveViewLockScreenExtensionContext

LiveViewLockScreenExtensionContext是[LiveViewLockScreenExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-ability)的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)，该类在API定义中未显式定义具体的属性和方法，其功能主要通过继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)的通用上下文能力实现。为开发者提供在锁屏场景下访问锁屏沉浸态实况窗的上下文能力。

起始版本： 5.0.0(12)

#### 导入模块

```
import { LiveViewLockScreenExtensionContext } from '@kit.LiveViewKit';
```
 设备行为差异： 该模块在Phone、Tablet中可正常调用，在其他设备类型中无效果。

#### LiveViewLockScreenExtensionContext

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.LiveView.LiveViewService

设备行为差异： 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。

起始版本： 5.0.0(12)
