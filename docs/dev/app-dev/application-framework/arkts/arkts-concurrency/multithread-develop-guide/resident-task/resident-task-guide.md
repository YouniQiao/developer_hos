---
title: "常驻任务开发指导 (Worker)"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide
format: md
---


提供使用Worker进行常驻任务的开发指导。Worker将持续执行任务，直到宿主线程发送终止指令。

开发过程和示例如下：

1. DevEco Studio支持一键生成Worker，在对应的\{moduleName\}目录下任意位置，单击鼠标右键 > New > Worker，即可自动生成Worker的模板文件及配置信息。本文以创建“Worker”为例。

   此外，还支持手动创建Worker文件。具体方式和注意事项请参见[创建Worker的注意事项](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/worker-introduction#创建worker的注意事项)。
2. 首先导入Worker模块，然后在宿主线程中通过调用ThreadWorker的[constructor()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker#constructor9)方法创建Worker对象，创建Worker对象的线程为宿主线程。 此处的宿主线程为UI主线程，宿主线程发送'start'以开始执行某个长期运行的任务，并接收子线程返回的相关消息。当不需要执行该任务时，发送'stop'以停止该任务的执行。在此示例中，任务将在10秒后结束。

   ```
   import { MessageEvents, worker } from '@kit.ArkTS';

   @Entry
   @Component
   struct Index {
     build() {
       Column() {
         Text('Listener task')
           .id('HelloWorld')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
           .onClick(() => {
             const workerInstance: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');
             workerInstance.onmessage = (event: MessageEvents) => {
               console.info('UI主线程收到消息：', event.data);
             }
             workerInstance.postMessage({type: 'start'})
             // 10秒后停止worker
             setTimeout(() => {
               workerInstance.postMessage({ type: 'stop' });
             }, 10000);
           })
       }
       .height('100%')
       .width('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/ApplicationMultithreading/entry/src/main/ets/managers/ResidentTaskGuide.ets#L16-L49" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ResidentTaskGuide.ets</a></div>

3. 在Worker线程中，当接收到宿主线程发送的消息为'start'时，开始执行某个长时间不定期运行的任务，并实时向宿主线程返回消息。当接收到的消息为'stop'时，结束该任务的执行并返回相应的消息给宿主线程。

   ```
   import { MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';

   const workerPort: ThreadWorkerGlobalScope = worker.workerPort;
   let isRunning = false;
   workerPort.onmessage = (e: MessageEvents) => {
     const type = e.data.type as string;
     if (type === 'start') {
       if (!isRunning) {
         isRunning = true;
         // 开始常驻任务
         performTask();
       }
     } else if (type === 'stop') {
       isRunning = false;
     }
   }

   // 模拟常驻任务
   function performTask() {
     if (isRunning) {
       // 模拟某个长期运行的任务
       workerPort.postMessage('Worker is performing a task');
       // 1秒后再次执行任务
       setTimeout(performTask, 1000);
     } else {
       workerPort.postMessage('Worker has stopped performing the task');
       workerPort.close();
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/ApplicationMultithreading/entry/src/main/ets/workers/Worker.ets#L16-L43" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Worker.ets</a></div>
