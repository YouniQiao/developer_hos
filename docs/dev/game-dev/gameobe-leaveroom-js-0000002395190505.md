---
title: "离开房间"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-leaveroom-js-0000002395190505
format: md
---


进入房间后，游戏未开始前，房间内玩家均可离开房间。

## 前提条件

玩家已进入房间，且游戏未开始。

## 开发步骤

![](./img/d5a4d9a9.png)

当房主离开房间时，如果房间内已无其他玩家，则房间状态会变为待回收状态。如果房间内仍有其他玩家，则房主权限会随机分配给一位玩家。

1. 如需离开房间，调用[Client.leaveRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section23571739153810)方法即可。

   ```
   global.client.leaveRoom().then((client) => {
     // 离开房间成功
   }).catch((e) => {
     // 离开房间失败
   });
   ```
2. 当玩家离开房间时，房间内的其他玩家将通过[Room.onLeave](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section2284318513)方法收到事件通知。

   ```
   global.room.onLeave((playerInfo) => {
     // 判断是否为当前玩家离开房间
     if(playerInfo.playerId !== global.room.playerId) {
       // 其他玩家离开房间，做相关游戏逻辑处理
     }
   });
   ```
