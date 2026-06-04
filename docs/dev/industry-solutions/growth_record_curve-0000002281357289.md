---
title: "儿童生长曲线记录"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/growth_record_curve-0000002281357289
---

## 场景介绍

儿童生长曲线记录是孕育健康类应用广泛使用的场景之一，如用户需要记录宝宝的身高、体重信息，查看一定周期内的变化趋势。

本示例使用[@ohos/mpchart](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmpchart)绘制折线图（走势图），将身高、体重、日期等数据可视化。

## 效果预览

![](./img/909308f1.gif "点击放大")

## 实现思路

1. 创建测量数据类GrowthRecord，使用[@ohos/mpchart](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmpchart)构建随时间变化的折线图模型LineCharts。
2. 在主页面TabContent组件中分别调用LineCharts模型，导入身高体重的相关参数。
3. 每次添加数据后返回主页面刷新模型。

   ```
   // 监听数据集的变化
   @Prop @Watch('onDataChange') trendData: Array<number>;

   // 变化刷新模型
   onDataChange() {
     if (this.model) {
       this.max = this.dateList.length - 0.7;
       // 更新X轴最大值
       if (this.xAxis) {
         this.xAxis.setAxisMaximum(this.max);
       }
       this.model.setData(this.getLineData());
       this.model.notifyDataSetChanged();
       this.model.invalidate();
     }
   }

   // 绘制曲线
   LineCharts({
     topText: $r('app.string.ohos_id_elements_content_topText1'),
     rightText: $r('app.string.ohos_id_elements_content_rightText1'),
     unit: $r('app.string.unit1'),
     duringMinValue: 0,
     duringMaxValue: 80,
     duringTime: `${(this.dateList[0].getMonth() +
       1)}/${this.dateList[0].getDate()}-${(this.dateList[this.dateList.length-1].getMonth() +
       1)}/${this.dateList[this.dateList.length-1].getDate()}`,
     trendData: this.heightList,
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                 // 代码区
│  ├──constants
│  │  └──CommonConstants.ets          // 公共常量
│  ├──entryability
│  │  └──EntryAbility.ets             // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──AddRecord.ets                // 添加数据页
│  │  ├──LineCharts.ets               // 绘制折线图
│  │  └──MainPage.ets                 // 主页
│  └──viewmodel
│     └──GrowthRecord.ets             // 身高体重类
└──entry/src/main/resources           // 应用资源目录
```

## 参考文档

[@ohos/mpchart](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmpchart)

## 代码下载

[儿童生长曲线记录示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170613.81998197782016141384693428598126%3A50001231000000%3A2800%3A078D9CAC144CF43272E47432E9751574D3D744AD290E87CFCD853FF998988D4C.zip?needInitFileName=true)
