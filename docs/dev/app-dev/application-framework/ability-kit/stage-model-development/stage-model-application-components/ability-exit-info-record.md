---
title: "获取应用异常退出原因"
original_url: /docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record
format: md
upstream_id: dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record
last_sync: 2026-06-07
sync_hash: c3c598dc
---
当应用异常退出后再次启动时，开发者往往需要获取上次异常退出的具体原因和当时的应用状态信息，比如应用内存占用的rss、pss值、上次应用退出的时间等等。通过UIAbility和UIExtensionAbility的OnCreate生命周期函数中的launchParam参数，开发者可以获取到相关信息，并将其应用于应用体验的分析改进，从而调整业务逻辑、提高应用的存活率。

## 约束限制

仅[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)和[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability)支持获取上次的退出原因。

## 接口说明

接口详情参见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilityconstant#launchparam)。

| **接口名** | **描述** |
| --- | --- |
| [LaunchParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilityconstant#launchparam) | 启动参数。此接口的lastExitReason、lastExitMessage、lastExitDetailInfo成员记录Ability上次异常退出的信息。 |
| [LastExitDetailInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilityconstant#lastexitdetailinfo18) | 从API version 18开始，记录Ability所在进程上次退出时的关键运行信息。 |

## 开发步骤

1. 获取UIAbility上次退出的原因。

   在UIAbility类的onCreate成员函数的launchParam参数中读取Ability上次退出的信息。

   ```
   import { UIAbility, Want, AbilityConstant } from '@kit.AbilityKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const DOMAIN_NUMBER = 0xF811;
   const TAG  = '[Sample_UnexpExit]';
   const MAX_RSS_THRESHOLD: number = 100000;
   const MAX_PSS_THRESHOLD: number = 100000;

   function doSomething() {
     hilog.info(DOMAIN_NUMBER, TAG, 'do Something');
   }

   function doAnotherThing() {
     hilog.info(DOMAIN_NUMBER, TAG, 'do Another Thing');
   }

   export default class ExitAbility extends UIAbility {
     onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
       // 获取退出原因
       let reason: number = launchParam.lastExitReason;
       let subReason: number = -1;
       if (launchParam.lastExitDetailInfo) {
         subReason = launchParam.lastExitDetailInfo.exitSubReason;
       }
       let exitMsg: string = launchParam.lastExitMessage;
       // ···
       if (launchParam.lastExitDetailInfo) {
         // 获取Ability上次退出时所在进程的信息
         let pid = launchParam.lastExitDetailInfo.pid;
         let processName: string = launchParam.lastExitDetailInfo.processName;
         let rss: number = launchParam.lastExitDetailInfo.rss;
         let pss: number = launchParam.lastExitDetailInfo.pss;
       // ···
         // 其他信息
         let uid: number = launchParam.lastExitDetailInfo.uid;
         let timestamp: number = launchParam.lastExitDetailInfo.timestamp;
       // ···
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/UnexpExit/entry/src/main/ets/exitability/ExitAbility.ets#L15-L80" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ExitAbility.ets</a></div>

2. 根据上次退出的信息做相应的业务处理。

   * 对于不同的退出原因，开发者可以增加不同的处理逻辑，例如：

   ```
   if (reason === AbilityConstant.LastExitReason.APP_FREEZE) {
     // Ability上次因无响应而退出，此处可增加处理逻辑。
     doSomething();
   } else if (reason === AbilityConstant.LastExitReason.SIGNAL && subReason === 9) {
     // Ability上次所在进程因kill -9信号而退出，此处可增加处理逻辑。
     doAnotherThing();
   } else if (reason === AbilityConstant.LastExitReason.RESOURCE_CONTROL) {
     // Ability上次因rss管控而退出，此处可实现处理逻辑，最简单的就是打印出来。
     hilog.info(DOMAIN_NUMBER, TAG, `The ability has exit last because the rss control，the lastExitReason is ${reason}, subReason is ${subReason}, lastExitMessage is ${exitMsg}.`);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/UnexpExit/entry/src/main/ets/exitability/ExitAbility.ets#L42-L53" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ExitAbility.ets</a></div>

   * 根据进程信息感知应用内存占用异常，例如：

   ```
   if (rss > MAX_RSS_THRESHOLD || pss > MAX_PSS_THRESHOLD) {
     // RSS或PSS值过大，说明内存使用率接近或达到上限，打印告警，或者增加处理逻辑。
     hilog.warn(DOMAIN_NUMBER, TAG, `Process ${processName}(${pid}) memory usage approaches or reaches the upper limit.`);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/UnexpExit/entry/src/main/ets/exitability/ExitAbility.ets#L62-L67" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ExitAbility.ets</a></div>

   * 根据异常退出时刻的时间戳，明确异常发生的时刻，便于问题定位。

   ```
   hilog.info(DOMAIN_NUMBER, TAG, `App ${uid} terminated at ${timestamp}.`);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/UnexpExit/entry/src/main/ets/exitability/ExitAbility.ets#L73-L75" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ExitAbility.ets</a></div>
