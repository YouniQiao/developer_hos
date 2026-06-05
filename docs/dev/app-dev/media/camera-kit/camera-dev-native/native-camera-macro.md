---
displayed_sidebar: appDevSidebar
title: "微距能力设置(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-macro
format: md
---


从API version 19开始，支持设置微距能力。微距能力是指通过光学设计与算法优化，实现近距离对焦并清晰捕捉微小物体细节的相机功能。

## 开发步骤

详细的API说明请参考[OH\_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)。

1. 导入NDK接口。选择系统提供的NDK接口能力，导入NDK接口的方法如下。

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

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.h#L18-L196" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：camera_manager.h</a></div>

2. 在CMake脚本中链接相关动态库。

   ```
   target_link_libraries(entry PUBLIC
       libace_napi.z.so
       libohcamera.so
       libhilog_ndk.z.so
   )
   ```
3. 通过[OH\_CaptureSession\_IsMacroSupported()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-capture-session-h#oh_capturesession_ismacrosupported)方法，检测当前设备是否支持微距能力。

   ```
   bool NDKCamera::IsMacroSupported(Camera_CaptureSession* captureSession)
   {
       // 判断设备是否支持微距能力。
       bool isMacroSupported = false;
       if (captureSession == nullptr) {
           OH_LOG_ERROR(LOG_APP, "IsMacroSupported: session is nullptr.");
           return isMacroSupported;
       }
       Camera_ErrorCode ret = OH_CaptureSession_IsMacroSupported(captureSession, &isMacroSupported);
       if (ret != CAMERA_OK) {
           OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_IsMacroSupported failed.");
       }
       if (isMacroSupported) {
           OH_LOG_INFO(LOG_APP, "support macro capability.");
       } else {
           OH_LOG_ERROR(LOG_APP, "No support macro capability.");
       }
       return isMacroSupported;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L870-L890" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：camera_manager.cpp</a></div>

4. 使用[OH\_CaptureSession\_EnableMacro()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-capture-session-h#oh_capturesession_enablemacro)方法开启或关闭微距能力。

   ```
   void NDKCamera::EnableMacro(bool isMacro)
   {
       OH_LOG_INFO(LOG_APP, "EnableMacro: isMacro is %{public}d", isMacro);
       if (IsMacroSupported(captureSession_)) {
           Camera_ErrorCode ret = OH_CaptureSession_EnableMacro(captureSession_, isMacro);
           if (ret != CAMERA_OK) {
               OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_EnableMacro failed.");
           }
       }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L892-L903" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：camera_manager.cpp</a></div>


## 状态监听

从API version 20开始，支持监听微距能力是否发生改变。

通过[OH\_CaptureSession\_RegisterMacroStatusChangeCallback()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-capture-session-h#oh_capturesession_registermacrostatuschangecallback)函数注册回调，返回监听结果。

```
void MacroStatusCallback(Camera_CaptureSession *captureSession, bool isMacroDetected)
{
    OH_LOG_INFO(LOG_APP, "MacroStatusCallback isMacro: %{public}d", isMacroDetected);
}

// 注册回调函数。
Camera_ErrorCode NDKCamera::RegisterMacroStatusCallback()
{
    Camera_ErrorCode ret = OH_CaptureSession_RegisterMacroStatusChangeCallback(captureSession_, MacroStatusCallback);
    if (ret != CAMERA_OK) {
        OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_RegisterMacroStatusChangeCallback failed.");
    }
    return ret;
}

// 解注册
Camera_ErrorCode NDKCamera::UnregisterMacroStatusCallback()
{
    Camera_ErrorCode ret = OH_CaptureSession_UnregisterMacroStatusChangeCallback(captureSession_, MacroStatusCallback);
    if (ret != CAMERA_OK) {
        OH_LOG_ERROR(LOG_APP, "OH_CaptureSession_UnregisterMacroStatusChangeCallback failed.");
    }
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/NDKPhotoVideoSample/entry/src/main/cpp/camera_manager.cpp#L1517-L1542" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：camera_manager.cpp</a></div>
