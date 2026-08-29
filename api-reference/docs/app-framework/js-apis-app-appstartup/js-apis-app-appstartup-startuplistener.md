---
title: "@ohos.app.appstartup.StartupListener (启动框架任务监听器)"
upstream_id: "harmonyos-references/js-apis-app-appstartup-startuplistener"
catalog: "harmonyos-references"
content_hash: "a65cc996f2e3"
synced_at: "2026-08-29T18:11:58.616006"
---

# @ohos.app.appstartup.StartupListener (启动框架任务监听器)

本模块提供[应用启动框架](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-startup)任务监听器的定义。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { StartupListener } from '@kit.AbilityKit';
```

#### StartupListener.onCompleted

onCompleted?(error: BusinessError<void>): void

在所有启动任务执行完成时调用。

系统能力：SystemCapability.Ability.AppStartup

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| error | [BusinessError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#businesserror) | 是 | 启动任务执行的错误信息。成功时error为null，失败时包含错误码和错误描述，可通过error.code获取错误码、error.message获取错误描述。可能的错误码包括28800001、28800002、28800003和28800004，错误原因及处理措施请参考[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-ability)。 |

示例：

```
import { StartupConfig, StartupConfigEntry, StartupListener } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class MyStartupConfigEntry extends StartupConfigEntry {
  onConfig() {
    hilog.info(0x0000, 'testTag', `onConfig`);
    let onCompletedCallback = (error: BusinessError<void>) => {
      hilog.info(0x0000, 'testTag', `onCompletedCallback`);
      if (error) {
        hilog.error(0x0000, 'testTag', 'onCompletedCallback: %{public}d, message: %{public}s', error.code,
          error.message);
      } else {
        hilog.info(0x0000, 'testTag', `onCompletedCallback: success.`);
      }
    };
    let startupListener: StartupListener = {
      'onCompleted': onCompletedCallback
    };
    let config: StartupConfig = {
      'timeoutMs': 10000,
      'startupListener': startupListener
    };
    return config;
  }
}
```
