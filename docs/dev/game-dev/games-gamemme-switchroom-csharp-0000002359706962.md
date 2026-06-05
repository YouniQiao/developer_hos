---
title: "切换房间"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-switchroom-csharp-0000002359706962
format: md
---


玩家处于多房间状态下时，可通过切换语音房间实现进入不同房间发言。

![](./img/f28f9b60.png)

切换房间后，玩家在其他已加入的语音房间中，仅具备接收语音的能力。如该玩家切换回原房间，则恢复原房间中的能力。

## 前提条件

玩家至少已[加入](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-csharp-0000002393227073)两个房间。

## 开发步骤

1. 调用[GameMediaEngine.SwitchRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section477684462917)方法切换到指定房间。

   ```
   engine.SwitchRoom(roomId); // roomId不能为空
   ```
2. 当玩家切换房间时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onSwitchRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section14294132012584)进行了封装，只需注册OnSwitchRoomCompleteEvent事件监听，并实现SwitchRoomCompleteCallback委托函数即可。

   ```
   // 对切换房间事件进行监听
   callBackHandler.OnSwitchRoomCompleteEvent += new SwitchRoomCompleteCallback(SwitchRoomImpl);

   // 监听处理
   void SwitchRoomImpl(string roomId, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
