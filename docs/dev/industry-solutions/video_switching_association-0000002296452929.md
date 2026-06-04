---
title: "视频列表切换播放"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/video_switching_association-0000002296452929
---

## 场景介绍

视频列表切换播放是影音娱乐类应用的高频场景之一。

本示例基于[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)和[Video](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-media-components-video#video-1)组件实现视频列表切换播放效果。

## 效果预览

![](./img/3bce9eff.gif "点击放大")

## 实现思路

1. 将视频和卡片信息写入ListData中，通过[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)关联显示。

   ```
   Tabs({ barPosition: BarPosition.End, controller: this.controller, index: this.selectTabIndex }) {
     TabContent() {
       VideoView({
         currentPlayVideo: this.currentPlayVideo,
         currentIndex: this.currentIndex,
         videoList: this.videoList
       })
       ListView({
         currentPlayVideo: this.currentPlayVideo,
         currentIndex: this.currentIndex,
         videoList: this.videoList
       });
     };
   }
   ```
2. 使用[Video](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-media-components-video#video-1)组件控制视频播放。

   ```
   Video({
     src: this.currentPlayVideo.videoSrc,
     controller: this.controller
   })
     .onPrepared((event) => {
       this.videoDuration = event.duration;
     })
     .onStart(() => {
       // 视频初始化播放时暂停，解决黑屏问题
       if (!this.isPlaying) {
         this.controller.pause();
       }
     })
     .onUpdate((event) => {
       this.currentTime = event.time;
     })
     .onFinish(() => {
       this.isPlaying = false;
     });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──common
│  │  ├──Constants.ets                        // 常量类
│  │  └──ListData.ets                         // 列表数据
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──ItemModel.ets                        // 视频数据类
│  │  └──ListDataSource.ets                   // 列表数据类
│  ├──pages
│  │  └──MainPage.ets                         // 主页
│  └──view
│     ├──ListView.ets                         // 列表
│     └──VideoView.ets                        // 视频
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)

[Video](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-media-components-video)

## 代码下载

[视频列表切换播放示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225095846.31560582427987348558334255112992%3A50001231000000%3A2800%3A0AD4CD621748E44FA3CF2983E7B9CD9483B5C3980B34A37F6EE73EDE00304DA1.zip?needInitFileName=true)
