---
title: "自定义玩家属性"
original_url: /docs/dev/game-dev/games-gamemme-channelplayerproperties-minigame-0000002359547098
format: md
upstream_id: dev/game-dev/games-gamemme-channelplayerproperties-minigame-0000002359547098
last_sync: 2026-06-07
sync_hash: dfe4c015
---
游戏多媒体实时信令功能支持设置频道内玩家自定义属性，例如状态、位置、心情等。同时，还支持监听频道内其他玩家属性的变更，及时感知频道内其他玩家属性的修改。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-minigame-0000002393266909)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-enginecreateparams-minigame-0000002359123496#ZH-CN_TOPIC_0000002359123496__p3284173213149)值为true（即RTM为开启状态）。

## 设置玩家属性

1. 调用[GameMediaEngine.setRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section172701632195318)方法，设置频道内玩家自定义属性。

   ```
   const req: SetRtmChannelPlayerPropertiesReq = {
     channelId: 579457***95, // 频道ID
     playerProperties: {"name": "XXX"} // 玩家自定义属性
   };
   gameMediaEngine.setRtmChannelPlayerProperties(req).catch((error) => {
     // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onSetRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section3866193444319)”事件，可以获取玩家自定义属性的设置结果，并实现回调处理。

   ```
   GameMediaEngine.on('onSetRtmChannelPlayerProperties', (result: SetRtmChannelPlayerPropertiesResult) =>
       this.onSetRtmChannelPlayerProperty(result)
   );
   onSetRtmChannelPlayerProperty(result: SetRtmChannelPlayerPropertiesResult) {
     // 可根据需求将数据进行处理
   }
   ```

## 查询玩家属性

1. 调用[GameMediaEngine.getRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section687712538537)方法，查询频道内玩家自定义属性。

   ```
   const req: GetRtmChannelPlayerPropertiesReq = {
     channelId: 579457***95,
     openIds: ["579457***95", "579457***96"]
   };
   gameMediaEngine.getRtmChannelPlayerProperties(req).catch((error) => {
     // 处理错误信息});
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onGetRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section186431593436)”事件，可以获取玩家自定义属性的查询结果，并实现回调处理。

   ```
   GameMediaEngine.on('onGetRtmChannelPlayerProperties', (result: GetRtmChannelPlayerPropertiesResult) =>
       this.onGetRtmChannelPlayerProperty(result)
   );
   onGetRtmChannelPlayerProperty(result: GetRtmChannelPlayerPropertiesResult) {
        // 可根据需求将数据进行处理
   }
   ```

## 删除玩家属性

1. 调用[GameMediaEngine.deleteRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section381417715410)方法，删除频道内玩家自定义属性。

   ```
   const req: DeleteRtmChannelPlayerPropertiesReq = {
     channelId: 579457***95,
     keys: ["579457***95"],
   }
   gameMediaEngine.deleteRtmChannelPlayerProperties(req).catch((error) => {
       // 处理错误信息
   });
   ```
2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onDeleteRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section20524112254413)”事件，可以获取玩家自定义属性的删除结果，并实现回调处理。

   ```
   GameMediaEngine.on('onDeleteRtmChannelPlayerProperties', (result: DeleteRtmChannelPlayerPropertiesResult) =>
       this.onDeleteRtmChannelPlayerProperty(result)
   );
   onDeleteRtmChannelPlayerProperty(result: DeleteRtmChannelPlayerPropertiesResult) {
       // 可根据需求将数据进行处理
   }
   ```

## 监听频道内玩家属性变更

通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onRtmChannelPlayerPropertiesChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section3980184910454)”事件，可以接收到频道内其他玩家自定义属性的变更通知，并实现回调处理。

```
GameMediaEngine.on('onRtmChannelPlayerPropertiesChanged', (notify: RtmChannelPlayerPropertiesNotify) =>
    this.onRtmChannelPlayerPropertiesChange(notify)
);
onRtmChannelPlayerPropertiesChange(notify: RtmChannelPlayerPropertiesNotify) {
  // 可根据需求将数据进行处理
}
```
