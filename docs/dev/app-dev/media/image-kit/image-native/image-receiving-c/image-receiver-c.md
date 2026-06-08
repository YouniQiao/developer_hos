---
displayed_sidebar: appDevSidebar
title: "使用Image_NativeModule完成图片接收"
original_url: /docs/dev/app-dev/media/image-kit/image-native/image-receiving-c/image-receiver-c
format: md
upstream_id: dev/app-dev/media/image-kit/image-native/image-receiving-c/image-receiver-c
last_sync: 2026-06-07
sync_hash: 904a0fa0
---
图像接收类，用于获取组件的surfaceId、接收最新的图片、读取下一张图片以及释放ImageReceiver实例。结合camera API实现的相机预览示例代码可参考[预览流二次处理(C/C++)](/docs/dev/app-dev/media/camera-kit/camera-dev-native/native-camera-preview-imagereceiver)。

![](./img/e6cd3e4e.png)

ImageReceiver只作为图片的接收方、消费者，在ImageReceiver设置的size、format等属性实际上并不会生效。图片属性需要在发送方、生产者进行设置，可参考[预览(C/C++)](/docs/dev/app-dev/media/camera-kit/camera-dev-native/native-camera-preview)设置previewProfiles。

## 开发步骤

### 添加依赖

在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target\_link\_libraries依赖中添加libohimage.so、libimage\_receiver.so、libnative\_image.so以及日志依赖libhilog\_ndk.z.so。

```
target_link_libraries(entry PUBLIC libhilog_ndk.z.so libohimage.so libimage_receiver.so libnative_image.so)
```

### Native接口调用

具体接口说明请参考[Image\_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)。

下述代码主要演示了Receiver的初始化、相机预览流的创建以及获取图像的信息和Receiver的释放等相关功能。

![](./img/b8bc259d.png)

部分接口在API version 20以后才支持，需要开发者在进行开发时选择合适的API版本。

1. 导入相关头文件。

   ```
   #include <hilog/log.h>
   #include "napi/native_api.h"
   #include <string>
   #include <multimedia/image_framework/image/image_native.h>
   #include <multimedia/image_framework/image/image_receiver_native.h>

   #include "ohcamera/camera.h"
   #include "ohcamera/camera_input.h"
   #include "ohcamera/capture_session.h"
   #include "ohcamera/photo_output.h"
   #include "ohcamera/preview_output.h"
   #include "ohcamera/video_output.h"
   #include "ohcamera/camera_manager.h"

   #include <mutex>
   #include <shared_mutex> // C++17以上使用
   #include <condition_variable>
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L15-L33" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

2. 常量定义。

   ```
   #undef LOG_DOMAIN
   #define LOG_DOMAIN 0x3200

   #undef LOG_TAG
   #define LOG_TAG "MY_TAG"

   #define IMAGE_WIDTH 320
   #define IMAGE_HEIGHT 480
   #define IMAGE_CAPACITY 2
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L35-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

