---
title: "Sendable对象冻结"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-freeze
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-freeze
last_sync: 2026-06-07
sync_hash: 78a82c48
---
Sendable对象支持冻结操作。冻结后，对象变为只读，不能修改属性。因此，多个并发实例间访问时无需加锁。可以通过调用[Object.freeze](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)接口冻结对象。

![](./img/ade3c133.png)

不支持在.ets文件中使用Object.freeze接口。

## 使用示例

1. 提供ts文件封装Object.freeze方法。

   ```
   // helper.ts
   export function freezeObj(obj: any) {
     Object.freeze(obj);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationObjects/SendableObject/SendableObjectRelated/entry/src/main/ets/managers/helper.ts#L16-L20" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：helper.ts</a></div>

2. 调用freeze方法冻结对象，然后将其发送到子线程。

   ```
   // SendableFreeze.ets
   import { freezeObj } from './helper';
   import { worker } from '@kit.ArkTS';

   @Sendable
   export class GlobalConfig {
     // 一些配置属性与方法
     init() {
       // 初始化相关逻辑
       freezeObj(this); // 初始化完成后冻结当前对象
     }
   }

   @Entry
   @Component
   struct Index {
     build() {
       Column() {
         Text("Sendable freezeObj Test")
           .id('HelloWorld')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
           .onClick(() => {
             let gConfig = new GlobalConfig();
             gConfig.init();
             const workerInstance = new worker.ThreadWorker('entry/ets/workers/Worker.ets', { name: "Worker1" });
             workerInstance.postMessage(gConfig);
           })
       }
       .height('100%')
       .width('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationObjects/SendableObject/SendableObjectRelated/entry/src/main/ets/managers/SendableFreeze.ets#L16-L56" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：SendableFreeze.ets</a></div>

3. 子线程直接操作对象，不加锁。

   ```
   // Worker.ets
   import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';
   import { GlobalConfig } from '../pages/Index';

   const workerPort: ThreadWorkerGlobalScope = worker.workerPort;
   workerPort.onmessage = (e: MessageEvents) => {
     let gConfig: GlobalConfig = e.data;
     // 使用gConfig对象
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationObjects/SendableObject/SendableObjectRelated/entry/src/main/ets/workers/Worker.ets#L15-L25" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Worker.ets</a></div>
