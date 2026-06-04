---
title: "如何在UIAbility调用terminateSelf()后设置不保留最近任务列表中的快照"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-4
---

在HarmonyOS应用开发中，UIAbilityContext的[terminateSelf()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#terminateself-1)方法被用来结束当前的UIAbility实例。

如果希望在调用terminateSelf()后，让应用在最近任务列表中不保留快照，可以通过在[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)中配置removeMissionAfterTerminate为true来实现。

```
{
  "module": {
    // ...
    "abilities": [
      {
        // ...
        "removeMissionAfterTerminate": true,
      }
    ],
    // ...
  }
}
```

![](./img/45291884.png)

* removeMissionAfterTerminate字段的默认值为false，表示默认情况下应用会在最近任务列表中保留快照。

* 仅当removeMissionAfterTerminate设置为true时，调用terminateSelf()后应用不会在最近任务列表中保留快照。
