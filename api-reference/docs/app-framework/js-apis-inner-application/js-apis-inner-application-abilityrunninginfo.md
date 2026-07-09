---
title: "AbilityRunningInfo"
upstream_id: "harmonyos-references/js-apis-inner-application-abilityrunninginfo"
catalog: "harmonyos-references"
content_hash: "a5c4902cf402"
synced_at: "2026-07-09T00:57:08.324360"
---

# AbilityRunningInfo

AbilityRunningInfo是记录Ability运行信息和状态的数据结构，通过[getAbilityRunningInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitymanager#abilitymanagergetabilityrunninginfos14)方法获取。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 14开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { abilityManager } from '@kit.AbilityKit';
```

#### AbilityRunningInfo

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| ability | [ElementName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-elementname) | 否 | 否 | Ability的ElementName信息。 |
| pid | number | 否 | 否 | 进程ID。 |
| uid | number | 否 | 否 | 所属应用程序的UID。 |
| processName | string | 否 | 否 | 进程的名称。 |
| startTime | number | 否 | 否 | Ability的启动时间。 |
| abilityState | [abilityManager.AbilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitymanager#abilitystate14) | 否 | 否 | Ability的状态。 |

示例：

```
import { abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  abilityManager.getAbilityRunningInfos()
    .then((data: abilityManager.AbilityRunningInfo[]) => {
      for (let i = 0; i < data.length; i++) {
        let abilityInfo = data[i];
        console.info(`getAbilityRunningInfos success, data: ${JSON.stringify(abilityInfo)}`);
      }
    })
    .catch((error: BusinessError) => {
      console.error(`getAbilityRunningInfos fail, error code: ${JSON.stringify(error.code)}, error msg: ${JSON.stringify(error.message)}`);
    })
} catch (e) {
  let code = (e as BusinessError).code;
  let msg = (e as BusinessError).message;
  console.error(`getAbilityRunningInfos fail, error code: ${JSON.stringify(code)}, error msg: ${JSON.stringify(msg)}`);
}
```
