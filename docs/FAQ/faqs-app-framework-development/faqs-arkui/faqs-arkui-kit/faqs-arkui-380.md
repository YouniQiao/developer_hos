---
format: md
title: "应用冷启动时，trace中dlopen：libace_compatible.z.so耗时长的可能原因"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-380
---

libace\_compatible.z.so为ArkUI引擎的核心动态库，加载该so耗时长为异常情况。

在常规场景下为低概率事件，但在系统资源紧张时可能高频发生，主要原因包括：CPU资源被抢占（如系统其他高优先级进程占用CPU）、锁冲突（如加载时与其他模块存在资源竞争）、系统低内存（导致动态链接库加载时需频繁换页）等。
