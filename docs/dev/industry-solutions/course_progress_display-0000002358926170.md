---
title: "课程学习进度展示"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/course_progress_display-0000002358926170
---

## 场景介绍

课程学习进度展示是教育类应用的高频使用场景之一，如用户可以查看当前学习进度，以及完成某一章节后更新进度条。

本示例基于[@Provide装饰器和@Consume装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume)实现状态管理，使用滚动组件通用事件[onDidScroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common#ondidscroll12)和[onReachEnd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common#onreachend11)更新当前进度。

## 效果预览

![](./img/ffdbe6fb.gif "点击放大")

## 实现思路

1. 在[onSizeChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-size-change-event#onsizechange)事件中初始化当前章节内容长度。

   ```
   Text('', { controller: this.controller }) {
     Span(this.currentText.replace(/\n/g, '\n       '));
   }
     .onSizeChange((oldValue: SizeOptions, newValue: SizeOptions) => {
       this.textHeight = newValue.height as number;
       let ratio = Math.max(CommonConstants.SCROLL_HEIGHT / this.textHeight, 0);
       this.rollingProgress = Math.floor(ratio * this.textBuffer.length);
     })
   ```
2. 在[onDidScroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common#ondidscroll12)事件中根据滚动偏移量更新当前章节进度。

   ```
   Scroll(this.scroller) {
     // 内容
   }
     .onDidScroll(() => {
       let yOffset = this.scroller.currentOffset().yOffset;
       let ratio = Math.max((yOffset + CommonConstants.SCROLL_HEIGHT) / this.textHeight, 0);
       this.rollingProgress = Math.floor(ratio * this.textBuffer.length);
     })
   ```
3. 在[onReachEnd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common#onreachend11)事件中更新已学习章节进度。

   ```
   Scroll(this.scroller) {
     // 内容
   }
     .onReachEnd(() => {
       if (this.readChapterArray.indexOf(this.contents[this.chapterIndex]) === -1) {
         this.readChapterArray.push(this.contents[this.chapterIndex]);
       }
       this.ProgressValue = Math.floor((this.readChapterArray.length / this.contents.length) * 100);
     })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──components
│  │  ├──ContentsListItem.ets          // 目录列表子项
│  │  └──Title.ets                     // 标题栏组件
│  ├──constants
│  │  └──CommonConstants.ets           // 常量
│  ├──entryability
│  │  └──EntryAbility.ets              // 入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets        // 应用备份恢复能力
│  └──page
│     ├──MainPage.ets                  // 主页
│     └──ReadPage.ets                  // 阅读页
└──entry/src/main/resources            // 应用资源目录
```

## 参考文档

[@Provide装饰器和@Consume装饰器：与后代组件双向同步](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume)

[组件尺寸变化事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-size-change-event)

[滚动组件通用接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common)

## 代码下载

[课程学习进度展示示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164926.93904481662099928289411072741195%3A50001231000000%3A2800%3ADDF7C8DB04A48CFAEB0B5BAED9DAD665367266D831D7E831965C7F842A1FFE4B.zip?needInitFileName=true)
