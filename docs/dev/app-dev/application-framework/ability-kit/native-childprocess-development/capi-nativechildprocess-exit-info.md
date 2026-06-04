---
title: "获取Native子进程退出信息"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/capi-nativechildprocess-exit-info
---

## 场景介绍

从API version 20开始，支持父进程通过注册回调函数监听子进程，获取子进程异常退出信息，以便父进程做后续优化处理。这里支持监听的子进程必须为[OH\_Ability\_StartNativeChildProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_startnativechildprocess)、[OH\_Ability\_StartNativeChildProcessWithConfigs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_startnativechildprocesswithconfigs)或[startNativeChildProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-childprocessmanager#childprocessmanagerstartnativechildprocess13)接口创建的子进程。

## 接口说明

| 名称 | 描述 |
| --- | --- |
| [Ability\_NativeChildProcess\_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#ability_nativechildprocess_errcode) [OH\_Ability\_RegisterNativeChildProcessExitCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_registernativechildprocessexitcallback) ([OH\_Ability\_OnNativeChildProcessExit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_onnativechildprocessexit) onProcessExit) | 注册子进程退出回调函数。 |
| [Ability\_NativeChildProcess\_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#ability_nativechildprocess_errcode) [OH\_Ability\_UnregisterNativeChildProcessExitCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_unregisternativechildprocessexitcallback) ([OH\_Ability\_OnNativeChildProcessExit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_onnativechildprocessexit) onProcessExit) | 解注册子进程退出回调函数。 |

## 开发步骤

**动态库文件**

```
libchild_process.so
```

**头文件**

```
#include <AbilityKit/native_child_process.h>
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/NativeChildProcessExit/entry/src/main/cpp/MainProcessFile.cpp#L21-L23" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MainProcessFile.cpp</a></div>


1. 主进程-注册和解注册Native子进程异常退出回调。

   调用[OH\_Ability\_RegisterNativeChildProcessExitCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_registernativechildprocessexitcallback)注册Native子进程，如果返回值为NCP\_NO\_ERROR表示注册成功。

   调用[OH\_Ability\_UnregisterNativeChildProcessExitCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_unregisternativechildprocessexitcallback)解注册Native子进程，如果返回值为NCP\_NO\_ERROR表示解注册成功。

   ```
   #include <AbilityKit/native_child_process.h>
   #include <hilog/log.h>

   // ···

   void OnNativeChildProcessExit(int32_t pid, int32_t signal)
   {
       OH_LOG_INFO(LOG_APP, "pid: %{public}d, signal: %{public}d", pid, signal);
   }

   void RegisterNativeChildProcessExitCallback()
   {
       Ability_NativeChildProcess_ErrCode ret =
           OH_Ability_RegisterNativeChildProcessExitCallback(OnNativeChildProcessExit);
       if (ret != NCP_NO_ERROR) {
           OH_LOG_ERROR(LOG_APP, "register failed.");
       }
       // ···
   }

   void UnregisterNativeChildProcessExitCallback()
   {
       Ability_NativeChildProcess_ErrCode ret =
           OH_Ability_UnregisterNativeChildProcessExitCallback(OnNativeChildProcessExit);
       if (ret != NCP_NO_ERROR) {
           OH_LOG_ERROR(LOG_APP, "unregister failed.");
       }
       // ···
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/NativeChildProcessExit/entry/src/main/cpp/MainProcessFile.cpp#L20-L60" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MainProcessFile.cpp</a></div>

2. 主进程-添加编译依赖项。

   修改CMaklist.txt添加必要的依赖库，假设主进程所在的so名称为libmainprocesssample.so（主进程和子进程的实现也可以选择编译到同一个动态库文件）。

   ```
   target_link_libraries(mainprocesssample PUBLIC
       # 添加依赖的元能力动态库
       libchild_process.so

       # 其它依赖的动态库
       # ...
   )
   ```
