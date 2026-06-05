---
format: md
title: "如何持有wakelock锁，防止系统休眠"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faq-basics-service-kit-16
---


调用runningLock.create接口创建RunningLock锁。使用[hold()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-runninglock#hold9)接口设置锁定持续时间，期间系统不会休眠。锁超时后，若未设置其他RunningLock，锁自动释放，系统进入休眠状态。

**参考链接**

[RunningLock锁](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-runninglock)
