---
title: "屏蔽其他玩家"
original_url: /docs/dev/game-dev/games-gamemme-muteplayer-harmonyos-0000002360061572
format: md
---


在语音房间中，玩家如果不想接收房间内某个玩家的发言内容，可通过屏蔽其语音实现，但房间内其他玩家依然可以接收到被屏蔽语音玩家的发言。例如在同一房间内，玩家A屏蔽了玩家B的语音后，其他玩家依然可以正常接收玩家B的发言。

## 前提条件

您已[加入房间](/docs/dev/game-dev/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673)。

## 屏蔽/打开指定玩家语音

1. 调用[GameMediaEngine.mutePlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section6103202018610)方法屏蔽/打开房间内指定玩家语音。

   ```
   gameMediaEngine.mutePlayer(roomId, openId, isMuted); // roomId：房间ID; openId：玩家ID; isMuted：true表示屏蔽语音,false表示取消屏蔽
   ```
2. 当玩家屏蔽指定玩家语音时，可在EventHandler接口的[onMutePlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1639511215408)方法实现相关回调处理。

   ```
   onMutePlayer(roomId: string, openId: string, isMuted: boolean, code: number, msg: string) {
     console.log('onMutePlayer : code=' + code + ', msg=' + msg + ', roomId = ' + roomId);
   }
   ```

## 屏蔽/打开其他全部玩家语音

![](./img/177064fa.png)

* 屏蔽所有玩家后，不允许解除单个指定玩家的语音屏蔽。
* 如需屏蔽所有玩家语音，需确保已解除房间内其他所有玩家的语音屏蔽。

1. 调用[GameMediaEngine.muteAllPlayers](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section1584715461869)方法屏蔽/打开其他全部玩家语音。

   ```
   gameMediaEngine.muteAllPlayers(roomId, isMuted); // roomId：房间ID; isMuted：true表示屏蔽语音,false表示取消屏蔽
   ```
2. 当玩家屏蔽/打开其他全部玩家语音时，可在EventHandler接口的[onMuteAllPlayers](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1590854725918)方法实现相关回调处理。

   ```
   onMuteAllPlayers(roomId: string, openIds: string[], isMuted: boolean, code: number, msg: string) {
     console.log('onMuteAllPlayers : code=' + code + ', msg=' + msg + ', roomId = ' + roomId);
   }
   ```
