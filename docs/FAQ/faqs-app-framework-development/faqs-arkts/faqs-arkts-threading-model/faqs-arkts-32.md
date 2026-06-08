---
format: md
title: "系统多线程模型是什么样的"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-32
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-32
last_sync: 2026-06-07
sync_hash: f7c4be86
---
ArkTS 提供 TaskPool API 支持多线程开发，长耗时任务可使用 Worker。Worker 的数量限制为 64 个。

建议在Native侧使用FFRT线程池，而 pthread 线程的数量则不受限制。
