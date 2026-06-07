---
format: md
title: "Navigation中pushPathByName与pushDestinationByName的区别"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-264
---


[pushDestinationByName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#pushdestinationbyname11)绑定上下文对象，调用时验证上下文是否一致，而[pushPathByName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#pushpathbyname10)不进行验证。

不同的窗口，运行的UIContext不同。在单窗口场景下使用时，两者仅返回值存在差异；跨窗口使用时需注意UIContext的匹配性。