3. 定义全局变量。

   ```
   static OH_ImageReceiverNative* g_receiver = nullptr;

   static std::mutex g_mutex;
   static std::shared_mutex shared_receiver_mutex;
   static std::condition_variable g_condVar;
   static bool g_imageReady = false;
   static OH_ImageNative* g_imageInfoResult = nullptr;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L47-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

4. 定义一些工具类函数，用来处理napi的返回值和参数类型的转换。

   ```
   // 处理napi返回值。
   napi_value GetJsResultDemo(napi_env env, int result)
   {
       napi_value resultNapi = nullptr;
       napi_create_int32(env, result, &resultNapi);
       return resultNapi;
   }

   // 将uint64_t转换为一个以null结尾的char数组。
   std::unique_ptr<char[]> ConvertUint64ToCharTemp(uint64_t value)
   {
       std::string strValue = std::to_string(value);
       auto charBuffer = std::make_unique<char[]>(strValue.size() + 1);
       std::copy(strValue.begin(), strValue.end(), charBuffer.get());
       charBuffer[strValue.size()] = '\0';

       return charBuffer;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L57-L76" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

5. 初始化Receiver。

   * 创建并设置ReceiverOptions。

     ```
     static Image_ErrorCode CreateAndConfigOptions(OH_ImageReceiverOptions** options)
     {
         Image_ErrorCode errCode = OH_ImageReceiverOptions_Create(options);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Create image receiver options failed, errCode: %{public}d.", errCode);
             return errCode;
         }
         Image_Size imgSize = {IMAGE_WIDTH, IMAGE_HEIGHT};
         errCode = OH_ImageReceiverOptions_SetSize(*options, imgSize);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Set image receiver options size failed, errCode: %{public}d.", errCode);
             OH_ImageReceiverOptions_Release(*options);
             return errCode;
         }
         errCode = OH_ImageReceiverOptions_SetCapacity(*options, IMAGE_CAPACITY);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Set image receiver options capacity failed, errCode: %{public}d.", errCode);
             OH_ImageReceiverOptions_Release(*options);
             return errCode;
         }
         return IMAGE_SUCCESS;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L79-L102" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 获取ReceiverOptions。

     ```
     static Image_ErrorCode ValidateOptions(OH_ImageReceiverOptions* options)
     {
         Image_Size imgSizeRead;
         Image_ErrorCode errCode = OH_ImageReceiverOptions_GetSize(options, &imgSizeRead);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Get image receiver options size failed, errCode: %{public}d.", errCode);
             return errCode;
         }
         if (imgSizeRead.width != IMAGE_WIDTH || imgSizeRead.height != IMAGE_HEIGHT) {
             OH_LOG_ERROR(LOG_APP, "Get image receiver options size failed,"
                          "width: %{public}d, height: %{public}d.", imgSizeRead.width, imgSizeRead.height);
             return IMAGE_BAD_PARAMETER;
         }
         int32_t capacity = 0;
         errCode = OH_ImageReceiverOptions_GetCapacity(options, &capacity);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Get image receiver options capacity failed, errCode: %{public}d.", errCode);
             return errCode;
         }
         if (capacity != IMAGE_CAPACITY) {
             OH_LOG_ERROR(LOG_APP, "Get image receiver options capacity failed, capacity: %{public}d.", capacity);
             return IMAGE_BAD_PARAMETER;
         }
         return IMAGE_SUCCESS;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L104-L130" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 创建Receiver对象。

     ```
     static Image_ErrorCode CreateReceiver(OH_ImageReceiverOptions* options, OH_ImageReceiverNative** receiver)
     {
         Image_ErrorCode errCode = OH_ImageReceiverNative_Create(options, receiver);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Create image receiver failed, errCode: %{public}d.", errCode);
             return errCode;
         }
         return IMAGE_SUCCESS;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L132-L142" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 定义获取下一张图片的callback函数。

     ```
     static void OnCallback(OH_ImageReceiverNative* receiver)
     {
         OH_LOG_INFO(LOG_APP, "ImageReceiverNativeCTest buffer available.");

         // 共享锁（读）
         std::shared_lock<std::shared_mutex> lock(shared_receiver_mutex);
         OH_ImageNative* image = nullptr;
         Image_ErrorCode errCode = OH_ImageReceiverNative_ReadNextImage(receiver, &image);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "ImageReceiverNativeCTest get image receiver next image failed,"
                          "errCode: %{public}d.", errCode);
             OH_ImageNative_Release(image);
             return;
         } else {
             std::lock_guard<std::mutex> lock(g_mutex);
             g_imageInfoResult = image;
             g_imageReady = true;
         }
         g_condVar.notify_one();
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L144-L165" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 注册callback。

     ```
     static Image_ErrorCode RegisterCallbackAndQuery(OH_ImageReceiverNative* receiver)
     {
         uint64_t surfaceID = 0;
         Image_ErrorCode errCode = OH_ImageReceiverNative_On(receiver, OnCallback);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Image receiver on failed, errCode: %{public}d.", errCode);
             return errCode;
         }
         errCode = OH_ImageReceiverNative_GetReceivingSurfaceId(receiver, &surfaceID);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Get image receiver surfaceID failed, errCode: %{public}d.", errCode);
             return errCode;
         }
         OH_LOG_INFO(LOG_APP, "Get image receiver surfaceID: %{public}lu.", surfaceID);
         Image_Size imgSizeRead;
         errCode = OH_ImageReceiverNative_GetSize(receiver, &imgSizeRead);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Get image receiver size failed, errCode: %{public}d.", errCode);
             return errCode;
         }
         OH_LOG_INFO(LOG_APP, "Get image receiver size: width = %{public}d, height = %{public}d.",
                     imgSizeRead.width, imgSizeRead.height);
         int32_t capacity = 0;
         errCode = OH_ImageReceiverNative_GetCapacity(receiver, &capacity);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Get image receiver capacity failed, errCode: %{public}d.", errCode);
             return errCode;
         }
         OH_LOG_INFO(LOG_APP, "Get image receiver capacity: %{public}d.", capacity);
         return IMAGE_SUCCESS;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L167-L199" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 初始化Receiver的整体流程。

     ```
     static napi_value ImageReceiverNativeCTest(napi_env env, napi_callback_info info)
     {
         if (g_receiver != nullptr) {
             OH_ImageReceiverNative_Off(g_receiver);
             OH_ImageReceiverNative_Release(g_receiver);
             g_receiver = nullptr;
         }

         OH_ImageReceiverOptions* options = nullptr;
         Image_ErrorCode errCode = CreateAndConfigOptions(&options);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "CreateAndConfigOptions failed errCode=%{public}d", errCode);
             return GetJsResultDemo(env, errCode);
         }
         errCode = ValidateOptions(options);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "ValidateOptions failed errCode=%{public}d", errCode);
             OH_ImageReceiverOptions_Release(options);
             return GetJsResultDemo(env, errCode);
         }
         errCode = CreateReceiver(options, &g_receiver);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "CreateReceiver failed errCode=%{public}d", errCode);
             OH_ImageReceiverOptions_Release(options);
             return GetJsResultDemo(env, errCode);
         }
         errCode = RegisterCallbackAndQuery(g_receiver);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "RegisterCallbackAndQuery failed errCode=%{public}d", errCode);
             OH_ImageReceiverOptions_Release(options);
             OH_ImageReceiverNative_Release(g_receiver);
             g_receiver = nullptr;
             return GetJsResultDemo(env, errCode);
         }
         OH_LOG_INFO(LOG_APP, "ImageReceiverNativeCTest create and config success.");
         OH_ImageReceiverOptions_Release(options);
         return GetJsResultDemo(env, IMAGE_SUCCESS);
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L201-L240" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

