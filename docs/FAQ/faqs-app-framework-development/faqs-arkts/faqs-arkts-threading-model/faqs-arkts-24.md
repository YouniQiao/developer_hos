---
format: md
title: "线程间JS对象通过序列化方式进行数据通信，是否存在性能问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-24
---


线程间对象的数据通信依赖于序列化和反序列化，耗时与数据量成正比。为了提高效率，建议控制传输的数据量，或者使用ArrayBuffer或SharedArrayBuffer进行数据转移或共享。
