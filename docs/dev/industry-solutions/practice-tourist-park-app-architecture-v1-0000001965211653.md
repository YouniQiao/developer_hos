---
title: "旅游住宿应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-tourist-park-app-architecture-v1-0000001965211653
---

## 简介

本文档为旅游园区类HarmonyOS应用的架构设计实践，提供常见的在线预订门票、酒店、停车、餐饮、园区路线导航、商城以及最新官方资讯等功能，帮助开发者快速构建一款旅游园区类应用。

* Stage开发模型+声明式UI开发范式。
* 应用设备形态只有手机端，规划一个Entry类型HAP包。
* APP大小可控，性能优先，无单独加载模块，模块全部采用HAR包。

## 应用布局

![](./img/35c780eb.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 应用首页采用常用的页面导航布局。 * 首页底部导航包括“首页”、“游园”、“地图”、“我的”四个功能入口。 * 首页页面上部是园区海报图，中间是功能入口和园区公告列表。 | ![](./img/e803e566.gif "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，常见应用功能以及职责划分如下，开发者在实际设计过程中，可以根据模块功能的复杂程度实际情况再进一步细分：

**表1** 模块划分

| **模块名称** | **功能点** |
| --- | --- |
| 首页 | 门票、年卡、酒店、餐饮、停车、商城 |
| 游园 | 路线推荐、乐园资讯、商品推荐 |
| 地图与导航 | 项目地图与导航、项目详情 |
| 我的 | 账户、个人信息、会员、消息中心、我的订单、我的收藏、我的提醒、客服、设置 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本应用只涉及手机端，设计为一个HAP，包含页面框架、导航、手机独有资源等。

基础特性层：“游园”、“我的” 等功能模块打包为HAR包，被上层产品组件引用。

公共能力层：本应用将“基础工具”、“DFX”等基础公共模块打包为HAR包被上层业务组件引用，其中路由管理划分到公共组件。

**图1** 软件视图

![](./img/5cfe0b44.png "点击放大")

## 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/060182b4.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 园区地图

**功能设计**

* 生成园区整体地图，标记各个项目位置。
* 定位用户位置，进行路径规划，或导航到特定项目。

**方案设计**

* 使用[Map Kit（地图服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-kit-guide)实现标记园区区域、标记项目点、路径规划和导航能力。

  ![](./img/6f097764.png)

  + 需在AGC配置应用，并在model.json5中修改应用ID后开启地图服务才能够正常看到地图；
  + 无法加载地图可能原因：无网络、未完成基本准备工作及指纹配置、未配置Client ID、未开通地图权限或应用身份校验失败等。
* 使用[Location Kit（位置服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-kit)实现定位功能。定位功能需要在module.json5添加权限ohos.permission.LOCATION，可以获取到精准位置，精准度在米级别。

**代码参考**

代码详情参见[园区地图代码实现](#section1521332143011)。

## 应用框架代码

![](./img/fd6c762d.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

**框架代码中登录验证，只是UI能力，手机号输入满11位，任意密码可登录，开发者自行补齐相关鉴权认证**。

## 代码运行环境

软件要求

* DevEco Studio版本：DevEco Studio 5.0.1 Release及以上。
* HarmonyOS SDK版本：HarmonyOS 5.0.1 Release SDK及以上。

硬件要求

* 设备类型：华为手机。
* HarmonyOS系统：HarmonyOS 5.0.1 Release及以上。

环境搭建

* 安装DevEco Studio，详情请参考[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

历史工程迁移

开发者使用HarmonyOS 5.0.1 Release及以上版本导入代码，使用一体化的[历史工程迁移能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/ide-integrated-project-migration-V14)，帮助开发者快速完成工程转换。

### 代码结构解读

本篇代码非应用的全量代码，只包括脱敏后的应用框架代码，开发者可以通过链接下载全量的框架代码。

整个框架代码结构分为多个HAR包，所有的HAR在同一个IDE工程中维护开发。

**图3** features层集成的HAR列表
![](./img/e7713dda.png)

features层的HAR分别为AccountCenter，home，MapService，ParkService，PersonalCenter。

```
├── common/src/main/ets
│   ├── components                            // 基础组件
│   │   └── LocalList.ets                     // 本地生活列表组件
│   ├── constants                             // 通用常量
│   │   ├── BreakpointConstants.ets           // 断点
│   │   ├── CommonConstants.ets               // 通用样式
│   │   ├── PageConstants.ets                 // 初始页面管理
│   │   └── StyleConstants.ets                // 全局常量管理
│   ├── database                              // 数据库相关
│   │   ├── tables                            // 主页model
│   │   │   └── AccountTable.ets              // 账户表
│   │   └──Rdb.ets                            // RDB数据库操作
│   ├── utils                                 // 通用工具类
│   │   ├── BreakpointSystem.ets              // 断点系统管理
│   │   ├── CommonDataSource.ets              // 通用数据管理
│   │   └── Logger.ets                        // 日志统一管理
│   └── viewmodel                             // 数据模型
│       ├── AccountInfo.ets                   // 账户model
│       ├── ConstantsInterface.ets            // 账户表model
│       ├── LocalDataModel.ets                // 本地生活model
│       └── MemberShipData.ets                // 交互数据源model
├── feature
│   ├── AccountCenter/src/main/ets
│   │   └── components
│   │       └── LoginPage.ets                 // 登录页面
│   ├── Home/src/main/ets
│   │   ├── components
│   │   │   ├── CustomDialogExample.ets      // 自定义弹窗
│   │   │   ├── Home.ets                     // 首页
│   │   │   └── Notice.ets                   // 运营公告
│   │   └── viewmodel
│   │       └── HomeData.ets                 // 首页数据
│   ├── MapService/src/main/ets
│   │   └── components
│   │       ├── MainPage.ets                 // 跳转华为地图
│   │       └── MapPage.ets                  // 地图页
│   ├── ParkService/src/main/ets
│   │   ├── components
│   │   │   ├── CardPage.ets                 // 卡包页
│   │   │   ├── ParkVisiting.ets             // 游园页
│   │   │   └── TravelTips.ets               // 旅游攻略页
│   │   └── viewmodel
│   │       └── ParkingVistingData.ets       // 游园数据
│   └── personalcenter/src/main/ets
│       ├── components
│       │   ├── AboutApp.ets                 // 关于页
│       │   ├── AppSettingPage.ets           // 设置页
│       │   ├── MessagePage.ets              // 消息页
│       │   ├── Personal.ets                 // 个人中心
│       │   └── PersonalCenter.ets           // 个人中心二级页面
│       └── viewmodel
│           ├── IconButtonModel.ets          // 通用model
│           ├── MineListModel.ets            // 个人数据model
│           ├── PersonalData.ets             // 个人中心model
│           └── QuitLoginDialog.ets          // 退出登录弹窗
└── phone/src/main/ets
    ├── entryability
    │   └── EntryAbility.ets
    ├── pages
    │   ├── MainPage.ets                      // 首页
    │   └── SplashPage.ets                    // 开屏页面
    ├── utils
    │   ├── GlobalContext.ets                 // 工具类
    │   └── PreferencesUtil.ets               // 工具类
    └── viewmodel
        └── MainPageData.ets                  // 主页model
```

### 园区地图代码实现

地图包括标记园区区域、标记项目点、路径规划、定位、导航功能。使用Map Kit的主要功能入口类MapComponentCotroller，接入地图功能。

标记园区区域功能是使用addPolygon接口在地图上添加一个多边形，传入区域顶点经纬度坐标。

```
// features/MapService/src/main/ets/components/MapPage.ets
let polygonOptions: mapCommon.MapPolygonOptions = {
  points: [

    { latitude: 31.92076, longitude: 118.884807 },
    { latitude: 31.920765, longitude: 118.901785 },
    { latitude: 31.875771, longitude: 118.885653 },
    { latitude: 31.895816, longitude: 118.851926 },
    { latitude: 31.92315, longitude: 118.849931 },
    { latitude: 31.925617, longitude: 118.882312 }
  ],
  holes: [],
  clickable: true,
  fillColor: 0x00000000,
  geodesic: false,
  strokeColor: 0xff000000,
  jointType: mapCommon.JointType.DEFAULT,
  patterns: [],
  strokeWidth: 10,
  visible: true,
  zIndex: 0
};
await this.mapController.addPolygon(polygonOptions);
```

标记项目点功能使用addMarker接口，传入经纬度坐标生成标记位。

```
// features/MapService/src/main/ets/components/MapPage.ets
// 创建Marker
this.marker = await this.mapController.addMarker(markerOptions);
this.marker.setTitle('初始位置')
this.marker.setSnippet("这是子标题")
this.marker.setClickable(true)

this.addBasicPoints()
```

```
// features/MapService/src/main/ets/components/MapPage.ets
async addBasicPoints() {
  let markerOptions3: mapCommon.MarkerOptions = {
    position: {
      latitude: 31.891836,
      longitude: 118.876121
    },
    rotation: 0,
    visible: true,
    zIndex: 0,
    alpha: 1,
    anchorU: 0.5,
    anchorV: 1,
    clickable: true,
    draggable: true,
    flat: false,
    icon: $r('app.media.startIcon')
  };
  // 创建Marker3
  let marker3 = await this.mapController?.addMarker(markerOptions3) as map.Marker;
  marker3.setTitle('白龙凹瀑布')
  marker3.setSnippet("保护区")
  marker3.setClickable(true)
```

路径规划使用了Map kit中navi模块。

```
// features/MapService/src/main/ets/components/MapPage.ets
async getRoutes() {
  try {
    let result: navi.RouteResult;
    this.drivingRouteParams.origins = this.marker?.getPosition() ? [this.marker?.getPosition()] : [];
    this.drivingRouteParams.destination = { latitude: 31.904083, longitude: 118.88457 };
    result = await navi.getDrivingRoutes(this.drivingRouteParams);
    result.routes[0].steps.forEach(async (step) => {
      this.routes.push({
        distance: step.distance,
        distanceDescription: step.distanceDescription,
        duration: step.duration,
        durationDescription: step.durationDescription,
        durationInTraffic: step.durationInTraffic,
        durationInTrafficDescription: step.durationInTrafficDescription,
      })
      step.roads.forEach((road) => {
        road.polyline.forEach((polyline) => {
          this.points.push(polyline)
        })
      })
    })
    const points = result.routes[0].overviewPolyline == null ? this.points : result.routes[0].overviewPolyline;
    if (points.length >= 1000) {
      this.polylineOption.points = points.filter((item, index) => index % 50 === 0 || index === points.length - 1);
    } else {
      this.polylineOption.points = points.filter((item, index) => index % 2 === 0 || index === points.length - 1);
    }
    if (this.mapPolyline) {
      this.mapPolyline.setPoints(this.polylineOption.points);
    } else {
      this.mapPolyline = await this.mapController?.addPolyline(this.polylineOption)
    }
  } catch (err) {
    Logger.error("naviDemo", "getDrivingRoutes fail err =" + JSON.stringify(err));
  }
}
```

定位功能需要在module.json5添加权限ohos.permission.LOCATION，可以获取到精准位置。

```
// phone/src/main/module.json5
"requestPermissions": [
  {
    "name": "ohos.permission.LOCATION",
    "reason": "$string:permission_location_reason",
    "usedScene": {
      "abilities": [
        "EntryAbility"
      ]
    }
  }
]
```

导航使用Want方式进行应用跳转并传入终点经纬度，在跳转的应用中直接发起导航。

```
// features/MapService/src/main/ets/components/MainPage.ets
build() {
  Column() {
    Text('导航去' + this.distinction)
      .fontSize(30)
      .height(100)
    Button('开始导航')
      .onClick(() => {
        let petalMapWant: Want = {
          bundleName: 'com.huawei.hmos.maps.app',
          uri: 'maps://navigation',
          parameters: {
            linkSource: 'com.example.touristparkdemo',
            destinationLatitude: this.distinclat,
            destinationLongitude: this.distinclon,
            destinationName: this.distinction,
            vehicleType: 0
          }
        }
        let context = getContext(this) as common.UIAbilityContext;
        context.startAbility(petalMapWant);

      })
      .margin(20)
  }
}
```

## 代码下载链接

[旅游园区类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260526111058.30086774549655322848944658007696%3A20260604134718%3A2800%3AD13749DAF3220F67A007C8DEA28D50960E0E7D19B2BEB0CD62B188D331D760AF.zip?needInitFileName=true)
