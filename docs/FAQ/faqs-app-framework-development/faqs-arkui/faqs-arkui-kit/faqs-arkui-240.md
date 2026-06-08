---
format: md
title: "创建subwindow默认是否铺满全屏，铺满全屏时如何隐藏状态栏"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-240
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-240
last_sync: 2026-06-07
sync_hash: e75ccdc9
---
子窗口默认不铺满全屏。要设置窗口全屏模式时状态栏的可见模式，需调用setWindowSystemBarEnable方法，此方法必须由主窗口调用。

**参考链接**

[setWindowSystemBarEnable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowsystembarenable9)
