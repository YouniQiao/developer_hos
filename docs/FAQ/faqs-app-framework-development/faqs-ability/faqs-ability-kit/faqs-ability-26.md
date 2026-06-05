---
format: md
title: "UIAbility在onBackground执行耗时操作时是否会影响另外一个UIAbility的onForeground"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-26
---

* 不同UIAbility的生命周期是相互独立的，一个UIAbility的操作不会影响另一个UIAbility的生命周期。
* 在同一个UIAbility生命周期中，耗时操作会触发系统监控并导致应用卡顿或无响应。开发应用时，应使用异步方法处理耗时操作，避免影响UIAbility生命周期的流转。
