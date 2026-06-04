---
title: "抢票倒计时及提醒"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/booking_to_grab_tickets-0000002304538948
---

## 场景介绍

抢票倒计时及提醒是购物比价类应用的高频使用场景之一，如用户需要抢购演唱会、音乐会等门票时，可通过对应软件预约抢票开始倒计时并添加日历进行提醒。

本示例基于[Timer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer)、[@ohos.calendarManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager)实现抢票倒计时和预约后添加日历提醒的功能，支持点击计时器上方的“开抢”修改抢票时间。

## 效果预览

![](./img/9f1cea50.gif "点击放大")

## 实现思路

1. 用户进入抢票页面时，通过[setInterval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer#setinterval)设置定时刷新页面时间间隔，并计算目标时间与当前时间差值毫秒数。

   ```
   this.nowDate = new Date();
   // 计算当前时间与目标时间的毫秒数差
   this.gap = this.ticketDate.getTime() - this.nowDay.getTime();
   // 根据毫秒数差计算间隔的天/时/分/秒
   this.calculateTime();
   // 设定定时任务，刷新时间
   this.startCountDown();
   ```
2. 根据差值毫秒数，计算抢票倒计时（日/时/分/秒），刷新抢票页面倒计时时间。

   ```
   this.days = Math.floor(this.gap / (CommonConstants.ONE_DAY_TOTAL_MILLS));
   this.hours =
     Math.floor((this.gap % (CommonConstants.ONE_DAY_TOTAL_MILLS)) / (CommonConstants.ONE_HOUR_TOTAL_MILLS));
   this.minutes =
     Math.floor((this.gap % (CommonConstants.ONE_HOUR_TOTAL_MILLS)) / (CommonConstants.ONE_MINUTE_TOTAL_MILLS));
   this.seconds =
     Math.floor((this.gap % (CommonConstants.ONE_MINUTE_TOTAL_MILLS)) / (CommonConstants.ONE_SECOND_TOTAL_MILLS));
   ```
3. 点击预约抢票，通过[CalendarManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager#calendarmanager)创建日历账户并添加日程以提醒用户。

   ```
   this.calendarMgr?.createCalendar(calendarAccount).then((data: calendarManager.Calendar) => {
     this.calendar = data;
     this.calendar.setConfig(config);
     let eventId: number | undefined = undefined;
     const event: calendarManager.Event = {
       // ...
     };
     // 添加日程
     this.calendar.addEvent(event);
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取读取日历信息权限：[ohos.permission.READ\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionread_calendar)。
* 获取添加、移除或更改日历活动权限：[ohos.permission.WRITE\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionwrite_calendar)。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──constants
│  │  └──CommonConstants.ets            // 通用常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──CountDownView.ets              // 倒计时组件
│  │  └──Index.ets                      // 主页面
│  └──utils
│     └──Logger.ets                     // 日志工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Timer（定时器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer)

[@ohos.calendarManager（日程管理能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager)

## 代码下载

[抢票倒计时及提醒示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170140.59409038355023774948017213208188%3A50001231000000%3A2800%3AD6771C5D57542460830A581BE431906AA478CD31628118045FAFCFD2F3A1FF12.zip?needInitFileName=true)
