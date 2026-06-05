---
title: "订阅与取消订阅频道"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-channel-subscribe-minigame-0000002359706994
format: md
---


“频道”作为游戏多媒体服务RTM功能的一个数据传输通道，主要用于频道消息的传递与广播。RTM频道消息支持不同客户端之间借助“频道”实现实时通信、全局聊天等功能，允许玩家在游戏内部建立实时的聊天室和群组，以进行广播消息、交流和社交，从而提升游戏的社交互动性。订阅频道的用户即可在频道内收发相关消息和事件，可选择订阅一个或多个频道。如取消订阅，则后续将无法收到频道消息。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-minigame-0000002393266909)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-enginecreateparams-minigame-0000002359123496#ZH-CN_TOPIC_0000002359123496__p3284173213149)值为true（即RTM为开启状态）。

## 订阅频道

订阅频道是收发频道内相关消息和事件的前提，如玩家掉线且重连失败或销毁引擎，则会自动取消已订阅的频道，后续将无法收到频道消息。

1. 调用[GameMediaEngine.subscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section5231817151019)方法，订阅指定的频道。

   ```
   const req: SubscribeRtmChannelReq = {
     channelId: 579457***95,                          // 频道ID
     playerProperties: {"name": "xxxx", "age": "22"}, // 玩家自定义属性
   };
   gameMediaEngine.subscribeRtmChannel(req).catch((error) => {
       // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onSubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section1771011335346)”事件，可以获取频道的订阅结果，并实现回调处理。

   ```
   GameMediaEngine.on('onSubscribeRtmChannel', (result: SubscribeRtmChannelResult) =>
     this.onSubscribeRtmChannel(result)
   );
   onSubscribeRtmChannel(result: SubscribeRtmChannelResult) {
          // 可根据需求将数据进行处理
   }
   ```

## 取消订阅频道

如取消指定的订阅频道，您需已订阅该频道。

1. 调用[GameMediaEngine.unSubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section33663615175)方法，取消已订阅的频道。

   ```
   const req: UnSubscribeRtmChannelReq = {
     channelId: xxxxx, // 频道ID
   };
   gameMediaEngine.unSubscribeRtmChannel(req).catch((error) => {
       // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onUnSubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section19299059123511)”事件，可以获取频道取消订阅的结果，并实现回调处理。

   ```
   GameMediaEngine.on('onUnSubscribeRtmChannel', (result: UnSubscribeRtmChannelResult) =>
     this.onUnSubscribeRtmChannel(result)
   );
   onUnSubscribeRtmChannel(result: UnSubscribeRtmChannelResult) {
          // 可根据需求将数据进行处理
   }
   ```
