---
title: "自定义玩家属性"
original_url: /docs/dev/game-dev/games-gamemme-channelplayerproperties-harmonyos-0000002304664322
format: md
upstream_id: dev/game-dev/games-gamemme-channelplayerproperties-harmonyos-0000002304664322
last_sync: 2026-06-07
sync_hash: 2f605808
---
游戏多媒体实时信令功能支持设置频道内玩家自定义属性，例如状态、位置、心情等。同时，还支持监听频道内其他玩家属性的变更，及时感知频道内其他玩家属性的修改。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。

## 设置玩家属性

1. 调用[GameMediaEngine.setRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section172701632195318)方法，设置频道内玩家自定义属性。

   ```
   const req: SetRtmChannelPlayerPropertiesReq = {
     channelId: 579457***95, // 频道ID
     playerProperties: {"name": "XXX"} // 玩家自定义属性
   };
   gameMediaEngine.setRtmChannelPlayerProperties(req).catch((error: BusinessError) => {
     // 处理错误信息
   });
   ```
2. 在EventHandler接口的[onSetRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1412574891414)回调方法中，可以获取玩家自定义属性的设置结果。

   ```
   onSetRtmChannelPlayerProperties(result: SetRtmChannelPlayerPropertiesResult): void {
     console.log(`onSetRtmChannelPlayerProperties: channelId = ${result.channelId}`);
   }
   ```

## 查询玩家属性

1. 调用[GameMediaEngine.getRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485)方法，查询频道内玩家自定义属性。

   ```
   const req: GetRtmChannelPlayerPropertiesReq = {
     channelId: 579457***95,
     openIds: ["579457***95", "579457***96"]
   };
   gameMediaEngine.getRtmChannelPlayerProperties(req).catch((error: BusinessError) => {
     // 处理错误信息});
   ```
2. 在EventHandler接口的[onGetRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section0221952151419)回调方法中，可以获取玩家自定义属性的查询结果。

   ```
   onGetRtmChannelPlayerProperties(result: GetRtmChannelPlayerPropertiesResult): void {
     console.log(`onGetRtmChannelPlayerProperties: channelId = ${result.channelId}`);
   }
   ```

## 删除玩家属性

1. 调用[GameMediaEngine.deleteRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section381417715410)方法，删除频道内玩家自定义属性。

   ```
   const req: DeleteRtmChannelPlayerPropertiesReq = {
     channelId: 579457***95,
     keys: ["579457***95"],
   }
   gameMediaEngine.deleteRtmChannelPlayerProperties(req).catch((error) => {
       // 处理错误信息
   });
   ```
2. 在EventHandler接口的[onDeleteRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1726195610145)回调方法中，可以获取玩家自定义属性的删除结果。

   ```
   onDeleteRtmChannelPlayerProperties(result: DeleteRtmChannelPlayerPropertiesResult): void {
     console.log(`onDeleteRtmChannelPlayerProperties: channelId = ${result.channelId}`);
   }
   ```

## 监听频道内玩家属性变更

在EventHandler接口的[onRtmChannelPlayerPropertiesChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section5120123491712)回调方法中，可以接收到频道内其他玩家自定义属性的变更通知。

```
onRtmChannelPlayerPropertiesChanged(result: RtmChannelPlayerPropertiesNotify): void {
  console.log(`onRtmChannelPlayerPropertiesChanged: channelId = ${result.channelId}`);
}
```
