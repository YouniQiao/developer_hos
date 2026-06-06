---
title: "智能穿戴导航协同"
displayed_sidebar: appDevSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-smartwatchnavigation
format: md
---

# 智能穿戴导航协同

## 概述

本文以智能手表的协同导航功能为典型案例，系统阐述了手机与智能穿戴设备通过通信协作实现地图导航的技术方案，主要包含了智能穿戴设备协同导航的体验设计、方案设计、界面开发及功能开发。

* [体验设计](#section1736651042110)：从设计与交互层面，展示智能穿戴设备协同导航的体验设计要点。
* [方案设计](#section8229111792118)：从交互流程层面，展示智能穿戴设备协同导航应用整体的实现方案。
* [界面开发](#section15111857670)：从手机与智能穿戴设备双端，展示手机与智能穿戴设备协同导航中的界面开发要点。
* [功能开发](#section88311141387)：展示智能穿戴设备协同导航应用中的核心功能开发的原理与开发步骤。

## 体验设计

本章节从[UX设计](#section10370135220120)和[UI交互](#section1914862101311)两个维度，详细阐述智能穿戴设备协同导航的体验设计方案。

###UX设计

在智能穿戴设备协同导航实践中，涉及手机与智能穿戴设备的互联通信，双方协同完成导航功能，因此UX设计需要同时考虑手机端与智能穿戴设备端。手机端UX设计以地图展示页为核心，智能穿戴设备端UX设计以地图展示页、导航页为核心，具体设计如下表所示。

**表1** 智能穿戴设备协同导航手机与智能穿戴设备侧UX设计

| 手机侧页面 | 效果图（手机） | 效果图（智能穿戴设备） |
| --- | --- | --- |
| 首页（地图展示页） | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/mgfNlTIgSjuo44sCBFu7ag/zh-cn_image_0000002318967316.png?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=3A828C2EFBBCD57AF747174F204E2531BAD9E04DABBCFCA056D4B61D7F3A0F6D "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/o2Phtkn0Rn6RFifxcyfHhA/zh-cn_image_0000002353005921.png?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=F5D4E6BA7DCF416EFEC2A21A4F81DF2D4CFECFA8A068EA7CB4C1E6EFABE2095C) |
| 导航页 | 不涉及 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/tIxT1fyHQrGqBq4X_eHw7Q/zh-cn_image_0000002319127156.png?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=8F76AB6935D8B4BCBA0419956C929CFF32FCCCFBAD5DE211F85E00A2D7C39FE0) |

###UI交互

智能穿戴设备协同导航的UI交互设计主要包含以下关键特性：

1. 导航提醒：手表通过振动反馈提示用户。
2. 双端同步：目的地选择在手机与手表端实时同步。
3. 常亮显示：导航过程中保持手表屏幕常亮，导航结束后关闭常亮。
4. 交互控制：支持通过旋转表冠缩放地图视图。

## 方案设计

本章节将系统阐述智能穿戴设备协同导航的交互逻辑，完整呈现手机与智能穿戴设备协同的实现方案。

###实现方案

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/OW1DABJnQq6ra8Xaliw9TQ/zh-cn_image_0000002353086117.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=FE05519FE2F762DD72605900E2736B3498E036B74531FC0EF9586E1DE1FACDC0 "点击放大")

## 界面开发

本章节将详细阐述协同导航场景下手机端与智能穿戴设备端的核心界面开发规范，重点解析双端界面开发的关键技术要点。

###手机端界面开发核心要点

手机端界面开发规范要点：

1. 沉浸式地图展示：全屏适配，优化视觉呈现。
2. 交互设计：采用半模态转场实现操作按钮唤起。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/4QCAdZF4TfqlDLyEE79xeg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=59BB9E7F439A31710EAD98750C11D5B110B030D6D91049FB4C0EDFEFCADFA981)

沉浸式地图展示，开发者可参考[窗口沉浸式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-immersive)。

操作按钮的拉起，开发者可以参考[半模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition)。

###智能穿戴设备端界面开发核心要点

由于智能穿戴设备屏幕尺寸有限且采用圆形表盘设计，界面开发需特别注意：

1. 内容适配：确保显示内容完整居中，避免挤压或截断。
2. 布局优化：针对圆形屏幕特性进行UX适配。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/vnEyI1f2S6inzkJXaEcmWg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=DA72D323410D12E0174FB20B1B9C6BF15D9CDA314E85DE259C38AC04D4B0C4BC)

智能穿戴设备界面开发具体可参考[智能穿戴应用开发](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-smartwatch)。

## 功能开发

本章节将详细解析智能穿戴设备协同导航的核心功能开发，重点阐述[地图操作](#section1084068101014)、[互联通信](#section5132818141013)、[消息通知](#section113733017108)和[振感提示](#section15991113613101)四大核心功能的实现方案，为开发者提供明确的技术指导。

###地图操作

地图操作主要涉及地图展示以及地图绘制两个功能，地图展示能力开发者可以参考[显示地图](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-presenting)。

智能穿戴设备协同导航的地图绘制功能通过[MapComponentController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller)实现，具体包含以下核心操作：

**地图点击（目的地标记）：**

**图1** 地图点击操作时序图
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/3rmrU23pSkSADI7g624tvQ/zh-cn_image_0000002318967344.jpg?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=E8BFE0FD06E74E5BEE605FC57377196E2C0D7553619D0D5CE34AA5F109CD7AD8 "点击放大")

开发步骤如下：

1. 注册地图点击事件监听器，在回调函数中将触点的地理坐标持久化存储至destination\_Position状态变量中。

   ```
   // Destination location information obtained based on the map click event.
   @StorageLink('destination_Position') @Watch('changeDestinationPositionMark') destination_Position: mapCommon.LatLng =
     {
       longitude: 0,
       latitude: 0
     };
   // ...
   aboutToAppear(): void {
     // ...
     // Map initialization callback
     this.callback = async (err, mapController) => {
       if (!err) {
         // ...
         let mapOnclickCallBack = async (position: mapCommon.LatLng) => {
           if (this.isStartNavigation) {
             // If the navigation has started, you are not allowed to click on the mobile phone.
             this.isBarShow = false;
           } else {
             // Send destination information to the watch for synchronization
             this.connectUtils.sendMessage(JSON.stringify(new CommunicationInformation(1, undefined, position)));
             // Modify destination_Position to trigger changeDestinationPositionMark
             // To refresh the destination mark on the map.
             this.destination_Position = position;
             this.isBarShow = true;
           }
         };
         this.mapEventManager.on('mapLoad', mapLoadCallback);
         this.mapEventManager.on('mapClick', mapOnclickCallBack);
       }
     };
     // Obtains the connected watch device and subscribes to the watch's message sending event.
     this.connectUtils.getConnectedDevices();
     try {
       this.connectUtils.notifyClient = wearEngine.getNotifyClient(this.getUIContext().getHostContext());
     } catch (err) {
       hilog.error(0x0000, TAG,
         `Failed to get notify client. Cause code: ${err.code}, message: ${err.message}`);
     }
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/SmartWatchMapNavigation/blob/master/products/phone/src/main/ets/pages/Index.ets#L49-L168" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>

2. 监听destination\_Position变化，调用[addMarker()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#addmarker)动态更新目的地地图标记。

   ```
   // Destination location information obtained based on the map click event.
   @StorageLink('destination_Position') @Watch('changeDestinationPositionMark') destination_Position: mapCommon.LatLng =
     {
       longitude: 0,
       latitude: 0
     };
   // ...
   /*
    * Triggered when destination_Position changes.
    * Used to refresh the destination marker on the map when the destination changes.
    */
   async changeDestinationPositionMark() {
     if (this.mapController) {
       this.mapController.clear();
       let markerOptions: mapCommon.MarkerOptions = {
         position: this.destination_Position,
         rotation: 0,
         visible: true,
         zIndex: 0,
         alpha: 1,
         anchorU: 0.5,
         anchorV: 1,
         clickable: true,
         draggable: true,
         flat: false,
       };
       try {
         await this.mapController.addMarker(markerOptions);
       } catch (err) {
         hilog.error(0x0000, TAG,
           `Failed to add marker. Cause code: ${err.code}, message: ${err.message}`);
       }
     }
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/SmartWatchMapNavigation/blob/master/products/phone/src/main/ets/pages/Index.ets#L48-L112" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>


**路径导航：**

1. 根据当前位置与目的地位置，生成导航路线信息。

   ```
   Button($r('app.string.DrawRoute'))
     .width(158)
     .height(40)
     .onClick(async () => {
       let params: navi.RouteParams = {
         origins: [
           {
             latitude: this.myLocation.latitude,
             longitude: this.myLocation.longitude
           }
         ],
         destination: this.destination_Position,
         language: 'zh_CN'
       };
       const result = await navi.getWalkingRoutes(params);
       let drawRouteUtil: DrawRouteUtils = new DrawRouteUtils();
       // Draw a route on a map using navigation route information.
       drawRouteUtil.drawRoute(this.mapController, result.routes[0].steps[0].roads)
     })
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/SmartWatchMapNavigation/blob/master/products/phone/src/main/ets/pages/Index.ets#L196-L214" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>

2. 通过调用[addPolyline()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller#addpolyline)接口，结合导航路线信息，绘制可视化路径。

   ```
   /*
    * Draw a navigation route on a map
    * The first parameter needs to be transferred to MapComponentController to operate the map.
    * The second parameter needs to pass in the navigation information to draw the navigation route.
    * @param mapController : map controller for drawing markers or routes on a map.
    * @param steps : Navigation route information obtained through the Map Kit
    */
   async drawRoute(mapController: map.MapComponentController | undefined, steps: Array<navi.RouteRoad>) {
     if (mapController === undefined) {
       hilog.info(0X0000, TAG, 'Drawing failed');
       return;
     }
     let roads: Array<mapCommon.LatLng> = [];
     let des_arr: RouteInfomation[] = [];
     for (let index = 0; index < steps.length; index++) {
       for (let i = 0; i < steps[index].polyline.length; i++) {
         roads.push(steps[index].polyline[i]);
         des_arr.push(new RouteInfomation(steps[index].action as string, steps[index].distance, steps[index].duration))
       }
     }

     // The route segment information is stored in the AppStorage and then sent to the watch through the WearEngine.
     AppStorage.setOrCreate('routeInfomation', des_arr);

     let polylineOption: mapCommon.MapPolylineOptions = {
       points: roads,
       color: 0xFF089C57,
       jointType: mapCommon.JointType.ROUND,
       width: 24
     };

     // Use MapComponentController to draw a route on a map
     mapController.addPolyline(polylineOption).catch((error: Error) => {
       let err = error as BusinessError;
       if (err.code) {
         hilog.error(0x0000, TAG,
           `Failed to add poly line. Cause code: ${err.code}, message: ${err.message}`);
       }
     }).then(() => {
       hilog.info(0X0000, TAG, 'Drawing success');
     });
   }
   ```

   
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/SmartWatchMapNavigation/blob/master/commons/map/src/main/ets/common/utils/DrawRouteUtils.ets#L26-L67" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：DrawRouteUtils.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/f999Hw46R9y5PMfUMNXtWA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=058256777EF637A51C518939FD75DAB9CF8F80E43BD37C63C4F82ABACFC8993F)

地图实现依赖Map Kit能力，使用前首先需要申请Map服务，详情请参考Map Kit[开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc)。

###互联通信

智能穿戴设备协同导航系统通过设备间通信协议实现双端数据同步，各类消息通过头部TAG标志位进行区分，具体消息类型定义如下表所示：

**表2** 消息实体类消息类型表

| 消息类型 | TAG标志位取值 | 作用 |
| --- | --- | --- |
| 路线信息 | 0 | 用于同步导航路线信息。 |
| 目的地定位 | 1 | 用于同步目的地定位信息。 |
| 信号信息 | 2及以上 | 用于信号，包括手机侧告知手表侧导航已开启、手表侧告知手机侧导航结束等。 |

在对端消息监听（手机端与智能穿戴设备端均使用，监听对方发来的消息）的回调中，会对发送的消息进行转码，并根据TAG标志位进行数据的存储，分别用于不同的逻辑。

```
/**
 * Callback Method for Listening to Peer Communication.
 */
private onMsgCallback: Callback<wearEngine.P2pMessage> = (data: wearEngine.P2pMessage): void => {
  let str: string = '';
  // Decodes the intercepted content into a character string.
  if (canIUse('SystemCapability.Utils.Lang')) {
    let decoder: util.TextDecoder = util.TextDecoder.create();
    str = decoder.decodeToString(data.content);
  }
  // Convert the JSON character string to the CommunicationInformation type.
  let communicationInformation: CommunicationInformation = JSON.parse(str);
  // Determine the information type based on the tag.
  if (communicationInformation.tag === 0) {
    // When tag is set to 0,Indicates that the transferred information is path description information,
    // which is stored in AppStorage to refresh the watch navigation page.
    AppStorage.setOrCreate('route_information', communicationInformation.routeInfomation);
  } else if (communicationInformation.tag === 1) {
    // When tag is set to 1, Indicates that the transferred information is destination location information
    // and is saved to the AppStorage for synchronizing the destination logo of the mobile phone and watch.
    AppStorage.setOrCreate('destination_Position', communicationInformation.location);
  } else if (communicationInformation.tag === 2) {
    // Signal sent from your phone to your watch when navigation starts, indicating that navigation starts.
    AppStorage.setOrCreate('isStartNavigation', true);
  } else {
    // Signal sent from your watch to your phone when navigation ends, indicating that navigation ends.
    AppStorage.setOrCreate('isStartNavigation', false);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/SmartWatchMapNavigation/blob/master/commons/Communication/src/main/ets/common/utils/CommunicationUtils.ets#L69-L97" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：CommunicationUtils.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/KCt_xt6vQeOEPxhY4YBbwA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=7E236CB3C48DA7DDCAB55556E2BD319C8BB124013FE9651186279E5E07FA9C5C)

手机手表互联通信的具体实现，详情可参考[智能穿戴应用开发](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-smartwatch)与[应用间消息通信](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/p2p_communication)。

###消息通知

在导航启动阶段，手机端需通过WearEngine提供的notify()接口向智能穿戴设备端发送通知消息，告知手表端导航开始。

```
/*
 * Method of notifying a message to watch.
 */
notifyMessage() {
  // Configure the notification content.
  // Including the package name of the notification source, notification title, and notification content.
  let type1Notification: wearEngine.Notification = {
    type: wearEngine.NotificationType.NOTIFICATION_WITHOUT_BUTTONS,
    bundleName: 'com.example.smartwatchmapnavigation',
    title: 'smartwatchmapnavigation',
    text: 'walk navigation start',
  }
  let options: wearEngine.NotificationOptions = {
    notification: type1Notification,
    onAction: (feedback: wearEngine.NotificationFeedback) => {
      hilog.info(0x000, TAG,
        `one button notify get feedback is ${feedback.action ? feedback.action : feedback.errorCode}`);
    }
  }

  // Sends a notification to the watch based on notifyClient.
  // This method can be invoked only by apps on mobile phones.
  this.notifyClient!.notify(this.deviceRandomId, options).then(result => {
    hilog.info(0x000, TAG, `Succeeded in sending notification.`);
  }).catch((error: BusinessError) => {
    hilog.error(0x000, TAG, `Failed to send notification. Code is ${error.code}, message is ${error.message}`);
  })
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/SmartWatchMapNavigation/blob/master/commons/Communication/src/main/ets/common/utils/CommunicationUtils.ets#L154-L181" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：CommunicationUtils.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/g5M6iiGeTYCr4CFQw1Uryw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=BF3B44280478A75A63DABE28D507EF4C66532A4CDBAAF2D21DF5D977BBE0AD1F)

消息通知依赖wearengine服务，详情可参考[智能穿戴应用开发](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-smartwatch)与[穿戴设备模板化通知](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/device_notification)。

###振感提示

在导航过程中，智能穿戴设备需要使用振动向开发者提供振感提示。

```
// Vibration Tools Class
export class VibratorUtil {
  /*
   * The method of  Vibration.
   */
  Vibrator() {
    try {
      // Use the startVibration method to enable vibration and set the duration.
      vibrator.startVibration({
        type: 'time',
        duration: 1000,
      }, {
        id: 0,
        usage: 'alarm'
      }, (error: BusinessError) => {
        if (error) {
          hilog.error(0x0000, TAG, `Failed to start vibration. Code: ${error.code}, message: ${error.message}`);
          return;
        }
        hilog.info(0x0000, TAG, 'Succeed in starting vibration');
      });
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x00000, TAG, `An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/harmonyos_samples/SmartWatchMapNavigation/blob/master/commons/vibrator/src/main/ets/commons/VibratorUtil.ets#L23-L49" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：VibratorUtil.ets</a></div>


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/skZHqsqCTo2L_udcCP7_Wg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074247Z&HW-CC-Expire=86400&HW-CC-Sign=95F7473B74C628DF4EE199E1D106F97E85843FD5C8B28B28AC1E0E7F9588E3BE)

使用振动需要进行权限申请，详情可参考[振动开发指导(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vibrator-guidelines)。

## 示例代码

* [基于WearEngine实现协同导航应用](https://gitcode.com/harmonyos_samples/SmartWatchMapNavigation)
