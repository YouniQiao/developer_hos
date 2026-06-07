---
title: "移除房间内玩家"
original_url: /docs/dev/game-dev/gameobe-removeplayer-js-0000002361510596
format: md
---


在房间中，如果房主不希望某个玩家参与到联机游戏中，可以将指定玩家移除出房间。

## 前提条件

玩家为房主身份。

## 开发步骤

1. 调用[Room.removePlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section841062718417)方法，根据playerId移除房间内指定玩家。

   ```
   global.room.removePlayer(playerId).then(() => {
     // 移除玩家成功，更新room
     global.room.update().then(() => {
       // 更新room成功后，做相关的游戏处理逻辑
     })
   }).catch((e) => {
     // 移除玩家失败
   });
   ```
2. 当房主移除房间内玩家后，所有玩家将通过[Room.onLeave](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section2284318513)方法收到事件通知。

   ```
   global.room.onLeave(() => {
     if(playerInfo.playerId === global.room.playerId){
       // 当前玩家被移出房间，做游戏相关逻辑
     } else {
       // 其他玩家离开房间
     }
   });
   ```
3. 当玩家被移除出房间时，可调用[Room.removeAllListeners](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section163041724173911)移除所有事件的监听，并将room对象清理掉。

   ```
   // 移除所有事件监听
   global.room.removeAllListeners();
   // 清理room对象
   global.room = null;
   ```
