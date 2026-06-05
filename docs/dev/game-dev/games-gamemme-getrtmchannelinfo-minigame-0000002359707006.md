---
title: "查询频道信息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-getrtmchannelinfo-minigame-0000002359707006
format: md
---


订阅频道的过程中，如需查看指定频道的详细信息，如订阅玩家数量、玩家信息（RTM连接状态、属性等），可通过查询频道信息获取。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-minigame-0000002393266909)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-enginecreateparams-minigame-0000002359123496#ZH-CN_TOPIC_0000002359123496__p3284173213149)值为true（即RTM为开启状态）。

## 开发步骤

1. 调用[GameMediaEngine.getRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section18268174772317)方法，获取频道信息，例如指定频道的用户列表。

   ```
   const req: GetRtmChannelInfoReq = {
     channelId: xxxxx,
     isReturnMembers: true
   };
   gameMediaEngine.getRtmChannelInfo(req).catch((error) => {
       // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onGetRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section16842833164314)”事件，可以获取频道信息的查询结果，并实现回调处理。

   ```
   GameMediaEngine.on('onGetRtmChannelInfo', (result: GetRtmChannelInfoResult) =>
     this.onGetRtmChannelInfo(result)
   );
   onGetRtmChannelInfo(result: GetRtmChannelInfoResult) {
        // 可根据需求将数据进行处理
   }
   ```