6. 调用相机拍照流进行拍照，触发回调。

   * 创建一个CameraManager实例。

     ```
     Camera_ErrorCode InitCameraManagerAndInput(Camera_Manager*& cameraManager,
                                                Camera_Device*& cameras,
                                                uint32_t& size,
                                                Camera_Input*& cameraInput)
     {
         cameraManager = nullptr;
         cameras = nullptr;
         size = 0;
         cameraInput = nullptr;
         Camera_ErrorCode ret = OH_Camera_GetCameraManager(&cameraManager);
         if (cameraManager == nullptr || ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_Camera_GetCameraManager failed.");
             return ret;
         }
         ret = OH_CameraManager_GetSupportedCameras(cameraManager, &cameras, &size);
         if (cameras == nullptr || size < 1 || ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CameraManager_GetSupportedCameras failed.");
             return ret;
         }

         for (uint32_t i = 0; i < size; ++i) {
             OH_LOG_INFO(LOG_APP, "Camera[%{public}u]: id=%{public}s, position=%{public}d, type=%{public}d, "
                 "connectionType=%{public}d", i, cameras[i].cameraId, cameras[i].cameraPosition, cameras[i].cameraType,
                 cameras[i].connectionType);
         }

         ret = OH_CameraManager_CreateCameraInput(cameraManager, &cameras[0], &cameraInput);
         if (cameraInput == nullptr || ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CameraManager_CreateCameraInput failed.ret:%{public}d", ret);
             return ret;
         }
         return CAMERA_OK;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L243-L277" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 获取相机输出能力。

     ```
     Camera_ErrorCode GetCameraOutputCapability(Camera_Manager* cameraManager,
                                                Camera_Device* cameras,
                                                uint32_t cameraDeviceIndex,
                                                Camera_OutputCapability*& capability)
     {
         capability = nullptr;
         Camera_ErrorCode ret = OH_CameraManager_GetSupportedCameraOutputCapability(cameraManager,
                                                                                    &cameras[cameraDeviceIndex],
                                                                                    &capability);
         if (capability == nullptr || ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CameraManager_GetSupportedCameraOutputCapability failed.");
         }
         return ret;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L279-L294" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 创建相机捕获会话，用于捕获相机拍摄的照片。

     ```
     Camera_CaptureSession* CreateAndStartSession(Camera_Manager* cameraManager, Camera_Input* cameraInput, int sessionMode)
     {
         Camera_CaptureSession* captureSession = nullptr;
         Camera_ErrorCode ret = OH_CameraManager_CreateCaptureSession(cameraManager, &captureSession);
         if (captureSession == nullptr || ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CameraManager_CreateCaptureSession failed.");
             return nullptr;
         }
         ret = OH_CaptureSession_SetSessionMode(captureSession, static_cast<Camera_SceneMode>(sessionMode));
         if (ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_SetSessionMode failed.");
             return nullptr;
         }
         ret = OH_CaptureSession_BeginConfig(captureSession);
         if (ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_BeginConfig failed.");
             return nullptr;
         }
         ret = OH_CaptureSession_AddInput(captureSession, cameraInput);
         if (ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_AddInput failed.");
             return nullptr;
         }
         return captureSession;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L296-L322" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 开启捕获会话。

     ```
     static Camera_ErrorCode StartCaptureSession(Camera_Manager* mgr, Camera_Input* input,
                                                 Camera_PreviewOutput* previewOutput,
                                                 Camera_CaptureSession** sessionOut)
     {
         *sessionOut = CreateAndStartSession(mgr, input, NORMAL_PHOTO);
         if (*sessionOut == nullptr) {
             OH_LOG_ERROR(LOG_APP, "CreateAndStartSession failed.");
             return CAMERA_INVALID_ARGUMENT;
         }

         Camera_ErrorCode ret = OH_CaptureSession_AddPreviewOutput(*sessionOut, previewOutput);
         if (ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_AddPreviewOutput failed.");
             return ret;
         }

         ret = OH_CaptureSession_CommitConfig(*sessionOut);
         if (ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_CommitConfig failed.");
             return ret;
         }

         ret = OH_CaptureSession_Start(*sessionOut);
         if (ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_Start failed.");
         }

         return ret;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L324-L354" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 创建相机拍照流。

     ```
     Camera_ErrorCode StartTakePhoto(char* str)
     {
         char* photoSurfaceId = str;
         Camera_Manager* cameraManager = nullptr;
         Camera_Device* cameras = nullptr;
         uint32_t size = 0;
         Camera_Input* cameraInput = nullptr;
         Camera_ErrorCode ret = InitCameraManagerAndInput(cameraManager, cameras, size, cameraInput);
         if (ret != CAMERA_OK) return ret;

         Camera_OutputCapability* cameraOutputCapability = nullptr;
         ret = GetCameraOutputCapability(cameraManager, cameras, 0, cameraOutputCapability);
         if (ret != CAMERA_OK) return ret;

         const Camera_Profile* photoProfile = cameraOutputCapability->previewProfiles[0];
         Camera_PreviewOutput* previewOutput = nullptr;
         ret = OH_CameraManager_CreatePreviewOutput(cameraManager, photoProfile, photoSurfaceId, &previewOutput);
         if (photoProfile == nullptr || previewOutput == nullptr || ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CameraManager_CreatePreviewOutput failed.");
             return ret;
         }

         ret = OH_CameraInput_Open(cameraInput);
         if (ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "OH_CameraInput_open failed.");
             return ret;
         }

         Camera_CaptureSession* captureSession = nullptr;
         ret = StartCaptureSession(cameraManager, cameraInput, previewOutput, &captureSession);
         if (ret != CAMERA_OK) {
             OH_LOG_ERROR(LOG_APP, "StartCaptureSession failed.");
             return ret;
         }

         return CAMERA_OK;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L356-L394" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 调用相机拍照的整体流程。

     ```
     static napi_value TakePhoto(napi_env env, napi_callback_info info)
     {
         if (g_receiver == nullptr) {
             OH_LOG_ERROR(LOG_APP, "ImageReceiver not initialized.");
             return GetJsResultDemo(env, IMAGE_BAD_PARAMETER);
         }
         uint64_t surfaceId = 0;
         Image_ErrorCode errCode = OH_ImageReceiverNative_GetReceivingSurfaceId(g_receiver, &surfaceId);
         if (errCode != IMAGE_SUCCESS) {
             OH_LOG_ERROR(LOG_APP, "Get surfaceId failed.");
             return GetJsResultDemo(env, errCode);
         }

         auto surfaceId_c = ConvertUint64ToCharTemp(surfaceId);
         Camera_ErrorCode photoRet = StartTakePhoto(surfaceId_c.get());
         return GetJsResultDemo(env, photoRet);
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L396-L414" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

7. 获取Receiver接收到的图片信息。

   * 等待OnCallback回调通知。

     ```
     // 同步等待。
     static OH_ImageNative* NotifyJsImageInfoSync()
     {
         std::unique_lock<std::mutex> lock(g_mutex);
         g_imageReady = false;
         g_imageInfoResult = nullptr;

         // 等待OnCallback回调通知。
         bool ret = g_condVar.wait_for(lock, std::chrono::seconds(1), [] {
             OH_LOG_INFO(LOG_APP, "NotifyJsImageInfoSync: wait_for wakeup, g_imageReady=%{public}d", g_imageReady);
             return g_imageReady;
         });
         if (!ret) {
             OH_LOG_ERROR(LOG_APP, "NotifyJsImageInfoSync: wait_for timeout.");
             return nullptr;
         }
         return g_imageInfoResult;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L417-L436" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 获取图片大小。

     ```
     // 获取图片大小。
     static napi_value GetImageSizeInfo(napi_env env, OH_ImageNative* image)
     {
         OH_LOG_INFO(LOG_APP, "GetImageSizeInfo: enter, image=%{public}p", image);

         Image_Size imgSizeRead;
         Image_ErrorCode errCode = OH_ImageNative_GetImageSize(image, &imgSizeRead);
         OH_LOG_INFO(LOG_APP, "GetImageSizeInfo: GetImageSize errCode=%{public}d, width=%{public}d, height=%{public}d",
                     errCode, imgSizeRead.width, imgSizeRead.height);

         if (errCode == IMAGE_SUCCESS) {
             napi_value resultObj;
             napi_create_object(env, &resultObj);

             napi_value width;
             napi_value height;
             napi_create_int32(env, imgSizeRead.width, &width);
             napi_create_int32(env, imgSizeRead.height, &height);

             napi_set_named_property(env, resultObj, "width", width);
             napi_set_named_property(env, resultObj, "height", height);

             OH_LOG_INFO(LOG_APP, "GetImageSizeInfo: exit");
             return resultObj;
         }

         OH_LOG_ERROR(LOG_APP, "GetImageSizeInfo: Failed to get image size");
         return nullptr;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L438-L468" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 获取组件类型。

     ```
     // 获取组件类型。
     static size_t GetComponentTypeSize(OH_ImageNative* image, size_t& componentTypeSize)
     {
         OH_LOG_INFO(LOG_APP, "GetComponentTypeSize: enter, image=%{public}p", image);
         // 获取组件类型的大小。
         Image_ErrorCode errCode = OH_ImageNative_GetComponentTypes(image, nullptr, &componentTypeSize);
         OH_LOG_INFO(LOG_APP, "GetComponentTypeSize: GetComponentTypes (query size) errCode=%{public}d,"
                     "componentTypeSize=%{public}zu", errCode, componentTypeSize);
         return componentTypeSize;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L470-L481" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 获取组件信息。

     ```
     // 获取组件信息。
     static napi_value GetComponentInfo(napi_env env, size_t componentTypeSize, OH_ImageNative* image, napi_value resultObj)
     {
         if (componentTypeSize > 0) {
             uint32_t* components = new uint32_t[componentTypeSize];
             Image_ErrorCode errCode = OH_ImageNative_GetComponentTypes(image, &components, &componentTypeSize);
             OH_LOG_INFO(LOG_APP, "GetImageInfoObject: GetComponentTypes (get types) errCode=%{public}d,"
                         "firstComponent=%{public}u", errCode, componentTypeSize > 0 ? components[0] : 0);
             if (errCode != IMAGE_SUCCESS) {
                 OH_LOG_ERROR(LOG_APP, "GetImageInfoObject: GetComponentTypes (get types) failed");
                 delete [] components;
                 return resultObj;
             }

             OH_NativeBuffer* nativeBuffer = nullptr;
             errCode = OH_ImageNative_GetByteBuffer(image, components[0], &nativeBuffer);
             if (errCode == IMAGE_SUCCESS) {
                 OH_LOG_INFO(LOG_APP, "Get native buffer success.");
             }

             size_t nativeBufferSize = 0;
             errCode = OH_ImageNative_GetBufferSize(image, components[0], &nativeBufferSize);
             OH_LOG_INFO(LOG_APP, "GetImageInfoObject: GetBufferSize errCode=%{public}d, nativeBufferSize=%{public}zu",
                         errCode, nativeBufferSize);
             if (errCode == IMAGE_SUCCESS) {
                 napi_value bufSize;
                 napi_create_int32(env, static_cast<int32_t>(nativeBufferSize), &bufSize);
                 napi_set_named_property(env, resultObj, "bufferSize", bufSize);
             }

             int32_t rowStride = 0;
             errCode = OH_ImageNative_GetRowStride(image, components[0], &rowStride);
             OH_LOG_INFO(LOG_APP, "GetImageInfoObject: GetRowStride errCode=%{public}d,"
                         "rowStride=%{public}d", errCode, rowStride);
             if (errCode == IMAGE_SUCCESS) {
                 napi_value jsRowStride;
                 napi_create_int32(env, rowStride, &jsRowStride);
                 napi_set_named_property(env, resultObj, "rowStride", jsRowStride);
             }

             int32_t pixelStride = 0;
             errCode = OH_ImageNative_GetPixelStride(image, components[0], &pixelStride);
             OH_LOG_INFO(LOG_APP, "GetImageInfoObject: GetPixelStride errCode=%{public}d, pixelStride=%{public}d",
                         errCode, pixelStride);
             if (errCode == IMAGE_SUCCESS) {
                 napi_value jsPixelStride;
                 napi_create_int32(env, pixelStride, &jsPixelStride);
                 napi_set_named_property(env, resultObj, "pixelStride", jsPixelStride);
             }
             delete [] components;
         }
         return resultObj;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L483-L537" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 获取图片属性并封装为napi对象。

     ```
     // 获取图像属性并封装为napi对象。
     static napi_value GetImageInfoObject(napi_env env, OH_ImageNative* image)
     {
         OH_LOG_INFO(LOG_APP, "GetImageInfoObject: enter, image=%{public}p", image);
         napi_value resultObj;
         napi_create_object(env, &resultObj);
         resultObj = GetImageSizeInfo(env, image);

         size_t componentTypeSize = 0;
         componentTypeSize = GetComponentTypeSize(image, componentTypeSize);
         if (componentTypeSize > 0) {
             resultObj = GetComponentInfo(env, componentTypeSize, image, resultObj);
         }

         int64_t timestamp = 0;
         Image_ErrorCode errCode = OH_ImageNative_GetTimestamp(image, &timestamp);
         OH_LOG_INFO(LOG_APP, "GetImageInfoObject: GetTimestamp errCode=%{public}d, timestamp=%{public}ld",
                     errCode, timestamp);
         if (errCode == IMAGE_SUCCESS) {
             napi_value jsTimestamp;
             napi_create_int64(env, timestamp, &jsTimestamp);
             napi_set_named_property(env, resultObj, "timestamp", jsTimestamp);
         }

         OH_LOG_INFO(LOG_APP, "GetImageInfoObject: exit");
         return resultObj;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L539-L567" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

   * 获取ReceiverImageInfo的整体流程。

     ```
     static napi_value GetReceiverImageInfo(napi_env env, napi_callback_info info)
     {
         OH_ImageNative* image = NotifyJsImageInfoSync();
         if (!image) {
             napi_value undefined;
             napi_get_undefined(env, &undefined);
             return undefined;
         }
         napi_value resultObj = GetImageInfoObject(env, image);
         OH_ImageNative_Release(image);
         return resultObj;
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L569-L582" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>

8. 释放receiver。

   ```
   static napi_value ReleaseImageReceiver(napi_env env, napi_callback_info info)
   {
       if (g_receiver == nullptr) {
           OH_LOG_INFO(LOG_APP, "No image receiver to release.");
           return nullptr;
       }

       Image_ErrorCode errCode = OH_ImageReceiverNative_Off(g_receiver);
       if (errCode != IMAGE_SUCCESS) {
           OH_LOG_ERROR(LOG_APP, "ImageReceiverNativeCTest image receiver off failed, errCode: %{public}d.", errCode);
       }

       // 独占锁（写）
       std::unique_lock<std::shared_mutex> lock(shared_receiver_mutex);
       errCode = OH_ImageReceiverNative_Release(g_receiver);
       if (errCode != IMAGE_SUCCESS) {
           OH_LOG_ERROR(LOG_APP, "Release image receiver failed, errCode: %{public}d.", errCode);
       }

       g_receiver = nullptr;
       return GetJsResultDemo(env, errCode);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageNativeSample/entry/src/main/cpp/loadReceiver.cpp#L585-L608" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：loadReceiver.cpp</a></div>
