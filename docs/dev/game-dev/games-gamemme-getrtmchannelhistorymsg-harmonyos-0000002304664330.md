---
title: "查询频道历史消息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-getrtmchannelhistorymsg-harmonyos-0000002304664330
format: md
---


游戏多媒体实时信令功能支持查询频道历史消息，云侧只保存近7日内的频道历史消息，最多可获取100条历史消息记录。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。
* 您已[订阅频道](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-channel-subscribe-harmonyos-0000002304504610#section1014421318306)。

## 开发步骤

1. 调用[GameMediaEngine.getRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section159991595542)方法，查询历史消息。

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
2. 在EventHandler接口的[onGetRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section16953184461717)回调方法中，可以获取频道历史消息的查询结果。

   ```
   onGetRtmChannelHistoryMessages(result: GetRtmChannelHistoryMessagesResult): void {
     console.log(`onGetRtmChannelHistoryMessages: channelId = ${result.channelId}`);
   }
   ```
