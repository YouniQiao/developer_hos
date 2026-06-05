---
format: md
title: "如何获取设备屏幕方向的状态变化通知"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-1
---

可以通过以下方式实现订阅系统环境变量的变化：

* 使用ApplicationContext订阅回调。
* 在AbilityStage组件容器中订阅回调。
* 在UIAbility组件中订阅回调。
* 在ExtensionAbility组件中订阅回调。

在onConfigurationUpdate回调方法中订阅或监听系统环境变量的变化，包括语言、颜色模式和屏幕方向。

详细请参见[获取/设置环境变量](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/subscribe-system-environment-variable-changes)。
