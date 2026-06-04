---
title: "网络视频缓冲进度条"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/buffered_progress_bar-0000002351008293
---

## 场景介绍

网络视频缓冲进度条是影音娱乐类应用中的典型场景之一，如用户播放在线视频时，进度条显示当前缓冲的可播放进度。

本示例基于[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)实现在线视频播放，基于[Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider)实现视频播放和缓冲进度条显示。

## 效果预览

![](./img/9c817253.png "点击放大")

## 实现思路

1. 初始化视频播放资源，用于[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)初始化进入idle状态时设置资源（详见第5步）。

   ```
   initFiles(): void {
     let context = this.getUIContext().getHostContext() as Context;
     try {
       this.sourceUrl = context.resourceManager.getStringSync($r('app.string.url').id);
     } catch (error) {
       // ...
     }
   }
   ```
2. 调用[createAVPlayer()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-f#mediacreateavplayer9-1)创建AVPlayer实例，初始化进入idle状态。

   ```
   createAVPlayer(): void {
     media.createAVPlayer().then((video: media.AVPlayer) => {
       // ...
     }).catch((error: BusinessError) => {
       // 失败
     });
   }
   ```
3. 设置需要的监听事件，注册AVPlayer回调函数。

   ```
   // 注册avPlayer回调函数
   setAVPlayerCallback(avPlayer: media.AVPlayer): void {
     // startRenderFrame首帧渲染回调函数
     avPlayer.on('startRenderFrame', () => {});

     avPlayer.on('timeUpdate', (time: number) => {})

     // seek操作结果回调函数
     avPlayer.on('seekDone', (seekDoneTime: number) => {})

     // 监听setSpeed生效的事件
     avPlayer.on('speedDone', (speed: number) => {})

     // error回调监听函数,当avPlayer在操作过程中出现错误时调用reset接口触发重置流程
     avPlayer.on('error', (err: BusinessError) => {})

     // 状态机变化回调函数
     avPlayer.on('stateChange', async (state: string, reason: media.StateChangeReason) => {})

     // 监听流媒体缓冲状态、缓冲百分比、已缓冲数据预估可播放时长
     avPlayer.on('bufferingUpdate', (infoType : media.BufferingInfoType, value : number) => {})
   }
   ```
4. 监听资源播放当前时间事件[on('timeUpdate')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#ontimeupdate9)，更新当前网络视频播放时间。

   ```
   avPlayer.on('timeUpdate', (time: number) => {
     if (!this.isSwiping) {
       // 刷新进度条当前时间
       this.currentTime = Math.floor(time * this.durationTime / avPlayer.duration);
       this.currentStringTime = TIME_UTIL.secondToTime(Math.floor(time / 1000));
     }
   })
   ```
5. 监听播放状态机AVPlayerState切换的事件[on('stateChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#onstatechange9)，在[prepared](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-t#avplayerstate9)状态获取当前网络视频总时间。

   ```
   // 状态机变化回调函数
   avPlayer.on('stateChange', async (state: string, reason: media.StateChangeReason) => {
     switch (state) {
       case 'idle': // 成功调用reset接口后触发该状态机上报
         if (this.sourceUrl !== '') {
           // 设置资源：设置属性url，avPlayer进入initialized状态
           // 网络视频使用avPlayer.url赋值
           avPlayer.url = this.sourceUrl;
         }
         break;
       case 'initialized': // avPlayer设置播放源后触发该状态上报
         this.reset()
         // 设置窗口：获取并设置属性SurfaceID，用于设置显示画面
         avPlayer.surfaceId = this.surfaceID;
         // 调用prepare()，avPlayer进入prepared状态
         avPlayer.prepare();
         break;
       case 'prepared': // prepare调用成功后上报该状态机
         // 此状态可以获取duration，设置总进度
         this.flag = true;
         this.durationTime = Math.floor(avPlayer.duration / 1000);
         this.durationStringTime = TIME_UTIL.secondToTime(this.durationTime);
         avPlayer.setSpeed(media.PlaybackSpeed.SPEED_FORWARD_1_00_X)
         avPlayer.seek(1, media.SeekMode.SEEK_PREV_SYNC)
         break;
       case 'completed': // prepare调用成功后上报该状态机
         this.isPlay = false;
         break;
       case 'playing': // play成功调用后触发该状态机上报
         break;
       case 'paused': // pause成功调用后触发该状态机上报
         break;
       case 'stopped': // stop接口成功调用后触发该状态机上报
         break;
       case 'released':
         break;
       default:
         break;
     }
   })
   ```
6. 订阅音视频缓存更新事件[on('bufferingUpdate')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#onbufferingupdate9)，更新当前网络视频缓冲时间。

   ```
   // 监听流媒体缓冲状态、缓冲百分比、已缓冲数据预估可播放时长
   avPlayer.on('bufferingUpdate', (infoType : media.BufferingInfoType, value : number) => {
     if (infoType === Constants.BUFFER_INFO_TYPE[3]) {
       this.currentBufferTime += value / 1000;
     }
   })
   ```
7. 堆叠两个[Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider)组件实现进度条：一个用于展示网络视频缓冲时间，[value](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider#slideroptions对象说明)参数值为当前网络视频缓冲时间；另一个用于展示当前播放时间，value参数值为当前网络视频播放时间。两个组件的max参数值都为网络视频总时间。

   ```
   Stack() {
     // 播放进度条
     Slider({
       value: this.currentTime,
       step: 1,
       min: 0,
       max: this.durationTime,
       style: SliderStyle.OutSet
     })
       // ...
       .onChange((value: number, mode: SliderChangeMode) => {
         this.sliderOnChange(value, mode);
       })

     // 缓冲进度条
     Slider({
       value: this.currentBufferTime,
       step: 1,
       min: 0,
       max: this.durationTime,
       style: SliderStyle.NONE
     })
       // ...
   }
   .height($r('app.float.height_22'))
   .margin({ top: $r('app.float.margin_5') })
   ```
8. 注销监听事件，释放资源。

   ```
   aboutToDisappear(): void {
     if (this.avPlayer) {
       this.avPlayer.off('startRenderFrame');
       this.avPlayer.off('timeUpdate');
       this.avPlayer.off('seekDone');
       this.avPlayer.off('speedDone');
       this.avPlayer.off('error');
       this.avPlayer.off('stateChange');
       this.avPlayer.off('bufferingUpdate');
       this.avPlayer.release();
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

![](./img/e2a5c841.png)

播放的网络视频地址需用户自行设置。

## 权限说明

获取网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──common
│  │  └──Constants.ets                  // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──MainPage.ets                   // 主页
│  └──utils
│     ├──Logger.ets                     // 日志工具类
│     └──TimeUtil.ets                   // 时间转换工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Functions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-f)

[Interface(AVPlayer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)

[Types](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-t)

[Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider)

## 代码下载

[网络视频缓冲进度条示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225095854.45075717624506498295639935895285%3A50001231000000%3A2800%3A4F296F3D34BDAB437E562D2F3ABC10F0888547F119DA4A563782A2FCBD57A575.zip?needInitFileName=true)
