---
title: "HiDebug接口使用示例(ArkTS)"
original_url: /docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-arkts
format: md
---


HiDebug ArkTS接口功能独立，需要获取调试信息时直接调用。具体调用方式请参考[@ohos.hidebug](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hidebug)中的示例。

## 开发示例

本文以获取系统CPU使用率为例，展示如何调用HiDebug ArkTS接口。

1. 使用DevEco Studio新建工程，选择“Empty Ability”。
2. 在Project窗口单击entry > src > main > ets > pages，打开并编辑Index.ets文件：

   导入所需依赖：

   ```
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hidebug, hilog } from '@kit.PerformanceAnalysisKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiDebugTool/entry/src/main/ets/pages/Index.ets#L16-L19" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


   定义测试方法：

   ```
   function testHiDebugArk() {  // 按照需要调用的接口实现
     try {
       hilog.info(0x0000, 'testTag', `getSystemCpuUsage: ${hidebug.getSystemCpuUsage()}`);
     } catch (error) {
       hilog.info(0x0000, 'testTag', `error code: ${(error as BusinessError).code},
         error msg: ${(error as BusinessError).message}`);
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiDebugTool/entry/src/main/ets/pages/Index.ets#L25-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


   添加按钮以触发接口调用：

   ```
   Button('testHiDebugArk')
     .type(ButtonType.Capsule)
     .margin({
       top: 20
     })
     .backgroundColor('#0D9FFB')
     .width('60%')
     .height('5%')
     // 添加点击事件
     .onClick(testHiDebugArk);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiDebugTool/entry/src/main/ets/pages/Index.ets#L71-L82" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

3. 点击运行，然后在设备上点击“testHiDebugArk”按钮，触发接口调用。
4. 在DevEco Studio底部切换到“Log”窗口，设置日志过滤条件为“testTag”，即可查看相关日志：

   ```
   10-22 15:46:04.587   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     getSystemCpuUsage: 0.2878989952876323
   ```
