---
displayed_sidebar: appDevSidebar
title: "发布文本类型通知"
original_url: /docs/dev/app-dev/application-services/notification-kit/publish-notification/text-notification
format: md
---


文本类型通知主要应用于发送短信息、提示信息等，支持普通文本类型和多行文本类型。

**表1** 基础类型通知中的内容分类

| 类型 | 描述 |
| --- | --- |
| NOTIFICATION\_CONTENT\_BASIC\_TEXT | 普通文本类型。 |
| NOTIFICATION\_CONTENT\_MULTILINE | 多行文本类型。 |

## 接口说明

通知发布接口说明详见下表，通知发布的详情可通过入参[NotificationRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-notification-notificationrequest#notificationrequest-1)来进行指定，可以包括通知内容、通知ID、通知的通道类型和通知发布时间等信息。

| **接口名** | **描述** |
| --- | --- |
| publish(request: NotificationRequest, callback: AsyncCallback\<void\>): void | 发布通知。 |

## 开发步骤

1. 导入模块。

   ```
   import { notificationManager } from '@kit.NotificationKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = '[PublishOperation]';
   const DOMAIN_NUMBER: number = 0xFF00;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/PublishNotification.ets#L16-L23" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PublishNotification.ets</a></div>

2. 构造NotificationRequest对象，并发布通知。

   * 普通文本类型通知由标题、文本内容和附加信息三个字段组成。详情请参考[NotificationBasicContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-notification-notificationcontent#notificationbasiccontent)。

     ```
     let notificationRequest: notificationManager.NotificationRequest = {
       id: 1,
       content: {
         notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT, // 普通文本类型通知
         normal: {
           title: 'test_title',
           text: 'test_text',
           additionalText: 'test_additionalText',
         }
       }
     };
     notificationManager.publish(notificationRequest, (err: BusinessError) => {
       if (err) {
         hilog.error(DOMAIN_NUMBER, TAG,
           `Failed to publish notification. Code is ${err.code}, message is ${err.message}`);
         return;
       }
       hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in publishing notification.');
     });
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/PublishNotification.ets#L33-L53" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PublishNotification.ets</a></div>

   * 多行文本类型通知继承了普通文本类型的字段，同时新增了多行文本内容、内容概要和通知展开时的标题。详情请参考[NotificationMultiLineContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-notification-notificationcontent#notificationmultilinecontent)。

     ```
     let notificationRequest: notificationManager.NotificationRequest = {
       id: 3,
       content: {
         notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_MULTILINE, // 多行文本类型通知
         multiLine: {
           title: 'test_multi_line_title',
           text: 'test_text',
           briefText: 'test_briefText',
           longTitle: 'test_longTitle',
           lines: ['line_01', 'line_02', 'line_03'],
         }
       }
     };
     // 发布通知
     notificationManager.publish(notificationRequest, (err: BusinessError) => {
       if (err) {
         hilog.error(DOMAIN_NUMBER, TAG,
           `Failed to publish notification. Code is ${err.code}, message is ${err.message}`);
         return;
       }
       hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in publishing notification.');
     });
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Notification-Kit/Notification/entry/src/main/ets/filemanager/PublishNotification.ets#L58-L81" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PublishNotification.ets</a></div>
