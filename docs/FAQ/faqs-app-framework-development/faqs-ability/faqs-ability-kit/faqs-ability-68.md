---
format: md
title: "关于emitter、eventHub的使用场景"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-68
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-68
last_sync: 2026-06-07
sync_hash: e9030b7f
upstream_hash: f94fba2ceb1c
---

Emitter提供跨线程事件的发送和处理功能，包括事件的持续订阅、单次订阅、取消订阅及事件队列的发送。

1. 订阅事件

   ```
   import { emitter } from '@kit.BasicServicesKit';

   const TAG: string = 'ThreadModel';
   ```

   ```
   // Define an event with an eventId of 1
   let event: emitter.InnerEvent = {
     eventId: 1
   };

   // Execute the callback after receiving an event with eventId 1
   let callback = (eventData: emitter.EventData): void => {
     this.getUIContext().getPromptAction().showToast({
       message: JSON.stringify(eventData)
     });
   };

   // Subscribe to events with eventId 1
   emitter.on(event,callback);
   this.getUIContext().getPromptAction().showToast({
     message: 'subscribe_success'
   });
   ```
2. 发送事件

   ```
   import { emitter } from '@kit.BasicServicesKit';
   ```

   ```
   // Define an event with an eventId of 1 and a priority of Low
   let event: emitter.InnerEvent = {
     eventId: 1,
     priority: emitter.EventPriority.LOW
   };

   let eventData: emitter.EventData = {
     data: {
       content: 'c',
       id: 1,
       isEmpty: false
     }
   };

   // Send an event with eventId 1 and the event content is eventData
   emitter.emit(event,eventData);
   ```

   EventHub提供同线程内事件的发送与处理功能，包括事件订阅、取消订阅及触发。以UIAbility组件与UI的数据同步为例，具体使用方法请参考相关文档。

   **参考链接**

   [UIAbility组件与UI的数据同步](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui)
