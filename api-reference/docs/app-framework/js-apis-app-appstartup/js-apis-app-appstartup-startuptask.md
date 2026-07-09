---
title: "@ohos.app.appstartup.StartupTask (启动框架任务)"
upstream_id: "harmonyos-references/js-apis-app-appstartup-startuptask"
catalog: "harmonyos-references"
content_hash: "861d3721274f"
synced_at: "2026-07-09T00:57:05.639917"
---

# @ohos.app.appstartup.StartupTask (启动框架任务)

本模块提供[应用启动框架](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-startup)任务的相关能力。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { StartupTask } from '@kit.AbilityKit';
```

#### StartupTask

该类提供启动任务的相关能力，使用[@Sendable装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable#sendable装饰器)装饰。

装饰器类型：@Sendable

#### [h2]onDependencyCompleted

onDependencyCompleted?(dependency: string, result: Object): void

当依赖的启动任务执行完成时该方法将会被调用。

系统能力：SystemCapability.Ability.AppStartup

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dependency | string | 是 | 依赖的启动任务名称。 |
| result | Object | 是 | 依赖的启动任务[init](#init)返回的执行结果。 |

示例：

```
import { StartupTask, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Sendable
export default class StartupTask_001 extends StartupTask {
  constructor() {
    super();
  }

  async init(context: common.AbilityStageContext) {
    // ...
  }

  onDependencyCompleted(dependency: string, result: Object): void {
    hilog.info(0x0000, 'testTag', 'StartupTask_001 onDependencyCompleted, dependency: %{public}s, result: %{public}s',
      dependency, JSON.stringify(result));
    // ...
  }
}
```

#### [h2]init

init(context: AbilityStageContext): Promise<Object | void>

当所有依赖的启动任务都执行完成后，该方法将会被调用。开发者可以在该回调中执行该启动任务的初始化操作。使用Promise异步回调。

系统能力：SystemCapability.Ability.AppStartup

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | [AbilityStageContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-abilitystagecontext) | 是 | [AbilityStage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage)的上下文环境 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回启动任务执行结果对象。 |

示例：

```
import { StartupTask, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Sendable
export default class StartupTask_001 extends StartupTask {
  constructor() {
    super();
  }
  async init(context: common.AbilityStageContext) {
    hilog.info(0x0000, 'testTag', 'StartupTask_001 init.');
    // ...
    
    return "StartupTask_001";
  }

  onDependencyCompleted(dependency: string, result: Object): void {
    // ...
  }
}
```
