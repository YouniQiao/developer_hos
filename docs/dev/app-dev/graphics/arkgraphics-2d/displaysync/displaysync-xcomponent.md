---
displayed_sidebar: appDevSidebar
title: "请求自绘制内容绘制帧率"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaysync-xcomponent
format: md
---


对于基于[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/napi-xcomponent-guidelines)进行Native开发的业务，可以请求独立的绘制帧率进行内容开发，如游戏、自绘制UI框架对接等场景。

## 接口说明

| 函数名称 | 说明 |
| --- | --- |
| OH\_NativeXComponent\_SetExpectedFrameRateRange (OH\_NativeXComponent \*component, OH\_NativeXComponent\_ExpectedRateRange \*range) | 设置帧期望的帧率范围。 |
| OH\_NativeXComponent\_RegisterOnFrameCallback (OH\_NativeXComponent \*component, OH\_NativeXComponent\_OnFrameCallback \*callback) | 设置每帧回调函数，同时启动每帧回调。 |
| OH\_NativeXComponent\_UnregisterOnFrameCallback (OH\_NativeXComponent \*component) | 取消注册的每帧回调函数，同时停止调用回调函数。 |

详细的接口说明请参考[OH\_NativeXComponent Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)。

## 开发步骤

![](./img/c98f3b10.png)

本范例是通过Drawing在Native侧实现图形的绘制，并将其呈现在NativeWindow上，具体可参考[使用Drawing实现图形绘制与显示](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphic-drawing-overview)。

