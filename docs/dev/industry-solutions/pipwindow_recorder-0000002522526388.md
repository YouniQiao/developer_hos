---
title: "自定义相机退后台保持画中画录制"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/pipwindow_recorder-0000002522526388
---

## 场景介绍

自定义相机退后台继续录制是拍摄美化类应用的高频使用场景之一，如用户在录制视频时需要退到后台使用其他应用，希望继续保持录制状态。

本示例使用[CameraManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager)创建相机管理器类，基于[画中画窗口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pipwindow)实现相机退到后台时继续保持录制，当用户主动关闭画中画窗口时停止录像，并将视频保存到相册。

## 效果预览

![](./img/16fd61e6.png "点击放大")

## 实现思路

1. 创建画中画控制器，并开启状态监听。

   ```
   async createPipController() {
     try {
       this.pipController = await PiPWindow.create({
         context: this.context,
         componentController: this.mXComponentController,
         navigationId: this.navigationId,
         templateType: PiPWindow.PiPTemplateType.VIDEO_PLAY,
         controlGroups: [PiPWindow.VideoPlayControlGroup.VIDEO_PREVIOUS_NEXT]
       });

       this.pipController.setAutoStartEnabled(true);
       this.pipController.on('stateChange', (state: PiPWindow.PiPState, reason: string) => {
         this.onStateChange(state, reason);
       });
     } catch (e) {
       hilog.error(DOMAIN, TAG, `Failed to create pip controller. Cause:${e.code}, message:${e.message}`);
     }
   }
   ```
2. 在进入应用后启动视频录制，并开启画中画。

   ```
   async aboutToAppear() {
     try {
       abilityAccessCtrl.createAtManager().requestPermissionsFromUser(this.context, this.permissions).then(() => {
         setTimeout(async () => {
           videoRecording(false, cameraPosition, 0, surfaceId, this.context);
         }, 200);
         this.startPip();
       });
     } catch (error) {
       hilog.error(DOMAIN, TAG, `The updatePreview call failed. error: ${JSON.stringify(error)}`);
     }
   }
   ```
3. 当页面关闭时停止并销毁画中画控制器。

   ```
   aboutToDisappear(): void {
     this.stopPip();
     this.destroyPipController();
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取相机权限：[ohos.permission.CAMERA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissioncamera)。
* 获取麦克风权限：[ohos.permission.MICROPHONE](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionmicrophone)。
* 获取允许修改用户公共目录的图片或视频文件的权限：[ohos.permission.WRITE\_IMAGEVIDEO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionwrite_imagevideo)。
* 获取允许读取用户公共目录的图片或视频文件的权限：[ohos.permission.READ\_IMAGEVIDEO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_imagevideo)。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──constants                           // 公共能力区
│  │  └──CameraConstants.ets              // 相机常数
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──Index.ets                        // 主页面
│  ├──utils                               // 管理器类
│  │  └──CameraShooter.ets                // 相机工具类
│  │  └──GravityUtil.ets                  // 重力工具类
│  │  └──PreviewUtil.ets                  // 预览工具类
│  │  └──VideoRecorder.ets                // 视频录制工具类
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[Interface(CameraManager)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager)

[Interface(AVRecorder)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder)

[@ohos.PiPWindow（画中画窗口）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pipwindow)

## 代码下载

[自定义相机退后台保持画中画录制示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225100138.18209136251225943376722070259098%3A50001231000000%3A2800%3A3E7F5475F572E6C6CBB530045D45B7ACD1ACC8D6F644C1D9A160055F52B34277.zip?needInitFileName=true)
