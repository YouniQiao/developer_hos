---
title: "地图旋转与移动"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/confirm_direction_in_map_to_rotate_and_move-0000002335234358
---

## 场景介绍

地图旋转与移动是便捷生活类应用中的高频使用场景之一，如地图根据用户的行进方向自动旋转和同步移动，以便用户快速判断行进路线。

本示例基于[animateCamera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#section6163175355113)和[animateCameraWithMarker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#section02401132134312)，实现了地图的旋转与移动功能。

## 效果预览

![](./img/7ceabeed.png "点击放大")

## 实现思路

1. 地图初始化。

   ```
   initMap(): void {
     this.flag = false;
     this.currentPosition = Constants.POSITIONS[0];
     this.targetPosition = Constants.POSITIONS[1];

     // 地图初始化参数
     this.mapOption = {
       position: {
         target: this.positions[0],
         zoom: Constants.ZOOM_INIT,
         bearing: Constants.BEARING_DEFAULT
       }
     }
     // 地图初始化的回调
     this.callback = async (err, mapController) => {
       if (!err) {
         // 配置初始化的回调内容
       }
     }
   }
   ```
2. 基于地图指向正北方向，计算起始点与目标点移动路线和正北的夹角度数。

   ```
   calculateAngle(startPosition: mapCommon.LatLng, targetPosition: mapCommon.LatLng): number {
     // 一段路线起点和终点两端的经纬度坐标相减
     let offsetLng: number = targetPosition.longitude - startPosition.longitude;
     let offsetLat: number = targetPosition.latitude - startPosition.latitude;
     // 通过反正切函数得到的弧度值转换为角度
     let angle: number =  Math.atan2(offsetLng, offsetLat) * 180 / Math.PI
     return angle;
   }
   ```
3. 使用[animateCamera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#section6163175355113)旋转地图，使用[animateCameraWithMarker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#section02401132134312)移动地图，更新位置图标。

   ```
   rotateAndMove(): void {
     this.rotateAngle = -CALCULATE_UTIL.calculateAngle(this.currentPosition, this.targetPosition);

     let count: number = 0
     let intervalID: number = setInterval(() => {
       if (count === Constants.IS_ROTATE && this.startMarker && this.mapController) {
         count++;
         MAP_UTIL.rotateToAngle(this.currentPosition, this.rotateAngle, this.mapController);
       } else if (count !== Constants.IS_ROTATE && this.startMarker && this.mapController) {
         MAP_UTIL.moveCameraToPositionWithMarker(
           this.targetPosition,
           this.startMarker,
           this.rotateAngle,
           this.mapController
         );
         let intervalIDMove: number = setInterval(() => {
           if (MAP_UTIL.cameraMoveFinished) {
             this.targetMarker?.setAlpha(Constants.MARKER_ALPHA);
             this.currentPosition = this.targetPosition;
             this.startMarker?.setPosition(this.currentPosition);
             clearInterval(intervalIDMove);
           }
         }, Constants.DURATION_100)
         clearInterval(intervalID);
       }
     }, Constants.DURATION_1000);
   }
   ```

![](./img/7bf0ab19.png)

本示例需要[开通地图服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc#section16133115441516)，并进行相应配置，具体步骤如下：

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
├──entry/src/main/ets            // 代码区
│  ├──common
│  │  └──Constants.ets           // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──MainPage.ets            // 主页
│  └──utils
│     ├──CalculateUtil.ets       // 计算工具类
│     ├──Logger.ets              // 日志工具类
│     ├──MapUtil.ets             // 地图工具类
│     └──PermissionsUtil.ets     // 权限工具类
└──entry/src/main/resources      // 应用资源目录
```

## 参考文档

[map（地图显示功能）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map)

[mapCommon（地图属性模型）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common)

[Map Kit开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc)

[配置调试签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)

## 代码下载

[地图旋转与移动示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317194353.73235979883703328902058136856082%3A20260604122155%3A2800%3A4236B34EB287F4850C27188407BEF1AEECAD76513481B5438E65884705D8B5D8.zip?needInitFileName=true)
