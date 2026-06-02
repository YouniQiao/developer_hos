---
title: "监听RTM连接状态"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-rtm-connection-harmonyos-0000002338703681
---

当玩家登录、登出或者网络连接发生变化时，RTM连接状态会发生改变。因此，为了保证消息收发顺畅，需实时监听RTM的连接状态变化，确保RTM处于连接状态。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。

## 开发步骤

在EventHandler接口的[onRtmConnectionChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1975215428115)方法中，可监听RTM连接状态的变化。

```
onRtmConnectionChanged(status: ConnectionStatus, reason: string) {
  console.log(`onRtmConnectionChanged: status = ${status}`);
}
```
