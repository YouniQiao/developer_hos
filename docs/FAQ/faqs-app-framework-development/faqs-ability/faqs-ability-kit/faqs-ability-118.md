---
format: md
title: "UIContext与Ability的关系，列举常见UIContext、Ability、UIAbilityContext的关系"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-118
---


1. Ability的上下文是AbilityContext。ArkUI实例的上下文是[UIContext](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface)，由窗口创建并管理所有UI对象。窗口可以通过[windowStage.loadContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#loadcontent9)拉起ArkUI实例。
2. Ability是应用管理生命周期的对象，持有window对象。
3. UIAbility的上下文是UIAbilityContext。UIContext与UIAbilityContext没有直接联系，无法互相转化。
