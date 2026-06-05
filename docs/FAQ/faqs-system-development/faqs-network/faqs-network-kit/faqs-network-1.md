---
format: md
title: "http网络请求中extraData支持的数据格式有哪些"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-1
---


extraData代表发送请求的额外数据，支持如下数据：

* 当http请求为POST、PUT方法时，此字段为http请求的content。
* 当http请求为GET、OPTIONS、DELETE、TRACE、CONNECT方法时，此字段为http请求的参数补充，参数内容会拼接到URL中进行发送。
* 若传入string对象，需自行编码，将编码后的字符串传入。
