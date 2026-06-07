---
title: "取消动态订阅公共事件"
original_url: /docs/dev/app-dev/system/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-unsubscription
format: md
---


## 场景介绍

动态订阅者完成业务需求后，应主动取消订阅。通过调用[unsubscribe()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerunsubscribe)方法，取消订阅事件。

## 接口说明

| 接口名 | 接口描述 |
| --- | --- |
| [unsubscribe](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerunsubscribe)(subscriber: CommonEventSubscriber, callback?: AsyncCallback\<void\>) | 取消订阅公共事件。 |

## 开发步骤

1. 导入模块。

   ```
   import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const TAG: string = 'ProcessModel';
   const DOMAIN_NUMBER: number = 0xFF00;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/CommonEvent/entry/src/main/ets/filemanager/CreatSubscribeInfo.ets#L15-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CreatSubscribeInfo.ets</a></div>

2. 根据[动态订阅公共事件](/docs/dev/app-dev/system/system-basicfun/basic-services-kit/app-events/common-event-communication/common-event-subscription)章节的步骤来订阅某个事件。
3. 调用CommonEvent中的[unsubscribe()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerunsubscribe)方法取消订阅某事件。

   ```
   // subscriberCustom为订阅事件时创建的订阅者对象
   if (subscriberCustom !== null) {
     commonEventManager.unsubscribe(subscriberCustom, (err: BusinessError) => {
       if (err) {
         hilog.error(DOMAIN_NUMBER, TAG,
           `Failed to unsubscribe. code is ${err.code}, message is ${err.message}`);
       } else {
         hilog.info(DOMAIN_NUMBER, TAG, `Succeeded in unsubscribing.`);
         subscriberCustom = null;
       }
     })
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Basic-Services-Kit/common_event/CommonEvent/entry/src/main/ets/filemanager/CreatSubscribeInfo.ets#L96-L109" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CreatSubscribeInfo.ets</a></div>
