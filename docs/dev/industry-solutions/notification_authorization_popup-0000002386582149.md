---
title: "应用内授权通知弹窗"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/notification_authorization_popup-0000002386582149
---

## 场景介绍

应用内授权通知弹窗是求职招聘类应用中的高频使用场景之一，如用户首次进入应用时，应用弹窗提示，引导用户开启消息通知授权。

本示例基于[NotificationManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager)实现进入应用弹出请求授权弹窗的功能。

## 效果预览

![](./img/b573d74e.gif "点击放大")

## 实现思路

进入应用时，通过[notificationManager.isNotificationEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationmanagerisnotificationenabledsync12)接口查询应用是否获得通知授权。若未获得授权，调用[notificationManager.requestEnableNotification](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationmanagerrequestenablenotification10-1)接口拉起通知授权弹窗请求用户授权，若用户拒绝授权，调用[notificationManager.openNotificationSettings](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationmanageropennotificationsettings13)接口拉起应用的通知设置界面，二次请求用户授权。

```
async aboutToAppear() {
  if (!notificationManager.isNotificationEnabledSync()) {
    // 一次授权
    await this.requestPermissions();
    if (this.isDialogShown !== true) {
      // 二次授权
      await this.requestPermissionsOnSetting();
    }
  }
}
async requestPermissions(): Promise<void> {
  try {
    await notificationManager.requestEnableNotification(this.context);
    this.isDialogShown = true;
  } catch (err) {
    // ...
  }
}
async requestPermissionsOnSetting(): Promise<void> {
  try {
    await notificationManager.openNotificationSettings(this.context);
  } catch (err) {
    // ...
  }
}
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──data
│  │  └──JobData.ets                          // 职位数据
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──MainPage.ets                         // 主页
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[@ohos.notificationManager（NotificationManager模块）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager)

## 代码下载

[应用内授权通知弹窗示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225093453.96738508999823867046896911309343%3A50001231000000%3A2800%3ACF609DFD234D4AB6199ADF57933F1E9A163DD2157DDD1E0BCA3EDAD2203AE365.zip?needInitFileName=true)
