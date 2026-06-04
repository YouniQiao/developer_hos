---
title: "新闻资讯应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-news-app-architecture-v1-0000001938013088
---

## 简介

本文档为新闻阅读类HarmonyOS应用的架构设计实践，提供常见的新闻资讯展示、新闻视频播放、用户评论互动等功能，帮助开发者快速构建一款新闻阅读类应用。

* Stage开发模型+声明式UI开发范式。
* 按照应用设备形态，规划一个手机设备Entry类型HAP包。
* 本实践性能优先，应用程序包大小可控，且无单独加载模块场景，业务模块包类型采用HAR包。

## 应用布局

![](./img/f1548bc2.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 应用首页采用常见页面导航布局。 * 首页底部导航包含新闻、视频、直播、我的四个功能入口，分别对应四个功能模块。 * 新闻页面上部是新闻分类，包括：头条、体育、时政等，用户可以根据自己的喜好进行切换。 * 新闻详情页下方是用户互动区域，用户可以针对新闻进行评论、收藏、点赞、转发等。 * 我的页是用户账号管理，包括：用户账号登录，用户的评论记录、用户的收藏记录等。 | ![](./img/c35962ee.gif "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，常见新闻日报类应用功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分：

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 新闻 | 新闻列表、新闻详情、新闻分类等。 |
| 视频 | 视频列表、视频播放等。 |
| 直播 | 直播列表等。 |
| 我的 | 用户登录、账号管理，用户评论、点赞、收藏等。 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本实践只涉及手机端，设计为一个HAP，包含页面框架、导航、手机独有资源等。

基础特性层：“新闻”、“视频”、“直播”、“我的” 等功能模块设计为HAR包，被上层引用。

公共能力层：本实践将“账号”、“网络交互”、“DFX”等基础公共模块打包为HAR包被上层业务组件引用。

**图1** 软件视图

![](./img/c7d3c63d.png "点击放大")

## 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图
![](./img/66cdc669.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 上拉加载下拉刷新技术方案

**功能设计**

通过组件pullToRefresh实现下拉刷新页面，上拉加载更多数据效果。效果如图所示：

**图3** 上拉加载下拉刷新效果示意
![](./img/c62899d5.gif "点击放大")

**方案设计**

* 使用pullToRefresh组件，将列表组件、绑定的数据对象和scroller对象包含进去，并添加上滑与下拉方法。
* 支持LazyForEach的数据作为数据源，使用的List组件需要设置edgeEffect属性为(EdgeEffect.None)。

**代码参考**

代码详情参见[上拉加载下拉刷新实现](#section3250182303610)。

### 首页feed流技术方案

**功能设计**

通过懒加载实现首页feed流快速渲染与流畅滑动。效果如图所示：

**图4** 首页feed流效果示意
![](./img/1bd82f6c.gif "点击放大")

**方案设计**

新闻应用列表数据往往会达到上万条，针对这类大量数据加载的长列表应用，使用懒加载解决一次性加载长列表数据耗时长、占用过多资源的问题，可以提升页面响应速度，使用LazyForEach对子组件进行渲染。

**代码参考**

代码详情参见[首页feed流实现](#section623617151479)。

## 行业创新设计

![](./img/4f309a99.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码。

### 新闻资讯语音播报

**场景说明**

在新闻阅读页面，如果用户不方便看手机，可以点击语音播报按钮，通过听新闻的方式来了解新闻资讯信息。

**创新设计**

通过集成小艺智慧语音Speech Kit，在用户不方便或者无法查看屏幕文字的时候，为用户朗读新闻，提供资讯。

**图5** 新闻资讯语音播报示意图
![](./img/a58347e9.png "点击放大")

**代码参考**

代码详情参见[新闻资讯语音播报实现](#section610512141572)。

## 应用框架代码

![](./img/5f4e91d7.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

**框架代码中登录验证，只是UI能力，手机号输入满11位，任意密码可登录，开发者自行补齐相关鉴权认证**。

## 代码运行环境

软件要求

* DevEco Studio版本：DevEco Studio 5.0.5 Release及以上。
* HarmonyOS SDK版本：HarmonyOS 5.0.5 Release SDK及以上。

硬件要求

* 设备类型：华为手机。
* HarmonyOS系统：HarmonyOS 5.0.5 Release及以上。

环境搭建

* 安装DevEco Studio，详情请参考[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

历史工程迁移

开发者使用HarmonyOS 5.0.5 Release及以上版本导入代码，使用一体化的[历史工程迁移能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/ide-integrated-project-migration-V14)，帮助开发者快速完成工程转换。

### 代码结构解读

本篇代码非应用的全量代码，只包括脱敏后的应用的框架代码，开发者可以通过链接下载全量的框架的代码。

结构图中展示了应用的部分HAR模块结构。

整个框架代码结构分为多HAR，所有的HAR在同一个IDE工程中维护开发。

```
├── common/src/main/ets/
│   ├── components                                 // 基础组件
│   │   ├── CommonWeb.ets                          // 通用web
│   │   └── LocalList.ets                          // 本地生活列表组件
│   ├── constants                                  // 通用常量
│   │   ├── BreakpointConstants.ets                // 断点
│   │   ├── CommonConstants.ets                    // 通用样式
│   │   └── StyleConstants.ets                     // 通用样式
│   ├── preferences                                // 首选项
│   │   └── Preferences.ets                        // 首选项
│   ├── utils                                      // 通用工具类
│   │   ├── BreakpointSystem.ets                   // 断点系统管理
│   │   ├── BreakpointType.ets                     // 断点类型
│   │   ├── CommonDataSource.ets                   // 通用数据管理
│   │   ├── HttpUtil.ets                           // http请求
│   │   └── Logger.ets                             // 日志
│   └── viewmodel                                  // 数据模型
│       ├── LocalDataModel.ets                     // 本地生活model
│       ├── NewsData.ets                           // 新闻model
│       ├── NewsDataSource.ets                     // 新闻数据model
│       ├── VideoModel.ets                         // 视频model
│       └── ViewData.ets                           // 视频model
├── feature:
│   ├── live/src/main/ets/
│   │   └── components
│   │       └── Live.ets                           // 直播页
│   ├── news/src/main/ets/
│   │   ├── components
│   │   │   ├── AllClass.ets                       // 所有分类
│   │   │   ├── Comment.ets                        // 新闻评论
│   │   │   ├── PullToRefreshNews.ets              // 上拉加载下拉刷新
│   │   │   └── NewsContent.ets                    // 新闻详情
│   │   └── viewmodel
│   │       └── NewsModel.ets                      // 新闻model
│   ├── personal/src/main/ets/
│   │   ├── components
│   │   │   ├── MyComment.ets                      // 我的评论
│   │   │   └── Personal.ets                       // 个人中心
│   │   └── viewmodel
│   │       └── QuitLoginDialog.ets                // 退出登录弹窗
│   └── video/src/main/ets/
│       └── components
│           ├── VideoPage.ets                      // 视频页
│           └── VideoPlayer.ets
└── product/phone/src/main/ets/
    ├── constants
    │   ├── CommonConstants.ets                    // 页面常量
    │   └── PageConstants.ets                      // 页面常量
    ├── database
    │   ├── tables                                 // 主页model
    │   │   └── AccountTable.ets                   // 工具类
    │   └── Rdb.ets                                // rdb数据库
    ├── entryability
    │   └── EntryAbility.ets                       // 程序入口
    ├── entrybackupability
    │   └── EntryBackupAbility.ets
    ├── pages
    │   ├── LoginPage.ets                         // 登录页面
    │   ├── MainPage.ets                          // 首页
    │   ├── SplashPage.ets                        // 开屏页面
    │   └── VerifyPage.ets                        // 注册页面
    └── viewmodel
        ├── AccountInfo.ets                       // 页面常量
        ├── ConstantsInterface.ets                // 页面常量
        └── MainPageData.ets                      // 主页model
```

### 上拉加载下拉刷新实现

```
// features/news/src/main/ets/components/PullToRefreshNews.ets
PullToRefresh({
  data: $newsData,
  scroller: this.scroller,
  customList: () => {
    this.getListView();
  },
  onRefresh: () => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        this.newsData.clear();
        let newsModelMockData: ViewData[] = [];
        if (this.mockFlag) {
          newsModelMockData = getNews(MOCK_DATA_FILE_TWO_DIR);
        } else {
          newsModelMockData = getNews(MOCK_DATA_FILE_ONE_DIR);
        }
        this.mockFlag = !this.mockFlag;
        for (let j = CommonConstants.ZERO; j < NEWS_MOCK_DATA_COUNT; j++) {
          this.newsData.pushData(newsModelMockData[j]);
        }
        resolve(NEWS_RESOLVE_SUCCESS);
      }, NEWS_REFRESH_TIME);
    });
  },
  onLoadMore: () => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        let newsModelMockData: ViewData[] = getNews(MOCK_DATA_FILE_ONE_DIR);
        for (let j = CommonConstants.ZERO; j < NEWS_MOCK_DATA_COUNT; j++) {
          this.newsData.pushData(newsModelMockData[j]);
        }
        resolve(NEWS_RESOLVE_SUCCESS);
      }, NEWS_REFRESH_TIME);
    });
  },
  customLoad: null,
  customRefresh: null,
})
```

### 首页feed流实现

使用LazyForEach对子组件进行渲染：

```
// features/news/src/main/ets/components/PullToRefreshNews.ets
List({ space: CommonConstants.LIST_SPACE, scroller: this.scroller }) {
  this.CustomSwiper()
  this.FastNews()
  LazyForEach(this.newsData, (item: ViewData) => {
    ListItem() {
      newsItem({
        newsTitle: item.newsTitle,
        newsContent: item.newsContent,
        newsTime: item.newsTime,
        newsImage: item.newsImage
      })
        .onClick(() => {
          this.pageStack.pushPathByName("NewsContent", null)
        })
    }
    .backgroundColor($r('app.color.listViewColor'))
    .margin({
      bottom: $r('app.string.news_list_margin_bottom'),
      left: new BreakpointType($r('app.float.page_col_padding_sm'), $r('app.float.page_col_padding_md'),
        $r('app.float.page_col_padding_lg')).getValue(this.currentBreakpoint),
      right: new BreakpointType($r('app.float.page_col_padding_sm'), $r('app.float.page_col_padding_md'),
        $r('app.float.page_col_padding_lg')).getValue(this.currentBreakpoint),
    })
    .borderRadius($r('app.integer.news_list_border_radius'))
  }, (item: ViewData, index?: number) => JSON.stringify(item) + index);
}
.onScrollIndex((first: number) => {
  this.firstIndex = first;
})
```

### 新闻资讯语音播报实现

```
// features/news/src/main/ets/components/NewsContent.ets
private speak() {
  let extraParam1: Record<string, Object> =
    { "style": 'interaction-broadcast', "locate": 'CN', "name": 'EngineName' };
  let initParamsInfo: textToSpeech.CreateEngineParams = {
    language: 'zh-CN',
    person: 0,
    online: 1,
    extraParams: extraParam1
  };

  // 设置创建引擎参数
  let speakListener: textToSpeech.SpeakListener = {
    // 开始播报回调
    onStart(requestId: string, response: textToSpeech.StartResponse) {
      Logger.info(`onStart, requestId: ${requestId} response: ${JSON.stringify(response)}`);
    },
    // 完成播报回调
    onComplete(requestId: string, response: textToSpeech.CompleteResponse) {
      Logger.info(`onComplete, requestId: ${requestId} response: ${JSON.stringify(response)}`);
    },
    // 停止播报完成回调，调用stop方法并完成时会触发此回调
    onStop(requestId: string, response: textToSpeech.StopResponse) {
      Logger.info(`onStop, requestId: ${requestId} response: ${JSON.stringify(response)}`);
    },
    // 返回音频流
    onData(requestId: string, audio: ArrayBuffer, response: textToSpeech.SynthesisResponse) {
      Logger.info(`onData, requestId: ${requestId} sequence: ${JSON.stringify(response)} audio: ${JSON.stringify(audio)}`);
    },
    // 错误回调，播报过程发生错误时触发此回调
    // 未创建引擎时调用speak方法时返回错误码1003400007，合成及播报失败
    // 连续调用两次speak，第二次speak会返回错误码1003400006，服务正忙碌
    onError(requestId: string, errorCode: number, errorMessage: string) {
      Logger.error(`onError, requestId: ${requestId} errorCode: ${errorCode} errorMessage: ${errorMessage}`);
    }
  };

  // 调用createEngine方法
  textToSpeech.createEngine(initParamsInfo,
    (err: BusinessError, textToSpeechEngine: textToSpeech.TextToSpeechEngine) => {
      if (!err) {
        Logger.info('Succeeded in creating engine.');
        // 接收创建引擎的实例
        ttsEngine = textToSpeechEngine;
        // 设置回调
        ttsEngine.setListener(speakListener);
        // 设置播报相关参数
        let extraParam: Record<string, Object> = {
          "queueMode": 0,
          "speed": 1,
          "volume": 2,
          "pitch": 1,
          "languageContext": 'zh-CN',
          "audioType": "pcm",
          "soundChannel": 3,
          "playType": 1
        }
        let speakParams: textToSpeech.SpeakParams = {
          requestId: '123456789-b', // requestId在同一实例内仅能用一次，请勿重复设置
          extraParams: extraParam
        };
        // 调用speak播报方法
        ttsEngine.speak(this.webResult, speakParams);
      } else {
        // 创建引擎失败时返回错误码1003400005，可能原因：引擎不存在、资源不存在、创建引擎超时
        Logger.error(`Failed to create engine. Code: ${err.code}, message: ${err.message}.`);
      }
    });
};
```

### 代码下载链接

[新闻阅读类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225161636.15095587030058576728607139134312%3A50001231000000%3A2800%3AF242669C35CDFFCE5DE00B47F377C21377923D7645B9552344BD7CFB1E58D7F2.zip?needInitFileName=true)
