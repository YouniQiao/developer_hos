---
format: md
title: "在ArkTS的主线程中使用await会阻塞主线程吗"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-43
---


await会挂起当前异步任务，等待条件满足后唤醒执行，主线程可处理其他任务。
