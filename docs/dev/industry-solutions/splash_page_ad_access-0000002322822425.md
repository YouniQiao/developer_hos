---
title: "闪屏页广告接入"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/splash_page_ad_access-0000002322822425
---

## 场景介绍

闪屏页广告接入是各类应用中的高频使用场景之一，如用户打开应用时加载广告界面。

本示例在应用启动闪屏页接入广告，支持点击广告跳转第三方应用，或点击“跳过”进入应用主页面。

## 效果预览

![](./img/bc70c342.png "点击放大")

## 实现思路

1. 应用启动，在闪屏页aboutToAppear生命周期函数中调用[loadAd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-advertising#loadad)加载广告。

   ```
   aboutToAppear() {
     window.getLastWindow(this.context, (err: BusinessError, win: window.Window) => {
       // 开启全屏模式沉浸页面
       win.setWindowLayoutFullScreen(true);
       // 设置屏幕方向为竖屏
       win.setPreferredOrientation(window.Orientation.PORTRAIT);
     });
     // 调用loadAd加载广告
     let isFullScreen = PreferencesUtil.getSync('isFullScreen', false) as boolean;
     let adId = isFullScreen ? VIDEO_TEST_AD_ID : IMAGE_TEST_AD_ID;
     this.loadAd(adId);
   }
   ```
2. 广告加载成功后，闪屏页展示广告内容。

   ```
   AdComponent({
     ads: [this.ad!],
     displayOptions: this.adDisplayOptions,
     interactionListener: {
       onStatusChanged: (status: string, ad: advertising.Advertisement, data: string) => {
         switch (status) {
           case AdStatus.AD_OPEN:
             break;
           case AdStatus.AD_CLICKED:
             break;
           case AdStatus.AD_CLOSED:
             RouterManager.routeToHome(this.uiContext);
             break;
         }
       }
     }
   })
   ```

![](./img/64e6e647.png)

实现广告加载功能需在AGC上申请调试证书。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取读取开放匿名设备标识符权限：[ohos.permission.APP\_TRACKING\_CONSENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionapp_tracking_consent)。

## 工程目录

```
├──entry/src/main/ets                // 代码区
│  ├──components
│  │  └──CustomButton.ets            // 自定义按钮组件
│  ├──enums
│  │  └──AdStatus.ets                // 广告状态枚举
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──Index.ets                   // 入口页面
│  │  └──SplashAdPage.ets            // 广告页
│  ├──router
│  │  └──RouterManager.ets           // 路由管理
│  ├──utils
│  │  └──PreferencesUtil.ets         // 首选项工具类
│  └──view
│     └──AdView.ets                  // 广告视图页面
└──entry/src/main/resources          // 应用资源目录
```

## 参考文档

[开屏广告](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-splash)

[@ohos.advertising（广告服务框架）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-advertising)

## 代码下载

[闪屏页广告接入示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225143207.56539757841815292164835757226520%3A50001231000000%3A2800%3A10FB286B480EB87A2E383B90EDDA10501D62233C05E51A3BBFF7B8264D440CDB.zip?needInitFileName=true)
