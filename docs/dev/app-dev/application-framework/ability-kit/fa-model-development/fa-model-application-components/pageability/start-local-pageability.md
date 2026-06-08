---
title: "启动本地PageAbility"
original_url: /docs/dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/start-local-pageability
format: md
upstream_id: dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/start-local-pageability
last_sync: 2026-06-07
sync_hash: 96dde342
upstream_hash: ea5c91f899a1
---

PageAbility相关的能力通过featureAbility提供，启动本地Ability通过featureAbility中的startAbility接口实现。

**表1** featureAbility接口说明

| 接口名 | 接口描述 |
| --- | --- |
| startAbility(parameter: StartAbilityParameter) | 启动Ability。 |
| startAbilityForResult(parameter: StartAbilityParameter) | 启动Ability，并在该Ability被销毁时返回执行结果。 |

如下示例通过startAbility显式启动PageAbility。启动Ability的参数包含want，关于want的说明详见[对象间信息传递载体Want](/docs/dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/want-fa)，相应的，隐式启动与显式启动也不在此赘述。

```
import featureAbility from '@ohos.ability.featureAbility';
import Want from '@ohos.app.ability.Want';
import hilog from '@ohos.hilog';

const TAG: string = 'PagePageAbilityFirst';
const domain: number = 0xFF00;
```

```
(async (): Promise<void> => {
  try {
    hilog.info(domain, TAG, 'Begin to start ability');
    let want: Want = {
      bundleName: 'com.samples.famodelabilitydevelop',
      moduleName: 'entry',
      abilityName: 'com.samples.famodelabilitydevelop.PageAbilitySingleton'
    };
    await featureAbility.startAbility({ want: want });
    hilog.info(domain, TAG, `Start ability succeed`);
  }
  catch (error) {
    hilog.error(domain, TAG, 'Start ability failed with ' + error);
  }
})()
```
