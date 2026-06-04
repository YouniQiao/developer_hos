---
title: "Videocompressor实现视频压缩功能"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/video_compress_demo-0000002248722292
---

## 场景介绍

视频压缩处理是影音娱乐类应用中的典型场景之一，如上传、发送或保存视频时存在大小限制，需要对视频进行压缩，确保视频质量及大小满足用户需求。

本示例利用[videocompressor](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fvideocompressor)实现视频压缩功能，通过[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)和[PhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)实现从相册读取视频文件和保存压缩后的视频文件到相册的功能。

## 效果预览

![](./img/155bf8e1.webp "点击放大")

## 实现思路

1. 通过[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)对象方法从相册（图库）中选取视频文件，并展示原有视频内容及大小。
2. 选择压缩质量，传入CompressQuality、原视频文件uri参数，通过CompressUtil.compressVideo对视频进行压缩。
3. 压缩完成后，视频保存至沙箱，展示压缩后的视频内容及压缩后的大小。
4. 调用[PhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)对象方法将压缩后的视频保存至系统图库中。

```
// 从相册中选取视频，获取到视频文件的uri、预览图及大小
await photoPicker.select(photoSelectOptions)
// 选取一个压缩方案进行视频压缩
CompressUtil.compressVideo(this.uiContext.getHostContext() as Context, item.quality, item.qualityTag, this.videoPath)
  .then((res) => {
    if (res) {
      this.fileDir = res.compressPath;
      this.buffer = res.buffer;
      this.compressedSize = res.compressSize;
    }
  })
// 压缩完成后，压缩视频保存至沙箱，展示压缩后的视频内容以及大小
Video({ src: `file://${this.fileDir}`, currentProgressRate: 1, controller: this.videoController })
Text(this.compressSize)
// 点击保存并确认后，获取到授权的文件uri，将视频数据写入对应uri的文件中即可
let desFileUris = await accessHelper.showAssetsCreationDialog([uri], creationConfigs)
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──common
│  │  └──CommonConstant.ets             // 常量
│  ├──entryability
│  │  └──EntryAbility.ets               // 应用入口类
│  ├──model
│  │  └──DataModel.ets                  // 数据模型
│  ├──pages
│  │  └──CompressPage.ets               // 视频压缩页面
│  └──utils
│     ├──CommonUtil.ets                 // 通用工具函数
│     ├──CompressUtil.ets               // 视频压缩工具类
│     └──PictureUtils.ets               // 相册操作工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Class(PhotoViewPicker)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)

[Interface(PhotoAccessHelper)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)

[@ohos/videocompressor](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fvideocompressor)

## 代码下载

[Videocompressor实现视频压缩功能示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225095842.43635374995298168041093937252018%3A50001231000000%3A2800%3AB1C2B7D14ACD051E435A065268A53AD87B93E682042AA12A7EEA294D96D17BE6.zip?needInitFileName=true)
