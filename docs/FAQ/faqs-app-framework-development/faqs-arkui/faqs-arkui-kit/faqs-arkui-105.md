---
format: md
title: "滑动的页面软键盘挡住内容不能向上滑动"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-105
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-105
last_sync: 2026-06-07
sync_hash: c81b82ef
---
计算软键盘的高度，然后将整体的margin-bottom设置为软键盘的高度。软键盘消失时，将margin-bottom设置为 0。软键盘高度可通过监听软键盘的显示事件获取。

**参考链接**

[输入法框架](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod)
