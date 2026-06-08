---
title: "在使用UIAbilityContext时报401“The context must be a valid Context”的Context类型错误"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-76
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-76
last_sync: 2026-06-07
sync_hash: e8285b6a
---
401错误表示提供的上下文类型不正确，需要使用UIAbility的上下文。获取[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext)的方式如下：

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    let uiAbilityContext = this.context;
    // ...
  }
}
```

**参考链接**

[应用上下文Context](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/application-context-stage)
