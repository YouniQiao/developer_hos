---
title: "更新玩家自定义属性"
original_url: /docs/dev/game-dev/gameobe-updatecustomproperties-js-0000002395190501
format: md
upstream_id: dev/game-dev/gameobe-updatecustomproperties-js-0000002395190501
last_sync: 2026-06-07
sync_hash: fe10c467
---
通过更新玩家的自定义属性，可用于实现玩家自定义信息（如玩家昵称、等级等）的更新。

## 前提条件

玩家已进入房间。

## 开发步骤

1. 调用[Player.updateCustomProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-js-0000002395355889#section154168844210)方法更新玩家自定义属性。

   ```
   let props = "{'level':'10'}";
   global.player.updateCustomProperties(props);
   ```
2. 当玩家更新自定义属性成功时，该玩家自己会通过[Player.onCustomPropertiesChangeSuccess](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-js-0000002395355889#section0422125712917)方法收到更新成功的事件通知。

   ```
   global.player.onCustomPropertiesChangeSuccess(() => {
     // 更新玩家自定义属性成功
   });
   ```
3. 当玩家更新自定义属性失败时，该玩家自己会通过[Player.onCustomPropertiesChangeFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-js-0000002395355889#section124234571292)方法收到更新失败的事件通知。

   ```
   global.player.onCustomPropertiesChangeFailed(error => {
     // 更新玩家自定义属性失败
   });
   ```
4. 当玩家更新自定义属性成功时，房间内所有玩家将通过[Room.onUpdateCustomProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section1749013421039)方法收到事件通知。

   ```
   global.room.onUpdateCustomProperties(playerInfo =>
   {
     // 更新属性玩家自定义属性成功
   });
   ```
