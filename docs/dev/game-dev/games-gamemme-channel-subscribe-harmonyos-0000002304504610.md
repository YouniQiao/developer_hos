---
title: "订阅与取消订阅频道"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-channel-subscribe-harmonyos-0000002304504610
---

“频道”作为游戏多媒体服务RTM功能的一个数据传输通道，主要用于频道消息的传递与广播。RTM频道消息支持不同客户端之间借助“频道”实现实时通信、全局聊天等功能，允许玩家在游戏内部建立实时的聊天室和群组，以进行广播消息、交流和社交，从而提升游戏的社交互动性。订阅频道的用户即可在频道内收发相关消息和事件，可选择订阅一个或多个频道。如取消订阅，则后续将无法收到频道消息。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。

## 订阅频道

订阅频道是收发频道内相关消息和事件的前提，如玩家掉线且重连失败或销毁引擎，则会自动取消已订阅的频道，后续将无法收到频道消息。

1. 调用[GameMediaEngine.subscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section5231817151019)方法，订阅指定的频道。

   ```
   const req: SubscribeRtmChannelReq = {
     channelId: 579457***95,                          // 频道ID
     playerProperties: {"name": "xxxx", "age": "22"}, // 玩家自定义属性
   };
   gameMediaEngine.subscribeRtmChannel(req).catch((error: BusinessError) => {
       // 处理错误信息
   });
   ```
2. 在EventHandler接口的[onSubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section4682135111319)回调方法中，可以获取频道订阅的结果。

   ```
   onSubscribeRtmChannel(result: SubscribeRtmChannelResult) {
     console.log(`onSubscribeRtmChannel: channelId = ${result.channelId}`);
   }
   ```

## 取消订阅频道

如取消指定的订阅频道，您需已订阅该频道。

1. 调用[GameMediaEngine.unSubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section33663615175)方法，取消已订阅的频道。

   ```
   const req: UnSubscribeRtmChannelReq = {
     channelId: xxxxx, // 频道ID
   };
   gameMediaEngine.unSubscribeRtmChannel(req).catch((error: BusinessError) => {
       // 处理错误信息
   });
   ```
2. 在EventHandler接口的[onUnSubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section19660191061413)回调方法中，可以获取取消订阅频道的结果。

   ```
   onUnSubscribeRtmChannel(result: UnSubscribeRtmChannelResult) {
     console.log(`onUnSubscribeRtmChannel: channelId = ${result.channelId}`);
   }
   ```
