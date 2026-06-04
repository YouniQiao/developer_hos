---
title: "ArkTS层调用Native层接口时的线程相关问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ndk-14
---

**问题详情**

1. ArkTS层按钮点击后，调用Native层接口时，Native层代码是否在主线程中执行？
2. 在 Native 层中调用其他SO的逻辑时，切换到主线程后进行回调。回调时，是否有方法再切换回原来的线程？

**解决措施**

1. 通过按钮点击事件调用Native层接口时，Native层代码在主线程中执行。
2. 如果需要在回调中切换到特定线程，可以使用线程间通信机制，如消息队列或事件触发。通过向目标线程发送消息或事件，触发目标线程执行相应的处理逻辑。
