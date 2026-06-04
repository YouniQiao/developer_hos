---
title: "图片添加油画滤镜和铅笔画滤镜"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/image_filter_processing-0000002520461010
---

## 场景介绍

图片添加油画滤镜和铅笔画滤镜是拍摄美化应用的高频使用场景之一，如用户照片进行美化时需要添加滤镜。

本示例通过对图片像素的算法处理，实现油画滤镜效果和铅笔画滤镜效果，再通过[@ohos.file.fs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)和[showAssetsCreationDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#showassetscreationdialog12)实现图片存储。

## 效果预览

![](./img/d64a97aa.png "点击放大")

## 实现思路

1. 通过[resourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager)和[ImageSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagesource)读取rawfile目录下的图片，转为pixelMap。
2. 通过对像素的处理算法实现滤镜效果。
3. 通过[showAssetsCreationDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#showassetscreationdialog12)保存图片至图库（相册）。

```
// 读取数据
this.pixelMap = getPixelMapFromRaw(this.context, 'fruitImg.png'); // fruitImg.png为测试图片，开发者需要在rawfile目录下替换为实际图片
// 在taskpool中，实现滤镜效果
@Concurrent
function imageFilterProcessing(imgInfo: ImageInfo, filterType: ImageFilterType) {
  let buffer: ArrayBuffer = new ArrayBuffer(4);
  if (filterType === ImageFilterType.OILPAINTING_FILTER) {
    buffer =
      pixelMapOilPaintingFilter(imgInfo.readBuffer, imgInfo.width, imgInfo.height, imgInfo.radius, imgInfo.tank);
  }

  if (filterType === ImageFilterType.PENCIL_SKETCH_FILTER) {
    buffer = imageProcessByPencilSketch(imgInfo.readBuffer, imgInfo.width, imgInfo.height, imgInfo.radius);
  }
  let imageInfo = new ImageInfo();
  imageInfo.readBuffer = buffer;
  imageInfo.width = imgInfo.width;
  imageInfo.height = imgInfo.height;
  imageInfo.radius = imgInfo.radius;
  return imageInfo;
}
// 保存图片至图库
Image($r('app.media.save_icon'))
  .enabled(this.isProcessEnd)
  .width(StyleConstants.HEIGHT_28)
  .height(StyleConstants.HEIGHT_28)
  .onClick(() => {
    savePixelMapToAlbum(this.pixelMapTemp as PixelMap, this.context);
  });
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──constants
│  │   └──StyleConstants.ets           // 样式
│  ├──entryability
│  │   └──EntryAbility.ets             // 入口
│  ├──entrybackupability
│  │   └──EntryBackupAbility.ets       // 应用备份恢复能力
│  ├──pages
│  │   └──MainPage.ets                 // 首页
│  ├──utils
│  │   ├──ImageUtil.ets                // 图片工具
│  │   ├──OilPaintingFilterUtil.ets    // 油画滤镜工具
│  │   └──PencilSketchFilterUtil.ets   // 铅笔画滤镜工具
│  └──viewModel
│      └──OptionViewModel.ets          // 滤镜类型枚举，图片信息类
└──entry/src/main/resources            // 应用资源目录
```

## 参考文档

[@ohos.resourceManager（资源管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager)

[@ohos.file.fs（文件管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)

[showAssetsCreationDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#showassetscreationdialog12)

[ImageSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagesource)

## 代码下载

[图片添加油画滤镜和铅笔画滤镜示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317191936.22583155221824165198260309204545%3A20260604154805%3A2800%3AFA234C22A396D675E6C3CD6760153608AD0611AE804713C236F9715FA7895E70.zip?needInitFileName=true)
