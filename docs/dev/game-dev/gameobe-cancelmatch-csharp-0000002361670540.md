---
title: "取消匹配"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-cancelmatch-csharp-0000002361670540
format: md
---


当玩家发起匹配后，中途若需要停止匹配，可以调用取消匹配接口来完成取消匹配的操作。

![](./img/b2f4caf8.png)

* “取消匹配”仅针对玩家发起“在线匹配”和“组队匹配”后操作。
* 如果取消匹配时玩家已成功匹配，调用取消匹配接口则会失败，玩家将直接进入对战房间。
* 如果取消匹配成功，取消匹配接口返回“匹配取消成功”，同时匹配查询接口会返回一个错误码（在线匹配场景中，会返回错误码[104211](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-errorcode-csharp-0000002395196133#ZH-CN_TOPIC_0000002395196133__p594211200387)。在组队匹配场景中，队员查询匹配结果会返回[104205](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-errorcode-csharp-0000002395196133#ZH-CN_TOPIC_0000002395196133__p209411920113812)，队长或匹配发起者查询匹配结果则会返回[104211](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-errorcode-csharp-0000002395196133#ZH-CN_TOPIC_0000002395196133__p594211200387)），表示匹配操作因取消而失败。

## 前提条件

玩家已发起[在线匹配](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-matchplayer-csharp-0000002395190569)或[组队匹配](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-matchgroup-csharp-0000002395190581)。

## 取消匹配

1. 调用[Client.CancelMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section1264255114913)方法进行取消匹配。

   ```
   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.CancelMatch();
   ```
