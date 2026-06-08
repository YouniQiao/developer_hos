---
format: md
title: "证书链校验器的参数如何获取"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-device-certificate-kit/faqs-device-certificate-2
upstream_id: FAQ/faqs-system-development/faqs-security/faqs-device-certificate-kit/faqs-device-certificate-2
last_sync: 2026-06-07
sync_hash: 25001eb8
---
可通过[getSubjectName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#getsubjectname)和[getPublicKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#getpublickey)接口获取CASubject和CAPubKey的字节数据，然后将值传入CertChainValidationParameters。
