---
title: "使用AVScreenCapture实现窗口级录屏(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avscreencapture-for-file-with-window
format: md
---


从API version 10开始，开发者可通过AVScreenCapture模块的C API接口实现窗口/屏幕录制，采集麦克风和设备的音视频源数据。

本开发指导以指定窗口录制为例，介绍如何使用AVScreenCapture的C API实现精准窗口捕获。该方案聚焦特定窗口内容，避免全屏干扰，适用于教学演示、在线课程、会议记录及特定内容采集等场景。

* 方式一：录制某个指定窗口，需要设置指定窗口ID。该场景下，启动录屏后，会弹出共享内容选择对话框。详细的API声明请参考[OH\_CaptureMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_capturemode)中的OH\_CAPTURE\_SPECIFIED\_WINDOW模式。
* 方式二（推荐）：使用系统Picker列表弹窗，选择期望录制的窗口。使用[OH\_AVScreenCapture\_StrategyForPickerPopUp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h#oh_avscreencapture_strategyforpickerpopup)设置是否弹出屏幕捕获Picker。从API version 20开始，支持在PC/2in1设备上设置弹出屏幕捕获Picker；从API version 23开始，支持在Phone/Tablet设备上设置弹出屏幕捕获Picker。

## 申请权限

在开发此功能前，开发者应根据实际需求申请相关权限：

* 如果配置了采集麦克风音频数据，需[向用户申请授权](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization)配置麦克风权限**ohos.permission.MICROPHONE**和申请[长时任务(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/continuous-task)。
* 从API version 22开始，在PC/2in1设备上对应用进行录屏时，可通过申请权限**ohos.permission.TIMEOUT\_SCREENOFF\_DISABLE\_LOCK**，实现在屏幕熄灭但不锁屏的场景下，继续保持录制的效果。配置方式请参见[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。
* 从API version 22开始，在PC/2in1设备上对应用进行录屏时，可通过申请权限**ohos.permission.CUSTOM\_SCREEN\_RECORDING**，实现在录制屏幕时不再弹出隐私警告弹窗。配置方式请参见[受限开放权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions)。

## 开发步骤及注意事项

**在CMake脚本中链接动态库**

```
target_link_libraries(entry PUBLIC libnative_avscreen_capture.so)
```

1. 添加头文件。

   ```
   #include "napi/native_api.h"
   #include <multimedia/player_framework/native_avscreen_capture.h>
   #include <multimedia/player_framework/native_avscreen_capture_base.h>
   #include <multimedia/player_framework/native_avbuffer.h>
   #include <multimedia/player_framework/native_avscreen_capture_errors.h>
   #include "hilog/log.h"
   #include <unistd.h>
   #include <fcntl.h>
   #include <string>
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/ScreenCapture/ScreenCaptureSample/entry/src/main/cpp/main.h#L19-L29" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：main.h</a></div>

2. 调用[OH\_AVScreenCapture\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h#oh_avscreencapture_create)方法创建AVScreenCapture实例capture。

   ```
   g_avCapture = OH_AVScreenCapture_Create();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/ScreenCapture/ScreenCaptureSample/entry/src/main/cpp/napi_init.cpp#L472-L474" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

3. 调用[OH\_AVScreenCapture\_Init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h#oh_avscreencapture_init)方法配置屏幕录制参数。

   创建AVScreenCapture实例capture后，可以设置屏幕录制所需要的参数。

   ```
   void SetConfig(OH_AVScreenCaptureConfig &config)
   {
       OH_AudioCaptureInfo micCapInfo = {
           .audioSampleRate = 48000,
           .audioChannels = 2,
           .audioSource = OH_MIC
       };

       OH_AudioCaptureInfo innerCapInfo = {
           .audioSampleRate = 48000,
           .audioChannels = 2,
           .audioSource = OH_ALL_PLAYBACK
       };

       OH_AudioEncInfo audioEncInfo = {
           .audioBitrate = 48000,
           .audioCodecformat = OH_AAC_LC
       };

       OH_VideoCaptureInfo videoCapInfo = {
           .videoFrameWidth = 720,
           .videoFrameHeight = 1280,
           .videoSource = OH_VIDEO_SOURCE_SURFACE_RGBA
       };

       OH_VideoEncInfo videoEncInfo = {
           .videoCodec = OH_H264,
           .videoBitrate = 2000000,
           .videoFrameRate = 30
       };

       OH_AudioInfo audioInfo = {
           .micCapInfo = micCapInfo,
           .innerCapInfo = innerCapInfo,
           .audioEncInfo = audioEncInfo
       };

       OH_VideoInfo videoInfo = {
           .videoCapInfo = videoCapInfo,
           .videoEncInfo = videoEncInfo
       };

       config = {
           .captureMode = OH_CAPTURE_HOME_SCREEN,
           .dataType = OH_ORIGINAL_STREAM, // 录屏数据类型，原始码流或文件
           .audioInfo = audioInfo,
           .videoInfo = videoInfo
       };
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/ScreenCapture/ScreenCaptureSample/entry/src/main/cpp/napi_init.cpp#L63-L113" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>


   方式一：需传入期望录制的窗口ID进行录屏。

   ```
   // 如果期望录制单个窗口，需传入单个窗口ID；如果期望同时录制多个窗口，需传入期望录制的窗口ID列表。
   std::vector<int32_t> missionIds = {88}; // 指定录制的窗口ID。
   config.videoInfo.videoCapInfo.missionIDs = missionIds.data();
   config.videoInfo.videoCapInfo.missionIDsLen = static_cast<int32_t>(missionIds.size());
   config.captureMode = OH_CAPTURE_SPECIFIED_WINDOW; // 设置录屏模式为录制指定窗口。

   // 设置为false，代表录屏启动后不弹出系统Picker，弹出隐私提示弹窗。
   OH_AVScreenCapture_CaptureStrategy* strategy = OH_AVScreenCapture_CreateCaptureStrategy();
   OH_AVScreenCapture_StrategyForPickerPopUp(strategy, false);
   OH_AVScreenCapture_SetCaptureStrategy(capture, strategy);
   ```

   方式二（推荐）：通过弹出屏幕捕获Picker列表方式，选择已打开的应用窗口进行窗口级录屏。

   ```
   // 通过弹出屏幕捕获Picker列表方式，选择已打开的应用窗口进行窗口级录屏。
   OH_AVScreenCapture_CaptureStrategy *strategy = OH_AVScreenCapture_CreateCaptureStrategy();
   OH_AVScreenCapture_StrategyForPickerPopUp(strategy, true);
   OH_AVScreenCapture_SetCaptureStrategy(g_avCapture, strategy);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/ScreenCapture/ScreenCaptureSample/entry/src/main/cpp/napi_init.cpp#L495-L500" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

4. 调用[OH\_AVScreenCapture\_StartScreenRecording](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h#oh_avscreencapture_startscreenrecording)方法开始进行窗口级录制。

   ```
   result = OH_AVScreenCapture_StartScreenRecording(g_avCapture);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/ScreenCapture/ScreenCaptureSample/entry/src/main/cpp/napi_init.cpp#L511-L513" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

5. 调用[OH\_AVScreenCapture\_StopScreenRecording](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h#oh_avscreencapture_stopscreenrecording)方法停止录制。

   ```
   result = OH_AVScreenCapture_StopScreenRecording(g_avCapture);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/ScreenCapture/ScreenCaptureSample/entry/src/main/cpp/napi_init.cpp#L551-L553" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

6. 调用[OH\_AVScreenCapture\_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h#oh_avscreencapture_release)方法销毁实例，释放资源。

   ```
   OH_AVScreenCapture_Release(g_avCapture);
   g_avCapture = nullptr;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/ScreenCapture/ScreenCaptureSample/entry/src/main/cpp/napi_init.cpp#L516-L519" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>
