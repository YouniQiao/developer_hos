---
displayed_sidebar: appDevSidebar
title: "NativeWindow开发指导 (C/C++)"
original_url: /docs/dev/app-dev/graphics/arkgraphics-2d/native-surface/native-window-guidelines
format: md
upstream_id: dev/app-dev/graphics/arkgraphics-2d/native-surface/native-window-guidelines
last_sync: 2026-06-07
sync_hash: de51039c
---
## 场景介绍

NativeWindow是**本地平台化窗口**，表示图形队列的生产者端。开发者可以通过NativeWindow接口进行申请和提交Buffer，配置Buffer属性信息。

针对NativeWindow，常见的开发场景如下：

* 通过NativeWindow提供的Native API接口申请图形Buffer，并将生成的图形内容写入图形Buffer，最终提交Buffer到图形队列。
* 在适配EGL层的eglswapbuffer接口时，进行申请和提交Buffer。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| OH\_NativeWindow\_NativeWindowRequestBuffer (OHNativeWindow \*window, OHNativeWindowBuffer \*\*buffer, int \*fenceFd) | 通过OHNativeWindow对象申请一块OHNativeWindowBuffer，用以内容生产。 |
| OH\_NativeWindow\_NativeWindowFlushBuffer (OHNativeWindow \*window, OHNativeWindowBuffer \*buffer, int fenceFd, Region region) | 通过OHNativeWindow将生产好内容的OHNativeWindowBuffer放回到Buffer队列中，用以内容消费。 |
| OH\_NativeWindow\_NativeWindowHandleOpt (OHNativeWindow \*window, int code,...) | 设置/获取OHNativeWindow的属性，包括设置/获取宽高、内容格式等。 |

详细的接口说明请参考[native\_window](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativewindow)。

## 开发步骤

以下步骤描述了如何使用NativeWindow提供的Native API接口申请图形Buffer，写入图形内容，并提交Buffer到图形队列。

**添加动态链接库**

CMakeLists.txt中添加以下lib。

```
libace_ndk.z.so
libnative_window.so
```

**头文件**

```
#include <sys/poll.h>
#include <sys/mman.h>
#include <unistd.h>
#include <ace/xcomponent/native_interface_xcomponent.h>
#include <native_window/external_window.h>
```

1. 获取OHNativeWindow实例。

   可通过[OH\_NativeXComponent\_Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent-callback)接口获取OHNativeWindow。代码示例如下。关于XComponent模块的使用方法，详见[XComponent开发指导](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines)。

   1. 在xxx.ets中添加一个XComponent组件。

      ```
      XComponent({ id: 'xcomponentId', type: 'texture', libraryname: 'nativerender' })
        .margin({ bottom: 26 })
        .onLoad((nativeWindowContext) => {
          this.nativeWindowContext = nativeWindowContext as NativeWindowContext;
        })
      ```

      

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/ets/pages/Index.ets#L71-L77" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

   2. 在 native c++ 层获取 NativeXComponent。

      ```
      napi_value exportInstance = nullptr;
      OH_NativeXComponent *nativeXComponent = nullptr;
      int32_t ret;
      char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {};
      uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;

      status = napi_get_named_property(env, exports, OH_NATIVE_XCOMPONENT_OBJ, &exportInstance);
      if (status != napi_ok) {
          return false;
      }

      status = napi_unwrap(env, exportInstance, reinterpret_cast<void**>(&nativeXComponent));
      if (status != napi_ok) {
          return false;
      }

      ret = OH_NativeXComponent_GetXComponentId(nativeXComponent, idStr, &idSize);
      if (ret != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {
          return false;
      }
      ```

      

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/cpp/NativeRender.cpp#L145-L166" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NativeRender.cpp</a></div>

   3. 定义 OH\_NativeXComponent\_Callback。

      ```
      void OnSurfaceCreatedCB(OH_NativeXComponent* component, void* window)
      {
          // ...
          OHNativeWindow* nativeWindow = static_cast<OHNativeWindow*>(window);
          // ...
      }

      void OnSurfaceChangedCB(OH_NativeXComponent* component, void* window)
      {
          // ...
          OHNativeWindow* nativeWindow = static_cast<OHNativeWindow*>(window);
          // ...
      }

      void OnSurfaceDestroyedCB(OH_NativeXComponent* component, void* window)
      {
          // ...
          OHNativeWindow* nativeWindow = static_cast<OHNativeWindow*>(window);
          // ...
      }

      void DispatchTouchEventCB(OH_NativeXComponent* component, void* window)
      {
          // ...
          OHNativeWindow* nativeWindow = static_cast<OHNativeWindow*>(window);
      }
      // ...
      callback_.OnSurfaceCreated = OnSurfaceCreatedCB;
      callback_.OnSurfaceChanged = OnSurfaceChangedCB;
      callback_.OnSurfaceDestroyed = OnSurfaceDestroyedCB;
      callback_.DispatchTouchEvent = DispatchTouchEventCB;
      ```

      

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/cpp/NativeRender.cpp#L26-L144" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NativeRender.cpp</a></div>

   4. 将OH\_NativeXComponent\_Callback 注册给 NativeXComponent。

      ```
      OH_NativeXComponent_RegisterCallback(nativeXComponent, &callback_);
      ```

      

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/cpp/NativeRender.cpp#L167-L169" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NativeRender.cpp</a></div>

