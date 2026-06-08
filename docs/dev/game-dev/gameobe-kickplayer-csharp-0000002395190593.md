---
title: "移除房间内玩家"
original_url: /docs/dev/game-dev/gameobe-kickplayer-csharp-0000002395190593
format: md
upstream_id: dev/game-dev/gameobe-kickplayer-csharp-0000002395190593
last_sync: 2026-06-07
sync_hash: 8d4d8ea8
---
在房间中，如果房主不希望某个玩家参与到联机游戏中，可以将指定玩家踢出房间。

## 前提条件

玩家为房主身份。

## 开发步骤

1. 调用[Client.RemovePlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section841062718417)方法，根据playerId踢出房间内指定玩家。

   ```
   RemovePlayerConfig kickPlayerParam = new RemovePlayerConfig()
   {
   	PlayerId = "{PlayerId}"
   };

   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.RemovePlayer(kickPlayerParam, res =>
   {
   	if (res.RtnCode == 0)
   	{
   		// 踢人成功
   	}
   	else
   	{
   		// 踢人失败
   	}
   });
   ```
2. 当玩家被移除房间时，被移除的玩家和房间内的其他玩家将通过实现[Room.OnLeave](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p58828597396)委托收到事件通知。

   ```
   Global.Room.OnLeave = (res) => // 通过Global类的Room属性获取Room对象，绑定监听事件
   {
   // 有玩家离开房间，做相关游戏逻辑处理
         if(res.PlayerId == Global.PlayerId)
         {
           // 当前玩家被移出房间
         } else {
           // 其他玩家离开房间
         }
   };
   ```
