---
title: "公交上下车提醒"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/bus_on_off_notification-0000002394404617
---

## 场景介绍

公交上下车提醒是公交地铁类应用中的典型场景之一，如用户在乘坐公交时，可开启上下车提醒功能，避免错过目标站点。

本示例基于[Notification Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/text-notification)实现公交上下车提醒功能，车辆即将到达上车和下车站点时，设备将通过铃声、震动、横幅或锁屏等方式主动触发提醒。

## 效果预览

![](./img/5a5354c6.png "点击放大")

## 实现思路

1. 模拟公交车行驶过程：使用[setInterval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer#setinterval)设置每一秒公交车移动一次（半个站点），更新偏移量。公交车移动到用户当前位置时，用户上车随公交车一起移动，在即将到达上下车站点时触发上下车提醒。

   ```
   this.timerID = setInterval(() => { // 创建定时器，每秒更新公交车位置进行位置判断
     this.busPoint = this.busPoint + 1 // 公交车位置移动
     this.offsetX = this.offsetX + this.halfScalesWidth; // 公交车图标偏移量增加
     if (this.busPoint % 2 === 0 && this.busPoint / 2 - 1 === this.currentPoint) {
       this.currentPoint = this.currentPoint + 1; // 用户当前位置跟随车辆进入下一站点
     }
     if ((this.busPoint + 1) / 2 === this.currentPoint) { // 公交车即将到达用户所在上车点
       BusNotification.onBusNotification() // 执行上车提醒通知
     }
     if (this.offPoint !== undefined) { // 检测是否设置下车点
       if ((this.busPoint + 1) / 2 === this.offPoint) { // 公交车即将到达用户所设置下车点
         BusNotification.offBusNotification() // 执行下车提醒通知
       }
     }
   }, 1000)
   ```
2. 使用[Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider)绘制公交车行驶轨道，通过更新覆盖在轨道上的图标来表示用户所在站点、上下车站点、起点、终点，并通过偏移量控制公交车移动。

   ```
   Stack() {
     Image($r('app.media.bus')) // 公交车图片
       .translate({ x: this.offsetX }) // 偏移量控制公交车移动
     Slider({
       min: 0,
       max: 100,
       step: 10,
       value: this.sliderValue,
     })
       .width(this.sliderTrackWidth) // 设置Slider的轨道宽度
     Row() {
       ForEach(Array.from({ length: 11 }), (item: number, index) => {
         Image($r('app.media.arrow_right'))
         ... // 表示上下车点、当前位置、起点、终点的图片
       })
     }
   }
   ```
3. 使用[Notification Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/text-notification)实现公交上下车提醒，发布社交通信类型的普通文本类型通知。

   ```
   let notificationRequest: notificationManager.NotificationRequest = {
     id: 1,
     content: {
       notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT, // 普通文本类型通知
       normal: {
         title: '请上车',
         text: '车辆即将到站',
       }
     },
     notificationSlotType: notificationManager.SlotType.SOCIAL_COMMUNICATION,
   };
   notificationManager.publish(notificationRequest, (err: BusinessError) => {
   });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──components
│  │  ├──BottomContent.ets                    // 底部信息
│  │  ├──BusCome.ets                          // 公交车抵达
│  │  ├──BusSlider.ets                        // 公交车滑动条
│  │  ├──CustomDialogNotice.ets               // 上下车提醒打开弹窗
│  │  └──TopContent.ets                       // 顶部信息
│  ├──entryability
│  │  └──EntryAbility.ets                     // 应用入口类
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──ConstData.ets                        // 信息数据
│  ├──pages
│  │  └──BusMove.ets                          // 公交主页
│  └──utils
│     ├──BusNotification.ets                  // 用户通知服务
│     └──Logger.ets                           // 日志打印
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[Timer（定时器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer)

[Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider)

[Notification Kit发布文本类型通知](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/text-notification)

## 代码下载

[公交上下车提醒示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260428194038.60284035343724977585421415103009%3A20260604131400%3A2800%3A5767E508915AA2519772A2E713378054BA47329FFA33A40794CCD077E0195572.zip?needInitFileName=true)
