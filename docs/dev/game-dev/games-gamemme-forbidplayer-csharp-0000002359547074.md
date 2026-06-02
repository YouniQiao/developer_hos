---
title: "禁言其他玩家"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-forbidplayer-csharp-0000002359547074
---

在语音房间内，房主可禁言指定玩家。同时，还可以通过一键禁言房间内其他全部玩家，实现仅房主发言功能。如需取消对其他玩家的禁言，可通过解禁方式快速解除禁言限制。目前，仅小队房间支持禁言操作。

## 前提条件

* 房间为小队房间类型。
* 玩家为房主身份，且房间中已有其他玩家。

## 禁言/解禁指定玩家

房主可通过禁止指定玩家发言的功能，实现对房间内某个玩家的禁言限制。被禁言后，该玩家发出的语音将不会被房间内其他玩家接收到。同时，房主在进行禁言后，还可以通过解禁操作对被禁言玩家进行解除禁言。

1. 调用[GameMediaEngine.ForbidPlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section0249154610117)方法禁言/解禁房间内指定玩家语音。

   ```
   engine.ForbidPlayer(String roomId, String openId, boolean isForbidden); // roomId：房间ID; openId：玩家ID; isForbidden：true表示禁言,false表示解禁
   ```
2. 当房主禁言/解禁房间内指定玩家时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onForbidPlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section3467121210212)进行了封装，您只需注册OnForbidPlayerCompleteEvent事件监听，并实现ForbidPlayerCompleteCallback委托函数即可。

   ```
   // 对房主禁言/解禁房间内指定玩家事件进行监听
   callBackHandler.OnForbidPlayerCompleteEvent += new ForbidPlayerCompleteCallback(ForbidPlayerImpl);

   // 监听处理
   void ForbidPlayerImpl(string roomId, string openId, bool isForbidden, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

   当房主成功禁言/解禁房间内指定玩家时，被禁言玩家可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onForbiddenByOwner](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section189623262617)进行了封装，您只需注册OnForbiddenByOwnerCompleteEvent事件监听，并实现ForbiddenByOwnerCompleteCallback委托函数即可。

   ```
   // 被禁言玩家对房主禁言/解禁房间内指定玩家事件进行监听
   callBackHandler.OnForbiddenByOwnerCompleteEvent += new ForbiddenByOwnerCompleteCallback(ForbiddenByOwnerImpl);

   // 监听处理
   void ForbiddenByOwnerImpl(string roomId, List<string> openIds, bool isForbidden)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 禁言/解禁其他全部玩家

房主可通过禁止其他全部玩家发言的功能，实现对房间内其他全部玩家的禁言限制。其他全部玩家被禁言后，房间内仅支持房主一人发言。同时，房主在进行禁言后，还可以通过解禁操作对被禁言的其他全部玩家解除禁言。

![](./img/cdd5bac3.png)

如果房主对房间设置了一键禁言，那么该房间就具备了禁言属性。此场景下仅房主可以发言，加入到该房间的新玩家也将会被禁言。

1. 调用[GameMediaEngine.ForbidAllPlayers](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section11626163415496)方法禁言/解禁房间内其他全部玩家。

   ```
   engine.ForbidAllPlayers(roomId,isMuted);
   ```
2. 当房主禁言/解禁房间内其他全部玩家时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onForbidAllPlayers](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section1664320353312)进行了封装，您只需注册OnForbidAllPlayersCompleteEvent事件监听，并实现ForbidAllPlayersCompleteCallback委托函数即可。

   ```
   // 对房主禁言/解禁房间内其他全部玩家事件进行监听
   callBackHandler.OnForbidAllPlayersCompleteEvent += new ForbidAllPlayersCompleteCallback(ForbidAllPlayersImpl);

   // 监听处理
   void ForbidAllPlayersImpl(string roomId, List<string> openIds, bool isForbidden, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

   当房主成功禁言/解禁房间内其他全部玩家时，被禁言玩家可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onForbiddenByOwner](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section189623262617)进行了封装，您只需注册OnForbiddenByOwnerCompleteEvent事件监听，并实现ForbiddenByOwnerCompleteCallback委托函数即可。

   ```
   // 被禁言玩家对房主禁言/解禁房间内其他全部玩家事件进行监听
   callBackHandler.OnForbiddenByOwnerCompleteEvent += new ForbiddenByOwnerCompleteCallback(ForbiddenByOwnerImpl);

   // 监听处理
   void ForbiddenByOwnerImpl(string roomId, List<string> openIds, bool isForbidden)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
