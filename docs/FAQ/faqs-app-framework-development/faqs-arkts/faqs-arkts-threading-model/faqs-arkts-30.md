---
format: md
title: "JS线程通过napi创建的C++线程的处理结果，如何返回JS线程"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-30
---


使用napi\_create\_threadsafe\_function在JS线程创建可被任意线程调用的函数，在C++线程调用napi\_call\_threadsafe\_function将结果回调给主线程。

**参考链接**

[使用Node-API接口进行线程安全开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-thread-safety)
