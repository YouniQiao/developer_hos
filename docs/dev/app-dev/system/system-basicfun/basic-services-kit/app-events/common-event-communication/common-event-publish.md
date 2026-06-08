---
title: "发布公共事件"
original_url: /docs/dev/app-dev/system/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-publish
format: md
upstream_id: dev/app-dev/system/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-publish
last_sync: 2026-06-07
sync_hash: 016361cb
---
## 场景介绍

当需要发布某个公共事件时，可以通过[publish()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerpublish)方法发布事件。发布的公共事件可以携带数据，供订阅者解析并进行下一步处理。

![](./img/5f2a6dac.png)

已发出的粘性公共事件后来订阅者也可以接收到，其他公共事件都需要先订阅再接收，订阅参考[公共事件订阅章节](/docs/dev/app-dev/system/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-subscription)。

## 接口说明

详细接口见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerpublish)。

| 接口名 | 接口描述 |
| --- | --- |
| publish(event: string, callback: AsyncCallback\<void\>) | 发布公共事件。 |
| publish(event: string, options: [CommonEventPublishData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-commonevent-commoneventpublishdata), callback: AsyncCallback\<void\>) | 指定发布信息并发布公共事件。 |

## 发布不携带信息的公共事件

不携带信息的公共事件，只能发布无序公共事件。

1. 导入模块。

   ```
   import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = 'ProcessModel';
   const DOMAIN_NUMBER: number = 0xFF00;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/CommonEvent/entry/src/main/ets/filemanager/CreatSubscribeInfo.ets#L15-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CreatSubscribeInfo.ets</a></div>

2. 传入需要发布的事件名称和回调函数，发布事件。

   ```
   // 发布公共事件，其中的event字段需要替换为实际的事件名称。
   commonEventManager.publish('event', (err: BusinessError) => {
     if (err) {
       hilog.error(DOMAIN_NUMBER, TAG,
         `Publish failed, code is ${JSON.stringify(err.code)}, message is ${JSON.stringify(err.message)}`);
     } else {
       // ...
       hilog.info(DOMAIN_NUMBER, TAG, `Publish success`);
     }
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/CommonEvent/entry/src/main/ets/filemanager/CreatSubscribeInfo.ets#L116-L127" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CreatSubscribeInfo.ets</a></div>


## 发布携带信息的公共事件

携带信息的公共事件，可以发布为无序公共事件、有序公共事件和粘性事件，可以通过参数[CommonEventPublishData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-commonevent-commoneventpublishdata)的isOrdered、isSticky的字段进行设置。

1. 导入模块。

   ```
   import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = 'ProcessModel';
   const DOMAIN_NUMBER: number = 0xFF00;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/CommonEvent/entry/src/main/ets/filemanager/CreatSubscribeInfo.ets#L15-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CreatSubscribeInfo.ets</a></div>

2. 构建需要发布的公共事件信息。

   ```
   // 公共事件相关信息
   let options: commonEventManager.CommonEventPublishData = {
     code: 1, // 公共事件的初始代码
     data: 'initial data', // 公共事件的初始数据
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/CommonEvent/entry/src/main/ets/filemanager/CreatSubscribeInfo.ets#L41-L47" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CreatSubscribeInfo.ets</a></div>

3. 传入需要发布的事件名称、需要发布的指定信息和回调函数，发布事件。

   ```
   // 发布公共事件，其中的event字段需要替换为实际的事件名称。
   commonEventManager.publish('event', options, (err: BusinessError) => {
     if (err) {
       hilog.error(DOMAIN_NUMBER, TAG,
         `Failed to publish common event. Code is ${err.code}, message is ${err.message}`);
     } else {
       // ...
       hilog.info(DOMAIN_NUMBER, TAG, `Succeeded in publishing common event.`);
     }
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/CommonEvent/entry/src/main/ets/filemanager/CreatSubscribeInfo.ets#L134-L145" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CreatSubscribeInfo.ets</a></div>
