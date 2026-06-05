---
title: "设置麦克风状态"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-enablemic-csharp-0000002359706970
format: md
---


进入语音房间后，玩家如果不希望自身语音被房间内的其他玩家接收，可通过关闭自身麦克风实现。同时，还可以通过开启麦克风的方式快速解除自身静默状态。

![](./img/fb948412.png)

初始化实例后，麦克风状态默认是开启的。

## 前提条件

玩家已[加入](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-csharp-0000002393227073)房间。

## 开发步骤

1. 调用[GameMediaEngine.EnableMic](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section339918297418)方法开启/关闭玩家自身麦克风。

   ```
   // isEnable：true表示开启麦克风，false表示关闭麦克风
   engine.EnableMic(isEnable, new OpenHarmonyJSCallback(args => {
       OpenHarmonyJSObject data = args[0];
       var result = data.Get<int>("data");
       // 处理业务逻辑
   }));
   ```
2. 当其他玩家成功开启/关闭玩家自身麦克风后，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onRemoteMicroStateChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section17686241151113)进行了封装，您只需注册OnRemoteMicroStateChangedCompleteEvent事件监听，并实现OnRemoteMicroStateChangedCompleteCallback委托函数即可。

   ```
   // 对其他玩家麦克风状态进行监听
   callBackHandler.OnRemoteMicroStateChangedCompleteEvent += new OnRemoteMicroStateChangedCompleteCallback(OnRemoteMicroStateChangedImpl);

   // 监听处理
   void OnRemoteMicroStateChangedImpl(string roomId, string openId, bool isMute) {
   // 根据返回结果做相应业务逻辑处理
   }
   ```
