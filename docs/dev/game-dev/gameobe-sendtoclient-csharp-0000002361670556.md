---
title: "发送客户端消息"
original_url: /docs/dev/game-dev/gameobe-sendtoclient-csharp-0000002361670556
format: md
upstream_id: dev/game-dev/gameobe-sendtoclient-csharp-0000002361670556
last_sync: 2026-06-07
sync_hash: 71dab7e3
---
如需和房间内其他玩家进行通信，玩家可通过发送自定义消息的方式实现。

## 前提条件

玩家已进入房间。

## 开发步骤

1. 消息发送者可通过调用[Room.SendToClient](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#section1230116511324)方法给指定玩家发送自定义消息。如消息发送异常，消息发送者可通过实现[Room.OnSendToClientFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p936375313338)委托收到事件通知。

   ```
   // 发送消息内容
   SendToClientInfo sendToClientInfo = new SendToClientInfo{
     Type = 2, // 发送类型 2：发送给recvPlayerList的玩家
     Msg = "{Msg}", // 具体的自定义消息内容
     RecvPlayerIdList = {} // 接收消息的玩家ID集合
    };
   Global.Room.SendToClient(sendToClientInfo,response => {});
   Global.room.OnSendToClientFailed = response => this.onSendMsgFailed(response);
   private void onSendMsgFailed(BaseResponse response){
      // 发送消息异常，处理游戏逻辑
   }
   ```
2. 消息接收者将通过实现[Room.OnRecvFromClient](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p11136135613315)委托收到发送的消息。

   ```
   Global.room.OnRecvFromClient = recvFrameInfo => this.onRecvMsg(recvFrameInfo);
   private void onRecvMsg(RecvFromClientInfo recvFrameInfo){
      // 接收消息成功，处理游戏逻辑
   }
   ```
