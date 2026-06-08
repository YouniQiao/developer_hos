---
format: md
title: "有哪些创建线程的方式"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-2
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-2
last_sync: 2026-06-07
sync_hash: 254faa1d
---
* 在ArkTS中，使用Worker创建线程。Worker线程与主线程相互独立，但不能直接操作UI，最多创建64个Worker线程。
* 在ArkTS中使用任务池创建线程任务。
* 通过NAPI机制，在C代码中使用标准的线程API创建线程。
