---
title: "自定义TabBar导航栏切换动画"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/tab_toggle_animation-0000002332006785
---

## 场景介绍

自定义TabBar导航栏切换动画是各类应用的高频使用场景之一。

本示例通过[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)堆叠布局和[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)方法，构建自定义TabBar，实现Tab页签下划线随Tab切换平移效果，当用户切换Tab页签时与TabContent保持同步，提升用户体验。

## 效果预览

![](./img/71b6f0b0.png "点击放大")

## 实现思路

1. 监听自定义TabBar的滑动，逐帧更新下划线相对左侧间距。

   ```
   Stack() {
     Row() {
       List() {
         ForEach(TAB_BAR_INFO, (item: TabBarItem, index: number) => {
           ListItem() {
             // Tab页签Builder
           }
         }, (item: TabBarItem, index) => JSON.stringify(item) + '_' + index)
       }
       // 监听自定义tabbar的滑动，逐帧更新下划线相对左侧的margin
       .onWillScroll((xOffset: number, yOffset: number) => {
         this.indicatorLeftMargin -= xOffset;
       })
     }
   }
   ```
2. 使用[onGestureSwipe](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#ongestureswipe11)监听Tab的滑动手势，逐帧更新下划线相对左侧的margin。

   ```
   .onGestureSwipe((index: number, event: TabsAnimationEvent) => {
     let currentIndicatorInfo = this.getTextInfo(index);
     this.curIndex = currentIndicatorInfo.index;
     this.indicatorLeftMargin = currentIndicatorInfo.left;
     this.indicatorWidth = currentIndicatorInfo.width;
   })
   ```
3. 使用[onAnimationStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#onanimationstart11)回调触发下划线跟随页面一起滑动。

   ```
   .onAnimationStart((index: number, targetIndex: number, event: TabsAnimationEvent) => {
     // 切换动画开始时触发该回调，下划线跟着页面一起滑动
     this.curIndex = targetIndex;
     let targetIndexInfo = this.getTextInfo(targetIndex);
     this.startAnimateTo(this.animationDuration, targetIndexInfo.left, targetIndexInfo.width);
   })
   ```
4. 为TabBar的List组件绑定scroller控制器，在Tabs组件触发[onChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#onchange)回调时，将自定义TabBar滚动至当前选中页签，下划线同步平移。

   ```
   .onChange((index: number) => {
     this.focusIndex = index;
     this.scroller.scrollToIndex(index - 1, true);
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├─entry/src/main/ets               // 代码区
│  ├──components
│  │  ├─CardInfoCom.ets            // 卡片信息组件
│  │  └─ContentFlowCom.ets         // TabContent组件
│  ├──entryability
│  │  └─EntryAbility.ets
│  ├──model
│  │  └─FoodInfoModel.ets          // 美食信息模型
│  ├──pages
│  │  └─TabToggle.ets              // Tab切换页
│  └──utils
│     └─Logger.ets                 // 日志工具
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)

[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)

[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)

## 代码下载

[自定义TabBar导航栏切换动画示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100045.88527482815541535424575788433847%3A50001231000000%3A2800%3AE5988FA1B7E2B9B1A0634CBAE713FF3E985933934E356AE487AAD60FD7D219AB.zip?needInitFileName=true)
