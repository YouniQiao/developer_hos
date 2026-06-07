---
title: "发布与接收频道消息"
original_url: /docs/dev/game-dev/games-gamemme-channelmessage-publish-csharp-native-0000002393266985
format: md
---


通过向指定频道内的一个或多个订阅用户发布频道消息，可用于实现游戏内实时通信和聊天室消息等场景。当前支持发布文本消息和二进制消息。其中，文本消息可用于聊天等场景。二进制消息可传递游戏状态数据，用于信令同步等场景。同时，支持对文本消息内容进行风控审核和广告识别。

## 前提条件

* 您已[集成游戏多媒体基础SDK和实时信令模块](/docs/dev/game-dev/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。

* 您已[订阅频道](/docs/dev/game-dev/games-gamemme-channel-subscribe-csharp-native-0000002359707022#section1014421318306)。

## 发布频道消息

1. 调用[GameMediaEngine.PublishRtmChannelMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section11503102284010)方法，向指定频道内的一个或多个订阅用户发布频道消息。

   ```
   PublishRtmChannelMessageReq req = new PublishRtmChannelMessageReq();
   req.ChannelId = "579457***95";
   req.MessageType = 1; // 消息类型：1表示文本,2表示二进制
   req.IsAllowCacheMsg = true; // 是否缓存历史消息: true表示缓存, false表示不缓存
   req.IsContentIdentify = true; // 是否进行内容风控审核: true表示进行风控审核, false表示不进行风控审核
   req.IsAdsIdentify = true; // 是否进行广告识别: true表示进行广告识别, false表示不进行广告识别
   req.MessageString = "xxxxx";
   List<string> receivers = new ();
   receivers.Add("xxxx");
   receivers.Add("xxxx");
   req.Receivers = receivers;
   engine.PublishRtmChannelMessage(req, new OpenHarmonyJSCallback(args => {
       OpenHarmonyJSObject data = args[0];
       string clientMsgId = data.Get<string>("data");
       // 返回clientMsgId和频道消息绑定
       // 处理业务逻辑
   }));
   ```

   ![](./img/cf3baa24.png)

   * 如需缓存频道历史消息，除将“IsAllowCacheMsg”设置为“true”外，还应保持频道消息的“receivers”为空，否则不生效。
   * 不指定频道消息接收者时，即向所有订阅了该频道的用户发送消息。当指定频道内部分订阅用户时，则只有对应的订阅用户才能接收到消息。
2. 当发布频道消息时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onPublishRtmChannelMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section14274195316409)进行了封装，只需注册OnPublishRtmChannelMessageEvent事件监听，并实现OnPublishRtmChannelMessageCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnPublishRtmChannelMessageEvent+= OnPublishRtmChannelMessageCallbackImpl;

   // 监听处理
   void OnPublishRtmChannelMessageCallbackImpl(PublishRtmChannelMessageResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 接收频道消息

当接收到频道消息时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onReceiveRtmChannelMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section10815195494017)进行了封装，只需注册OnReceiveRtmChannelMessageEvent事件监听，并实现OnReceiveRtmChannelMessageCallback委托函数即可。

```
// 对事件进行监听
callBackHandler.OnReceiveRtmChannelMessageEvent+= OnReceiveRtmChannelMessageCallbackImpl;

// 监听处理
void OnReceiveRtmChannelMessageCallbackImpl(ReceiveRtmChannelMessageNotify notify)
{
   // 根据返回结果做相应业务逻辑处理
}
```
