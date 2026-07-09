---
title: "AbilityStageContext"
upstream_id: "harmonyos-references/js-apis-inner-application-abilitystagecontext"
catalog: "harmonyos-references"
content_hash: "47eb8d640e62"
synced_at: "2026-07-09T00:57:08.321279"
---

# AbilityStageContext

AbilityStageContext是AbilityStage的上下文环境，继承自[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。

AbilityStageContext提供允许访问特定于abilityStage的资源的能力，包括获取AbilityStage对应的ModuleInfo对象、环境变化对象。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { common } from '@kit.AbilityKit';
```

#### 属性

元服务API：从API version 11开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| currentHapModuleInfo | [HapModuleInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-hapmoduleinfo) | 否 | 否 | AbilityStage对应的ModuleInfo对象。 |
| config | [Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-configuration) | 否 | 否 | 环境变量。 |
| launchElement24+ | [ElementName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-elementname) | 否 | 是 | 创建AbilityStage时的ElementName。 **元服务API**：从API version 24开始，该接口支持在元服务中使用。 |

示例：

```
import { AbilityStage } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyAbilityStage extends AbilityStage {
  onCreate() {
    let abilityStageContext = this.context;
    // 获取当前模块名
    let name = abilityStageContext.currentHapModuleInfo.name;
    // 获取当前模块语言
    let language = abilityStageContext.config.language;
    // 获取创建AbilityStage时的ElementName
    let elementName = abilityStageContext.launchElement;
    if (elementName) {
      hilog.info(0x0000, 'testTag', 'bundleName: %{public}s', elementName.bundleName);
      hilog.info(0x0000, 'testTag', 'moduleName: %{public}s', elementName.moduleName);
      hilog.info(0x0000, 'testTag', 'abilityName: %{public}s', elementName.abilityName);
    }
  }
}
```
