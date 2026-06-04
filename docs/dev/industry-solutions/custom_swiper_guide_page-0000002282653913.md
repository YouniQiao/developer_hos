---
title: "启动页个性化设计"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/custom_swiper_guide_page-0000002282653913
---

## 场景介绍

启动页个性化设计是各类应用中的高频使用场景之一。

本示例基于[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)组件实现启动页个性化设计，以及最后一页点击“立即启动”跳转至首页的功能。

## 效果预览

![](./img/fe68b605.gif "点击放大")

## 实现思路

* 在onAnimationEnd中，基于[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)接口实现按钮透明度的过渡动画。

  ```
  .onAnimationEnd((index: number, extraInfo: SwiperAnimationEvent) => {
    if (index === StyleConstants.LAST_INDEX) {
      this.getUIContext().animateTo({
        duration: 500,
        curve: Curve.EaseOut,
        iterations: 1,
        playMode: PlayMode.Normal,
      }, () => {
        this.penetrability = StyleConstants.ZERO;
      });
    }
  });
  ```
* 在滑动页面过程中，根据页面偏移量的变化，实现按钮透明度的实时渐变效果。

  ```
  .onGestureSwipe((index: number, extraInfo: SwiperAnimationEvent) => {
    if (index === StyleConstants.SECOND_TO_LAST_INDEX && extraInfo.currentOffset < StyleConstants.ZERO) {
      this.penetrability = 1 + extraInfo.currentOffset / this.windowWidth;
      this.visible = Visibility.None;
    }
  })
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                 // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──components
│  │  └──CustomGuide.ets             // 自定义Swiper指示器页
│  ├──constants
│  │  └──StyleConstants.ets          // 常量
│  └──pages
│     ├──HomePage.ets                // 主页
│     ├──SwiperGuide.ets             // 启动页
│     └──TabView.ets                 // 首页导航页
└──entry/src/main/resources          // 应用资源目录
```

## 参考文档

[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)

[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)

## 代码下载

[启动页个性化设计示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100031.20629862632285787921977570978583%3A50001231000000%3A2800%3AF98DC80586E9AF1F8C03588E1233BDEC2A827EE349759A6DD7BE2DE7EB566EB7.zip?needInitFileName=true)
