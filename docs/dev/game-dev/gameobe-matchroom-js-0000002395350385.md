---
title: "房间匹配"
original_url: /docs/dev/game-dev/gameobe-matchroom-js-0000002395350385
format: md
upstream_id: dev/game-dev/gameobe-matchroom-js-0000002395350385
last_sync: 2026-06-07
sync_hash: 734e5751
---
除好友约战方式外，玩家还可以通过房间匹配的方式，根据传入的参数，优先加入符合条件且最先创建的对战房间中。若未匹配到符合条件的房间，云侧服务器会为玩家自动创建一个符合条件的房间，并默认当前玩家为该房间房主。此种方式主要适用于根据房间类型进行匹配的游戏场景，例如，新手区、高手区等。

## 前提条件

您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-js-0000002395350377)。

## 开发步骤

1. 调用[Client.matchRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section13662031171719)方法进行房间匹配。

   ![](./img/e930de97.png)

   调用房间匹配接口后，玩家将在5min内持续进行房间匹配直至匹配成功。当房间匹配接口发生异常或匹配超时时，房间匹配接口请求将会停止。

   ```
   global.client.matchRoom({
     matchParams: { // 自定义匹配参数，最多支持5条
       param1: '{param1}',
       param2: '{param2}',
     },
     roomType: '{roomType}', // 房间类型，比如“高手区”、“菜鸟区”
     customRoomProperties: '{customRoomProperties}',
     maxPlayers: 2,
   },{customPlayerStatus: 0, customPlayerProperties: ''}).then((room) => {
     // 房间匹配中
     global.room = room;
     global.player = room.player;
   }).catch((e) => {
     // 房间匹配失败
   });
   ```
2. 当新玩家加入房间时，房间内的其他玩家将通过[Room.onJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section11321164309)方法收到事件通知。

   ```
   global.room.onJoin((playerInfo) => {
     // 判断是否为当前玩家加入房间
     if(playerInfo.playerId === global.room.playerId) {
       // 房间匹配成功，做相关游戏逻辑处理
     }
   });
   ```
