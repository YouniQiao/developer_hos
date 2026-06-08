---
title: "点对点消息"
original_url: /docs/dev/game-dev/games-gamemme-peermessage-publish-minigame-0000002359547090
format: md
upstream_id: dev/game-dev/games-gamemme-peermessage-publish-minigame-0000002359547090
last_sync: 2026-06-07
sync_hash: 76ac2624
---
游戏多媒体RTM功能允许向指定接收者发送点对点消息，以实现不同客户端之间的消息传递。RTM点对点消息可以用于多人游戏中的实时通信，例如在线合作游戏、多人对战游戏或社交游戏，从而增强玩家之间的互动和沟通。当前支持发送文本和二进制两种类型的消息。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-minigame-0000002393266909)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-enginecreateparams-minigame-0000002359123496#ZH-CN_TOPIC_0000002359123496__p3284173213149)值为true（即RTM为开启状态）。

## 发送点对点消息

1. 调用[GameMediaEngine.publishRtmPeerMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section626619454195)方法，向指定的接收者发送点对点消息。

   ```
   const req: PublishRtmPeerMessageReq = {
     peerId: 123***556,
     messageType: 1,  // 消息类型：1表示文本,2表示二进制
     message: xxxxx,
   };
   gameMediaEngine.publishRtmPeerMessage(req).then((clientMsgId) => {
       // 返回clientMsgId和点对点消息绑定
     }).catch((error) => {
       // 处理错误信息
     });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onPublishRtmPeerMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section497625317417)”事件，可以收到点对点消息的发送结果，并实现回调处理。

   ```
   GameMediaEngine.on('onPublishRtmPeerMessage', (result: PublishRtmPeerMessageResult) =>
     this.onPublishRtmPeerMessage(result)
   );
   onPublishRtmPeerMessage(result: PublishRtmPeerMessageResult) {
       // 可根据需求将数据进行处理
   }
   ```

## 接收点对点消息

其他玩家可在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onReceiveRtmPeerMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section5337113718429)”事件，可以接收点对点消息通知，并实现回调处理。

```
GameMediaEngine.on('onReceiveRtmPeerMessage', (notify: ReceiveRtmPeerMessageNotify) =>
  this.onReceiveRtmPeerMessage(notify)
);
onReceiveRtmPeerMessage(notify: ReceiveRtmPeerMessageNotify) {
       // 可根据需求将数据进行处理
}
```
