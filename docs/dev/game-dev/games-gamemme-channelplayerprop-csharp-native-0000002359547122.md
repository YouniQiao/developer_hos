---
title: "自定义玩家属性"
original_url: /docs/dev/game-dev/games-gamemme-channelplayerprop-csharp-native-0000002359547122
format: md
upstream_id: dev/game-dev/games-gamemme-channelplayerprop-csharp-native-0000002359547122
last_sync: 2026-06-07
sync_hash: 20c82e72
---
游戏多媒体实时信令功能支持设置频道内玩家自定义属性，例如状态、位置、心情等。同时，还支持监听频道内其他玩家属性的变更，及时感知频道内其他玩家属性的修改。

## 前提条件

* 您已[集成游戏多媒体基础SDK和实时信令模块](/docs/dev/game-dev/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。

* 您已[订阅频道](/docs/dev/game-dev/games-gamemme-channel-subscribe-csharp-native-0000002359707022#section1014421318306)。

## 设置玩家属性

1. 调用[GameMediaEngine.SetRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section1248173165919)方法，设置频道内玩家自定义属性。

   ```
   SetRtmChannelPlayerPropertiesReq req = new SetRtmChannelPlayerPropertiesReq();
   req.ChannelId = "579457***95";
   Dictionary<string, string> propertyDict = new();
   propertyDict.Add("key1", "value1");
   propertyDict.Add("key2", "value2");
   req.PlayerProperties = propertyDict;
   engine.SetRtmChannelPlayerProperties(req);
   ```
2. 当设置玩家自定义属性时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onSetRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section46641355134017)进行了封装，只需注册OnSetRtmChannelPlayerPropertiesEvent事件监听，并实现OnSetRtmChannelPlayerPropertiesCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnSetRtmChannelPlayerPropertiesEvent+= OnSetRtmChannelPlayerPropertiesCallbackImpl;

   // 监听处理
   void OnSetRtmChannelPlayerPropertiesCallbackImpl(SetRtmChannelPlayerPropertiesResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 查询玩家属性

1. 调用[GameMediaEngine.GetRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section1985625020593)方法，查询频道内玩家自定义属性。

   ```
   GetRtmChannelPlayerPropertiesReq req = new GetRtmChannelPlayerPropertiesReq();
   req.ChannelId = "579457***95";
   List<string> openIds = new();
   openIds.Add("id1");
   openIds.Add("id2");
   req.OpenIds = openIds;
   engine.GetRtmChannelPlayerProperties(req);
   ```
2. 当查询玩家的自定义属性时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onGetRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section1954656104011)进行了封装，只需注册OnGetRtmChannelPlayerPropertiesEvent事件监听，并实现OnGetRtmChannelPlayerPropertiesCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnGetRtmChannelPlayerPropertiesEvent+= OnGetRtmChannelPlayerPropertiesCallbackImpl;

   // 监听处理
   void OnGetRtmChannelPlayerPropertiesCallbackImpl(GetRtmChannelPlayerPropertiesResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 删除玩家属性

1. 调用[GameMediaEngine.DeleteRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section588113271107)方法，删除频道内玩家自定义属性。

   ```
   DeleteRtmChannelPlayerPropertiesReq req = new DeleteRtmChannelPlayerPropertiesReq();
   req.ChannelId  = "579457***95";
   List<string> keys = new();
   keys.Add("key1");
   keys.Add("key2");
   req.Keys = keys;
   engine.DeleteRtmChannelPlayerProperties(req);
   ```
2. 当删除玩家的自定义属性时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onDeleteRtmChannelPlayerProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section13452195617409)进行了封装，只需注册OnDeleteRtmChannelPlayerPropertiesEvent事件监听，并实现OnDeleteRtmChannelPlayerPropertiesCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnDeleteRtmChannelPlayerPropertiesEvent+= OnDeleteRtmChannelPlayerPropertiesCallbackImpl;

   // 监听处理
   void OnDeleteRtmChannelPlayerPropertiesCallbackImpl(DeleteRtmChannelPlayerPropertiesResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 监听频道内玩家属性变更

当频道内其他玩家自定义属性的变更时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onRtmChannelPlayerPropertiesChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section946143315318)进行了封装，只需注册OnRtmChannelPlayerPropertiesChangedEvent事件监听，并实现OnRtmChannelPlayerPropertiesChangedCallback委托函数即可。

```
// 对事件进行监听
callBackHandler.OnRtmChannelPlayerPropertiesChangedEvent+= OnRtmChannelPlayerPropertiesChangedCallbackImpl;

// 监听处理
void OnRtmChannelPlayerPropertiesChangedCallbackImpl(RtmChannelPlayerPropertiesNotify result)
{
   // 根据返回结果做相应业务逻辑处理
}
```
