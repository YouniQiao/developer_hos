---
title: "购物商城应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-purchase-app-architecture-v1-0000002077367333
---

## 简介

本文档为购物比价类HarmonyOS应用的架构设计实践，提供常见的商品列表、商品详情、购物车以及支付下单等功能，帮助开发者快速构建一款购物比价类应用。

* Stage开发模型+声明式UI开发范式。
* 基于自适应布局和响应式布局，实现购物应用在手机、折叠屏、平板等不同屏幕尺寸设备上按不同设计显示。
* 本实践性能优先，应用程序包大小可控，且无单独加载模块场景，业务模块包类型采用HAR包。

## 应用布局

![](./img/5d447638.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 应用首页采用常见页面导航布局，首页页面上部是搜索框及商品Banner轮播图，中间是快捷入口和商品列表瀑布流，瀑布流以卡片的形式展示，应用底部导航包含“首页”，“消息”，“购物车”，“我的”四个主要的功能入口。该页面通过自适应布局的均分、拉伸等能力实现搜索框、分类等布局，通过响应式布局的媒体查询、断点能力设置轮播图数、商品列表数，通过响应式布局的媒体查询，监听应用窗口宽度变化，获取当前应用所处的断点值设置商品列表列数和轮播图数，lg断点显示4列3张轮播图，md断点显示3列2张轮播图，sm断点显示2列1张轮播图。 * 点击商品列表中的商品卡片可以展开卡片，进入商品详情页。商品详情页整体由轮播图、商品信息、底部按钮栏组成，通过响应式布局能力的栅格布局，实现不同设备类型显示不同的效果，并通过自适应布局的拉伸能力，设置flexGrow属性使按钮位于底部。 * 购物车标签页，由购物车列表和商品列表组成，商品列表实现逻辑同主页的商品列表，购物车列表使用自适应布局的均分能力实现。 * 我的标签页主要由个人信息、我的订单、文字图片按钮，使用自适应布局的均分能力，Flex布局设置主轴上的对齐方式为FlexAlign.SpaceAround。 | ![](./img/5f6a91b7.webp "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，常见购物比价类应用功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分。

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 首页 | 轮播图、搜索、扫码、以图识物、商品列表 |
| 商品详情 | 分享、加入购物车、购买 |
| 购物车 | 查看商品、删除商品、修改数量 |
| 订单 | 详情、支付 |
| 我的 | 订单管理、收货地址、隐私声明、消息、关于、登录/退出 |
| 消息 | 查看消息、删除消息 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本实践设备包含手机/平板，由于功能完全相同，仅仅是UI不同，所以设计为一个HAP，包含页面框架、导航、资源等。

基础特性层：“首页”、“购物车” 等功能模块设计为HAR包，被上层引用。

公共能力层：本实践将“路由”、“基础工具”、“DFX”等基础公共模块打包为HAR包被上层业务组件引用，其中路由管理划分到公共组件。

**图1** 软件视图

![](./img/27d56d7a.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/d4cb6f63.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 自定义扫码

**功能设计**

商品条码、快递码和取件码扫码是购物比价类应用常见的能力。常见页面路径：首页-扫码，如下图所示：

**图3** 购物比价类应用扫码功能入口
![](./img/26ec0f44.png "点击放大")

**方案设计**

使用[Scan Kit（统一扫码服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-kit-guide)能力，本示例代码使用自定义界面扫码能力。自定义界面扫码能力提供了相机流控制接口，可根据自身需求自定义扫码界面，适用于对扫码界面有定制化需求的应用开发。

**表2** 方案对比参考

| 能力 | 限制条件 |
| --- | --- |
| scanBarcode (默认界面扫码) | 系统体验一致的扫码体验，系统预授权，暂不支持悬浮屏、分屏场景；相册扫码仅支持单码识别。 |
| customScan (自定义界面扫码) | 适用对扫码有定制需求的开发，需要授权使用相机权限；需要开发者自行实现扫码的人机交互界面。 |

**代码参考**

代码详情参见[商品扫码代码实现](#section1568113210817)。

### 以图识物

**功能设计**

以图识物是购物比价类应用常见的能力。常见页面路径：首页-以图识物，如下图所示：

**图4** 以图识物功能页面
![](./img/6d68362b.png "点击放大")

**方案设计**

使用HarmonyOS [Vision Kit（场景化视觉服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-kit-guide)中的AI识图能力，实现以图识物能力。AI识图是通过聚合OCR（Optical Character Recognition）、主体分割、实体识别、多目标识别等AI能力，提供场景化的文本识别、主体分割、识图搜索功能。

**代码参考**

代码详情参见[以图识物代码实现](#section149631440245)。

## 行业创新设计

![](./img/a907277f.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码。

### 地址信息智能填充

**场景说明**

收件人信息涉及到多个字段：所在区域、详细地址、收货人姓名和手机号。本创新能力能减少人工操作，通过多种方式智能填充收货人信息，方式一：读取剪贴板内容或者复制粘贴的方式自动识别收件人信息，方式二：根据用户输入，智能关联设备上历史表单输入、华为账号个人信息等提供输入建议，一键填充。

**图5** 复制粘贴方式智能填充收件人信息
![](./img/841151a8.png "点击放大")

**图6** 关联设备、华为账号个人信息等提供输入建议

![](./img/57d64143.png "点击放大")

**创新设计**

通过[Scenario Fusion Kit（融合场景服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-introduction)实现该创新能力。Scenario Fusion Kit（融合场景服务）基于ArkUI框架组件开发，提供跨多个子系统融合的场景化组件，降低开发者接入复杂度，确保体验统一。ArkUI一行核心代码启用，智能推荐输入建议，复杂表单一键填充。融合场景服务通过完善应用/元服务的系统开发能力，满足开发者在HarmonyOS系统下的服务闭环诉求。

## 应用框架代码

![](./img/959daa08.png)

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

历史工程迁移

开发者使用HarmonyOS 6.0.0 Release及以上版本导入代码，使用一体化的[历史工程迁移能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-project-migration)，帮助开发者快速完成工程转换。

### 代码结构解读

本篇代码非应用的全量代码，仅包含主要应用框架代码，开发者可以通过链接下载全量的框架代码。

整个框架代码结构分为9个HAR包，所有的HAR在同一个IDE工程中维护开发。

**图7** 项目HAR包
![](./img/c18b2fb7.png)

9个HAR分别为common，camera，commoditydetail，conversation，home，orderdetail， personal，search，shopcart。

```
├── common/src/main/ets                   // 公共模块
│   ├── components
│   │   ├── AddressFormPage.ets
│   │   ├── CommodityList.ets
│   │   ├── CounterProduct.ets
│   │   ├── EmptyComponent.ets
│   │   └── ShippingAddress.ets
│   ├── constants
│   │   ├── BreakpointConstants.ets
│   │   ├── CameraConstants.ets
│   │   ├── GridConstants.ets
│   │   └── StyleConstants.ets
│   ├── service
│   │   └── AlbumService
│   ├── utils
│   │   ├── BreakpointSystem.ets
│   │   ├── CommonDataSource.ets
│   │   ├── LocalDataManager.ets
│   │   ├── LocationManager.ets
│   │   ├── Logger.ets
│   │   └── Utils.ets
│   └── viewmodel
│       ├── CommodityModel.ets
│       ├── OrderModel.ets
│       ├── ProductModel.ets
│       └── ShopData.ets
├── features
│   ├── camera/src/main/ets                // 扫码/识图har
│   │   ├── components                     // camera组件
│   │   │   ├── CameraPage.ets
│   │   │   ├── CustomCamera.ets
│   │   │   ├── CustomScan.ets
│   │   │   └── SearchSimilarDialog.ets
│   │   └── service                        // camera服务
│   │       └── CameraService.ets
│   ├── commoditydetail/src/main/ets       // 商品详情har
│   │   ├── components                     // 商品详情组件
│   │   │   ├── CapsuleGroupButton.ets
│   │   │   ├── CommodityDetail.ets
│   │   │   ├── CommodityDetailPage.ets
│   │   │   └── SpecificationDialog.ets
│   │   ├── constant                       // 商品常量
│   │   │   └── CommodityConstants.ets
│   │   ├── utils                          // 工具类
│   │   │   └── ShareOperations.ets
│   │   └── viewmodel
│   │       ├── CommodityDetailData.ets
│   │       └── TypeModel.ets
│   ├── conversation/src/main/ets          // 消息页har
│   │   ├── components
│   │   │   ├── ButtonWithWaterRipples.ets
│   │   │   ├── ConversationDetail.ets
│   │   │   ├── ConversationDetailBottom.ets
│   │   │   ├── ConversationDetailItem.ets
│   │   │   ├── ConversationDetailNone.ets
│   │   │   ├── ConversationDetailTopSearch.ets
│   │   │   ├── ConversationItem.ets
│   │   │   ├── ConversationList.ets
│   │   │   ├── HomeTopSearch.ets
│   │   │   ├── IntroduceText.ets
│   │   │   ├── MessageBubble.ets
│   │   │   ├── NormalText.ets
│   │   │   ├── StandardIcon.ets
│   │   │   └── VoiceComponent.ets
│   │   ├── constant
│   │   │   └── HomeConstants.ets
│   │   ├── utils
│   │   │   └── Util.ets
│   │   └── viewmodel
│   │       ├── AudioRecorder.ets
│   │       ├── AVPlayer.ets
│   │       └── ConversationViewModel.ets
│   ├── home/src/main/ets                  // 首页har
│   │   ├── components
│   │   │   ├── AIImage.ets
│   │   │   └── Home.ets
│   │   ├── utils
│   │   │   └── PictureRecognize.ets
│   │   └── viewmodel
│   │       └── HomeData.ets
│   ├── orderdetail/src/main/ets            // 订单har
│   │   ├── components
│   │   │   ├── AddressInfo.ets
│   │   │   ├── CommodityOrderItem.ets
│   │   │   ├── CommodityOrderList.ets
│   │   │   ├── ConfirmOrder.ets
│   │   │   ├── ConfirmOrderPage.ets
│   │   │   ├── HeaderBar.ets
│   │   │   ├── OrderDetailList.ets
│   │   │   ├── OrderDetailListPage.ets
│   │   │   ├── OrderListContent.ets
│   │   │   ├── Payment.ets
│   │   │   ├── PayOrder.ets
│   │   │   └── PayOrderPage.ets
│   │   ├── constant
│   │   │   └── OrderDetailConstants.ets
│   │   └── viewmodel
│   │       └── OrderData.ets
│   ├── personal/src/main/ets                // 我的页har
│   │   ├── components
│   │   │   ├── IconButton.ets
│   │   │   ├── Personal.ets
│   │   │   └── Setting.ets
│   │   ├── constant
│   │   │   └── PersonalConstants.ets
│   │   └── viewmodel
│   │       ├── IconButtonModel.ets
│   │       └── PersonalData.ets
│   ├── search/src/main/ets                  // 搜索har
│   │   └── components
│   │       └── SearchPage.ets
│   └── shopcart/src/main/ets                // 购物车har
│       ├── components
│       │   └── ShopCart.ets
│       └── constant
│           └── ShopCartConstants.ets
└── product/phone/src/main/ets               // entry
        ├── constants
        │   └── PageConstants.ets
        ├── entryability
        │   └── EntryAbility.ets
        ├── pages
        │   ├── Index.ets
        │   ├── MainPage.ets
        │   └── SplashPage.ets
        └── viewmodel
            └── MainPageData.ets
```

### 商品扫码代码实现

使用[Scan Kit（统一扫码服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-kit-guide)实现扫码能力。本示例采用自定义界面扫码能力，支持对条形码、二维码等进行扫码识别，获得码类型、码值等信息。开发者集成自定义界面扫码能力可以自行定义扫码的界面样式。

```
// features\camera\src\main\ets\components\CustomScan.ets
XComponent({
  type: XComponentType.SURFACE,
  controller: this.mXComponentController
})
  .onLoad(async () => {
    // 获取XComponent组件的surfaceId
    this.surfaceId = this.mXComponentController.getXComponentSurfaceId();
    this.init();
  })
  .width(this.cameraWidth)
  .height(this.cameraHeight)
  .position({ x: this.offsetX, y: this.offsetY })
}
.height('100%')
.width('100%')

// features\camera\src\main\ets\components\CustomScan.ets
// 调用扫码接口实现实时扫码
initCamera() {
    hilog.info(0x0001, TAG, `start to initCamera.`);
    this.scanResult = [];
    let viewControl: customScan.ViewControl = {
      width: this.cameraWidth,
      height: this.cameraHeight,
      surfaceId: this.surfaceId
    };
    try {
      // 自定义启动第四步，请求扫码接口，通过Promise方式回调
      customScan.start(viewControl)
        .then(async (result: Array<scanBarcode.ScanResult>) => {
          hilog.info(0x0001, TAG, `result: ${JSON.stringify(result)}`);
          if (result.length) {
            // 解析码值结果跳转应用服务页
            this.scanResult = result;
            // 获取到扫描结果后暂停相机流
            await this.customScanStop();
            await this.customScanRelease();
            this.dialogController.open();
          }
        })
        .catch((err: BusinessError) => {
          hilog.error(0x0001, TAG, `Failed to start customScan. error: ${err}`);
        });
    } catch (error) {
      hilog.error(0x0001, TAG, `Failed to start customScan. Code: ${error.code}, message: ${error.message}`);
    }
  }
```

开发者需要申请相机权限，需要在配置文件module.json5里添加：ohos.permission.CAMERA，参见[应用权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions)。

### 以图识物代码实现

使用HarmonyOS [Camera Kit（相机服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-shooting)能力。

```
// features\camera\src\main\ets\components\CustomCamera.ets
// 调用相机服务接口实现自定义拍照识图
async init() {
  this.url = '';
  await CameraService.initCamera(this.surfaceId, this.getUIContext().getHostContext() as common.BaseContext, () => {
    this.dialogController.open();
  });
}

Column() {
  XComponent({
    type: XComponentType.SURFACE,
    controller: this.xcomponentController
  })
    .onLoad(async () => {
      this.surfaceId = this.xcomponentController.getXComponentSurfaceId();
      this.setDisplay(this.getUIContext());
      this.init();
    })
    .width(this.cameraWidth)
    .height(this.cameraHeight)
    .position({ x: this.offsetX, y: this.offsetY })
};
```

开发者可以基于此示例代码，使用[AI识图](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-imageanalyzer)能力，实现识图搜索功能。

### 代码下载链接

[购物比价类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260519105444.73663908245054488314590991741451%3A20260604152934%3A2800%3AB53AA5EDBEA6A3A18220E5E3DC0052387FED19887118E3738D8932D32E3175DF.zip?needInitFileName=true)
