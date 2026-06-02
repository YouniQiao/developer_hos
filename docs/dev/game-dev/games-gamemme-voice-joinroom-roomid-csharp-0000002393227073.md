---
title: "加入房间"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-csharp-0000002393227073
---

当不同的玩家加入同一语音房间内，即可互相发送/接收实时音频数据。目前，游戏多媒体服务支持加入[小队语音房间](#section5143529157)、[国战语音房间](#section4240941141118)和[范围语音房间](#section4450837143111)。

![](./img/a9a9052a.png)

第一个加入语音房间的玩家，默认成为该语音房间的房主。

## 前提条件

* 您已[集成游戏多媒体基础SDK和实时语音模块](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。
* 您已规划语音房间ID。

## 加入小队语音房间

1. 调用[GameMediaEngine.JoinTeamRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section9374142516116)方法，使用相同的房间ID即可进入同一小队语音房间。

   ```
   engine.JoinTeamRoom(roomId) // roomId：自定义的房间ID
   ```
2. 当玩家加入小队语音房间时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onJoinTeamRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section96445565560)进行了封装，您只需注册OnJoinTeamRoomCompleteEvent事件监听，并实现JoinTeamRoomCompleteCallback委托函数即可。

   ```
   // 对加入小队事件进行监听
   callBackHandler.OnJoinTeamRoomCompleteEvent += new JoinTeamRoomCompleteCallback(JoinRoomImpl);

   // 监听处理
   void JoinRoomImpl(string roomId, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

   当其他玩家成功加入小队语音房间时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onPlayerOnline](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section54244215818)进行了封装，只需注册OnPlayerOnlineCompleteEvent事件监听，并实现PlayerOnlineCompleteCallback委托函数即可。

   ```
   // 对其他玩家加入小队事件进行监听
   callBackHandler.OnPlayerOnlineCompleteEvent += new PlayerOnlineCompleteCallback(PlayerOnlineImpl);

   // 监听处理
   void PlayerOnlineImpl(string roomId, string openId)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 加入国战语音房间

在国战语音房间中，玩家分为指挥官和群众两种角色。加入房间时，玩家可根据roleType选择自身角色。

![](./img/894f7e63.png)

* 在一个国战语音房间中，指挥官角色最多支持15人，群众角色最多支持10000人。
* 当玩家为指挥官角色时，则具备发送和接收语音的权限。当玩家为群众角色时，则仅具备接收语音的权限。

1. 调用[GameMediaEngine.JoinNationalRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section16756713191014)方法，使用相同的房间ID即可进入同一国战语音房间。

   ```
   engine.JoinNationalRoom(roomId, roleType);  // roomId：自定义的房间ID; roleType:玩家角色，1表示指挥官，2表示群众
   ```
2. 当玩家加入国战语音房间时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onJoinNationalRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section749132701515)进行了封装，只需注册OnJoinNationalRoomCompleteEvent事件监听，并实现JoinNationalRoomCompleteCallback委托函数即可。

   ```
   // 对加入国战房间事件进行监听
   callBackHandler.OnJoinNationalRoomCompleteEvent += new JoinNationalRoomCompleteCallback(JoinNationalRoomImpl);

   // 监听处理
   void JoinNationalRoomImpl(string roomId, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

   当其他玩家成功加入国战语音房间时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onPlayerOnline](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section54244215818)进行了封装，只需注册OnPlayerOnlineCompleteEvent事件监听，并实现PlayerOnlineCompleteCallback委托函数即可。

   ```
   // 对其他玩家加入国战房间事件进行监听
   callBackHandler.OnPlayerOnlineCompleteEvent += new PlayerOnlineCompleteCallback(PlayerOnlineImpl);

   // 监听处理
   void PlayerOnlineImpl(string roomId, string openId)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 加入范围语音房间

![](./img/cb13f212.png)

加入范围语音房间，您还需要设置语音接收范围，并更新上报自身和其他玩家的位置信息，具体请参见[范围语音](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-rangeroom-csharp-0000002393266941)。

1. 调用[GameMediaEngine.JoinRangeRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section2069317464116)方法，使用相同的房间ID即可进入同一范围语音房间。

   ```
   engine.joinRangeRoom(roomId); // roomId:自定义的房间ID;
   ```
2. 当玩家加入范围语音房间时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onJoinRangeRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section814317513315)进行了封装，只需注册OnJoinRangeRoomCompleteEvent事件监听，并实现JoinRangeRoomCompleteCallback委托函数即可。

   ```
   // 对加入范围语音房间事件进行监听
   callBackHandler.OnJoinRangeRoomCompleteEvent += new JoinRangeRoomCompleteCallback(JoinRangeRoomImpl);

   // 监听处理
   void JoinRangeRoomImpl(string roomId, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

   当其他玩家成功加入范围语音房间时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onPlayerOnline](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section54244215818)进行了封装，只需注册OnPlayerOnlineCompleteEvent事件监听，并实现PlayerOnlineCompleteCallback委托函数即可。

   ```
   // 对其他玩家加入范围语音房间事件进行监听
   callBackHandler.OnPlayerOnlineCompleteEvent += new PlayerOnlineCompleteCallback(PlayerOnlineImpl);

   // 监听处理
   void PlayerOnlineImpl(string roomId, string openId)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
