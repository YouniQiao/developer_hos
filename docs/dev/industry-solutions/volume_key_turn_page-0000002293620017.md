---
title: "音量键翻页"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/volume_key_turn_page-0000002293620017
---

## 场景介绍

本示例基于[Reader Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-api)构建阅读器，并通过[全局快捷键](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputconsumer)监听音量键按下事件，实现音量键翻页功能，通过控制音量键切换小说阅读前后页。

## 效果预览

![](./img/d07bd50c.gif "点击放大")

## 实现思路

1. 使用[Reader Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-api)构建阅读器。
2. 使用[inputConsumer.on('keyPressed')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputconsumer#inputconsumeronkeypressed16)监听音量键按下事件，在事件回调中使用[flipPage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-read-core#section444911141952)控制翻页。

   ```
   // src/main/ets/views/EmulationView.ets
   // 监听音量+按键事件
   let upOption: inputConsumer.KeyPressedConfig = {
     key: KeyCode.KEYCODE_VOLUME_UP,
     action: 1,
     isRepeat: false,
   }
   inputConsumer.on('keyPressed', upOption, () => {
     this.readerComponentController.flipPage(false);
   });
   // 监听音量-按键事件
   let downOption: inputConsumer.KeyPressedConfig = {
     key: KeyCode.KEYCODE_VOLUME_DOWN,
     action: 1,
     isRepeat: false,
   }
   inputConsumer.on('keyPressed', downOption, () => {
     this.readerComponentController.flipPage(true);
   });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                       // 主模块，主要包含页面内容
│  ├──common
│  │  └──Constants.ets                      // 常量类
│  ├──entryability
│  │  └──EntryAbility.ets                   // 应用入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──ReaderPage.ets                     // 主页
│  ├──utils
│  │  └──Logger.ets                         // 日志工具类
│  └──views
│     ├──BottomView.ets                     // 阅读设置栏
│     └──EmulationView.ets                  // 仿真翻页阅读器实现
└──entry/src/main/resources                 // 应用资源目录
```

## 参考文档

[Reader Kit（阅读服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-api)

[全局快捷键](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputconsumer)

[readerCore（阅读核心能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-read-core)

## 代码下载

[音量键翻页示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225161641.56829925484710510720607305942958%3A50001231000000%3A2800%3A76A7D47B823CD23760EB26D1B978CD11333555F173EF5042F37DDEDE3B8345D0.zip?needInitFileName=true)
