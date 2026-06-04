---
title: "儿童词语学习卡片"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/vocabulary_learning_cards-0000002353707870
---

## 场景介绍

儿童词语学习卡片是儿童教育类应用中的典型场景之一，如用户可滑动词语卡片，点击播放英文、中文读音。

本示例使用[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit-intro#avplayer)播放音频，通过[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-stack-layout)实现堆叠卡片轮转效果。

## 效果预览

![](./img/077b133a.png "点击放大")

## 实现思路

1. 使用[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit-intro#avplayer)实现音频播放类MediaPlayer。

   ```
   export default class MediaPlayer {}
   // Method to obtain a singleton instance
   public static async getInstance(): Promise<MediaPlayer> {
     if (!MediaPlayer.instance) {
       MediaPlayer.instance = new MediaPlayer();
     }
     return MediaPlayer.instance;
   }
   // Initialize the player
   avPlayer.on('stateChange', (state) => {});
   public async setAudioResourceFromRowFile(url: string, context: common.UIAbilityContext) {
     let fileDescriptor = context.resourceManager.getRawFdSync(url);
     let avFileDescriptor: media.AVFileDescriptor =
       { fd: fileDescriptor.fd, offset: fileDescriptor.offset, length: fileDescriptor.length };
     this.avPlayer.fdSrc = avFileDescriptor;
   }
   ```
2. 使用[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-stack-layout)实现卡片堆叠，通过[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture#pangesture-1)实现手势左右滑动。

   ```
   Stack() {
     ForEach(this.swiperData, (item: CardsModel, index: number) => {
       Column({ space: (index !== this.currentIndex ? 10 : 20) }) {
         Row({ space: (index !== this.currentIndex ? 100 : 52) }) {
           Image(item.image)
             .width(index !== this.currentIndex ? 185 : 232)
             .height(index !== this.currentIndex ? 160 : 200)
           }
         }
       }
     })
   }
   .gesture(
     PanGesture({ direction: PanDirection.Horizontal })
       .onActionStart((event: GestureEvent) => {
         this.startAnimation(event.offsetX < 0, this.automaticSlidingDuration);
       })
       .onActionEnd(() => {
       })
   )
   .alignContent(Alignment.Center);
   ```
3. 计算偏移量，通过[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)实现轮转动画效果。

   ```
   getOffSetX(index: number): number {
     let offsetIndex: number = this.getImgCoefficients(index);
     let tempOffset: number = Math.abs(offsetIndex);
     let offsetX: number = 0;
     if (tempOffset === 1) {
       // Determine the left and right offsets based on the image hierarchy coefficient
       offsetX = -127 * offsetIndex;
     }
     return offsetX;
   }

   startAnimation(isLeft: boolean, duration: number): void {
     this.uiContext.animateTo({
     duration: duration,
   }, () => {
     let dataLength: number = this.swiperData.length;
     let tempIndex: number = isLeft ? this.currentIndex + 1 : this.currentIndex - 1 + dataLength;
     this.currentIndex = tempIndex % dataLength;
    })
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──constants
│  │  └──CommonConstants.ets              // 静态常量类
│  ├──entryability
│  │  └──EntryAbility.ets                 // 程序入口类
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──CardsModel.ets                   // 卡片数据结构
│  ├──pages
│  │  ├──MainPage.ets                     // 主页面
│  │  └──SwiperStackComponent.ets         // 页面功能
│  └──utils
│     └──MediaPlayer.ets                  // 音频播放类
└──entry/src/main/resources               // 应用静态资源目录
```

## 参考文档

[Media Kit简介](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit-intro)

[层叠布局(Stack)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-stack-layout)

[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)

[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)

## 代码下载

[儿童词语学习卡片示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164654.54426171528458035748094117421369%3A50001231000000%3A2800%3A65A1A6638F2FB091C73A44B6B6D52C7A15ECB1CF0CF945068B0A90E6CCCE0F69.zip?needInitFileName=true)
