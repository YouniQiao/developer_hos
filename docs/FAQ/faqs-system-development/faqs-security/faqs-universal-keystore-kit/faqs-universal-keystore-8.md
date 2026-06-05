---
format: md
title: "如何使用用户自定义的PIN码（6到16位）进行密钥解锁"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-universal-keystore-8
---


支持该能力，使用PIN时需将HUKS\_TAG\_USER\_AUTH\_TYPE属性设置为HUKS\_USER\_AUTH\_TYPE\_PIN。

对于密钥验证，只支持锁屏密码和生物特征验证，支持密钥的用户身份认证和访问控制。

1. 对于高安全敏感的业务密钥，在使用时需重新要求用户验证锁屏密码或生物特征。验证通过后，方可使用业务密钥。

2. 对于非高安全敏感的业务密钥，通过单独的密码验证（非锁屏密码）进行保护，需要应用自行实现该验证功能。

**参考链接**

[HuksAuthAccessType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksauthaccesstype9)
