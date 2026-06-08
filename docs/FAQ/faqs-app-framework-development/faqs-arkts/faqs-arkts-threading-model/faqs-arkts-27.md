---
format: md
title: "TaskPool和Worker的异同点"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-27
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-27
last_sync: 2026-06-07
sync_hash: 809ea8ad
---
* 不同点：Worker 和 TaskPool 是不同颗粒度的并发 API。Worker 类似于 Thread 或 Service 维度，而 TaskPool 则是单一任务维度。TaskPool 简化了并发程序的开发，支持优先级和任务取消，并通过统一管理节省系统资源，优化调度。
* 相同点：JS相关的线程间交互都基于内存隔离模型，参数与数据范围的限制相同，并且都存在开销。

**参考链接**

[TaskPool和Worker的对比 (TaskPool和Worker)](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker)
