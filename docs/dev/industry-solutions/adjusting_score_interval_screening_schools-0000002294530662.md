---
title: "基于DataPanel实现双向滑块调节分数区间"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/adjusting_score_interval_screening_schools-0000002294530662
---

## 场景介绍

调节分数区间是教育类应用中的典型场景之一，如考生在筛选学校时，输入高考分数，设置分数范围筛选可报考的学校。

本示例基于[DataPanel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-datapanel)数据面板组件设置滑轨，在滑块上显示区间分数，实现调节分数区间的功能。

## 效果预览

![](./img/073be7c9.png "点击放大")

## 实现思路

1. 使用[DataPanel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-datapanel)数据面板组件创建三个数据区间，面板类型设置为[DataPanelType.Line](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-datapanel#datapaneltype8枚举说明)。中间的数据区间滑轨设置为蓝色，表示分数区间。

   ```
   DataPanel({ values: this.sliderLength, max: 258, type: DataPanelType.Line })
     .width(300)
     .height(3)
     .borderRadius('50%')
     .valueColors([$r('app.color.gray4'), $r('app.color.blue'), $r('app.color.gray4')])
   ```
2. 使用[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)手势的onActionUpdate事件，根据滑动距离动态计算左右滑块的位置、显示的分数以及左中右滑轨的长度，实现分数区间的调节功能。

   ```
   onActionUpdate((even) => {
     this.leftNum = this.sliderLength[0] + (even.offsetX - this.lastOffsetX) / 258 * 300;
     this.midNum = this.sliderLength[1] - (even.offsetX - this.lastOffsetX) / 258 * 300;
     if (this.leftNum < 0) {
       this.midNum = this.sliderLength[0] + this.sliderLength[1];
       this.sliderLength[0] = 0;
       this.sliderLength[1] = this.midNum;
       this.leftValue = '200';
     } else if (this.leftNum >= 0 && this.midNum >= 0) {
       this.sliderLength[0] = this.leftNum;
       this.sliderLength[1] = this.midNum;
       this.leftValue = (this.leftNum + 200).toFixed();
     } else {
       this.leftNum = this.sliderLength[0] + this.sliderLength[1];
       this.leftValue = (this.leftNum + 200).toFixed();
       ;
       this.sliderLength[0] = this.leftNum;
       this.sliderLength[1] = 0;
     }
     this.lastOffsetX = even.offsetX;
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
──entry/src/main/ets                 // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     ├──ScreenPage.ets               // 筛选条件组件
│     ├──DualSlider.ets               // 调节分数区间组件
│     ├──SchoolPage.ets               // 学校专业信息组件
│     └──FilterPage.ets               // 主页
└──entry/src/main/resources           // 应用资源目录
```

## 参考文档

[DataPanel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-datapanel)

[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)

## 代码下载

[基于DataPanel实现双向滑块调节分数区间示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164920.44048476149821475448336997093669%3A50001231000000%3A2800%3A62B36C8A375DCA9B669177A00B64A542F31E22E30F641D2777FCDD4D60DE75FF.zip?needInitFileName=true)
