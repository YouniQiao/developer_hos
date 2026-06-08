---
format: md
title: "为什么Web组件的onKeyEvent键盘事件不生效"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-3
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-3
last_sync: 2026-06-07
sync_hash: c27e0fe6
---
**问题现象**

Web组件设置onKeyEvent监听键盘事件，该事件不触发。

**解决措施**

onKeyEvent为通用键盘事件API，当前Web组件不支持该事件。Web组件监听键盘事件可以使用onInterceptKeyEvent回调函数。

**参考链接**

[onInterceptKeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#oninterceptkeyevent9)
