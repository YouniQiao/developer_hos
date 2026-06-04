---
title: "景点语音讲解"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/attraction_talk_sample-0000002335049696
---

## 场景介绍

景点语音讲解是旅游园区类应用的高频使用场景之一，如用户需要了解景点详情，可点击播放该景点的语音讲解音频。

本示例基于[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)实现播放音频的功能。

## 效果预览

![](./img/60fbc1e2.gif "点击放大")

## 实现思路

1. 定义音频播放类MediaPlayer。

   ```
   export default class MediaPlayer {}

   public static async getInstance(): Promise<MediaPlayer> {
     if (!MediaPlayer.instance) {
       MediaPlayer.instance = new MediaPlayer();
     }
     return MediaPlayer.instance;
   }
   // 监听stateChange，根据不同状态执行相应操作
   avPlayer.on('stateChange', (state) => {});
   // 设置播放资源
   public async setAudioResourceFromRowFile(url: string, context: common.UIAbilityContext) {
     let fileDescriptor = context.resourceManager.getRawFdSync(url);
     let avFileDescriptor: media.AVFileDescriptor =
       { fd: fileDescriptor.fd, offset: fileDescriptor.offset, length: fileDescriptor.length };
     this.avPlayer.fdSrc = avFileDescriptor;
   }
   ```
2. 调用MediaPlayer播放音频，设置定时器同步时长等信息。

   ```
   instance: MediaPlayer | null = null;
   this.instance = await MediaPlayer.getInstance();

   this.timer = setInterval(() => {
     this.time = MediaPlayer.time;
     this.timeStr = this.formatTime(this.time);
     if (MediaPlayer.state === 'playing') {
       this.isPlaying = true;
     } else {
       this.isPlaying = false;
     }
   }, 500);
   ```
3. 点击播放或者停止播放。

   ```
   Image(this.isPlaying ? $r('app.media.playing_big') : $r('app.media.play_circle_fill'))
     .onClick(async () => {
       if (!this.instance) {
         this.instance = await MediaPlayer.getInstance();
       }
       if (this.isPlaying) {
         this.isPlaying = false;
         await this.instance.pause();
       } else {
         if (MediaPlayer.state === 'prepared' || MediaPlayer.state === 'paused' ||
           MediaPlayer.state === 'completed') {
           await this.instance.play();
           this.isPlaying = true;
         } else if (MediaPlayer.state === 'idle') {
           MediaPlayer.audioUrl = this.singleAudioCommentary.audioResource;
           MediaPlayer.curAudioId = this.singleAudioCommentary.id;
           await this.instance.setAudioResourceFromRowFile(this.singleAudioCommentary.audioResource,
             this.context);
         }
       }
     })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──component
│  │  ├──ExhibitionRecommendations.ets      // 展览推荐组件
│  │  ├──FeatureItemComponent.ets           // 功能导航组件
│  │  ├──RecentExhibition.ets               // 最近展览组件
│  │  ├──RecommendedAttractions.ets         // 推荐景点条目组件
│  │  ├──ScenicSpotSeriesCard.ets           // 景点系列组件
│  │  └──VoicePlayerComponent.ets           // 景点详情播放组件
│  ├──entryability
│  │  └──EntryAbility.ets                   // 程序入口类
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──AttractionsAlbumParam.ets          // 景点专辑参数
│  │  ├──FeatureItems.ets                   // 功能条目参数
│  │  ├──RecommendedAttractions.ets         // 推荐景点参数
│  │  └──SelfGuidedData.ets                 // 自助导览参数
│  ├──pages
│  │  ├──AttractionsAlbumPage.ets           // 景点专辑页面
│  │  ├──MainPage.ets                       // 主页面
│  │  └──ScenicSpotDetailsPage.ets          // 景点详情页面
│  └──utils
│     ├──Logger.ets                         // 日志打印工具
│     └──MediaPlayer.ets                    // 音频播放工具
└──entry/src/main/resources                 // 资源文件目录
```

## 参考文档

[使用AVPlayer播放音频(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avplayer-for-playback)

[Media Kit简介](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit-intro)

[Interface(AVPlayer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)

## 代码下载

[景点语音讲解示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170248.70645682104622162541222877853178%3A50001231000000%3A2800%3A22BD8C04A8C7B4B33A6858D9D17AB95AD10419E0B34E01BC6EE3F554AC2AA23D.zip?needInitFileName=true)
