---
format: md
title: "如何获取系统时间，并且在切换时区时，时间戳一直保持北京时间"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faq-basics-service-kit-11
---

使用[systemDateTime.getTime()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-date-time#systemdatetimegettime10)可以获取自Unix纪元以来经过的时间。getTime获取的是Unix时间戳，Unix时间戳和时区无关，在任何时区返回的值都是一致的。
