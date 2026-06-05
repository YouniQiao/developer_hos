---
format: md
title: "有哪些创建线程的方式"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-2
---

* 在ArkTS中，使用Worker创建线程。Worker线程与主线程相互独立，但不能直接操作UI，最多创建64个Worker线程。
* 在ArkTS中使用任务池创建线程任务。
* 通过NAPI机制，在C代码中使用标准的线程API创建线程。
