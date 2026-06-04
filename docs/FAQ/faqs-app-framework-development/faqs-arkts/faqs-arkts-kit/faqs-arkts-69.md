---
title: "是否支持开发者自行管理线程数量"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-69
---

ArkTS 侧不支持，而 Native 侧没有限制。

**线程上限：**

* taskpool的线程上限是重要配置参数，需根据系统资源、任务类型和性能需求合理设置。taskpool具备动态扩容机制，线程池可按任务负载调整线程数量，但不会超过最大线程数。
* Worker：开发者管理Worker的数量和生命周期，最多可开启64个Worker，超出会报异常。
* C++中创建线程没有数量限制。
