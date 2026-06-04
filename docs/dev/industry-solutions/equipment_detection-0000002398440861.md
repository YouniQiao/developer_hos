---
title: "媒体设备状态检查"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/equipment_detection-0000002398440861
---

## 场景介绍

媒体设备状态检查是教育类应用中的典型场景之一，如用户在英语口语考试开始前，检查摄像头、麦克风是否能正常使用。

本示例基于[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)、[AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder)、[相机预览](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preview)和[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)实现了摄像头预览、麦克风录音、音频播放功能。

## 效果预览

![](./img/0c84a8ee.png "点击放大")

## 实现思路

* 相机预览：
  1. 创建[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件为预览流提供Surface。
  2. 传入surfaceId创建预览流。
  3. 输出预览流完成相机预览。

  ```
  XComponent({
    type: XComponentType.SURFACE,
    controller: this.mXComponentController,
  })
    .onLoad(async () => {
      this.mXComponentController.setXComponentSurfaceRect({
        surfaceWidth: CommonConstants.RESOLUTION_WIGHT,
        surfaceHeight: CommonConstants.RESOLUTION_HEIGHT
      });
      let previewOutput: camera.PreviewOutput = await getPreviewOutput(this.cameraManager,
        this.mXComponentController.getXComponentSurfaceId()) as camera.PreviewOutput;
      await startPreviewOutput(this.cameraManager, previewOutput);
    });
  ```

* 音频录制与播放：
  1. 创建并初始化AVRecorder实例，配置音频录制参数开始录制，设置定时任务3秒后停止录制并获取音频文件。
  2. 创建并初始化AVPlayer实例，传入音频文件的地址开始播放。

  ```
  // 录音
  this.audioRecorderUtil.startRecordingProcess(this.uiContext);
  setTimeout(async () => {
    this.stopRecordingProcess();
  }, CommonConstants.TIME_RECORDING * 1000);

  // 播放
  new AVPlayUtil().playAudio(this.uiContext,await this.avPlayer);
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取麦克风权限：[ohos.permission.MICROPHONE](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionmicrophone)。
* 获取相机权限：[ohos.permission.CAMERA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissioncamera)。

## 工程目录

```
├──entry/src/main/ets               // 代码区
│  ├──constants
│  │  └──CommonConstants.ets        // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──DetectionBindSheet.ets     // 摄像头检查页
│  │  ├──ExamPage.ets               // 考试页
│  │  ├──MainPage.ets               // 主页
│  │  └──MicrophoneBindSheet.ets    // 麦克风检查页
│  └──utils
│     ├──AVPlayerUtil.ets           // 音乐播放工具类
│     ├──AVRecorderUtil.ets         // 麦克风录制工具类
│     ├──CameraUtil.ets             // 相机预览工具类
│     └──PermissionsView.ets        // 权限验证工具类
└──entry/src/main/resources         // 应用资源目录
```

## 参考文档

[Interface(AVPlayer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)

[Interface(AVRecorder)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder)

[相机预览(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-preview)

[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)

## 代码下载

[媒体设备状态检查示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260211165706.30056910153313355438036090321667%3A50001231000000%3A2800%3A2CD04FB3DAFCDF45DF2C0EF3AEF34E574C328BDF893B0BD4963621ECA29A9FA9.zip?needInitFileName=true)
