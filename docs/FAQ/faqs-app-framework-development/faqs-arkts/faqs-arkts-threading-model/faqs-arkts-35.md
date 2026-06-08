---
format: md
title: "子线程和主线程的优先级及任务执行策略是什么"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-35
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-35
last_sync: 2026-06-07
sync_hash: 9c290ce0
---
主线程作为UI线程，拥有最高优先级。在高负载情况下，响应更及时；在低负载情况下，效率与其他线程差异不大。

子线程的调度可以受优先级设置和任务优先级的影响。
