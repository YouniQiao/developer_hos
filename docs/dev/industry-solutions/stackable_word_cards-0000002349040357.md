---
title: "堆叠式单词卡片"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/stackable_word_cards-0000002349040357
---

## 场景介绍

堆叠式单词卡片是教育类应用中的典型场景之一。

本示例基于[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)组件、[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)和[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)实现堆叠式单词卡片的滚动效果及删除功能。

## 效果预览

![](./img/e1c2a2b2.png "点击放大")

## 实现思路

1. 将单词卡片存储在数组arr中，通过设置卡片的透明度、偏移量和缩放比例，实现在[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)组件中卡片的堆叠效果。

   ```
   // MemorizeWordsPage.ets
   Stack({ alignContent: Alignment.Center }) {
     ForEach(this.arr, (item: WordCard) => {
       Column() {
         Image(item.img)
         .height(576 * item.sizeRatio)
       }
       .zIndex(item.opacityX)
       .translate({ x: item.positionX })
       .opacity(item.opacityX)
       // ...
     })
   }
   ```
2. 在[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)中设置动画和改变卡片的状态值实现单词卡片的滚动效果及删除功能。

   ```
   // MemorizeWordsPage.ets
   Column() {
     Image(item.img)
   }
   .gesture(GestureGroup(GestureMode.Exclusive,
     PanGesture(this.panOptionV)                                  // 删除卡片
       .onActionStart((event: GestureEvent) => {...})
       .onActionUpdate((event: GestureEvent) => {
         if (event.offsetY < -100 && !this.isScrollingV && this.arr.length !== 0) {
            this.getUIContext().animateTo({...}, () => {...})     // 在animateTo中改变卡片状态值
         }
       })
       .onActionEnd((event: GestureEvent) => {...}),
     PanGesture(this.panOptionH)                                  // 滚动卡片
     // ...
     )
   )
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets              // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets          // 程序入口
│  ├──entryability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     ├──EntryPage.ets             // 入口页
│     └──MemorizeWordsPage.ets     // 背单词页
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)

[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)

[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)

## 代码下载

[堆叠式单词卡片示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310135928.25384844565096349266827005142802%3A20260604124628%3A2800%3AA525E727761BC9471E440509213686B81C08C0A3CE3A85D8EF30CF378C77D2C0.zip?needInitFileName=true)
