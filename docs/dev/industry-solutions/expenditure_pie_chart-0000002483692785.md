---
title: "绘制支出分布饼图"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/expenditure_pie_chart-0000002483692785
---

## 场景介绍

绘制支出分布饼图是理财保险类应用的高频使用场景之一，如用户可通过饼图了解支出分布及比重。

本示例使用[@ohos/mpchart](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmpchart)绘制饼状图，将支出数据可视化。

## 效果预览

![](./img/9a388b6f.gif "点击放大")

## 实现思路

1. 初始化PieChartModel图表模型。

   ```
   private model: PieChartModel = new PieChartModel();
   ```
2. 设置图表数据。

   ```
   let pieData: PieData = this.getPieData();
   this.model.setData(pieData);
   ```
3. 设置图表样式。

   ```
   this.model.setHoleRadius(80);
   this.model.getDescription()?.setEnabled(false);
   this.model.getLegend()?.setEnabled(false);
   this.model.setExtraOffsets(50, 0, 50, 0);
   this.model.setMinAngleForSlices(10);
   ```
4. 为第三方库[@ohos/mpchart](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmpchart)提供的PieChart组件配置构建类，渲染图表。

   ```
   PieChart({ model: this.model })
     .width(CommonConstants.FULL_WIDTH)
     .height(CommonConstants.FULL_HEIGHT)
     .backgroundColor(Color.White);
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──components
│  │  └──PieChartComponent.ets     // 饼状图组件
│  ├──constants
│  │  └──CommonConstants.ets       // 常量
│  ├──entryability
│  │  └──EntryAbility.ets          // 入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets    // 应用备份恢复能力
│  └──pages
│     └──MainPage.ets              // 主页
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[@ohos/mpchart](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmpchart)

## 代码下载

[绘制支出分布饼图示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170019.95524631223562698396721416799284%3A50001231000000%3A2800%3A1438BA7E2BD1236C84896D0B0DC170E93987B339C957504C3C154B72E9DFC69B.zip?needInitFileName=true)
