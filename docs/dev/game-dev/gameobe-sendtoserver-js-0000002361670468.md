---
title: "发送服务端消息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-sendtoserver-js-0000002361670468
format: md
---


如需实现与实时服务器的交互，可通过发送消息给实时服务器的方式来实现。

## 前提条件

* 玩家已进入房间。
* 您已[开通实时服务器托管服务并上传代码](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-realtime-server-0000002361510716)。

## 开发步骤

1. 进入房间后，可通过调用[Room.sendToServer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section860464713238)方法发送消息给实时服务器，并通过[Room.onSendToServerFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section42171027101016)方法监听发送消息失败的结果。

   ```
   // 发送消息
   global.room.sendToServer(JSON.stringify({
     key1: value1,
     key2: value2
   }));

   // 监听发送消息失败的结果
   global.room.onSendToServerFailed((err: GOBEError) => {
     // 发送消息失败，处理相应游戏逻辑
   });
   ```
2. 通过[Room.onRecvFromServer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section13162043144510)方法监听实时服务器返回的消息。

   ```
   // 接收实时服务器消息
   global.room.onRecvFromServer((data: RecvFromServerInfo) => {
     // 处理消息
     let serverInfo = JSON.parse(data.msg);
   });
   ```
