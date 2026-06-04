---
title: "出行导航应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-bus-app-architecture-v1-0000001938172420
---

## 简介

本文档为出行导航类HarmonyOS应用的架构设计实践，提供常见的乘车码、路线查询、支付管理等功能，帮助开发者快速构建一款出行导航类应用。

* Stage开发模型+声明式UI开发范式。
* 应用只部署在手机端，规划一个Entry类型HAP包。

## 应用布局

![](./img/2227332e.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 首页采用各类APP常用的页面导航布局，底部通过[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-tabs)组件设置导航样式。 * 行业特色功能页面，如：乘车码、路径规划、爱心乘车等功能。 | ![](./img/c82a3a9d.gif "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，出行导航类应用常见功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分：

**表1** 模块划分

| **模块名称** | **功能点** |
| --- | --- |
| 首页 | 线路展示，路径规划，城市选择，爱心乘车，扫一扫 |
| 优惠 | 充值优惠，通勤优惠包 |
| 乘车 | 登录，生成二维码 |
| 我的 | 登录，设置，卡包，乘车记录，个人信息 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

* 产品定制层：作为扫码乘车为核心功能的应用，当前仅支持手机版本，只需要一个HAP包。
* 基础特性层：将“首页”、“个人中心”、“乘车”等功能模块打包为HAR包被上层产品组件引用。
* 公共能力层：将“乘车码”、“地图”、“人脸识别”、“Web组件”等基础公共模块打包为HAR包被上层业务组件引用。

  如果APP中有城市互通的场景，即在主APP中会集成其他城市等城市互通SDK，方便使用主地铁APP在其他城市乘坐地铁公交，可以考虑将其他城市提供的模块设计成HSP包，按需实现加载，减少主包体积。

组件间依赖说明：上层组件可依赖下层，不建议跨层依赖、反向依赖、横向依赖。

**图1** 软件视图

![](./img/348a47be.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/d906f19e.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 定位技术方案

**功能设计**

出行导航类应用中，会需要获取设备当前的定位，用于定位当前所在城市、推荐附近的地铁站点、公交站点等，获取设备当前定位可使用HarmonyOS的[Location Kit（位置服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-kit)能力。

常见页面路径：打开首页后获取定位。

**图3** 获取定位
![](./img/e915c16b.gif "点击放大")

**方案设计**

* 使用Location Kit（位置服务）获取设备的位置信息能力，应用无需集成SDK，不影响包大小，开发者不用考虑升级。
* 应用通过调用Location Kit的decode的相关接口获取设备的位置信息，Location Kit将位置相关信息结果返回。

应用在使用Location Kit系统能力前，需要检查是否已经获取用户授权访问设备位置信息。如未获得授权，可以向用户申请需要的位置权限。

系统提供的定位权限有：

* ohos.permission.LOCATION：用于获取精准位置，精准度在米级别。
* ohos.permission.APPROXIMATELY\_LOCATION：用于获取模糊位置，精确度为5公里。
* ohos.permission.LOCATION\_IN\_BACKGROUND：用于应用切换到后台仍然需要获取定位信息的场景。

权限可参见[应用权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all)。

**代码参考**

代码详情参见[获取城市位置代码实现](#section1568113210817)。

### 路径规划技术方案

**功能设计**

出行导航类应用中，搜索起点和终点之间的路径规划是一个常用的功能，可以使用HarmonyOS的Map Kit提供的[navi（导航）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api)实现路径规划相关的功能。

常见页面路径：首页 – 路径规划。

**图4** 路径规划功能示意图

![](./img/697a5958.png "点击放大")

**方案设计**

* 开发者先登录AGC，完成地图相关的配置，参考配置[AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc)。
* 使用Map Kit（地图服务）中的navi模块，应用无需集成SDK，不影响包大小，开发者不用考虑升级。
* 开发者调用navi模块提供的接口，可以实现路径规划、批量算路、轨迹绑路功能。

**代码参考**

代码详情参见[路径规划代码实现](#section149631440245)。

### HSP动态加载技术方案

**功能设计**

部分出行导航类应用，会包含异地出行的能力，通过集成其他城市提供的城市互通SDK，满足使用该APP在其他城市出行（扫码乘车等）的需求，由于该场景，不是常用高频场景，且包含的城市互通数量较多，如果都集成在整个APP中，对整体APP包体大小会有影响，建议可以将城市互通模块设计为HSP包，在实际使用异地出行功能时再进行按需加载。

**方案设计**

* 可以通过HarmonyOS提供的HSP实现按需加载，参考[按需加载模块](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-modular-design#section28312051291)，在包结构可参考下图，将城市A提供的特有的HAR模块封装成HSP，其他城市提供的模块参考处理，如果有可复用的公共依赖模块，可以将公共模块用HSP模块壳封装，供按需加载模块城市HSP集成使用。

**图5** 按需加载包结构设计示意图

![](./img/4cbc054f.png "点击放大")

## 行业创新设计

![](./img/a99790be.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码。

## 一键预约和地铁实况

**场景说明**

用户点击爱心预约、通知消息、桌面日程卡片等多入口提醒、查看，服务一步直达。

用户乘坐地铁，向用户展示剩余到站时间。

**创新设计**

应用服务日程写入系统日历，多端多入口统一提醒进站时间，一键跳转至落地页。

基于实况窗服务，可以实时查看剩余到站时间。

**图6** 一键预约和地铁实况示意图

![](./img/7b2f79cd.png "点击放大") ![](./img/416e9bf2.png "点击放大") ![](./img/25debe38.png "点击放大")

**实现方案**

* 接入[Live View Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/liveview-design-formula)（实况窗）：支持应用将实时状态信息在设备的关键界面展示，并对展示信息的生命周期、用户界面UI效果等进行管理。
* 接入[calendarManager](https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/reference/apis-calendar-kit/js-apis-calendarManager.md)（日程管理能力）：提供日历与日程管理能力，包括日历和日程的创建、删除、修改、查询等。
* 使用HarmonyOS服务[卡片开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/form-kit)能力。

## 应用框架代码

![](./img/095f07fb.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

**框架代码中登录验证模块，只是UI能力，手机号位数满足条件，任意密码可登录，开发者自行补齐相关校验**。

### 代码运行环境

软件要求

* DevEco Studio版本：DevEco Studio 5.0.1 Release及以上。
* HarmonyOS SDK版本：HarmonyOS 5.0.1 Release SDK及以上。

硬件要求

* 设备类型：华为手机。
* HarmonyOS系统：HarmonyOS 5.0.1 Release及以上。

环境搭建

* 安装DevEco Studio，详情请参考[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

历史工程迁移

开发者使用HarmonyOS NEXT Developer Beta1（5.0.3.300）以上版本导入代码，使用一体化的[历史工程迁移能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/ide-integrated-project-migration-V14)，帮助开发者快速完成工程转换。

### 代码结构解读

本篇代码非应用全量代码，只包括脱敏后的应用框架代码，开发者可以通过链接下载全量的框架代码。

整个框架代码所有的模块包在同一个IDE工程中维护开发。

结构图中展示了应用的全部模块结构：

* Common层：公共能力，包含数据管理，工具等。
* Account：登录注册页面。
* Home：首页面，首页UI模型，首页模块常量，以及加载资源。
* Pay: 二维码页面，乘车码生成。
* Personal：我的页面，包括常用功能及更多功能，登陆注册及设置中心。
* Travel：路径规划。
* CityCode：以南京为例，展示当前城市乘车码。
* OtherCityCode：展示其他城市乘车码。

```
├── common/src/main/ets
│   ├── components                       // 基础组件
│   │   ├── CommonWeb.ets                // 通用web
│   │   └── LocalList.ets                // 本地生活列表组件
│   ├── constants                        // 通用常量
│   │   ├── BreakpointConstants.ets      // 断点
│   │   ├── CommonConstants.ets          // 通用样式
│   │   └── StyleConstants.ets           // 通用样式
│   ├── utils                            // 通用工具类
│   │   ├── BreakpointSystem.ets         // 断点系统管理
│   │   ├── CommonDataSource.ets         // 通用数据管理
│   │   ├── HttpUtil.ets                 // http请求
│   │   └── Logger.ets
│   └── viewmodel                        // 数据模型
│       ├── ConstantsInterface.ets       // 数据库model
│       ├── LocalDataModel.ets           // 本地生活model
│       └── RouterClass.ets              // 路径规划model
├── rideCode
│   ├── cityCode/src/main/ets/pages
│   │   └── PageCode.ets                 // 南京二维码页面
│   └──otherCityCode/src/main/ets/pages
│       └── OtherCode.ets                // 其他城市二维码页面
├── features
│   ├── account/src/main/ets
│   │   ├── components
│   │   │   ├── LoginPage.ets            // 登录页面
│   │   │   └── VerifyPage.ets           // 注册页面
│   │   ├── database
│   │   │   ├── tables                   // 主页model
│   │   │   │   └── AccountTable.ets     // 工具类
│   │   │   └── Rdb.ets                  // rdb数据库
│   │   └── viewmodel
│   │       └── AccountInfo.ets          // 账户数据
│   ├── home/src/main/ets
│   │   ├── components
│   │   │   ├── Home.ets                 // 首页
│   │   │   └── Notice.ets               // 地铁运营公告
│   │   └── viewmodel
│   │       ├── HomeData.ets             // 首页数据
│   │       ├── LocalLifeViewModel.ets   // 本地生活model
│   │       └── MockData.ets             // 模拟数据
│   ├── pay/src/main/ets/components
│   │   └── PayPage.ets                  // 付款页
│   ├── personal/src/main/ets
│   │   ├── components
│   │   │  ├── AboutApp.ets              // 关于
│   │   │  ├── ChangePhone.ets           // 更换手机号
│   │   │  ├── ChangePsd.ets             // 更换密码
│   │   │  ├── IconButton.ets            // 图标按钮
│   │   │  ├── MyCardCase.ets            // 我的卡包
│   │   │  ├── Personal.ets              // 个人中心
│   │   │  ├── PersonCenter.ets          // 个人信息
│   │   │  ├── PrivacyDataInventory.ets  // 隐私协议
│   │   │  ├── PrivacyPolicy.ets
│   │   │  ├── ThirdPartSharing.ets      // 三方共享清单
│   │   │  ├── TransactionRecord.ets     // 交易记录
│   │   │  ├── TravelRecord.ets
│   │   │  └── UserAgreements.ets        //用户协议
│   │   ├── constants
│   │   │   └── PersonalConstants.ets    // 个人中心常量
│   │   └── viewmodel
│   │       ├── IconButtonModel.ets      // 图标按钮model
│   │       ├── MineListModel.ets        // 个人数据model
│   │       ├── PersonalData.ets         // 个人数据model
│   │       └── QuitLoginDialog.ets      // 退出登录弹窗
│   └── travel/src/main/ets
│       └── components
│           ├── MapPage.ets              // 地图页
│           └── RouterPlan.ets           // 路径规划
└── product
    └── phone/src/main/ets
        ├── constants
        │   ├── CommonConstants.ets       // 页面常量
        │   └── PageConstants.ets         // 页面常量
        ├── entryability
        │   └── EntryAbility.ets
        ├── pages
        │   ├── AppointmentHistory.ets     // 预约历史
        │   ├── AppSettingPage.ets         // 设置页面
        │   ├── DrivingPage.ets
        │   ├── MainPage.ets               // 首页
        │   ├── Reservation.ets            // 爱心预约
        │   ├── SplashPage.ets             // 开屏页面
        │   └── WebPage.ets                // Web页面
        ├── utils
        │   ├── GlobalContext.ets          // 工具类
        │   ├── Logger.ets                 // 日志
        │   └── PreferencesUtil.ets        // 工具类
        ├── view
        │   └── CustomDialogComponent.ets  // 隐私model
        └── viewmodel
            └── MainPageData.ets           // 主页model
```

### 获取城市位置代码实现

使用[Location Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-guidelines)能力，本示例采用获取当前位置信息能力，调用getLocationInfo()接口能力，集成简单，适用于通用获取位置信息场景。

```
// features\home\src\main\ets\components\Home.ets
getLocationInfo() {
  let requestInfo: geoLocationManager.LocationRequest = {
    'priority': geoLocationManager.LocationRequestPriority.FIRST_FIX,
    'timeInterval': 0,
    'distanceInterval': 0,
    'maxAccuracy': 0
  };
  let locationChange = (location: geoLocationManager.Location): void => {
    //逆地理编码
    try {
      let isAvailable = geoLocationManager.isGeocoderAvailable();
      if (isAvailable) {
        let reverseGeocodeRequest: geoLocationManager.ReverseGeoCodeRequest =
          { "latitude": location.latitude, "longitude": location.longitude, "maxItems": 1 };
        this.latitude = location.latitude
        this.longitude = location.longitude
        try {
          geoLocationManager.getAddressesFromLocation(reverseGeocodeRequest, (err, data) => {
            if (err) {
              geoLocationManager.off('locationChange', locationChange);
            } else {
              this.city =
                (data[0]['locality'] + '') || ''
              AppStorage.setOrCreate("firstSelectCity", data[0]['locality'] + '')
              this.localArea = data[0]['placeName'] + ''
              geoLocationManager.off('locationChange', locationChange);
            }
          });
        } catch (err) {
          geoLocationManager.off('locationChange', locationChange);
        }
      }
    } catch (err) {
      geoLocationManager.off('locationChange', locationChange);
    }
  };
  geoLocationManager.on('locationChange', requestInfo, locationChange);
  geoLocationManager.getCurrentLocation().then(async (location) => {
    let address = await geoLocationManager.getAddressesFromLocation({
      longitude: location.longitude,
      latitude: location.latitude
    })
    this.city = address[0]['locality'] + ""
  })
}
```

### 路径规划代码实现

使用[Map Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-kit-guide)能力，本示例采用创建地图、位置搜索和在地图上绘制能力，调用[searchByText](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location-services)方法查询关键字搜索。使用MapComponent地图组件在页面中放置地图。MapComponentController是地图组件的主要功能入口类，用来操作地图，与地图有关的所有方法从此处接入。它所承载的工作包括：地图类型切换（如标准地图、空地图）、改变地图状态（中心点坐标和缩放级别）、添加点标记（Marker）、绘制几何图形(MapPolyline、MapPolygon、MapCircle)、各类事件监听等。

```
// features/travel/src/main/ets/components/RouterPlan.ets
Flex({ justifyContent: FlexAlign.Center }) {
  Image($r('app.media.start'))
    .width('30vp')
  TextInput({ text: this.start, placeholder: "起点" })
    .showUnderline(true)
    .onChange((value: string) => {
      this.start = value
    })
    .onBlur(async () => {
      try {
        const rsp = await site.searchByText({
          query: this.start,
          radius: 50,
          pageIndex: 1,
          pageSize: 5
        });
        if (rsp && rsp.sites) {
          let position: mapCommon.LatLng = {
            latitude: rsp.sites[0]?.['location']?.['latitude'] || 0,
            longitude: rsp.sites[0]?.['location']?.['longitude'] || 0
          }
          if (this.startMarker) {
            this.startMarker?.setPosition(position);
          } else {
            this.markerOptions.position = position
            this.startMarker = await this.mapController?.addMarker(this.markerOptions);
          }
        }
      } catch (error) {
      }
    })
  Image($r('app.media.change_direction'))
    .width('50vp')
    .onClick(() => {
      let mid = this.start;
      this.start = this.end;
      this.end = mid;
      let midMarker = this.startMarker;
      this.startMarker = this.endMarker;
      this.endMarker = midMarker;
    })
    .padding(10)
}
.height('60vp')

// features/travel/src/main/ets/components/RouterPlan.ets
async getRoutes() {
  if (!this.startMarker || !this.endMarker) {
    return;
  }
  try {
    this.routes = [];
    this.points = [];
    let result: navi.RouteResult;
    const startLatLng = this.startMarker.getPosition();
    const endLatLng = this.endMarker.getPosition();
    if (this.activeRouterClassIndex === 0) {
      this.drivingRouteParams.origins = startLatLng ? [startLatLng] : [];
      this.drivingRouteParams.destination = endLatLng ? endLatLng : { latitude: 39.9, longitude: 116.4 };
      result = await navi.getDrivingRoutes(this.drivingRouteParams);
    } else {
      this.routeParams.origins = startLatLng ? [startLatLng] : [];
      this.routeParams.destination = endLatLng ? endLatLng : { latitude: 39.9, longitude: 116.4 };
      result = this.activeRouterClassIndex === 1 ? await navi.getCyclingRoutes(this.routeParams) :
        await navi.getWalkingRoutes(this.routeParams);
    }
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
    this.polylineOption.points = points.filter((item, index) => index % 2 === 0 || index === points.length - 1);
    if (this.mapPolyline) {
      this.mapPolyline.setPoints(this.polylineOption.points);
    } else {
      this.mapPolyline = await this.mapController?.addPolyline(this.polylineOption)
    }
    this.getRoutesLoading = false;
  } catch (err) {
  }
}
```

开发者可以基于此示例代码，使用[位置搜索](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location-services)能力，查找相关POI，根据响应替换本地数据，基于更新后的数据，使用[地图绘制能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-drawing)，在地图上设置图标，效果更好。

### 代码下载链接

[公交地铁类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260428194035.73127111003555994161278399395567%3A20260604131246%3A2800%3A18D30E77AF561E8D50182520F987ABA4242FE29B3AFD1F59F74B3B9F862CBBCE.zip?needInitFileName=true)
