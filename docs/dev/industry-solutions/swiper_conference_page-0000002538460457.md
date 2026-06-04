---
title: "通过Swiper实现可滑动的四宫格会议界面"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/swiper_conference_page-0000002538460457
---

## 场景介绍

可滑动会议界面是实用工具类应用的高频使用场景之一，如线上会议时，用户可通过滑动界面查看会议成员情况。

本示例基于[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)、[LazyForEach](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-lazyforeach)和[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-flex-layout)实现四宫格会议界面和滑动切换界面内容的功能。

## 效果预览

![](./img/31d4081e.gif "点击放大")

## 实现思路

1. 将原始数据列表拆分为每4个元素一组的子数组，每个子数组代表一个页面的数据。

   ```
   resetDataArr() {
     // 将数据按四个拆分
     let listArr: ItemParam[][] = [];
     for (let i = 0; i < this.list.length; i += 4) {
       listArr.push(this.list.slice(i, i + 4));
     }
     // 清空数据
     this.dataArr.clear();
     // 添加第一屏会议界面
     this.dataArr.pushData([]);
     // 添加与会人
     this.dataArr.pushDataPositionArray(1, listArr);
   }
   ```
2. 使用Swiper组件实现页面的滑动切换，每个页面展示一个子数组的数据。第一个页面用空数组占位，显示会议界面。

   ```
   Swiper(this.swiperController) {
     LazyForEach(this.dataArr, (item: ItemParam[], index: number) => {
       if (index === 0) {
       // ...
       } else {
       // ...
       }
     }, (item: ItemParam[]) => JSON.stringify(item))
   }
   ```
3. 使用Flex布局在每个页面内实现2×2的四宫格展示。

   ```
   Flex({ wrap: FlexWrap.Wrap, alignContent: 0 }) {
     ForEach(item, (param: ItemParam) => {
       Column() {
       // ...
       }
     }, (param: ItemParam) => JSON.stringify(param))
   }
   ```
4. 其余具体功能实现，请详见完整示例。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──ObservedArray.ets              // 观察属性变化类
│  ├──pages
│  │  ├──MeetingSwiper.ets              // 会议主页面
│  └──utils
│     └──LazyDataSource.ets             // 懒加载数据通用工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[弹性布局(Flex)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-flex-layout)

[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)

[LazyForEach：数据懒加载](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-lazyforeach)

## 代码下载

[通过Swiper实现可滑动的四宫格会议界面示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101803.84120409285815053060514630600350%3A50001231000000%3A2800%3AD367823EA27A7B4A2BBB1A8C9038771B28AF4A30CBE7BB5B94ACA75CBC86689F.zip?needInitFileName=true)
