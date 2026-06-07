---
title: "查询频道信息"
original_url: /docs/dev/game-dev/games-gamemme-getrtmchannelinfo-harmonyos-0000002304504614
format: md
---


订阅频道的过程中，如需查看指定频道的详细信息，如订阅玩家数量、玩家信息（RTM连接状态、属性等），可通过查询频道信息获取。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。

## 开发步骤

1. 调用[GameMediaEngine.getRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section18268174772317)方法，获取频道信息，例如指定频道的用户列表。

   ```
   const req: GetRtmChannelInfoReq = {
     channelId: xxxxx,
     isReturnMembers: true
   };
   gameMediaEngine.getRtmChannelInfo(req).catch((error) => {
       // 处理错误信息
   });
   ```
2. 在EventHandler接口的[onGetRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section65042041111718)回调方法中，可以获取频道信息的查询结果。

   ```
   onGetRtmChannelInfo(result: GetRtmChannelInfoResult) {
     console.log(`onGetRtmChannelInfo: channelId = ${result.channelId}`);
   }
   ```
