---
title: "创建队伍"
original_url: /docs/dev/game-dev/gameobe-creategroup-js-0000002361670448
format: md
upstream_id: dev/game-dev/gameobe-creategroup-js-0000002361670448
last_sync: 2026-06-07
sync_hash: 8203c9de
---
队伍，是一个游戏对局的基本单元，玩家可通过组队的形式跟别的队伍进行PK。当玩家成功创建一个队伍时，即成为该队伍的队长，并默认自动加入到该队伍中。

## 前提条件

您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-js-0000002395350377)。

## 开发步骤

1. 调用[Client.createGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section3919150142914)方法创建一个队伍。

   ![](./img/448e29f4.png)

   队长成功创建队伍后，会生成一个队伍ID，可将该队伍ID信息分享给其他好友玩家，其他好友玩家可凭借此队伍ID[加入该队伍](/docs/dev/game-dev/gameobe-joingroup-js-0000002395350389)中。

   ```
   // 创建队伍方法参数
   const createGroupConfig = {
     maxPlayers: 2,
     groupName: '蓝队',
     customGroupProperties: '{customGroupProperties}',
     isLock: 0,
     isPersistent: 0,
   };
   // 玩家自定义参数
   const playerConfig = {
     customPlayerStatus: 0,
     customPlayerProperties: '{customPlayerProperties}',
   }
   global.client.createGroup(createGroupConfig, playerConfig)
   .then((groupInfo) => {
     // 创建队伍中，并更新队伍信息
     global.group = groupInfo;
   }).catch((e) => {
     // 创建队伍失败
   });
   ```
2. 创建队伍成功后，可调用[Group.onJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section18147174541018)方法给该队伍注册玩家加入队伍事件的监听。

   ```
   global.group.onJoin((res) => {
     // 判断是否为当前玩家加入队伍
     if(global.group.playerId === res.playerId){
       // 创建队伍成功，做相关游戏逻辑处理
     }
   });
   ```
