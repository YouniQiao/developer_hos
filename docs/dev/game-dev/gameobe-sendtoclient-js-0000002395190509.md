---
title: "发送客户端消息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-sendtoclient-js-0000002395190509
---

如需和房间内其他玩家进行通信，玩家可通过发送自定义消息的方式实现。

## 前提条件

玩家已进入房间。

## 开发步骤

1. 消息发送者可通过调用[Room.sendToClient](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section19419214453)方法发送自定义消息。如消息发送异常，消息发送者可通过[Room.onSendToClientFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section27793449292)方法收到事件通知。

   ```
   // 发送消息内容
   let sendToClientInfo = {
     type: 2,                             // 发送类型 2：发送给recvPlayerList的玩家
     msg: '{msg}',                       // 具体的自定义消息内容
     recvPlayerIdList: ['xxx', 'xxx'], // 接收消息的玩家ID集合
   }
   global.room.sendToClient(sendToClientInfo);
   global.room.onSendToClientFailed((error) => {
     // 发送消息异常，做相关的游戏逻辑处理
   });
   ```
2. 消息接收者将通过[Room.onRecvFromClient](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section1733334202920)方法收到消息。

   ```
   global.room.onRecvFromClient((recvFromClientInfo) => {
     const sendPlayerId = recvFromClientInfo.sendPlayerId;
     if (sendPlayerId === global.room.playerId) {
       // 发送者是自己时，做相关游戏逻辑处理
     }
   });
   ```
