---
title: "更新玩家自定义状态"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-updatecustomstatus-js-0000002361510592
---

通过对玩家的自定义状态进行更新，可用于实现房间内玩家准备和取消准备等功能。

## 前提条件

玩家已进入房间。

## 开发步骤

1. 调用[Player.updateCustomStatus](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-js-0000002395355889#section138221670168)方法更新玩家自定义状态。

   ```
   let ready = 1;
   global.player.updateCustomStatus(ready);
   ```
2. 当玩家更新自定义状态成功时，该玩家自己会通过[Player.onCustomStatusChangeSuccess](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-js-0000002395355889#section11321164309)方法收到更新成功的事件通知。

   ```
   global.player.onCustomStatusChangeSuccess(() => {
     // 更新玩家自定义状态成功
   });
   ```
3. 当玩家更新自定义状态失败时，该玩家自己会通过[Player.onCustomStatusChangeFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-js-0000002395355889#section82771544514)方法收到更新失败的事件通知。

   ```
   global.player.onCustomStatusChangeFailed(error => {
     // 更新玩家自定义状态失败
   });
   ```
4. 当玩家更新自定义状态成功时，房间内所有玩家将通过[Room.onUpdateCustomStatus](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section167951123931)方法收到事件通知。

   ```
   global.room.onUpdateCustomStatus(playerInfo =>{
     // 更新玩家自定义状态成功，更新room
     global.room.update().then(() => {
       // 更新room成功后，做相关的游戏处理逻辑
     })
   });
   ```
