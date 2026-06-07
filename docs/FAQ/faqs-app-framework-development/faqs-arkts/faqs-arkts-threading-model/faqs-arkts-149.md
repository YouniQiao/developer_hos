---
format: md
title: "是否支持#include <memory_resource>和std::pmr::vector"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-149
---


暂时不支持。

C++从C++17标准开始正式支持 \<memory\_resource\> 和std::pmr::vector等“多态内存资源”容器，开发者可以直接在sdk下查询到当前llvm版本是15.0.4，暂时不支持部分C++17高级特性。

Windows：

![](./img/753a9ceb.png)

Mac：

![](./img/6148d9fb.png "点击放大")
