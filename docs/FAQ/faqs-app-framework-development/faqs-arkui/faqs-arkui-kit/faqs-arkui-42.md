---
format: md
title: "在使用Canvas的场景中，如何主动控制组件刷新UI"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-42
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-42
last_sync: 2026-06-07
sync_hash: 615fd31b
---
Canvas组件最终的显示内容分两种：

一是组件的通用属性包括背景色、边框等渲染属性，这些属性可以通过状态变量驱动更新。

二是通过CanvasRenderingContext2D绘制接口由应用自行绘制的内容。该接口在调用时不会响应状态变量，会在下一帧自动刷新绘制内容，无需开发者主动控制刷新。

**参考链接**

[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d)
