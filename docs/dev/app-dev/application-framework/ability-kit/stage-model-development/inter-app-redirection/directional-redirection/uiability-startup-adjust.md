---
title: "显式Want跳转切换应用链接跳转适配指导"
original_url: /docs/dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust
format: md
---


从API 12开始，已不再推荐三方应用使用指定Ability方式（即显式Want）拉起其他应用，推荐通过指定[应用链接](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview#应用链接)的方式来实现。

本章节介绍如何从显式Want跳转切换到应用链接跳转。

![](./img/e10ef24c.png)

暂不支持显式Want中flag字段的转换。如需使用flag字段，建议仍采用显式Want跳转的方式。

## 启动其他应用的UIAbility

1. 将待跳转的应用安装到设备，在其对应UIAbility的[module.json5配置文件](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)中配置skills标签的entities字段、actions字段和uri字段：

   * "actions"列表中包含"ohos.want.action.viewData"。
   * "entities"列表中包含"entity.system.browsable"。
   * "uris"列表中包含"scheme"为"https"且"domainVerify"为true的元素。uri的匹配规则参考[uri匹配](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings#uri匹配规则)，domainVerify为true代表开启域名检查，通过App Linking匹配该应用时需经过配置的域名校验后才能匹配到。

   ```
   {
     "module": {
       // ···
       "abilities": [
       // ···
         {
           // ···
           "skills": [
             {
               "entities": [
                 "entity.system.browsable"
               ],
               "actions": [
                 "ohos.want.action.viewData"
               ],
               "uris": [
                 {
                   "scheme": "https",
                   "host": "www.example.com"
                 }
               ],
               "domainVerify": true
             }
           ]
         },
       // ···
       ],
       // ···
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/PullLinking/entry/src/main/module.json5#L16-L354" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：module.json5</a></div>

2. 调用方通过[openLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#openlink12)接口执行跳转，需要传入link和[options](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-openlinkoptions)，不再需要传入bundleName、moduleName和abilityName。系统会根据传入的link匹配到符合skills配置的应用。

   * 当options中的appLinkingOnly为true时，匹配到的应用会经过应用市场域名检查（需联网）返回域名校验检查的唯一匹配项或未匹配结果。
   * 当options中的appLinkingOnly为false时，会优先尝试以App Linking的方式拉起，如果没有匹配的应用则跳转默认浏览器打开网页。

   ```
   import { common, OpenLinkOptions } from '@kit.AbilityKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = '[UIAbilityComponentsOpenLink]';
   const DOMAIN_NUMBER: number = 0xFF00;

   @Entry
   @Component
   struct WantAbilityPage1 {
     build() {
       Button('start link', { type: ButtonType.Capsule, stateEffect: true })
         .width('87%')
         .height('5%')
         .margin({ bottom: '12vp' })
         .onClick(() => {
           let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
           /*
            * 通过startAbility接口显式启动其他UIAbility，推荐使用openLink接口。
            * let want: Want = {
            *   bundleName: "com.test.example",
            *   moduleName: "entry",
            *   abilityName: "EntryAbility"
            * };
            * try {
            *   context.startAbility(want)
            *     .then(() => {
            *       hilog.info(DOMAIN_NUMBER, TAG, 'startAbility success.');
            *     }).catch((err: BusinessError) => {
            *       hilog.error(DOMAIN_NUMBER, TAG, `startAbility failed. Code is ${err.code}, message is ${err.message}`);
            *     })
            * } catch (paramError) {
            *   hilog.error(DOMAIN_NUMBER, TAG, `Failed to startAbility. Code is ${paramError.code},\
            *   message is ${paramError.message}`);
            * }
            */
           let link: string = 'https://www.example.com';
           let openLinkOptions: OpenLinkOptions = {
             // 匹配的abilities选项是否需要通过App Linking域名校验，匹配到唯一配置过的应用ability
             appLinkingOnly: true,
             // 同want中的parameter，用于传递的参数
             parameters: {demo_key: 'demo_value'}
           };

           try {
             context.openLink(link, openLinkOptions)
               .then(() => {
                 hilog.info(DOMAIN_NUMBER, TAG, 'open link success.');
               }).catch((err: BusinessError) => {
               hilog.error(DOMAIN_NUMBER, TAG, `open link failed. Code is ${err.code}, message is ${err.message}`);
             })
           } catch (paramError) {
             hilog.error(DOMAIN_NUMBER, TAG, `Failed to start link. Code is ${paramError.code}, message is ${paramError.message}`);
           }
         })
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/PullLinking/entry/src/main/ets/pages/WantAbilityPage1.ets#L15-L71" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：WantAbilityPage1.ets</a></div>


## 启动其他应用的UIAbility并获取返回结果

1. 将待跳转的应用安装到设备，在其对应UIAbility的[module.json5配置文件](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)中配置skills标签的entities字段、actions字段和uri字段：

   * "actions"列表中包含"ohos.want.action.viewData"。
   * "entities"列表中包含"entity.system.browsable"。
   * "uris"列表中包含"scheme"为"https"且"domainVerify"为true的元素。uri的匹配规则参考[uri匹配](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings#uri匹配规则)，domainVerify为true代表开启域名检查，通过App Linking匹配该应用时需经过配置的域名校验后才能匹配到。

   ```
   {
     "module": {
       // ···
       "abilities": [
       // ···
         {
           // ···
           "skills": [
             {
               "entities": [
                 "entity.system.browsable"
               ],
               "actions": [
                 "ohos.want.action.viewData"
               ],
               "uris": [
                 {
                   "scheme": "https",
                   "host": "www.example.com"
                 }
               ],
               "domainVerify": true
             }
           ]
         },
       // ···
       ],
       // ···
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/PullLinking/entry/src/main/module.json5#L17-L353" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：module.json5</a></div>

2. 调用方通过[openLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#openlink12)接口执行跳转，需要传入link和[options](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-openlinkoptions)，不再需要传入bundleName、moduleName和abilityName。系统会根据传入的link匹配到符合skills配置的应用。AbilityResult回调结果通过入参传入回调函数，在被启动的UIAbility停止自身后返回给调用方。启动成功和失败结果仍通过Promise返回。

   * 当options中的appLinkingOnly为true时，匹配到的应用会经过应用市场域名检查（需联网）返回域名校验检查的唯一匹配项或未匹配结果。
   * 当options中的appLinkingOnly为false时，会优先尝试以App Linking的方式拉起，如果没有匹配的应用则跳转默认浏览器打开网页。

   ```
   import { common, OpenLinkOptions } from '@kit.AbilityKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = '[UIAbilityComponentsOpenLink]';
   const DOMAIN_NUMBER: number = 0xFF00;

   @Entry
   @Component
   struct WantAbilityPage2 {
     build() {
       Button('start link', { type: ButtonType.Capsule, stateEffect: true })
         .width('87%')
         .height('5%')
         .margin({ bottom: '12vp' })
         .onClick(() => {
           let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
           /*
            * 通过startAbility接口显式启动其他UIAbility，推荐使用openLink接口。
            * let want: Want = {
            *   bundleName: "com.test.example",
            *   moduleName: "entry",
            *   abilityName: "EntryAbility"
            * };
            * try {
            *   context.startAbilityForResult(want)
            *     .then((data) => {
            *       hilog.info(DOMAIN_NUMBER, TAG, 'startAbility success. data: ' + JSON.stringify(data));
            *     }).catch((err: BusinessError) => {
            *       hilog.error(DOMAIN_NUMBER, TAG, `startAbility failed. Code is ${err.code}, message is ${err.message}`);
            *     })
            * } catch (paramError) {
            *   hilog.error(DOMAIN_NUMBER, TAG, `Failed to startAbility. Code is ${paramError.code}, \
            *   message is ${paramError.message}`);
            * }
            */
           let link: string = 'https://www.example.com';
           let openLinkOptions: OpenLinkOptions = {
             // 匹配的abilities选项是否需要通过App Linking域名校验，匹配到唯一配置过的应用ability
             appLinkingOnly: true,
             // 同want中的parameter，用于传递的参数
             parameters: {demo_key: 'demo_value'}
           };

           try {
             context.openLink(link, openLinkOptions, (err, data) => {
               // AbilityResult回调函数，仅在被启动的UIAbility终止时触发
               hilog.info(DOMAIN_NUMBER, TAG, 'open link success. Callback result: ' + JSON.stringify(data));
             }).then(() => {
               hilog.info(DOMAIN_NUMBER, TAG, 'open link success.');
             }).catch((err: BusinessError) => {
               hilog.error(DOMAIN_NUMBER, TAG, `open link failed. Code is ${err.code}, message is ${err.message}`);
             })
           } catch (paramError) {
             hilog.error(DOMAIN_NUMBER, TAG, `Failed to start link. Code is ${paramError.code}, message is ${paramError.message}`);
           }
         })
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/PullLinking/entry/src/main/ets/pages/WantAbilityPage2.ets#L15-L73" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：WantAbilityPage2.ets</a></div>
