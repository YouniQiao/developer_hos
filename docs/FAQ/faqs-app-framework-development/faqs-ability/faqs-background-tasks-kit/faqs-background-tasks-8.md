---
format: md
title: "如何确认延迟任务WorkSchedulerExtensionAbility回调方法onWorkStart、onWorkStop实现是否正确、是否可以成功回调"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-background-tasks-8
---

延迟任务申请成功之后，需要等到条件满足后才可以执行延迟任务回调，为了快速验证延迟任务回调功能是否正确，可以通过以下hidumper命令手动触发延迟任务执行回调。

```
hdc shell hidumper -s 1904 -a '-t com.hmos.workschedulerdemo MyWorkSchedulerExtensionAbility'
```

com.hmos.workschedulerdemo、MyWorkSchedulerExtensionAbility需要替换为需要查询应用的bundleName和abilityName。

![](./img/8f15d71a.png "点击放大")
