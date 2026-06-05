---
title: "共享模块"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable-module
format: md
---


共享模块是进程内只会加载一次的模块，使用"use shared"这一指令来标记一个模块是否为共享模块。

非共享模块在同一线程内只加载一次，而在不同线程中会多次加载，每个线程都会生成新的模块对象。因此，目前只能使用共享模块实现进程单例。

## 约束限制

* "use shared"需要与"use strict"一样写在ArkTS文件顶层，写在import语句之后其他语句之前。

  共享属性不具备传递性。非共享模块A即使引入了共享模块B，也不会因此变成共享模块。
* 共享模块只支持ets文件。
* 共享模块内不允许使用side-effects-import。

  共享模块在同一进程内仅加载一次，可在不同线程间共享。

  共享模块加载时，导入的非共享模块不会立即加载。在共享模块内访问依赖的非共享模块导出变量时，当前线程会懒加载对应的非共享模块。非共享模块在线程间隔离，不同线程访问时会进行一次懒加载。

  由于side-effects-import不涉及导出变量，因此不会被加载，也不受支持。

  ```
  // test.ets
  console.info("This runs immediately when imported");
  ```

  ```
  // sharedModule.ets
  // 不允许使用side-effects-import，编译报错
  import "./test";
  'use shared'
  ```
* 共享模块导出的变量必须是可共享对象。

  共享模块在并发实例间可共享，因此导出的所有对象必须是可共享的。可共享对象参考[Sendable支持的数据类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable#sendable支持的数据类型)。
* 共享模块不支持re-export写法。

  ```
  // test.ets
  export let num = 1;
  export let str = 'aaa';
  ```

  ```
  // share.ets
  // 共享模块
  'use shared'
  export * from './test'; // 编译报错
  export {num, str} from './test'; // 产生运行时报错
  ```
* 共享模块可以引用其他共享模块或非共享模块，引用和被引用场景没有限制。
* 仅支持使用静态加载、napi\_load\_module或napi\_load\_module\_with\_info加载共享模块。

  ```
  // test.ets
  import { num } from './A'; // 支持静态加载

  import { worker } from '@kit.ArkTS';
  let wk = new worker.ThreadWorker("./A"); // 不支持其他方式加载共享模块, 将产生运行时报错
  ```

  ```
  // A.ets
  'use shared'
  export let num: number = 10;
  ```

## 使用示例

1. 共享模块导出Sendable对象。

   ```
   // 共享模块
   import { ArkTSUtils } from '@kit.ArkTS';

   // 声明当前模块为共享模块，只能导出可Sendable数据
   'use shared'

   // 共享模块，SingletonA全局唯一
   @Sendable
   class SingletonA {
     private count_: number = 0;
     public lock_: ArkTSUtils.locks.AsyncLock = new ArkTSUtils.locks.AsyncLock();

     public async getCount(): Promise<number> {
       return this.lock_.lockAsync(() => {
         return this.count_;
       })
     }

     public async increaseCount() {
       await this.lock_.lockAsync(() => {
         this.count_++;
       })
     }
   }

   export let singletonA = new SingletonA();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationObjects/SendableObject/SendableObjectRelated/entry/src/main/ets/managers/sharedModule.ets#L16-L43" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sharedModule.ets</a></div>

2. 在多个线程中操作共享模块导出的对象。

   ```
   import { ArkTSUtils, taskpool } from '@kit.ArkTS';
   import { singletonA } from './sharedModule';

   export { num, str } from './test'; // 正确示例，导出对象合集

   @Sendable
   export class A {
     private count_: number = 0;
     public lock_: ArkTSUtils.locks.AsyncLock = new ArkTSUtils.locks.AsyncLock();

     public async getCount(): Promise<number> {
       return this.lock_.lockAsync(() => {
         return this.count_;
       })
     }

     public async increaseCount() {
       await this.lock_.lockAsync(() => {
         this.count_++;
       })
     }
   }

   @Concurrent
   async function increaseCount() {
     await singletonA.increaseCount();
     console.info('SharedModule: count is:' + await singletonA.getCount());
   }

   @Concurrent
   async function printCount() {
     console.info('SharedModule: count is:' + await singletonA.getCount());
   }

   @Entry
   @Component
   struct Index {
     @State message: string = 'Hello World';
     @State mainThreadPrint: string = 'MainThread print count';
     @State taskpoolPrint: string = 'Taskpool print count';
     @State mainThreadIncrease: string = 'MainThread increase count';
     @State taskpoolIncrease: string = 'Taskpool increase count';

     build() {
       Row() {
         Column() {
           Button(this.mainThreadPrint)
             .id('MainThread print count')
             .onClick(async () => {
               await printCount();
               this.mainThreadPrint = 'success';
             })
           Button(this.taskpoolPrint)
             .id('Taskpool print count')
             .onClick(async () => {
               await taskpool.execute(printCount);
               this.taskpoolPrint = 'success';
             })
           Button(this.mainThreadIncrease)
             .id('MainThread increase count')
             .onClick(async () => {
               await increaseCount();
               this.mainThreadIncrease = 'success';
             })
           Button(this.taskpoolIncrease)
             .id('Taskpool increase count')
             .onClick(async () => {
               await taskpool.execute(increaseCount);
               this.taskpoolIncrease = 'success';
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationObjects/SendableObject/SendableObjectRelated/entry/src/main/ets/managers/ArktsSendableModule.ets#L16-L93" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ArktsSendableModule.ets</a></div>
