---
title: "车架号扫描识别"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/vehicle_frame_number_identification-0000002294949328
---

## 场景介绍

车架号扫描识别是实用工具类应用高频使用场景之一。车架号（Vehicle Identification Number，简称VIN）是一个由17位字符组成的编码，用于唯一标识每一辆汽车，该编码包含了车辆的制造信息、型号、特征等内容。

本示例基于[Camera Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-kit)实现自定义相机扫描能力，通过[通用文字识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-text-recognition)实现车架号扫描识别功能。

## 效果预览

![](./img/6607f610.gif "点击放大")

## 实现思路

1. 通过[Camera Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-kit)实现自定义相机能力，封装在service/CameraService.ets中。

   ```
   NavDestination() {
     // ...
   }
   .onShown(async () => {
     let xComponentSurfaceId = GlobalContext.get().getT<string>('xComponentSurfaceId')
     Logger.info(TAG, `onShown xComponentSurfaceId: ${xComponentSurfaceId}, isInit: ${isInit}`);
     // 相机功能初始化
     if (xComponentSurfaceId && !isInit) {
       isInit = true;
       await CameraService.initCamera(xComponentSurfaceId);
     }
   })
   ```
2. 在相机中使用双路预览的能力，一路作为相机画面展示，一路进行其他处理。

   ```
   // Create previewOutput output object
   this.previewOutput = this.createPreviewOutputFn(this.cameraManager, this.previewProfileObj, surfaceId);

   // Monitor preview events
   this.previewOutputCallBack(this.previewOutput);

   // Create imageReceiver output object
   this.imageReceiver = image.createImageReceiver(this.previewProfileObj.size, image.ImageFormat.JPEG, 8);

   // 获取第一路流SurfaceId
   let imageReceiverSurfaceId = await this.imageReceiver.getReceivingSurfaceId();
   this.imageReceiverOutput =
     this.createPreviewOutputFn(this.cameraManager, this.previewProfileObj, imageReceiverSurfaceId);
   ```
3. 在ImageReceiver的imageArrival事件中获取相机画面。

   ```
   receiver.on('imageArrival', () => {
     receiver.readNextImage(async (err, nextImage: image.Image) => {
       // 获取相机画面逻辑实现
     })
   })
   ```
4. 使用[Core Vision Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-introduction)的[通用文字识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-text-recognition)能力识别画面中的文字并做相应判断，根据接口返回的坐标点裁剪图片。

   ```
   textRecognition.recognizeText(visionInfo, textConfiguration)
     .then(async (data: textRecognition.TextRecognitionResult) => {
       // 识别文字和裁剪图片逻辑实现
     }).catch((error: BusinessError) => {
       // 错误处理
     });
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
│  ├──common
│  │  └──Constants.ets                  // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──VehicleInfo.ets                // 车架数据对象
│  ├──pages
│  │  ├──Index.ets                      // 首页、车架信息展示页
│  │  └──ScanPage.ets                   // 相机扫描页面
│  ├──service
│  │  └──CameraService.ets              // 相机初始化、打开手电筒等功能
│  └──utils
│     ├──GlobalContext.ets              // 全局上下文工具
│     └──Logger.ets                     // 日志工具
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Camera Kit（相机服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-kit)

[Core Vision Kit简介](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-introduction)

[通用文字识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-text-recognition)

## 代码下载

[车架号扫描识别示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101754.61797690791333477360541690199876%3A50001231000000%3A2800%3A5EE80C27D74DBA6DBFDDA8B10BC17B3286CE07BF67A780C67135D75A6EEC268E.zip?needInitFileName=true)
