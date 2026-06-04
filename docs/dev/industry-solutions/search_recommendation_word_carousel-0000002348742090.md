---
title: "搜索推荐词轮播"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/search_recommendation_word_carousel-0000002348742090
---

## 场景介绍

搜索推荐词轮播是购物比价类应用的高频使用场景之一。

本示例基于[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)、[Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search)和[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)组件实现搜索推荐词轮播功能，搜索框循环滚动切换推荐商品关键词，点击搜索时，可直接展示当前推荐词的搜索结果。

## 效果预览

![](./img/cc1b1b30.png "点击放大")

## 实现思路

1. 使用[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)组件，循环展示推荐词。将Swiper悬浮于[Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search)搜索框上方，实现默认推荐词效果。

   ```
   Swiper(this.swiperController) {
     ForEach(this.placeholderList, (item: string) => {
       Text(item.toString())
         .textAlign(TextAlign.Start)
         .fontSize(16);
     }, (item: string) => item);
   }
   ```
2. 当点击“搜索”按钮时，使用[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)跳转至搜索结果页面，跳转时传递当前Swiper展示的推荐词。

   ```
   Button($r('app.string.search'), { stateEffect: true, type: ButtonType.Capsule })
     .onClick(() => {
       let parm: SearchContentClass = new SearchContentClass();
       parm.searchContent = this.placeholderList[this.index];
       this.pageInfo.pushPath({
         name: 'searchPage', param: parm
       });
     });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├─entry/src/main/ets
│ ├─entryability
│ │ └─EntryAbility.ets       // 程序入口
│ ├─entrybackupability
│ │ └─EntryBackupAbility.ets
│ ├─model
│ │ └─SearchContent.ets      // 搜索参数类文件
│ └─pages
│   ├─RecommendSearch.ets    // 首页
│   └─SearchPage.ets         // 搜索结果页
└──entry/src/main/resources  // 应用资源目录
```

## 参考文档

[Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search)

[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

## 代码下载

[搜索推荐词轮播示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170141.93312836853531276196324659568651%3A50001231000000%3A2800%3A5E5A124FD0C8E182C667DE123AE440204BDEB5B003C64EC0920B4680F7AB7CBC.zip?needInitFileName=true)
