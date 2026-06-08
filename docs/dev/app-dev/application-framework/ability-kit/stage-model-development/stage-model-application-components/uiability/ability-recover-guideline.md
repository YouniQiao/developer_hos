---
title: "UIAbility备份恢复"
original_url: /docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/ability-recover-guideline
format: md
upstream_id: dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/ability-recover-guideline
last_sync: 2026-06-07
sync_hash: 25073e68
---
## 场景介绍

当应用后台运行时，可能由于系统资源管控等原因导致应用关闭、进程退出，应用直接退出可能会导致用户数据丢失。如果应用在[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext)中启用了[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)备份恢复功能，并对临时数据进行保存，则可以在应用退出后的下一次启动时恢复先前的状态和数据（包括应用的页面栈以及[onSaveState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onsavestate)接口中保存的数据），从而保证用户体验的连贯性。

![](./img/92e0dcc5.png)

应用正常关闭时，不会触发[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)备份流程。应用正常启动（例如通过startAbility接口启动或点击图标启动）时，不触发[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)恢复流程。

## 运行机制

* [UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)数据备份：当应用后台运行时，如果因系统资源管控、进程被kill、异常崩溃等非正常原因退出时，系统自动调用[onSaveState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onsavestate)进行备份。
* [UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)数据恢复：恢复的[Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)数据可以在应用的[onCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#oncreate)生命周期中获取，页面栈数据在应用的[onWindowStageCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onwindowstagecreate)生命周期中恢复。

## 约束限制

* [UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)备份恢复支持多实例，备份数据保存7天，以文件的形式存储在应用的沙箱路径中。
* 备份数据存储在[Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want#want)中的parameter字段中，由于序列化大小限制，支持的最大数据量为200KB。
* 重启设备不支持还原备份。
* 备份恢复机制依赖任务保留机制，如果应用设置[removeMissionAfterTerminate](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file#abilities标签)为true，或者设备不支持任务保留（比如PC/2in1设备），则备份恢复机制不生效。
* [UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability)不支持备份恢复。

## 接口说明

[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)备份恢复接口由[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext)模块提供，开发者可以通过在[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)中通过this.context直接调用，详见[开发步骤](#开发步骤)。

| 接口名称 | 说明 |
| --- | --- |
| setRestoreEnabled(enabled: boolean): void | 设置[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)是否启用备份恢复。 |

[setRestoreEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#setrestoreenabled14)接口需要在应用初始化阶段调用（[onForeground](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onforeground)前），比如[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)的[onCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#oncreate)调用。

## 开发步骤

开发者需要在应用模块初始化时启用[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)的备份恢复功能。

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
// ···

const DOMAIN = 0x0000;

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(DOMAIN, 'EntryAbility', '[Demo] EntryAbility onCreate');
    this.context.setRestoreEnabled(true);
    // ···
  }

// ···
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/UIAbilityRecover/entry/src/main/ets/entryability/EntryAbility.ets#L16-L83" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EntryAbility.ets</a></div>


开发者主动保存数据，在UIAbility启动时恢复。

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
// ···

const DOMAIN = 0x0000;

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(DOMAIN, 'EntryAbility', '[Demo] EntryAbility onCreate');
    this.context.setRestoreEnabled(true);
    if (want && want.parameters) {
      let recoveryMyData = want.parameters['myData'];
    }
  }

  onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, Object>): AbilityConstant.OnSaveResult {
    // 保存应用数据。
    hilog.info(DOMAIN, 'EntryAbility', '[Demo] EntryAbility onSaveState');
    wantParam['myData'] = 'my1234567';
    return AbilityConstant.OnSaveResult.ALL_AGREE;
  }

// ···
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/UIAbilityRecover/entry/src/main/ets/entryability/EntryAbility.ets#L17-L82" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EntryAbility.ets</a></div>
