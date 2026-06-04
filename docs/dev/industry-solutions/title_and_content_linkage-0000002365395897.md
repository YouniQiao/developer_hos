---
title: "分类标题一键跳转内容"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/title_and_content_linkage-0000002365395897
---

## 场景介绍

分类标题一键跳转内容是各类应用的高频使用场景之一。

本示例基于[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现标题与内容联动的效果，将点击操作与List绑定，点击分类标题时，内容页滚动至指定位置。

## 效果预览

![](./img/a2436590.png "点击放大")

## 实现思路

1. 添加标题：使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件或者[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)组件水平方向展示标题列表，并在点击标题时触发自身组件滚动和下方内容列表滚动操作。

   ```
   @Builder
   groupNameBar(name: string, index: number) {
     Column() {
       Text(name)
         .onClick(() => {
           if (index > 3) {
             // 标题根据点击List的index进行滚动，当index>3（该数值根据实际设置），即点击位置处于列表后半部分，列表滚动到index位置
             this.scrollerForTitle.scrollToIndex(index, true);
           } else {
             // 标题根据点击List的index进行滚动，当index<=（该数值根据实际设置），即点击位置处于列表前半部分，列表滚动到首位，即根据点击位置，展示附近区域的标题
             this.scrollerForTitle.scrollToIndex(0, true);
           }
           // 根据当前标题index，使用scrollToIndex滚动到下方List组件的指定Index位置，设置对齐方式为ScrollAlign.CENTER
           this.scrollerForList.scrollToIndex(index, true, ScrollAlign.CENTER);
           this.currIndex = index;
         })
       // 自定义选中文本底部导航条
       if (index === this.currIndex) {
         Column().width(this.titleLength[this.currIndex]).height(3).backgroundColor(Color.Blue);
       }
     }.height(30)
   }
   ```
2. 根据数据内容展示图库List列表。

   ```
   List({ space: 5 }) {
     ForEach(item.details, (itemDetail: ShowDataDetail) => {
       ListItem() {
         Column() {
           // 因图片资源过大，会引起加载过慢问题，列表展示可以通过sourceSize属性压缩展示图片大小
           Image(itemDetail.image)
           Text(itemDetail.desc)
         }
       }
     })
   }
   ```
3. 标题、内容List组件绑定各自[Scroller](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#scroller)控制器。

   ```
   // List组件展示标题列表，并绑定本身的scroller
   List({ space: 30, scroller: this.scrollerForTitle }) {
     ForEach(this.datas, (item: ShowData, index: number) => {
       ListItem() {
         this.groupNameBar(item.groupName, index)
       }
     }, (item: number) => JSON.stringify(item))
   }

   // List组件展示图库内容列表，并绑定scroller
   List({ initialIndex: 0, scroller: this.scrollerForList }) {
     ForEach(this.datas, (item: ShowData, index: number) => {
       ListItem() {
         this.showDataImage(item, index);
       };
     }, (item: number) => JSON.stringify(item));
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──Index.ets                        // 主页面
│  └──ShowData.ets                        // 展示数据对象类
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)

## 代码下载

[分类标题一键跳转内容示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260311161404.27484417636248342227667101242426%3A20260604160044%3A2800%3AD6B499D5CB6C672E282966F67AB70A6740D7587BF262291B6A6BE40D4D6A1675.zip?needInitFileName=true)
