---
displayed_sidebar: appDevSidebar
title: "元数据(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-metadata
---

元数据（Metadata）是对相机返回的图像信息的描述和上下文。针对图像信息，提供更详细的数据，如照片或视频中，识别人像的取景框坐标等信息。

Metadata主要是通过一个TAG（Key），去找对应的Data（Value），用于传递参数和配置信息，减少内存拷贝操作。

## 开发步骤

详细的API说明请参考[OH\_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)。

1. 导入NDK接口，导入方法如下。

   ```
   #include <cstdint>
   #include <native_buffer/buffer_common.h>
   #include <unistd.h>
   #include <string>
   #include <thread>
   #include <cstdio>
   #include <fcntl.h>
   #include <map>
   #include <string>
   #include <vector>
   #include <native_buffer/native_buffer.h>
   #include "iostream"
   #include "mutex"

   #include "hilog/log.h"
   #include "ohcamera/camera.h"
   #include "ohcamera/camera_input.h"
   #include "ohcamera/capture_session.h"
   #include "ohcamera/photo_output.h"
   #include "ohcamera/preview_output.h"
   #include "ohcamera/video_output.h"
   #include "napi/native_api.h"
   #include "ohcamera/camera_manager.h"
   #include <window_manager/oh_display_info.h>
   #include <window_manager/oh_display_manager.h>

   namespace OHOS_CAMERA_SAMPLE {
   class NDKCamera {
     public:
       struct CameraBuildingConfig {
           char *str;
           uint32_t focusMode;
           uint32_t cameraDeviceIndex;
           bool isVideo;
           bool isHdr;
           char *videoId;
       };
       ~NDKCamera();
       explicit NDKCamera(CameraBuildingConfig config);
       // ...
   };
   } // namespace OHOS_CAMERA_SAMPLE
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.h#L18-L196" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：camera_manager.h</a></div>

2. 在CMake脚本中链接相关动态库。

   ```
   target_link_libraries(entry PUBLIC
       libace_napi.z.so
       libohcamera.so
       libhilog_ndk.z.so
   )
   ```
3. 调用OH\_CameraManager\_GetSupportedCameraOutputCapability()方法，获取当前设备支持的元数据类型metaDataObjectType，并通过OH\_CameraManager\_CreateMetadataOutput()方法创建元数据输出流。

   ```
   Camera_ErrorCode NDKCamera::CreateMetadataOutput(void)
   {
       metaDataObjectType_ = cameraOutputCapability_->supportedMetadataObjectTypes[0];
       if (metaDataObjectType_ == nullptr) {
           OH_LOG_ERROR(LOG_APP, "Get metaDataObjectType failed.");
           return CAMERA_INVALID_ARGUMENT;
       }
       ret_ = OH_CameraManager_CreateMetadataOutput(cameraManager_, metaDataObjectType_, &metadataOutput_);
       if (metadataOutput_ == nullptr || ret_ != CAMERA_OK) {
           OH_LOG_ERROR(LOG_APP, "CreateMetadataOutput failed.");
           return CAMERA_INVALID_ARGUMENT;
       }
       MetadataOutputRegisterCallback();
       return ret_;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L544-L560" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：camera_manager.cpp</a></div>

4. 调用[OH\_CameraManager\_CreateCaptureSession()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-manager-h#oh_cameramanager_createcapturesession)方法创建一个会话。

   ```
   ret = OH_CameraManager_CreateCaptureSession(cameraManager_, &captureSession_);
   if (captureSession_ == nullptr || ret != CAMERA_OK) {
       OH_LOG_ERROR(LOG_APP, "Create captureSession failed.");
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L71-L76" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：camera_manager.cpp</a></div>

5. 配置session，完成后通过调用[OH\_CaptureSession\_Start()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-capture-session-h#oh_capturesession_start)方法输出metadata数据。接口调用失败会返回相应错误码，错误码类型参见[Camera\_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode)。

   ```
   // 开始配置会话。
   Camera_ErrorCode ret = OH_CaptureSession_BeginConfig(captureSession_);

   // 将相机输入流加入会话。
   ret = OH_CaptureSession_AddInput(captureSession_, cameraInput_);

   // 将相机预览流加入会话。
   ret = OH_CaptureSession_AddPreviewOutput(captureSession_, previewOutput_);

   if (isVideo_) {
       // 将相机录像流加入会话。
       AddVideoOutput();
       if (isHdrVideo) {
           // HDR Vivid视频需要设置色彩空间为OH_COLORSPACE_BT2020_HLG_LIMIT。
           OH_NativeBuffer_ColorSpace colorSpace = OH_NativeBuffer_ColorSpace::OH_COLORSPACE_BT2020_HLG_LIMIT;
           SetColorSpace(colorSpace);
       }
   } else {
       // 将相机拍照流加入会话。
       AddPhotoOutput();
       ret = CreateMetadataOutput();
       ret = OH_CaptureSession_AddMetadataOutput(captureSession_, metadataOutput_);
       OH_NativeBuffer_ColorSpace colorSpace = OH_NativeBuffer_ColorSpace::OH_COLORSPACE_P3_FULL;
       SetColorSpace(colorSpace);
   }

   // 提交会话配置信息。
   ret = OH_CaptureSession_CommitConfig(captureSession_);
   // ...

   InitPreviewRotation();
   // 开始会话。
   OH_LOG_INFO(LOG_APP, "session start");
   ret = OH_CaptureSession_Start(captureSession_);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L263-L311" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：camera_manager.cpp</a></div>

6. 调用stop()方法停止输出metadata数据，接口调用失败会返回相应错误码。

   ```
   Camera_ErrorCode StopMetadataOutput(Camera_MetadataOutput* metadataOutput)
   {
       Camera_ErrorCode ret = OH_MetadataOutput_Stop(metadataOutput);
       if (ret != CAMERA_OK) {
           OH_LOG_ERROR(LOG_APP, "OH_MetadataOutput_Stop failed.");
       }
       return ret;
   }
   ```

## 状态监听

在相机应用开发过程中，可以随时监听metadata数据以及输出流的状态。

* 通过注册监听获取metadata对象，监听事件固定为metadataObjectsAvailable。检测到有效metadata数据时，callback返回相应的metadata数据信息，metadataOutput创建成功时可监听。

  ```
  void OnMetadataObjectAvailable(Camera_MetadataOutput *metadataOutput, Camera_MetadataObject *metadataObject,
      uint32_t size)
  {
      OH_LOG_INFO(LOG_APP, "size = %{public}d", size);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L1264-L1270" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：camera_manager.cpp</a></div>


  ![](./img/89a5343f.png)

  当前的元数据类型仅支持人脸检测（FACE\_DETECTION）功能。元数据信息对象为识别到的人脸区域的矩形信息（Rect），包含矩形区域的左上角x坐标、y坐标和矩形的宽高数据。
* 通过注册回调函数，获取监听metadata流的错误结果，callback返回metadata输出接口使用错误时返回的错误码，错误码类型参见[Camera\_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_errorcode)。

  ```
  void OnMetadataOutputError(Camera_MetadataOutput *metadataOutput, Camera_ErrorCode errorCode)
  {
      OH_LOG_INFO(LOG_APP, "OnMetadataOutput errorCode = %{public}d", errorCode);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L1272-L1277" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：camera_manager.cpp</a></div>


  ```
  MetadataOutput_Callbacks *NDKCamera::GetMetadataOutputListener(void)
  {
      static MetadataOutput_Callbacks metadataOutputListener = {
          .onMetadataObjectAvailable = OnMetadataObjectAvailable,
          .onError = OnMetadataOutputError
      };
      return &metadataOutputListener;
  }

  Camera_ErrorCode NDKCamera::MetadataOutputRegisterCallback(void)
  {
      ret_ = OH_MetadataOutput_RegisterCallback(metadataOutput_, GetMetadataOutputListener());
      if (ret_ != CAMERA_OK) {
          OH_LOG_ERROR(LOG_APP, "OH_MetadataOutput_RegisterCallback failed.");
      }
      return ret_;
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L1279-L1297" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：camera_manager.cpp</a></div>
