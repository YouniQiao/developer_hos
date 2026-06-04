---
title: "通勤路径规划"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/commuting_calculation-0000002347813672
---

## 场景介绍

通勤路径规划是便捷生活类应用中的高频使用场景之一，如用户可查看房源与上班地点之间的距离、通勤时长，并获取路线规划。

本示例基于[路径规划](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api)和[petalMaps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-petal-maps)计算出两地的通勤距离及通勤时间，并拉起花瓣地图展示路径规划。

## 效果预览

![](./img/54d111c0.png "点击放大")

## 实现思路

* 计算通勤距离与通勤时间。

  ```
  async calculateDrivingTime() {
    let result = await navi.getDrivingRoutes(params);
    // 计算通勤距离
    this.distance = result.routes[0].steps[0].distance as number;
    // 计算驾驶时间
    this.drivingTime = result.routes[0].steps[0].durationInTraffic as number;
  }
  async calculateWalkingTime() {
    let result = await navi.getWalkingRoutes(params);
    // 计算步行时间
    this.walkingTime = result.routes[0].steps[0].durationInTraffic as number;
  }
  ```
* 调用[petalMaps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-petal-maps)，打开地图应用的路线规划页面。

  ```
  await petalMaps.openMapRoutePlan(this.getUIContext().getHostContext(), params);
  ```

![](./img/b88e3208.png)

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

## 工程目录

```
├──entry/src/main/ets                  // 代码区
│  ├──constants
│  │  └──StyleConstants.ets            // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     ├──HomePage.ets                  // 主页
│     ├──housingResourcesPage.ets      // 房源详情页
│     └──StaticMap.ets                 // 静态地图页
└──entry/src/main/resources            // 应用资源目录
```

## 参考文档

[navi（路径规划）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-petal-maps)

[petalMaps（拉起花瓣地图）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-petal-maps)

[Map Kit开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc)

[配置调试签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)

## 代码下载

[通勤路径规划示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205165528.13560451938301557633610089841679%3A50001231000000%3A2800%3A8F32676DAB4ADBF2734D57EDCEC75E99852FD316254304C24FCECD8941001B79.zip?needInitFileName=true)
