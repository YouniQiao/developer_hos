---
title: "获取指定房间信息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-getroom-csharp-0000002393266925
format: md
---


进入语音房间后，您可通过获取全部房间信息，实现房间信息页面展示功能。如需实现定时刷新房间信息功能，可自行通过轮询调用接口实现。

## 前提条件

玩家已[加入](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-csharp-0000002393227073)房间。

## 开发步骤

调用[GameMediaEngine.GetRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section12589344534)方法可以获取指定房间的信息。

```
// 使用roomId获取指定房间的信息
engine.GetRoom(roomId, new OpenHarmonyJSCallback(args => {
    OpenHarmonyJSObject data = args[0];
    string roomInfo = data.Get<string>("data");
    // 处理业务逻辑
}));
```
