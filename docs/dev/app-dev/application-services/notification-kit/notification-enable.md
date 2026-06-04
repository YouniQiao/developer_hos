---
displayed_sidebar: appDevSidebar
title: "请求通知授权"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-enable
---

应用需要获取用户授权才能发送通知。在通知发布前调用[requestEnableNotification()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationmanagerrequestenablenotification10-1)接口，弹窗让用户选择是否允许发送通知。当用户拒绝授权后，将无法通过该接口再次拉起弹窗。如果应用需要向用户再次申请通知授权，则可以使用[openNotificationSettings](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationmanageropennotificationsettings13)接口拉起通知管理半模态弹窗。

## 接口说明

接口详情参见[@ohos.notificationManager (NotificationManager模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager)。

**表1** 通知授权接口功能介绍

| **接口名** | **描述** |
| --- | --- |
| isNotificationEnabled():Promise<boolean> | 查询通知是否授权。 |
| requestEnableNotification(context: UIAbilityContext): Promise<void> | 请求发送通知的许可，第一次调用会弹窗让用户选择。 |
| openNotificationSettings(context: UIAbilityContext): Promise<void> | 拉起通知管理弹窗。 |

## 开发步骤

1. 导入NotificationManager模块。

   ```
   import { notificationManager } from '@kit.NotificationKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   import { common } from '@kit.AbilityKit';

   const TAG: string = '[PublishOperation]';
   const DOMAIN_NUMBER: number = 0xFF00;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/RequestEnableNotification.ets#L16-L24" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：RequestEnableNotification.ets</a></div>

2. 拉起通知弹窗，向用户请求通知授权。

   可通过requestEnableNotification的错误码判断用户是否授权。若返回的错误码为1600004，即为拒绝授权。

   ```
   let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
   notificationManager.isNotificationEnabled().then((data: boolean) => {
     hilog.info(DOMAIN_NUMBER, TAG, `isNotificationEnabled success, data: ${data}` );
     if (!data) {
       notificationManager.requestEnableNotification(context).then(() => {
         hilog.info(DOMAIN_NUMBER, TAG, `[ANS] requestEnableNotification success`);
       }).catch((err: BusinessError) => {
         if (1600004 == err.code) {
           hilog.error(DOMAIN_NUMBER, TAG,
             `[ANS] requestEnableNotification refused, code is ${err.code}, message is ${err.message}`);
         } else {
           hilog.error(DOMAIN_NUMBER, TAG,
             `[ANS] requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);
         }
       });
     }
   }).catch((err: BusinessError) => {
     hilog.error(DOMAIN_NUMBER, TAG,
       `isNotificationEnabled fail, code is ${err.code}, message is ${err.message}`);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/RequestEnableNotification.ets#L36-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：RequestEnableNotification.ets</a></div>

3. （可选）拉起通知管理半模态弹窗，向用户再次申请通知授权。

   ```
   let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
   notificationManager.isNotificationEnabled().then((data: boolean) => {
     hilog.info(DOMAIN_NUMBER, TAG, `isNotificationEnabled success, data:  ${data}`);
     if (!data) {
       notificationManager.openNotificationSettings(context).then(() => {
         hilog.info(DOMAIN_NUMBER, TAG, `[ANS] openNotificationSettings success`);
       }).catch((err: BusinessError) => {
         hilog.error(DOMAIN_NUMBER, TAG,
           `[ANS] openNotificationSettings failed, code is ${err.code}, message is ${err.message}`);
       });
     }
   }).catch((err: BusinessError) => {
     hilog.error(DOMAIN_NUMBER, TAG,
       `isNotificationEnabled fail, code is ${err.code}, message is ${err.message}`);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/RequestEnableNotification.ets#L63-L79" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：RequestEnableNotification.ets</a></div>
