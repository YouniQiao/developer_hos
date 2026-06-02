---
title: "屏蔽其他玩家"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-muteplayer-csharp-0000002393227089
---

在语音房间中，玩家如果不想接收房间内某个玩家的发言内容，可通过屏蔽其语音实现，但房间内其他玩家依然可以接收到被屏蔽语音玩家的发言。例如在同一房间内，玩家A屏蔽了玩家B的语音，其他玩家依然可以正常接收玩家B的发言。

## 前提条件

玩家已[加入](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-csharp-0000002393227073)房间。

## 屏蔽/打开指定玩家语音

![](./img/44b98ed9.png)

* 小队房间暂不支持屏蔽指定玩家语音。
* 如需屏蔽指定玩家A，需确保A玩家正在当前语音房间内。

1. 调用[GameMediaEngine.MutePlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section1585895715514)方法屏蔽/打开房间内指定玩家语音。

   ```
   engine.MutePlayer(roomId, openId, isMuted); // roomId：房间ID; openId：玩家ID; isMuted：true表示屏蔽语音,false表示取消屏蔽
   ```
2. 当玩家屏蔽指定玩家语音时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onMutePlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section245672811533)进行了封装，您只需注册OnMutePlayerCompleteEvent事件监听，并实现MutePlayerCompleteCallback委托函数即可。

   ```
   // 对屏蔽指定玩家语音事件进行监听
   callBackHandler.OnMutePlayerCompleteEvent += new MutePlayerCompleteCallback(MutePlayerImpl);

   // 监听处理
   void MutePlayerImpl(string roomId, string openId, bool isMuted, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 屏蔽/打开其他全部玩家语音

![](./img/32a110d0.png)

* 屏蔽所有玩家后，不允许解除单个指定玩家的语音屏蔽。
* 如需屏蔽所有玩家语音，需确保已解除房间内其他所有玩家的语音屏蔽。

1. 调用[GameMediaEngine.MuteAllPlayers](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section11973201815310)方法屏蔽/开启其他全部玩家语音。

   ```
   engine.MuteAllPlayers(roomId, isMuted); // roomId：房间ID; isMuted：true表示屏蔽语音,false表示取消屏蔽
   ```
2. 当玩家屏蔽房间内其他全部玩家语音时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onMuteAllPlayers](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section188981513185516)进行了封装，您只需注册OnMuteAllPlayersCompleteEvent事件监听，并实现MuteAllPlayersCompleteCallback委托函数即可。

   ```
   // 对屏蔽房间内其他全部玩家语音事件进行监听
   callBackHandler.OnMuteAllPlayersCompleteEvent += new MuteAllPlayersCompleteCallback(MuteAllPlayersImpl);

   // 监听处理
   void MuteAllPlayersImpl(string roomId, List<string> openIds, bool isMuted, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
