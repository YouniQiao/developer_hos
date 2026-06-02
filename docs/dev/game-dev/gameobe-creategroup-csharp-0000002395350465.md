---
title: "创建队伍"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-creategroup-csharp-0000002395350465
---

队伍，是一个游戏对局的基本单元，玩家可通过组队的形式跟别的队伍进行PK。当玩家成功创建一个队伍时，即成为该队伍的队长，并默认自动加入到该队伍中。

## 前提条件

您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-csharp-0000002361510612)。

## 开发步骤

1. 调用[Client.CreateGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section3919150142914)方法创建一个队伍。

   ![](./img/bc48712b.png)

   队长成功创建队伍后，会生成一个队伍ID，可将该队伍ID信息分享给其他好友玩家，其他好友玩家可凭借此队伍ID[加入该队伍](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-joingroup-csharp-0000002361510660)中。

   ```
   CreateGroupConfig createGroupConfig = new CreateGroupConfig
   {
   	MaxPlayers = 5,
   	GroupName = "{GroupName}",
   	IsLock = 0,
   	IsPersistent = 1,
   	CustomPlayerStatus = "{CustomPlayerStatus}",
   	CustomPlayerProperties = "{CustomPlayerProperties}",
   	CustomGroupProperties = "{CustomGroupProperties}"
   };
   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.CreateGroup(createGroupConfig, res => {
   	if (res.RtnCode == 0)
   	{
   		// 创建小队成功逻辑
                   Global.Group = res.Group; // 将创建成功的小队对象加入Global类的Group属性中
   	}
   	else
   	{
   		// 创建小队失败逻辑
   	}
   });
   ```
2. 当创建队伍成功后，可通过实现[Group.OnJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#ZH-CN_TOPIC_0000002361676004__p155771729183119)委托监听该队伍的玩家加入事件。

   ```
   Global.Group.OnJoin = OnJoin; // 通过Global类的Group属性获取Group对象，绑定监听事件
   void OnJoin(FramePlayerInfo playerInfo)  {
   	// 加入队伍成功
   }
   ```
