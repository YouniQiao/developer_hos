---
title: "弱网情况下的即时通讯"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/weak_network_reconnection-0000002288904746
---

## 场景介绍

弱网情况下的即时通讯是社交通讯类应用的典型场景之一。弱网通常意味着网络存在高延迟、高丢包率、连接不稳定等情况，这种情况下，即时通讯应用需要保持WebSocket连接的可靠性，避免频繁断开，或者在断开后能够快速恢复。

本示例基于[@ohos.net.webSocket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-websocket)实现弱网情况下使用心跳和重连机制保障通讯。

* 心跳机制用于维持连接的活跃状态，防止由于长时间无数据传输而被防火墙或运营商断开。
* 重连机制用于检测连接状态，在WebSocket连接断开时进行重连。

## 效果预览

![](./img/66e26537.png "点击放大")

![](./img/c339d4c2.png)

App通过[WebSocket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-websocket)与服务端建立长连接后，模拟App与服务端消息发送存在高延迟场景。用户发送信息后，服务端延迟返回，此时聊天界面展示loading状态。当监听到服务端返回时，loading状态消失，消息发送成功。

## 实现思路

1. 创建一个[WebSocket](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-websocket)连接，URL为WebSocket测试地址：“ws://echo.websocket.org”。

   ```
   webSocketManager.connect('ws://echo.websocket.org');
   ```
2. 创建网络连接对象NetConnection，监听网络状态是否可用。当检测到网络可用且WebSocket连接断开后，重新连接服务端。

   ```
   // 订阅网络可用事件
   netConnection.on('netAvailable', (data: connection.NetHandle) => {
       let eventData: emitter.EventData = {
         data: {
           "content": 'available',
           "id": 'networkStateChange',
         }
       };
       emitter.emit('networkStateChange', eventData);
   });
   // 监听到网络可用且webSocket连接已断开后，重连
   emitter.on('networkStateChange', (eventData:emitter.EventData) => {
       if (eventData.data!.content === 'available' && !this.ws) {
         this.reconnect();
       }
   });
   ```
3. 当WebSocket连接意外断开时，进行重连，最大重连次数为5，使用指数退避算法计算重连间隔时间。

   ```
   private _scheduleReconnect(): void {
     this._clearTimers();
     if (this.retryCount >= MAX_RETRY_COUNT) {
     return;
     }
     // 指数退避算法
     const delay = Math.min(
       INITIAL_RETRY_DELAY * Math.pow(2, this.retryCount),
       MAX_RETRY_DELAY
     );
     this.retryCount++;
     this.retryTimer = setTimeout(() => {
       this.reconnect();
     }, delay) as number;
   }
   ```
4. 应用每隔25S进行一次心跳发送，当监听到服务端消息“pong”时网络连接正常，消息发送成功。

   ```
   private _startHeartbeat(): void {
     this.lastPongTime = Date.now();
     // 定期发送心跳
     this.heartbeatTimer = setInterval(() => {
       if (this.ws) {
         this.ws.send('ping').catch((err: BusinessError) => {...});
         // 检查上次ping响应是否超时
         if (Date.now() - this.lastPongTime > HEARTBEAT_INTERVAL + HEARTBEAT_TIMEOUT) {
           this.handleClose();
         }
       }
     }, HEARTBEAT_INTERVAL) as number;
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 使用Internet网络权限：ohos.permission.INTERNET。
* 获取数据网络信息权限：ohos.permission.GET\_NETWORK\_INFO。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets                     // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──DataModel.ets                        // 接口数据
│  ├──pages
│  │  └──Chat.ets                             // 聊天数据
│  ├──utils
│  │  ├──NetworkMonitor.ets                   // 网络监听工具
│  │  └──WebSocketManager.ets                 // WebSocket连接工具
│  └──view
│     └──MessageSend.ets                      // 消息发送
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[@ohos.net.connection（网络连接管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection)

[@ohos.net.webSocket（WebSocket连接）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-websocket)

## 代码下载

[弱网情况下的即时通讯示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101010.20991864781031457054327505431370%3A50001231000000%3A2800%3A4F3C6B8D5588EF707814FA38FB709386AC3D69BC627362C8A3403F5D0AC6E26A.zip?needInitFileName=true)
