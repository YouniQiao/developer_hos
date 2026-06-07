---
displayed_sidebar: appDevSidebar
title: "快速启动的游戏存在三方SDK功能异常，应该如何排查"
original_url: /docs/dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-3
format: md
---


在秒级启动使能后，如果用户对游戏进行上滑移除操作，系统会对游戏进程进行深度冻结和内存换出。此时游戏进程、[ArkTS Runtime](/docs/dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-overview)、[AbilityStage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage)均不会被销毁，只有[UIAbility](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability)会经历完整的创建到销毁生命周期。因此，由ArkTS定义的全局变量、静态变量、[AppStorage](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage)变量、globalThis变量以及单例对象等都不会被销毁或重置。

三方SDK的生命周期通常与进程生命周期保持一致。当进程未被销毁时，已创建的SDK实例会一直保留在内存中。如果在下一次秒级启动时再次执行SDK初始化逻辑，可能会因重复创建SDK实例而导致功能异常。因此，建议开发者在应用侧维护SDK初始化状态标识（例如全局状态变量或单例状态），用于记录SDK是否已经完成初始化。在应用启动或Ability创建时，先判断SDK是否已初始化，若未初始化则执行初始化；若已初始化则复用已有实例，避免重复创建。

通过这种方式，可以确保在秒级启动场景下SDK初始化逻辑只执行一次，从而避免因重复初始化导致的异常问题。
