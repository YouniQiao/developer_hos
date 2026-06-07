---
title: "启动DataAbility"
original_url: /docs/dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/dataability/start-dataability
format: md
---


启动DataAbility会获取一个工具接口类对象（DataAbilityHelper）。启动DataAbility的示例代码如下：

```
import featureAbility from '@ohos.ability.featureAbility';
import ability from '@ohos.ability.ability';

let uri: string = 'dataability:///com.samples.famodelabilitydevelop.DataAbility';
let DAHelper: ability.DataAbilityHelper = featureAbility.acquireDataAbilityHelper(uri);
```
