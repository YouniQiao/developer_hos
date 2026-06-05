---
format: md
title: "系统多线程模型是什么样的"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-32
---


ArkTS 提供 TaskPool API 支持多线程开发，长耗时任务可使用 Worker。Worker 的数量限制为 64 个。

建议在Native侧使用FFRT线程池，而 pthread 线程的数量则不受限制。
