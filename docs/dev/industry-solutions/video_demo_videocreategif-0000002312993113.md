---
title: "视频截取转换为GIF动图"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/video_demo_videocreategif-0000002312993113
---

## 场景介绍

视频截取转换为GIF动图是影音娱乐类应用中的典型场景之一。

本示例主要基于[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)、[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)播放视频，通过第三方库[mp4parser](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmp4parser)调用ffmpegCmd()指令，实现截取视频片段转换为GIF动图并保存至图库的功能。

## 效果预览

![](./img/7adf8c12.gif "点击放大")

## 实现思路

1. 基于[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)、[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)播放视频。

   ```
   XComponent({
     id: 'video_player_id',
     type: XComponentType.SURFACE,
     controller: this.xComponentController
   })
     .onLoad(async () => {
       // 组件生成id
       this.surfaceId = this.xComponentController.getXComponentSurfaceId();
       // 创建播放器
       this.avPlayer = await media.createAVPlayer();
       // 创建状态
       this.isCreate = true;
       // 创建播放器回调
       this.setAVPlayerCallback(this.avPlayer);
       // 设置播放地址
       let videoPath = this.uiContext?.getHostContext()?.filesDir + '/video.mp4';
       // 小窗播放地址
       this.srcFilePath = videoPath;
       try {
         // 资源视频写入
         let arrayBuffer = this.uiContext?.getHostContext()?.resourceManager
           .getMediaContentSync($r('app.media.video').id).buffer;
         this.file = fsUtils.openSync(videoPath, fsUtils.OpenMode.READ_WRITE | fsUtils.OpenMode.CREATE);
         fsUtils.writeSync(this.file.fd, arrayBuffer);
         // 地址传入
         this.avPlayer.url = `fd://${this.file.fd}`;
       } catch (err) {
         // 错误处理
       }
     })
   ```
2. 使用AVplayer.duration获取当前视频时间，作为截取视频开始时间，截取10s固定时间视频片段进入GIF生成页。

   ```
   SelectGifTimeFrameView({
     srcFilePath: this.srcFilePath,
     maxTime: this.maxTime,
     minTime: this.minTime,
     startTime: this.startTime,
     endTime: this.endTime,
     currentStartTime: this.currentStartTime,
     currentEndTime: this.currentEndTime,
     videoWidth: this.videoWidth,
     videoHeight: this.videoHeight,
     back: () => {
       this.backFromSelectGifTimeFrameView();
     },
     startCreateGif: (startTime: number, endTime: number, src: string) => {
       this.createGifStartTime = startTime;
       this.createGifEndTime = endTime;
       this.createGifSrc = src;
       this.isShowGifCreateView = true;
     },
   });
   ```
3. 调用[MP4Parser](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmp4parser)提供的ffmpegCmd方法，截取视频片段转换为GIF动图。

   ```
   createGif(srcFilePath: string, sTime: number, eTime: number): void {
     let dst = this.uiContext?.getHostContext()?.cacheDir + '/output' + Date.now() + '.gif';
     let startTime = Utils.getTimeString(sTime);
     let duration = Math.floor((eTime - sTime) / Constants.TIMESTAMP_1000);

     let that = this;
     let callBack: ICallBack = {
       callBackResult(code: number) {
         that.gifSandBoxPath = dst;
         that.gifFilePath = fileUri.getUriFromPath(dst);
         that.uiContext.getPromptAction().showToast({ message: code === 0 ? '生成GIF成功' : '生成GIF失败' });
         that.canNext = true;
       }
     };

     // 可以用以下的FFmpeg命令生成gif图，这里也可以加参数以生成需要的gif图
     MP4Parser.ffmpegCmd('ffmpeg -i ' + srcFilePath + ' -ss ' + startTime + ' -t ' + duration + ' ' + dst, callBack);
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──common
│  │  ├─Constants.ets                   // 常量页
│  │  ├─Object.ets                      // 对象页
│  │  └─Utils.ets                       // 工具页
│  ├──entryability
│  │  └─EntryAbility.ets                // 屏幕窗口沉浸式布局页
│  └──pages
│     ├─GifCreateView.ets               // gif后处理页
│     ├─RangeSeekBarView.ets            // 帧图时间框页
│     ├─SelectGifTimeFrameView.ets      // gif生成页
│     └─VideoCreateGIF.ets              // 视频主页
└──entry/src/main/resources             // 资源文件目录
```

## 参考文档

[Interface(AVPlayer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)

[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)

[使用AVPlayer播放视频(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-playback)

[@ohos/mp4parser](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmp4parser)

## 代码下载

[视频截取转换为GIF动图示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225095847.39713445172234473914938934237959%3A50001231000000%3A2800%3A1D6BBAB54D4F43F0AC0F34F387EC256B13762F23013664906AC1C65157F56CE5.zip?needInitFileName=true)
