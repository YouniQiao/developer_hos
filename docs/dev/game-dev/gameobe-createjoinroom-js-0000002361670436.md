---
title: "创建房间"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-createjoinroom-js-0000002361670436
---

房间，是玩家进行对战的载体。因此，创建一个房间是开始游戏联机对战的前提。玩家成功创建一个对战房间后，即成为该房间的房主，并自动加入到该房间。需要注意的是，一个房间不建议长期循环使用，否则可能会被强制解散。

## 前提条件

您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-js-0000002395350377)。

## 开发步骤

1. 参考[CreateRoomConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-createroomconfig-js-0000002395196001)和[PlayerConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-playerconfig-js-0000002395355905)设置创建房间请求参数，调用[Client.createRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section1155613935519)方法创建房间。

   ![](./img/5e1a1b59.png)

   房主成功创建房间，则默认自动加入了该房间，并会生成一个房间ID和一个房间短码。房主可将该房间ID或房间短码信息分享给其他玩家，其他玩家可凭借此房间ID或房间短码[加入指定房间](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-joinroom-js-0000002395350381)。

   ```
   global.client.createRoom(
     {
       maxPlayers: 2,
       isPrivate: 0,
       roomName: '{roomName}',
       roomType: '{roomType}', // 房间类型，比如“高手区”、“菜鸟区”
       matchParams: { // 自定义匹配参数，最多支持5条
        param1: '{param1}',
        param2: '{param2}',
       }
     },
     {customPlayerStatus: 0, customPlayerProperties: ''}).then((room) => {
       // 创建房间中
       global.room = room;
       global.player = room.player;
     }).catch((e) => {
       // 创建房间失败
   });
   ```
2. 创建房间成功后，可调用[Room.onJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#ZH-CN_TOPIC_0000002395195985__p8644104717587)方法给该房间注册玩家加入房间事件的监听。

   ```
   global.room.onJoin((playerInfo) => {
     // 判断是否为当前玩家加入房间
     if(playerInfo.playerId === global.room.playerId) {
       // 创建并加入房间成功，做相关游戏逻辑处理
     }
   });
   ```
