---
title: "发送服务端消息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-sendtoserver-csharp-0000002395350497
format: md
---


如需实现客户端与实时服务器的交互，可通过发送消息给实时服务器的方式来实现。

## 前提条件

* 玩家已进入房间。
* 您已[开通实时服务器托管服务](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-realtime-server-0000002361510716)。

## 开发步骤

1. 进入房间后，玩家可通过调用[Room.SendToServer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#section65851047802)方法发送消息给实时服务器，并通过[OnSendToServerFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p84894441847)方法监听发送消息失败的结果。

   ```
   // 发送消息
   SendToServerInfo info= new SendToServerInfo{
     Msg = "{Msg}", // 具体的自定义消息内容
    };
   Global.Room.SendToServer(info, response => {});

   // 监听发送消息失败的结果
   Global.room.OnSendToServerFailed = response =>
   {
      // 发送消息异常，处理游戏逻辑
   };
   ```
2. 通过[Room.OnRecvFromServer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p169825816316)方法监听实时服务器返回的消息。

   ```
   // 接收实时服务器消息
   Global.Room.OnRecvFromServer = (RecvFromServerInfo data) => {
     // 处理消息
   };
   ```
