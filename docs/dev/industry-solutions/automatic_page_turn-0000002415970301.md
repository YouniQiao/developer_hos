---
title: "小说阅读自动翻页"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/automatic_page_turn-0000002415970301
---

## 场景介绍

本示例基于[setInterval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer#setinterval)定时器和[flipPage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-read-core#section444911141952)接口实现定时翻页功能，支持调节翻页的速度和方式。

## 效果预览

![](./img/03fc386c.gif "点击放大")

## 实现思路

通过[setInterval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer#setinterval)定时器，定时触发[flipPage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-read-core#section444911141952)接口翻页。

```
// 开始自动翻页
private startAutoScroll(): void {
  this.stopAutoScroll();
  this.timerId = setInterval(() => {
    this.readerComponentController.flipPage(true);
  }, this.scrollSpeed * 1000);
}
// 停止自动翻页
private stopAutoScroll(): void {
  if (this.timerId) {
    clearInterval(this.timerId);
    this.timerId = 0;
  }
}
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets               // 代码区
│  ├──common
│  │  ├──BookParserInfo.ets         // 导入书的信息
│  │  ├──FontFileInfo.ets           // 字体信息
│  │  └──LocalBookImporter.ets      // 本地书籍导入工具类
│  ├──entryability
│  │  ├──EntryAbility.ets           // 程序入口类
│  │  └──WindowAbility.ets          // 窗口管理类
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets     // 备份入口类
│  ├──pages
│  │  └──Reader.ets                  // 阅读页
│  └──utils
│     ├──BookUtils.ets              // 书籍工具类
│     └──FileUtils.ets              // 文件操作工具类
└──entry/src/main/resources         // 应用资源目录
```

## 参考文档

[Timer（定时器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer)

[readerCore（阅读核心能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-read-core)

## 代码下载

[小说阅读自动翻页示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225161652.46290027998732205085513406974337%3A50001231000000%3A2800%3A619E1D8D81F62C75AA6D16FF9EBA41A2A3B46B547D1FFB666C4D2C357F36FEB4.zip?needInitFileName=true)
