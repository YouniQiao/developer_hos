---
format: md
title: "如何在C++调用从ArkTS传递过来的function"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-function-flow-runtime/faqs-ndk-26
upstream_id: FAQ/faqs-app-framework-development/faqs-ndk/faqs-function-flow-runtime/faqs-ndk-26
last_sync: 2026-06-07
sync_hash: 22cf29d6
---
1. 在index.d.ts文件中，提供ArkTS侧的接口方法。

   ```
   export const nativeCallArkTS: (a: object) => number;
   ```
2. 实现Native侧的NativeCallArkTS接口，具体代码如下：

   ```
   static napi_value NativeCallArkTS(napi_env env, napi_callback_info info)
   {
       size_t argc = 1;
       // Declare parameter array
       napi_value args[1] = {nullptr};

       // Retrieve the incoming parameters and sequentially place them into the parameter array
       napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);

       // Create an int as a parameter for ArkTS
       napi_value argv = nullptr;
       napi_create_int32(env, 2, &argv );

       // Call the incoming callback and return its result
       napi_value result = nullptr;
       napi_call_function(env, nullptr, args[0], 1, &argv, &result);
       return result;
   }
   ```
3. 在ArkTS侧，通过nativeModule.nativeCallArkTS()方法传入回调函数。

   ```
   // entry/src/main/ets/pages/Index.ets
   // Introduce native capabilities through import.
   import nativeModule from 'libentry.so'

   @Entry
   @Component
   struct Index {
     @State message: string = 'Test Node-API nativeCallArkTS result: ';
     build() {
       Row() {
         Column() {
           // Call the nativeCallArkTS method, corresponding to the Native NativeCallArkTS, and call the ArkTS function in Native.
           Text(this.message)
             .fontSize(50)
             .fontWeight(FontWeight.Bold)
             .onClick(() => {
               this.message += nativeModule.nativeCallArkTS((a: number)=> {
                 return a * 2;
               });
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

**参考链接**

[Native侧方法的实现](/docs/dev/ndk-dev/use-napi-process#native侧方法的实现)
