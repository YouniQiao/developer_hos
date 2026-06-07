---
title: "离开房间"
original_url: /docs/dev/game-dev/gameobe-leaveroom-csharp-0000002361670552
format: md
---


进入房间后，游戏未开始前，房间内玩家均可离开房间。

## 前提条件

玩家已进入房间，且游戏未开始。

## 开发步骤

![](./img/b84c523c.png)

当房主离开房间时，如果房间内已无其他玩家，则房间状态会变为待回收状态。如果房间内仍有其他玩家，则房主权限会随机分配给一位玩家。

1. 如需离开房间，调用[Client.LeaveRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section23571739153810)方法即可。

   ```
   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.LeaveRoom(res =>
   {
   	if (res.RtnCode == 0)
   	{
   		// 离开房间成功
   	}
   	else
   	{
   		// 离开房间失败
   	}
   });
   ```
2. 当玩家离开房间时，房间内的其他玩家将通过实现[Room.OnLeave](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p58828597396)委托收到事件通知。

   ```
   Global.Room.OnLeave = (res) => // 通过Global类的Room属性获取Room对象，绑定监听事件
   {
   // 有玩家离开房间，做相关游戏逻辑处理
         if(res.PlayerId != Global.PlayerId)
           // 其他玩家离开房间
         }
   };
   ```
