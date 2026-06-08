---
format: md
title: "如何使用EGL绘制自定义动画？请提供一个简单示例"
original_url: /docs/FAQ/faqs-graphic-development/faqs-arkgraphics2d-kit/faqs-arkgraphics-2d-1
upstream_id: FAQ/faqs-graphic-development/faqs-arkgraphics2d-kit/faqs-arkgraphics-2d-1
last_sync: 2026-06-07
sync_hash: a8eac455
---
自定义动画需开发者实现。可使用OpenGL绘制。动画实现主要涉及业务逻辑，业务方需识别动画触发事件，获取动画起点和终点，根据时间轴和动画曲线计算每一帧内容，最后调用OpenGL接口绘制。

**参考链接**

[自定义渲染 (XComponent)](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines)
