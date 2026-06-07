---
title: "解散房间"
original_url: /docs/dev/game-dev/gameobe-dismissroom-csharp-0000002395350493
format: md
---


创建房间后，如需销毁房间，可以将房间解散。

## 前提条件

玩家为房主身份。

## 开发步骤

1. 如需解散房间，调用[Client.DismissRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section13581121510355)方法即可，当前仅支持房主解散房间。

   ```
   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.DismissRoom(res =>
   {
   	if (res.RtnCode == 0)
   	{
   		// 解散房间成功
   	}
   	else
   	{
   		// 解散房间失败
   	}
   });
   ```
2. 当房主解散房间时，房间内的其他玩家将通过实现[Room.OnDismiss](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p13986125024010)委托收到事件通知并自动退出房间。

   ```
   Global.Room.OnDismiss = () => // 通过Global类的Room属性获取Room对象，绑定监听事件
   {
   	// 房主解散房间，做相关游戏逻辑处理
   };
   ```
