---
format: md
title: "DevEco Studio中如何设置超长日志自动换行"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-development-environment-15
---

启用Soft-Wrap功能以实现日志消息的自动换行。

![](./img/d2bfaeb6.png "点击放大")

日志单条打印的最大长度为4096个字符。建议在应用的日志框架中，对日志长度进行判断，若超过该长度则分段打印，以避免日志丢失。
