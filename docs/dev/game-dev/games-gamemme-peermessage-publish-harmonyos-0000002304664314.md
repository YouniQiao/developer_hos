---
title: "点对点消息"
original_url: /docs/dev/game-dev/games-gamemme-peermessage-publish-harmonyos-0000002304664314
format: md
upstream_id: dev/game-dev/games-gamemme-peermessage-publish-harmonyos-0000002304664314
last_sync: 2026-06-07
sync_hash: c00c2524
---
游戏多媒体RTM功能允许向指定接收者发送点对点消息，以实现不同客户端之间的消息传递。RTM点对点消息可以用于多人游戏中的实时通信，例如在线合作游戏、多人对战游戏或社交游戏，从而增强玩家之间的互动和沟通。当前支持发送文本和二进制两种类型的消息。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。

## 发送点对点消息

1. 调用[GameMediaEngine.publishRtmPeerMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section626619454195)方法，向指定的接收者发送点对点消息。

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
2. 在EventHandler接口的[onPublishRtmPeerMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section11778121913141)回调方法中，可以收到点对点消息的发送结果。

   ```
   onPublishRtmPeerMessage(result: ReceiveRtmPeerMessageNotify): void {
     console.log(`onReceiveRtmPeerMessage: senderId = ${result.senderId}`);
   }
   ```

## 接收点对点消息

在EventHandler接口的[onReceiveRtmPeerMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1319713112148)回调方法中，可以接收点对点消息通知。

```
onReceiveRtmPeerMessage(result: ReceiveRtmPeerMessageNotify): void {
  console.log(`onReceiveRtmPeerMessage: senderId = ${result.senderId}`);
}
```
