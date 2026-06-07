---
displayed_sidebar: appDevSidebar
title: "接入开发时，请求参数的签名、结果验签在什么场景使用？"
original_url: /docs/dev/app-dev/application-services/payment-kit-guide/payment-faq/payment-faq-1
format: md
---


1. 签名：商户服务器请求Payment Kit开放API时必须签名后再发起请求。
2. 验签：商户服务器请求Payment Kit服务器收到响应后或接收到回调通知请求时需要使用华为支付平台公钥验签。详细场景介绍参见[签名规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-rest-overview#签名规则)和[验签规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-rest-overview#验签规则)。
