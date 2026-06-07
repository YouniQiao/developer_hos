---
title: "卡片拉起应用UIAbility到后台（call事件）"
original_url: /docs/dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call
format: md
---


许多应用希望借助卡片的能力，实现和应用在前台时相同的功能。例如音乐卡片，卡片上提供播放、暂停等按钮，点击不同按钮将触发音乐应用的不同功能，进而提高用户的体验。在卡片中使用[postCardAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-postcardaction#postcardaction-1)接口的call能力，能够将卡片提供方应用的指定的UIAbility拉到后台。同时，call能力提供了调用应用指定方法、传递数据的功能，使应用在后台运行时可以通过卡片上的按钮执行不同的功能。

![](./img/28695058.png)

本文主要介绍动态卡片的事件开发。对于静态卡片，请参见[FormLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-formlink)。

## 开发步骤

1. 创建动态卡片

   新建一个名为WidgetEventCall的ArkTs动态卡片。
2. 页面布局代码实现

   在卡片页面中布局两个按钮，点击按钮A或按钮B，会调用postCardAction向指定UIAbility发送call事件，在call事件内定义了需要调用的方法。按钮A和按钮B分别对应调用funA、funB方法，其中funA携带了formID参数，funB携带了formID和num参数，开发过程中请根据实际需要传参。postCardAction中的method参数为必填参数，用于标识需要调用的方法名称，与步骤3中UIAbility监听的方法一致，其他参数为非必填。

   ```
   //src/main/ets/widgeteventcall/pages/WidgetEventCallCard.ets
   let storageEventCall = new LocalStorage();

   @Entry(storageEventCall)
   @Component
   struct WidgetEventCallCard {
     @LocalStorageProp('formId') formId: string = '12400633174999288';
     // $r('app.string.ButtonA_label')和$r('app.string.ButtonB_label')需要替换为开发者所需的资源文件
     private funA: Resource = $r('app.string.ButtonA_label');
     private funB: Resource = $r('app.string.ButtonB_label');

     build() {
       RelativeContainer() {
         Button(this.funA)
           .id('funA__')
           .fontSize(14)
           .fontWeight(FontWeight.Bold)
           .alignRules({
             center: { anchor: '__container__', align: VerticalAlign.Center },
             middle: { anchor: '__container__', align: HorizontalAlign.Center }
           })
           .onClick(() => {
             postCardAction(this, {
               action: 'call',
               // 只能跳转到当前应用下的UIAbility，与module.json5中定义保持一致
               abilityName: 'WidgetEventCallEntryAbility',
               params: {
                 formId: this.formId,
                 // 需要调用的方法名称
                 method: 'funA'
               }
             });
           })

         Button(this.funB)
           .id('funB__')
           .fontSize(14)
           .fontWeight(FontWeight.Bold)
           .margin({ top: 10 })
           .alignRules({
             top: { anchor: 'funA__', align: VerticalAlign.Bottom },
             middle: { anchor: '__container__', align: HorizontalAlign.Center }
           })
           .onClick(() => {
             postCardAction(this, {
               action: 'call',
               abilityName: 'WidgetEventCallEntryAbility',
               params: {
                 formId: this.formId,
                 // 需要调用的方法名称
                 method: 'funB',
                 num: 1
               }
             });
           })
       }
       .height('100%')
       .width('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ApplicationModels/StageServiceWidgetCards/entry/src/main/ets/widgeteventcall/pages/WidgetEventCallCard.ets#L15-L77" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：WidgetEventCallCard.ets</a></div>

3. 创建指定的UIAbility

   在UIAbility中监听call事件，根据监听到的method参数中的方法名称调用对应方法，并通过[rpc.Parcelable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-rpc#parcelable9)获取参数。UIAbility中监听的方法与步骤2中调用的方法需保持一致。

   ```
   //src/main/ets/WidgetEventCallEntryAbility/WidgetEventCallEntryAbility.ets
   import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { rpc } from '@kit.IPCKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = 'WidgetEventCallEntryAbility';
   const DOMAIN_NUMBER: number = 0xFF00;
   const CONST_NUMBER_1: number = 1;
   const CONST_NUMBER_2: number = 2;

   // ipc通信返回类型的实现，用于数据序列化和反序列化
   class MyParcelable implements rpc.Parcelable {
     private num: number;
     private str: string;

     constructor(num: number, str: string) {
       this.num = num;
       this.str = str;
     }

     marshalling(messageSequence: rpc.MessageSequence): boolean {
       messageSequence.writeInt(this.num);
       messageSequence.writeString(this.str);
       return true;
     }

     unmarshalling(messageSequence: rpc.MessageSequence): boolean {
       this.num = messageSequence.readInt();
       this.str = messageSequence.readString();
       return true;
     }
   }

   export default class WidgetEventCallEntryAbility extends UIAbility {
     // 如果UIAbility启动，在收到call事件后会触发onCreate生命周期回调
     onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
       try {
         // 监听call事件所需的方法并调用
         this.callee.on('funA', (data: rpc.MessageSequence) => {
           // 获取call事件中传递的所有参数
           hilog.info(DOMAIN_NUMBER, TAG, `FunACall param:  ${JSON.stringify(data.readString())}`);
           return new MyParcelable(CONST_NUMBER_1, 'aaa');
         });
         this.callee.on('funB', (data: rpc.MessageSequence) => {
           // 获取call事件中传递的所有参数
           hilog.info(DOMAIN_NUMBER, TAG, `FunBCall param:  ${JSON.stringify(data.readString())}`);
           return new MyParcelable(CONST_NUMBER_2, 'bbb');
         });
       } catch (err) {
         hilog.error(DOMAIN_NUMBER, TAG, `Failed to register callee on. Cause: ${JSON.stringify(err as BusinessError)}`);
       }
     }

     // 进程退出时，解除监听
     onDestroy(): void | Promise<void> {
       try {
         this.callee.off('funA');
         this.callee.off('funB');
       } catch (err) {
         hilog.error(DOMAIN_NUMBER, TAG, `Failed to register callee off. Cause: ${JSON.stringify(err as BusinessError)}`);
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ApplicationModels/StageServiceWidgetCards/entry/src/main/ets/widgeteventcallentryability/WidgetEventCallEntryAbility.ets#L16-L89" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：WidgetEventCallEntryAbility.ets</a></div>

4. 配置后台运行权限

   call事件存在约束限制，卡片提供方应用需要在module.json5下添加后台运行权限([ohos.permission.KEEP\_BACKGROUND\_RUNNING](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all#ohospermissionkeep_background_running))。

   ```
   //src/main/module.json5
   "requestPermissions": [
     {
       "name": "ohos.permission.KEEP_BACKGROUND_RUNNING",
     },
   // ···
     // [EndExclude jscard_extension_ability]
   ]
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ApplicationModels/StageServiceWidgetCards/entry/src/main/module.json5#L191-L216" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：module.json5</a></div>

5. 配置指定的UIAbility

   在module.json5的abilities数组内添加WidgetEventCallEntryAbility对应的配置信息。

   ```
   //src/main/module.json5
   "abilities": [
   // ···
     {
       "name": "WidgetEventCallEntryAbility",
       "srcEntry": "./ets/widgeteventcallentryability/WidgetEventCallEntryAbility.ets",
       "description": "$string:WidgetEventCallEntryAbility_desc",
       "icon": "$media:icon",
       "label": "$string:WidgetEventCallEntryAbility_label",
       "startWindowIcon": "$media:icon",
       "startWindowBackground": "$color:start_window_background"
     }
   ],
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ApplicationModels/StageServiceWidgetCards/entry/src/main/module.json5#L31-L93" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：module.json5</a></div>
