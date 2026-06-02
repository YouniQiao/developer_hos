---
title: "查询频道信息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-getrtmchannelinfo-csharp-native-0000002359707030
---

订阅频道的过程中，如需查看指定频道的详细信息，如订阅玩家数量、玩家信息（RTM连接状态、属性等），可通过查询频道信息获取。

## 前提条件

* 您已[集成游戏多媒体基础SDK和实时信令模块](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。

## 开发步骤

1. 调用[GameMediaEngine.GetRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section7319193618574)方法，查询频道信息，例如指定频道的用户列表。

   ```
   GetRtmChannelInfoReq req = new GetRtmChannelInfoReq();
   req.ChannelId = "579457***95";
   req.IsReturnMembers = true;
   engine.GetRtmChannelInfo(req);
   ```
2. 当查询频道信息时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onGetRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section077413479404)进行了封装，只需注册OnGetRtmChannelInfoEvent事件监听，并实现OnGetRtmChannelInfoCallback委托函数即可。

   ```
   // 对事件进行监听
   callBackHandler.OnGetRtmChannelInfoEvent+= OnGetRtmChannelInfoCallbackImpl;

   // 监听处理
   void OnGetRtmChannelInfoCallbackImpl(GetRtmChannelInfoResult result)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
