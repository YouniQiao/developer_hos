---
title: "获取目的地位置及周边配套地图"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/obtain_destination_map-0000002318736725
---

## 场景介绍

获取目的地位置及周边配套地图是旅游园区类应用中高频使用场景之一，如用户租房、订酒店时，需要查看房屋地理位置、周边配套设施及距离。

本示例基于[MapComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-mapcomponent)构建地图，实现展示地图、目的地定位、周边地铁站等功能。

## 效果预览

![](./img/3066bec9.png "点击放大")

## 实现思路

1. 调用[MapComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-mapcomponent#section816451553012)组件初始化地图。

   ```
   MapComponent({ mapOptions: this.markerVM.mapOptions, mapCallback: this.markerVM.mapCallback })
   ```
2. 调用[searchByText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site#section1117619561413)方法查询目的地周围地铁站位置信息。

   ```
   let params: site.SearchByTextParams = {
     query: '地铁站',
     location: this.center,
     poiTypes: ['SUBWAY'],
     isChildren: true,
     language: 'zh_CN',
     radius: 2000  // 搜索范围
   };
   let result = await site.searchByText(params);
   if (result.sites) {
     for (let site of result.sites) {
       if (site.distance! <= 2000) {
         let metro: MetroInfo = {
           siteId: site.siteId,
           name: site.name,
           address: site.formatAddress,
           location: site.location,
           distance: site.distance
         } as MetroInfo;
         this.metros.push(metro);
       }
     }
     this.metros.sort((a, b) => a.distance - b.distance);
   }
   ```
3. 地图初始化回调，监听地图加载事件，初始化地图标记；监听图标点击事件，使用[animateCamera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#section6163175355113)方法更新相机状态至点击标记处。

   ```
   mapCallback = async (err, mapController) => {
     if (!err) {
       // 获取地图的控制器类
       this.mapController = mapController;
       // 返回地图组件的监听事件管理接口
       this.mapEventManager = this.mapController.getEventManager();
       // 监听地图被加载事件，执行地图加载回调，标记查询POI位置
       this.mapEventManager.on('mapLoad', this.mapLoadCallback);
       // 监听图标点击事件，执行点击回调
       this.mapEventManager.on('markerClick', this.markerClickCallback);
     }
   };

   // 地图加载回调，标记查询POI位置
   mapLoadCallback = () => {
     this.setMarkers();
   };

   // 图标点击回调，移动相机位置
   markerClickCallback = (marker: map.Marker) => {
     this.moveCamera(marker);
   };

   async setMarkers() {
     // ...
     for (let i = 0; i < this.metros.length; i++) {
       let metro = this.metros[i];
       let markerOptions: mapCommon.MarkerOptions = {
         position: metro.location,
         icon: $r('app.media.ic_location_blue'),
         clickable: true,
         draggable: false,
         flat: true,
         zIndex: 1
       };
       let marker = await this.mapController.addMarker(markerOptions);
       this.searchMarkers.push(marker);
     }
   }

   moveCamera(marker: map.Marker) {
     if (!this.mapController) {
       return;
     }
     let target = marker.getPosition();
     let cameraPosition: mapCommon.CameraPosition = {
       target: target,
       zoom: 18
     };
     let cameraUpdate: map.CameraUpdate = map.newCameraPosition(cameraPosition);
     this.mapController.animateCamera(cameraUpdate, CommonConstants.MOVECAMERA_DURATION);
   }
   ```

![](./img/8229ac24.png)

本示例需要开通[地图服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc#section16133115441516)，并进行相应配置，具体步骤如下：

1. 登录AppGallery Connect网站，选择“我的项目”。
2. 在项目列表中找到您的项目，在项目下的应用列表中选择需要打开“地图服务”的应用。
3. 选择API管理，找到“地图服务”开关，打开开关。
4. 确认已经开启“地图服务”开放能力，并完成[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section297715173233)。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                // 代码区
│  ├──components
│  │  └──SearchNearby.ets            // 附近列表
│  ├──constants
│  │  └──CommonConstants.ets         // 公共常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──model
│  │  ├──HouseInfoModel.ets          // 房屋信息模型
│  │  └──MetroStationModel.ets       // 地铁站信息模型
│  ├──pages
│  │  ├──RentingPage.ets             // 租房页
│  │  └──MapPage.ets                 // 地图页
│  └─viewmodel
│    └──MarkerViewModel.ets          // 地图标记模型
└──entry/src/main/resources          // 应用资源目录
```

## 参考文档

[MapComponent（地图组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-mapcomponent)

[MapComponentController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller)

[site（地点搜索）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-site)

## 代码下载

[获取目的地位置及周边配套地图示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170247.70202297346487364777270992829652%3A50001231000000%3A2800%3ADE99F16AE6AFCE3DD098D76210CEFD6C5C5F8E1517ED9F2DCFA8EA7188160999.zip?needInitFileName=true)
