---
title: "应该如何设计大量线程并发方案"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-25
---

系统采用ArkTS作为开发语言，由于底层线程模型对接了libuv，应用进程启动后会包含多个I/O线程用于执行I/O操作。JS线程的I/O异步操作将在I/O线程中执行，JS线程可以同时执行其他任务，不会发生阻塞等待。ArkTS还提供了TaskPool并发API，类似于GCD的线程池功能，可以执行任务，无需开发者管理线程生命周期。对于需要大量线程的场景，建议如下：

* 将多线程任务转变为并发任务，通过TaskPool分发执行。
* I/O型任务不需要单独开启线程，而是在当前线程（可以是TaskPool线程）执行。
* 需要常驻的CPU密集型任务数量应控制在64个及以下，并使用Worker处理。

**参考链接**

[TaskPool和Worker的对比 (TaskPool和Worker)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-vs-worker)
