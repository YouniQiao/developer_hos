---
title: "切换房间"
original_url: /docs/dev/game-dev/games-gamemme-switchroom-harmonyos-0000002360061564
format: md
upstream_id: dev/game-dev/games-gamemme-switchroom-harmonyos-0000002360061564
last_sync: 2026-06-07
sync_hash: 9c0d2d0f
---
玩家处于多房间状态下时，可通过切换语音房间实现进入不同房间发言。

![](./img/92e79b17.png)

在房间A中，一个玩家无论是否具备发送语音的能力，当该玩家由房间A切换至其他房间后，其在房间A中则仅具备接收语音的能力。当玩家由其他房间切换回房间A后，则其恢复在原房间A中的语音能力。

## 前提条件

您至少已[加入](/docs/dev/game-dev/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673)两个房间。

## 开发步骤

1. 调用[GameMediaEngine.switchRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section152623252033)方法切换到指定房间。

   ```
   gameMediaEngine.switchRoom(roomId); // roomId:房间ID
   ```
2. 当玩家切换房间时，可在EventHandler接口的[onSwitchRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section551190174014)方法中实现相关回调处理。

   ```
   onSwitchRoom(roomId: string, code: number, msg: string) {
     console.log('onSwitchRoom : code=' + code + ', msg=' + msg + ', roomId = ' + roomId);
   }
   ```
