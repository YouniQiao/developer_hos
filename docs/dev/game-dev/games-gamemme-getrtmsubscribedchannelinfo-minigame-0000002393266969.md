---
title: "查询已订阅频道列表"
original_url: /docs/dev/game-dev/games-gamemme-getrtmsubscribedchannelinfo-minigame-0000002393266969
format: md
---


当订阅若干频道后，可通过查询已订阅的频道列表信息，查看频道的订阅情况。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-minigame-0000002393266909)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-enginecreateparams-minigame-0000002359123496#ZH-CN_TOPIC_0000002359123496__p3284173213149)值为true（即RTM为开启状态）。

## 开发步骤

如需查询已订阅的频道列表，调用[GameMediaEngine.getRtmSubscribedChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section78665154216)方法，即可获取当前已订阅的所有频道列表。

```
gameMediaEngine.getRtmSubscribedChannelInfo().then((result) => {
         // 可根据需求将数据进行处理
});
```
