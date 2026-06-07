---
title: "房间匹配"
original_url: /docs/dev/game-dev/gameobe-matchroom-csharp-0000002361510656
format: md
---


除好友约战方式外，玩家还可以通过房间匹配的方式，根据传入的匹配规则，优先加入符合条件且最先创建的对战房间中。若未匹配到符合条件的房间，云侧服务器会为玩家自动创建一个符合条件的房间，并默认当前玩家为该房间房主。此种方式主要适用于根据房间类型进行匹配的游戏场景，例如，新手区、高手区等。

## 前提条件

您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-csharp-0000002361510612)。

## 开发步骤

1. 调用[Client.MatchRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section13662031171719)方法进行房间匹配。

   ![](./img/3aec7a1a.png)

   调用房间匹配接口后，玩家将在5min内持续进行房间匹配直至匹配成功。当房间匹配接口发生异常或匹配超时时，房间匹配接口请求将会停止。

   ```
   Dictionary<string, string> matchParams = new Dictionary<string, string>(); // 自定义匹配参数，最多支持5条
   matchParams.Add("matchRule1", "{matchRule1}");
   matchParams.Add("matchRule2", "{matchRule2}");

   MatchRoomConfig matchRoomConfig = new MatchRoomConfig
   {
   	MatchParams = matchParams,
   	RoomType = "{RoomType}", // 房间类型，比如“高手区”、“菜鸟区”
   	CustomRoomProperties = "{CustomRoomProperties}",
   	MaxPlayers = 2,
   };

   PlayerConfig playerConfig = new PlayerConfig
   {
   	CustomPlayerStatus = 0,
   	CustomPlayerProperties = "{CustomPlayerProperties}",
   };

   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.MatchRoom(matchRoomConfig, playerConfig, response =>
   {
   	if (response.RtnCode == 0)
   	{
   		// 房间匹配成功
   	}
   	else
   	{
   		// 房间匹配失败
   	}
   });
   ```
