---
title: "美食应用模板"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-food-app-design-demo-v1-0000002303530072
---

## 简介

本文档为美食类的HarmonyOS应用的架构设计实践，提供常见的菜单、点餐、外卖、订单、海报等功能，帮助开发者快速构建一款美食类应用。

* Stage开发模型+声明式UI开发范式。
* 设备形态只有手机端，规划一个Entry类型HAP包。
* 元服务大小可控，性能优先，无单独加载模块，模块全部采用HAR包。

## 应用布局

![](./img/a81641b8.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 首页底部导航包括“首页”、“点餐”、“订单”、“我的”四个功能入口。 * 首页页面上部是商家海报轮播图，中间是功能入口。 | ![](./img/335ab80e.gif "点击放大") |

## 应用框架设计

### 模块划分

根据行业元服务的功能，常见应用功能以及职责划分如下，开发者在实际设计过程中，可以根据模块功能的复杂程度实际情况再进一步细分：

**表1** 模块划分

| **模块名称** | **功能点** |
| --- | --- |
| 首页 | 堂食、外卖 |
| 点餐 | 选择门店、菜单分类、各类目下详细菜单、点餐、支付 |
| 订单 | 订单列表 |
| 我的 | 账户、扫码点餐、卡券中心、收货地址、礼品卡、设置 |

### 软件视图设计

元服务分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：本元服务只涉及手机端，设计为一个HAP，包含页面框架、导航、手机独有资源等。

基础特性层：“点餐”、“我的” 等功能模块打包为HAR包，被上层产品组件引用。

公共能力层：本元服务将“账户”、“网络交互”等基础公共模块打包为HAR包被上层业务组件引用。

**图1** 软件视图

![](./img/9d4e8c78.png "点击放大")

### 逻辑视图设计

根据本元服务功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/5950af9f.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 点餐

**功能设计**

* 选择菜单列表中具体选项，进入详情页，并加入购物车。
* 支付完成结账。

**图3** 点餐功能设计
![](./img/af308c81.png "点击放大")

**方案设计**

使用ArkData的[Preferences](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-preferences)进行用户订单存储。Preferences会将该数据缓存在内存中，当用户读取的时候，能够快速从内存中获取数据，也可以使用flush接口将内存中的数据写入持久化文件中。

**代码参考**

代码详情参见[点餐代码实现](#section102111345161020)。

### 餐饮店地址选择

**功能设计**

* 具有选择门店的功能。
* 展示地图，对门店地址打标记，列出门店详细地址。
* 能够根据当前位置匹配最近的门店。

**图4** 餐饮店地址选择功能设计
![](./img/64c5689a.png "点击放大")

**方案设计**

* 使用[Map Kit（地图服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-kit-guide)实现地图展示，并对具体的门店进行标记。
* 使用[Location Kit（位置服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-kit)实现定位功能。定位功能需要在module.json5添加权限ohos.permission.LOCATION，可以获取到精准位置，精度在米级别。根据定位匹配最近的门店。

**代码参考**

代码详情参见[餐饮店地址选择](#section1525095181015)。

## 行业创新设计

![](./img/6bc02fc9.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码。

### 扫码拉起元服务

**场景说明**

在线上或者线下场景中，可以通过扫二维码，跳转到该元服务的首页进行点餐。

**创新设计**

* 使用[App Linking](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-linking-startup) 创建元服务链接，链接中可设置自定义参数来精确定位到元服务指定页面。拉起方应用通过UIAbilityContext.openLink接口，传入目标元服务链接，从而拉起目标元服务。
* 使用“[扫码直达](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-directservice)”服务。配置App Linking完成域名注册后，用户通过HarmonyOS扫码入口发起扫码请求，HarmonyOS扫码入口调用系统能力解析码值，并跳转到元服务页面。

## 应用框架代码

![](./img/8fbedcff.png)

本篇代码非元服务的全量代码，只包括元服务的部分框架代码。

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

本篇代码非元服务的全量代码，只包括主要应用框架代码，开发者可以通过链接下载全量的框架代码。

整个框架代码结构分为多个HAR包，所有的HAR在同一个IDE工程中维护开发。

**图5** features层集成的HAR列表
![](./img/b07e686f.png)

```
├── common
│  ├── common_utils/src/main/ets/
│  │   ├── constants                      // 常量类
│  │   │   └── CommonConstants.ets        // 通用常量类
│  │   ├── model                          // 模型
│  │   │   └── OrderType.ets              // 订单类型
│  │   └── utils                          // 工具类
│  │       ├── Logger.ets                 // 日志工具类
│  │       ├── MathUtil.ets               // 数学工具类
│  │       ├── PermissionsUtil.ets        // 权限工具类
│  │       └── PreferenceUtil.ets         // 首选项工具类
│  └── router_manage/src/main/ets/
│      ├── commons                        // 常量类
│      │   ├── AnimateMap.ets             // 枚举
│      │   ├── NavRouterMap.ets           // 页面常类
│      │   └── NavStackMap.ets            // 主页面常类
│      └── models                         // 模型
│         ├── NavRouterInfo.ets           // 路由类
│         └── RouterModule.ets            // 路由工具类
├── feature
│   ├── feature_food/src/main/ets/
│   │   ├── components                     // 组件
│   │   │   └── FoodCategory.ets           // 美食组件
│   │   ├── models                         // 模型
│   │   │   └── FoodModelData.ts           // 美食数据
│   │   └── pages                          // 页面
│   │       └── PageFoodDetail.ets         // 美食详情页面
│   ├── feature_home/src/main/ets/
│   │   ├── components                     // 组件
│   │   │   └── HomeComponent.ets          // 首页组件
│   │   ├── models                         // 模型
│   │   │   └── TakeOutAddressInfo.ets     // 外卖地址数据
│   │   └── pages                          // 页面
│   │       ├── PageAddAddress.ets         // 新增外卖地址
│   │       └── PageTakeOut.ets            // 外卖地址列表
│   ├── feature_map/src/main/ets/
│   │   ├── utils                          // 工具类
│   │   │   └── MapUtil.ets                // 地图工具类
│   │   ├── models                         // 模型
│   │   │   └── ShopModelData.ts           // 店铺数据
│   │   └──pages                           // 页面
│   │       └── PageShopList.ets           // 店铺选择页面
│   ├── feature_mine/src/main/ets/
│   │   ├── components                     // 组件
│   │   │   └── MineComponent.ets          // 我的组件
│   │   └── models                         // 模型
│   │       └── MineConfig.ets             // 我的数据
│   └── feature_order/src/main/ets/
│       ├── components                     // 组件
│       │   └── PageOrderList.ets          // 订单组件
│       ├── models                         // 模型
│       │   └── OrderInfo.ets              // 订单数据
│       └── pages                          // 页面
│           └── PageOrderPreview.ets       // 订单预览页面
└── product
    └── phone/src/main/ets
       ├── food                            // 页面
       │   └──pages
       │      └── FoodCard.ets             // 卡片页面
       ├── phoneability                    // 启动入口
       │   └── PhoneAbility.ets            // 手机启动入口
       ├── phoneformability                // 卡片启动入口
       │   └── PhoneFormAbility.ets        // 手机卡片启动入口
       └── pages                           // 页面
           ├── Index.ets                   // 首页
           └── Main.ets                    // 主页面
```

### 点餐代码实现

点餐并加入购物车中。

```
// feature/feature_food/src/main/ets/components/FoodCategory.ets
@Builder
buyNumBuilder(foodDetail: FoodDetail) {
  if (this.buyFoods.get(foodDetail.id)) {
    Image($r('app.media.ic_public_remove'))
      .width(25).height(25).objectFit(ImageFit.Fill)
      .onClick(() => {
        let item = this.buyFoods.get(foodDetail.id);
        if (item) {
          if (item.buyNum > 1) {
            item.buyNum--;
            this.buyFoods.set(foodDetail.id, item);
            this.choosePrice = subtraction(this.choosePrice, foodDetail.price);
            if (this.choosePrice === 0) {
              this.checkShop = false;
            }
          } else if (item.buyNum == 1) {
            item.buyNum--;
            this.buyFoods.delete(foodDetail.id);
            this.choosePrice = subtraction(this.choosePrice, foodDetail.price);
            if (this.choosePrice === 0) {
              this.checkShop = false;
            }
          } else {
            // 提示最低不能低于0
          }
        }
      });
  }

  if (this.buyFoods.get(foodDetail.id)) {
    Text(this.buyFoods.get(foodDetail.id)?.buyNum + "").fontSize(16).margin({ left: 10, right: 10 });
  }

  Image($r('app.media.ic_public_add_norm'))
    .width(25).height(25).objectFit(ImageFit.Fill)
    .onClick(() => {
      this.choosePrice = addition(this.choosePrice, foodDetail.price);
      let item = this.buyFoods.get(foodDetail.id);
      if (item) {
        item.buyNum++;
        this.buyFoods.set(foodDetail.id, item);
      } else {
        foodDetail.buyNum = 1;
        this.buyFoods.set(foodDetail.id, foodDetail);
      }
    })
}
```

进行付款，并生成已完成订单。

```
// feature/feature_order/src/main/ets/pages/PageOrderPreview.ets
.onClick(async () => {
  // 模拟付款
  this.enableLoading = true;

  setTimeout(() => {
    this.enableLoading = false;
    // 生成订单
    let key = Date.parse(new Date().toString()) + "";
    let value: FoodDetail[] = [];
    this.buyFoods.forEach((detail: FoodDetail) => {
      value.push(detail);
    })
    Logger.info("key is :" + key);
    Logger.info("value is :" + JSON.stringify(value));

    let dataPreferences: preferences.Preferences | null = PreferenceUtil.getPreference(this.context, 'food.order');
    dataPreferences.putSync(key, JSON.stringify(new OrderDetail("FD" + key, this.choosePrice, this.orderType, this.chooseShop, this.chooseTakeOutAddr, key, OrderStatus.COMMITED, value)));
    dataPreferences.flush();

    // 清理购物车
    this.choosePrice = 0;
    this.buyFoods.clear();

    // 跳转订单页
    this.selectedIndex = 2;
    RouterModule.push({
      stackName: NavStackMap.MAIN_STACK,
      url: NavRouterMap.PAGE_MAIN,
      animateSwitch: AnimatedMap.ON,
    });

    PreferenceUtil.showToastMessage("下单成功", this.getUIContext());
  }, 2000);
});
```

### 餐饮店地址选择

使用[Map Kit（地图服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-kit-guide)和[Location Kit（位置服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-kit)，加载地图，初始化请求附近的地点，匹配当前位置与最近的门店。

```
// feature/feature_map/src/main/ets/pages/PageShopList.ets
// 页面初始化加载地图
aboutToAppear(): void {
  this.preChooseShop = this.chooseShop;

  // 初始化请求附近的地点
  this.shopList = ShopDetailList;
  this.latitude = getShopByName(this.chooseShop).latitude;
  this.longitude = getShopByName(this.chooseShop).longitude;
  let gcj02Position = MapUtil.convertToGcj02(this.latitude, this.longitude);

  // 地图初始化参数
  this.mapOptions = {
    position: {
      target: {
        latitude: gcj02Position.latitude,
        longitude: gcj02Position.longitude
      },
      zoom: 16,
    },
    myLocationControlsEnabled: true
  };

  this.callback = async (err, mapController) => {
    if (!err) {
      this.mapController = mapController;
      for (let i = 0; i < this.shopList.length; i++) {
        let gcj02Position = MapUtil.convertToGcj02(this.shopList[i].latitude, this.shopList[i].longitude);
        // 创建Marker
        let markerOptions: mapCommon.MarkerOptions = {
          position: {
            latitude: gcj02Position.latitude,
            longitude: gcj02Position.longitude
          },
          rotation: 0,
          visible: true,
          zIndex: 0,
          alpha: 1,
          anchorU: 0.5,
          anchorV: 1,
          clickable: true,
          draggable: true,
          flat: false
        };
        this.mapController.addMarker(markerOptions);
      }
    }
  };
}
```

## 代码下载链接

[美食应用模板示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260319113731.71067139788997433991291336403915%3A20260604153953%3A2800%3A6ABE17201868192AAD05D7F92C40F9C3ACF280C4D7C5CE32ACF70B06612E0AA7.zip?needInitFileName=true)
