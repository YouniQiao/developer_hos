---
title: "发布与接收频道消息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-channelmessage-publish-minigame-0000002393266961
---

通过向指定频道内的一个或多个订阅用户发布频道消息，可用于实现游戏内实时通信和聊天室消息等场景。当前支持发布文本和二进制两种类型的消息。其中，文本消息可用于聊天等场景。二进制消息可传递游戏状态数据，用于信令同步等场景。同时，支持对文本消息内容进行风控审核和广告识别。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-minigame-0000002393266909)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-enginecreateparams-minigame-0000002359123496#ZH-CN_TOPIC_0000002359123496__p3284173213149)值为true（即RTM为开启状态）。
* 您已[订阅频道](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-channel-subscribe-minigame-0000002359706994#section1014421318306)。

## 发布频道消息

1. 调用[GameMediaEngine.publishRtmChannelMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section19181114121418)方法，向指定频道内的一个或多个订阅用户发布频道消息。

   ![](./img/32d9f53b.png)

   * 如需缓存频道历史消息，除将“isAllowCacheMsg”设置为“true”外，还应保持频道消息的“receivers”为空，否则不生效。
   * 不指定频道消息接收者时，即向所有订阅了该频道的用户发送消息。当指定频道内部分订阅用户时，则只有对应的订阅用户才能接收到消息。

   ```
   const req: PublishRtmChannelMessageReq = {
     channelId: 125323*556, // 频道ID
     messageType: 1,  // 消息类型：1表示文本, 2表示二进制
     message: xxxxx, // 消息内容
     receivers: [xxxx, xxxx], // 频道内的指定接收玩家,最多支持50人,选填
     isContentIdentify: true, // 是否进行内容风控审核: true表示进行内容风控审核, false表示不进行内容风控审核
     isAdsIdentify: true, // 是否进行广告识别: true表示进行广告识别, false表示不进行广告识别
     isAllowCacheMsg: true, // 是否缓存历史消息: true表示缓存历史消息, false表示不缓存历史消息
   };
   gameMediaEngine.publishRtmChannelMessage(req).then((clientMsgId) => {
      // 返回clientMsgId和频道消息绑定
   }).catch((error) => {
      // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onPublishRtmChannelMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section754881415376)”事件，可以获取频道消息的发布结果，并实现回调处理。

   ```
   GameMediaEngine.on('onPublishRtmChannelMessage', (result: PublishRtmChannelMessageResult) =>
     this.onPublishRtmChannelMessage(result)
   );
   onPublishRtmChannelMessage(result: PublishRtmChannelMessageResult) {
            // 可根据需求将数据进行处理
   }
   ```

## 接收频道消息

通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onReceiveRtmChannelMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section99101214124013)”事件，可以接收频道消息通知，并实现回调处理。

```
GameMediaEngine.on('onReceiveRtmChannelMessage', (notify: ReceiveRtmChannelMessageNotify) =>
  this.onReceiveRtmChannelMessage(notify)
);
onReceiveRtmChannelMessage(notify: ReceiveRtmChannelMessageNotify) {
         // 可根据需求将数据进行处理
}
```
