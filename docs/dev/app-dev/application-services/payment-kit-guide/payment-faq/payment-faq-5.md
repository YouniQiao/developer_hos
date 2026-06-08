---
displayed_sidebar: appDevSidebar
title: "拉起收银台无反应或报错？"
original_url: /docs/dev/app-dev/application-services/payment-kit-guide/payment-faq/payment-faq-5
format: md
upstream_id: dev/app-dev/application-services/payment-kit-guide/payment-faq/payment-faq-5
last_sync: 2026-06-07
sync_hash: f0efe41a
upstream_hash: adcc2b1532d4
---

该情况一般属于入参格式存在问题，还请根据支付的回调信息进行定位，请检查以下注意事项：

* 检查[orderStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-model#orderstr)入参格式，要求为JsonStr的格式（参见[示例代码](/docs/dev/app-dev/application-services/payment-kit-guide/payment-payment-process#拉起华为支付收银台端侧开发)），不可为json对象或重复序列化。
* 请确保每次的支付请求noncestr参数唯一。
* 请检查timestamp时间戳格式是否错误。
* 请检查签名前是否已排序拼接。
* 签名后的入参字段重新赋值。
* 对应prepay\_id的订单是否已过期或已支付。
