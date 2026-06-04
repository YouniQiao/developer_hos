---
title: "教育培训应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-educate-app-architecture-v1-0000001904563108
---

## 简介

本文档为教育类HarmonyOS应用架构设计实践，提供教育类应用常见的图文学习、音视频学习、考试等功能，帮助开发者快速构建一款教育类应用。

* Stage开发模型+声明式UI开发范式。
* 应用设备形态只有手机端，规划一个Entry类型HAP包。
* APP大小可控，性能优先，无单独加载模块，模块全部采用HAR包。

## 应用布局

![](./img/6e656ac2.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 首页采用各类APP常用的页面导航布局，底部通过[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-tabs)组件设置导航样式。 * 行业特色功能页面，如：课程展示、课程学习、学习进度跟踪、考试练习等。 * 课程展示：根据不同的分类，通过列表、宫格的形式展示可学习的课程。 * 课程学习：查看课程相关的内容，包含图文课程或音视频课程。 * 考试练习：提供题目进行在线考试，包含考试时间等。 | ![](./img/2e4df0c2.png "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，常见应用功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分：

**表1** 模块划分

| **模块名称** | **功能点** |
| --- | --- |
| 首页 | 入口页面，包含banner轮播图、培训入口、通知入口 |
| 我的培训 | 培训列表、培训详情、课程学习、课程考试 |
| 在线帮助 | 系统通知信息 |
| 我的 | 账号注册登录、我的课程、我的考试等 |
| 通用 | 资源、国际化、导航 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本实践只涉及手机端，设计为一个HAP，包含页面框架、导航、手机独有资源等。

基础特性层：“首页”、“培训”、“消息” 等功能模块设计为HAR包，被上层产品定制层引用。

公共能力层：“应用路由”、“基础工具”、“DFX”等基础公共模块设计为HAR包被上层业务组件引用，其中路由管理划分到公共组件。

**图1** 软件视图

![](./img/64158d0e.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/c53e47e7.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 视频播放技术方案

**功能设计**

视频播放是教育学习应用的基础能力，常见页面路径：首页->我的培训->培训详情->课程详情，功能入口如下图所示：

**图3** 课程详情

![](./img/bb4d8cd0.gif "点击放大")

**方案设计**

* 使用HarmonyOS [Media Kit（媒体服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit-intro)的[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-playback)能力，设置播放资源，设置播放参数（音量/倍速），播放控制（播放/暂停/上一个视频/下一个视频），重置，销毁资源。
* 视频播放之前需要初始化[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件用于展示视频画面。XComponent组件初始化成功之后在onLoad()中获取surfaceID用于与AVPlayer实例关联。

**代码参考**

本实践方案使用了网络视频播放功能，配置文件module.json5里添加网络权限：ohos.permission.INTERNET。

代码详情参见[视频播放代码实现](#section1568113210817)。

### 在线考试技术方案

**功能设计**

在线考试是教育学习应用的基础能力，常见页面路径：首页->我的培训->培训详情->考试，功能入口如下图所示：

**图4** 在线考试功能页面

![](./img/9048be7a.gif "点击放大")

**方案设计**

* 进入考试后，需要开始考试倒计时，使用HarmonyOS的[TextTimer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer)组件实现考试倒计时能力，倒计时结束自动结束考试
* 在考试中，退出考试后，需要记录剩余考试时间，再次进入考试后，从剩余时间继续倒计时，剩余时间记录可以使用HarmonyOS的应用级状态存储[AppStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-appstorage)。

**代码参考**

代码详情参见[在线考试代码实现](#section149631440245)。

## 行业创新设计

![](./img/3417fdf4.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码。

### 服务卡片考试提醒

**场景说明**

教育学习类应用下发学习、考试任务时，用户不主动打开App只能通过Push消息提醒，通过服务卡片的开发，引导用户添加桌面，通过卡片提醒用户完成学习和考试。

**创新设计**

通过服务卡片添加桌面能力，[定时刷新](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-interaction)和[Push消息刷新](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-form-update)的机制，及时更新考试学习，提醒学习。

**图5** 桌面服务卡片效果示意图
![](./img/f3a1a7f6.png "点击放大")

**实现方案**

使用HarmonyOS[服务卡片能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-form-overview)。

## 应用框架代码

![](./img/e94112d3.png)

本篇代码非应用全量代码，只包括应用部分框架代码。

**框架代码中登录验证模块，只是UI能力，手机号位数满足条件，任意密码可登录，开发者自行补齐相关校验**。

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

本篇代码非应用全量代码，只包括脱敏后的应用框架代码，开发者可以通过链接下载全量的框架代码。

整个框架代码所有的HAR包在同一个IDE工程中维护开发。

结构图中展示了应用的全部HAR模块结构。

* common是负责公共模块的内容，包含公共组件样式和一些字体大小定义。
* home是首页HAR包目录，包含的是首页相关组件和业务处理。
* mine是我的模块HAR包，包含个人信息操作，课程，考试，错题等模块。
* online是消息相关HAR包，包含消息列表和详情web页面。
* train是培训HAR包，包含培训课程，详情，视频播放等内容。

```
├──common/basic/src/main/ets                          // 公共模块
│  ├──constants
│  │  ├──CommonConstants.ets                          // 公共样式
│  │  └──StyleConstants.ets                           // 常用宽高样式
│  ├──resources
│  │  └──ResManager.ets                               // 公共模块导出资源
│  └──utils
│     ├──BreakpointUtil.ets
│     ├──Logger.ets
│     ├──MyGlobalContext.ets
│     └──PreferencesUtil.ets
├──entry/src/main/ets                                 // 主页面
│  ├──entryability
│  │  └──EntryAbility.ets                             // 程序入口
│  ├──pages
│  │  ├──Index.ets                                    // 首页配置tabBar
│  │  └──Tab.ets                                      // 自定义tab页
│  └──viewmodel
│     └──ConstantsInterface.ets
├──features
│  ├──home/src/main/ets                               // 首页
│  │  ├──secondary                                    // 二级跳转页面
│  │  │  ├──HomePage.ets                              // 首页组件
│  │  │  └──JumpPage.ets                              // 模板列表页
│  │  ├──utils
│  │  │  └──Calc.ets
│  │  └──views
│  │     ├──BreakpointUtil.ets
│  │     ├──CommonConstants.ets
│  │     ├──HomeView.ets
│  │     ├──HomeViewModel.ets                         // 首页数据模型
│  │     └──SecondView.ets
│  ├──login/src/main/ets
│  │  ├──common
│  │  │  ├──constants
│  │  │  │  └──AccountConstants.ets
│  │  │  └──resources
│  │  │     └──ResManager.ets
│  │  ├──constants
│  │  │  └──StyleConstants.ets
│  │  ├──dialog
│  │  │  └──DistrictTownDialog.ets
│  │  ├──viewmodel
│  │  │  ├──AccountInfo.ets
│  │  │  └──ConstantsInterface.ets
│  │  └──views
│  │     ├──LoginView.ets
│  │     ├──LogoutNextView.ets
│  │     ├──LogoutView.ets
│  │     ├──ModifyPasswordView.ets
│  │     ├──PolicyAgreement.ets
│  │     └──RegisterView.ets
│  ├──mine/src/main/ets                               // 我的
│  │  ├──utils
│  │  │  └──Calc.ets
│  │  ├──viewmodel
│  │  │  ├──MineCourseListModel.ets                   // 我的课程模型
│  │  │  ├──MineErrorModel.ets                        // 我的错题模型
│  │  │  ├──MineListModel.ets                         // 我的页面模型
│  │  │  ├──MineLocalData.ets                         // 我的本地数据
│  │  │  ├──MineOnlineTestModel.ets                   // 考试模型
│  │  │  └──MineSetListModel.ets                      // 设置数据模型
│  │  └──views
│  │     ├──LogoutDialog.ets                          // 退出登录弹窗
│  │     ├──MineCoursePage.ets                        // 课程
│  │     ├──MineErrorPage.ets                         // 错题
│  │     ├──MineModiPersonPage.ets
│  │     ├──MineOnlineTestPage.ets
│  │     ├──MinePage.ets                              // 我的tab页
│  │     ├──MineSetPage.ets                           // 设置页面
│  │     ├──MineStartTestPage.ets
│  │     ├──MineTestResPage.ets
│  │     └──MineTrainPage.ets                         // 培训
│  ├──online/src/main/ets                             // 消息
│  │  ├──utils
│  │  │  └──Calc.ets
│  │  ├──viewmodel
│  │  │  ├──OnlineListModel.ets                       // 消息模型类
│  │  │  └──OnlineLocalData.ets                       // 消息本地数据
│  │  └──views
│  │     └──OnlineIndexView.ets
│  └──train/src/main/ets                              // 培训
│     ├──common
│     │  └──constants
│     │       └──TrainConstants.ets
│     ├──pages
│     │  ├──CourseDetailPage.ets                      // 课程详情
│     │  ├──ExaminationDetailPage.ets                 // 考试页面
│     │  ├──Index.ets                                 // 培训首页
│     │  └──TrainDetailPage.ets                       // 培训详情
│     ├──utils
│     │  └──Calc.ets
│     ├──view
│     │  ├──AVPlayerDemo.ets                          // 播放组件
│     │  ├──Course.ets                                // 课程组件
│     │  ├──CourseEvaluate.ets                        // 评价组件
│     │  ├──CourseIntroduce.ets                       // 介绍组件
│     │  ├──CourseList.ets                            // 课程列表组件
│     │  ├──Empty.ets                                 // 无数据组件
│     │  ├──Examination.ets
│     │  ├──Introduction.ets
│     │  └──TrainListPage.ets                         // 培训列表组件
│     └──viewmodel
│        ├──ExaminationInfoModel.ets                  // 考试本地数据
│        ├──NavInfoModel.ets                          // 导航传参
│        └──TrainInfoModel.ets                        // 培训数据
└──entry/src/main/resources                           // 资源文件目录
```

### 视频播放代码实现

使用HarmonyOS [Media Kit（媒体服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/media-kit-intro)的[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-playback)能力，配合XComponent实现自定义播放在线视频功能，需要网络授权，集成简单，适合通用网络视频播放能力。它所承载的工作包含视频倍速播放、视频快进、视频暂停、视频播放进度监听等。

```
// features/train/src/ets/view/AVPlayerDemo.ets
createAVPlayer() {
  media.createAVPlayer().then((video: media.AVPlayer) => {
    if (video != null) {
      this.avPlayer = video;
      this.setAVPlayerCallback(this.avPlayer);
      if (this.avPlayer) {
        // 当前链接为参考链接
        this.avPlayer.url =
          `https://www-file.huawei.com/-/media/corporate/minisite/hc2024/v4/videos/highlights/huawei-connect-2024-summary-cn-1080p.mp4`; // 示例，参考链接
      }
    } else {
    }
  }).catch((error: BusinessError) => {
  });
}

// features/train/src/ets/view/AVPlayerDemo.ets
Stack() {
  if (!this.isPlay) {
    Image($r('app.media.ic_public_play'))
      .width(50)
      .height(50)
      .zIndex(2)
      .onClick(() => {
        this.play();
      });
  }

  Column() {
    Stack({ alignContent: Alignment.TopStart }) {
      XComponent({
        id: '',
        type: XComponentType.SURFACE,
        libraryname: '',
        controller: this.xComponentController
      })
        .onLoad(() => {
          this.xComponentController.setXComponentSurfaceSize({
            surfaceWidth: 1920,
            surfaceHeight: 1080
          });
          this.surfaceID = this.xComponentController.getXComponentSurfaceId();
        })
        .width('100%')
        .height('100%')
        .onClick(() => {
          this.iconOnclick();
        })
    }
  }
  .zIndex(1)
  .onClick(() => {
    this.playOrPause();
  })
}
```

### 在线考试代码实现

使用ArkUI基础组件[TextTimer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer)组件实现倒计时功能，记录答题者考试时间。

```
// features/mine/src/ets/views/MineStartTestPage.ets
TextTimer({ isCountDown: true, count: this.count, controller: this.textTimerController })
  .format(this.format)
  .fontColor(Color.Black)
  .fontSize(30)
  .onTimer((utc: number, elapsedTime: number) => {
    this.elapsedTime = this.count - elapsedTime * 1000;
    if (elapsedTime * 1000 === this.count) {
      // 倒计时结束
      this.submit(true);
    }
  })
  .onAppear(() => {
    this.textTimerController.start();
  })
  .onDisAppear(() => {
    // 页面切换，保存当前的值
    if (!this.isSubmitted) {
      AppStorage.setOrCreate('MyCount', this.elapsedTime);
    } else {
      AppStorage.setOrCreate('Score', 0);
    }
  });
```

考试时间结束会自动交卷等逻辑操作：

```
// features/mine/src/ets/views/MineStartTestPage.ets
submit(force: Boolean): void {
  if (force) {
    this.isSubmitted = true;
    this.pathStack.pushPathByName('MineTestResPage', null);
    for (let i = 1; i <= this.questionData.length; i++) {
      if (this.getValueByKey(i.toString()) === this.questionData[i-1].rightQues) {
        this.score += 10;
      }
    }
    for (let i = 0; i < ERROR_MODELS.length; i++) {
      ERROR_MODELS[i].answer = 0;
    }
    this.textTimerController.reset();
    AppStorage.setOrCreate('MyCount', 0);
    AppStorage.setOrCreate('Score', this.score);
    AppStorage.setOrCreate('Time', EXAM_DURATION);
  } else {
    if (this.currentIndex >= ERROR_MODELS.length - 1) {
      this.tjDialog.open();
      return;
    }
    this.currentIndex += 1;
    this.currentModel = ERROR_MODELS[this.currentIndex];
  }
}
```

### 代码下载链接

[教育类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164920.69150570369157029191415086664399%3A50001231000000%3A2800%3A4FA68EBE245AA42FA820284DD32CC4009BB26EE554D0920E7001A0FAD9E3CD0A.zip?needInitFileName=true)
