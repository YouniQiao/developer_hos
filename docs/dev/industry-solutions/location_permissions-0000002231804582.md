---
title: "考勤打卡位置获取"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/location_permissions-0000002231804582
---

## 场景介绍

考勤打卡位置获取是综合办公类应用中高频使用场景之一，如用户打卡时需要获取当前位置。

本示例基于[位置服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager)实现地理位置获取的功能，以及用户权限申请的交互效果。

## 效果预览

![](./img/f22f7a3c.png "点击放大")

## 实现思路

1. 调用[requestPermissionsFromUser](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#requestpermissionsfromuser9)接口第一次拉起弹框请求用户授权，若用户拒绝授权，调用[requestPermissionOnSetting](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#requestpermissiononsetting12)接口，二次拉起权限设置弹框请求用户授权。

   ```
   // 申请用户授权
   async requestPermissions(context: UIContext, permissions: Array<Permissions>): Promise<boolean | undefined> {
     let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
     try {
       let data = await atManager.requestPermissionsFromUser(context.getHostContext() as common.UIAbilityContext, permissions);
       return data.dialogShownResults ? data.dialogShownResults[0] : undefined; // 返回请求是否有弹窗
     } catch (e) {
       return undefined;
     }
   }
   // 2次申请用户授权
   async requestPermissionsOnSetting(context: UIContext, permissions: Array<Permissions>): Promise<void> {
    let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
    await atManager.requestPermissionOnSetting(context.getHostContext(), permissions);
   }
   ```
2. 通过[geoLocationManager.Location](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#location)接口获取当前位置的经纬度，再通过[geoLocationManager.getAddressesFromLocation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#geolocationmanagergetaddressesfromlocation)接口将经纬度坐标转换为实际地理位置。

   ```
   getLocation() {
     let locationChange = (err: BusinessError, location: geoLocationManager.Location): void => {
       if (location) {
         let longitude = location.longitude;
         let latitude = location.latitude;
         // 经纬度转换为地理位置
         this.convertLatToPosition(longitude, latitude);
       }
     };
     try {
       geoLocationManager.getCurrentLocation(locationChange);
     } catch (err) {}
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取位置信息权限：[ohos.permission.LOCATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionlocation)。
* 获取模糊位置信息权限：[ohos.permission.APPROXIMATELY\_LOCATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionapproximately_location)。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──constants
│  │  └──StyleConstants.ets                   // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──pages
│  │  └──CheckInPage.ets                      // 打卡页面
│  └──util
│     └──PermissionsRequest.ets               // 申请位置权限
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[@ohos.geoLocationManager（位置服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager)

[@ohos.abilityAccessCtrl（程序访问控制管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl)

## 代码下载

[考勤打卡位置获取示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164255.52193547843034380878835077551247%3A50001231000000%3A2800%3A9949679AC0B812DA8221AB91A197F75D1B190EBB65A79A7DCB64FF4E36EE1160.zip?needInitFileName=true)
