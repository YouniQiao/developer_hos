---
title: "离开房间"
original_url: /docs/dev/game-dev/games-gamemme-leaveroom-csharp-0000002359547066
format: md
upstream_id: dev/game-dev/games-gamemme-leaveroom-csharp-0000002359547066
last_sync: 2026-06-07
sync_hash: ce00dbc0
---
进入房间后，不论是否已进入游戏中，房间内玩家均可离开房间。

![](./img/b0f2e480.png)

当房间中所有玩家全部离开后，房间将自动销毁。

## 前提条件

玩家已[加入](/docs/dev/game-dev/games-gamemme-voice-joinroom-roomid-csharp-0000002393227073)房间。

## 开发步骤

1. 调用[GameMediaEngine.LeaveRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section1357253014212)方法离开房间。

   ![](./img/91d54eee.png)

   * 普通玩家离开房间时，参数ownerId传null或空字符串即可。
   * 房主离开房间时，参数ownerId传null或空字符串，则表示随机指定新房主。

   ```
   engine.LeaveRoom(currentRoomId, ownerId);
   ```
2. 当玩家离开房间时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onLeaveRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section14884122855918)进行了封装，您只需注册OnLeaveRoomCompleteEvent事件监听，并实现LeaveRoomCompleteCallback委托函数即可。

   ```
   // 对离开房间事件进行监听
   callBackHandler.OnLeaveRoomCompleteEvent += new LeaveRoomCompleteCallback(LeaveRoomImpl);

   // 监听处理
   void LeaveRoomImpl(string roomId, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

   当其他玩家成功离开房间时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onPlayerOffline](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section10559163812911)进行了封装，您只需注册OnPlayerOfflineCompleteEvent事件监听，并实现PlayerOfflineCompleteCallback委托函数即可。

   ```
   // 对其他玩家离开房间事件进行监听
   callBackHandler.OnPlayerOfflineCompleteEvent += new PlayerOfflineCompleteCallback(PlayerOfflineImpl);

   // 监听处理
   void PlayerOfflineImpl(string roomId, string openId)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
