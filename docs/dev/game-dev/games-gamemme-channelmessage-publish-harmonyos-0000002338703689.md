---
title: "发布与接受频道消息"
original_url: /docs/dev/game-dev/games-gamemme-channelmessage-publish-harmonyos-0000002338703689
format: md
---


通过向指定频道内的一个或多个订阅用户发布频道消息，可用于实现游戏内实时通信和聊天室消息等场景。当前支持发布文本和二进制两种类型的消息。其中，文本消息可用于聊天等场景。二进制消息可传递游戏状态数据，用于信令同步等场景。同时，支持对文本消息内容进行风控审核和广告识别。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。
* 您已[订阅频道](/docs/dev/game-dev/games-gamemme-channel-subscribe-harmonyos-0000002304504610#section1014421318306)。

## 发布频道消息

1. 调用[GameMediaEngine.publishRtmChannelMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section19181114121418)方法，向指定频道内的一个或多个订阅用户发布频道消息。

   ![](./img/4b1b086a.png)

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
   }).catch((error: BusinessError) => {
      // 处理错误信息
   });
   ```
2. 在EventHandler接口的[onPublishRtmChannelMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section122291838141413)回调方法中，可以获取频道消息发布的结果。

   ```
   onPublishRtmChannelMessage(result: PublishRtmChannelMessageResult) {
     console.log(`onPublishRtmChannelMessage: channelId = ${result.channelId}`);
   }
   ```

## 接收频道消息

在EventHandler接口的[onReceiveRtmChannelMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section440513435144)回调方法中，可以接收频道消息通知。

```
onReceiveRtmChannelMessage(result: ReceiveRtmChannelMessageNotify): void {
  console.log(`onReceiveRtmChannelMessage: senderId = ${result.senderId}`);
}
```
