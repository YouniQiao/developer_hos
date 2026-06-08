---
format: md
title: "使用Web组件，在哪个回调事件中可以设置自定义用户代理"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-62
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-62
last_sync: 2026-06-07
sync_hash: 2de549eb
---
建议在[onControllerAttached](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#oncontrollerattached10)回调事件中，使用[setCustomUserAgent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#setcustomuseragent10)来设置自定义用户代理。
