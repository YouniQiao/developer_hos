---
format: md
title: "ArkTS里有哪些转换数据类型的方法"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-65
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-65
last_sync: 2026-06-07
sync_hash: e0a9eaa1
---
ArkTS支持通过JavaScript/TypeScript的内置方法进行类型转换，例如Number(), String(), Boolean()等。

ArkTS支持TS语义的as类型转换，不支持使用\<\>运算符进行类型转换。当前as类型转换只能用在编译时，无法通过as在运行时进行类型转换。

**参考链接**

[从TypeScript到ArkTS的适配规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide)
