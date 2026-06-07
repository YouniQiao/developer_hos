---
format: md
title: "ArkTS的对象数据与Native的对象数据如何绑定，相互持有对象数据时内存如何管理"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-28
---


在ArkTS侧调用Native侧声明的构造函数创建对象，Native侧解析构造函数参数并返回构造的对象到ArkTS侧。通过napi\_wrap绑定ArkTS对象和Native对象时，可以在napi\_wrap()最后一个参数中传入nullptr，此时创建的napi\_ref是弱引用，由系统管理，不需要用户手动释放。若napi\_wrap()需要接收创建的napi\_ref，最后一个参数不为nullptr，返回的napi\_ref是强引用，需要用户调用napi\_remove\_wrap()手动释放，否则会内存泄漏。

**参考链接**

[Native与ArkTS对象绑定](/docs/dev/ndk-dev/use-napi-object-wrap)
