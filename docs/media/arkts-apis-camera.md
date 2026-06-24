---
title: "模块描述"
upstream_id: "harmonyos-references/arkts-apis-camera"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:09.948187"
---

# 模块描述

本模块为开发者提供了一套简单易懂的相机服务接口。通过调用这些接口，开发者可以开发相机应用，访问和操作相机硬件，实现基础功能如预览、拍照和录像。此外，还可以通过接口组合完成更多操作，如控制闪光灯、曝光时间和对焦等。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块包含以下基础类：

- [AutoDeviceSwitch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-autodeviceswitch)类，用于查询设备是否支持自动切换镜头，使能或去使能自动切换镜头。
- [AutoExposure](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-autoexposure)类，针对设备的自动曝光特性提供了一系列查询功能，支持设置或查询当前曝光值、曝光区域中心点以及曝光补偿。
- [Aperture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-aperture)类，提供物理光圈相关功能的能力。
- [ApertureQuery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-aperturequery)类，提供物理光圈查询相关功能的能力。
- [CameraInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-camerainput)类，提供开关相机，以及监听输入流异常的能力。
- [CameraManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager)类，提供获取相机设备对象、创建输入/输出流以及会话Session、注册/解注册监听相机相关状态等能力。
- [ColorManagement](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-colormanagement)类，提供查询是否支持色彩空间，设置以及获取色彩空间参数的能力。
- [ControlCenter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-controlcenter)类，提供查询是否支持相机控制器，以及使能相机控制器的能力。
- [Flash](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-flash)类，提供查询是否支持闪光灯功能，以及具有对闪光灯设备操作的能力。
- [Focus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-focus)类，提供查询对焦模式在设备上是否支持的接口，以及设置对焦相关功能的能力。
- [Macro](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-macro)类，提供查询是否支持微距，以及使能微距的能力。
- [ManualExposure](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-manualexposure)类，提供手动曝光相关功能的能力。
- [ManualExposureQuery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-manualexposurequery)类，提供手动曝光查询相关功能的能力。
- [ManualFocusQuery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-manualfocusquery)类，提供手动对焦查询相关功能的能力。
- [ManualFocus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-manualfocus)类，提供手动对焦相关功能的能力。
- [ManualIso](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-manualiso)类，提供手动ISO相关功能的能力。
- [ManualIsoQuery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-manualisoquery)类，提供手动ISO查询相关功能的能力。
- [MetadataOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-metadataoutput)类，用于注册/解注册监听meta数据以及启动/停止meta流。
- [OIS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-ois)类，提供光学防抖（OIS）相关功能的能力。
- [OISQuery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-oisquery)类，提供光学防抖（OIS）查询相关功能的能力。
- [Photo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-photo)类，全质量图对象，包含一张图片的完整信息。
- [PhotoOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-photooutput)类，拍照会话中使用的输出信息，提供拍照相关的能力，如拍照、使能动态拍照和获取拍照旋转角度等。
- [PhotoSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-photosession)类，普通拍照模式会话类，提供了预配置以及会话状态监听相关的能力。
- [PreviewOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-previewoutput)类，提供对预览流帧率、预览旋转角度和查询当前配置信息的能力。
- [SecureSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-securesession)类，安全模式会话类，提供是否支持安全模式查询以及会话状态监听的相关能力。
- [Session](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-session)类，会话的基础类，提供了预览流启流到停流的一系列接口。
- [Stabilization](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-stabilization)类，提供查询设备是否支持防抖，以及获取/设置设备防抖类型的能力。
- [VideoOutput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-videooutput)类，提供启动/停止录制流，以及配置录制流帧率、镜像等能力。
- [VideoSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-videosession)类，普通录像模式会话类，提供了预配置以及监听会话状态相关的能力。
- [WhiteBalance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-whitebalance)类，提供检测是否支持白平衡模式以及设置白平衡相关参数的能力。
- [Zoom](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-zoom)类，提供查询是否支持变焦操作以及对设备进行变焦操作的能力。
- [其他](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-i)：相机设备的属性信息，包含视频配置项、拍照输出能力和手电筒等。
- [Enums](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-e)：相机相关的枚举及其含义。包含相机位置、闪光灯模式和平滑变焦模式等。

#### 导入模块

```
import { camera } from '@kit.CameraKit';
```
