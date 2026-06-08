---
title: "I/O密集型任务开发指导 (TaskPool)"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development
last_sync: 2026-06-07
sync_hash: 442f36ad
---
使用异步并发可以解决单次I/O任务阻塞的问题。对于I/O密集型任务，若线程中的其他任务仍可能被阻塞，建议采用多线程并发来处理。

I/O密集型任务的性能关键在于I/O操作的速度和效率，而非CPU的处理能力。这类任务需要频繁进行磁盘读写和网络通信。此处通过频繁读写系统文件来模拟I/O密集型并发任务的处理。

1. 定义并发函数，内部密集调用I/O能力。

   ```
   import { fileIo } from '@kit.CoreFileKit';

   // 定义并发函数，内部密集调用I/O能力
   // 写入文件的实现
   export async function write(data: string, filePath: string): Promise<void> {
     let file: fileIo.File = await fileIo.open(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
     await fileIo.write(file.fd, data);
     fileIo.close(file);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/ApplicationMultithreading/entry/src/main/ets/managers/write.ets#L16-L26" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：write.ets</a></div>


   ```
   import { write } from './write'
   import { BusinessError } from '@kit.BasicServicesKit';
   import { taskpool } from '@kit.ArkTS';
   import { common } from '@kit.AbilityKit';

   @Concurrent
   async function concurrentTest(context: common.UIAbilityContext): Promise<boolean> {
     let filePath1: string = context.filesDir + '/path1.txt'; // 应用文件路径
     let filePath2: string = context.filesDir + '/path2.txt';
     // 循环写文件操作
     let fileList: string[] = [];
     fileList.push(filePath1);
     fileList.push(filePath2);
     const writePromises: Promise<boolean | void>[] = [];
     for (let i: number = 0; i < fileList.length; i++) {
       const writePromise = write('Hello World!', fileList[i]).then(() => {
         console.info(`Succeeded in writing the file. FileList: ${fileList[i]}`);
       }).catch((err: BusinessError) => {
         console.error(`Failed to write the file. Code is ${err.code}, message is ${err.message}`)
         return false;
       });
       writePromises.push(writePromise);
     }
     try {
       await Promise.all(writePromises);
       return true;
     } catch (error) {
       return false;
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/ApplicationMultithreading/entry/src/main/ets/managers/IoIntensiveTaskDevelopment.ets#L16-L47" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：IoIntensiveTaskDevelopment.ets</a></div>

2. 使用TaskPool执行包含密集I/O的并发函数，通过调用[execute()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool#taskpoolexecute)方法执行任务，并在回调中处理调度结果。示例中获取filePath1和filePath2的方式请参见[获取应用文件路径](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#获取应用文件路径)。在TaskPool中使用context时，需先在并发函数外部准备好，并通过参数传递给并发函数。

   ```
   @Entry
   @Component
   struct Index {
     @State message: string = 'Hello World';
     uiContext = this.getUIContext();

     build() {
       Row() {
         Column() {
           Text(this.message)
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .onClick(() => {
               let context = this.uiContext?.getHostContext() as common.UIAbilityContext;
               // 使用TaskPool执行包含密集I/O的并发函数
               // 数组较大时，I/O密集型任务分发也会抢占UI主线程，需要使用多线程能力
               taskpool.execute(concurrentTest, context).then(() => {
                 // 调度结果处理
                 console.info('taskpool: execute success')
               })
               this.message = 'success';
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/ApplicationMultithreading/entry/src/main/ets/managers/IoIntensiveTaskDevelopment.ets#L49-L78" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：IoIntensiveTaskDevelopment.ets</a></div>
