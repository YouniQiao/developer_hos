---
title: "线上会议主副窗口切换"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/conference_window_change-0000002325708930
---

## 场景介绍

线上会议主副窗口切换是综合办公类应用的高频使用场景之一，如线上会议时，用户可将副窗中其他与会人的摄像头画面或投屏内容切换到主窗查看。

本示例基于[WindowStage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage)、[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)和[CameraManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager)实现开启视频和切换主副窗口内容的功能。

## 效果预览

![](./img/02bcc56f.gif "点击放大")

## 实现思路

1. 通过[windowStage.createSubWindow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage#createsubwindow9)创建ModeratorWindow和GuestWindow主副窗口。

   ```
   this.windowStage.createSubWindow(CommonConstants.MODERATOR_WINDOW, (err, subWindow) => {
     // 主窗口初始化
     this.windowStage.createSubWindow(CommonConstants.GUEST_WINDOW, (err, subWindow) => {
       // 副窗口初始化
     };
   };
   ```
2. 子窗口页面初始化时，初始化[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件并保存其surfaceId，用于后续展示相机预览流。

   ```
   // 初始化XComponent组件时获取到对应的surfaceId，后续的可见性变更不影响surfaceId
   this.xComponentSurfaceId = this.xComponentController.getXComponentSurfaceId();
   // 将主副窗口的surfaceId放入数组中管理，方便添加预览流
   this.surfaceIds.push(this.xComponentSurfaceId);
   // 获取surfaceId后将可见性设置为false
   this.videoVisible = false;
   ```
3. 点击开启视频，通过[CameraManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager)创建、开启相机流，并添加主副窗口的预览流。

   ```
   cameraManager.createCameraInput(cameraDevices[0]); // 创建相机输入对象
   cameraManager.createSession(camera.SceneMode.NORMAL_VIDEO) as camera.VideoSession; // 创建视频会话
   this.surfaceIds.forEach((surfaceId) => {
     // 创建预览流对象
     let preview = cameraManager.createPreviewOutput(xComponentPreviewProfile, surfaceId);
   });
   ```
4. 点击副窗口，交换主副窗口的与会人数据，并根据相机的持有者切换相机流数据到指定窗口展示。

   ```
   if (this.windowName === CommonConstants.MODERATOR_WINDOW) {
     this.attender = this.hostAttender;
   } else {
     this.attender = this.preAttender;
   }
   this.preAttender = this.hostAttender;
   if (this.attender.attenderId === MYSELF.attenderId && this.isCameraOpen) {
     this.videoVisible = true;
   } else {
     this.videoVisible = false;
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取相机使用权限：[ohos.permission.CAMERA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissioncamera)。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──component
│  │  └──WindowContentComponent.ets     // 窗口内容组件
│  ├──constants
│  │  └──CommonConstants.ets            // 通用常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──model
│  │  └──AttenderData.ets               // 与会者数据模型
│  ├──pages
│  │  ├──GuestPage.ets                  // 副窗口页面
│  │  ├──HomePage.ets                   // 首页
│  │  └──ModeratorPage.ets              // 主窗口页面
│  └──utils
│     ├──Logger.ets                     // 日志工具类
│     └──PermissionsUtils.ets           // 权限工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)

[Interface(CameraManager)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager)

[Interface(WindowStage)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage)

## 代码下载

[线上会议主副窗口切换示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164302.30747265106272198750158758149549%3A50001231000000%3A2800%3A3BD958C72804C08FC439F25EB45CE5566E03F4F9C16054061758E229C2735DC9.zip?needInitFileName=true)
