---
title: "@ohos.application.abilityDelegatorRegistry (AbilityDelegatorRegistry)"
upstream_id: "harmonyos-references/js-apis-application-abilitydelegatorregistry"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:51.670392"
---

# @ohos.application.abilityDelegatorRegistry (AbilityDelegatorRegistry)

AbilityDelegatorRegistry模块提供用于存储已注册的[AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator)和[AbilityDelegatorArgs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs)对象的全局寄存器的能力，包括获取应用程序的AbilityDelegator对象、获取单元测试参数AbilityDelegatorArgs对象。该模块中的接口只能用于测试框架中。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 8开始支持，从API version 9废弃，替换模块为[@ohos.app.ability.abilityDelegatorRegistry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitydelegatorregistry)。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';
```

#### AbilityLifecycleState

Ability生命周期状态。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 值 | 说明 |
| --- | --- | --- |
| UNINITIALIZED | 0 | 表示无效状态。 |
| CREATE | 1 | 表示Ability处于已创建状态。 |
| FOREGROUND | 2 | 表示Ability处于前台状态。 |
| BACKGROUND | 3 | 表示Ability处于后台状态。 |
| DESTROY | 4 | 表示Ability处于已销毁状态。 |

#### abilityDelegatorRegistry.getAbilityDelegator

getAbilityDelegator(): AbilityDelegator

获取应用程序的AbilityDelegator对象。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| [AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator) | [AbilityDelegator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegator)对象。可以用来调度测试框架相关功能。 |

示例：

```
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';

let abilityDelegator = AbilityDelegatorRegistry.getAbilityDelegator();
```

#### abilityDelegatorRegistry.getArguments

getArguments(): AbilityDelegatorArgs

获取单元测试参数AbilityDelegatorArgs对象。

系统能力： SystemCapability.Ability.AbilityRuntime.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| [AbilityDelegatorArgs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs) | [AbilityDelegatorArgs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitydelegatorargs)对象。可以用来获取测试参数。 |

示例：

```
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';

let args = AbilityDelegatorRegistry.getArguments();
console.info(`getArguments bundleName: ${args.bundleName}`);
console.info(`getArguments testCaseNames: ${args.testCaseNames}`);
console.info(`getArguments testRunnerClassName: ${args.testRunnerClassName}`);
```
