---
title: "自定义频道属性"
original_url: /docs/dev/game-dev/games-gamemme-channelproperties-csharp-native-0000002393227141
format: md
upstream_id: dev/game-dev/games-gamemme-channelproperties-csharp-native-0000002393227141
last_sync: 2026-06-07
sync_hash: cedd0a81
---
游戏多媒体实时信令功能支持设置频道自定义属性，例如频道标签、状态等。同时，还支持监听频道自定义属性的变更，及时感知频道属性的修改。

## 前提条件

* 您已[集成游戏多媒体基础SDK和实时信令模块](/docs/dev/game-dev/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。

* 您已[订阅频道](/docs/dev/game-dev/games-gamemme-channel-subscribe-csharp-native-0000002359707022#section1014421318306)。

## 设置频道属性

1. 调用[GameMediaEngine.SetRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section17441854005)方法，设置频道自定义属性。

   ```
   SetRtmChannelPropertiesReq req = new SetRtmChannelPropertiesReq();
   req.ChannelId = "579457***95";
   Dictionary<string, string> propertyDict = new();
   propertyDict.Add("key1", "value1");
   propertyDict.Add("key2", "value2");
   req.ChannelProperties(propertyMap);
   engine.SetRtmChannelProperties(req);
   ```
2. 当设置频道自定义属性时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onSetRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section34195712402)进行了封装，只需注册OnSetRtmChannelPropertiesEvent事件监听，并实现OnSetRtmChannelPropertiesCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnSetRtmChannelPropertiesEvent+= OnSetRtmChannelPropertiesCallbackImpl;

   // 监听处理
   void OnSetRtmChannelPropertiesCallbackImpl(SetRtmChannelPropertiesResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 查询频道属性

1. 调用[GameMediaEngine.GetRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section239317269112)方法，查询频道自定义属性。

   ```
   GetRtmChannelPropertiesReq req = new GetRtmChannelPropertiesReq();
   req.ChannelId = "579457***95";
   engine.GetRtmChannelProperties(req);
   ```
2. 当查询频道自定义属性时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onGetRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section31161736105311)进行了封装，只需注册OnGetRtmChannelPropertiesEvent事件监听，并实现OnGetRtmChannelPropertiesCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnGetRtmChannelPropertiesEvent+= OnGetRtmChannelPropertiesCallbackImpl;

   // 监听处理
   void OnGetRtmChannelPropertiesCallbackImpl(GetRtmChannelPropertiesResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 删除频道属性

1. 调用[GameMediaEngine.DeleteRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section16880155412115)方法，删除频道自定义属性。

   ```
   DeleteRtmChannelPropertiesReq req = new DeleteRtmChannelPropertiesReq();
   req.ChannelId = "579457***95";
   List<string> keys = new();
   keys.Add("key1");
   keys.Add("key2");
   req.Keys = keys;
   engine.DeleteRtmChannelProperties(req);
   ```
2. 当删除频道自定义属性时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onDeleteRtmChannelProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section28041345520)进行了封装，只需注册OnDeleteRtmChannelPropertiesEvent事件监听，并实现OnDeleteRtmChannelPropertiesCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnDeleteRtmChannelPropertiesEvent+= OnDeleteRtmChannelPropertiesCallbackImpl;

   // 监听处理
   void OnDeleteRtmChannelPropertiesCallbackImpl(DeleteRtmChannelPropertiesResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 监听频道属性变更

当频道自定义属性变更时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onRtmChannelPropertiesChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section127441335185313)进行了封装，只需注册OnRtmChannelPropertiesChangedEvent事件监听，并实现OnRtmChannelPropertiesChangedCallback委托函数即可。

```
// 对事件进行监听
callBackHandler.OnRtmChannelPropertiesChangedEvent+= OnRtmChannelPropertiesChangedCallbackImpl;

// 监听处理
void OnRtmChannelPropertiesChangedCallbackImpl(RtmChannelPropertiesNotify result)
{
   // 根据返回结果做相应业务逻辑处理
}
```
