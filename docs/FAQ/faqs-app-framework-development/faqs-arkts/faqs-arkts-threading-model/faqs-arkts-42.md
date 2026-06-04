---
title: "如果在ArkTS中大部分后台任务（计算、埋点、数据存储）都使用异步并发的方式，是否会使主线程响应变慢，引起卡顿掉帧问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-42
---

在ArkTS层接口中，如果异步操作不涉及I/O操作，异步任务将在主线程的微任务执行时机触发，仍然会占用主线程。建议使用TaskPool，将任务分发到后台任务池中执行。
