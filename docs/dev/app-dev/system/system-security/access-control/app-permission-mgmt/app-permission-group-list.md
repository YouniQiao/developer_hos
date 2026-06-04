---
title: "应用权限组列表"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-group-list
---

## 使用须知

* 在申请目标权限前，建议开发者先阅读[应用权限管控概述-权限组和子权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#权限组和子权限)，了解相关概念，再合理申请对应的权限组。
* 应用请求权限时，同一权限组内的权限将在一个弹窗内请求用户授权。用户同意授权后，权限组内的权限将被统一授权。但位置信息、通讯录、日历权限组除外。

  以位置信息权限组和相机权限组为例说明。

  + 当应用只申请权限ohos.permission.APPROXIMATELY\_LOCATION（属于位置信息权限组）时，用户将收到一个请求位置信息的弹窗，包含单个权限的申请。
  + 当应用同时申请权限ohos.permission.APPROXIMATELY\_LOCATION和ohos.permission.LOCATION（均属于位置信息权限组）时，用户将收到一个请求位置信息的弹窗，包含两个权限的申请。
  + 当应用同时申请权限ohos.permission.APPROXIMATELY\_LOCATION（属于位置信息权限组）和ohos.permission.CAMERA（属于相机权限组）时，用户将收到请求位置信息、请求使用相机的两个弹窗。
* 当前系统支持的权限组如下所示。各子权限的含义请查阅[应用权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user)。

## 位置

* [ohos.permission.LOCATION\_IN\_BACKGROUND](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionlocation_in_background)
* [ohos.permission.LOCATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionlocation)
* [ohos.permission.APPROXIMATELY\_LOCATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionapproximately_location)

## 相机

* [ohos.permission.CAMERA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissioncamera)

## 麦克风

* [ohos.permission.MICROPHONE](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionmicrophone)

## 通讯录

* [ohos.permission.READ\_CONTACTS](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_contacts)
* [ohos.permission.WRITE\_CONTACTS](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionwrite_contacts)

## 日历

* [ohos.permission.READ\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionread_calendar)
* [ohos.permission.WRITE\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionwrite_calendar)
* [ohos.permission.READ\_WHOLE\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_whole_calendar)
* [ohos.permission.WRITE\_WHOLE\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionwrite_whole_calendar)

## 运动数据

![](./img/4cafb727.png)

由于2in1设备无相关传感器，此权限不支持在2in1设备上申请。

* [ohos.permission.ACTIVITY\_MOTION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionactivity_motion)

## 身体传感器

![](./img/3d9a8ba8.png)

仅穿戴设备可申请。

* [ohos.permission.READ\_HEALTH\_DATA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionread_health_data)

## 图片和视频

* [ohos.permission.WRITE\_IMAGEVIDEO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionwrite_imagevideo)
* [ohos.permission.READ\_IMAGEVIDEO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_imagevideo)
* [ohos.permission.MEDIA\_LOCATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionmedia_location)

![](./img/e0d0783c.png)

由于权限ohos.permission.READ\_IMAGEVIDEO和ohos.permission.MEDIA\_LOCATION均用于读取图片的场景，当同时申请两者时，系统（包括权限申请弹框和权限设置界面）将只展示READ\_IMAGEVIDEO的申请理由（reason字段）。

当同时申请两个权限时，建议在READ\_IMAGEVIDEO的reason字段中，同步说明获取MEDIA\_LOCATION权限后的使用场景。

## 音乐和音频

* [ohos.permission.WRITE\_AUDIO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionwrite_audio)
* [ohos.permission.READ\_AUDIO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_audio)

## 跨应用关联

![](./img/b64ba367.png)

在申请此权限时，是否弹窗向用户请求授权，取决于“要求应用请求关联”的开关状态。

* 如果开关关闭，当应用请求权限时，系统不会弹窗，默认授予应用权限。
* 如果开关开启，当应用请求权限时，系统将弹窗，需要用户确认才能授予应用权限。

“要求应用请求关联”的开关状态可在“设置 > 隐私与安全 > 跨应用关联”页面中查看。

* [ohos.permission.APP\_TRACKING\_CONSENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionapp_tracking_consent)

## 设备发现和连接

![](./img/2f6e5455.png)

从API 13开始，原有的“蓝牙”、“星闪”、“多设备协同”权限组不再使用，相关权限将通过“设备发现和连接”权限组统一授权和操作。

* [ohos.permission.ACCESS\_BLUETOOTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionaccess_bluetooth)
* [ohos.permission.ACCESS\_NEARLINK](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionaccess_nearlink)
* [ohos.permission.DISTRIBUTED\_DATASYNC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissiondistributed_datasync)

## 剪切板

* [ohos.permission.READ\_PASTEBOARD](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_pasteboard)

## 截屏

* [ohos.permission.CUSTOM\_SCREEN\_CAPTURE](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissioncustom_screen_capture)

## 文件夹

![](./img/aae5f12f.png)

仅2in1设备可申请。

* [ohos.permission.READ\_WRITE\_DOWNLOAD\_DIRECTORY](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionread_write_download_directory)
* [ohos.permission.READ\_WRITE\_DESKTOP\_DIRECTORY](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_write_desktop_directory)
* [ohos.permission.READ\_WRITE\_DOCUMENTS\_DIRECTORY](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionread_write_documents_directory)

## 文件(deprecated)

![](./img/a2658b7d.png)

从API 9开始，支持使用替代方案。

* ohos.permission.READ\_MEDIA
* ohos.permission.WRITE\_MEDIA

**替代方案：**

* 读写媒体库中的图片或视频。

  + 推荐方案（无需申请权限）：使用[Picker](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-photoviewpicker)读取媒体库的图片与视频。使用[保存控件/授权弹窗](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-savebutton)保存媒体库的图片与视频。
  + 受限使用方案：申请受限权限[ohos.permission.READ\_IMAGEVIDEO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_imagevideo)或[ohos.permission.WRITE\_IMAGEVIDEO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionwrite_imagevideo)以读取媒体库的图片与视频。
* 读写媒体库音频文件。

  申请受限权限[ohos.permission.READ\_AUDIO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_audio)或[ohos.permission.WRITE\_AUDIO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionwrite_audio)以读写媒体库的音频文件。
* 读取文件管理器中的文件。

  无需申请权限，通过文件Picker读写文件管理器中的文件。参考：[选择用户文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/select-user-file#选择文档类文件)、[保存用户文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/save-user-file#保存文档类文件)。
