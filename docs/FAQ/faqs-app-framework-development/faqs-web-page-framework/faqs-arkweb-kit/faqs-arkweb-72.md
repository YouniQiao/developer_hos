---
format: md
title: "Web组件是否支持通过URL Scheme协议跳转其它App"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-72
---


Web组件支持通过URL Scheme跳转到其它App。开发者可以通过Web组件的[onLoadIntercept](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onloadintercept10)回调拦截默认跳转逻辑，并在其中使用Deep Linking或App Linking的方式自定义跳转逻辑完成应用跳转。

**参考链接**

[使用Deep Linking实现应用间跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deep-linking-startup)

[使用App Linking实现应用间跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-linking-startup)
