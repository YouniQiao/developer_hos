---
title: "拍摄美化应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-photo-app-architecture-v1-0000002077325929
---

## 简介

本文档为摄影美化类的HarmonyOS应用的架构设计实践，提供常见的拍照、拼图、照片裁剪、图片精修等功能，帮助开发者快速构建一款摄影美化类应用。

* Stage模型+声明式UI开发范式。
* 按照应用设备形态，规划一个手机设备Entry类型HAP包。
* 本实践性能优先，应用程序包大小可控，且无单独加载模块场景，业务模块包类型采用HAR包。

## 应用布局

![](./img/2d258bfd.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 应用首页采用拍摄美化类APP常见页面宫格导航布局 * 首页宫格包含“拍照”、“图片精修”、“照片裁剪”、“拼图”、“会员尊享”、“我的”六个功能入口，分别对应六个功能模块（模块划分详见本实践软件视图）。 * 首页上部是Icon广告位介绍Banner轮播图。 | ![](./img/8dd92fb8.gif "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，常见拍照美化类应用功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分：

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 首页 | 我的、拍照、照片精修、照片裁剪、拼图、会员尊享 |
| 拍照 | 生态应用相机、水印 |
| 图片处理 | 滤镜、贴纸、裁剪照片（标准尺寸、自定义尺寸） |
| 拼图 | 按照拼图模板拼接图片 |
| 会员中心 | 会员中心VIP订阅 |
| 我的 | 账户登录、我的订单、设置（隐私政策、用户协议、关于版本信息）、投诉与建议等 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本应用只涉及手机端，设计为一个HAP，包含页面框架、导航、手机独有资源等。

基础特性层：将“拍照”、“图片处理”、“拼图”、“会员中心”、“我的” 等功能模块打包为Har包被上层产品组件引用。

公共能力层：将“读/写工具类”、“图片操作工具类”、“路由管理”等基础公共模块打包为HAR包被上层业务组件引用。

组件间依赖说明：上层组件可依赖下层，不建议跨层依赖、反向依赖、横向依赖。

**图1** 软件视图

![](./img/d900e246.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/60d5f995.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 生态应用相机技术方案

**功能设计**

基于HarmonyOS提供的相机开放能力，在无需申请相机权限下轻松实现系统相机级别的效果和能力，包括：

* 调节变焦、闪光灯等参数能力。
* 拍摄完成后预览照片能力。
* 拍摄的照片默认存入媒体库中。

页面路径：首页-拍照，如下图所示：

**图3** 生态应用相机功能

![](./img/f1d13e56.png "点击放大")

**方案设计**

使用[Camera Kit（相机服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-kit)实现访问和操作相机基础操作，如预览、拍照；以及如控制闪光灯和曝光时间、对焦或调焦等能力。

**代码参考**

代码详情参见[生态应用相机实现系统级相机体验](#section181718816244)。

### 照片添加水印技术方案

**功能设计**

常用的水印添加能力：提供保存图片时添加水印的能力。

页面路径：图片裁剪->保存，如下图所示：

**图4** 图片裁剪功能

![](./img/da396b82.png "点击放大")

**图5** 图片订单功能

![](./img/c4a79523.png "点击放大")

**方案设计**

使用[DrawingRenderingContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawingrenderingcontext)在[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)组件上进行绘制，创建一个新的绘制路径，设置水印的字体样式、旋转、位置，通过叠加绘制的方式给图片添加水印。

**代码参考**

代码详情参见[照片添加水印](#section19883121493213)。

### 图片编辑技术方案

**功能设计**

提供常用的图片编辑能力，包括：

* 在拼图场景下通过拖动图片的方式，可以轻松地调换照片的位置。
* 在照片裁剪场景下通过图片编辑，包含裁剪、旋转、色域调节等功能，实现照片裁剪功能。
* 通过绑定双指的捏合手势，实现图片的缩放操作。

页面路径：首页->拼图，如下图所示：

**图6** 拼图功能

![](./img/2751c486.png "点击放大")

**方案设计**

* 使用ArkUI（方舟UI框架）[拖拽事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop)实现对图片进行拖拽查看细节。以手势触屏的方式传递数据，实现拼图场景中的双向复制指定图片的能力。
* 使用ArkUI（方舟UI框架）[PinchGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pinchgesture)捏合手势实现图片的放大缩小。当捏合手势触发时，通过获取缩放比例，从而达成缩放比例修改。
* 使用ArkUI（方舟UI框架）[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)滑动手势实现图片的左右切换。当滑动手势触发时，通过获取滑动的速度和角度，从而达成布局参数的修改。
* 使用[Image Kit（图片处理服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-kit)的ImageSource将图片解码成统一的PixelMap，使用PixelMap完成图像变换和位图操作功能。其中图像变换包含裁剪、缩放、偏移、旋转、翻转等功能。

**代码参考**

代码详情参见[图片编辑](#section19492182973416)。

### 防截图技术方案

**功能设计**

在照片精修界面应用VIP功能时应避免截屏或录屏操作。

**方案设计**

使用ArkUI（方舟UI框架）窗口管理中调用[setWindowPrivacyMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowprivacymode9)设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。此接口需要申请ohos.permission.PRIVACY\_WINDOW权限。

**代码参考**

代码详情参见[防截图技术](#section1865371515362)。

### 滤镜技术方案

**功能设计**

在照片精修界面，通过图片滤镜功能，实现给照片添加滤镜的效果。

页面路径：首页->照片精修，如下图所示：

**图7** 照片精修功能

![](./img/1c0065fa.png "点击放大")

**方案设计**

使用ArkGraphics 2D（方舟2D图形服务）@ohos.effectKit（图像效果）中效果类（[Filter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-effectkit#filter)），将指定的效果添加到输入图像中，实现滤镜的能力。

**代码参考**

代码详情参见[滤镜技术](#section290764619370)。

## 应用框架代码

![](./img/a0719d8c.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

**框架代码中登录验证，只是UI演示。**

### 代码运行环境

软件要求

* DevEco Studio版本：DevEco Studio 6.0.0 Release及以上。
* HarmonyOS SDK版本：HarmonyOS 6.0.0 Release SDK及以上。

硬件要求

* 设备类型：华为手机。
* HarmonyOS系统：HarmonyOS 6.0.0 Release及以上。

环境搭建

* 安装DevEco Studio，详情请参考[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

历史工程迁移

开发者使用HarmonyOS 6.0.0 Release及以上版本导入代码，使用一体化的[历史工程迁移能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/ide-integrated-project-migration-V14)，帮助开发者快速完成工程转换。

### 代码结构解读

本篇代码非应用的全量代码，只包括脱敏后的应用框架代码，开发者可以通过链接下载全量的框架代码。

整个框架代码结构分为6个HAR包，所有的HAR在同一个IDE工程中维护开发。

**图8** features层集成的HAR列表
![](./img/6e7ed63a.png "点击放大")

```
├──common/base/src/main/ets                     // 公共文件
│  ├──constants                                 // 常量
│  │  ├──BreakpointConstants.ets
│  │  ├──CommonConstants.ets                    // 公共常量
│  │  ├──ImageConstants.ets                     // 图像处理相关常量
│  │  └──RouteMap.ets                           // 路由表枚举值
│  └──utils                                     // 工具类
│     ├──BreakpointType.ets
│     ├──ImageUtils.ets                         // 图像处理工具类
│     ├──JoinImages.ets                         // 拼图处理函数
│     └──Logger.ets                             // 日志工具类
├──entry/src/main/ets
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──Index.ets                              // 入口文件
└──feature
   ├──crop/src/main                             // 裁剪 滤镜
   │  ├──ets
   │  │  ├──components
   │  │  │  └──FilterItem.ets
   │  │  ├──utils
   │  │  │  └──FilterUtils.ets                  // 滤镜工具方法
   │  │  ├──view
   │  │  │  ├──CropPage.ets                     // 裁剪页、滤镜页
   │  │  │  └──OrderConfirmPage.ets             // 订单确认页
   │  │  └──viewmodel
   │  │     ├──CropSizeModel.ets
   │  │     └──FilterImageItem.ets
   │  └──mock
   │     ├──CropData.ets
   │     └──FiltersData.ets
   ├──home/src/main                             // 首页
   │  ├──ets/pages
   │  │  └──HomePage.ets
   │  ├──mock
   │  │  ├──BannerData.ets
   │  │  └──ModuleEntryData.ets
   │  ├──view/common
   │  │  ├──Banner.ets
   │  │  ├──ModuleEntry.ets
   │  │  └──Shoot.ets
   │  └──viewmodel
   │     ├──BannerItem.ets
   │     └──ModuleEntryItem.ets
   ├──Mine/src/main                             // 我的
   │  ├──ets
   │  │  ├──view
   │  │  │  ├──MinePage.ets
   │  │  │  └──OrderPage.ets
   │  │  └──viewmodel
   │  │     ├──ListItem.ets
   │  │     └──order.ets
   │  └──mock
   │     ├──ListData.ets
   │     └──OrderData.ets
   ├──Shoot/src/main/ets                        // 拍摄
   │  ├──constants
   │  │  └──CameraConstants.ets
   │  ├──utils
   │  │  ├──CameraShooter.ets
   │  │  └──PermissionsRequest.ets
   │  └──view
   │     └──ShootPage.ets
   ├──stitch/src/main                           // 拼图
   │  ├──ets
   │  │  ├──components
   │  │  │  └──DragListItem.ets
   │  │  ├──view
   │  │  │  └──StitchPage.ets
   │  │  └──viewmodel
   │  │     └──DragListItemModel.ets
   │  └──mock
   │     └──StitchData.ets
   └──vip/src/main/ets                          // 会员尊享
      ├──mock
      │  └──VipPurchaseData.ets
      ├──view
      │  └──VipPurchase.ets
      └──viewmodel
         └──VipPurchase.ets
```

### 生态应用相机实现系统级相机体验

```
// feature/Shoot/src/main/ets/utils/CameraShooter.ets
export async function cameraShooting(cameraPosition: number, surfaceId: string,
  context: Context): Promise<number[]> {
  currentContext = context;
  releaseCamera();
  let cameraManager: camera.CameraManager = camera.getCameraManager(context);
  if (!cameraManager) {
    return [];
  }

  // Obtaining the Camera List
  let cameraArray: camera.CameraDevice[] = cameraManager.getSupportedCameras();
  if (cameraArray.length <= 0) {
    return [];
  }
  cameraInput = cameraManager.createCameraInput(cameraArray[cameraPosition]);
  await cameraInput.open();
  let sceneModes: camera.SceneMode[] = cameraManager.getSupportedSceneModes(cameraArray[cameraPosition]);
  let cameraOutputCap: camera.CameraOutputCapability =
    cameraManager.getSupportedOutputCapability(cameraArray[cameraPosition], camera.SceneMode.NORMAL_PHOTO);
  let isSupportPhotoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_PHOTO) >= 0;
  if (!isSupportPhotoMode) {
    return [];
  }
  if (!cameraOutputCap) {
    return [];
  }

  let previewProfilesArray: camera.Profile[] = cameraOutputCap.previewProfiles;
  let photoProfilesArray: camera.Profile[] = cameraOutputCap.photoProfiles;
  let previewProfile: undefined | camera.Profile = previewProfilesArray.find((profile: camera.Profile) => {
    let screen = display.getDefaultDisplaySync();
    if (screen.width <= 1080) {
      return profile.size.height === 1080 && profile.size.width === 1440;
    } else if (screen.width <= 1440 && screen.width > 1080) {
      return profile.size.height === 1440 && profile.size.width === 1920;
    }
    return profile.size.height <= screen.width && profile.size.height >= 1080 &&
      (profile.size.width / profile.size.height) < (screen.height / screen.width);
  });
  let photoProfile: undefined | camera.Profile = photoProfilesArray.find((profile: camera.Profile) => {
    if (previewProfile) {
      return profile.size.width <= 4096 && profile.size.width >= 2448
    }
    return undefined;
  });
  previewOutput = cameraManager.createPreviewOutput(previewProfile, surfaceId);
  if (previewOutput === undefined) {
    return [];
  }
  photoOutPut = cameraManager.createPhotoOutput(photoProfile);
  if (photoOutPut === undefined) {
    return [];
  }
  // Save Picture
  setPhotoOutputCb(photoOutPut);

  photoSession = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO) as camera.PhotoSession;
  if (photoSession === undefined) {
    return [];
  }
  photoSession.beginConfig();
  photoSession.addInput(cameraInput);
  photoSession.addOutput(previewOutput);
  photoSession.addOutput(photoOutPut);
  await photoSession.commitConfig();
  await photoSession.start();
  // Check whether the device supports the flash
  let flashStatus: boolean = photoSession.hasFlash();
  if (flashStatus) {
    photoSession.setFlashMode(camera.FlashMode.FLASH_MODE_CLOSE);
  }
  // Determine whether the continuous automatic zoom mode is supported
  let focusModeStatus: boolean = photoSession.isFocusModeSupported(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);
  if (focusModeStatus) {
    // Set the continuous auto zoom mode
    photoSession.setFocusMode(camera.FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);
  }
  // Obtains the variable focal length ratio range supported by the camera
  let zoomRatioRange = photoSession.getZoomRatioRange();
  return zoomRatioRange;
}
```

### 照片添加水印

```
// feature/Crop/src/main/ets/view/CropPage.ets
setWaterMarkStyle() {
  this.waterMarkContext.beginPath();
  this.waterMarkContext.font = `宋体 ${100 / this.imageScale}px}`;
  this.waterMarkContext.textBaseline = 'top';
  this.waterMarkContext.fillStyle = '#80b2bec3';
  this.waterMarkContext.rotate(Math.PI / 180 * 30);
  this.waterMarkContext.fillText('xx相机专用水印\n保存图片后无水印', 100 / this.imageScale, 100 / this.imageScale);
  this.waterMarkContext.rotate(-Math.PI / 180 * 30);
  this.waterMarkContext.closePath();
}
```

### 图片编辑

读取小图的图像像素数据，写入PositionArea.pixels缓冲区中，再用writePixels将缓存区的像素数据写入大图的指定区域，这样就实现了拼图操作。

```
// common/base/src/main/ets/utils/JoinImages.ets
// 读取小图
const singlePixelMap = x === 0 ? pixelMap1 : pixelMap2;
singlePixelMap.readPixelsSync({
  pixels: singleColor,
  offset: 0,
  stride: singleWidth * 4,
  region: {
    size: { height: singleHeight, width: singleWidth },
    x: 0,
    y: 0
  }
});
// 写入大图
let area: image.PositionArea = {
  pixels: singleColor,
  offset: 0,
  stride: singleWidth * 4,
  region: {
    size: { height: singleHeight, width: singleWidth },
    x: isH ? x === 0 ? 0 : singleWidth1 : 0,
    y: isH ? 0 : x === 0 ? 0 : singleHeight1
  }
};
await newPixelMap.writePixels(area);
```

裁剪图片使用Image Kit（图片处理）的[crop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-image)方法，将需要裁剪的pixelMap对象，以及裁剪起始点、裁剪宽高传入函数即可实现裁剪功能。

```
// feature/Crop/src/main/ets/view/CropPage.ets
const cropWidth = Math.floor(this.imageHeight * 0.75);
const cropHeight = this.imageHeight;
await cropImage(this.pixelMap, Math.floor((this.imageWidth - cropWidth) / 2), 0, cropWidth, cropHeight);
this.imageWidth = cropWidth;
this.drawImage();
```

### 防截图技术

```
// feature/Crop/src/main/ets/view/CropPage.ets
window.getLastWindow(this.getUIContext().getHostContext()).then((windowStage: window.Window) => {
  windowStage.setWindowPrivacyMode(true);
});
```

### 滤镜技术

以粉色滤镜为例：

```
// feature/Crop/src/main/ets/utils/FilterUtils.ets
const pinkColorMatrix: Array<number> = [
  1, 1, 0, 0, 0,
  0, 1, 0, 0, 0,
  0, 0, 1, 0, 0,
  0, 0, 0, 1, 0
];
const pixelMapFiltered = await effectKit.createEffect(pixelMap).setColorMatrix(pinkColorMatrix).getEffectPixelMap();
```

## 代码下载链接

[拍摄美化类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170804.32556482792501508651257021386766%3A50001231000000%3A2800%3AE7AE71541A0A771660EAEEAF21A8B8E26CDC571A52BD547B6F254DE797E72F57.zip?needInitFileName=true)
