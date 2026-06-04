---
title: "双向滚动课程表"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/horizental_and_vertical_scrolling_list-0000002296361950
---

## 场景介绍

双向滚动课程表是教育类应用中的典型场景之一。

本示例基于[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件和[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)组件实现课程表横向和纵向滚动的功能。

## 效果预览

![](./img/5f04a5a3.png "点击放大")

## 实现思路

1. 页面分为两部分，左侧展示课程表节数和上课时间，右侧展示星期数和课程数据列表。
2. 右侧的课程数据使用双层[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)来实现数据的左右滑动。为了达到滑动左侧课程表时间部分和上部星期数，对应的数据也同步滑动的效果，在[onScrollFrameBegin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#onscrollframebegin9)回调中设置列表的垂直滚动控制器和水平滚动控制器；反之同理。

   ```
   // CourseTablePage.ets
   Row() {
     Scroll(this.classScroller) {
       // ...
     }
     .onScrollFrameBegin((offset: number) => {
       // ...
     })
     Scroll(this.timeScroller) {
       // ...
     }
     .onScrollFrameBegin((offset: number) => {
       // ...
     })
     Column() {
       Scroll(this.weekdaysScroller) {
         // ...
       }
       .onScrollFrameBegin((offset: number) => {         // 同步水平位移量
         this.horizontalScroller.scrollBy(offset,0);
         return { offsetRemain: offset };
       })
       Scroll(this.horizontalScroller) {
         Scroll(this.verticalScroller) {
           // ...
         }
         .onScrollFrameBegin((offset: number) => {       // 同步垂直位移量
           this.classScroller.scrollBy(0, offset);
           this.timeScroller.scrollBy(0,offset);
           return { offsetRemain: offset };
         })
       }
       .onScrollFrameBegin((offset: number) => {         // 同步水平位移量
         this.weekdaysScroller.scrollBy(offset,0);
         return { offsetRemain: offset };
       })
     // ...
   }
   ```
3. 通过在页面的[onAppear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-show-hide#onappear)函数中对[Scroller](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#scroller)设置课程表初始定位到当前星期数。

   ```
   // CourseTablePage.ets
   Row(){
     // ...
   }
   .onAppear(() => {
     if (this.weekDay > 1) {
       this.weekdaysScroller.scrollTo({ xOffset: (this.weekDay - 1) * 120, yOffset: 0 });
       this.horizontalScroller.scrollTo({ xOffset: (this.weekDay - 1) * 120, yOffset: 0 });
     }
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets              // 代码区
│  ├──datamodel
│  │  └──Course.ets                // 课程数据
│  ├──entryability
│  │  └──EntryAbility.ets          // 程序入口
│  ├──entryability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──CourseTablePage.ets       // 课程展示页
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)

[挂载卸载事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-show-hide)

## 代码下载

[双向滚动课程表示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317191715.88699567557192248995441449381143%3A20260604124615%3A2800%3AFB9AD5C13ABE7E9AABB13BDDB13AC4DEEEF61E06A79532805823214C38E8DD36.zip?needInitFileName=true)
