---
title: "自定义频道属性"
original_url: /docs/dev/game-dev/games-gamemme-channelproperties-minigame-0000002393227117
format: md
upstream_id: dev/game-dev/games-gamemme-channelproperties-minigame-0000002393227117
last_sync: 2026-06-07
sync_hash: aeb9213d
---
游戏多媒体实时信令功能支持设置频道自定义属性，例如频道标签、状态等。同时，还支持监听频道自定义属性的变更，及时感知频道属性的修改。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-minigame-0000002393266909)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-enginecreateparams-minigame-0000002359123496#ZH-CN_TOPIC_0000002359123496__p3284173213149)值为true（即RTM为开启状态）。

## 设置频道属性

1. 调用[GameMediaEngine.setRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section168610195543)方法，设置频道自定义属性。

   ```
   const req: SetRtmChannelPropertiesReq = {
     channelId: 579457***95,
     channelProperties: {"name": "XXX"}
   };
   gameMediaEngine.setRtmChannelProperties(req).catch((error) => {
     // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onSetRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section168445124413)”事件，可以获取频道自定义属性的设置结果，并实现回调处理。

   ```
   GameMediaEngine.on('onSetRtmChannelProperties', (result: SetRtmChannelPropertiesResult) =>
       this.onSetRtmChannelProperty(result)
   );
   onSetRtmChannelProperty(result: SetRtmChannelPropertiesResult) {
     // 可根据需求将数据进行处理
   }
   ```

## 查询频道属性

1. 调用[GameMediaEngine.getRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section198061235105412)方法，查询频道自定义属性。

   ```
   const req: GetRtmChannelPropertiesReq = {
     channelId: 579457***95,
   };
   gameMediaEngine.getRtmChannelProperties(req).catch((error) => {
     // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onGetRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section19228258114419)”事件，可以获取频道自定义属性的查询结果，并实现回调处理。

   ```
   GameMediaEngine.on('onGetRtmChannelProperties', (result: GetRtmChannelPropertiesResult) =>
       this.onGetRtmChannelProperty(result)
   );
   onGetRtmChannelProperty(result: GetRtmChannelPropertiesResult) {
     // 可根据需求将数据进行处理
   }
   ```

## 删除频道属性

1. 调用[GameMediaEngine.deleteRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1727044935412)方法，删除频道自定义属性。

   ```
   const req: DeleteRtmChannelPropertiesReq = {
     channelId: 579457***95,
     keys: ["579457***95"],
   }
   gameMediaEngine.deleteRtmChannelProperties(req).catch((error) => {
       // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onDeleteRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section4292114114517)”事件，可以获取频道自定义属性的删除结果，并实现回调处理。

   ```
   GameMediaEngine.on('onDeleteRtmChannelProperties', (result: DeleteRtmChannelPropertiesResult) =>
       this.onDeleteRtmChannelProperty(result)
   );
   onDeleteRtmChannelProperty(result: DeleteRtmChannelPropertiesResult) {
       // 可根据需求将数据进行处理
   }
   ```

## 监听频道属性变更

通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onRtmChannelPropertiesChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section025213474619)”事件，可以监听频道自定义属性的变更，并实现回调处理。

```
GameMediaEngine.on('onRtmChannelPropertiesChanged', (notify: RtmChannelPropertiesNotify) =>
    this.onRtmChannelPropertiesChange(notify)
);
onRtmChannelPropertiesChange(notify: RtmChannelPropertiesNotify) {
  // 可根据需求将数据进行处理
}
```
