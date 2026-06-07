---
title: "加入房间"
original_url: /docs/dev/game-dev/gameobe-joinroom-js-0000002395350381
format: md
---


当房主创建好房间后，其他玩家通过获取并传入房间ID或房间短码，即可加入到该房间中。此种方式主要适用于棋牌、格斗等游戏的好友约战游戏玩法。

## 前提条件

* 您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-js-0000002395350377)。
* 玩家已[获取房间ID或房间短码](/docs/dev/game-dev/gameobe-createjoinroom-js-0000002361670436#ZH-CN_TOPIC_0000002361670436__p4656131812550)。

## 开发步骤

1. 调用[Client.joinRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section13774175719619)方法并传入房间身份标识（房间ID或者房间短码），可加入到已创建的房间中。当加入房间失败时，该玩家可通过[Client.onJoinRoomFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section37661716111417)方法收到失败事件通知。

   ![](./img/b0d972b9.png)

   房主[创建房间](/docs/dev/game-dev/gameobe-createjoinroom-js-0000002361670436)成功后，会生成一个房间ID和一个房间短码，其他玩家可凭借此房间ID或房间短码加入房间。

   ```
   // 房间ID或者房间短码
   const roomIdentity = '{roomIdentity}';
   // 当加入房间失败时，该玩家可通过如下方法收到失败事件通知
   global.client.onJoinRoomFailed((error) => {
     // 加入房间失败通知
   });
   global.client.joinRoom(roomIdentity,
     {customPlayerStatus: 0, customPlayerProperties: ''}).then((room) => {
        // 加入房间中
        global.room = room;
        global.player = room.player;
     }).catch((e) => {
        // 加入房间失败
     });
   ```
2. 当新玩家加入房间时，可通过[Room.onJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section11321164309)方法收到事件通知。

   ```
   global.room.onJoin((playerInfo) => {
     // 判断是否为当前玩家加入房间
     if(playerInfo.playerId === global.room.playerId) {
       // 加入房间成功，做相关游戏逻辑处理
     }
   });
   ```
