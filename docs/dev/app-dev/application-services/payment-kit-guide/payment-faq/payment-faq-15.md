---
displayed_sidebar: appDevSidebar
title: "同一次支付请求接收到多次回调通知，怎么解决？"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-faq-15
---

* 当开发者返回的响应格式不符合要求（如请求响应格式不是application/json、响应的报文不是 {"resultCode":"000000","resultDesc":"Success."}等），具体可参考[通知回调接口说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-rest-overview#通知回调接口说明)。
* 检查自验证回调接口是否可正常接收响应，如Payment Kit服务器请求响应连接超时也会触发重试回调。
