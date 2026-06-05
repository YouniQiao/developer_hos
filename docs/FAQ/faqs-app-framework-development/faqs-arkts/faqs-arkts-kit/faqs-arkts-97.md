---
format: md
title: "ArkTS是否支持匿名内部类"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-97
---


ArkTS不支持匿名类，建议使用嵌套类实现。

因为使用匿名类创建的对象类型未知，这与ArkTS[不支持structural typing](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide#不支持structural-typing)和对象字面量的类型冲突。限制主要是考虑运行时的性能开销，需要显式声明类。

**参考链接**

[不支持使用类表达式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide#不支持使用类表达式)
