---
title: "移除队员"
original_url: /docs/dev/game-dev/gameobe-removeplayer-js-0000002395190493
format: md
upstream_id: dev/game-dev/gameobe-removeplayer-js-0000002395190493
last_sync: 2026-06-07
sync_hash: b2ab412d
---
在组队阶段，如果队长不希望某个玩家参与到游戏中，可以将指定玩家移除出小队。

## 前提条件

* 您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-js-0000002395350377)。
* 玩家为队长身份，被移除玩家属于当前队伍。
* 队伍未处于匹配状态。

## 开发步骤

1. 队长调用[Group.removePlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section282033713131)方法移除指定玩家。

   ```
   // 被移除玩家的playerId
   const playerId = '{playerId}';
   global.group.removePlayer(playerId).then(() => {
     // 移除玩家中...
   }).catch((e) => {
     // 移除玩家失败
   });
   ```
2. 当队长移除队伍内玩家后，所有玩家将通过[Group.onLeave](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section1171205017107)方法收到事件通知。

   ```
   global.group.onLeave((res) => {
     // 判断是否为当前玩家离开队伍
     if(global.group.playerId === res.playerId){
       // 玩家被移除，做相关游戏逻辑处理
     }else{
       // 其他玩家离开队伍
     }
   });
   ```
3. 当玩家被移除队伍时，可以调用[Group.removeAllListeners](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section163041724173911)移除所有事件的监听，并将group对象清理掉。

   ```
   // 移除所有事件监听
   global.group.removeAllListeners();
   // 清理group对象
   global.group = null;
   ```
