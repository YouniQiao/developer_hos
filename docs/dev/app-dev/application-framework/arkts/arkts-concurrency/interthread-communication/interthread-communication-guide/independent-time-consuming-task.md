---
title: "使用TaskPool执行独立的耗时任务"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/independent-time-consuming-task
format: md
---


对于独立运行的耗时任务，任务完成后将结果返回给宿主线程。可采用以下方式实现。

下面通过图片加载来说明。

1. 实现子线程需要执行的任务。

   ```
   export class IconItemSource {
     image: string | Resource = '';
     text: string | Resource = '';

     constructor(image: string | Resource = '', text: string | Resource = '') {
       this.image = image;
       this.text = text;
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationScenario/entry/src/main/ets/managers/IconItemSource.ets#L16-L26" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：IconItemSource.ets</a></div>


   ```
   import { IconItemSource } from './IconItemSource';

   // 在Task中执行的方法，需要添加@Concurrent注解，否则无法正常调用。
   @Concurrent
   export function loadPicture(count: number): IconItemSource[] {
     let iconItemSourceList: IconItemSource[] = [];
     // 遍历添加6*count个IconItem的数据
     for (let index = 0; index < count; index++) {
       const numStart: number = index * 6;
       // 此处循环使用6张图片资源
       iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 1}`));
       iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 2}`));
       iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 3}`));
       iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 4}`));
       iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 5}`));
       iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 6}`));
     }
     return iconItemSourceList;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationScenario/entry/src/main/ets/managers/IndependentTask.ets#L16-L36" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：IndependentTask.ets</a></div>

2. 使用TaskPool的execute方法执行任务，加载图片。

   ```
   import { taskpool } from '@kit.ArkTS';
   import { IconItemSource } from './IconItemSource';
   import { loadPicture } from './IndependentTask';

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
               let iconItemSourceList: IconItemSource[] = [];
               // 创建Task
               let loadPictureTask: taskpool.Task = new taskpool.Task(loadPicture, 30);
               // 执行Task，并返回结果
               taskpool.execute(loadPictureTask).then((res: object) => {
                 // loadPicture方法的执行结果
                 iconItemSourceList = res as IconItemSource[];
                 this.message = 'success';
               }).catch(() => {
                 console.error(`Failed to execute taskpool.`);
               })
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationScenario/entry/src/main/ets/managers/IndependentTimeConsumingTask.ets#L16-L51" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：IndependentTimeConsumingTask.ets</a></div>
