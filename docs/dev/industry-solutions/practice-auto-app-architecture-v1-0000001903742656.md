---
title: "汽车应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-auto-app-architecture-v1-0000001903742656
---

## 简介

本文档介绍汽车类HarmonyOS应用的架构设计实践，提供常见的资讯、购车、商城以及充电服务等功能，帮助开发者快速构建一款汽车类应用。

* Stage开发模型+声明式UI开发范式。
* 按照应用设备形态，规划一个手机设备Entry类型HAP包。
* 本实践性能优先，应用程序包大小可控，且无单独加载模块场景，业务模块包类型采用HAR包。

## 应用布局

![](./img/a6db734c.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 应用首页采用各类APP常见页面导航布局。 * 首页底部导航包含“探索”，“购车”，“商城”，“服务”，“我的”五个功能入口，分别对应五个功能模块（模块划分详见本实践软件视图）。 * 探索页面上部是热门汽车介绍Banner轮播图，中间是汽车资讯列表瀑布流。 * 购车页面提供车辆详细信息以及预约试驾等能力。 * 首页->服务->最优站点，基于位置提供最佳充电位置服务。 | ![](./img/8a75558e.gif "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，常见汽车类应用功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分：

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 探索 | 行业资讯 |
| 购车 | 产品详情，购车指南 |
| 商城 | 商品搜索，商品详情，商品购买 |
| 服务 | 充电服务，服务门店 |
| 我的 | 我的车辆，我的订单，我的积分，我的家充 |
| 通用 | 资源，国际化，导航 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本实践只涉及手机端，设计为一个HAP，包含页面框架、导航、手机独有资源等。

基础特性层：“探索”、“购车” 等功能模块设计为HAR包，被上层引用。

公共能力层：本实践将“应用路由”、“基础工具”、“DFX”等基础公共模块打包为Har包被上层业务组件引用，其中路由管理划分到公共组件。

**图1** 软件视图

![](./img/2f23eecd.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图
![](./img/c6443021.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 扫码充电技术方案

**功能设计**

扫码充电是汽车类行业的基础能力。应用充电服务，提供最优站点列表以及路径规划。常见页面路径：首页->服务->扫码充电，功能入口如下图所示：

**图3** 扫码充电功能入口
![](./img/79d0fe03.png "点击放大")

**设计**

使用[Scan Kit（统一扫码服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-kit-guide)实现扫码能力，本示例代码使用默认界面扫码能力。

**表2** 方案对比参考

| 能力 | 限制条件 |
| --- | --- |
| scanBarcode (默认界面扫码) | 系统体验一致的扫码体验，系统预授权，暂不支持悬浮屏、分屏场景，相册扫码只支持单码识别。 |
| customScan (自定义界面扫码) | 适用对扫码有定制需求的开发，需要授权使用相机权限；需要开发者自行实现扫码的人机交互界面。 |

**代码参考**

代码详情参见[扫码充电代码实现](#section1568113210817)。

### 最优站点技术方案

**功能设计**

提供最优站点列表以及路径规划。常见页面路径：首页→服务→最优站点，功能页面如下图所示：

**图4** 最优充电站点功能页面
![](./img/3c805f21.png "点击放大")

**方案设计**

* 使用HarmonyOS [Map Kit（地图服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-kit-guide)能力，应用无需集成SDK，不影响包大小，开发者不用考虑SDK升级。
* 使用Map Kit地图服务，首先要在AppGallery Connect配置使用相关API，参考指导[配置AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc)。

**代码参考**

申请ohos.permission.LOCATION和ohos.permission.APPROXIMATELY\_LOCATION权限，您需要在module.json5配置文件中声明所需要的权限，具体可参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。

代码详情参见[最优站点代码实现](#section149631440245)。

## 行业创新设计

![](./img/92d42487.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码。

### 导航体验提升设计

**场景说明**

最优站点页面，点击站点导航图标拉起导航类应用，导航应用单独一个界面。通用方案：使用**隐式wan****t**能力，启动设备内地图应用，多个应用时会弹出对话框显示多个应用图标，用户选择。如果本机没有安装地图导航应用，会有类似“请安装地图应用”提示，用户需要先下载导航应用，操作繁琐，体验差。

**创新设计**

利用[元服务](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service)免安装能力，导航元服务（相应元服务已上架）内嵌展示在应用内。在用户没有安装导航应用情况下，也能正常打开地图导航功能，实现导航能力。

**图5** 元服务内嵌效果示意图
![](./img/781530e5.png "点击放大")

## 应用框架代码

![](./img/0d49081b.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

**框架代码中的登录验证仅提供UI界面，手机号输入满11位后，任意密码均可登录，开发者需自行实现鉴权认证。**

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

本篇代码非应用的全量代码，只包括脱敏后的应用框架代码，开发者可以通过链接下载全量的框架代码。

整个框架代码结构分为5个HAR包，所有的HAR在同一个IDE工程中维护开发。

**图6** Entry集成的HAR列表
![](./img/5951f857.png)

5个HAR分别为buyingCar，explore，mine，service，shoppingMall。

```
├── common/src/main/ets                             // 公共模块
│   ├── components
│   │   ├── NavItem.ets                             // nav组件
│   │   ├── PageHeaderComp.ets                      // 二级页面头部组件
│   │   └── ShopItem.ets                            // shop组件
│   ├── constants
│   │   ├── CommonConstants.ets                     // 公共样式
│   │   ├── NavConstants.ets                        // nav样式
│   │   └── TabConstants.ets                        // tab样式
│   ├── model
│   │   ├── BuyingCarModel.ets                      // 购车数据模型
│   │   ├── CommodityModel.ets                      // 商城数据模型
│   │   ├── ExploreModel.ets                        // 探索数据模型
│   │   ├── LazyDataSource.ets                      // 懒加载数据
│   │   ├── NavModel.ets                            // nav数据模型
│   │   └── ShopModel.ets                           // shop数据模型
│   └── utils
│       ├── LoggerUtil.ets
│       ├── PermissionsUtil.ets                     // 权限管理工具类
│       └── PreferencesUtil.ets                     // 数据存储工具类
├── entry/src/main/ets                              // 主页面
│   ├── constants
│   │   └── TabConstants.ets                        // tab样式
│   ├── entryability
│   │   └── EntryAbility.ets                        // 程序入口
│   └── pages
│       ├── LoginPage.ets                           // 登录页
│       ├── NavigationPage.ets                      // Navigation根页面
│       ├── PrivacyPolicyPage.ets                   // 隐私政策页面
│       ├── SplashScreenPage.ets                    // 闪屏页
│       ├── SplashScreenPage2.ets                   // 闪屏页2
│       └── TabPage.ets                             // tab页
├── features
│   ├── buyingcar/src/main/ets                      // 购车
│   │   ├── components
│   │   │   ├── LearnMoreItemComp.ets                // 了解更多item组件
│   │   │   ├── MarqueeImageComp.ets                 // 走马灯图片
│   │   │   ├── SwiperItemComp.ets                   // 购车swiperItem组件
│   │   │   └── VehicleModelActivities.ets           // 车型item组件
│   │   └── pages
│   │       ├── BuyingCarDetailPage.ets
│   │       └── BuyingCarPage.ets                    // 购车tab页
│   ├── explore/src/main/ets                        // 探索
│   │   ├── components
│   │   │   ├── ActivityComp.ets                     // 活动swiper页
│   │   │   ├── ActivityItemComp.ets                 // 活动item组件
│   │   │   ├── RealTimeInfoComp.ets                 // 咨询swiper页
│   │   │   └── RecommendationComp.ets               // 推荐swiper页
│   │   ├── constants
│   │   │   └── RecommendationConstants.ets          // 探索tab页
│   │   └── pages
│   │       └── ExplorePage.ets
│   ├── mine/src/main/ets                           // 我的
│   │   ├── components
│   │   │   └── MajorList.ets                        // 单个组件
│   │   ├── constants
│   │   │   ├── HeaderConstants.ets                  // 头部样式
│   │   │   └── MajorConstants.ets                   // major样式
│   │   ├── model
│   │   │   └── MajorModel.ets                       // major模型
│   │   └── pages
│   │       ├── MinePage.ets                         // 我的tab页
│   │       └── SettingsPage.ets                     // 设置页面
│   ├── service/src/main/ets                        // 服务
│   │   ├── components
│   │   │   └── SheetTransition.ets                  // sheet模态框
│   │   ├── constants
│   │   │   └── ServiceConstants.ets                 // 服务样式
│   │   ├── model
│   │   │   └── StationModel.ets                     // station模型
│   │   ├── pages
│   │   │   ├── MyCharge.ets                         // 我的充电页
│   │   │   ├── OptimalStation.ets                   // 最优站点页
│   │   │   └── ServicePage.ets                      // 服务tab页
│   └── shoppingMall/src/main/ets                   // 商城
│       ├── components
│       │   └── CommodityItemComp.ets                // 商城列表item组件
│       ├── constants
│       │   └── ShoppingMallConstants.ets            // 商城样式
│       └── pages
│           ├── CommodityDetailPage.ets              // 商城详情
│           └── ShoppingMallPage.ets                 // 商城tab页
└── entry/src/main/resources                         // 资源文件目录
```

### 扫码充电代码实现

使用[Scan Kit（统一扫码服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-kit-guide)实现扫码能力。本示例采用默认的扫码能力，调用[默认界面扫码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-scanbarcode)接口能力，具备相机预授权，集成简单，适用于通用扫码场景。

```
// features\service\src\main\ets\pages\ServicePage.ets
Row() {
  ForEach(this.mapShopList, (item: shopInfo, index: number) => {
    Row() {
      ShopItem({ itemData: item })
    }.onClick(() => {
      if (item.title === '扫码充电') {
        // 定义扫码参数options
        let options: scanBarcode.ScanOptions = {
          scanTypes: [scanCore.ScanType.ALL], // 设置扫码类型，默认扫码ALL（全部码类型）
          enableMultiMode: true, // 是否开启多码识别，默认false。
          enableAlbum: true // 是否开启相册，默认true,  此参数只控制默认界面扫码能力中的相册扫码且只支持单码识别。
        };
        try {
          scanBarcode.startScanForResult(getContext(this), options).then((result: scanBarcode.ScanResult) => {
            // 收到扫码结果后返回
            Logger.info('Promise scan result: %{public}s', JSON.stringify(result));
            // 处理扫码结果
            this.showScanResult(result);
          }).catch((error: BusinessError) => {
            Logger.error('Promise error: %{public}s', JSON.stringify(error));
          });
        } catch (error) {
          Logger.error('failReason: %{public}s', JSON.stringify(error));
        }
      }
      if (item.title === '最优站点') {
        this.pageInfos.pushPath({ name: 'OptimalStation' });
      } else if (item.title === '我的充电') {
        this.pageInfos.pushPath({ name: 'MyCharge' });
      }
    })

    if (index !== this.mapShopList.length - 1) {
      Line().LineStyle();
    }
  })
}
.width(CommonConstants.COLUMN_WIDTH)
.justifyContent(FlexAlign.SpaceEvenly)
```

开发者也可调用customScan (自定义界面扫码)接口能力，自定义实现扫码界面，需要申请相机权限，需要在配置文件module.json5里添加：ohos.permission.CAMERA，参见[应用权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user)。适用于对扫码界面有个性化定制的场景。

### 最优站点代码实现

使用HarmonyOS [Map Kit（地图服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-kit-guide)能力。

配置相关权限entry\src\main\module.json5

```
"requestPermissions": [
  {
    "name": "ohos.permission.LOCATION",
    "reason": "$string:EntryAbility_desc",
    "usedScene": {
      "abilities": [
        "EntryAbility"
      ],
      "when": "always"
    }
  },
  {
    "name": "ohos.permission.APPROXIMATELY_LOCATION",
    "reason": "$string:EntryAbility_desc",
    "usedScene": {
      "abilities": [
        "EntryAbility"
      ],
      "when": "always"
    }
  }
]
```

使用MapComponent地图组件在页面中放置地图。MapComponentController是地图组件的主要功能入口类，用来操作地图，与地图有关的所有方法从此处接入。它所承载的工作包括：地图类型切换（如标准地图、空地图）、改变地图状态（中心点坐标和缩放级别）、添加点标记（Marker）、绘制几何图形(MapPolyline、MapPolygon、MapCircle)、各类事件监听等。

```
// features\service\src\main\ets\pages\OptimalStation.ets
@Entry
@Component
export struct OptimalStation {
  @StorageProp('avoidArea') topHeight: number = 0;
  private mapOption?: mapCommon.MapOptions;
  @State addressName: string = '';
  private callback?: AsyncCallback<map.MapComponentController>;
  private mapController?: map.MapComponentController;
  // 地图初始化经纬度，可自定义。
  private latLng: mapCommon.LatLng = {
    latitude: 31.97413747571286,
    longitude: 118.77314161376894
  }
  @State addressString: string = '';
  @Consume('pageInfos') pageInfos: NavPathStack;

  build() {
    NavDestination(){
      Stack({ alignContent: Alignment.Bottom }) {
        MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback }).width('100%').height('100%');
        // ...
        Row() {
          // 半模态框
          SheetTransition({
            StationList: Station.getStationList(),
            addressName: this.addressName
          })
        }.margin({ bottom: 220 })
      }
    }
    .hideTitleBar(true)
    .onReady(()=>{
      // 地图初始化参数，设置地图中心点坐标及层级
      this.mapOption = {
        position: {
          target: this.latLng,
          zoom: 14
        },
        zoomControlsEnabled: false,
        myLocationControlsEnabled: true
      };

      // 地图初始化的回调
      this.callback = async (err, mapController) => {
        if (!err) {
          // 获取地图的控制器类，用来操作地图
          this.mapController = mapController;
          // 启用我的位置图层
          this.mapController?.setMyLocationEnabled(true);
          this.mapController.on("mapLoad", () => {
          });
          // 监听“我的位置”按钮点击事件
          this.mapController.on("myLocationButtonClick", () => {
            this.getMyLocation();
          });
          // 初始化我的位置
          this.getMyLocation();
        }
      };
    })
  }
}
```

由于框架示例代码访问API受限，目前最优站点列表数据来源是本地数据，数据文件位置：features>service src/main/ets/model/StationModel.ets。

开发者可以基于此示例代码，使用[位置搜索](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location-services)能力，查找相关POI，根据响应替换本地数据，在此基础上，根据响应使用[地图绘制能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-drawing)，在地图上设置图标，效果更佳。

### 代码下载链接

[汽车类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164614.59728321796201591235746347859911%3A50001231000000%3A2800%3A421374BEAF065FA8A202F6C4B08F9C36D8F5B271402D109A4E55C3CAFF65A6CC.zip?needInitFileName=true)
