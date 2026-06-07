---
format: md
title: "应用的进程启动过程是怎样的"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-28
---


* 每个应用最多包含三类进程（主进程、Extension类进程、Render进程），系统负责创建和管理应用中的所有进程。
* 应用主进程运行所有UIAbility组件、页面及业务逻辑，可拥有多个UIAbility实例。
* 同一应用包含一个或多个Module，Module分为“Ability”和“Library”两种类型。Ability类型的Module编译后生成HAP，Library类型的Module生成HAR或HSP。
* HAP分为Entry和Feature两种类型。同一设备类型在同一个应用中仅支持一个Entry类型的HAP，作为应用的入口模块。
* 进程启动过程：
  1. 系统服务孵化进程，拉起应用主进程，并创建相应的运行环境。
  2. 应用根据具体需求请求系统服务。
  3. 启动应用所需的其他进程。
* 模块启动顺序：
  1. 拉起应用的入口模块。该模块加载时创建一个AbilityStage实例，用于初始化等操作。
  2. 模块初始化完成后，将启动对应的入口UIAbility。
  3. UIAbility加载完成后，创建WindowStage类实例并绑定。WindowStage作为应用进程内的窗口管理器，UIAbility通过它管理窗口，并在该窗口上加载首个ArkUI页面，呈现到设备上。

**参考链接**

[Stage模型开发概述](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-development-overview)