1. 添加开发依赖。

   CMakeLists.txt中添加以下lib。

   ```
   target_link_libraries(entry PUBLIC libace_napi.z.so libnative_drawing.so libnative_window.so libace_ndk.z.so)
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/cpp/CMakeLists.txt#L20-L22" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CMakeLists.txt</a></div>


   导入依赖的相关头文件。

   ```
   #include <ace/xcomponent/native_interface_xcomponent.h>
   #include <arpa/nameser.h>
   #include <bits/alltypes.h>
   #include <native_window/external_window.h>
   #include <native_drawing/drawing_bitmap.h>
   #include <native_drawing/drawing_color.h>
   #include <native_drawing/drawing_canvas.h>
   #include <native_drawing/drawing_pen.h>
   #include <native_drawing/drawing_brush.h>
   #include <native_drawing/drawing_path.h>
   #include <cstdint>
   #include <map>
   #include <sys/mman.h>
   #include <string>
   #include "napi/native_api.h"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/cpp/samples/sample_xcomponent.h#L17-L33" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.h</a></div>


   ```
   #include <native_drawing/drawing_text_typography.h>
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/cpp/samples/sample_xcomponent.cpp#L17-L19" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.cpp</a></div>

2. 定义ArkTS接口文件XComponentContext.ts，用来对接Native层。

   ```
   export default interface XComponentContext {
     register(): void;

     unregister(): void;
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/ets/interface/XComponentContext.ts#L15-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XComponentContext.ts</a></div>

3. 定义演示页面，包含两个XComponent组件。

   ```
   import XComponentContext from '../interface/XComponentContext';
   // ...

   @Entry
   @Component
   struct Index {
     private xComponentContext1: XComponentContext | undefined = undefined;
     private xComponentContext2: XComponentContext | undefined = undefined;

     build() {
       Column() {
         Row() {
           // ...

           XComponent({
             id: 'xcomponentId_30',
             type: XComponentType.SURFACE,
             libraryname: 'entry'
           })
             .onLoad((xComponentContext) => {
               this.xComponentContext1 = xComponentContext as XComponentContext;
             }).width('640px')
             // ...
         }.height('40%')

         Row() {
           // ...

           XComponent({
             id: 'xcomponentId_120',
             type: XComponentType.SURFACE,
             libraryname: 'entry'
           })
             .onLoad((xComponentContext) => {
               this.xComponentContext2 = xComponentContext as XComponentContext;
             }).width('640px')
             // ...
         }.height('40%')

         // ...
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/ets/DisplaySync/XComponentDisplaySync.ets#L15-L141" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XComponentDisplaySync.ets</a></div>

4. Native层配置帧率和注册回调函数。

   ```
   static void TestCallback(OH_NativeXComponent *component, uint64_t timestamp, uint64_t targetTimestamp)
   {
       // ...

       int32_t xSize = OH_NativeXComponent_GetXComponentSize(component, nativeWindow, &width, &height);
       if ((xSize == OH_NATIVEXCOMPONENT_RESULT_SUCCESS) && (render != nullptr)) {
           render->Prepare();
           render->Create();
           if (id == "xcomponentId_30") {
               int offset = 16;
               render->ConstructPath(offset, offset, render->defaultOffsetY);
           }
           if (id == "xcomponentId_120") {
               int offset = 4;
               render->ConstructPath(offset, offset, render->defaultOffsetY);
           }
           // ...
       }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/cpp/samples/sample_xcomponent.cpp#L68-L112" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.cpp</a></div>


   ![](./img/14fff24a.png)

   * Callback回调函数运行于UI主线程，故涉及UI线程的耗时操作不应运行于回调函数中，以免影响性能。
   * 实例在调用OH\_NativeXComponent\_RegisterOnFrameCallback后，在不需要进行帧率控制时，应进行OH\_NativeXComponent\_UnregisterOnFrameCallback操作，避免内存泄漏及性能功耗影响。
   * API version 18之前，应用调用OH\_NativeXComponent\_RegisterOnFrameCallback接口设置回调函数，如果没有取消注册，在XComponent实例存在期间，能一直收到期望回调。
   * 从API version 18开始，应用调用OH\_NativeXComponent\_RegisterOnFrameCallback接口设置回调函数，如果没有取消注册，只在XComponent上树期间，能收到期望回调。

   ```
   void SampleXComponent::RegisterOnFrameCallback(OH_NativeXComponent *nativeXComponent)
   {
       // ...
       OH_NativeXComponent_RegisterOnFrameCallback(nativeXComponent, TestCallback);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/cpp/samples/sample_xcomponent.cpp#L425-L433" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.cpp</a></div>


   ```
   napi_value SampleXComponent::NapiRegister(napi_env env, napi_callback_info info)
   {
       // ...
           render->RegisterOnFrameCallback(nativeXComponent);
           // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/cpp/samples/sample_xcomponent.cpp#L251-L305" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.cpp</a></div>


   ```
   napi_value SampleXComponent::NapiUnregister(napi_env env, napi_callback_info info)
   {
       // ...
           OH_NativeXComponent_UnregisterOnFrameCallback(nativeXComponent);
           // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/cpp/samples/sample_xcomponent.cpp#L307-L355" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.cpp</a></div>

5. TS层注册和取消注册每帧回调。

   ```
   Row() {
     Button('Start')
       .id('Start')
       .fontSize(14)
       .fontWeight(500)
       .margin({ bottom: 20, right: 6, left: 6 })
       .onClick(() => {
         if (this.xComponentContext1) {
           this.xComponentContext1.register();
         }
         if (this.xComponentContext2) {
           this.xComponentContext2.register();
         }
       })
       .width('30%')
       .height(40)
       .shadow(ShadowStyle.OUTER_DEFAULT_LG)

     Button('Stop')
       .id('Stop')
       .fontSize(14)
       .fontWeight(500)
       .margin({ bottom: 20, left: 6 })
       .onClick(() => {
         if (this.xComponentContext1) {
           this.xComponentContext1.unregister();
         }
         if (this.xComponentContext2) {
           this.xComponentContext2.unregister();
         }
       })
       .width('30%')
       .height(40)
       .shadow(ShadowStyle.OUTER_DEFAULT_LG)

     // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/ets/DisplaySync/XComponentDisplaySync.ets#L78-L134" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XComponentDisplaySync.ets</a></div>
