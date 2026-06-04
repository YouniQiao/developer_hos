---
title: "综合办公应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-office-app-architecture-v1-0000001965211649
---

## 简介

本文档为办公类HarmonyOS应用的架构设计实践，提供常见的工作、邮件、通讯录、审批公告等功能，帮助开发者快速构建一款办公类应用。

* Stage开发模型+声明式UI开发范式。
* 应用只部署在手机端，规划一个Entry类型HAP包。
* 性能优先原则，模块全部采用HAR类型。

## 应用布局

![](./img/eb51cf2d.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 首页采用常见页面导航布局，底部通过[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-tabs)组件设置导航样式 。 * 首页底部导航包含“消息”、“邮件”、“通讯录”、“业务”四个功能入口，分别对应四个功能模块。 * 业务板块日历模块展示会议日程详情。 | ![](./img/1e639531.gif "点击放大") |

## 应用架构设计

### 模块划分

根据办公行业应用的功能，按照高内聚，低耦合的原则，应用功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分：

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 消息 | 通知，个人消息 |
| 邮件 | 收发邮件，转发，回复，标星 |
| 通讯录 | 企业通讯录，个人信息，呼叫，发消息 |
| 业务 | 考勤，审批，会议通知等入口 |

### 软件视图设计

模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本应用只涉及手机端，设计为一个HAP，包含页面框架、导航、手机独有资源等。

基础特性层：本应用将“邮件”、“消息”、“通讯录” 等功能模块打包为HAR包，被上层产品组件引用。

公共能力层：本应用将“网络”、“推送通知”、“DFX”等基础公共模块打包为Har包被上层业务组件引用，其中路由管理划分到公共组件。

**图1** 模块划分

![](./img/bc90a801.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/c04e3fc9.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 拨号

**功能设计**

办公类应用通讯录功能通常需要使用拨打电话的能力，HarmonyOS的[@ohos.telephony.call](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call)提供了呼叫管理功能，包括拨打电话、跳转到拨号界面、获取通话状态，仅需一行代码（call.makeCall((this.phone).toString(), (err: BusinessError) => {})），即可轻松从通讯录拉起拨号界面拨打电话。

常见页面路径：首页->通讯录->拨号，功能入口如下图所示：

**图3** 拨号界面

![](./img/74082210.gif "点击放大")

**代码参考**

代码详情参见[点击跳转通话界面](#section180932610249)。

### 日历项方案

**功能设计**

办公类应用提供日程管理能力，通常在日历页定位到指定的日期，会显示对应的日程列表。

常见页面路径：首页->业务->日程，功能页面如下图所示：

**图4** 日程页

![](./img/d3a401c2.gif "点击放大")

**方案设计**

通过在日历组件中注册回调事件，定位到日期时，触发回调事件，通过日期过滤格式化存储的日历项数据，并通过列表加载展示。

![](./img/318e5ef4.png "点击放大")

**代码参考**

代码详情参见[日历项](#section14113165102718)。

## 行业创新设计

![](./img/888ab41e.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码

### 后台提醒服务

**场景说明**

办公场景对时效的要求比较高，因此办公类应用需要经常提醒用户及时处理事务或者参加会议，通常会通过服务端下发Push消息实现，在应用后台或者关闭以及弱网络环境下，推送消息提醒会不及时。

**创新设计**

通过[Calendar Kit（日历服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-overview)提供的日历与日程管理能力，将应用中的日程服务与系统日历进行集成。通过永久性授权机制，在用户许可当前应用读写系统日历后，可将对应的日程服务信息同时写入日历，从而实现日程提醒。

**图5** 后台提醒

![](./img/cd383ce8.png "点击放大") ![](./img/cc584943.png "点击放大")

**实现方案**

使用[Calendar Kit（日历服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/calendarmanager-overview)能力。

需要获取读取或写入日历、日程的权限：ohos.permission.READ\_CALENDAR和ohos.permission.WRITE\_CALENDAR。

## 应用框架代码

![](./img/79f7ee5c.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

### 代码运行环境

软件要求

* DevEco Studio版本：DevEco Studio 6.0.0 Release及以上。
* HarmonyOS SDK版本：HarmonyOS 6.0.0 Release SDK及以上。

硬件要求

* 设备类型：华为手机。
* HarmonyOS系统：HarmonyOS 6.0.0 Release及以上。

环境搭建

* 安装DevEco Studio，详情请参考[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

### 代码结构解读

本篇代码非应用的全量代码，只包括脱敏后的应用的框架代码，开发者可以通过链接下载框架的代码。

结构图中展示了应用的部分HAR包模块结构。

整个框架代码结构分为多个HAR包，所有的HAR包在同一个IDE工程中维护开发。

* business是业务模块的HAR包，包含业务模块首页以及日程管理页面。
* mail是邮件模块的HAR包，包含邮件列表以及邮件详情。
* message是消息模块的HAR包，包含的是消息预览页面和单人会话页面。
* mine是个人相关的HAR包，包含消息列表和详情web页面。

```
├──common                                        // 通用模块HAR
│  ├──common/src/main/ets
│  │  ├──components
│  │  │  ├──PageHead.ets
│  │  │  └──PageSearch.ets
│  │  └──utils
│  │     ├──LazyDataSource.ets
│  │     └──ObservedArray.ets
│  └──dfx/src/main/ets/components
│     ├──Logger.ets
│     └──MainPage.ets
├──entry/src/main/ets                            // 主页面
│  ├──entryability
│  │  └──EntryAbility.ets
│  └──pages
│     └──Index.ets
├──entry/src/main/resources                      // 资源文件目录
└──feature
   ├──business/src/main/ets                      // 业务模块HAR
   │  ├──common
   │  │  ├──BusinessConstants.ets
   │  │  ├──NavInfo.ets
   │  │  ├──Reminder.ets
   │  │  └──ReminderService.ets
   │  ├──components
   │  │  ├──Calendar.ets
   │  │  ├──EmptyComponent.ets
   │  │  └──SectionTitle.ets
   │  ├──mainPage
   │  │  ├──BusinessPage.ets
   │  │  ├──CalendarPage.ets
   │  │  ├──SignInPage.ets
   │  │  ├──ToDoPage.ets
   │  │  └──WebPage.ets
   │  └──viewModel
   │     ├──ApplicationInfo.ets
   │     ├──CalendarInfo.ets
   │     ├──ClockInfo.ets
   │     ├──LazyDataSource.ets
   │     └──ToDoInfo.ets
   ├──mail/src/main/ets                          // 邮件模块HAR
   │  ├──components
   │  │  ├──BottomDialog.ets
   │  │  ├──EmailDetailNavHeader.ets
   │  │  └──EmailSendNavHeader.ets
   │  └──mainPage
   │     ├──Email.ets
   │     ├──EmailDetail.ets
   │     ├──EmailPage.ets
   │     └──InboxPage.ets
   ├──message/src/main/ets                       // 消息模块HAR
   │  ├──constants
   │  │  └──HomeConstants.ets
   │  ├──mainPage
   │  │  ├──ConversationDetail.ets
   │  │  ├──ConversationPage.ets
   │  │  ├──CreateChatPage.ets
   │  │  ├──MeetingPublish.ets
   │  │  ├──MessagePage.ets
   │  │  ├──PersonalSet.ets
   │  │  └──views
   │  │     ├──MessageBubble.ets
   │  │     ├──common
   │  │     │  └──HomTopSearch.ets
   │  │     ├──conversation
   │  │     │  ├──ConversationDetailBottom.ets
   │  │     │  ├──ConversationDetailItem.ets
   │  │     │  ├──ConversationDetailTopSearch.ets
   │  │     │  └──ConversationItem.ets
   │  │     ├──image
   │  │     │  └──StandardIcon.ets
   │  │     └──text
   │  │        ├──IntroduceText.ets
   │  │        └──NormalText.ets
   │  └──viewModel
   │     └──ConversationViewModel.ets
   └──mine/src/main/ets                          // 个人信息模块HAR
      ├──common
      │  ├──DataSource.ets
      │  ├──HomeConstants.ets
      │  ├──RegionData.ets
      │  ├──RegionDataGroups.ets
      │  └──RegionRequestData.ets
      ├──components
      │  ├──MinePage.ets
      │  ├──PageHead.ets
      │  └──PageSearch.ets
      └──mainPage
         ├──BookPage.ets
         ├──InformationPage.ets
         └──SelectRegionPage.ets
```

### 点击跳转通话界面

使用[@ohos.telephony.call](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call)的call API实现拉起拨号界面并显示待拨号码。该Kit还提供了发送短消息以及SIM卡管理等能力。

```
import call from '@ohos.telephony.call';
import { BusinessError } from '@ohos.base';

// 添加自己所需要的电话号码
call.makeCall((this.phone).toString(), (err: BusinessError) => {
  // ...
});
```

### **日历项**

日历项的显示包含了四个主要部分，日历项数据的构造，事件回调注册，事件触发获取数据，以及显示日历项。

```
// 日历info
class CalendarInfo {
  id: number = 0;
  startTime?: string = ''; // 头像
  endTime?: string = ''; // 标题
  title?: string = ''; // 标题
  date?: string = ''; // 年月日

  constructor(id: number, startTime?: string, endTime?: string, title?: string, date?: string) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.title = title;
    this.date = date;
  }
}

// 日历列表数据
const calendarInfoList: CalendarInfo[] = [
  new CalendarInfo(1, '14:00', '15:00', '视频会议-10', `${str}`),
  new CalendarInfo(2, '15:00', '16:00', '视频会议-11', `${str}`),
  // ...
];

// 事件回调注册
VariableCalendar({
  getSelectItem: (item:CJDateItem):void => this.getSelectItem(item),
  getYearAndMonth: (title:string):void => this.getTitle(title)
})

// 获取日历项数据
getDate(){
  this.currentDate = this.getCurrentDate();
  this.List = CalendarInfoList.filter(v => v.date == this.currentDate);
}

// 显示日历项
List() {
  ForEach(this.list, (item: CalendarInfo) => {
    ListItem() {
      Column() {
        Row() {
          Image($r('app.media.time'))
            .width(16)
            .height(16)
            .margin({
              right: 8
            });
          Text(`${item.startTime}-${item.endTime}`);
        };

        Text(`${item.title}`)
          .margin({
            top: 8
          });
      }
      .padding(10)
      .alignItems(HorizontalAlign.Start);
    };
  }, (item: CalendarInfo) => JSON.stringify(item)); // + Math.random()
};
```

### 代码下载链接

[综合办公类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317185405.84413560689505130861816706248079%3A20260604130118%3A2800%3AB2E4DC9ED5FC82A0D1C35E7A36FFFF406A9E6AB8C21A360B890433A3CA0D9316.zip?needInitFileName=true)
