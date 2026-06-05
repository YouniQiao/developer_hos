---
format: md
title: "ArkTS是否支持解构"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-80
---

ArkTS是静态类型语言，不支持解构。解构是基于结构兼容性的动态特性，要求解构声明中的名称与解构对象的属性名称一致。

* 不支持解构赋值：ArkTS不支持解构赋值，可使用其他方法替代，如使用临时变量。
* 不支持解构变量声明：解构声明中的名称必须与被解构对象的属性名称一致。
* 不支持参数解构的函数声明：ArkTS要求实参直接传递给函数，并映射到形参。

**参考链接**

[从TypeScript到ArkTS的适配规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide)
