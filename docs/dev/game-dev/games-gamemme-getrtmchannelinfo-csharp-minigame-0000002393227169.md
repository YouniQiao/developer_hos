---
title: "查询频道信息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-getrtmchannelinfo-csharp-minigame-0000002393227169
format: md
---


订阅频道的过程中，如需查看指定频道的详细信息，如订阅玩家数量、玩家信息（RTM连接状态、属性等），可通过查询频道信息获取。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-minigame-0000002359706946)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-minigame-0000002359706954#section10640141401010)。

## 开发步骤

1. 调用[GameMediaEngineForMiniGames.GetRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemediaengineforminigames-csharp-minigame-0000002358963772#section7319193618574)方法，查询频道信息，例如指定频道的用户列表。

   ```
   GetRtmChannelInfoReq req = new GetRtmChannelInfoReq();
   req.ChannelId = "579457***95";
   req.IsReturnMembers = true;
   engine.GetRtmChannelInfo(req);
   ```
2. 当查询频道信息时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[OnGetRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/igamemmeeventhandlerforminigames-csharp-minigame-0000002392643789#section077413479404)进行了封装，只需注册OnGetRtmChannelInfoEvent事件监听，并实现OnGetRtmChannelInfoCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnGetRtmChannelInfoEvent+= OnGetRtmChannelInfoCallbackImpl;

   // 监听处理
   void OnGetRtmChannelInfoCallbackImpl(GetRtmChannelInfoResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
