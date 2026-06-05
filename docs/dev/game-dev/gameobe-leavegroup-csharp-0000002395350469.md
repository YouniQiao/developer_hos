---
title: "离开队伍"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-leavegroup-csharp-0000002395350469
format: md
---


当游戏未开始时，进入队伍的玩家均可选择离开当前队伍。

## 前提条件

* 您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-csharp-0000002361510612)。
* 玩家已进入队伍，且未开始游戏。

## 开发步骤

1. 调用[Client.LeaveGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section615091416618)方法离开当前队伍。

   ```
   LeaveGroupConfig leaveGroupConfig = new LeaveGroupConfig
   {
   	GroupId = "{GroupId}"
   };
   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.LeaveGroup(leaveGroupConfig, response => {
   	if (response.RtnCode == 0) {
   		// 离开小队成功
   	} else {
   		// 离开小队失败
   	}
   });
   ```
2. 当队员离开队伍时，队伍内其他玩家可通过实现[Group.OnLeave](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#ZH-CN_TOPIC_0000002361676004__p12327181713316)委托监听该事件。

   ```
   Global.Group.OnLeave = OnLeave; // 通过Global类的Group属性获取Group对象，绑定监听事件
   void OnLeave(FramePlayerInfo playerInfo) {
       // 其他队员离开队伍
   }
   ```
