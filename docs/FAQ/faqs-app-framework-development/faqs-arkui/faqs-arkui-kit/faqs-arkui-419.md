---
format: md
title: "Navigation页面接收参数一般推荐在什么生命周期接收"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-419
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-419
last_sync: 2026-06-07
sync_hash: ef07bfa8
---
* 页面新创建时，推荐在NavDestination的[onReady](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onready11)生命周期中处理参数。
* API18及以下版本，单实例跳转场景需要开发者自行管理参数。
* 当同时实现onReady和onNewParam时，API version 19及以上版本会优先触发[onNewParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onnewparam19)回调。
