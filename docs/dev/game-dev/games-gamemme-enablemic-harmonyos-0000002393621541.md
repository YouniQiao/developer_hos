---
title: "设置麦克风状态"
original_url: /docs/dev/game-dev/games-gamemme-enablemic-harmonyos-0000002393621541
format: md
---


进入语音房间后，玩家如果不希望自身语音被房间内的其他玩家接收，可通过关闭自身麦克风实现。同时，还可以通过开启麦克风的方式快速解除自身静默状态。

![](./img/5e37b9c3.png)

初始化实例后，麦克风状态默认是开启的。

## 前提条件

您已[加入房间](/docs/dev/game-dev/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673)。

## 开发步骤

1. 调用[GameMediaEngine.enableMic](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section1221419101663)方法开启/关闭玩家自身麦克风，并通过返回值获得操作结果。

   ```
   let result = gameMediaEngine.enableMic(isEnabled);// isEnabled：true表示开启麦克风，false表示关闭麦克风
   ```
2. 开启/关闭玩家自身麦克风成功后，房间内其他玩家可在EventHandler接口的[onRemoteMicroStateChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section20875114613016)方法中收到该事件的回调通知。

   ```
   onRemoteMicroStateChanged(roomId: string, openId: string, isMute: boolean) {
     console.log('onRemoteMicroStateChanged : roomId = ' + roomId + ', openId = ' + openId + ', isMute=' + isMute);
   }
   ```
