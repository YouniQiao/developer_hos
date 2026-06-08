---
title: "使用HiCollie监控函数执行时间超长问题（C/C++）"
original_url: /docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk
format: md
upstream_id: dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk
last_sync: 2026-06-07
sync_hash: 3c253d2b
---
## 简介

任务执行超时指要监控的业务代码逻辑执行时长超过业务逻辑预期时间。本文面向开发者介绍HiCollie模块对外提供函数执行时间超长的检测能力。

![](./img/d71fe01f.png)

当开发者通过DevEco Studio的Debug按钮安装并启动应用时，会自动关闭当前工程的超时检测机制。避免调试过程出现超时检测影响开发者调试。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| OH\_HiCollie\_SetTimer | 注册定时器，用于检测函数或代码块执行是否超过自定义时间。  结合OH\_HiCollie\_CancelTimer接口配套使用，应在调用耗时的函数之前使用。  说明：从API version 18开始，支持该接口。 |
| OH\_HiCollie\_CancelTimer | 取消定时器。  结合OH\_HiCollie\_SetTimer接口配套使用，执行函数或代码块后使用，OH\_HiCollie\_CancelTimer通过id将该任务取消；  若未在自定义时间内取消，则执行回调函数，在特定自定义超时动作下，生成故障日志。  说明：从API version 18开始，支持该接口。 |

* API接口的具体使用说明（参数使用限制、具体取值范围等）请参考[HiCollie](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hicollie-h)。
* 函数执行时间超长故障日志以syswarning-开头，生成在“设备/data/log/warninglog/”路径下。文件名格式为“syswarning-应用包名-应用UID-秒级时间.log”。

## 开发步骤

下文将展示如何在应用内增加一个按钮，并单击该按钮以调用HiCollie Ndk接口。

1. 新建Native C++工程，目录结构如下：

   ```
   entry:
     src:
       main:
         cpp:
           types:
             libentry:
               - index.d.ts
           - CMakeLists.txt
           - napi_init.cpp
         ets:
           entryability:
             - EntryAbility.ts
           pages:
             - Index.ets
   ```
2. 编辑“CMakeLists.txt”文件，添加源文件及动态库。

   ```
   # 依赖动态库libhilog_ndk.z.so（日志输出），libohhicollie.so（HiCollie对外检测接口）
   target_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libohhicollie.so)
   ```
3. 编辑“napi\_init.cpp”文件，导入依赖头文件、定义LOG\_TAG与测试方法以及注册TestHiCollieTimerNdk为ArkTS接口。

   引入头文件及定义LOG\_TAG。

   ```
   #include "napi/native_api.h"
   // ...
   #include "hilog/log.h"

   #undef LOG_TAG
   #define LOG_TAG "testTag"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/cpp/napi_init.cpp#L23-L37" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>


   ```
   #include <unistd.h>
   #include "hicollie/hicollie.h"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/cpp/napi_init.cpp#L39-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>


   构造任务执行时间超时场景，并使用OH\_HiCollie\_SetTimer及OH\_HiCollie\_CancelTimer函数进行监控。

   ```
   // 定义回调函数
   void CallBack(void*)
   {
       OH_LOG_INFO(LogType::LOG_APP, "HiCollieTimerNdk CallBack");  // 回调函数中打印日志
   }

   static napi_value TestHiCollieTimerNdk(napi_env env, napi_callback_info info)
   {
       int id;
       // 设置HiCollieTimer 参数（Timer任务名，超时时间，回调函数，回调函数参数，超时发生后行为）
       HiCollie_SetTimerParam param = {"testTimer", 1, CallBack, nullptr, HiCollie_Flag::HICOLLIE_FLAG_LOG};
       HiCollie_ErrorCode errorCode = OH_HiCollie_SetTimer(param, &id);  // 注册HiCollieTimer函数执行时长超时检测一次性任务
       if (errorCode == HICOLLIE_SUCCESS) {  // HiCollieTimer任务注册成功
           OH_LOG_INFO(LogType::LOG_APP, "HiCollieTimer taskId: %{public}d", id); // 打印任务id
           sleep(2);  // 模拟执行耗时函数，在这里简单的将线程阻塞2s
           OH_HiCollie_CancelTimer(id);  // 根据id取消已注册任务
       }
       return nullptr;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/cpp/napi_init.cpp#L1115-L1135" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>


   在Init函数中的desc[]数组中将TestHiCollieTimerNdk注册为ArkTS接口。

   ```
   // 将TestHiCollieTimerNdk注册为ArkTS接口
   { "TestHiCollieTimerNdk", nullptr, TestHiCollieTimerNdk, nullptr, nullptr, nullptr, napi_default, nullptr },
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/cpp/napi_init.cpp#L1436-L1439" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

4. 编辑“index.d.ts”文件，定义ArkTS接口。

   ```
   export const TestHiCollieTimerNdk: () => void;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/cpp/types/libentry/Index.d.ts#L29-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.d.ts</a></div>

5. 编辑“Index.ets”文件。

   引入调用C接口的头文件。

   ```
   import testNapi from 'libentry.so';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/ets/pages/Index.ets#L24-L26" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


   在Index页面新增触发TestHiCollieTimerNdk方法的按钮。

   ```
   // 添加点击事件，触发TestHiCollieTimerNdk方法。
   Button('TestHiCollieTimerNdk')
     .type(ButtonType.Capsule)
     .margin({
       top: 20
     })
     .backgroundColor('#0D9FFB')
     .width('80%')
     .height('5%')
     .onClick(() => {
       testNapi.TestHiCollieTimerNdk();
     })
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/ets/pages/Index.ets#L243-L256" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

6. 点击DevEco Studio界面中的运行按钮，运行应用工程。
7. 在DevEco Studio的底部，切换到“Log->HiLog”窗口，设置日志的过滤条件为“testTag”。

   （1）点击“TestHiCollieTimerNdk”按钮执行程序，日志窗口打印任务id。

   ```
   .../testTag ... HiCollieTimer taskId: x
   ```

   （2）等待2s后，执行回调函数，日志窗口打印。

   ```
   .../testTag ... HiCollieTimerNdk CallBack
   ```

   获取故障文件信息相关内容可参考[订阅任务执行超时事件（C/C++）](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-ndk) 订阅获取。
