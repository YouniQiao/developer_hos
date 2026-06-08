---
title: "加入队伍"
original_url: /docs/dev/game-dev/gameobe-joingroup-csharp-0000002361510660
format: md
upstream_id: dev/game-dev/gameobe-joingroup-csharp-0000002361510660
last_sync: 2026-06-07
sync_hash: f6ff29e2
---
当队伍成功创建后，其他玩家可以从队长那里获得队伍ID，然后加入到该队伍中并参与游戏。

## 前提条件

* 您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-csharp-0000002361510612)。
* 玩家已[获取队伍ID](/docs/dev/game-dev/gameobe-creategroup-csharp-0000002395350465#ZH-CN_TOPIC_0000002395350465__p16081026143618)。

## 开发步骤

1. 调用[Client.JoinGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section1685415211)方法加入一个队伍。

   ```
   JoinGroupConfig joinGroupConfig = new JoinGroupConfig()
   {
   	GroupId = "{GroupId }",
   	CustomPlayerStatus = "{CustomPlayerStatus}",
   	CustomPlayerProperties = "{CustomGroupProperties}"
   };
   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.JoinGroup(joinGroupConfig, response =>
   {
   	if (response.RtnCode == 0)
   	{
   		// 加入小队成功逻辑
                   Global.Group = response.Group; // 将小队对象加入Global类的Group属性中
   	}
   	else
   	{
   		// 加入小队失败逻辑
   	}
   });
   ```
2. 当玩家成功加入队伍后，加入队伍的玩家和队伍内玩家可通过实现[Group.OnJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#ZH-CN_TOPIC_0000002361676004__p155771729183119)委托监听该事件。

   ![](./img/c52a4f53.png)

   当加入队伍的玩家监听到加入队伍事件后，即成功加入该队伍。

   ```
   Global.Group.OnJoin = OnJoin; // 通过Global类的Group属性获取Group对象，绑定监听事件
   void OnJoin(FramePlayerInfo playerInfo)  {
   	// 加入队伍成功
   }
   ```
