---
title: "政务办理应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-convenient-life-app-architecture-v1-0000001952539489
---

## 简介

本文档为便捷生活类（一卡通、政务云）HarmonyOS应用架构设计实践，提供常见的首页、办事、服务大厅、证件、社保、公积金、12345专区、身份码、账户设置等功能，帮助开发者快速构建一款便捷生活类应用。

* Stage开发模型+声明式UI开发范式。
* 应用只部署在手机端，规划一个Entry类型HAP包。
* 整体采用单HAP包+多HAR+多HSP包模式。其中，涉及按需加载、元服务复用的模块建议采用HSP（见下文说明），其他模块使用HAR包模式。
* 政务云对应用稳定性和端侧数据隐私安全要求高，围绕应用运行质量和端侧数据安全相关方案设计是重点。

## 应用布局

![](./img/92584582.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 首页采用各类APP常用的页面导航布局，底部导航tab，中间是内容专区，顶部是常用的菜单。 * 首页提供了扫一扫、身份识别、社保、居住证等功能。 * 办事页面提供了出行、养老、房产、就业等功能。 | ![](./img/6a736260.gif "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，常见便捷生活类（政务云）应用功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分：

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 首页 | 扫一扫、身份码、证件、办事专区、专题专区、客服 |
| 办事 | 指南、预约、进度、服务大厅和服务专区 |
| 互动 | 市长信箱、12345专区、问卷调查、投诉建议 |
| 我的 | 账号信息、安全中心、我的数据、我的证件、个人高频使用服务 |
| 通用 | 消息, 路由导航, H5容器 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本应用只涉及手机端，设计为一个HAP，包含页面框架、导航、手机独有资源等。

基础特性层：应用模块根据高内聚，低耦合原则，将功能进行模块化处理，例如，一个应用的底部导航栏中的每个选项都可能是一个独立的业务模块，应用也可以在此基础上再进一步划分。本应用将“账号”、“个人中心”、“扫一扫”、“消息”、“H5容器” 等功能模块打包为HAR包，被上层产品组件引用。也可将低频使用的“健康”等功能模块打包为HSP共享包，按需加载，减小政务云应用的包体积，或者用于元服务复用。

如果同时有元服务和应用两个版本开发，为了更好的实现资产复用，设计时需要注意如下约束：

1. 如果元服务是APP的功能子集，UI相同，只是功能做了裁剪，则直接复用APP工程裁剪打包成元服务。
2. 如果元服务和应用的UI不同、功能有部分差异，建议将公共功能部分尽量抽取成HAR包/HSP包，尽量做到资产复用。
3. 元服务大小有限制，单包小于2MB, 超过需要分包。
4. 元服务有高阶API使用约束，应用和元服务复用的模块（共享包HSP）需要使用元服务高阶API接口开发。

公共能力层：主要包括业务组件层公共依赖模块，如网络，支付，认证，登录和位置等，可以被业务组件层单向依赖。

**图1** 软件视图

![](./img/5862243c.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/83db66db.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 证件识别技术方案

**功能设计**

便捷生活类证件识别是常用的能力。常见页面路径：首页->证件->扫描证件：

* 扫描身份证。
* 上传图库的图片。

功能入口如下图所示：

**图3** 证件识别示意图

![](./img/2752a5e5.gif "点击放大")

**方案设计**

使用Vision Kit（场景化视觉服务）[卡证识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-cardrecognition)能力：对于需要填充卡证信息的场景，如身份证、银行卡信息等，可使用卡证识别控件读取OCR信息，将结果信息返回后进行填充。支持单独识别正面、反面，或同时进行双面识别。

**代码参考**

代码详情参见[证件识别代码实现](#section1568113210817)。

### 端侧数据安全存储方案

**功能设计**

便捷生活类涉及用户的手机号，姓名，身份证号码，公积金账号等短敏感数据，也涉及用户消息等长数据。

**方案设计**

HarmonyOS提供短敏感数据（不超过1KB）的安全存储[Asset Store Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-store-kit-overview)（关键资产存储开发套件）方案，其中短敏感数据可以是密码类（账号/密码）、Token类（应用凭据）、其他关键明文（如银行卡号）等长度较短的用户敏感数据。

业务希望对超长的数据提供保护时，可以考虑使用[通用密钥库系统](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-overview)或[加解密算法库框架](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-architecture-kit-intro)，对数据字段加密之后存储到数据库中。

**图4** 安全存储参考方案

![](./img/bd732b01.png "点击放大")

**代码参考**

代码参考[Asset Store Kit开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-arkts)。

## 行业创新设计

![](./img/3a2aac6f.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码。

### 信息直显和服务找人

**场景说明**

软硬协同近场触发，基于时间/空间卡片内容动态刷新，信息直显，实现服务找人，优化政务云用户体验。

**创新设计**

基于位置/行为习惯的卡片体验，服务找人。

**图5** 服务找人效果示意图

![](./img/a0895433.png "点击放大")

**实现方案**

* 接入[Live View Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-introduction)（实况窗）：支持应用将订单或者服务的实时状态信息变化在设备的关键界面展示，并对展示信息的生命周期、用户界面UI效果等进行管理。
* 接入[Intents Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-introduction)（意图框架服务）：意图框架能帮开发者将应用/元服务内的业务功能，智能分发到各系统入口。其中系统入口包括：小艺对话、小艺搜索、小艺建议等。
* 接入[Location Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-kit-intro)（位置服务）：通过定位服务能力，识别用户的位置。

## 应用框架代码

![](./img/56606ba9.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

**框架代码中登录验证模块，只是UI能力，手机号位数满足条件，任意密码可登录，开发者自行补齐相关校验**。

### 代码运行环境

软件要求

* DevEco Studio版本：DevEco Studio 5.0.5 Release及以上。
* HarmonyOS SDK版本：HarmonyOS 5.0.5 Release SDK及以上。

硬件要求

* 设备类型：华为手机。
* HarmonyOS系统：HarmonyOS 5.0.5 Release及以上。

环境搭建

安装DevEco Studio，详情请参考[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

### 代码结构解读

本篇代码非应用的全量代码，只包括脱敏后的应用框架代码，开发者可以通过链接下载全量的框架代码。

政务云骨架工程代码，采用分层分模块设计，通用的不涉及业务的功能放在common HAR包中。（util工具类，常量类，公共资源类）。业务强相关的公共模块作为独立的模块放在特性包中，主要包括：首页、消息、我的、网络、办事等。

* Common层：公共能力，包含数据管理，网络请求(network HAR)，工具等。

* Entry层：模块入口，包含toolbar数据UI界面展示。
* Home： 首页面，首页UI模型，首页模块常量，以及加载资源。
* Message：互动模块的资源管理文件，互动模块的常量，互动模块的UI模型。
* Mine：我的模块公共组件，我的模块常量，我的模块的模型，我的模块的页面，我的模块资源管理。
* Office：办事模块公共组件，办事模块常量，办事模块的模型，办事模块的页面，办事模块资源管理。
* RouterModel：Navigation HAR，配置全局的Navigation路由跳转。

```
├──common                                          // 公共模块
│  ├──common/constants
│  │  └──CommonConstants.ets                       // 公共样式
│  └──network/src/main/ets/compoents/mainpage
│     └──webPage.ets                               // 加载网页
├──entry/src/main/ets                              // 主页面
│  ├──entryability
│  │  └──EntryAbility.ets                          // 程序入口
│  ├──model
│  │  ├──DataType.ets                              // 底部导航栏model
│  │  └──TabBarData.ets                            // 底部导航栏数据
│  └──pages
│     └──Index.ets                                 // 程序主界面
└──features
    ├──home/src/main/ets                           // 首页
    │  ├──pages
    │  │  ├──ChequeSheetPage.ets                   // 账单页UI
    │  │  ├──CodePage.ets                          // 二维码生成
    │  │  ├──CredentialsPage.ets                   // 证件识别上传
    │  │  ├──HomePage.ets                          // 首页UI
    │  │  ├──RentingHousePage.ets                  // 租房UI界面
    │  │  ├──ResidencePermitPage.ets               // 居住证界面
    │  │  └──SocialSecurityPage.ets                // 社保账户界面
    │  ├──Util                                     // 工具类
    │  │  ├──AssetStore.ets                        // 关键资产存储
    │  │  ├──GlobalContext.ets                     // 全局Map 存储数据
    │  │  └──UtilTools.ets                         // 扫码能力工具
    │  └──viewmodle
    │     ├──BillsData.ets                         // 账单数据
    │     ├──BillsModel.ets                        // 账单model
    │     ├──ButtonData.ets
    │     ├──ItemData.ets                          // 首页数据
    │     ├──MainViewModel.ets                     // 首页model
    │     ├──RentingHouseData.ets                  // 房屋出租数据
    │     ├──RentingHouseModel.ets                 // 房屋出租model
    │     ├──SocialSecurityData.ets                // 社保账户数据
    │     └──SocialSecurityModel.ets               // 社保账户model
    ├──message/src/main/ets/pages                  // 消息
    │  └──MessagePage.ets                          // 消息首页
    ├──mine/src/main/ets                           // 我的
    │  ├──components
    │  │  └──mainpage
    │  │     ├──LoginPage.ets                      // 登录界面模型
    │  │     └──SecurityCenter.ets                 // 安全中心
    │  ├──modle
    │  │  ├──ItemData.ets
    │  │  └──MainViewModel.ets
    │  └──pages
    │     ├──MyPage.ets                            // 登录信息页
    │     └──TopPage.ets
    ├──office/src/main/ets
    │  ├──modle
    │  │  ├──ItemData.ets                          // 办公首页数据
    │  │  └──MainViewModel.ets                     // 办公页model
    │  └──page
    │     └──Office.ets                            // 办公页UI
    └──RouterModule/src/main/ets
       ├──constants
       │  └──RouterConstants.ets                   // 定义页面常量
       ├──model
       │  └──RouterModel.ets                       // 路由类
       └──utils
          ├──Logger.ets                            // 日志信息
          └──RouterModule.ets                      // 路由公共方法
```

### 证件识别代码实现

使用Vision Kit（场景化视觉服务）[卡证识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-cardrecognition)能力提供的卡证识别控件CardRecognition。

```
// features\home\src\main\ets\pages\CredentialsPage
CardRecognition({
  // 此处选择身份证类型作为示例 AUTO为自动识别
  supportType: CardType.CARD_ID,
  callback: (async (params: CallbackParam) => {
    if (params.code) {
      this.isClicked = false
    }
    let file = fs.openSync(params.cardInfo?.back.originalImageUri, fs.OpenMode.READ_ONLY)
    let imageSource = image.createImageSource(file.fd)
    this.chooseImage = await imageSource.createPixelMap()
    if (params.cardInfo?.front !== undefined && params.cardType) {
      this.cardDataSource.push(params.cardInfo?.front);
      this.cardType = cardTypeString(params.cardType)
      this.name = this.cardDataSource[0].name;
      this.idNumber = this.cardDataSource[0].idNumber;
    }
  })
})
```

### 代码下载链接

[便捷生活类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317194352.09714001297374605267590590803712%3A20260604121824%3A2800%3A8FB56647C7B0D3D3EBCA716B8E7BA8FEEFB75BA6F3DA2C29588AF7FDA2E08D53.zip?needInitFileName=true)
