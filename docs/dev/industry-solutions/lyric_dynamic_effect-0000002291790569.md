---
title: "歌词动态效果"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/lyric_dynamic_effect-0000002291790569
---

## 场景介绍

歌词动态效果是影音娱乐类应用中的高频使用场景之一。

本示例基于[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)实现了歌词滚动、文字颜色渐变的动画效果。

## 效果预览

![](./img/197cb00c.gif "点击放大")

## 实现思路

1. 读取rawfile目录下lrc格式歌词文件。

   ```
   this.context.resourceManager.getRawFileContent('Sing.lrc');
   ```
2. 使用正则表达式分离歌词和时间，并分别存储，具体实现请查看完整示例代码。

   ```
   // 歌词文件预处理函数
   processEnhancedLrc(lyric: string[]): void {
     let lrcList: LrcLine[] = [];
     // 使用正则表达式分离歌词和时间
     let wordRegex: RegExp = /\[(\d{2}):(\d{2})\.(\d{2})\]([^[\]]+)/g;
     while ((match = wordRegex.exec(line)) !== null) {
       let mm: number = Number.parseInt(match[1], 10);
       let ss: number = Number.parseInt(match[2], 10);
       let ms: number = Number.parseInt(match[3], 10);
       let text: string = match[4].trim();
       let time: number = mm * 60 * 1000 + ss * 1000 + ms * 10;

       if (words.length === 0) {
       lineStartTime = time;
       }
     }
     // ...
     // 将歌词按时间排序并计算持续时间
     lrcList.sort((a, b) => a.lineStartTime - b.lineStartTime);
     if (lrcList.length > 0) {
       this.duration = lrcList[lrcList.length - 1].words[lrcList[lrcList.length - 1].words.length - 1].startTime + 3000;
     }
     this.mLrcEntryList = lrcList;
   }
   ```
3. 设置计时器，实现歌词滚动时进度条的计时。

   ```
   // 创建定时器
   this.durationId = setInterval(() => {
     this.progressValue += 1000;
   }, 1000)

   // 进度条计时
   TextTimer({ isCountDown: false, count: this.endTime, controller: this.textTimerController })
     .onAppear(() => {
       this.textTimerController.start();
     })
     .onTimer((utc: number, elapsedTime: number) => {
       if ((elapsedTime + 0.99) * 1000 >= this.endTime) {
         this.textTimerController.pause();
       }
     })
   ```
4. 使用[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)展示文字渐变效果，动画持续时间与歌词时间绑定，实现歌词滚动效果。

   ```
   playLrc(duration: number) {
     this.uiContext.animateTo({
       duration: duration,
       finishCallbackType: FinishCallbackType.LOGICALLY,
       curve: Curve.Linear,
       iterations: 1,
       onFinish: () => {
         this.value = 0;
         this.currentIndex++;
         let currentLine = this.mLrcEntryList[this.currentLineIndex];
         if (this.currentIndex < currentLine.words.length) {
           this.lrcDuration = currentLine.words[this.currentIndex].lineDuration;
           this.playLrc(this.lrcDuration);
         } else {
           this.currentIndex = 0;
           this.currentLineIndex++;
           if (this.currentLineIndex < this.mLrcEntryList.length) {
             let nextLine = this.mLrcEntryList[this.currentLineIndex];
             this.lrcDuration = nextLine.words[this.currentIndex].lineDuration;
             this.playLrc(this.lrcDuration);
           }
         }
         // ...
         // 将歌词按时间排序并计算持续时间
         lrcList.sort((a, b) => a.lineStartTime - b.lineStartTime);
         if (lrcList.length > 0) {
           this.duration = lrcList[lrcList.length - 1].words[lrcList[lrcList.length - 1].words.length - 1].startTime + 3000;
         }
         this.mLrcEntryList = lrcList;
       }
     }, () => {
       this.value = 1;
     })
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                 // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──LrcSong.ets                  // 歌词数据模型
│  └──pages
│     └──MainPage.ets                 // 主页
└──entry/src/main/resources           // 应用资源目录
```

## 参考文档

[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)

## 代码下载

[歌词动态效果示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225095845.34452477744738835073343934472649%3A50001231000000%3A2800%3A128C2587D8C509B1A70054D4A037FC9CF97423427BAC58E77125A088184FD543.zip?needInitFileName=true)
