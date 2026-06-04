---
title: "如果有多个UIAbility，如何判断应用进入后台"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-94
---

在多UIAbility情况下，只有当所有UIAbility均在后台时，应用才处于后台状态。

可以使用[ApplicationContext.on('abilityLifecycle')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext#applicationcontextonabilitylifecycle)接口，该方法第一个参数为'abilityLifecycle'类型，表示应用内UIAbility的生命周期，第二个参数为一个回调函数，可以监听应用前后台切换状态。
