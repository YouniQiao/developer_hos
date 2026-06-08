---
displayed_sidebar: appDevSidebar
title: "共享联系人信息到分享推荐区"
original_url: /docs/dev/app-dev/application-services/share-kit-guide/system-share/share-target-application/share-intents-share
format: md
upstream_id: dev/app-dev/application-services/share-kit-guide/system-share/share-target-application/share-intents-share
last_sync: 2026-06-07
sync_hash: 94efbdd1
upstream_hash: d9bb2214ff27
---

通过意图框架服务，目标应用可以将联系人信息共享到分享推荐区。参考：[习惯推荐-接入方案](/docs/dev/app-dev/ai/intents-habit-rec-access-programme)。

![](./img/a17b586d.png)

该示例代码无法直接运行，需要申请意图框架白名单。参见：[Intents Kit接入流程](/docs/dev/app-dev/ai/intents-kit-guide/intents-access-flow)。

## 开发步骤

1. 导入相关模块。

   ```
   import BuildProfile from 'BuildProfile';
   import { util } from '@kit.ArkTS';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { insightIntent } from '@kit.IntentsKit';
   ```
2. 目标应用构造联系人数据。

   ```
   const intent: insightIntent.InsightIntent = {
     intentName: 'SendMessage', // 意图名
     intentVersion: '1.0', // 意图版本
     identifier: util.generateRandomUUID(), // 意图标识符
     intentActionInfo: { // 意图执行信息
       actionMode: 'EXECUTED', // 动作模式
       executedTimeSlots: { // 实际发生时间段
         executedStartTime: new Date().getTime(),
         executedEndTime: new Date().getTime(),
       }
     },
     intentEntityInfo: { // 意图实体信息
       entityId: 'this-is-id', // 实体Id
       entityName: 'Contact', // 实体名称
       name: 'Nickname', // 联系人昵称
       icon: 'data:image/png;base64,...', // 联系人头像
       phoneNumbers: [], // 联系人电话号码
       extras: {
         shareParams: {
           bundleName: BuildProfile.BUNDLE_NAME, // 应用包名
           moduleName: 'entry', // 应用模块名 根据实际填写
           abilityName: 'SampleContactAbility', // 应用ability名 根据实际填写
           action: 'ohos.want.action.sendData', // 标识分享 不可修改
         }
       }
     }
   };
   ```
3. 目标应用共享联系人数据。

   ```
   let uiContext: UIContext = this.getUIContext();
   let context: Context = uiContext.getHostContext() as Context;
   insightIntent.shareIntent(context, [intent]).then(() => {
     console.info('shareIntent ok');
   }).catch((err: BusinessError) => {
     console.error(`shareIntent failed. Code: ${err.code}. message: ${err.message}`);
   });
   ```
