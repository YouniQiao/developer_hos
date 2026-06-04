---
title: "上门服务预约提醒"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/appointment_service_remind-0000002378138101
---

## 场景介绍

上门服务预约提醒是便捷生活类应用中的高频使用场景之一，如用户需要快递上门取件、保洁上门服务等，可进行预约并添加日程提醒。

本示例基于[Navigation组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)、自定义[半模态页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition)和[@ohos.calendarManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager)实现选择上门时间和添加日程提醒的功能。

## 效果预览

![](./img/37a25154.gif "点击放大")

## 实现思路

1. 点击期待上门时间跳转至对应页面并通过[bindSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition#bindsheet)打开半模态选择框，选择一个上门时间。

   ```
   Text()
     .bindSheet($$this.isShow, this.timeSelectPanel, {
       height: $r('app.float.day_select_modal_window_height'),
       preferType: SheetType.BOTTOM,
       showClose: false,
       onWillDismiss: (dismissAction: DismissSheetAction) => {
         dismissAction.dismiss();
         this.pathStack.pop(this.selectedParam, true);
       }
     });
   ```
2. 根据当前时间，构建可选择的时间段列表。

   ```
   if (this.dayParam.id === 'today') {
     this.timePreview.push({ startTime: { hour: -1, minute: -1 }, endTime: { hour: -1, minute: -1 } });
     NORMAL_TIME_INTERVAL.forEach((timeInterval) => {
       // ...
       this.timePreview.push(timeInterval); // 寻找今天符合要求的时间段
     });
   } else {
     this.timePreview = NORMAL_TIME_INTERVAL; // 填充明、后天的可选时间段
   }
   ```
3. 选定上门时间后，关闭半模态页面，通过[constructor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#constructor-1)的onPop字段获取时间选择页传回的上门时间参数，并更新首页信息。

   ```
   this.pathStack.pushPath({
     name: 'TimeSelectPage', onPop: (result: PopInfo) => {
       if (!result || !result.result) {
         return;
       }
       this.timeParam = result.result as SelectedTimeParam;
       this.appointTime = this.timeParam.timeStr;
     }
   });
   ```
4. 补充其他信息后点击下单，通过[CalendarManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager#calendarmanager)创建日历账户并添加对应预约时间的日程。

   ```
   CalendarUtils.addCalendarEvent(CommonConstant.CALENDAR_TITLE, this.timeParam.startTime,
     this.timeParam.endTime, CommonConstant.NORMAL_REMIND_TIME)
     .then((res: boolean) => {
       if (res) {
         showToast($r('app.string.appoint_success_tip'), this.getUIContext());
       }
     });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取添加、移除或更改日历活动权限：[ohos.permission.WRITE\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionwrite_calendar)。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──component
│  │  └──ModalSelectWindow.ets          // 可选时间段组件
│  ├──constant
│  │  └──CommonConstant.ets             // 通用常量
│  ├──entryability
│  │  └──EntryAbility.ets               // 程序入口类
│  ├──model
│  │  ├──CommonEnum.ets                 // 通用枚举
│  │  └──DataModel.ets                  // 数据模型
│  ├──pages
│  │  ├──ItemInfoSelectPage.ets         // 物品信息选择页
│  │  ├──PaySelectPage.ets              // 付款方式选择页
│  │  ├──ServicePage.ets                // 预约服务首页
│  │  └──TimeSelectPage.ets             // 上门时间选择页
│  └──utils
│     ├──CalendarUtils.ets              // 日历操作工具类
│     └──Logger.ets                     // 日志工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

[半模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition)

[@ohos.calendarManager（日程管理能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager)

## 代码下载

[上门服务预约提醒示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317194354.78518299829063363199801431435964%3A20260604122249%3A2800%3A2F50A470B944944AAE8C941916526DE8AF4390F081B16FC3451C2695DDB58F22.zip?needInitFileName=true)
