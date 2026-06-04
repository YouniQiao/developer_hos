---
title: "功能卡片自动循环播放"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/easylife_loopscroll-0000002284598853
---

## 场景介绍

功能卡片自动循环播放是便捷生活类应用中高频使用场景之一，如外卖美食、商城购物、教育课程等多种场景的首页，都需要手动滚动或自动循环播放功能类别卡片。

本示例主要基于[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)、[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)和[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)组件实现了手动滚动或自动循环轮播的效果。

## 效果预览

![](./img/32ee820a.gif "点击放大")

## 实现思路

* 手动滚动：基于[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)容器实现[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)布局的手动滑动。
* 自动循环轮播：基于[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)容器，使用定时器实现匀速滚动，在滚动指定个数后，数据源前减后加达成无限循环。
* 自动循环播放时手动滚动：通过计算即将发生的滚动量实现。

  ```
  // 手动滚动
  Swiper(this.swiperController) {
    // Grid布局内容
    MenuItemComponent();
  }

  startAutoRoll() {
    this.intervalNum = setInterval(() => {
      // 计算定时滑动偏移，并前减后加数据，实现循环
    }, CommonConstants.TIMING);
  }

  Scroll(this.scroller) {
    // 展示图标内容
  }
  .onScrollFrameBegin((offset: number) => {
    // 计算手动滑动偏移
  });
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                // 代码区
│  ├──constants
│  │  ├──CommonConstants.ets         // 常量
│  │  └──ListDataConstants.ets       // 列表常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──HomePage.ets                // 主页
│  └──view
│     ├──GridItemComponent.ets       // Grid部分
│     ├──MenuItemComponent.ets       // Menu部分
│     └──TimeScrollView.ets          // Scroll组件循环滚动
└──entry/src/main/resources          // 应用资源目录
```

## 参考文档

[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)

[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)

[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)

## 代码下载

[功能卡片自动循环播放示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205165522.43458894018205729116738432228048%3A50001231000000%3A2800%3A3291923C751C812B59594B8A61EDDD74BDFE0E7E53EA10FFFEBADE7C11E5E4D0.zip?needInitFileName=true)
