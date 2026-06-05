---
format: md
title: "如何全局存储WebController"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-60
---


**问题场景：**

需要全局存储多个WebController对象，目前使用将Map存入AppStorage的方式不生效。

**解决方案：**

目前AppStorage中不支持存储Map类型的数据，因为Map不能被JSON序列化。可以改为使用数组类型存储，或者将Map转换为String类型，因为AppStorage只支持存储String类型的数据。
