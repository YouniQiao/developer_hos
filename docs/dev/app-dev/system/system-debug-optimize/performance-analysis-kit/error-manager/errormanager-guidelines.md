---
displayed_sidebar: appDevSidebar
title: "错误管理开发指导"
original_url: /docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines
format: md
upstream_id: dev/app-dev/system/system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines
last_sync: 2026-06-07
sync_hash: c30dc2d9
---
## 场景介绍

当应用的代码存在规范问题或错误时，会在运行中产生异常和错误，如应用未捕获异常等。在错误产生后，应用会异常退出。错误日志通常会保存在用户本地存储设备中，不方便开发者定位问题。所以，应用开发者可以使用错误管理的接口，在应用退出前，及时将相关错误及日志上报到开发者的服务平台来定位问题。

使用errorManager接口监听异常和错误后，应用不会退出，建议在回调函数执行完后，增加同步退出操作，如果只是为了获取错误日志，建议使用[HiAppEvent订阅事件](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro)。

## 接口说明

应用错误管理接口由[@ohos.app.ability.errorManager (错误管理模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-errormanager)提供，使用接口能力前需注册错误观测器，开发者可以通过import引入，详见[开发示例](#开发示例)。

**错误管理接口功能介绍**：

| 接口名称 | 说明 |
| --- | --- |
| on(type: "error", observer: ErrorObserver): number | 注册错误监听接口，当系统监测到应用异常时会回调该监听。该接口为同步接口，返回值为注册的监听对象对应的序号。 |
| off(type: "error", observerId: number, callback: AsyncCallback\<void\>): void | 以callback的形式解除注册监听，传入的number为之前注册监听时返回的序号。 |
| off(type: "error", observerId: number): Promise\<void\> | 以Promise的形式解除注册监听，传入的number为之前注册监听时返回的序号。 |
| on(type: 'globalErrorOccurred', observer: GlobalObserver): void | 注册进程错误监听接口，当系统监测到应用异常时会回调该监听，该接口为同步接口，即一次注册，全局监听。（**推荐使用**）  说明：从API version 18开始，支持该接口。 |
| off(type: 'globalErrorOccurred', observer?: GlobalObserver): void | 以callback的形式解除注册监听。（**推荐使用**）  说明：从API version 18开始，支持该接口。 |
| on(type: 'globalUnhandledRejectionDetected', observer: GlobalObserver): void | 注册进程错误监听接口，当系统监测到应用promise异常时会回调该监听，该接口为同步接口，即一次注册，全局监听。（**推荐使用**）  说明：从API version 18开始，支持该接口。 |
| off(type: 'globalUnhandledRejectionDetected', observer?: GlobalObserver): void | 以callback的形式解除注册监听。（**推荐使用**）  说明：从API version 18开始，支持该接口。 |
| on(type: 'loopObserver', timeout: number, observer: LoopObserver): void | 注册主线程消息处理耗时监听器，当系统监测到应用主线程事件处理超时时会回调该监听。  只能在主线程调用，多次注册后，后一次的注册会覆盖前一次的。 |
| off(type: 'loopObserver', observer?: LoopObserver): void | 以LoopObserver的形式解除应用主线程消息处理耗时监听。 |
| on(type: 'freeze', observer: FreezeObserver): void | 注册应用主线程freeze监听。只能在主线程调用，重复注册后，后一次的注册会覆盖前一次的。 |
| off(type: 'freeze', observer?: FreezeObserver): void | 以FreezeObserver的形式解除应用主线程消息处理耗时监听。  说明：从API version 18开始，支持该接口。 |
| setDefaultErrorHandler(defaultHandler?: ErrorHandler): ErrorHandler | 仅允许在主线程调用，发生JS\_CRASH异常时，支持链式回调，返回值为上一次注册的处理器。  说明：从API version 21开始，支持该接口。 |
| setDefaultResourceUsageObserver(defaultObserver?: ResourceUsageObserver): ResourceUsageObserver; | 仅允许在主线程调用，发生应用资源超基线时，支持链式回调，返回值为上一次注册的资源占用观察者。  说明：从API version 24开始，支持该接口。 |

当采用callback作为异步回调时，可以在callback中进行下一步处理。

当采用Promise对象返回时，可以在Promise对象中类似地处理接口返回值，具体结果码说明见[解除注册结果码](#解除注册结果码)。

**错误监听(ErrorObserver)接口功能介绍**：

| 接口名称 | 说明 |
| --- | --- |
| onUnhandledException(errMsg: string): void | 系统回调接口，应用注册后，当应用产生未捕获的异常时的回调。 |
| onException?(errObject: Error): void | 系统回调接口，应用注册后，当应用产生异常上报js层时的回调。 |

**应用主线程监听(LoopObserver)接口功能介绍**：

| 接口名称 | 说明 |
| --- | --- |
| onLoopTimeOut?(timeout: number): void | 系统回调接口，应用注册后，当应用主线程处理事件超时的回调。 |

### 解除注册结果码

| 结果码 | 原因 |
| --- | --- |
| 0 | 正常返回 |
| -1 | 传入的number参数不存在 |
| -2 | 参数错误 |

## 开发示例

![](./img/68c641c0.png)

建议在异常回调函数处理的最后，增加同步退出操作，以避免多次异常回调。

### 单线程监听场景

引入头文件。

```
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L16-L19" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增监听回调函数。

```
let observer: errorManager.ErrorObserver = {
  onUnhandledException(errorMsg) {
    console.error('testErrorManage','onUnhandledException, errorMsg: ', errorMsg);
  },
  onException(errorObj) {
    console.error('testErrorManage','onException, name: ', errorObj.name);
    console.error('testErrorManage','onException, message: ', errorObj.message);
    if (typeof(errorObj.stack) === 'string') {
      console.error('testErrorManage','onException, stack: ', errorObj.stack);
    }
  }
};
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L25-L38" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增触发按钮。

```
Button('单线程监听场景').onClick(()=>{
  let observerId = -1;
  try {
    observerId = errorManager.on('error', observer);
  } catch (paramError) {
    let code = (paramError as BusinessError).code;
    let message = (paramError as BusinessError).message;
    console.error('testErrorManage',`error: ${code}, ${message}`);
  }
  // 构造场景故障
  throw new Error('test errorObserver msg');
}).position({x:50, y:50});
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L114-L127" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


### 进程监听异常场景

引入头文件。

```
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L16-L19" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增监听回调函数。

```
function errorFunc(observer: errorManager.GlobalError) {
  console.error('testErrorManage','result name :' + observer.name);
  console.error('testErrorManage','result message :' + observer.message);
  console.error('testErrorManage','result stack :' + observer.stack);
  console.error('testErrorManage','result instanceName :' + observer.instanceName);
  console.error('testErrorManage','result instanceType :' + observer.instanceType);
};
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L40-L48" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增触发按钮。

```
Button('进程监听异常场景').onClick(()=>{
  try {
    errorManager.on('globalErrorOccurred', errorFunc);
  } catch (paramError) {
    let code = (paramError as BusinessError).code;
    let message = (paramError as BusinessError).message;
    console.error('testErrorManage',`error: ${code}, ${message}`);
  }
  // 构造场景故障
  throw new Error('test errorFunc msg');
}).position({x:50, y:100});
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L129-L141" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


### 进程监听promise异常场景

引入头文件。

```
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L16-L19" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增监听回调函数。

```
function promiseFunc(observer: errorManager.GlobalError) {
  console.error('testErrorManage','result name :' + observer.name);
  console.error('testErrorManage','result message :' + observer.message);
  console.error('testErrorManage','result stack :' + observer.stack);
  console.error('testErrorManage','result instanceName :' + observer.instanceName);
  console.error('testErrorManage','result instanceType :' + observer.instanceType);
};

async function promiseFuncOne() {
  throw new Error('process promise exception');
};
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L58-L70" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增触发按钮。

```
Button('进程监听promise异常场景').onClick(()=>{
  try {
    errorManager.on('globalUnhandledRejectionDetected', promiseFunc);
  } catch (paramError) {
    let code = (paramError as BusinessError).code;
    let message = (paramError as BusinessError).message;
    console.error('testErrorManage',`error: ${code}, ${message}`);
  }
  // 构造场景故障
  new Promise<string>(() => {
    promiseFuncOne();
  }).then(() => {
    throw new Error('test promiseFuncOne msg');
  });
}).position({x:50, y:200});
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L159-L175" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


### 主线程监听freeze

引入头文件。

```
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L16-L19" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增监听回调函数。

```
function freezeCallback() {
  console.error('testErrorManage','freezecallback');
};
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L93-L97" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增触发按钮。

```
Button('主线程监听freeze').onClick(()=>{
  try {
    errorManager.on('freeze', freezeCallback);
  } catch (paramError) {
    let code = (paramError as BusinessError).code;
    let message = (paramError as BusinessError).message;
    console.error('testErrorManage',`error: ${code}, ${message}`);
  }
  // 构造场景故障
  let date = Date.now();
  while (Date.now() - date < 15000) {
  };
}).position({x:50, y:300});
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L195-L209" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


### 主线程监听消息处理耗时

引入头文件。

```
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L16-L19" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增监听回调函数。

```
let loopObserver: errorManager.LoopObserver = {
  onLoopTimeOut(timeout: number) {
    console.error('testErrorManage','Duration timeout: ' + timeout);
  }
};
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L50-L56" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增触发按钮。

```
Button('主线程监听消息处理耗时').onClick(()=>{
  try {
    errorManager.on('loopObserver', 1, loopObserver);
  } catch (paramError) {
    let code = (paramError as BusinessError).code;
    let message = (paramError as BusinessError).message;
    console.error('testErrorManage',`error: ${code}, ${message}`);
  }
  // 构造场景故障
  let date = Date.now();
  while (Date.now() - date < 4000) {
  };
}).position({x:50, y:150});
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L143-L157" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


### 进程promise监听注册被拒绝

引入头文件。

```
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L16-L19" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增监听回调函数。

```
let promise1 = new Promise<void>(() => {}).then(() => {
  throw new Error('uncaught error');
});

let unhandledrejectionObserver: errorManager.UnhandledRejectionObserver = (reason: Error, promise: Promise<void>) => {
  if (promise === promise1) {
    console.error('testErrorManage','promise1 is rejected');
  }
  console.error('testErrorManage','reason.name: ', reason.name);
  console.error('testErrorManage','reason.message: ', reason.message);
  if (reason.stack) {
    console.error('testErrorManage','reason.stack: ', reason.stack);
  }
};

async function promiseFuncTwo() {
  throw new Error('process promise unhandled rejection exception');
};
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L72-L91" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增触发按钮。

```
Button('进程promise监听注册被拒绝').onClick(()=>{
  try {
    errorManager.on('unhandledRejection', unhandledrejectionObserver);
  } catch (paramError) {
    let code = (paramError as BusinessError).code;
    let message = (paramError as BusinessError).message;
    console.error('testErrorManage',`error: ${code}, ${message}`);
  }
  // 构造场景故障
  new Promise<string>(() => {
    promiseFuncTwo();
  }).then(() => {
    throw new Error('test promiseFuncTwo msg');
  });
}).position({x:50, y:250});
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L177-L193" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


### 错误处理器责任链模式场景

定义第一个错误处理器及注册方法，无前置处理器时退出进程。

```
import { errorManager } from '@kit.AbilityKit';
import { process } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';

let firstHandler: errorManager.ErrorHandler;
const firstErrorHandler: errorManager.ErrorHandler = (reason: Error) => {
    // 自定义的第一个errorHandler实现逻辑
    console.info('[FirstHandler] First uncaught exception handler invoked.');
    if (firstHandler) {
        firstHandler(reason);
    } else {
        // 建议增加判空操作，如果为空采用同步退出方式
        const processManager = new process.ProcessManager();
        processManager.exit(0);
    }
};

export function setFirstErrorHandler() {
    try {
        firstHandler = errorManager.setDefaultErrorHandler(firstErrorHandler);
    } catch (paramError) {
        let code = (paramError as BusinessError).code;
        let message = (paramError as BusinessError).message;
        console.error('setFirstErrorHandler',`error: ${code}, ${message}`);
    }
    console.info('Registered First Error Handler');
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/FirstErrorHandler.ets#L1-L29" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：FirstErrorHandler.ets</a></div>


定义第二个错误处理器及注册方法，形成链式调用。

```
import { errorManager } from '@kit.AbilityKit';
import { process } from '@kit.ArkTS';

let secondHandler: errorManager.ErrorHandler;
const secondErrorHandler: errorManager.ErrorHandler = (reason: Error) => {
    // 自定义的第二个errorHandler实现逻辑
    console.info('[SecondHandler] Second uncaught exception handler invoked.');
    if (secondHandler) {
        secondHandler(reason);
    } else {
        const processManager = new process.ProcessManager();
        processManager.exit(0);
    }
};

export function setSecondErrorHandler() {
    secondHandler = errorManager.setDefaultErrorHandler(secondErrorHandler);
    console.info('Registered Second Error Handler');
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/SecondErrorHandler.ets#L1-L28" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：SecondErrorHandler.ets</a></div>


引入头文件。

```
import { setFirstErrorHandler } from './FirstErrorHandler';
import { setSecondErrorHandler } from './SecondErrorHandler';
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L20-L23" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


新增错误处理器责任链模式构造函数。

```
function testErrorHandlers() {
  setFirstErrorHandler();
  setSecondErrorHandler();
  throw new Error('Test uncaught exception!');
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L99-L105" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


主组件通过按钮触发测试，注册两个处理器并抛错验证处理链。

```
Button('错误处理器责任链模式场景').onClick(()=>{
  testErrorHandlers();
}).position({x:50, y:350});
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/ErrorManage/ErrorManage/entry/src/main/ets/pages/Index.ets#L211-L215" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
