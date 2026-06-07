---
title: "查询频道历史消息"
original_url: /docs/dev/game-dev/games-gamemme-getrtmchannelhistorymsg-csharp-mini-0000002393267017
format: md
---


游戏多媒体实时信令功能支持查询频道历史消息，如果发送频道消息时设置支持缓存历史消息，则云侧只保存查询时近7日内的频道历史消息，最多可获取100条历史消息记录。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-csharp-minigame-0000002359706946)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-csharp-minigame-0000002359706954#section10640141401010)。

* 您已订阅频道。

## 开发步骤

1. 调用[GameMediaEngineForMiniGames.GetRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/games-references/gamemediaengineforminigames-csharp-minigame-0000002358963772#section1555312229214)方法，查询频道历史消息。

   ```
   GetRtmChannelHistoryMessagesReq req = new GetRtmChannelHistoryMessagesReq();
   req.ChannelId = "579457***95";
   req.StartTime = 1700119845015;
   req.Count = 50;
   engine.GetRtmChannelHistoryMessages(req);
   ```
2. 当查询频道历史消息时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[OnGetRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/games-references/igamemmeeventhandlerforminigames-csharp-minigame-0000002392643789#section210693212533)进行了封装，只需注册OnGetRtmChannelHistoryMessagesEvent事件监听，并实现OnGetRtmChannelHistoryMessagesCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnGetRtmChannelHistoryMessagesEvent+= OnGetRtmChannelHistoryMessagesCallbackImpl;

   // 监听处理
   void OnGetRtmChannelHistoryMessagesCallbackImpl(GetRtmChannelHistoryMessagesResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
