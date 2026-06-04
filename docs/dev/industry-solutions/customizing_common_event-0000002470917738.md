---
title: "自定义公共事件实现进程间通信"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/customizing_common_event-0000002470917738
---

## 场景介绍

自定义公共事件实现进程间通信是各类应用中的高频使用场景之一。

本示例使用[@ohos.commonEventManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager)，通过发布和订阅自定义公共事件实现在两个应用之间通信。

## 效果预览

![](./img/3c36a160.png "点击放大")

## 实现思路

* 发送方：调用[commonEventManager.publish](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagerpublish)方法发布公共事件。

  ```
  commonEventManager.publish('purchaseEvent', {
     bundleName: 'com.example.commoneventreceiver', // 接收方包名
     data: JSON.stringify(eventData),
   }, (err: BusinessError) => {
     if (err) {
       hilog.error(0xFF00,'commonEventSender','事件发布失败:', err.code)
     }
   })
  ```
* 接收方：
  1. 创建订阅者信息。

     ```
     let  subscriberInfo: commonEventManager.CommonEventSubscribeInfo = {
       events: ['purchaseEvent'], // 与发送方一致的自定义事件名
       publisherBundleName: 'com.example.commoneventsender' // 发送方包名
     }
     ```
  2. 调用[commonEventManager.createSubscriber](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagercreatesubscriber)创建订阅者对象。

     ```
     commonEventManager.createSubscriber(subscriberInfo,
       (err: BusinessError, subscriber: commonEventManager.CommonEventSubscriber) =>{
       if (err) {
           return
         }
       // 执行后续逻辑
     })
     ```
  3. 调用[commonEventManager.subscribe](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager#commoneventmanagersubscribe)订阅回调函数，事件触发时获取发送方发送数据。

     ```
     commonEventManager.subscribe(subscriber, (err, data) => {
        if (err || !data) {
          return
        }
        try {
          if (data.data) {
            let purchaseData: ProductInfo = JSON.parse(data.data)
          }
        } catch (e) {
          hilog.error(0xFF00,'commonEventSender','数据解析失败')
        }
      })
     ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

发送方：

```
├──entry/src/main/ets
│  ├──constants
│  │  └──CommonConstants.ets       // 常量
│  ├──entryability
│  │  └──EntryAbility.ets          // 入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets    // 应用备份恢复能力
│  ├──model
│  │  └──ProductInfoModel.ets      // 商品信息接口
│  └──pages
│     └──MainPage.ets              // 主页
└──entry/src/main/resources        // 应用资源目录
```

接收方：

```
├──entry/src/main/ets
│  ├──components
│  │  └──Message.ets               // 消息列表组件
│  ├──constants
│  │  └──Constants.ets             // 常量
│  ├──entryability
│  │  └──EntryAbility.ets          // 入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets    // 应用备份恢复能力
│  ├──model
│  │  ├──MessageData.ets           // 消息数据接口
│  │  └──TabContent.ets            // Tab数据接口
│  └──pages
│     └──MainPage.ets              // 主页
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[@ohos.commonEventManager（公共事件模块）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-commoneventmanager)

## 代码下载

[自定义公共事件实现进程间通信示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100051.91866643161958455802589904377605%3A50001231000000%3A2800%3AD99F9918D13461062DC6D08BC384F9F3A6A13FBCF85B349224A85F040CD5730E.zip?needInitFileName=true)
