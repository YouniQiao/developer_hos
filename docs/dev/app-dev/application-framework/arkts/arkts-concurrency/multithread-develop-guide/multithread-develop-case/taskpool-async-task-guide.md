---
title: "TaskPool指定任务并发度场景"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide
format: md
---


TaskPool支持使用异步队列来控制任务的并发度，能有效避免资源过载，减少任务阻塞，适用于网络请求、视频流处理和数据库操作等场景。

此处提供使用TaskPool创建[异步队列](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool#asyncrunner18)的开发指导，以相机预览流采集数据处理的功能为例。

由于处理过程是一个频繁且耗时的任务，当相机采集速度过快时，将丢弃之前的采集数据，仅保留最新的一帧数据进行处理。

1. 导入需要用到的模块。

   ```
   // TaskpoolAsyncLevel.ets
   import { taskpool } from '@kit.ArkTS';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { PromptAction } from '@kit.ArkUI';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCasesSecond/entry/src/main/ets/pages/TaskpoolAsyncLevel.ets#L16-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TaskpoolAsyncLevel.ets</a></div>

2. 定义耗时任务。

   ```
   // TaskpoolAsyncLevel.ets
   @Concurrent
   function collectFrame() {
     // 采集数据，并且进行处理
     // 模拟处理过程，这里是个耗时任务，持续时间为30秒
     let t = new Date().getTime()
     while (new Date().getTime() - t < 30000) {
       continue;
     }
     console.info('collectFrame finished');
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCasesSecond/entry/src/main/ets/pages/TaskpoolAsyncLevel.ets#L23-L35" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TaskpoolAsyncLevel.ets</a></div>

3. 创建异步队列并执行采集任务。

   ```
   // TaskpoolAsyncLevel.ets
   @Entry
   @Component
   struct TaskpoolAsyncLevel {
     @State message: string = '触发采集任务';
     @State returnMessage: string = 'return...';
     @State promptAction: PromptAction = this.getUIContext().getPromptAction();

     build() {
       Row() {
         Column() {
           Button(this.message)
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .onClick(async () => {
               // 创建并发度为5的异步队列，等待队列个数为5，当加入的任务数量超过5时，等待列表中处于队头的任务会被丢弃
               let asyncRunner:taskpool.AsyncRunner = new taskpool.AsyncRunner('async', 5, 5);
               // 触发采集任务
               for (let i = 0; i < 20; i++) {
                 let task:taskpool.Task = new taskpool.Task(`async${i}`,collectFrame);
                 asyncRunner.execute(task).then(() => {
                   console.info('the current task name is ' + task.name);
                 }).catch((e:BusinessError) => {
                   console.error('async: error is ' + e);
                 });
               }
               console.info('asyncRunner task finished');
               this.returnMessage = 'asyncRunner task finished';
               this.promptAction.showToast({ message: this.returnMessage });
             })
           // ...
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCasesSecond/entry/src/main/ets/pages/TaskpoolAsyncLevel.ets#L37-L77" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TaskpoolAsyncLevel.ets</a></div>
