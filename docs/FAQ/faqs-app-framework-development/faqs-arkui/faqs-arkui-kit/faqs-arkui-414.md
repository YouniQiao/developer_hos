---
format: md
title: "如何监听Navigation页面栈变化"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-414
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-414
last_sync: 2026-06-07
sync_hash: 90c8e607
---
通过[uiObserver.on('navDestinationSwitch')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-observer#uiobserveronnavdestinationswitch12-1)方法，可以监听Navigation的页面切换事件，当Navigation组件发生页面跳转时触发该事件，典型场景包括页面访问统计、页面生命周期管理等。
