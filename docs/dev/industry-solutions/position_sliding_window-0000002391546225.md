---
title: "推荐岗位-层叠卡片滑动切换动效"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/position_sliding_window-0000002391546225
---

## 场景介绍

滑动切换岗位卡片是求职招聘类应用中的典型场景之一，如用户在浏览推荐岗位时，可滑动查看不同岗位，并选择投递或标记不感兴趣。

本示例基于[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)组件实现岗位卡片的层叠布局，[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)实现滑动查看岗位的功能，[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)实现滑动或删除卡片的动画效果。

## 效果预览

![](./img/ce0b4d99.png "点击放大")

## 实现思路

* 采用[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)布局，为每个岗位卡片设置不同的尺寸、偏移量、透明度和zIndex等参数。

  ```
  Stack({ alignContent: Alignment.Start }) {
    ForEach(this.arr, (item: card, index: number) => {
      Column() {
        Image(item.img)
          .objectFit(ImageFit.Contain)
          .width(this.cardWidth * item.size)
          .height(569 * item.size)
      }
      .zIndex(item.zIndex)
      .opacity(item.opacity)
      .offset({
        x: item.offsetX,
        y: item.offsetY
      })
    });
  }
  ```
* 滑动岗位或删除岗位时，在[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)中改变卡片参数实现动画效果。

  ```
  handleSlider() {
    this.getUIContext().animateTo({
      duration: 500,
      curve: Curve.EaseInOut,
      iterations: 1,
      playMode: PlayModeNormal,
    }, () => {
      // 更新岗位卡片的参数
    });
  }
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                  // 代码区
│  ├──constants
│  │  └──StyleConstants.ets            // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──PositionSlidingPage.ets       // 岗位滑动页
└──entry/src/main/resources            // 应用资源目录
```

## 参考文档

[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)

[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)

[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)

## 代码下载

[推荐岗位-层叠卡片滑动切换动效示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225093453.07290947361537936003305738278703%3A50001231000000%3A2800%3A021196924447A867268F42AFA7153F12E707F02F611901101298882C0FE4557A.zip?needInitFileName=true)
