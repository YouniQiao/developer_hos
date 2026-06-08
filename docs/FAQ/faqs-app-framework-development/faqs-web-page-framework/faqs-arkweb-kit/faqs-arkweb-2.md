---
format: md
title: "Web组件的onLoadIntercept返回结果是否影响onInterceptRequest"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-2
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-2
last_sync: 2026-06-07
sync_hash: d9244499
upstream_hash: 049872f285d7
---

Web组件的onLoadIntercept的不同返回结果对应不同的操作：

* onLoadIntercept返回true时，直接拦截URL请求。
* onLoadIntercept返回false时，系统将触发onInterceptRequest回调。

**参考链接**

[onLoadIntercept](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onloadintercept10)
