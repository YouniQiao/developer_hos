---
format: md
title: "两个UIAbility之间可通过哪些方法实现数据传递"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-31
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-31
last_sync: 2026-06-07
sync_hash: 34139e2f
---
两个UIAbility之间数据传递的方法如下，建议优先采用排序在前的方法。

* 方法一：调用startAbility接口启动另一个UIAbility时，通过wantInfo添加启动参数。也可以使用startAbilityForResult接口，获取被调用方UIAbility在关闭时返回的信息。
* 方法二：使用应用级别的状态管理，如 AppStorage、PersistentStorage、Environment，实现应用级或多个页面的状态数据共享。
* 方法三：在同一个应用中，UIAbility 之间的数据传递可以使用 AppStorage 或 LocalStorage 进行数据同步。
* 方法四：使用Emitter和Worker进行线程间通信。
* 方法五：使用CES（公共事件服务）进行进程间通信。
* 其他方法：通过Call调用实现UIAbility交互。

**参考链接**

[启动应用内的UIAbility组件](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction)

[管理应用拥有的状态概述](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-application-state-management-overview)

[UIAbility组件与UI的数据同步](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui)

[线程模型](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/thread-model-stage)

[公共事件简介](/docs/dev/app-dev/system/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-overview)
