---
title: "禁言其他玩家"
original_url: /docs/dev/game-dev/games-gamemme-forbidplayer-harmonyos-0000002393661681
format: md
upstream_id: dev/game-dev/games-gamemme-forbidplayer-harmonyos-0000002393661681
last_sync: 2026-06-07
sync_hash: fda05e8d
---
在语音房间内，房主可禁言指定玩家。同时，还可以通过一键禁言房间内其他全部玩家，实现仅房主发言功能。如需取消对其他玩家的禁言，可通过解禁方式快速解除禁言限制。目前，仅小队房间支持禁言操作。

## 前提条件

* 您已[加入小队语音房间](/docs/dev/game-dev/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673#section644913141332)。
* 您为房主身份，且房间中已有其他玩家。

## 禁言/解禁指定玩家

房主可通过禁止指定玩家发言的功能，实现对房间内某个玩家的禁言限制。被禁言后，该玩家发出的语音将不会被房间内其他玩家接收到。同时，房主在进行禁言后，还可以通过解禁操作对被禁言玩家进行解除禁言。

1. 调用[GameMediaEngine.forbidPlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section199764542612)方法禁言/解禁房间内指定玩家语音。

   ```
   gameMediaEngine.forbidPlayer(roomId, openId, isForbidden); // roomId：房间ID; openId：玩家ID; isForbidden：true表示禁言,false表示解禁
   ```
2. 当房主禁言/解禁房间内指定玩家时，可在EventHandler接口的[onForbidPlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1784321118016)方法中实现相关回调处理。

   ```
   onForbidPlayer(roomId: string, openId: string, isForbidden: boolean, code: number, msg: string) {
     console.log('onForbidPlayer : code=' + code + ', msg=' + msg + ', roomId = ' + roomId);
   }
   ```

   当房主成功禁言/解禁房间内指定玩家时，房间内其他所有玩家可在EventHandler接口的[onForbiddenByOwner](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section12563202220012)方法中收到该事件的回调通知，并可根据需求对数据进行处理。

   ```
   onForbiddenByOwner(roomId: string, openIds: string[], isForbidden: boolean) {
     console.log('onForbiddenByOwner : openIds=' + openIds + ', isForbidden=' + isForbidden + ', roomId = ' + roomId);
   }
   ```

## 禁言/解禁其他全部玩家

房主可通过禁止其他全部玩家发言的功能，实现对房间内其他全部玩家的禁言限制。其他全部玩家被禁言后，房间内仅支持房主一人发言。同时，房主在进行禁言后，还可以通过解禁操作对被禁言的其他全部玩家解除禁言。

![](./img/dd9fbbd8.png)

如果房主对房间设置了一键禁言，那么该房间就具备了禁言属性。此场景下仅房主可以发言，加入到该房间的新玩家也将会被禁言。

1. 调用[GameMediaEngine.forbidAllPlayers](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section142231734714)方法禁言/解禁房间内其他全部玩家。

   ```
   gameMediaEngine.forbidAllPlayers(roomId, isForbidden);  // roomId：房间ID; isForbidden：true表示禁言,false表示解禁
   ```
2. 当房主禁言/解禁房间内其他全部玩家时，可在EventHandler接口的[onForbidAllPlayers](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section187812171806)方法中实现相关回调处理。

   ```
   onForbidAllPlayers(roomId: string, openIds: string[], isForbidden: boolean, code: number, msg: string) {
     console.log('onForbidAllPlayers : code=' + code + ', msg=' + msg + ', roomId = ' + roomId + ', openIds' + openIds + ', isForbidden' + isForbidden);
   }
   ```

   当房主成功禁言/解禁房间内其他全部玩家时，房间内其他所有玩家可在EventHandler接口的[onForbiddenByOwner](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section12563202220012)方法中收到该事件的回调通知，并可根据需求对数据进行处理。

   ```
   onForbiddenByOwner(roomId: string, openIds: string[], isForbidden: boolean) {
     console.log('onForbiddenByOwner : openIds=' + openIds + ', isForbidden=' + isForbidden + ', roomId = ' + roomId);
   }
   ```
