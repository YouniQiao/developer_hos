---
format: md
title: "Native侧代码与ArkTS侧的代码线程关系以及线程使用限制"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-function-flow-runtime/faqs-ndk-54
upstream_id: FAQ/faqs-app-framework-development/faqs-ndk/faqs-function-flow-runtime/faqs-ndk-54
last_sync: 2026-06-07
sync_hash: 40a84d25
---
**问题现象**

1. 主界面调用ArkTS接口到Native侧代码的加载是否都在一个线程里面？
2. Native侧支持的最大线程数分别是多少？

**解决措施**

应用侧调用的ArkTS接口代码与Native接口代码均运行在ArkTS主线程中。在Native侧用户可以提交任务到TaskPool线程池中，TaskPool内部会根据硬件条件、任务负载等情况动态调整线程数量，以确保高优先级任务的及时执行。
