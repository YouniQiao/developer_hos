---
title: "离开队伍"
original_url: /docs/dev/game-dev/gameobe-leavegroup-js-0000002361670452
format: md
upstream_id: dev/game-dev/gameobe-leavegroup-js-0000002361670452
last_sync: 2026-06-07
sync_hash: b2970bb4
---
当游戏未开始时，进入队伍的玩家均可选择离开当前队伍。

## 前提条件

* 您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-js-0000002395350377)。
* 玩家已进入队伍，且未开始游戏。

## 开发步骤

1. 调用[Client.leaveGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section615091416618)方法离开当前队伍。

   ```
   global.client.leaveGroup()
   .then(() => {
     // 离开队伍成功
   }).catch((e) => {
     // 离开队伍失败
   });
   ```
2. 当玩家离开队伍时，队伍内其他玩家可通过调用[Group.onLeave](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section1171205017107)方法监听该事件。

   ```
   global.group.onLeave((res) => {
     // 判断是否为当前玩家离开队伍
     if(global.group.playerId === res.playerId){
       // 被移除队伍，做相关游戏逻辑处理
     }else{
       // 其他玩家离开队伍
     }
   });
   ```
