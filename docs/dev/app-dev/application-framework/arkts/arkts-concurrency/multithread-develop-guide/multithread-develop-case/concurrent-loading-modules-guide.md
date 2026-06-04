---
title: "业务模块并发加载场景"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/concurrent-loading-modules-guide
---

在应用启动时，多个业务模块需要加载，例如地图应用中的定位、打车、导航等模块。如果全部在UI主线程初始化，会严重影响应用冷启动时间。此时，应在不同子线程中并行加载这些模块，以降低启动耗时。

通过使用ArkTS提供的TaskPool能力，可以将不同的业务初始化任务移到子线程中。业务模块可通过下沉C++实现为[NativeBinding对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/transferabled-object)或在ArkTS层定义为[Sendable对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable)，从而将初始化的模块返回给UI主线程调用，实现如下。

1. 各业务功能（SDK）模块定义（这里以使用Sendable对象为例）。

   计算器业务模块定义如下：

   ```
   import { collections } from '@kit.ArkTS';

   @Sendable
   export class Calculator {
     public history?: collections.Array<collections.Array<string>>;
     public totalCount: number = 0;

     // 初始化
     static init(): Calculator {
       let calc = new Calculator();
       calc.totalCount = 0;
       calc.history = collections.Array.create(calc.totalCount, collections.Array.create(2, ''));
       return calc;
     }

     // 加法运算
     add(a: number, b: number) {
       let result = a + b;
       this.newCalc(`${a} + ${b}`, `${result}`);
       return result;
     }

     // 减法运算
     sub(a: number, b: number) {
       let result = a - b;
       this.newCalc(`${a} - ${b}`, `${result}`);
       return result;
     }

     // 乘法运算
     mul(a: number, b: number) {
       let result = a * b;
       this.newCalc(`${a} * ${b}`, `${result}`);
       return result;
     }

     // 除法运算
     div(a: number, b: number) {
       let result = a / b;
       this.newCalc(`${a} / ${b}`, `${result}`);
       return result;
     }

     // 获取历史记录
     getHistory(): collections.Array<collections.Array<string>> {
       return this.history!;
     }

     // 打印历史记录
     showHistory() {
       for (let i = 0; i < this.totalCount; i++) {
         console.info(`${i}: ${this.history![i][0]} = ${this.history![i][1]}`);
       }
     }

     // 添加新计算记录
     private newCalc(opt: string, ret: string) {
       let newRecord = new collections.Array<string>(opt, ret);
       this.totalCount = this.history!.unshift(newRecord);
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCases/entry/src/main/ets/sdk/Calculator.ets#L16-L78" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Calculator.ets</a></div>


   定时器业务模块的定义如下：

   ```
   @Sendable
   export class TimerSdk {

     // 初始化
     static init(): TimerSdk {
       let timer = new TimerSdk();
       return timer;
     }

     // 倒计时
     async countdown(time: number) {
       return new Promise((resolve: (value: boolean) => void) => {
         setTimeout(() => {
           resolve(true);
         }, time);
       });
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCases/entry/src/main/ets/sdk/TimerSdk.ets#L16-L35" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：TimerSdk.ets</a></div>

2. 在UI主线程触发各业务模块分发到子线程，加载完成后在UI主线程使用，示例如下：

   ```
   import { Calculator } from '../sdk/Calculator';
   import { TimerSdk } from '../sdk/TimerSdk';
   import { taskpool } from '@kit.ArkTS';

   // 初始化Calculator
   @Concurrent
   function initCalculator(): Calculator {
     return Calculator.init();
   }

   // 初始化TimerSdk
   @Concurrent
   function initTimerSdk(): TimerSdk {
     return TimerSdk.init();
   }

   @Entry
   @Component
   struct Index {
     @State calculateAdd: string = 'calculate add';
     @State showHistory: string = 'show history';
     @State countdown: string = 'countdown';
     calc?: Calculator;
     timer?: TimerSdk;

     aboutToAppear(): void {
       taskpool.execute(initCalculator).then((ret) => {
         this.calc = ret as Calculator;
       })
       taskpool.execute(initTimerSdk).then((ret) => {
         this.timer = ret as TimerSdk;
       })
     }

     build() {
       Row() {
         Column() {
           Text(this.calculateAdd)
             .id('add')
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
             .onClick(async () => {
               let result = this.calc?.add(1, 2)
               console.info(`Result is ${result}`)
               this.calculateAdd = 'success';
             })
           Text(this.showHistory)
             .id('show')
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
             .onClick(async () => {
               this.calc?.showHistory();
               this.showHistory = 'success';
             })
           Text(this.countdown)
             .id('get')
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .alignRules({
               center: { anchor: '__container__', align: VerticalAlign.Center },
               middle: { anchor: '__container__', align: HorizontalAlign.Center }
             })
             .onClick(async () => {
               console.info(`Timer start`);
               await this.timer?.countdown(1000);
               console.info(`Timer end`);
               this.countdown = 'success';
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ApplicationMultithreadingDevelopment/PracticalCases/entry/src/main/ets/managers/ConcurrentLoadingModulesGuide.ets#L16-L99" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：ConcurrentLoadingModulesGuide.ets</a></div>
