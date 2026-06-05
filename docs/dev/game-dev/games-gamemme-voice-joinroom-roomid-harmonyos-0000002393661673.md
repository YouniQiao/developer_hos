---
title: "加入房间"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673
format: md
---


当不同的玩家加入同一语音房间内，即可互相发送/接收实时音频数据。目前，游戏多媒体服务支持加入小队语音房间和国战语音房间。

![](./img/f3946375.png)

第一个加入小队语音或国战语音房间的玩家，默认成为该房间的房主。

## 前提条件

* 您已[集成游戏多媒体语音SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。
* 您已规划语音房间ID。

## 加入小队语音房间

1. 调用[GameMediaEngine.joinTeamRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section681610210110)方法，使用相同的房间ID即可进入同一小队语音房间。

   ```
   gameMediaEngine.joinTeamRoom(roomId); // roomId：自定义的房间ID
   ```
2. 当玩家加入小队语音房间时，可在EventHandler接口的[onJoinTeamRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1340344613395)方法中实现相关回调处理。

   ```
   onJoinTeamRoom(roomId: string, code: number, msg: string) {
     console.log('onJoinTeamRoom : code=' + code + ', msg=' + msg + ', roomId = ' + roomId);
   }
   ```

   当玩家成功加入小队语音房间时，房间内其他玩家可在EventHandler接口的[onPlayerOnline](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section51202313013)方法中收到该事件的回调通知，并可根据需求对数据进行处理。

   ```
   onPlayerOnline(roomId: string, openId: string) {
     console.log('onPlayerOnline : openId=' + openId + ', roomId=' + roomId);
   }
   ```

## 加入国战语音房间

在国战房间中，玩家分为指挥官和群众两种角色。加入房间时，玩家可根据roleType选择自身角色。

![](./img/9aa75d6c.png)

* 在一个国战房间中，指挥官角色最多支持15人，群众角色最多支持10000人。
* 当玩家为指挥官角色时，则具备发送和接收语音的权限。当玩家为群众角色时，则仅具备接收语音的权限。

1. 调用[GameMediaEngine.joinNationalRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section149600319310)方法，使用相同的房间ID即可进入同一国战语音房间。

   ```
   gameMediaEngine.joinNationalRoom(roomId, roleType); // roomId:自定义的房间ID; roleType:玩家角色，1表示指挥官，2表示群众
   ```
2. 当玩家加入国战语音房间时，可在EventHandler接口的[onJoinNationalRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section169217507391)方法中实现相关回调处理。

   ```
   onJoinNationalRoom(roomId: string, code: number, msg: string) {
     console.log('onJoinNationalRoom : code=' + code + ', msg=' + msg + ', roomId = ' + roomId);
   }
   ```

   当玩家成功加入国战房间时，房间内其他玩家可在EventHandler接口的[onPlayerOnline](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section51202313013)方法中收到该事件的回调通知，并可根据需求对数据进行处理。

   ```
   onPlayerOnline(roomId: string, openId: string) {
     console.log('onPlayerOnline : openId=' + openId + ', roomId=' + roomId);
   }
   ```

## 加入范围语音房间

![](./img/59901889.png)

加入范围语音房间后，您还需要设置语音接收范围，并更新上报自身和其他玩家的位置信息，具体请参见[范围语音](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-rangeroom-harmonyos-0000002359901696)。

1. 调用[GameMediaEngine.joinRangeRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section55155121859)方法，使用相同的房间ID即可进入同一范围语音房间。

   ```
   gameMediaEngine.joinRangeRoom(roomId); // roomId:自定义的房间ID
   ```
2. 当玩家加入范围语音房间时，可在EventHandler接口的[onJoinRangeRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section13637181914113)方法中实现相关回调处理。

   ```
   onJoinRangeRoom(roomId: string, code: number, msg: string) {
     console.log('onJoinRangeRoom : code=' + code + ', msg=' + msg + ', roomId = ' + roomId);
   }
   ```
