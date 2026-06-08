---
title: "查询频道历史消息"
original_url: /docs/dev/game-dev/games-gamemme-getrtmchannelhistorymsg-minigame-0000002359547106
format: md
upstream_id: dev/game-dev/games-gamemme-getrtmchannelhistorymsg-minigame-0000002359547106
last_sync: 2026-06-07
sync_hash: 63119239
---
游戏多媒体实时信令功能支持查询频道历史消息，云侧只保存近7日内的频道历史消息，最多可获取100条历史消息记录。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-minigame-0000002393266909)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-enginecreateparams-minigame-0000002359123496#ZH-CN_TOPIC_0000002359123496__p3284173213149)值为true（即RTM为开启状态）。
* 您已[订阅频道](/docs/dev/game-dev/games-gamemme-channel-subscribe-minigame-0000002359706994#section1014421318306)。

## 开发步骤

1. 调用[GameMediaEngine.getRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section159991595542)方法，查询历史消息。

   ```
   const req: GetRtmChannelHistoryMessagesReq = {
     channelId: 579457***95,
     startTime: 1698996223000,
     count: 10
   };
   gameMediaEngine.getRtmChannelHistoryMessages(req).catch((error) => {
     // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onGetRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section248618324451)”事件，可以获取频道历史消息的查询结果，并实现回调处理。

   ```
   GameMediaEngine.on('onGetRtmChannelHistoryMessages', (result: GetRtmChannelHistoryMessagesResult) =>
     this.onGetRtmChannelHistoryMessage(result)
   );
   onGetRtmChannelHistoryMessage(result: GetRtmChannelHistoryMessagesResult) {
        // 可根据需求将数据进行处理
   }
   ```
