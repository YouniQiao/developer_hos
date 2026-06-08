---
displayed_sidebar: appDevSidebar
title: "管理通知角标"
original_url: /docs/dev/app-dev/application-services/notification-kit/notification-badge
format: md
upstream_id: dev/app-dev/application-services/notification-kit/notification-badge
last_sync: 2026-06-07
sync_hash: fa7db865
upstream_hash: 009e7f8bf14f
---

针对未读的通知，系统提供了角标设置接口，将未读通知个数显示在桌面图标的右上角角标上。

通知增加时，角标上显示的未读通知个数需要增加。

通知被查看后，角标上显示的未读通知个数需要减少，没有未读通知时，不显示角标。

## 接口说明

当角标设定个数取值小于或等于0时，表示清除角标。取值大于99时，通知角标将显示99+。

* 增加角标数，支持如下两种方法：

  + 发布通知时，在[NotificationRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-notification-notificationrequest#notificationrequest-1)的badgeNumber字段里携带，桌面收到通知后，在原角标数上累加、呈现。
  + 调用接口[setBadgeNumber()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationmanagersetbadgenumber10)设置，桌面按设置的角标数呈现。
* 减少角标数，目前仅支持通过[setBadgeNumber()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationmanagersetbadgenumber10)设置。

  | **接口名** | **描述** |
  | --- | --- |
  | setBadgeNumber(badgeNumber: number): Promise\<void\> | 设置角标个数。 |

## 开发步骤

1. 导入NotificationManager模块。

   ```
   import { notificationManager } from '@kit.NotificationKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   import { BusinessError } from '@kit.BasicServicesKit';

   const TAG: string = '[PublishOperation]';
   const DOMAIN_NUMBER: number = 0xFF00;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/ManageNotificationBadges.ets#L16-L24" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ManageNotificationBadges.ets</a></div>

2. 增加角标个数。

   发布通知时，可在[NotificationRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-notification-notificationrequest#notificationrequest-1)的badgeNumber字段里携带相关信息，具体可参考[通知发布](/docs/dev/app-dev/application-services/notification-kit/publish-notification/text-notification)章节。

   示例为调用setBadgeNumber接口增加角标，在发布完新的通知后，调用该接口。

   ```
   let badgeNumber: number = 9;
   notificationManager.setBadgeNumber(badgeNumber).then(() => {
     hilog.info(DOMAIN_NUMBER, TAG, `Succeeded in setting badge number.`);
   }).catch((err: BusinessError) => {
     hilog.error(DOMAIN_NUMBER, TAG,
       `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/ManageNotificationBadges.ets#L63-L71" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ManageNotificationBadges.ets</a></div>

3. 减少角标个数。

   一条通知被查看后，应用需要调用接口设置剩下未读通知个数，桌面刷新角标。

   ```
   let badgeNumber: number = 8;
   notificationManager.setBadgeNumber(badgeNumber).then(() => {
     hilog.info(DOMAIN_NUMBER, TAG, `Succeeded in setting badge number.`);
   }).catch((err: BusinessError) => {
     hilog.error(DOMAIN_NUMBER, TAG,
       `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/ManageNotificationBadges.ets#L77-L85" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ManageNotificationBadges.ets</a></div>


## 常见问题

由于setBadgeNumber为异步接口，使用setBadgeNumber连续设置角标时，为了确保执行顺序符合预期，需要确保上一次设置完成后才能进行下一次设置。

* 反例

  每次接口调用是相互独立的、没有依赖关系的，实际执行时无法保证调用顺序。

  示例如下：

  ```
  let badgeNumber: number = 10;
  notificationManager.setBadgeNumber(badgeNumber).then(() => {
    hilog.info(DOMAIN_NUMBER, TAG, `setBadgeNumber 10 success.`);
  }).catch((err: BusinessError) => {
    hilog.error(DOMAIN_NUMBER, TAG,
      `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);
  });
  badgeNumber = 11;
  notificationManager.setBadgeNumber(badgeNumber).then(() => {
    hilog.info(DOMAIN_NUMBER, TAG, `setBadgeNumber 11 success.`);
  }).catch((err: BusinessError) => {
    hilog.error(DOMAIN_NUMBER, TAG,
      `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);
  });
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/ManageNotificationBadges.ets#L91-L106" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ManageNotificationBadges.ets</a></div>

* 正例

  多次接口调用存在依赖关系，确保上一次设置完成后才能进行下一次设置。

  示例如下：

  ```
  let badgeNumber: number = 10;
  notificationManager.setBadgeNumber(badgeNumber).then(() => {
    hilog.info(DOMAIN_NUMBER, TAG, `setBadgeNumber 10 success.`);
    badgeNumber = 11;
    notificationManager.setBadgeNumber(badgeNumber).then(() => {
      hilog.info(DOMAIN_NUMBER, TAG, `setBadgeNumber 11 success.`);
    }).catch((err: BusinessError) => {
      hilog.error(DOMAIN_NUMBER, TAG,
        `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);
    });
  }).catch((err: BusinessError) => {
    hilog.error(DOMAIN_NUMBER, TAG,
      `Failed to set badge number. Code is ${err.code}, message is ${err.message}`);
  });
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/ManageNotificationBadges.ets#L112-L127" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ManageNotificationBadges.ets</a></div>