2. 设置OHNativeWindowBuffer的属性。使用OH\_NativeWindow\_NativeWindowHandleOpt设置OHNativeWindowBuffer的属性（默认携带NATIVEBUFFER\_USAGE\_CPU\_READ usage参数，如果不使用CPU读写数据，建议去除NATIVEBUFFER\_USAGE\_CPU\_READ usage参数，具体可见[关闭CPU访问窗口缓冲区数据](/docs/FAQ/faqs-graphic-development/faqs-arkgraphics2d-kit/faqs-arkgraphics-2d-14)）。

   ```
   int code = SET_BUFFER_GEOMETRY;
   int32_t bufferHeight = static_cast<int32_t>(height_ / 4);
   int32_t bufferWidth = static_cast<int32_t>(width_ / 2);
   OH_NativeWindow_NativeWindowHandleOpt(nativeWindow_, code, bufferWidth, bufferHeight);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/cpp/NativeRender.cpp#L178-L183" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NativeRender.cpp</a></div>

3. 从图形队列申请OHNativeWindowBuffer。

   ```
   int fenceFd = -1;
   OHNativeWindowBuffer *nativeWindowBuffer = nullptr;
   ret = OH_NativeWindow_NativeWindowRequestBuffer(nativeWindow, &nativeWindowBuffer, &fenceFd);
   if (ret != 0 || nativeWindowBuffer == nullptr) {
       return;
   }
   BufferHandle *bufferHandle = OH_NativeWindow_GetBufferHandleFromNative(nativeWindowBuffer);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/cpp/NativeRender.cpp#L297-L305" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NativeRender.cpp</a></div>

4. 内存映射mmap。

   ```
   void *mappedAddr =
       mmap(bufferHandle->virAddr, bufferHandle->size, PROT_READ | PROT_WRITE, MAP_SHARED, bufferHandle->fd, 0);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/cpp/NativeRender.cpp#L306-L309" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NativeRender.cpp</a></div>

5. 将生产的内容写入OHNativeWindowBuffer，在这之前需要等待releaseFenceFd可用（注意releaseFenceFd不等于-1才需要调用poll）。如果没有等待releaseFenceFd事件的数据可用（POLLIN），则可能造成花屏、裂屏、HEBC（High Efficiency Bandwidth Compression，高效带宽压缩） fault等问题。releaseFenceFd是消费者进程创建的一个文件句柄，代表消费者消费buffer完毕，buffer可读，生产者可以开始填充buffer内容。

   ```
   int retCode = -1;
   uint32_t timeout = 3000;
   if (fenceFd != -1) {
       struct pollfd pollfds = {0};
       pollfds.fd = fenceFd;
       pollfds.events = POLLIN;
       do {
           retCode = poll(&pollfds, 1, timeout);
       } while (retCode == -1 && (errno == EINTR || errno == EAGAIN));
       close(fenceFd);
   }
   uint32_t *pixel = static_cast<uint32_t *>(mappedAddr);
   for (uint64_t x = 0; x < bufferHandle->width; x++) {
       for (uint64_t y = 0; y < bufferHandle->height; y++) {
           *pixel++ = value;
       }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/cpp/NativeRender.cpp#L311-L329" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NativeRender.cpp</a></div>

6. 提交OHNativeWindowBuffer到图形队列。请注意OH\_NativeWindow\_NativeWindowFlushBuffer接口的acquireFenceFd不可以和OH\_NativeWindow\_NativeWindowRequestBuffer接口获取的releaseFenceFd相同，acquireFenceFd可传入默认值-1。acquireFenceFd是生产者需要传入的文件句柄，消费者获取到buffer后可根据生产者传入的acquireFenceFd决定何时去渲染并上屏buffer内容。

   ```
   struct Region *region = new Region();
   ret = OH_NativeWindow_NativeWindowFlushBuffer(nativeWindow, nativeWindowBuffer, fenceFd, *region);
   if (ret != NATIVE_ERROR_OK) {
       LOGE("flush failed");
       (void)OH_NativeWindow_NativeWindowAbortBuffer(nativeWindow, nativeWindowBuffer);
       return;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/cpp/NativeRender.cpp#L330-L338" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NativeRender.cpp</a></div>

7. 使用munmap取消内存映射。

   ```
   if (munmap(mappedAddr, bufferHandle->size) < 0) {
       OH_NativeWindow_DestroyNativeWindow(nativeWindow);
       LOGE("munmap failed");
       return;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/NdkNativeWindow/entry/src/main/cpp/NativeRender.cpp#L339-L345" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NativeRender.cpp</a></div>
