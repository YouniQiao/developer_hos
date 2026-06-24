---
title: "ProcessInfo"
upstream_id: "harmonyos-references/js-apis-inner-app-processinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:46:49.785629"
---

# ProcessInfo

定义进程信息，可以通过[getProcessInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-app-context#contextgetprocessinfo7)获取当前Ability运行的进程信息。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 7开始支持，仅支持FA模型。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import featureAbility from '@ohos.ability.featureAbility';
```

#### 属性

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pid | number | 否 | 否 | 进程ID。 |
| processName | string | 否 | 否 | 进程名称。 |

示例：

```
import featureAbility from '@ohos.ability.featureAbility';

let context = featureAbility.getContext();
context.getProcessInfo((error, data) => {
    if (error && error.code !== 0) {
        console.error(`getProcessInfo fail, error: ${JSON.stringify(error)}`);
    } else {
        console.info(`getProcessInfo success, data: ${JSON.stringify(data)}`);
        let pid = data.pid;
        let processName = data.processName;
    }
});
```
