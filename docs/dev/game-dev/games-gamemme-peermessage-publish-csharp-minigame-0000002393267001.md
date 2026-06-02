---
title: "点对点消息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-peermessage-publish-csharp-minigame-0000002393267001
---

游戏多媒体RTM功能允许向指定接收者发送点对点消息，以实现不同客户端之间的消息传递。RTM点对点消息可以用于多人游戏中的实时通信，例如在线合作游戏、多人对战游戏或社交游戏，从而增强玩家之间的互动和沟通。当前支持发送文本和二进制两种类型的消息。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-minigame-0000002359706946)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-minigame-0000002359706954#section10640141401010)。

## 发送点对点消息

1. 调用[GameMediaEngineForMiniGames.PublishRtmPeerMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemediaengineforminigames-csharp-minigame-0000002358963772#section288918481583)方法，向指定的接收者发送点对点消息。

   ```
   PublishRtmPeerMessageReq req = new PublishRtmPeerMessageReq();
   req.PeerId ="123***556";
   req.MessageType = 1; // 消息类型：1表示文本,2表示二进制
   req.MessageString = "xxxxx";
   String clientMsgId = engine.PublishRtmPeerMessage(req);
   ```
2. 当向指定的接收者发送点对点消息时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[OnPublishRtmPeerMessage](https://developer.huawei.com/consumer/cn/doc/games-references/igamemmeeventhandlerforminigames-csharp-minigame-0000002392643789#section20547175215406)进行了封装，只需注册OnPublishRtmPeerMessageEvent事件监听，并实现OnPulibshRtmPeerMessageCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnPublishRtmPeerMessageEvent+= OnPublishRtmPeerMessageCallbackImpl;

   // 监听处理
   void OnPublishRtmPeerMessageCallbackImpl(PublishRtmPeerMessageResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 接收点对点消息

当接收到点对点消息时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[OnReceiveRtmPeerMessage](https://developer.huawei.com/consumer/cn/doc/games-references/igamemmeeventhandlerforminigames-csharp-minigame-0000002392643789#section135185414017)进行了封装，只需注册OnReceiveRtmPeerMessageEvent事件监听，并实现OnReceiveRtmPeerMessageCallback委托函数即可。

```
// 对事件进行监听
callBackHandler.OnReceiveRtmPeerMessageEvent+= OnReceiveRtmPeerMessageCallbackImpl;

// 监听处理
void OnReceiveRtmPeerMessageCallbackImpl(ReceiveRtmPeerMessageNotify result)
{
   // 根据返回结果做相应业务逻辑处理
}
```
