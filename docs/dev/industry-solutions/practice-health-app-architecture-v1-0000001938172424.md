---
title: "孕育健康应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-health-app-architecture-v1-0000001938172424
---

## 简介

本文档为孕育健康类的HarmonyOS应用的架构设计实践，提供常见的孕育健康咨询问答、健康日历记录、消息中心、社交互动圈、发帖编辑以及应用设置等功能，帮助开发者快速构建一款孕育健康类应用。

* ArkTS声明式UI开发范式。
* 按照应用设备形态，规划手机设备Entry类型HAP包。
* 本实践性能优先，应用程序包大小可控，且无单独加载模块场景，业务模块包类型采用HAR包。

## 应用布局

![](./img/1d2536e7.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 应用首页采用各类APP常见页面导航布局。 * 首页底部导航包含“主页”、“记录”、“社圈”、“我的”4个功能入口，分别对应4个功能模块（模块划分详见本实践软件视图）。 * 主页页面上部是站内信、搜索框、发帖按钮，接着下面是卡片功能按钮，再下面是社圈帖子列表。 * 记录页面记录经期、孕期、育儿中的经期、产检日、体重身高、宝宝疫苗等。 * 我的页面提供设置及个人信息等功能。 | ![](./img/2fd760b0.gif "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，常见孕育健康互动类应用功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分：

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 主页 | 站内信息、搜索框、发帖、卡片、状态按钮、社圈帖子信息流列表； |
| 记录 | 经期、孕期、育儿的经期、产检时间、宝宝体重/身高、疫苗本等信息记录； |
| 社圈 | 帖子信息流、转/评/赞/收藏功能、问答功能、活动等； |
| 我的 | 设置、个人信息、账号、昵称、模式切换等； |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本实践涉及一个手机端，包含页面框架、导航、手机设备独有资源等。

基础特性层：将"首页推荐"、"健康日历记录"、"社圈"、"消息"、"我的" 等功能模块设计为HAR包，被上层引用。

公共能力层：本实践将"应用路由"、"网络交互"、"数据库"、"DFX"等基础公共模块打包为HAR包被上层业务特性引用。

**图1** 软件视图

![](./img/ed16a53b.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/7e90f547.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 图文帖子信息流技术方案

**功能设计**

图文帖子信息流是孕育健康类行业常用的模块。常见页面路径：主页推荐->帖子，如下图所示：

**图3** 主页推荐帖子信息流功能

![](./img/71efee5c.png "点击放大")

**方案设计**

* 使用HarmonyOS长列表组件承载图文帖子信息流展示；
* 参考长列表加载性能优化最佳实践保障滑动加载性能，参考指导[优化长列表加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list)。

**代码参考**

代码参见[图文帖子信息流代码实现](#section677643523)。

### 健康记录日历技术方案

**功能设计**

健康记录日历是孕育健康类行业常用的模块。常见页面路径：主页->记录，如下图所示：

**图4** 健康记录日历功能

![](./img/2b0f8daa.png "点击放大")

**方案设计**

* 使用栅格组件绘制日历；
* 使用List组件嵌套子组件做记录功能列表。

**代码参考**

代码参见[健康记录日历代码实现](#section677643523)。

### 图文发帖技术方案

**功能设计**

图文发帖是孕育健康类行业社交常用的模块。常见页面路径：主页推荐->发帖，如下图所示：

**图5** 图文发帖功能

![](./img/34e061b7.png "点击放大")

**方案设计**

* 使用TextArea文本框。
* 使用Media Library Kit获取系统相册、获取系统相机添加图片。

**代码参考**

代码参见[图文发帖代码实现](#section677643523)。

## 应用框架代码

![](./img/70e73847.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

**框架代码中帖子内容是本地数据，开发者根据应用的业务自行替换相应部分为端云交互数据**。

### 代码运行环境

软件要求

* DevEco Studio版本：DevEco Studio 6.0.0 Release及以上。
* HarmonyOS SDK版本：HarmonyOS 6.0.0 Release SDK及以上。

硬件要求

* 设备类型：华为手机。
* HarmonyOS系统：HarmonyOS 6.0.0 Release及以上。

环境搭建

* 安装DevEco Studio，详情请参考[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

历史工程迁移

开发者使用HarmonyOS 6.0.0 Release及以上版本导入代码，使用一体化的[历史工程迁移能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/ide-integrated-project-migration-V14)，帮助开发者快速完成工程转换。

### 代码结构解读

本篇代码非应用的全量代码，只包括主要应用框架代码，开发者可以通过链接下载全量的框架代码。

整个框架代码结构分为多个HAR包，所有的HAR在同一个IDE工程中开发维护。

**图6** feature层集成的HAR列表
![](./img/4d4d12c0.png)

HAR分别为cloudCircle，mine，recommend，record。

```
├── common/src/main/ets                         // 公共模块
│   ├── components
│   │   ├── NavItem.ets                         // 自定义可跳转的ListItem组件
│   │   ├── PageHeaderComp.ets                  // 带返回按钮、标题名的子页面Header头组件
│   │   ├── SearchInputComp.ets                 // 搜索框组件
│   │   ├── ToggleComp.ets
│   │   ├── TopicLabelComp.ets                  // 自定义切换按钮组件
│   │   └── TopicListItem.ets                   // 帖子流ListItem组件
│   ├── constants                               // 公共组件常量
│   │   └── CommonConstants.ets
│   ├── model
│   │   ├── CommentModel.ets                    // 评论Model
│   │   ├── FriendCircleModel.ets
│   │   └── LazyDataSource.ets                  // 懒加载数据源
│   ├── pages
│   │   └── FriendCircleDetailPage.ets          // 帖子详情
│   └── utils
│       ├── BreakPointUtil.ets
│       ├── DropPostingPageUtil.ets
│       └── LoggerUtil.ets
├── entry/src/main/ets
│   ├── constants
│   │   └── Constants.ets
│   ├── entryability                            // 应用入口
│   │   └── EntryAbility
│   └── pages
│       ├── EntryPage.ets                       // 入口页
│       ├── FlashScreenPage.ets                 // 启动闪屏页
│       └── TabPage.ets                         // 主Tab页
└── features
    ├── cloudCircle/src/main/ets                // 社圈
    │   ├── components
    │   │   ├── Activity.ets                    // 社圈活动
    │   │   ├── Experience.ets                  // 社圈经验
    │   │   ├── QAndA.ets                       // 社圈问答
    │   │   └── Square.ets                      // 社圈广场
    │   ├── constants                           // 社圈常量
    │   │   └── Constants.ets
    │   ├── model
    │   │   ├── ActivityModel.ets               // 社圈活动model
    │   │   └── QAndAModel.ets                  // 社圈问答model
    │   └── pages
    │       └── CloudCircle.ets                 // 社圈页
    ├── mine/src/main/ets                       // 我的/应用设置
    │  ├── constants                            // 我的/应用设置 常量
    │  │   └── Constants.ets
    │  ├── model
    │  │   └── UserModel.ets                    // 我的/应用设置model
    │  └── pages
    │      ├── MinePage.ets                     // 我的页
    │      ├── SettingPage.ets                  // 应用设置页
    │      └── UserInfoPage.ets                 // 用户信息页
    ├── recommend/src/main/ets                  // 推荐
    │   ├── constants                           // 推荐 常量
    │   │   └── Constants.ets
    │   └── pages
    │       ├── MessagePage.ets                 // 消息中心页
    │       ├── PostingPage.ets                 // 发帖页
    │       └── RecommendPage.ets               // 推荐页
    └── record/src/main/ets                     // 健康日历记录 代码区
        ├── components
        │   └── CalendarComp.ets                // 定制日历组件
        ├── constants                           // 健康日历记录常量
        │   └── Constants.ets
        ├── model
        │   ├── CalendarModel.ets               // 定制日历Model
        │   ├── NavModel.ets                    // 经期/孕期/育儿List
        │   └── SpecialDayModel.ets             // 经期/孕期/育儿图例
        └── pages
            └── RecordPage.ets                  // 健康日历记录页
```

### 代码下载链接

[孕育健康类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170613.56601960630797112974972708357405%3A50001231000000%3A2800%3A0449893FEC509B487603D9E32246853FBBCA9ECC7A6E97DB9F7A3BE87F15D7B0.zip?needInitFileName=true)
