---
title: "聊天页-发送定位卡片并跳转导航"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/chat_page_location_navigation-0000002322113637
---

## 场景介绍

发送定位卡片并跳转导航是社交通讯类应用中高频使用场景之一，如用户在好友聊天界面选择并发送位置信息卡片，好友通过点击卡片打开位置详情页面，点击底部导航按钮跳转至对应导航应用。

本示例基于[显示地图](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-presenting)、[标记](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-marker)、[地点选取](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location-selecting)和[打开Petal地图规划路线](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-petalmaps#section95400034511)实现位置卡片导航能力。

## 效果预览

![](./img/c8275bc7.gif "点击放大")

## 实现思路

1. 地点选取：使用地图服务提供的[地点选取](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location-selecting)控件，创建地点选取参数，调用chooseLocation方法拉起地点选取页，快速实现地点选取能力。

   ```
   naviChooseLocationPage() {
       let locationChoosingOptions: sceneMap.LocationChoosingOptions = {
           location: { longitude: Constant.TEMP_LONGITUDE, latitude: Constant.TEMP_LATITUDE },
           searchEnabled: true, // 展示搜索控件
           showNearbyPoi: true // 展示附近POI
       };
       // 拉起地点选取页
       sceneMap.chooseLocation(this.getUIContext().getHostContext() as common.UIAbilityContext, locationChoosingOptions)
       .then((data) => {
           this.sendLocationCard(data);
       }).catch((err: BusinessError) => {
           hilog.error(DOMAIN, 'chooseLocation', `code: ${err.code}, message: ${err.message}`);
       });
   }
   ```
2. 跳转导航应用：通过[openMapRoutePlan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-petal-maps#section1765318218173)方法，传入终点经纬度，打开Petal地图规划路线，跳转至导航应用。

   ```
   async naviMapGuide() {
       let params: petalMaps.RoutePlanParams = {
           destinationPosition: {
               latitude: this.msgContent.location.latitude,
               longitude: this.msgContent.location.longitude,
           },
           destinationName: this.msgContent.name
       };
       await petalMaps.openMapRoutePlan(this.getUIContext().getHostContext(), params);
       if (this.selectMapDialog) {
           this.selectMapDialog.close();
       }
   }
   ```

![](./img/380cfe63.png)

本示例需要[开通地图服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc#section16133115441516)，并进行相应配置，具体步骤如下：

1. 登录AppGallery Connect网站，选择“我的项目”。
2. 在项目列表中找到您的项目，在项目下的应用列表中选择需要打开“地图服务”的应用。
3. 选择API管理，找到“地图服务”开关，打开开关。
4. 确认已经开启“地图服务”开放能力，并完成[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section297715173233)。
5. 签名完成后，项目即可正常使用。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取Internet网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──components
│  │  └──BottomActionBar.ets              // 聊天页面底部操作栏组件
│  ├──constants
│  │  └──CommonConstant.ets               // 常量
│  ├──datas
│  │  └──MsgData.ets                      // 消息数据实体
│  ├──dialogs
│  │  └──SelectMapDialog.ets              // 选择地图自定义弹框
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  │──pages
│  │  ├──ChatPage.ets                     // 主页面
│  │  ├──LocationDetailPage.ets           // 位置详情页面
│  │  └──NavigationPage.ets               // 路由根页面
│  └──utils
│     └──DisplayUtil.ets                  // 屏幕工具类
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[显示地图](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-presenting)

[标记](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-marker)

[地点选取](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-location-selecting)

[通过花瓣地图应用实现导航等能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-petalmaps)

[petalMaps（拉起花瓣地图）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-petal-maps)

[开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc)

[配置调试签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)

## 代码下载

[聊天页-发送定位卡片并跳转导航示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101011.54377325430779313187245581790182%3A50001231000000%3A2800%3AA1C558710A11AC9B1DB03053C92E0F80873C4A3BCF36C116BA791225148B9B7E.zip?needInitFileName=true)
