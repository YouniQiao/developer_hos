---
title: "多线程取消TaskPool任务场景"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-thread-cancel-task
---

由于任务池[TaskPool](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool)的任务对象[Task](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool#task)不支持跨线程传递，无法在子线程中直接取消任务。从 API version 18 开始，Task新增了[任务ID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool#属性)属性，支持通过任务ID在子线程中取消任务。开发者可将已创建任务的任务ID存储在[Sendable对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable)中，需要取消任务时，通过Sendable对象在子线程中取消任务。详情可参考以下示例。

1. 定义一个Sendable类，在类属性中存储任务ID。

   ```
   // sendable.ets
   @Sendable
   export class SendableTest {
     // 存储任务ID
     private taskId: number = 0;

     constructor(id: number) {
       this.taskId = id;
     }

     public getTaskId(): number {
       return this.taskId;
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCasesSecond/entry/src/main/ets/utils/Sendable.ets#L15-L30" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Sendable.ets</a></div>

2. 在UI主线程向TaskPool提交一个延时任务，并在子线程取消该任务。

   ```
   // TaskpoolCancel.ets
   import { taskpool } from '@kit.ArkTS';
   import { SendableTest } from '../utils/Sendable';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { PromptAction } from '@kit.ArkUI';

   @Concurrent
   function cancel(send: SendableTest) {
     // 在多线程中通过任务ID取消任务
     taskpool.cancel(send.getTaskId());
     console.info('cancel task finished');
   }

   @Concurrent
   function delayed() {
     console.info('delayed task finished');
   }

   @Entry
   @Component
   struct TaskpoolCancel {
     @State message: string = 'CancelTaskpool';
     @State returnMessage: string = 'return...';
     @State promptAction: PromptAction = this.getUIContext().getPromptAction();

     build() {
       Row() {
         Column() {
           Button(this.message)
             .fontSize(25)
             .fontWeight(FontWeight.Bold)
             .onClick(async () => {
               let task = new taskpool.Task(delayed);
               taskpool.executeDelayed(2000, task).catch((e: BusinessError) => {
                 console.error(`taskpool execute error, message is: ${e.message}`);
                 // taskpool execute error, message is: taskpool:: task has been canceled.
               });
               let send = new SendableTest(task.taskId);
               taskpool.execute(cancel, send);
               this.returnMessage = 'Taskpool canceled!';
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

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCasesSecond/entry/src/main/ets/pages/TaskpoolCancel.ets#L16-L68" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：TaskpoolCancel.ets</a></div>
