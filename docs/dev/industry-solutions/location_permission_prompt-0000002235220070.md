---
title: "气泡提醒开启定位"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/location_permission_prompt-0000002235220070
---

## 场景介绍

气泡提醒开启定位是旅游园区类应用中高频使用的场景之一，如用户为了精准获取周边景点及住宿信息，需要打开定位权限。

本示例使用[Popup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup)实现气泡提示弹窗：在用户首次进入首页后，检查是否开启定位权限，没有开启则左上角地址弹出气泡，提示开启定位权限，开启权限后气泡不再提示。

## 效果预览

![](./img/ed3fed88.png "点击放大")

## 实现思路

1. 生命周期函数aboutToAppear中调用函数checkPermissions()检查是否已经授权，若未授权，弹出气泡提示。

2. 气泡弹出时，点击去打开按钮，调用位置权限申请接口，通过弹窗向用户申请权限。

   ```
   .bindPopup(this.handlePopup, {
       builder: this.locationPopupBuilder,
       placement: Placement.Bottom,
       offset: { x: 0, y: 0 },
       enableArrow: true,
       showInSubWindow: true,
       autoCancel: true,
       popupColor: 'rgba(56, 55, 54,0.9)',
       backgroundBlurStyle: BlurStyle.NONE,
       width: '96%',
       radius: 3,
       onStateChange: (e) => {
           if (!e.isVisible) {
              this.handlePopup = false
           }
       }
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取模糊位置权限：[ohos.permission.LOCATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionlocation)。
* 获取精确位置权限：[ohos.permission.APPROXIMATELY\_LOCATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionapproximately_location)。

## 工程目录

```
├──entry/src/main/ets		    // 代码区
│  ├──components
│  │  └──LocationPopup.ets	    // 位置气泡组件
│  ├──constant
│  │  └──StyleConstant.ets	    // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──TabIndex.ets		    // 主页
│  └──view
│     ├──HomePageView.ets	    // 首页内容模块
│     └──TabMainView.ets	    // 首页Tab模块
└──entry/src/main/resources	    // 应用资源目录
```

## 参考文档

[Popup控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup)

## 代码下载

[气泡提醒开启定位示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310115429.15522772978545185741883611070595%3A20260604134728%3A2800%3AD568DA4A07548EAADC87EFE18B55F6B1D096E2B5571F2EF50603B57C9C111F36.zip?needInitFileName=true)
