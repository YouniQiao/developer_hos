---
title: "移动数据切换提醒"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/data_network_pause_playback-0000002291777477
---

## 场景介绍

移动数据（流量）切换提醒是影音娱乐类应用中的高频场景之一，如视频播放中遇到WiFi信号中断，需要暂停视频播放并提醒用户，控制数据流量。

本示例主要基于[NetConnection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#netconnection)订阅网络连接状态，监听到网络切换后进行弹窗通知，也可适用于所有WiFi中断需要使用移动数据（流量）时的提醒。

## 效果预览

![](./img/a1baaad4.gif "点击放大")

## 实现思路

1. 使用[register](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#register)订阅指定网络状态变化的通知。

   ```
   this.netCon = connection.createNetConnection();
   this.netCon.register((error: BusinessError) => {});
   ```
2. 使用[on('netLost')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#onnetlost)订阅网络丢失事件，标记为切换网络。

   ```
   this.netCon.on('netLost', (data: connection.NetHandle) => {
     connection.getDefaultNet().then((netHandle: connection.NetHandle) => {});
     this.signal = true;
   });
   ```
3. 使用[on('netAvailable')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#onnetavailable)订阅网络可用事件，确认可用为移动数据网络则回调。

   ```
   this.netCon.on('netAvailable', (data: connection.NetHandle) => {
     if (this.signal) {
       connection.getDefaultNet().then((netHandle: connection.NetHandle) => {
         let getNetCapabilitiesSync = connection.getNetCapabilitiesSync(netHandle);
         if (getNetCapabilitiesSync.bearerTypes[0] == 0) {
           callback(true)
         }
       });
     }
     this.signal = false;
   });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──utils
│  │  └──NetCheck.ets                         // 网络检查页
│  └──pages
│     └──HomePage.ets                         // 主页面
└──entry/src/main/resources                   // 应用资源目录
```

## 权限说明

获取网络信息权限：[ohos.permission.GET\_NETWORK\_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissionget_network_info)。

## 参考文档

[@ohos.net.connection（网络连接管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection)

## 代码下载

[移动数据切换提醒示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225095845.52059464933485391168079783484491%3A50001231000000%3A2800%3AAFFD7B39DFE34730699BF193AB55ECA04E29B48B0A38CAD40E4C5FBC6129FA8B.zip?needInitFileName=true)
