---
format: md
title: "在onInterceptRequest接口中，如何异步处理响应数据"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-82
---


可以使用[setResponseIsReady](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webresourceresponse#setresponseisready9)设置资源响应数据是否已经就绪。例如，在异步获取数据后，需调用`setResponseIsReady(true)`通知系统响应数据已准备就绪，具体可参考[onInterceptRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#oninterceptrequest9)示例代码。
