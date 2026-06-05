---
format: md
title: "如何使用EGL绘制自定义动画？请提供一个简单示例"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkgraphics-2d-1
---

自定义动画需开发者实现。可使用OpenGL绘制。动画实现主要涉及业务逻辑，业务方需识别动画触发事件，获取动画起点和终点，根据时间轴和动画曲线计算每一帧内容，最后调用OpenGL接口绘制。

**参考链接**

[自定义渲染 (XComponent)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-xcomponent-guidelines)
