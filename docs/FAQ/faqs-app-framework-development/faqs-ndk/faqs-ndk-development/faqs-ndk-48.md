---
format: md
title: "C++创建的（napi_create_object），或者作为参数传下来的JS value，如果想持久持有，需要怎么做？以及怎么主动销毁或减少引用计数"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-48
---


持久持有对象可以通过napi\_create\_reference创建强引用，并保存该引用以便后续使用。主动销毁引用可使用napi\_delete\_reference。引用计数的减少或增加分别通过napi\_reference\_unref 和 napi\_reference\_ref。

**参考链接**

[使用Node-API接口进行生命周期相关开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-life-cycle)
