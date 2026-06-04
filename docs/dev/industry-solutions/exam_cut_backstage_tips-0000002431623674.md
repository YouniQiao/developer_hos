---
title: "考试切后台提示"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/exam_cut_backstage_tips-0000002431623674
---

## 场景介绍

考试切后台提示是综合办公类应用的高频使用场景之一，如考试期间一般不允许切后台，在切后台时需要给出提示。

本示例基于[Notification Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-kit)实现切后台时的本地通知提示，基于[使用SoundPool播放短音频](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-soundpool-for-playback)实现切后台时播放自定义录制声音提示，基于[Component如何监听应用前后台切换](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-230)实现切后台时的事件监听。

## 效果预览

![](./img/da2a7f98.png "点击放大")

![](./img/6ce138e2.png)

1. 正式使用时请重新录制声音，声音长度限制在2s内；
2. 首次打开应用的考试主页面时弹出开启通知的授权，并弹出通知设置面板让用户选择开启横幅通知；
3. 当监听到切后台事件时，弹出通知并播放声音提示，并在应用的考试页面加上蒙层；
4. 当应用切后台后，点击横幅，返回考试页面；当考试结束或应用退出时销毁通知；
5. 切后台操作包括：导航切换后台、分屏、浮窗；
6. 只有在考试页面时切后台才会发出通知，在主页面切后台不会发出通知；
7. 在考试页面点击返回按钮后，返回主页面，点击主页面“修改”可再次回到考试页面；
8. 本示例设置切后台5次后自动视为考试结束。考试结束后，若想重新启用考试，请重新启动应用。

## 实现思路

1. 设置一个存储应用前后台状态的变量“isOnForeground”，在UIAbility中对应的生命周期函数中更改此变量。

   ```
   // EntryAbility.ets
     onWindowStageCreate(windowStage: window.WindowStage): void {
       ...
       try {
         windowStage.on('windowStageEvent', (data) => {
           // 根据事件状态类型选择进行相应的处理
           if (data === window.WindowStageEventType.SHOWN) {
             // 应用进入前台，默认为可交互状态
             AppStorage.setOrCreate<boolean>('isOnForeground', true);
           } else if (data === window.WindowStageEventType.HIDDEN) {
             // 应用进入后台，默认为不可交互状态
             AppStorage.setOrCreate<boolean>('isOnForeground', false);
           } else if (data === window.WindowStageEventType.PAUSED) {
             // 前台应用进入多任务，转为不可交互状态
             AppStorage.setOrCreate<boolean>('isOnForeground', false);
           } else if (data === window.WindowStageEventType.RESUMED) {
             // 进入多任务后又继续返回前台时，恢复可交互状态
             AppStorage.setOrCreate<boolean>('isOnForeground', true);
           }
         });
       } catch (exception) {
         hilog.error(DOMAIN, 'testTag', 'Failed to enable the listener for window stage event changes. Cause: %{public}s',
           JSON.stringify(exception));
       }
     }
   ```
2. 在组件中监听AppStorage状态变量“isOnForegroundChanged”的变化，当应用处于考试进行中时，监听到切换后台，则弹出通知提示并播放声音。

   ```
   // ExamPage.ets
     @StorageLink('isOnForeground') @Watch('isOnForegroundChanged') isOnForeground: boolean = true
     // 应用进入前后台监听处理逻辑
     isOnForegroundChanged() {
       if (!this.isOnForeground && this.examParam.isInExam) { // 处于考试进行中时，若切后台则发送通知
         this.examParam.leftSwitchScreenCounts = this.examParam.leftSwitchScreenCounts - 1;
         if (this.examParam.leftSwitchScreenCounts < 0) { // 当切后台次数小于0，则自动提交考试结束
           this.submitExam();
           return;
         }
         ServerInteraction.sendExamParamToServer(this.examParam); // 向服务端更新剩余切后台次数
         this.notificationInputParam.text = '剩余' + this.examParam.leftSwitchScreenCounts.toString() + '次';
         SoundPoolUtil.PlaySoundPool(); // 播放自定义录制提示音
         NotificationUtil.setNotificationWithBanner(this.notificationInputParam); // 弹出用户通知
       }
     }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──common
│  │  ├──CommonConstants.ets              // 公共常量
│  │  └──NoteConstants.ets                // 提示功能常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupablility
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──ExamPage.ets                     // 考试页面
│  │  ├──MainPage.ets                     // 考试功能主页面
│  │  └──NavigationPage.ets               // Navigation入口页面
│  ├──utils
│  │  ├──DisplayUtil.ets                  // 页面显示工具类
│  │  └──NoteUtils.ets                    // 提示功能工具类
│  └──viewmodel
│     └──NoteData.ets                     // 提示功能数据类型
└──entry/src/main/resources               // 资源目录
```

## 参考文档

[Notification Kit（用户通知服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/notification-kit)

[如何打开横幅通知](https://developer.huawei.com/consumer/cn/doc/architecture-guides/insurance-v1_2-ts_87-0000002401137549)

[SoundPool（音频池）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-soundpool)

[使用SoundPool播放短音频(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-soundpool-for-playback)

[如何监听并响应应用切换前后台事件](https://developer.huawei.com/consumer/cn/doc/architecture-guides/shaking_to_dialog_1-ts_50-0000002383639186)

[Component如何监听应用前后台切换](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-230)

[如何实现应用退出到后台时新增蒙层保护隐私](https://developer.huawei.com/consumer/cn/doc/architecture-guides/photo-v1_2-ts_15-0000002298448761)

## 代码下载

[考试切后台提示示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317185407.37804378919059267306207238949014%3A20260604130710%3A2800%3AFA139D77493939A4A6A3200F105EA0B9379B73CDD9D9FFD19D8741511E6C1873.zip?needInitFileName=true)
