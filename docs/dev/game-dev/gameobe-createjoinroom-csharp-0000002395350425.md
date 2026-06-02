---
title: "创建房间"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-createjoinroom-csharp-0000002395350425
---

房间，是玩家进行对战的载体。因此，创建一个房间是开始游戏联机对战的前提。玩家成功创建一个对战房间后，即成为该房间的房主，并自动加入到该房间。需要注意的是，一个房间不建议长期循环使用，否则可能会被强制解散。

## 前提条件

您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-csharp-0000002361510612)。

## 开发步骤

1. 参考[CreateRoomConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-createroomconfig-csharp-0000002395355969)和[PlayerConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-playerconfig-csharp-0000002361516136)设置创建房间请求参数，调用[Client.CreateRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section1155613935519)方法创建房间。

   ![](./img/bf6a2e06.png)

   房主成功创建房间，则默认自动加入了该房间，并会生成一个房间ID和一个房间短码。房主可将该房间ID或房间短码信息分享给其他玩家，其他玩家可凭借此信息[加入房间](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-joinroom-csharp-0000002361510616)。

   ```
   CreateRoomConfig createRoomConfig = new CreateRoomConfig();
   createRoomConfig.RoomName = "{RoomName}";
   createRoomConfig.RoomType = "{RoomType}"; // 房间类型，比如“高手区”、“菜鸟区”
   createRoomConfig.IsPrivate = 0;
   createRoomConfig.MaxPlayers = 2;
   Dictionary<string, string> matchParams = new Dictionary<string, string>(); // 自定义匹配参数，最多支持5条
   matchParams.Add("param1", {param1);
   matchParams.Add("param2", {param2});
   createRoomConfig.MatchParams = matchParams;

   PlayerConfig playerConfig = new PlayerConfig();
   playerConfig.CustomPlayerStatus = 0;
   playerConfig.CustomPlayerProperties = "xxx";

   Global.client.CreateRoom(createRoomConfig, playerConfig, response => {
   	if (response.RtnCode != 0)
   	{
   		return;
   	}
           Global.Room = response.Room; // 将创建的房间对象加入Global类的Room属性中
           Global.player = Global.Room._player; // 将当前用户对象加入Global类的player属性中
   });
   ```
2. 创建房间成功后，可通过实现[Room.OnJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p829416133915)委托监听该房间的玩家加入事件。

   ```
   Global.Room.OnJoin = playerInfo => { // 通过Global类中的Room属性获取Room对象，绑定监听事件
     // 有玩家加入房间，做相关游戏逻辑处理
   };
   ```
