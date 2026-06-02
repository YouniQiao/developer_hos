---
title: "订阅与取消订阅频道"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-channel-subscribe-csharp-native-0000002359707022
---

“频道”作为游戏多媒体服务RTM功能的一个数据传输通道，主要用于频道消息的传递与广播。RTM频道消息支持不同客户端之间借助“频道”实现实时通信、全局聊天等功能，允许玩家在游戏内部建立实时的聊天室和群组，以进行广播消息、交流和社交，从而提升游戏的社交互动性。订阅频道的用户即可在频道内收发相关消息和事件，可选择订阅一个或多个频道。如取消订阅，则后续将无法收到频道消息。

## 前提条件

* 您已[集成游戏多媒体基础SDK和实时信令模块](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。

## 订阅频道

订阅频道是收发频道内相关消息和事件的前提，如玩家掉线且重连失败或销毁实例，则会自动取消已订阅的频道，后续将无法收到频道消息。

![](./img/be51d094.png)

因网络掉线，在90秒时间内，服务端将会尝试自动重连。如若重连成功，则会多次（最多10次）尝试重新订阅原频道。如自动重新订阅失败，请您手动重新发起订阅。

1. 调用[GameMediaEngine.SubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section9138144810551)方法，订阅指定的频道。

   ```
   SubscribeRtmChannelReq req = new SubscribeRtmChannelReq();
   req.ChannelId = "579457***95";
   Dictionary<string, string> dict = new Dictionary<string, string>();
   dict.Add("name","xxxx");
   dict.Add("age","22");
   req.PlayerProperties = dict;
   engine.SubscribeRtmChannel(req);
   ```
2. 当订阅指定的频道时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onSubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section544225013401)进行了封装，只需注册OnSubscribeRtmChannelEvent事件监听，并实现OnSubscribeRtmChannelCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnSubscribeRtmChannelEvent+= OnSubscribeRtmChannelCallbackImpl;

   // 监听处理
   void OnSubscribeRtmChannelCallbackImpl(SubscribeRtmChannelResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 取消订阅频道

1. 如需取消已订阅的频道，调用[GameMediaEngine.UnSubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section531111615562)方法即可取消订阅指定的频道。

   ```
   UnSubscribeRtmChannelReq req = new UnSubscribeRtmChannelReq();
   req.ChannelId = "579457***95";
   engine.UnSubscribeRtmChannel(req);
   ```
2. 当取消订阅指定的频道时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onUnSubscribeRtmChannel](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section1482719513406)进行了封装，只需注册OnUnSubscribeRtmChannelEvent事件监听，并实现OnUnSubscribeRtmChannelCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnUnSubscribeRtmChannelEvent+= OnUnSubscribeRtmChannelCallbackImpl;

   // 监听处理
   void OnUnSubscribeRtmChannelCallbackImpl(UnSubscribeRtmChannelResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
