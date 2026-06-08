---
format: md
title: "Navigation管理的页面生命周期是什么，需要什么回调监听页面生命周期"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-403
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-403
last_sync: 2026-06-07
sync_hash: 467b66ac
---
Navigation组件作为路由容器的实现，其生命周期承载在[NavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination)组件上，以组件事件的形式开放。Navigation管理的页面生命周期包括onAppear（通用生命周期事件）、onShown（NavDestination组件布局显示之后执行）、onActive（NavDestination处于激活态触发）等等，具体可参考下方文档。可以通过[Class (UIObserver)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uiobserver)监听NavDestination组件的生命周期。

**参考链接**

[组件导航(Navigation) (推荐)](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation)

[页面生命周期](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/arkts-navigation-navdestination#页面生命周期)
