---
title: "添加运动计划日历提醒"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/calendar_schedule_events-0000002274539357
---

## 场景介绍

添加运动计划日历提醒是运动健康类应用中高频使用场景之一。

本示例基于[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)组件构建自定义日历，实现在选定日期添加运动计划提醒且同步至系统日历功能，并利用[RdbStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbstore)对日历计划进行持久化存储。

## 效果预览

![](./img/80b4745c.png "点击放大")

## 实现思路

1. 利用[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)组件构建自定义日历。

   ```
   GridRow({ columns: 7 }) {
     ForEach() => {
       GridCol() {
         CalendarItem({
          // 日历组件
         })
       }
     }, (item: HmCalendarItem) => JSON.stringify(item);
   }
   ```

2. 点击选定日期添加日历计划提醒。

   ```
   .bindSheet(this.isShowSheet, physiologicalSheet({
     currentDate: this.selectedDate,
     sheetClickType: this.sheetClickType,
     cancel: () => {
       this.sheetCancel();
     },
     confirm: async () => {
       // ...
     }
   }));
   ```

3. 利用[RdbStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbstore)实现持久化存储。

   ```
   export class RDBStoreUtil {
     objectiveRDB?: relationalStore.RdbStore;
     async createObjectiveRDB(context: Context) {
       const STORE_CONFIG: relationalStore.StoreConfig = {
         name: 'Objective.db',
         securityLevel: relationalStore.SecurityLevel.S1
       };
       let rdbStore = await relationalStore.getRdbStore(context, STORE_CONFIG);
       this.objectiveRDB = rdbStore;
       await this.createNoteTable();
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取添加、移除或更改日历活动权限：[ohos.permission.WRITE\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionwrite_calendar)。
* 获取读取日历信息权限：[ohos.permission.READ\_CALENDAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionread_calendar)。

## 工程目录

```
├──entry/src/main/ets                      // 代码区
│  ├──component
│  │  ├──MatterItem.ets                    // 事项组件
│  │  ├──MyCalendarViewCard.ets            // 日历组件
│  │  └──PhysiologicalSheet.ets            // 表单
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──DataModel.ets                     // 模型类
│  │  └──DataSource.ets                    // 模型类
│  ├──pages
│  │  ├──Index.ets                         // 首页
│  │  └──MyCalendar.ets                    // 日历组件
│  ├──utils
│  │  ├──AboutEvent.ets                    // 添加系统日程
│  │  ├──DateUtil.ets                      // 日期处理工具类
│  │  ├──RDBStoreUtil.ets                  // 数据库
│  │  └──RequestCalendarPermission.ets     // 系统日历权限
│  └──view
│     ├──MyCalendarView.ets                // 日历组件
│     ├──MyPlan.ets                        // 计划组件
│     └──Physiological.ets                 // 路由页
└──entry/src/main/resources                // 应用资源目录
```

## 参考文档

[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)

[Interface(RdbStore)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbstore)

## 代码下载

[添加运动计划日历提醒示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164452.01663864817814698004709275293687%3A50001231000000%3A2800%3A0FE6BDDB7925A5635D8DC9CDAAE54858D6D34DEFC2A88E035EB884626FA6B712.zip?needInitFileName=true)
