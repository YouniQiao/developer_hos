---
displayed_sidebar: appDevSidebar
title: "NativeDisplaySoloist开发指导 (C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaysoloist-native-guidelines
format: md
---


如果开发者想在独立线程中实现帧率控制的Native侧业务，可以通过DisplaySoloist来实现，如游戏、自绘制UI框架对接等场景。

开发者可以选择多个DisplaySoloist实例共享一个线程，也可以选择每个DisplaySoloist实例独占一个线程。

## 接口说明

| 函数名称 | 说明 |
| --- | --- |
| OH\_DisplaySoloist\* OH\_DisplaySoloist\_Create (bool useExclusiveThread) | 创建一个OH\_DisplaySoloist实例。 |
| OH\_DisplaySoloist\_Destroy (OH\_DisplaySoloist \* displaySoloist) | 销毁一个OH\_DisplaySoloist实例。 |
| OH\_DisplaySoloist\_Start (OH\_DisplaySoloist \* displaySoloist, OH\_DisplaySoloist\_FrameCallback callback, void \* data ) | 设置每帧回调函数，每次VSync信号到来时启动每帧回调。 |
| OH\_DisplaySoloist\_Stop (OH\_DisplaySoloist \* displaySoloist) | 停止请求下一次VSync信号，并停止调用回调函数callback。 |
| OH\_DisplaySoloist\_SetExpectedFrameRateRange (OH\_DisplaySoloist\* displaySoloist, DisplaySoloist\_ExpectedRateRange\* range) | 设置期望帧率范围。 |

详细的接口说明请参考[NativeDisplaySoloist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativedisplaysoloist)。

## 开发示例

本范例是通过Drawing在Native侧实现图形的绘制，通过异步线程设置期望的帧率，再根据帧率进行图形的绘制并将其呈现在NativeWindow上，图形绘制部分可参考[使用Drawing实现图形绘制与显示](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphic-drawing-overview)。

### 添加开发依赖

**添加动态链接库**

CMakeLists.txt中添加以下lib。

```
target_link_libraries(entry PUBLIC libace_napi.z.so libnative_drawing.so libnative_window.so libace_ndk.z.so libnative_display_soloist.so)
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/cpp/CMakeLists.txt#L23-L25" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CMakeLists.txt</a></div>


**头文件**

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


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/cpp/samples/sample_xcomponent.h#L17-L33" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.h</a></div>


```
#include <native_display_soloist/native_display_soloist.h>
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/cpp/samples/sample_xcomponent.cpp#L18-L20" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.cpp</a></div>


### 开发步骤

