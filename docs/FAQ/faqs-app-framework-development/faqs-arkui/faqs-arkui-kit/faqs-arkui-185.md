---
format: md
title: "使用@Watch监听并在回调函数中调用其他异步接口时UI响应慢"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-185
---


@Watch用于快速计算，在UI重新渲染之前执行。不建议在@Watch函数中调用async和await，因为异步行为会延迟组件的重新渲染，可能导致性能问题。

**参考链接**

[@Watch装饰器：状态变量更改通知](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch)
