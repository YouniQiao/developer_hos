---
title: "视频编码转换"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/video_encoding_convert-0000002409157670
---

## 场景介绍

视频编码转换是拍摄美化类应用的高频使用场景之一，如用户需要转换视频编码格式以适配不同的播放设备。

本示例基于[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)、[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)和[@ohos/mp4parser](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmp4parser)实现从图库选择视频、播放视频以及转换视频编码格式的功能，支持转换格式：mp4、mkv、mov、avi、flv等。

## 效果预览

![](./img/11d8b767.png "点击放大")

## 实现思路

1. 通过[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)从图库中选择一个视频文件上传至应用沙箱。

   ```
   // 获取到选择的图库视频
   const RESULT = await photoPicker.select(photoSelectOptions);
   if (RESULT && RESULT.photoUris && RESULT.photoUris.length > 0) {
     let originFile: fs.File | undefined = undefined;
     let destFile: fs.File | undefined = undefined;
     try {
       selectVideoUri = RESULT.photoUris[0];
       originFile = fs.openSync(selectVideoUri, fs.OpenMode.READ_ONLY);
       let destFileDir = this.filesDir + originFile.name;
       destFile = fs.openSync(destFileDir, fs.OpenMode.CREATE | fs.OpenMode.READ_WRITE);
       // 将图库视频copy至沙箱保存
       fs.copyFileSync(originFile.fd, destFile.fd);
       let resultVideoFile =
         new VideoFile(originFile.name, destFileDir, CommonConstants.INITIAL_TIME, CommonConstants.INITIAL_FILE_SIZE,
           $r('app.media.ic_default_item_image'), 0);
       return resultVideoFile;
     } catch (err) {
       // 处理异常
       Logger.error(`file operate error: ${err.code} ${err.message}`);
     }
   }
   ```
2. 进入转码页，通过[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)加载并播放对应视频文件。

   ```
   NavDestination() {}
     .onReady((ctx: NavDestinationContext) => {
       if (ctx.pathInfo.param) {
         // 获取视频文件信息
         this.originVideo = ctx.pathInfo.param as VideoFile;
         // 构建并初始化AVPlayer
         this.createAVPlayer();
       }
     })
   ```
3. 选择转码格式，点击转换，通过[mp4parser](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmp4parser)执行FFmpeg命令转换视频文件的编码格式，并将转换结果输出至应用沙箱。

   ```
   if (this.targetCodec && this.originVideo) {
     // 构造转码后文件存储路径
     let destDir = ctx.filesDir + CommonConstants.FILE_PATH_SEPARATOR + fileName + CommonConstants.DOT_SPLIT_SYMBOL + this.targetCodec;
     // 构建命令内容
     let cmd = `ffmpeg -i "${this.originVideo.filePath}" -c:v ${bitCodec} -c:a aac -y "${destDir}"`;
     MP4Parser.ffmpegCmd(cmd, {
       callBackResult: (res) => {
         this.isConverting = false;
         if (res === 0) {
           this.newVideoFile =
             new VideoFile(fileName + CommonConstants.DOT_SPLIT_SYMBOL + this.targetCodec, destDir,
               CommonConstants.INITIAL_TIME, CommonConstants.INITIAL_FILE_SIZE,
               $r('app.media.ic_default_item_image'), 0);
           this.pageInfo.pop(this.newVideoFile, true);
         } else {
           VideoUtils.removeUselessFile(destDir);
           showToast(this.getUIContext(), $r('app.string.convert_failed_msg'));
         }
       }
     });
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──constants
│  │  └──CommonConstants.ets            // 通用常量
│  ├──entryability
│  │  └──EntryAbility.ets               // 程序入口类
│  ├──model
│  │  ├──DataModel.ets                  // 数据模型
│  │  └──FileDataSource.ets             // 文件信息对象数据源
│  ├──pages
│  │  ├──MainPage.ets                   // 首页
│  │  └──ParsePage.ets                  // 转码页
│  └──utils
│     ├──Logger.ets                     // 日志操作工具类
│     └──VideoUtils.ets                 // 视频文件工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Class(PhotoViewPicker)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)

[Interface(AVPlayer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)

[@ohos/mp4parser](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmp4parser)

## 代码下载

[视频编码转换示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317191935.87130917425120282393000578484428%3A20260604154636%3A2800%3AAD00BBEEF6B7398407AC2DE51620EB387C46893C83254DFDEF42A80AB04CA3CE.zip?needInitFileName=true)
