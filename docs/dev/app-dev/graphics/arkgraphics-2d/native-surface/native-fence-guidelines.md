---
displayed_sidebar: appDevSidebar
title: "GPU/CPU内存访问同步操作开发指南 (C/C++)"
original_url: /docs/dev/app-dev/graphics/arkgraphics-2d/native-surface/native-fence-guidelines
format: md
upstream_id: dev/app-dev/graphics/arkgraphics-2d/native-surface/native-fence-guidelines
last_sync: 2026-06-07
sync_hash: 4cf061e8
---
## 场景介绍

NativeFence是管理fenceFd同步状态的模块。开发者可通过其接口实现以下功能：设置阻塞时间、永久阻塞、关闭fenceFd以及检查其有效性。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| OH\_NativeFence\_IsValid (int fenceFd) | 检查fenceFd是否有效。 |
| OH\_NativeFence\_Wait (int fenceFd, uint32\_t timeout) | 阻塞传入的fenceFd，超时参数指定了允许等待的最长时间。 |
| OH\_NativeFence\_WaitForever (int fenceFd) | 永久阻塞传入的fenceFd。 |
| OH\_NativeFence\_Close (int fenceFd) | 关闭fenceFd。 |

详细的接口说明请参考[NativeFence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativefence)。

## 开发步骤

以下步骤描述了如何使用NativeFence提供的Native API接口。

**添加动态链接库**

CMakeLists.txt中添加以下库文件。

```
libnative_fence.so
```

**头文件**

```
#include <native_fence/native_fence.h>
#include <cstring>
#include <iostream>
#include <linux/sync_file.h>
#include <signal.h>
#include <sys/signalfd.h>
#include <unistd.h>
```

1. **使用signalfd()接口创建fenceFd**。

   ```
   sigset_t mask;
   sigemptyset(&mask);
   sigaddset(&mask, SIGINT); // Monitor SIGINT signal (Ctrl C)
   sigaddset(&mask, SIGURG); // Generated when urgent data or out of band data arrives at the socket
   sigprocmask(SIG_BLOCK, &mask, NULL);
   int sfd = signalfd(-1, &mask, 0);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeFence/entry/src/main/cpp/napi_init.cpp#L75-L82" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

2. **判断传入的fenceFd是否合法**。

   ```
   bool isValid = OH_NativeFence_IsValid(INVALID_FD);
   if (!isValid) {
       DRAWING_LOGW("fenceFd is invalid");
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeFence/entry/src/main/cpp/napi_init.cpp#L67-L72" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

3. **调用OH\_NativeFence\_Wait阻塞接口，等待fence完成后进行下一步操作**。

   ```
   constexpr uint32_t TIMEOUT_MS = 5000;
   // ...
   bool result = OH_NativeFence_Wait(INVALID_FD, TIMEOUT_MS);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeFence/entry/src/main/cpp/napi_init.cpp#L33-L102" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

4. **调用OH\_NativeFence\_WaitForever阻塞接口，等待fence完成后进行下一步操作**。

   ```
   bool result2 = false;
   auto startTime = std::chrono::steady_clock::now();
   result2 = OH_NativeFence_WaitForever(sfd);
   auto endTime = std::chrono::steady_clock::now();
   auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(endTime - startTime).count();
   if (result2) {
       DRAWING_LOGI("SyncFenceWaitForever has an event occurring result2 %{public}d, cost_time: %{public}d",
           result2, duration);
   } else {
       DRAWING_LOGI("SyncFenceWaitForever timeout with no event occurrence"
           "result2 %{public}d, cost_time: %{public}d", result2, duration);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeFence/entry/src/main/cpp/napi_init.cpp#L136-L149" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

5. **GPU或CPU发送同步信号(signal)，通知fenceFd解除阻塞**。
6. **关闭fenceFd**。

   ```
   OH_NativeFence_Close(sfd);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeFence/entry/src/main/cpp/napi_init.cpp#L160-L162" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>
