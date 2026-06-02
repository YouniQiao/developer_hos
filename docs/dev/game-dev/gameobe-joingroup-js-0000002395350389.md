---
title: "加入队伍"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-joingroup-js-0000002395350389
---

当队伍[成功创建](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-creategroup-js-0000002361670448)后，其他玩家可以从队长那里获得队伍ID，然后加入到该队伍中并参与游戏。

## 前提条件

* 您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-js-0000002395350377)。
* 玩家已[获取队伍ID](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-creategroup-js-0000002361670448#ZH-CN_TOPIC_0000002361670448__note1712533714561)。

## 开发步骤

1. 调用[Client.joinGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section1685415211)方法加入一个队伍。

   ```
   // 队伍ID
   const groupId = '{groupId}';
   // 玩家自定义参数
   const playerConfig = {
     customPlayerStatus: 0,
     customPlayerProperties: '{customPlayerProperties}',
   }
   global.client.joinGroup(groupId, playerConfig)
   .then((groupInfo) => {
     // 加入队伍中，并更新队伍信息
     global.group = groupInfo;
   }).catch((e) => {
     // 加入队伍失败
   });
   ```
2. 当新玩家加入队伍时，可通过调用[Group.onJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section18147174541018)方法监听该事件。

   ![](./img/48da3de2.png)

   当监听到加入队伍事件后，玩家即成功加入队伍。

   ```
   global.group.onJoin((res) => {
       // 判断是否为当前玩家加入队伍
     if(group.playerId === res.playerId){
       // 加入队伍成功，做相关游戏逻辑处理
     }
   });
   ```
