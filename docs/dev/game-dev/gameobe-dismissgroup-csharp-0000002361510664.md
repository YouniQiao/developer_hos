---
title: "解散队伍"
original_url: /docs/dev/game-dev/gameobe-dismissgroup-csharp-0000002361510664
format: md
---


当游戏未开始时，队长可以解散当前所处的队伍。

## 前提条件

* 您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-csharp-0000002361510612)。
* 玩家为队长身份。

## 开发步骤

1. 调用[Client.DismissGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section616118548720)方法解散队伍。

   ```
   DismissGroupConfig dismissGroupConfig = new DismissGroupConfig {
   	GroupId = "{GroupId}"
   };
   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.DismissGroup(dismissGroupConfig, response => {
   	if (response.RtnCode == 0) {
   		// 调用解散接口成功
   	}
   	else {
   		// 调用解散接口失败
   	}
   });
   ```
2. 当队长解散当前队伍时，原队伍内其他玩家将通过实现[Group.OnDismiss](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#ZH-CN_TOPIC_0000002361676004__p65021820143118)委托收到事件通知并自动退出队伍。

   ```
   Global.Group.OnDismiss = OnDismiss; // 通过Global类的Group属性获取Group对象，绑定监听事件
   void OnDismiss() {
       // 队长解散当前队伍
   }
   ```
