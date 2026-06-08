---
format: md
title: "Web组件是否支持通过URL Scheme协议跳转其它App"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-72
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-72
last_sync: 2026-06-07
sync_hash: dc0f7a82
---
Web组件支持通过URL Scheme跳转到其它App。开发者可以通过Web组件的[onLoadIntercept](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onloadintercept10)回调拦截默认跳转逻辑，并在其中使用Deep Linking或App Linking的方式自定义跳转逻辑完成应用跳转。

**参考链接**

[使用Deep Linking实现应用间跳转](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup)

[使用App Linking实现应用间跳转](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup)
