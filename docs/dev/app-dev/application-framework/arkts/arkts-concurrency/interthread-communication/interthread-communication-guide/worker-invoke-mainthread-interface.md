---
title: "Worker同步调用宿主线程的接口"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-invoke-mainthread-interface
---

如果一个接口已在宿主线程中实现，Worker可以通过以下方式调用该接口。

以下示例展示了Worker同步调用宿主线程接口的方法，创建Worker的方法可参考[创建Worker的注意事项](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-introduction#创建worker的注意事项)。

1. 首先，在宿主线程实现需要调用的接口，并创建Worker对象，在Worker对象上注册需要调用的对象。

   ```
   import { MessageEvents, worker } from '@kit.ArkTS';

      class TestObj {
        public getMessage(): string {
          return 'this is a message from TestObj';
        }

        public static testObj: TestObj = new TestObj();
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
                  // 创建Worker对象
                  const workerInstance: worker.ThreadWorker = new worker.ThreadWorker("entry/ets/workers/Worker.ets");
                  // 在Worker上注册需要调用的对象
                  workerInstance.registerGlobalCallObject('testObj', TestObj.testObj);
                  workerInstance.onmessage = (e: MessageEvents): void => {
                    // 接收Worker子线程的结果
                    console.info('mainThread: ' + e.data);
                    // 销毁Worker
                    workerInstance.terminate();
                  }
                  workerInstance.postMessage('start');
                })
            }
            .width('100%')
          }
          .height('100%')
        }
      }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationScenario/entry/src/main/ets/managers/WorkerCallGlobalUsage.ets#L16-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：WorkerCallGlobalUsage.ets</a></div>

2. 然后，在Worker中通过[callGlobalCallObjectMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker#callglobalcallobjectmethod11)接口可以调用宿主线程中的getMessage()方法。

   ```
   import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';

   const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

   workerPort.onmessage = async (e: MessageEvents) => {
     if (e.data === 'start') {
       try {
         // 调用方法
         let res: string = workerPort.callGlobalCallObjectMethod('testObj', 'getMessage', 0) as string;
         if (res === 'this is a message from TestObj') {
           workerPort.postMessage('run function success.');
         }
       } catch (error) {
         // 异常处理
         console.error('worker: error code is ' + error.code + ' error message is ' + error.message);
       }
     }

     // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationScenario/entry/src/main/ets/workers/Worker.ets#L17-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Worker.ets</a></div>
