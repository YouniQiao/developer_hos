---
title: "管理应用拥有的状态概述"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-application-state-management-overview
format: md
upstream_id: dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-application-state-management-overview
last_sync: 2026-06-07
sync_hash: 127269c5
---
在管理组件拥有的状态章节中介绍的装饰器仅能在页面内，即一个组件树上共享状态变量。如果开发者要实现应用级的，或者多个页面的状态数据共享，就需要用到应用级别的状态管理的概念。ArkTS根据不同特性，提供了多种应用状态管理的能力：

* [LocalStorage](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage)：页面级UI状态存储，通常用于[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)内、页面间的状态共享。
* [AppStorage](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage)：特殊的单例LocalStorage对象，由UI框架在应用程序启动时创建，为应用程序UI状态属性提供中央存储。
* [PersistentStorage](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage)：持久化存储UI状态，通常和AppStorage配合使用，选择AppStorage存储的数据写入磁盘，以确保这些属性在应用程序重新启动时的值与应用程序关闭时的值相同。
* [Environment](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment)：应用程序运行的设备的环境参数，环境参数会同步到AppStorage中，可以和AppStorage搭配使用。
