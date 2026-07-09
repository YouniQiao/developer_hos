---
title: "LiveViewLockScreenExtensionContext"
upstream_id: "harmonyos-references/liveview-lock-screen-context"
catalog: "harmonyos-references"
content_hash: "6668beb23eed"
synced_at: "2026-07-09T01:01:22.552124"
---

# LiveViewLockScreenExtensionContext

LiveViewLockScreenExtensionContext继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)，作为[LiveViewLockScreenExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-ability)的上下文环境，为开发者提供在锁屏场景下访问锁屏沉浸态实况窗的上下文能力。

起始版本： 5.0.0(12)

#### 导入模块

```
import { LiveViewLockScreenExtensionContext } from '@kit.LiveViewKit';
```
 设备行为差异： 该模块在Phone、Tablet中可正常调用，在其他设备类型中无效果。

#### LiveViewLockScreenExtensionContext

[LiveViewLockScreenExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-ability)的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)，未新增内容。

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.LiveView.LiveViewService

设备行为差异： 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。

起始版本： 5.0.0(12)

主要用途：

该类作为锁屏扩展的上下文基类，提供锁屏环境下的扩展管理功能。开发者通过[LiveViewLockScreenExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-ability)实例的context属性访问该上下文对象，获取锁屏场景下的资源和能力。

由于该类在 API 定义中未显式定义具体的属性和方法，其功能主要通过继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)的通用上下文能力实现。
