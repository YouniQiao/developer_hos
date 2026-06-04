---
title: "获取附近网点位置并一键导航"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/list_of_nearby_outlets-0000002347931784
---

## 场景介绍

查询附近服务网点的电话、地址并导航是便捷生活类应用中的高频使用场景之一。

本示例基于[位置服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager)和[地点搜索](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site)实现搜索当前位置附近的网点，并显示网点信息列表，也可用于实现周边餐馆、银行、商场等多种POI的列表检索与导航。

## 效果预览

![](./img/e8d7faee.png "点击放大")

## 实现思路

1. 通过[getCurrentLocation()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#geolocationmanagergetcurrentlocation)获取设备当前位置信息，再通过[getAddressesFromLocation()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#geolocationmanagergetaddressesfromlocation)接口调用逆地理编码服务，将坐标转换为地理描述，地理描述中包含地点名信息。

   ```
   // NearbyOutletsListPage.ets
   async getLocation(): Promise<mapCommon.LatLng> {
     let location = await geoLocationManager.getCurrentLocation();
     try {
       if (isAvailable) {
         let reverseGeocodeRequest: geoLocationManager.ReverseGeoCodeRequest =
           { "latitude": location.latitude, "longitude": location.longitude, "maxItems": 1 };
         geoLocationManager.getAddressesFromLocation(reverseGeocodeRequest, (err, data) => {
           if (err) {...
           } else {
             let geoAddress = data as geoLocationManager.GeoAddress[];
             this.placeName = this.getLocationName(geoAddress[0].placeName ?? '', geoAddress[0].premises ?? '');
           }
         });
       }
     }
   }
   ```
2. 点击列表项中的电话号码会调用[call.makeCall()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call#callmakecall7)接口跳转到系统拨号页面，点击列表项中的“到这去”图标会调用[openMapRoutePlan()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-petal-maps#section1765318218173)接口跳转到系统地图页面并显示路径。

   ```
   // NearbyOutletsListPage.ets
   jumpToCallPage(phoneNumber: string) {  // 跳转到系统拨号页
     let isSupport = call.hasVoiceCapability();
     if (isSupport) {
       call.makeCall(phoneNumber, (err: BusinessError) => {...});
     }
   }
   async jumpToLocationMap(location: mapCommon.LatLng) {  // 跳转到系统地图页
     let params: petalMaps.RoutePlanParams = {
       destinationPosition: location
     };
     await petalMaps.openMapRoutePlan(this.getUIContext().getHostContext(), params);
   }
   ```

![](./img/186649a1.png)

本示例需要开通[地图服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc#section16133115441516)，并进行相应配置，具体步骤如下：

1. 登录AppGallery Connect网站，选择“我的项目”。
2. 在项目列表中找到您的项目，在项目下的应用列表中选择需要打开“地图服务”的应用。
3. 选择API管理，找到“地图服务”开关，打开开关。
4. 确认已经开启“地图服务”开放能力，并完成[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section297715173233)。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取精准位置，精准度在米级别：[ohos.permission.LOCATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionlocation)。
* 获取模糊位置，精确度为5公里：[ohos.permission.APPROXIMATELY\_LOCATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionapproximately_location)。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──dataModel
│  │  └──OutletInfo.ets                       // 网点信息数据模型
│  ├──entryability
│  │  └──EntryAbility.ets                     // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──NearbyOutletsListPage.ets            // 附近网点列表页
│  └──utils
│     └──PermissionsUtil.ets                  // 向用户申请授权工具类
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[向用户申请授权](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-user-authorization)

[site（地点搜索）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site)

[@ohos.geoLocationManager（位置服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager)

[@ohos.telephony.call（拨打电话）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call)

[petalMaps（拉起地图应用）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-petal-maps)

[开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc)

[配置调试签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)

## 代码下载

[获取附近网点位置并一键导航示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310114506.73728752761969926727887297917658%3A20260604122319%3A2800%3AD482A0BBF9423D6E3E52413C0931E44FBC01450D23F70AE89B212A5D3D64DC60.zip?needInitFileName=true)
