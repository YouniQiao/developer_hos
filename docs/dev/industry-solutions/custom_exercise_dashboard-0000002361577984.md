---
title: "组合手势调整运动看板卡片顺序"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/custom_exercise_dashboard-0000002361577984
---

## 场景介绍

组合手势调整运动看板卡片顺序是运动健康类应用的高频使用场景之一，如用户需要更改当前运动数据看板展示内容。

本示例基于[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)和组合手势实现自定义运动数据看板，支持添加或删除运动卡片，支持长按拖拽调整卡片顺序。

## 效果预览

![](./img/f6c93aec.png "点击放大")

## 实现思路

1. 进入看板自定义页面时，对已选卡片与未选卡片进行深拷贝。点击右上角确认按钮保存后，自定义卡片数据同步至主页。

   ```
   aboutToAppear(): void {
     this.items1 = JSON.parse(JSON.stringify(this.selectedCard));
     this.items2 = JSON.parse(JSON.stringify(this.unselectedCard));
   }
   Image($r('app.media.confirm'))
     .onClick(() => {
       this.selectedCard = JSON.parse(JSON.stringify(this.items1));
       this.unselectedCard = JSON.parse(JSON.stringify(this.items2));
       this.pageInfos.pop();
     })
   ```
2. [GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)绑定组合手势，[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)通过对选中卡片进行放大实现悬浮效果，[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)通过对不同拖动方向执行不同逻辑，从而改变卡片顺序。

   ```
   GridItem() {
     this.customCard() // 自定义运动卡片
   }
   .scale({
     x: this.scaleItem === item.id ? Constants.SCALE_VALUE : 1,
     y: this.scaleItem === item.id ? Constants.SCALE_VALUE : 1
   })
   .gesture(
     GestureGroup(GestureMode.Sequence,
       // 实现选中卡片的悬浮效果
       LongPressGesture(),
       // 改变卡片顺序
       PanGesture()
         .onActionUpdate((event: GestureEvent) => {
           this.getUIContext()?.animateTo({ curve: curves.interpolatingSpring(0, 1, 400, 38) }, () => {
             // 以向下滑为例，当判断拖拽方向总体上为向下滑时，执行下滑逻辑
             if (direction === down) {
               this.down(index);
             }
           })
         })
     )
   )
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──common
│  │  └──Constants.ets                        // 常量数据
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──ExerciseCard.ets                     // 运动卡片数据
│  └──pages
│     ├──CustomPage.ets                       // 自定义页
│     └──MainPage.ets                         // 主页
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)

[组合手势](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-combined-gestures)

[GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem)

[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)

[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)

## 代码下载

[组合手势调整运动看板卡片顺序示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310110429.08080318397676689088798434518901%3A20260604123922%3A2800%3ABB7767EC095DA2FDDDE14DFD0B92CF5BA539C7A4DE848850B948B6DC0E8B5CCF.zip?needInitFileName=true)
