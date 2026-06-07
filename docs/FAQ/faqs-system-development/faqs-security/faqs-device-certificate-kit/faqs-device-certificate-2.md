---
format: md
title: "证书链校验器的参数如何获取"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-device-certificate-kit/faqs-device-certificate-2
---


可通过[getSubjectName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#getsubjectname)和[getPublicKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#getpublickey)接口获取CASubject和CAPubKey的字节数据，然后将值传入CertChainValidationParameters。
