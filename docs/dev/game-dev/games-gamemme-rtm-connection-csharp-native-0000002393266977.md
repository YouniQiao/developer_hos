---
title: "监听RTM连接状态"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-rtm-connection-csharp-native-0000002393266977
format: md
---


当玩家登录、登出或者网络连接发生变化时，RTM连接状态会发生改变。因此，为了保证消息收发顺畅，需实时监听RTM的连接状态变化，确保RTM处于连接状态。

## 前提条件

* 您已[集成游戏多媒体基础SDK和实时信令模块](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。

## 开发步骤

当RTM连接状态发生变化时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onRtmConnectionChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section849534113402)进行了封装，您只需注册OnRtmConnectionChangedEvent事件监听，并实现OnRtmConnectionChangedCallback委托函数即可。

```
// 对事件进行监听
callBackHandler.OnRtmConnectionChangedEvent+= OnRtmConnectionChangedCallbackImpl;

// 监听处理
void OnRtmConnectionChangedCallbackImpl(RtmConnectionStatusNotify notify)
{
   // 根据返回结果做相应业务逻辑处理
}
```
