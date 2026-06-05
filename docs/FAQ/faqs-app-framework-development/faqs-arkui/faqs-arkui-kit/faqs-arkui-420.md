---
format: md
title: "Navigation页面参数如何管理？如：传递参数、参数返回、参数获取"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-420
---


* 传递参数：
  1. Navigation路由跳转api（[页面跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-routing#页面跳转)相关接口：pushPath、pushPathByName、pushDestination和pushDestinationByName）支持参数传递，开发者可直接使用相关接口进行传参。
  2. 开发者可通过AppStorage自行管理参数。例如：在跳转发生时存参数，并通知目标页面取用参数。
* 接收参数-push场景下：
  1. 页面新创建时，推荐在NavDestination的[onReady](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onready11)生命周期中处理参数。
  2. API18及以下版本，单实例跳转场景需要开发者自行管理参数。例如，通过appStorage来保存、取用路由参数。
  3. 自API19起，开发者可以在NavDestination的[onNewParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onnewparam19)回调中处理单实例跳转的参数。
* pop返回场景下：
  1. 自API15起，推荐开发者使用[onResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onresult15)处理返回场景的路由参数。
