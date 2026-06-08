---
displayed_sidebar: appDevSidebar
title: "取消通知"
original_url: /docs/dev/app-dev/application-services/notification-kit/notification-cancel
format: md
upstream_id: dev/app-dev/application-services/notification-kit/notification-cancel
last_sync: 2026-06-07
sync_hash: e0c0d631
---
用户点击通知并拉起应用到前台时，应用可以取消某条通知、部分通知或所有通知。

用户点击桌面图标拉起应用到前台时，用户查看后的应用内消息，应用可以选择取消这些已查看消息的通知。

例如：

场景1：用户收到某个好友的IM消息，点击通知进入应用查看消息后，应用可以取消相关通知提醒。

场景2：用户收到某个好友的IM消息，从桌面图标进入应用查看消息后，应用可以取消相关通知提醒。

## 接口说明

通知取消接口如下。接口详情参见[@ohos.notificationManager (NotificationManager模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager)。

| **接口名** | **描述** |
| --- | --- |
| cancel(id: number, callback: AsyncCallback\<void\>): void | 取消指定的通知。 |
| cancelAll(callback: AsyncCallback\<void\>): void | 取消所有该应用发布的通知。 |

## 开发步骤

本文以取消文本类型通知为例进行说明，其他类型通知取消操作与此类似。

1. 导入模块。

   ```
   import { notificationManager } from '@kit.NotificationKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = '[PublishOperation]';
   const DOMAIN_NUMBER: number = 0xFF00;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/CancelNotification.ets#L16-L23" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CancelNotification.ets</a></div>

2. 发布通知。

   参考[发布文本类型通知](/docs/dev/app-dev/application-services/notification-kit/publish-notification/text-notification)。
3. 取消通知。

   ```
   // 当拉起应用到前台，查看消息后，调用该接口取消通知。
   notificationManager.cancel(1, (err: BusinessError) => {
     if (err) {
       hilog.error(DOMAIN_NUMBER, TAG,
         `Failed to cancel notification. Code is ${err.code}, message is ${err.message}`);
       return;
     }
     hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in canceling notification.');
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/CancelNotification.ets#L58-L68" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CancelNotification.ets</a></div>
