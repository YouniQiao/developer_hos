---
format: md
title: "签名时，提示“Failed to query agreement signing records”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-signature-service-11
---

**问题现象**

使用未实名认证的华为账号登录会导致签名错误。

![](./img/16709ecc.png)

**解决措施**

出现该问题的原因是签名过程中，DevEco Studio与查询协议的连接通道发生异常

请尝试以下两种方法解决此问题

方式一：该问题可能是由于DevEco Studio的HTTP代理问题引起的，请参考[配置代理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-environment-config)。

方式二：进行开发者实名认证，具体指导可以参考[实名认证介绍](https://developer.huawei.com/consumer/cn/doc/start/itrna-0000001076878172)。