1. 定义ArkTS接口文件XComponentContext.ts，用来对接Native层。

   ```
   export default interface XComponentContext {
     register(): void;

     unregister(): void;

     destroy(): void;
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/ets/interface/XComponentContext.ts#L15-L23" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：XComponentContext.ts</a></div>

2. 定义演示页面，包含两个XComponent组件。

   ```
   import XComponentContext from '../interface/XComponentContext';
   // ...

   @Entry
   @Component
   struct Index {
     private xComponentContext1: XComponentContext | undefined = undefined;
     private xComponentContext2: XComponentContext | undefined = undefined;

     // ...

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

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/ets/pages/Index.ets#L15-L144" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

3. 在 Native C++层获取NativeXComponent。建议使用单例模式保存XComponent。此步骤需要在napi\_init的过程中处理。

   创建一个PluginManager单例类，用于管理NativeXComponent。

   ```
   class PluginManager {
   public:
       ~PluginManager();

       static PluginManager *GetInstance();

       void SetNativeXComponent(std::string &id, OH_NativeXComponent *nativeXComponent);
       SampleXComponent *GetRender(std::string &id);
       void Export(napi_env env, napi_value exports);

   private:
       std::unordered_map<std::string, OH_NativeXComponent *> nativeXComponentMap_;
       std::unordered_map<std::string, SampleXComponent *> pluginRenderMap_;
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/cpp/plugin/plugin_manager.h#L25-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：plugin_manager.h</a></div>


   SampleXComponent类会在后面的绘制图形中创建。

   ```
   void PluginManager::Export(napi_env env, napi_value exports)
   {
       nativeXComponentMap_.clear();
       pluginRenderMap_.clear();
       if ((env == nullptr) || (exports == nullptr)) {
           SAMPLE_LOGE("Export: env or exports is null");
           return;
       }

       napi_value exportInstance = nullptr;
       if (napi_get_named_property(env, exports, OH_NATIVE_XCOMPONENT_OBJ, &exportInstance) != napi_ok) {
           SAMPLE_LOGE("Export: napi_get_named_property fail");
           return;
       }

       OH_NativeXComponent *nativeXComponent = nullptr;
       if (napi_unwrap(env, exportInstance, reinterpret_cast<void **>(&nativeXComponent)) != napi_ok) {
           SAMPLE_LOGE("Export: napi_unwrap fail");
           return;
       }

       char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {'\0'};
       uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;
       if (OH_NativeXComponent_GetXComponentId(nativeXComponent, idStr, &idSize) != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {
           SAMPLE_LOGE("Export: OH_NativeXComponent_GetXComponentId fail");
           return;
       }

       std::string id(idStr);
       auto context = PluginManager::GetInstance();
       if ((context != nullptr) && (nativeXComponent != nullptr)) {
           context->SetNativeXComponent(id, nativeXComponent);
           auto render = context->GetRender(id);
           if (render != nullptr) {
               render->RegisterCallback(nativeXComponent);
               render->Export(env, exports);
           } else {
               SAMPLE_LOGE("render is nullptr");
           }
       }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/cpp/plugin/plugin_manager.cpp#L49-L91" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：plugin_manager.cpp</a></div>

4. Native层配置帧率和注册回调函数。

   定义每帧回调函数内容。

   ```
   static void TestCallback(long long timestamp, long long targetTimestamp, void *data)
   {
       // ...
       OH_NativeXComponent *component = nullptr;
       component = static_cast<OH_NativeXComponent *>(data);
       if (component == nullptr) {
           SAMPLE_LOGE("TestCallback: component is null");
           return;
       }

       char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {'\0'};
       uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;
       if (OH_NativeXComponent_GetXComponentId(component, idStr, &idSize) != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {
           SAMPLE_LOGE("TestCallback: Unable to get XComponent id");
           return;
       }

       std::string id(idStr);
       auto render = SampleXComponent::GetInstance(id);
       OHNativeWindow *nativeWindow = render->GetNativeWindow();
       uint64_t width;
       uint64_t height;

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

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/cpp/samples/sample_xcomponent.cpp#L74-L120" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.cpp</a></div>


   使用DisplaySoloist接口配置帧率和注册每帧回调函数。如果使用OH\_DisplaySoloist\_Create创建DisplaySoloist实例时传入的参数useExclusiveThread为true，则OH\_DisplaySoloist\_FrameCallback以独占线程方式执行，否则OH\_DisplaySoloist\_FrameCallback以共享线程方式执行。

   ![](./img/12465da5.png)

   * 实例在调用NapiRegister后，在不需要进行帧率控制时，应进行NapiUnregister操作，避免内存泄漏问题。
   * 在页面跳转时，应进行NapiUnregister和NapiDestroy操作，避免内存泄漏问题。

   ```
   static std::unordered_map<std::string, OH_DisplaySoloist *> g_displaySync;

   // ...

   void ExecuteDisplaySoloist(std::string id, DisplaySoloist_ExpectedRateRange range, bool useExclusiveThread,
                              OH_NativeXComponent *nativeXComponent)
   {
       OH_DisplaySoloist *nativeDisplaySoloist = nullptr;
       if (g_displaySync.find(id) == g_displaySync.end()) {
           g_displaySync[id] = OH_DisplaySoloist_Create(useExclusiveThread);
       }
       nativeDisplaySoloist = g_displaySync[id];
       OH_DisplaySoloist_SetExpectedFrameRateRange(nativeDisplaySoloist, &range);
       OH_DisplaySoloist_Start(nativeDisplaySoloist, TestCallback, nativeXComponent);
   }

   napi_value SampleXComponent::NapiRegister(napi_env env, napi_callback_info info)
   {
       // ...

       napi_value thisArg;
       if (napi_get_cb_info(env, info, nullptr, nullptr, &thisArg, nullptr) != napi_ok) {
           SAMPLE_LOGE("NapiRegister: napi_get_cb_info fail");
           return nullptr;
       }

       napi_value exportInstance;
       if (napi_get_named_property(env, thisArg, OH_NATIVE_XCOMPONENT_OBJ, &exportInstance) != napi_ok) {
           SAMPLE_LOGE("NapiRegister: napi_get_named_property fail");
           return nullptr;
       }

       OH_NativeXComponent *nativeXComponent = nullptr;
       if (napi_unwrap(env, exportInstance, reinterpret_cast<void **>(&nativeXComponent)) != napi_ok) {
           SAMPLE_LOGE("NapiRegister: napi_unwrap fail");
           return nullptr;
       }

       char idStr[OH_XCOMPONENT_ID_LEN_MAX + 1] = {'\0'};
       uint64_t idSize = OH_XCOMPONENT_ID_LEN_MAX + 1;
       if (OH_NativeXComponent_GetXComponentId(nativeXComponent, idStr, &idSize) != OH_NATIVEXCOMPONENT_RESULT_SUCCESS) {
           SAMPLE_LOGE("NapiRegister: Unable to get XComponent id");
           return nullptr;
       }
       SAMPLE_LOGI("RegisterID = %{public}s", idStr);
       std::string id(idStr);
       SampleXComponent *render = SampleXComponent().GetInstance(id);
       if (render != nullptr) {
           DisplaySoloist_ExpectedRateRange range;
           bool useExclusiveThread = false;
           if (id == "xcomponentId_30") {
               range = {30, 120, 30};
           }

           if (id == "xcomponentId_120") {
               range = {30, 120, 120};
           }
           ExecuteDisplaySoloist(id, range, useExclusiveThread, nativeXComponent);
       }
       return nullptr;
   }

   napi_value SampleXComponent::NapiUnregister(napi_env env, napi_callback_info info)
   {
       // ...
           OH_DisplaySoloist_Stop(g_displaySync[id]);
           // ...
   }

   napi_value SampleXComponent::NapiDestroy(napi_env env, napi_callback_info info)
   {
       // ...
           OH_DisplaySoloist_Destroy(g_displaySync[id]);
           g_displaySync.erase(id);
           // ...
   }

   // ...

   void SampleXComponent::Export(napi_env env, napi_value exports)
   {
       if ((env == nullptr) || (exports == nullptr)) {
           SAMPLE_LOGE("Export: env or exports is null");
           return;
       }
       napi_property_descriptor desc[] = {
           {"register", nullptr, SampleXComponent::NapiRegister, nullptr, nullptr, nullptr, napi_default, nullptr},
           {"unregister", nullptr, SampleXComponent::NapiUnregister, nullptr, nullptr, nullptr, napi_default, nullptr},
           {"destroy", nullptr, SampleXComponent::NapiDestroy, nullptr, nullptr, nullptr, napi_default, nullptr}};

       if (napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc) != napi_ok) {
           SAMPLE_LOGE("Export: napi_define_properties failed");
       }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/cpp/samples/sample_xcomponent.cpp#L25-L471" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sample_xcomponent.cpp</a></div>

5. TS层注册和取消注册每帧回调，销毁OH\_DisplaySoloist实例。

   ```
   aboutToDisappear(): void {
     // ...
     if (this.xComponentContext1) {
       this.xComponentContext1.unregister();
       this.xComponentContext1.destroy();
     }
     if (this.xComponentContext2) {
       this.xComponentContext2.unregister();
       this.xComponentContext2.destroy();
     }
   }

   // ...

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
       }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySoloist/entry/src/main/ets/pages/Index.ets#L30-L135" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
