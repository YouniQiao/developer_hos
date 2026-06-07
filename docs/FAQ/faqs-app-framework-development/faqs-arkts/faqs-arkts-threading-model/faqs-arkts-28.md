---
format: md
title: "Worker和TaskPool的线程数量是否有限制"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-28
---


TaskPool会动态调整线程数量，不支持手动设置。只需将任务添加到线程池，确保高优先级任务及时执行。

Worker的线程个数最多为64个。如果超出此限制，创建将失败。

使用时，TaskPool和Worker相互独立，互不影响。因此，Worker数量达到上限时，不会影响TaskPool。Worker实例的数量上限为64个。TaskPool线程池的数量会根据硬件条件和任务负载动态调整。

**参考链接**

[TaskPool和Worker的对比 (TaskPool和Worker)](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker)
