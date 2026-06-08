---
format: md
title: "ArkUI组件能否支持继承"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-221
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-221
last_sync: 2026-06-07
sync_hash: 9fbca4fb
---
1.ArkUI采用声明式语法，组件以struct形式定义，不支持继承，未来也没有支持继承的计划。

2.基于开发者的场景，如果开发者希望抽取公共的父类以方便组件复用，可以考虑通过动态属性设置attributeModifier来实现组件复用扩展。attributeModifier已实现部分功能，其余功能将通过需求跟踪来完善。

3.如果开发者希望在基类页面的生命周期中统一处理一些业务，可以通过无感监听页面生命周期的observer功能来实现。

**参考链接**

[属性修改器 (AttributeModifier)](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier)

[@ohos.arkui.observer (无感监听)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-observer)
