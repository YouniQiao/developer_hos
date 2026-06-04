---
title: "每日收支日历图"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/daily_revenue_and_expenditure_calendar_chart-0000002294643216
---

## 场景介绍

每日收支日历图是理财保险类应用中高频使用场景之一，如用户在日历上查看每日股票证券、基金期货等收支情况。

本示例通过[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex)组件和[showDatePickerDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#showdatepickerdialog)方法构建每日收支日历图，支持查看每日总收支及指定日期的流水详情。

## 效果预览

![](./img/58c103d4.gif "点击放大")

## 实现思路

1. 通过calcFlows方法完成日历图数据单元的初始化。

   ```
   // 日历图数据单元的初始化
   calcFlows(y: number, m: number, day: number) {
     // ...
     // 补齐上个月的cells
     if (startMissingDays > 0) {
       let daysOfLastMonth = new Date(startDay.getFullYear(), startDay.getMonth(), 0).getDate();
       for (let i = daysOfLastMonth - startMissingDays + 1; i <= daysOfLastMonth; i++) {
         thisFlows.push(new BillCell(i, true, 0, 0, []));
       }
     }
     // 补上本月的cells
     for (let i = 1; i <= daysOfThisMonth; i++) {
       thisFlows.push(new BillCell(i, false, 0, 0, []));
     }
     // 往本月的cell中填充数据
     for (let i = 0; i < this.sourceData.length; i++) {
       let day = this.sourceData[i].payDate.getDate();
       thisFlows[day + startMissingDays - 1].addDetails(this.sourceData[i]);
     }
     // 如果选中月非当前月，则需补充下个月的前几天做填充
     let endMissingDays = 6 - new Date(y, m - 1, daysOfThisMonth).getDay();
     if (y !== this.today.getFullYear() || m !== this.today.getMonth() + 1) {
       // ...
     }
     // ...
     // 设置默认展示的日期
     // ...
   }
   ```
2. 通过[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex)组件实现日历布局。

   ```
   Flex() {
     ForEach(this.flowCells, (item: BillCell, index: number) => {
       Column() {
         Text(item.day.toString())
         Text(item.income.toString())
         Text(item.expense.toString())
       }
       .onClick(() => {
         // 改变选中单元格样式，执行月份切换并初始化日历
       })
     })
   }
   ```
3. 通过[showDatePickerDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#showdatepickerdialog)方法实现日期选择器效果。

   ```
   this.getUIContext().showDatePickerDialog({
     start: new Date('2000-1-1'),
     end: this.today,
     selected: this.selectedDate,
     lunar: false,
     disappearTextStyle: { color: Color.Gray, font: { size: '14fp', weight: FontWeight.Normal } },
     textStyle: { color: Color.Black, font: { size: '18fp', weight: FontWeight.Regular } },
     selectedTextStyle: { color: Color.Black, font: { size: '22fp', weight: FontWeight.Bold } },
     acceptButtonStyle: { fontColor: $r('app.color.selected_date_cell_background') },
     cancelButtonStyle: { fontColor: Color.Gray },
     onDateAccept: (value: Date) => {
       this.selectedDate = value;
       this.year = value.getFullYear();
       this.month = value.getMonth() + 1;
       this.calcFlows(this.year, this.month, value.getDate());
     }
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets              // 代码区
│  ├──constants
│  │  └──CommonConstants.ets       // 通用常量类
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──SourceDataModel.ets       // 数据模型
│  └──pages
│     └──FlowCalendar.ets          // 主界面
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex)

[Class(UIContext)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)

## 代码下载

[每日收支日历图示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170016.73849398540236926940448893083371%3A50001231000000%3A2800%3ACA6FA8723EB62186F8A89B5B8144B30BD0B47F1861A7B6A62CDBCDC29AC9128E.zip?needInitFileName=true)
