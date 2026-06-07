---
format: md
title: "如何实现Sendable类型和JSON数据的转换"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-102
---


可以通过从API version 12开始支持的，ArkTS新增的[ArkTSUtils.ASON](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-utils-ason)工具实现。

ASON支持解析JSON字符串并生成共享数据，用于跨并发域传输。ASON还支持将共享数据转换为JSON字符串。
