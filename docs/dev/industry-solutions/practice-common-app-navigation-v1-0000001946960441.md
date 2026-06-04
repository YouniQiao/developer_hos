---
title: "导航设计实践"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-navigation-v1-0000001946960441
---

Stage模型建议采用单UIAbility实例（一个UIAbility实例对应一个任务中心Task），多ArkUIPage设计，页面间采用路由方式跳转。

HarmonyOS支持两套路由机制：Navigation和Router。相比Router，Navigation作为后续长期演进及推荐的路由选择方案。

采用基于Navigation的路由设计方案，实现多模块路由管理和模块间解耦。通过动态注册路由的方式，解决页面加载多个UI组件时启动速度变慢问题，同时以避免模块间的循环依赖问题。

如何设计应用导航，请参见[Navigation（推荐）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navigation)和[Router](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-router)。
