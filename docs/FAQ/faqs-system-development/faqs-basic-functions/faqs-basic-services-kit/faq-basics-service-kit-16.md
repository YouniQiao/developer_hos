---
format: md
title: "如何持有wakelock锁，防止系统休眠"
original_url: /docs/FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-16
upstream_id: FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-16
last_sync: 2026-06-07
sync_hash: 255fc4b1
---
调用runningLock.create接口创建RunningLock锁。使用[hold()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-runninglock#hold9)接口设置锁定持续时间，期间系统不会休眠。锁超时后，若未设置其他RunningLock，锁自动释放，系统进入休眠状态。

**参考链接**

[RunningLock锁](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-runninglock)
