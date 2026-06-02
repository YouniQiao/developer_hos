---
title: "加入房间"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-joinroom-csharp-0000002361510616
---

当房主创建好房间后，其他玩家通过获取并传入房间ID或房间短码，即可加入到该房间中。此种方式主要适用于棋牌、格斗等游戏的好友约战游戏玩法。

## 前提条件

* 您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-csharp-0000002361510612)。
* 玩家[已获取房间ID或房间短码](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-createjoinroom-csharp-0000002395350425#ZH-CN_TOPIC_0000002395350425__p178449471034)。

## 开发步骤

1. 调用[Client.JoinRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section13774175719619)方法并传入房间身份标识（房间ID或者房间短码），可加入到已创建的房间中。当加入房间失败时，该玩家可通过实现[Client.OnJoinRoomFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section15485182951915)委托收到失败事件通知。

   ![](./img/33de9827.png)

   房主[创建房间](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-createjoinroom-csharp-0000002395350425)成功后，会生成一个房间ID和一个房间短码，其他玩家可凭借此房间ID或房间短码加入房间。

   * 根据房间ID加入房间。

     ```
     JoinRoomConfig joinRoomReq = new JoinRoomConfig()
     {
     	RoomId = "{RoomId}"// 通过房间ID加入房间
     };
     PlayerConfig playerInfo = new PlayerConfig()
     {
     	CustomPlayerStatus = 0,
     	CustomPlayerProperties = "{CustomPlayerProperties}"
     };
     // 当加入房间失败时，该玩家可通过实现如下委托收到失败事件通知
     Global.client.OnJoinRoomFailed = (res) => {
       // 加入房间失败通知
     };
     Global.client.JoinRoom(joinRoomReq, playerInfo, JoinRoomCallback);
     public void JoinRoomCallback(JoinRoomBaseResponse res)
     {
             // 加入房间中
             if (res.RtnCode == (int)ErrorCode.COMMON_OK)
             {
                  // 将JoinRoom返回的房间对象加入Global类的Room属性中
                  Global.Room = res.Room;
             } else {
                 // 加入房间失败
             }
     }
     ```
   * 根据房间短码加入房间。

     ```
     JoinRoomConfig joinRoomReq = new JoinRoomConfig()
     {
             RoomCode = "{RoomCode}" // 通过房间短码加入房间
     };
     PlayerConfig playerInfo = new PlayerConfig()
     {
     	CustomPlayerStatus = 0,
     	CustomPlayerProperties = "{CustomPlayerProperties}"
     };
     // 当加入房间失败时，该玩家可通过实现如下委托收到失败事件通知
     Global.client.OnJoinRoomFailed = (res) => {
       // 加入房间失败通知
     };
     Global.client.JoinRoom(joinRoomReq, playerInfo, JoinRoomCallback);
     public void JoinRoomCallback(JoinRoomBaseResponse res)
     {
             // 加入房间中
             if (res.RtnCode == (int)ErrorCode.COMMON_OK)
             {
                  // 将JoinRoom返回的房间对象加入Global类的Room属性中
                  Global.Room = res.Room;
             } else {
                 // 加入房间失败
             }
     }
     ```
2. 当新玩家加入房间时，可通过实现[Room.OnJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p829416133915)委托收到事件通知。

   ```
   Global.Room.OnJoin = playerInfo => { // 通过Global类中的Room属性获取Room对象，绑定监听事件
     // 有玩家加入房间，做相关游戏逻辑处理
     if(playerInfo.playerId === Global.Room.playerId) {
       // 加入房间成功，做相关游戏逻辑处理
     }
   };
   ```
