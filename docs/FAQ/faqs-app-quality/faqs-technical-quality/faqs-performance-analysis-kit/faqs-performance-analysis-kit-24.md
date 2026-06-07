---
format: md
title: "console.log和hilog的区别，如何选择使用"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-24
---


* console.log是对hilog日志系统的封装，采用默认参数。日志业务领域为A0c0d0，日志TAG为JSApp，日志级别为info。
* hilog日志打印时包含四部分：日志业务领域、日志TAG、日志级别和日志内容。开发者可以自定义设置日志业务领域、日志TAG和日志级别。
* console主要用于应用开发的调试阶段。
* 推荐使用hilog对日志系统进行分类和统一处理。使用console.log打印日志，不方便日志定位。

**参考链接**

[Hilog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hilog)
