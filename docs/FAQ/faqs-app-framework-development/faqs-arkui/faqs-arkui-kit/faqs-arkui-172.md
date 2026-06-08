---
format: md
title: "在容器组件嵌套的场景下，如何解决手势拖拽事件出现错乱的问题"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-172
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-172
last_sync: 2026-06-07
sync_hash: 068131e1
---
PanGesture用于触发拖动手势事件。滑动的最小距离distance默认为5vp，设置distance值为1可提高灵敏度，防止事件错乱。

**参考链接**

[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)
