---
format: md
title: "TaskPool后台I/O任务池，应用能否自行做管控？是否有方法开放管理机制"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-59
---


1. TaskPool后台线程的数量由负载和硬件决定，无法直接管控。仅支持通过串行队列和任务组机制进行任务控制。

2. I/O任务池由底层进行调度，无法自行管控。
