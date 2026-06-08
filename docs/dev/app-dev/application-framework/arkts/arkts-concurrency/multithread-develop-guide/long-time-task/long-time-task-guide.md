---
title: "长时任务开发指导 (TaskPool)"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide
last_sync: 2026-06-07
sync_hash: 59102bab
---
此处提供使用TaskPool进行长时任务的开发指导，以定期采集传感器数据为例。

## 使用TaskPool进行传感器数据监听

1. 导入所需的模块。

   ```
   import { sensor } from '@kit.SensorServiceKit';
   import { taskpool } from '@kit.ArkTS';
   import { BusinessError, emitter } from '@kit.BasicServicesKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/ApplicationMultithreading/entry/src/main/ets/managers/LongTimeTaskGuide.ets#L17-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：LongTimeTaskGuide.ets</a></div>

2. 定义长时任务，内部监听sensor数据，并通过emitter注册销毁通知。

   ```
   @Concurrent
   async function sensorListener(): Promise<void> {
     sensor.on(sensor.SensorId.ACCELEROMETER, (data) => {
       emitter.emit({ eventId: 0 }, { data: data });
     }, { interval: 1000000000 });

     emitter.on({ eventId: 1 }, () => {
       sensor.off(sensor.SensorId.ACCELEROMETER)
       emitter.off(1)
     })
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/ApplicationMultithreading/entry/src/main/ets/managers/LongTimeTaskGuide.ets#L23-L35" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：LongTimeTaskGuide.ets</a></div>

3. 给sensor添加ohos.permission.ACCELEROMETER权限。

   ```
   "requestPermissions": [
     {
       "name": "ohos.permission.ACCELEROMETER"
     }
   ]
   ```
4. 宿主线程定义注册及销毁的行为。

   * 注册：发起长时任务，并通过emitter接收监听数据。
   * 销毁：发送取消传感器监听的事件，并结束长时任务。

   ```
   import { sensor } from '@kit.SensorServiceKit';
   import { taskpool } from '@kit.ArkTS';
   import { BusinessError, emitter } from '@kit.BasicServicesKit';

   @Concurrent
   async function sensorListener(): Promise<void> {
     sensor.on(sensor.SensorId.ACCELEROMETER, (data) => {
       emitter.emit({ eventId: 0 }, { data: data });
     }, { interval: 1000000000 });

     emitter.on({ eventId: 1 }, () => {
       sensor.off(sensor.SensorId.ACCELEROMETER)
       emitter.off(1)
     })
   }

   @Entry
   @Component
   struct Index {
     sensorTask?: taskpool.LongTask
     @State addListener: string = 'Add listener';
     @State deleteListener: string = 'Delete listener';

     build() {
       Column() {
         Text(this.addListener)
           .id('Add listener')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
           .onClick(() => {
             this.sensorTask = new taskpool.LongTask(sensorListener);
             emitter.on({ eventId: 0 }, (data) => {
               // Do something here
               console.info(`Receive ACCELEROMETER data: {${data.data?.x}, ${data.data?.y}, ${data.data?.z}`);
             });
             taskpool.execute(this.sensorTask).then(() => {
               console.info('Add listener of ACCELEROMETER success');
             }).catch((e: BusinessError) => {
               // Process error
             })
             this.addListener = 'success';
           })
         Text(this.deleteListener)
           .id('Delete listener')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
           .onClick(() => {
             emitter.emit({ eventId: 1 });
             emitter.off(0);
             if (this.sensorTask != undefined) {
               taskpool.terminateTask(this.sensorTask);
             } else {
               console.error('sensorTask is undefined.');
             }
             this.deleteListener = 'success';
           })
       }
       .height('100%')
       .width('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/ApplicationMultithreading/entry/src/main/ets/managers/LongTimeTaskGuide.ets#L16-L82" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：LongTimeTaskGuide.ets</a></div>
