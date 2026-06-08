---
format: md
title: "如何获取设备屏幕方向的状态变化通知"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-1
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-1
last_sync: 2026-06-07
sync_hash: 84058c83
---
可以通过以下方式实现订阅系统环境变量的变化：

* 使用ApplicationContext订阅回调。
* 在AbilityStage组件容器中订阅回调。
* 在UIAbility组件中订阅回调。
* 在ExtensionAbility组件中订阅回调。

在onConfigurationUpdate回调方法中订阅或监听系统环境变量的变化，包括语言、颜色模式和屏幕方向。

详细请参见[获取/设置环境变量](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes)。
