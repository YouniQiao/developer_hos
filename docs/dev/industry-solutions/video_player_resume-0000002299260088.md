---
title: "视频自动暂停与恢复播放"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/video_player_resume-0000002299260088
---

## 场景介绍

视频自动暂停与恢复播放是影音娱乐类应用中的高频使用场景之一，如用户在播放视频过程中，弹出闹钟或电话通知时自动暂停视频，关闭闹钟或电话时自动恢复播放。

本示例基于[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)实现视频播放功能，并通过监听其音频焦点变化事件实现关闭闹钟或电话后自动恢复播放的功能。

## 效果预览

![](./img/4d848dd3.png "点击放大")

## 实现思路

![](./img/ea5539ca.png)

视频播放时，应用会自动申请音频焦点，闹钟提示或电话接入时焦点发生变化，应用自动暂停视频播放。

当闹钟或电话的提示音结束后，系统将发送打断类型和打断提示分别为共享打断类型(audio.[InterruptForceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#interruptforcetype9).INTERRUPT\_SHARE)、音频可继续播放(audio.[InterruptHint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#interrupthint).INTERRUPT\_HINT\_RESUME)的事件，应用在监听到该事件时调用[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)的play函数恢复播放。

```
avPlayer.on('audioInterrupt', async(interruptEvent: audio.InterruptEvent) => {
// 检查中断事件类型是否为共享打断
  if (interruptEvent.forceType === audio.InterruptForceType.INTERRUPT_SHARE) {
    // 当提示为音频可继续播放时，恢复播放并更新状态
    switch (interruptEvent.hintType) {
      case audio.InterruptHint.INTERRUPT_HINT_RESUME:
        if (this.staticPlayState?.isForeground) {
          avPlayer.play();
        } else {
          // ...
        }
        break;
      default:
        break;
    }
  }
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
│  │  ├──Constants.ets                        // 常量
│  │  └──VideoPlayState.ets                   // 视频播放状态类
│  ├──controller
│  │  └──AVPlayerController.ets               // 视频播放控制器
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──manager
│  │  └──VideoPlayerManager.ets               // 视频播放管理类
│  ├──pages
│  │  └──MainPage.ets                         // 主页
│  ├──util
│  │  └──CommonUtil.ets                       // 工具类
│  └──view
│     ├──PlayControlView.ets                  // 视频播放控制（播放、暂停、进度条）类
│     └──VideoPlayer.ets                      // 视频播放类
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[Interface(AVPlayer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)

[音频焦点介绍](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-playback-concurrency)

[使用AVPlayer播放音频(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-avplayer-for-playback)

## 代码下载

[视频自动暂停与恢复播放示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310112803.53978710199360037639325166171686%3A20260604141905%3A2800%3A019610DC7A3E0136A584B433C65322B9346B1209293E52D5B2EFFFC08793B11C.zip?needInitFileName=true)
