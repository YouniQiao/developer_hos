---
title: "查询已订阅频道列表"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-getrtmsubscribedchannel-csharp-mini-0000002359707058
---

当订阅若干频道后，可通过查询已订阅的频道列表信息，查看频道的订阅情况。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-minigame-0000002359706946)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-minigame-0000002359706954#section10640141401010)。

## 开发步骤

1. 调用[GameMediaEngineForMiniGames.GetRtmSubscribedChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemediaengineforminigames-csharp-minigame-0000002358963772#section74162538569)方法，即可查询当前已订阅的所有频道列表。

   ```
   engine.GetRtmSubscribedChannelInfo();
   ```
2. 当查询当前已订阅的所有频道列表时，您可以进行相关回调处理。由于游戏多媒体SDK已对回调函数[OnGetRtmSubscribedChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/igamemmeeventhandlerforminigames-csharp-minigame-0000002392643789#section74204517320)进行了封装，只需注册OnGetRtmSubscribedChannelInfoEvent事件监听，并实现OnGetRtmSubscribedChannelInfoCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnGetRtmSubscribedChannelInfoEvent += OnGetRtmSubscribedChannelInfoImpl;

   //监听处理
   void OnGetRtmSubscribedChannelInfoImpl(GetRtmSubscribedChannelInfoResult result)
   {
        // 根据返回结果做相应业务逻辑处理
   }
   ```
