---
title: "运动健康应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-sports-health-app-architecture-v1-0000001952522073
---

## 简介

本文档为运动健康类HarmonyOS应用架构设计实践，提供常见的首页、运动、发现、商城、我的等应用功能，帮助开发者快速构建一款运动健康类应用。

* Stage开发模型+声明式UI开发范式。
* 应用设备形态两种：手机和智慧屏端，规划两个Entry类型HAP包。
* 应用大小可控，性能优先，各模块均采用HAR包，不单独加载。

## 应用布局

![](./img/0f87cb02.png)

应用框架代码运行图，开发者可基于框架代码替换相应资源文件，以提供优质的用户体验。

|  |  |
| --- | --- |
| * 应用首页采用各类APP常见页面导航布局。 * 首页底部导航包含首页、运动、发现、商城、我的五个功能入口，分别对应五个功能模块。 * 首页上部分包含头像、使用攻略、设备管理和身体状况，中间区域显示周报和运动计划，下部分为习惯。 * 运动页面提供运动计划、课程、跑步和运动排行榜。 * 商城页面上部分是标题和轮播图、中间是分类栏、下部分是推荐栏。 * 我的页面上部分显示个人头像和用户名称等信息，下部分展示各类服务信息。 | ![](./img/9f02f98b.webp "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，常见应用功能以及职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分：

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 首页 | 体重、体脂、趋势图、饮食、运动等身体健康指标展示 |
| 运动 | 运动计划制定、运动课程列表、跑步实时记录 |
| 发现 | 达人关注、微博、活动列表、知识库等功能 |
| 商城 | 减脂商城，包括商品列表、购物车、商品交易等 |
| 我的  IoT设备 | 我的数据、健康周报、我的设备、亲友、收藏、积分等  体脂秤、跳绳等IoT设备的UI及蓝牙连接功能实现 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

* 产品定制层：本应用涉及手机端和智慧屏端，设计为两个HAP，包含页面框架、导航、手机独有资源等。
* 基础特性层：本应用将“首页”、“运动”、“发现”、“商城”、“我的” 等功能模块打包为HAR包，被上层产品组件引用。另外，为了体脂秤、跳绳等IoT设备可灵活扩展增加，在IoT设备的包目录，每个智能设备打包一个HAR包，封装设备的UI及蓝牙连接等内聚的功能。
* 公共能力层：本应用将“UI组件”、“基础工具”、“DFX”等基础公共模块打包为HAR包被上层业务组件引用，其中路由管理划分到公共组件。

**图1** 软件视图

![](./img/3353872b.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/77703442.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 蓝牙连接IoT设备

**功能设计**

运动健康应用需要通过蓝牙连接体脂秤、跳绳等IoT设备，蓝牙连接是此类应用的关键技术方案，首页->设备，点击“添加设备”，启动蓝牙扫描，识别蓝牙设备。

**图3** 蓝牙识别示意图
![](./img/aa0ab109.gif "点击放大")

**方案设计**

基于[Connectivity Kit（短距通信服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/connectivity-api)的BLE模块（低功耗蓝牙）实现，需要导入[蓝牙BLE模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-ble)和[蓝牙constant模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-constant)，然后实现扫描设备、创建GattClientDevice实例、订阅状态事件、连接蓝牙、断开蓝牙等步骤。

**图4** 时序图

![](./img/13879026.png "点击放大")

**代码参考**

代码详情参见[蓝牙扫描关键代码实现](#section1568113210817)。

### 实时记录步数

**功能设计**

实时记录统计用户行走步数。常见页面路径：首页->运动->跑步，功能页面如下图所示：

**图5** 计步页面

![](./img/014812e3.png "点击放大")

**方案设计**

基于HarmonyOS的[Sensor Service Kit（传感器服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/sensor-service-api)，订阅SensorId.PEDOMETER（计步器）传感器，在回调函数（sensorCallback）中实时刷新步数。

**代码参考**

权限申请：ohos.permission.ACTIVITY\_MOTION。

代码详情参见[获取步数代码实现](#section149631440245)。

## 行业创新设计

![](./img/4ee23f3c.png)

结合HarmonyOS，针对行业的创新场景设计，开发者可以参考行业创新设计方案，实现创新场景代码。

### 运动健康应用接续

**场景说明**

随着全场景多设备的生活方式不断深入，用户拥有的设备越来越多，不同设备都能在适合的场景下提供良好的体验。运动健康类应用在室内，更适合在大屏上展示。

* 饮食场景：手机打开健康食谱的视频播放，视频从手机流转至智慧屏。
* 运动场景：手机打开跳绳等运动页面，运动页面从手机流转至智慧屏。

在HarmonyOS中，支持跨多设备的[应用接续](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-cast)：指当用户在一个设备上操作某个应用时，可以在另一个设备的同一个应用中快速切换，并无缝衔接上一个设备的应用体验。

**创新设计**

利用HarmonyOS跨端流转能力，运动健康应用可以从手机接续到大屏。参见[应用接续开发指导](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-data)。

**图6** 手机接续到大屏效果示意图

![](./img/7012e3dd.png "点击放大")

## 应用框架代码

![](./img/35f0d2c8.png)

本篇代码非应用的全量代码，只包括应用的部分框架代码。

**本框架代码中的登录验证模块，仅实现UI能力，任意用户名和密码均可登录，开发者需自行完善相关校验逻辑。**

### 代码运行环境

软件要求

* DevEco Studio版本：DevEco Studio 6.0.0 Release及以上。
* HarmonyOS SDK版本：HarmonyOS 6.0.0 Release SDK及以上。

硬件要求

* 设备类型：华为手机。
* HarmonyOS系统：HarmonyOS 6.0.0 Release及以上。

环境搭建

安装DevEco Studio，详情请参考[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

### 代码结构解读

业务强相关的公共模块作为独立的模块放在特性包中，主要包括：首页、运动、发现、商城、我的等。

* common目录:公共能力，包含数据管理，工具等。

* find目录：互动模块的资源管理文件，互动模块的常量，互动模块的UI模型。
* first 目录： 首页面，首页UI模型，首页模块常量。
* mine目录：我的模块公共组件，我的模块常量，我的模块的模型，我的模块的页面，我的模块资源管理。
* run目录：运动模块公共组件，运动模块常量，运动模块的模型，运动模块的页面，运动模块资源管理。
* shop目录：商城模块的公共组件，商城模块的公共资源。

```
├──common/src/main/ets                    // 公共模块
│  ├──common
│  │  ├──compontents
│  │  │  └──CommonConstants.ets           // 公共资源类
│  │  └──utils
│  │     ├──GlobalContext.ets             // 上下文
│  │     └──Utils.ets                     // 工具类
│  ├──model
│  │  ├──NavItemModel.ets                 // 基础数据
│  │  └──TaskInitList.ets                 // 基础信息
│  └──page
│     ├──AddDeviceDemoOne.ets             // 添加设备
│     └──MyDeviceOne.ets                  // 我的设备
├──features
│  ├──find/src/main/ets/components
│  │  └──DiscoveryPage.ets                // 发现页
│  ├──first/src/main/ets/view
│  │  ├──CustomDialogComponent.ets        // 隐私弹窗
│  │  └──HomePageDemoOne.ets              // 首页
│  ├──mine/src/main/ets
│  │  ├──model
│  │  │  ├──Mine.ets                      // 我的基础信息
│  │  │  ├──Myself.ets                    // 隐私政策基础信息
│  │  │  └──Set.ets                       // 设置基础信息
│  │  ├──pages
│  │  │  ├──CommonNew.ets                 // 第三方共享信息清单
│  │  │  ├──HealthReport.ets              // 健康报告
│  │  │  ├──HeartMonitoring.ets           // 健康监测
│  │  │  ├──MessagePage.ets               // 客服与消息
│  │  │  ├──MinePage.ets                  // 我的
│  │  │  ├──MyselfPage.ets                // 隐私政策
│  │  │  ├──SecretPage.ets                // 用户隐私数据清单
│  │  │  └──SetPage.ets                   // 设置
│  │  └──view
│  │     ├──ListInfo.ets                  // 我的下部分列表
│  │     ├──MyselfInfo.ets                // 隐私下部分列表
│  │     ├──SetInfo.ets                   // 设置下部分列表
│  │     └──UserBaseInfo.ets              // 我的上部分
│  ├──run/src/main/ets/pages
│  │  └──ListDemoOne.ets                  // 运动
│  └──shop/src/main/ets/components
│     └──SwiperDemo01.ets                 // 商城
├──IoT/weightscale/src/main/ets/view
│  └──DeviceListPageOne.ets
└──products
   ├──phone/src/main/ets
   │  ├──common/utils
   │  │  ├──GlobalContext.ets             // 上下文
   │  │  └──PreferencesUtil.ets           // 工具类
   │  ├──entryability
   │  │  └──EntryAbility.ets              // 程序入口
   │  ├──pages
   │  │  ├──CancelAccount.ets             // 注销账户
   │  │  ├──ChangeIphone.ets              // 修改手机号
   │  │  ├──ChangePasswordPage.ets        // 修改密码
   │  │  ├──LauncherPage.ets              // 启动页
   │  │  ├──LoginPage2.ets                // 登录页面
   │  │  ├──MainPage.ets                  // tab页
   │  │  ├──PhonePage.ets                 // 一键登录
   │  │  ├──RegisterPage.ets              // 注册
   │  │  ├──RetrievePassword.ets          // 修改密码
   │  │  ├──SecretPage.ets                // 修改密码
   │  │  ├──SureCancel.ets                // 注销
   │  │  └──VerifyPage.ets                // 验证码登录
   │  └──utils
   │     ├──Logger.ets                    // 日志工具
   │     └──PermissionsUtil.ets           // 工具类
   └──smartscreen                         // 智慧屏
```

### 蓝牙扫描代码实现

使用[Connectivity Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/connectivity-api)中的蓝牙扫描[查找设备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ble-development-guide)能力。

```
// common/src/main/ets/page/AddDeviceDemoOne.ets
let scanFilter: ble.ScanFilter = {};
let scanOptions: ble.ScanOptions = {
  interval: 1000,
  dutyMode: ble.ScanDuty.SCAN_MODE_LOW_LATENCY,
  matchMode: ble.MatchMode.MATCH_MODE_STICKY,
};
ble.startBLEScan([scanFilter], scanOptions);
```

开启订阅BLE设备发现：

```
// common/src/main/ets/page/AddDeviceDemoOne.ets
ble.on('BLEDeviceFind', (data: Array<ble.ScanResult>) => {
  if (data[0].deviceName !== '' && data[0].connectable && this.deviceIds.getIndexOf(data[0].deviceId) < 0) {
    this.deviceIds.add(data[0].deviceId);
    let b = generateRandomNumber(26, 30);
    let one = new CommodityOne(data, 'app.media.img_' + b);
    if (this.commodityDataOne.length < 5) {
      this.commodityDataOne.push(one);
      this.commodityDataOne.reverse();
    }
  }
});
```

连接蓝牙设备关键代码：

```
// common/src/main/ets/page/AddDeviceDemoOne.ets
this.gattClient = ble.createGattClientDevice(device.deviceId);
this.gattClient.connect();
this.onBLEConnectionStateChange(device);
```

需要使用蓝牙设备的deviceId去获取连接实例，连接之后要开启蓝牙状态监听，代码如下：

```
// common/src/main/ets/page/AddDeviceDemoOne.ets
this.gattClient.on('BLEConnectionStateChange', (state: ble.BLEConnectionChangeState) => {
  this.connectedDeviceId = state.deviceId;
  this.connectState = state.state;
  if (state.state === constant.ProfileConnectionState.STATE_CONNECTED) {
    this.connectedDeviceMap.set(device.deviceName, device);
    if (this.deviceList.indexOf(device.deviceName) < 0) {
      this.deviceList.push(device.deviceName);
    }
  }
});
```

需要在配置[Sensor Service Kit（传感器服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensorservice-kit-intro)文件module.json5里添加蓝牙权限：需要权限ohos.permission.ACCESS\_BLUETOOTH，参见[应用权限列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions)。

### 获取步数代码实现

使用[Sensor Service Kit（传感器服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensorservice-kit-intro)能力。订阅加速度传感器数据。需要配置权限ohos.permission.ACCELEROMETER。

```
// features/run/src/main/ets/pages/ListDemoOne.ets
sensor.on(sensor.SensorId.PEDOMETER, (data: sensor.PedometerResponse) => {
  this.stepNum = data.steps ? data.steps : 0;
}, { interval: 100000000 });
```

其中

* type传感器类型，该值固定为SensorId.PEDOMETER 计步传感器。
* callback回调函数，异步上报的传感器数据固定为PedometerResponse。
* option可选参数列表，用于设置传感器上报频率，默认值为200000000ns。

### 代码下载链接

[运动健康类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260414140036.91996166743960785506341663861352%3A20260604123748%3A2800%3A8011928778E51766A967684529C4CFD38845B6C863BEE846F979A98C9B7AA806.zip?needInitFileName=true)
