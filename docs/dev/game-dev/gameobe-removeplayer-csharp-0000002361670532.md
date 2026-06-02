---
title: "移除队员"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-removeplayer-csharp-0000002361670532
---

在组队阶段，如果队长不希望某个玩家参与到游戏中，可以将指定玩家移除出小队。

## 前提条件

* 您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-csharp-0000002361510612)。
* 玩家为队长身份，被移除玩家属于当前队伍。
* 队伍未处于匹配状态。

## 开发步骤

1. 队长调用[Group.RemovePlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#section73641413195318)方法移除指定玩家。

   ```
   RemoveGroupConfig removeGroupConfig = new RemoveGroupConfig{
   GroupId = "{GroupId}",
   PlayerId = "{PlayerId}" };
   Global.client.RemovePlayer(removeGroupConfig, response =>{
    if (response.RtnCode == 0) {
      // 移除队员成功
   }else {
      // 移除队员失败
     }
   });
   ```
2. 当队长移除队伍内玩家时，队伍内的玩家和被移除出队伍的玩家将通过实现[Group.OnLeave](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#ZH-CN_TOPIC_0000002361676004__p12327181713316)委托收到事件通知。

   ```
   Global.Group.OnLeave = OnLeave; // 通过Global类的Group属性获取Group对象，绑定监听事件
   void OnLeave(FramePlayerInfo playerInfo) {
       // 玩家已移除队伍
   }
   ```
