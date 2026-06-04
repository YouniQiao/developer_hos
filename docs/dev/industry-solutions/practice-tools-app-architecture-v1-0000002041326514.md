---
title: "打印应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-tools-app-architecture-v1-0000002041326514
---

## 简介

本文档为实用工具类的HarmonyOS应用的架构设计实践，提供常见的打印机管理、打印(文档打印、照片打印、扫描打印等)、内容资料以及应用设置等功能，帮助开发者快速构建一款打印工具类应用。

* ArkTS声明式UI开发范式，打印功能为ArkTS、C++语言混合开发。
* 按照应用设备形态，规划手机、平板、2-in-1设备Entry类型HAP包。

## 应用布局

![](./img/36fff590.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 应用首页采用常见页面导航布局。 * 首页底部导航包含“打印”，“模板”，“我的”3个功能入口，分别对应3个功能模块（模块划分详见本实践软件视图）。 * 页面顶部为打印机添加/管理区域，中部排列文档打印、图片打印、扫描打印等功能卡片与打印机功能介绍和使用说明的轮播图。 * 模板页面提供各类打印内容模板，学习教育类：口算题卡、字帖练习、拼音练字、练习试卷、幼儿描红、课程表、技术白皮书等；办公商务类：合同、会议签到表、会议纪要表、礼品发放登记表等。 * 我的页面提供设置、登录信息、我的设备、打印记录、常见问题、使用帮助、账号与安全、意见反馈、关于等功能。 | ![](./img/5df97a3f.gif "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，常见实用工具打印类应用功能划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步调整细分。

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 打印 | 添加打印机/打印机设备管理，文档打印、图片打印、扫描打印等卡片功能按钮，打印机功能介绍、使用说明轮播图。 |
| 模板 | 各类打印内容模板，学习教育类(口算题卡、字帖练习、拼音练字、练习试卷、幼儿描红、课程表、技术白皮书等)；办公商务类(合同、会议签到表、会议纪要表、礼品发放登记表等)。 |
| 我的 | 设置、个人信息、账号、昵称、我的设备、打印记录、常见问题、使用帮助、账号与安全、意见反馈、关于等。 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本实践涉及手机端、平板端和2-in-1端，包含页面框架、导航等。

基础特性层：将“账号登录”、“打印机管理”、“打印功能”、“资料内容”等功能模块打包为HAR包被上层产品组件引用。

公共能力层：本实践将"WLAN蓝牙"、"网络交互"、"DFX"等基础公共模块打包为HAR包被上层业务特性引用。

**图1** 软件视图

![](./img/18d0f7bd.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/c4550504.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1-0000001944207793)。

## 行业关键技术方案

### 打印机管理技术方案

**功能设计**

打印机管理是实用工具行业常用的模块。常见页面路径：首页/添加打印机，如下图所示：

![](./img/12bbaea5.gif "点击放大") ![](./img/202c1879.png "点击放大") ![](./img/0ba4923d.png "点击放大")

**方案设计**

* 使用ArkTS调用C++ HarmonyOS打印机管理接口。
* 发现、添加、分享、删除打印机。
* 本实践支持一次开发多端部署，页面控件布局可参考[一次开发多端部署实践](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview)。

**代码参考**

代码参见[打印机管理代码实现](#section6470184511118)。

### 打印能力技术方案

**功能设计**

打印能力是实用工具打印工具行业常用的模块。常见页面路径：打印/文档打印，如下图所示：

![](./img/efad85fa.gif "点击放大") ![](./img/38ed3a2f.gif "点击放大") ![](./img/712afd5e.gif "点击放大") ![](./img/ceac0858.gif "点击放大")

**方案设计**

* 文档、图片打印使用ArkTS调用C++打印接口。
* 文档打印预览使用[Preview Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-kit-guide)。
* 图片打印使用[Image Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-kit)，[Media Library Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/medialibrary-kit)。
* 扫描打印使用[Vision Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-kit-guide)，扫描功能具体实现可参考[扫描提交作业](https://developer.huawei.com/consumer/cn/doc/architecture-guides/scan_submit_homework-0000002337721418)示例。

**代码参考**

代码参见[打印机管理代码实现](#section6470184511118)。

## 行业创新设计

![](./img/28f3a69d.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码。

### 编辑流转场景体验提升设计

**场景说明**

在图片打印场景，选择图片后，可以从手机流转到平板继续编辑。方案：使用[应用接续](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-cast)能力。

**创新设计**

使用[应用接续](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-cast)能力实现图片、文档从设备A流转到设备B继续编辑，实现从手机流转到有键盘、笔的平板，更方便编辑，编辑后再打印。

### 打印状态实况窗体验提升设计

**场景说明**

在打印场景，启动打印后，实况窗能实时展示打印状态，打印完成后可以在实况窗展示。方案：对接实况窗服务[Live View Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/live-view-kit-guide) 、推送服务[Push Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-kit-guide)推送实况窗信息。

![](./img/ee47a76e.gif "点击放大")

**创新设计**

使用实况窗服务[Live View Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/live-view-kit-guide) 、推送服务[Push Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-kit-guide)推送实况窗信息能力实现打印状态可在通知栏、状态栏、锁屏展示。

**代码参考**

代码参见[打印设备信息分享代码实现](#section6470184511118)。

## 应用框架代码

![](./img/6d8b3cf5.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

**框架代码中模板内容是本地数据，开发者根据应用的业务自行替换相应部分为端云交互数据**。

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

HAR分别为我的Mine，打印Print，模板Temp。

```
├── entry/src/main/ets
│   ├── entryability
│   │   └── EntryAbility.ets                 // 应用入口
│   ├── entrybackupability
│   │   └── EntryBackupAbility.ets
│   └── pages
│       ├── Index.ets                        // 入口页
│       └── Tabs.ets                         // 主Tab页
├── features
│   ├── Mine/src/main/ets/components         // 我的模块
│   │   └── MineMainPage.ets                 // 我的主页
│   ├── Print/src/main/ets                   // 打印模块
│   │   ├── components
│   │   │   ├── PrintCameraPage.ets          // 拍摄照片
│   │   │   ├── PrintConnectPage.ets         // 打印机搜索链接
│   │   │   ├── PrintDocxPage.ets            // 文档打印
│   │   │   ├── PrintEditImagePage.ets       // 图片编辑
│   │   │   ├── PrintMainPage.ets            // 首页主页
│   │   │   └── PrintSelectImgPage.ets       // 选择相册图片
│   │   ├── constant
│   │   │   └── CommonConstants.ts           // 打印模块常量
│   │   ├── utils                            // 打印工具类
│   │   │   ├── AdjustUtil.ts                // 饱和度
│   │   │   ├── CropUtil.ets                 // 裁剪
│   │   │   ├── DecodeUtil.ets               // 解码图片
│   │   │   ├── EncodeUtil.ets               // 编码图片
│   │   │   ├── LoggerUtil.ets               // 日志
│   │   │   └── OpacityUtil.ets              // 透明度
│   │   ├── view
│   │   │   └── AdjustContentView.ets        // 饱和度视图
│   │   ├── viewModel                        // 数据模型
│   │   │   ├── IconListViewModel.ets        // 编辑图片数据源
│   │   │   ├── MessageItem.ets              // 图片编解码模型类
│   │   │   ├── OptionViewModel.ts           // 图片类型
│   │   │   └── RegionItem.ets               // 裁剪坐标
│   │   └── workers
│   │       ├── AdjustBrightnessWork.ts      // 亮度worker
│   │       └── AdjustSaturationWork.ts      // 饱和度worker
│   └── Temp/src/main/ets                    // 打印模板
│       ├── components
│       │   ├── ContentsListPage.ets         // 模板详情
│       │   ├── PDFViewPage.ets              // PDF预览
│       │   ├── TablesListPage.ets           // 详情列表
│       │   └── TempMainPage.ets             // 模板主页
│       └── tools                            // 模板工具类
│           └── FilePreviewManager.ets       // 文件预览
│
└── common                                   // 公共代码
    ├── Basic/src/main/ets
    │   ├── components
    │   │   └── NavHeader.ets                // 通用导航
    │   ├── constants
    │   │   ├── BasicCommonConstants.ets     // 全局通用常量
    │   │   └── StyleConstants.ets           // 全局通用样式
    │   ├── Model
    │   │   └── ContentInfo.ets
    │   └── utils
    │       ├── BreakpointType.ets            // 多设备
    │       └── Logger.ets                    // 全局log
    └── NativePrint/src/main
        ├── Model
        │   ├──Constants.ets                  // 常量
        │   ├──Print.ets                      // 打印
        │   └──SelectionModel.ets             // 打印配置
        └── utils
            ├── HwLog.ets                     // 通用打印输出
            ├── PrintGlobalConstants.ets      // 通用打印常量
            ├── PrintManager.ets              // 通用打印管理
            └── PrintUtil.ets                 // 通用打印工具
```

### 代码下载链接

[实用工具类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260414142334.90105820448959275276972305541064%3A20260604145157%3A2800%3AC0A016B84CE3110D4324E7E11871D79827F1E282069AB9BF90683F6250E491BD.zip?needInitFileName=true)
