---
title: "最大化显示完整路线"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/max_display_of_routes-0000002335684832
---

## 场景介绍

最大化显示完整路线是运动健康类应用中的典型场景之一，如用户在完成户外跑步后，可以在地图上查看完整的运动轨迹。

本示例通过[更改地图位置](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-camera)实现地图相机移动到指定路线的位置，并基于[TraceOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-traceoverlay)绘制路线动画，实现在地图中心位置展示完整路径的效果。

## 效果预览

![](./img/acac780c.gif "点击放大")

## 实现思路

1. 获取轨迹点的覆盖范围。

   ```
   let extremumValues = mapUtils.getExtremum(this.points);
   ```
2. 地图初始化回调，相机移动到能覆盖轨迹点极值的位置和层级，同时设置轨迹范围的内边距。

   ```
   this.callback = async (err, mapController) => {
     if (!err) {
       // 获取地图的控制器类，用来操作地图
       this.mapController = mapController;
       let latLngBounds: mapCommon.LatLngBounds = {
         northeast: {
           latitude: extremumValues[0],
           longitude: extremumValues[1]
         },
         southwest: {
           latitude: extremumValues[2],
           longitude: extremumValues[3]
         }
       };
       let cameraUpdate = map.newLatLngBounds(latLngBounds, 200);
       this.mapController?.moveCamera(cameraUpdate);
     }
   };
   ```
3. 动画显示运动轨迹路线。

   ```
   let traceOptions: mapCommon.TraceOverlayParams = {  // 运动轨迹的入参
     points: this.points,     // 轨迹点
     animationDuration: 1000, // 轨迹的动画时长
     isMapMoving: false,      // 相机是否跟随动画移动
     color: 0xAA36C18D,       // 轨迹的颜色
     width: 20,               // 轨迹的宽度
     animationCallback: async (pointIndex) => {     // 轨迹的动画回调（回调轨迹点的index）
       if (pointIndex === 0) {
         this.startMarkerBuilder();                 // 轨迹起点标志
       }
       if (pointIndex === this.points.length - 1) {
         this.destMarkerBuilder();                  // 轨迹终点标志
       }
     }
   };
   // 新增轨迹点动画
   await this.mapController.addTraceOverlay(traceOptions);
   ```

![](./img/e672b814.png)

使用示例前，需要参考以下步骤开通[地图服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc#section16133115441516)，并配置签名信息。具体步骤如下：

1. 在AGC创建对应的项目并添加相应的应用，同时开启“地图服务”。
2. 给调试证书添加公钥指纹，使用添加指纹后的调试证书去获取调试profile。
3. 使用调试证书和调试profile来进行[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section297715173233)，使用自动签名无法使用地图服务。
4. 运行项目，跳转地图详情可以查看结果。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──components
│  │  ├──SportDataComp.ets                    // 运动数据组件
│  │  ├──SportMoment.ets                      // 运动动态组件
│  │  └──SportTab.ets                         // 运动圈Tab
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──DataModel.ets                        // 模拟数据源
│  │  ├──SportDataModel.ets                   // 运动数据模型类
│  │  └──SportMomentModel.ets                 // 运动动态模型类
│  ├──pages
│  │  ├──HomePage.ets                         // 首页
│  │  └──RouteShow.ets                        // 运动路线显示页
│  └──utils
│     └──MapUtils.ets                         // 地图工具类
└─entry/src/main/resources                    // 应用资源目录
```

## 参考文档

[map（地图显示功能）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map)

[更改地图位置](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-camera)

[动态轨迹](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-dyntrajectories)

[在地图上绘制标记](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-marker)

[Map Kit开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc)

[配置调试签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)

## 代码下载

[最大化显示完整路线示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164454.81559571161060287618056540363058%3A50001231000000%3A2800%3A2DAFFE44CB13474F93D62046631165D6B293A992813BE009F82A5CD3CF8926A7.zip?needInitFileName=true)
