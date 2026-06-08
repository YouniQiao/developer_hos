---
title: "查询频道历史消息"
original_url: /docs/dev/game-dev/games-gamemme-getrtmchannelhistorymsg-csharpnative-0000002359547130
format: md
upstream_id: dev/game-dev/games-gamemme-getrtmchannelhistorymsg-csharpnative-0000002359547130
last_sync: 2026-06-07
sync_hash: d755fa5e
---
游戏多媒体实时信令功能支持查询频道历史消息，如果发送频道消息时设置支持缓存历史消息，则云侧只保存查询时近7日内的频道历史消息，最多可获取100条历史消息记录。

## 前提条件

* 您已[集成游戏多媒体基础SDK和实时信令模块](/docs/dev/game-dev/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。

* 您已[订阅频道](/docs/dev/game-dev/games-gamemme-channel-subscribe-csharp-native-0000002359707022#section1014421318306)。

## 开发步骤

1. 调用[GameMediaEngine.GetRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section1555312229214)方法，查询频道历史消息。

   ```
   GetRtmChannelHistoryMessagesReq req = new GetRtmChannelHistoryMessagesReq();
   req.ChannelId = "579457***95";
   req.StartTime = 1700119845015;
   req.Count = 50;
   engine.GetRtmChannelHistoryMessages(req);
   ```
2. 当查询频道历史消息时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onGetRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section210693212533)进行了封装，只需注册OnGetRtmChannelHistoryMessagesEvent事件监听，并实现OnGetRtmChannelHistoryMessagesCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnGetRtmChannelHistoryMessagesEvent+= OnGetRtmChannelHistoryMessagesCallbackImpl;

   // 监听处理
   void OnGetRtmChannelHistoryMessagesCallbackImpl(GetRtmChannelHistoryMessagesResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
