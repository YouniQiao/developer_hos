---
title: "商品页面刷新和展示"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/scroll_celling_demo-0000002331639969
---

## 场景介绍

商品页面刷新和展示是购物比价类应用中高频使用场景之一。

本示例基于[Refresh](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-refresh)、[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)组件实现商品展示页面设计，包括搜索栏、业务模块栏、商品筛选栏和商品信息栏，支持页面刷新。

## 效果预览

![](./img/f6f667e8.gif "点击放大")

## 实现思路

1. 分别实现商品展示页面的搜索栏、业务模块栏、商品筛选栏和商品信息栏，详细实现请在代码中查看。

   ```
   // CatalogView.ets
   export struct CatalogView {}         // 不同业务模块栏

   // CustomTabBarView.ets
   export struct CustomTabBarView {}    // 商品筛选栏

   // ProductView.ets
   export struct ProductView {}         // 商品信息栏

   // SearchView.ets
   export struct SearchView {}          // 顶部搜索栏
   ```
2. 结合[Refresh](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-refresh)、[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)组件实现商品列表下拉刷新和上拉加载功能，以及滚动和吸顶效果。

   ```
   // MainMallPage.ets
   Refresh({ refreshing: $$this.isRefreshing }) {
     Column() {
       // ...
       Scroll(this.scrollController) {
         Column() {
           // ...
           Column() {
             // 自定义tabBar
             CustomTabBarView({ tabBarIndex: this.curTabBarIndex, tabsController: this.tabsController })
             Tabs({ barPosition: BarPosition.Start, controller: this.tabsController }) {
               ForEach(this.tabArray, (item: Resource) => {
                 TabContent() {
                   ProductView({ filterParam: item })
                 }
               }, (item: Resource, index: number) =>
                 // ...
             }
             .animationDuration(300)
             .onAnimationStart((index: number, targetIndex: number) => {
               this.curTabBarIndex = targetIndex;
               this.listScroller.scrollToIndex(targetIndex, true, ScrollAlign.CENTER);
             });
           }
         }
       }
       .scrollBar(BarState.Off); // 隐藏滚动条
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets              // 代码区
│  ├──component
│  │  ├──CatalogView.ets           // 分类栏组件
│  │  ├──CustomTabBarView.ets      // 标签栏组件
│  │  ├──ProductView.ets           // 商品展示组件
│  │  └──SearchView.ets            // 搜索栏组件
│  ├──entryability
│  │  └──EntryAbility.ets          // 程序入口
│  ├──model
│  │  ├──DataSource.ets
│  │  └──ProductDataSource.ets     // 商品数据
│  └──pages
│     └──MallMainPage.ets          // 商品展示页
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)

[Refresh](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-refresh)

## 代码下载

[商品页面刷新和展示示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170138.01972960294284007401775624827124%3A50001231000000%3A2800%3A87381967BFC4D26E9E6EA1BD1CBA368460971F663376B0EB1A5CC95EDA6AD23B.zip?needInitFileName=true)
