---
format: md
title: "在ArkTS的主线程中使用await会阻塞主线程吗"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-43
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-43
last_sync: 2026-06-07
sync_hash: 6fb21e2c
---
await会挂起当前异步任务，等待条件满足后唤醒执行，主线程可处理其他任务。
