---
format: md
title: "ArkTS是否支持类似Java的共享内存模型进行多线程开发"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-37
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-37
last_sync: 2026-06-07
sync_hash: 0c4f50d1
---
无法通过加锁的方式实现多个线程同时对同一个内存对象进行操作。

ArkTS采用Actor并发模型，线程间内存隔离，目前仅支持SharedArrayBuffer和Native层对象的共享。

**参考链接**

[多线程并发概述](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview)
