---
title: "Worker和宿主线程的即时消息通信"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-communicates-with-mainthread
format: md
---


在ArkTS中，Worker相对于Taskpool存在一定的差异性，有数量限制但是可以长时间存在。一个[Worker](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-introduction)中可能会执行多个不同的任务，每个任务的执行时长或返回结果可能都不同，宿主线程需要根据情况调用Worker中的不同方法，Worker则需要及时地将结果返回给宿主线程。

下面以Worker响应"hello world"请求为例说明。

1. 首先，创建一个执行任务的Worker。创建方法可参考[创建Worker的注意事项](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-introduction#创建worker的注意事项)。

   ```
   import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';

   const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

   workerPort.onmessage = async (e: MessageEvents) => {
     // ...
     if (e.data === 'hello world') {
       workerPort.postMessage('success');
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationScenario/entry/src/main/ets/workers/Worker.ets#L16-L44" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Worker.ets</a></div>

2. 这里的宿主线程是UI主线程，在宿主线程中创建Worker对象，当点击Button时调用postMessage方法向Worker线程发送消息，Worker线程将通过注册的onmessage回调处理宿主线程发送的消息。

   ```
   import { worker } from '@kit.ArkTS';
   import { BusinessError } from '@kit.BasicServicesKit';

   function promiseCase() {
     let p: Promise<void> = new Promise<void>((resolve: Function, reject: Function) => {
       setTimeout(() => {
         resolve(1);
       }, 100)
     }).then(undefined, (error: BusinessError) => {
     })
     return p;
   }

   async function postMessageTest() {
     let ss = new worker.ThreadWorker('entry/ets/workers/Worker.ets');
     let res = undefined;
     let flag = false;
     let isTerminate = false;
     ss.onexit = () => {
       isTerminate = true;
     }
     // 接收Worker线程发送的消息
     ss.onmessage = (e) => {
       res = e.data;
       flag = true;
       console.info('worker:: res is  ' + res);
     }
     // 给Worker线程发送消息
     ss.postMessage('hello world');
     while (!flag) {
       await promiseCase();
     }

     ss.terminate();
     while (!isTerminate) {
       await promiseCase();
     }
   }

   @Entry
   @Component
   struct Index {
     @State message: string = 'Hello World';

     build() {
       Row() {
         Column() {
           Text(this.message)
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .onClick(() => {
               postMessageTest();
               this.message = 'success';
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationScenario/entry/src/main/ets/managers/WorkerCommunicatesWithMainthread.ets#L16-L77" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：WorkerCommunicatesWithMainthread.ets</a></div>


在示例代码中，Worker接收宿主线程的消息，并处理后将结果返回给宿主线程。实现了宿主线程与Worker之间的即时通信，使宿主线程能够方便地使用Worker的运行结果。
