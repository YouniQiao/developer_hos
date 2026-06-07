---
title: "查询已订阅频道列表"
original_url: /docs/dev/game-dev/games-gamemme-getrtmsubscribedchannel-csharpnative-0000002393266993
format: md
---


当订阅若干频道后，可通过查询已订阅的频道列表信息，查看频道的订阅情况。

## 前提条件

* 您已[集成游戏多媒体基础SDK和实时信令模块](/docs/dev/game-dev/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。

## 开发步骤

调用[GameMediaEngine.GetRtmSubscribedChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section754951911386)方法，即可查询当前已订阅的所有频道列表。

```
engine.GetRtmSubscribedChannelInfo(new OpenHarmonyJSCallback(args => {
    OpenHarmonyJSObject data = args[0];
    string rtmSubscribedChannelInfoResult = data.Get<string>("data");
    // 处理业务逻辑
}));
```
