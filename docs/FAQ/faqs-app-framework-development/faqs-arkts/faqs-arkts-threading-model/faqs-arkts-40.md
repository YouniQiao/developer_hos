---
format: md
title: "TaskPool在任务执行过程中如何跟主线程进行通信？如何操作同一块内存变量"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-40
---

TaskPool的任务通过sendData接口触发主线程的onReceiveData回调，目前不支持主线程向子线程通信。

多个线程可以通过SharedArrayBuffer操作同一块内存。
