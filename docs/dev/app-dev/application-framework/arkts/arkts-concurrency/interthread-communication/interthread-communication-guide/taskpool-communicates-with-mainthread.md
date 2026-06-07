---
title: "TaskPool任务与宿主线程通信"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread
format: md
---


如果Task不仅需要返回最终执行结果，还需定时通知宿主线程状态和数据变化，或分段返回大量数据（如从数据库读取大量数据），可按以下方式实现。

下面以多个图片加载任务结果实时返回为例说明。

1. 实现接收Task消息的方法。

   ```
   import { taskpool } from '@kit.ArkTS';
   import { IconItemSource } from './IconItemSource';

   function notice(data: number): void {
     console.info('子线程任务已执行完，共加载图片: ', data);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationScenario/entry/src/main/ets/managers/TaskSendDataUsage.ets#L17-L24" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TaskSendDataUsage.ets</a></div>

2. 在需要执行的Task中，添加sendData()接口将消息发送给宿主线程。在宿主线程通过onReceiveData()接口接收消息。这样宿主线程就可以通过notice()接口接收到Task发送的数据。

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
   import { taskpool } from '@kit.ArkTS';
   import { IconItemSource } from './IconItemSource';

   function notice(data: number): void {
     console.info('子线程任务已执行完，共加载图片: ', data);
   }

   // 通过Task的sendData方法，即时通知宿主线程信息
   @Concurrent
   export function loadPictureSendData(count: number): IconItemSource[] {
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

       taskpool.Task.sendData(iconItemSourceList.length);
     }
     return iconItemSourceList;
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
               let iconItemSourceList: IconItemSource[];
               let loadPictureTask: taskpool.Task = new taskpool.Task(loadPictureSendData, 30);
               // 设置notice方法接收Task发送的消息
               loadPictureTask.onReceiveData(notice);
               taskpool.execute(loadPictureTask).then((res: object) => {
                 iconItemSourceList = res as IconItemSource[];
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

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationScenario/entry/src/main/ets/managers/TaskSendDataUsage.ets#L16-L75" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TaskSendDataUsage.ets</a></div>
