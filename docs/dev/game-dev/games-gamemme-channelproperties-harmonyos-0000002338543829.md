---
title: "自定义频道属性"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-channelproperties-harmonyos-0000002338543829
format: md
---


游戏多媒体实时信令功能支持设置频道自定义属性，例如频道标签、状态等。同时，还支持监听频道自定义属性的变更，及时感知频道属性的修改。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。

## 设置频道属性

1. 调用[GameMediaEngine.setRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section168610195543)方法，设置频道自定义属性。

   ```
   const req: SetRtmChannelPropertiesReq = {
     channelId: 579457***95,
     channelProperties: {"name": "XXX"}
   };
   gameMediaEngine.setRtmChannelProperties(req).catch((error) => {
     // 处理错误信息
   });
   ```
2. 在EventHandler接口的[onSetRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1030180181513)回调方法中，可以获取频道自定义属性的设置结果。

   ```
   onSetRtmChannelProperties(result: SetRtmChannelPropertiesResult): void {
     console.log(`onSetRtmChannelProperties: channelId = ${result.channelId}`);
   }
   ```

## 查询频道属性

1. 调用[GameMediaEngine.getRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section198061235105412)方法，查询频道自定义属性。

   ```
   const req: GetRtmChannelPropertiesReq = {
     channelId: 579457***95,
   };
   gameMediaEngine.getRtmChannelProperties(req).catch((error) => {
     // 处理错误信息
   });
   ```
2. 在EventHandler接口的[onGetRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1929185161518)回调方法中，可以获取频道自定义属性的查询结果。

   ```
   onGetRtmChannelProperties(result: GetRtmChannelPropertiesResult): void {
     console.log(`onGetRtmChannelProperties: channelId = ${result.channelId}`);
   }
   ```

## 删除频道属性

1. 调用[GameMediaEngine.deleteRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section1727044935412)方法，删除频道自定义属性。

   ```
   const req: DeleteRtmChannelPropertiesReq = {
     channelId: 579457***95,
     keys: ["579457***95"],
   }
   gameMediaEngine.deleteRtmChannelProperties(req).catch((error) => {
       // 处理错误信息
   });
   ```
2. 在EventHandler接口的[onDeleteRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section12338142171711)回调方法中，可以获取频道自定义属性的删除结果。

   ```
   onDeleteRtmChannelProperties(result: DeleteRtmChannelPropertiesResult): void {
     console.log(`onDeleteRtmChannelProperties: channelId = ${result.channelId}`);
   }
   ```

## 监听频道属性变更

在EventHandler接口的[onRtmChannelPropertiesChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section316382174)回调方法中，可以监听频道自定义属性的变更。

```
onRtmChannelPropertiesChanged(result: RtmChannelPropertiesNotify): void {
  console.log(`onRtmChannelPropertiesChanged: channelId = ${result.channelId}`);
}
```
