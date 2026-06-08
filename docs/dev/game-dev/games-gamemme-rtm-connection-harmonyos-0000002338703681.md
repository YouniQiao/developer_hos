---
title: "监听RTM连接状态"
original_url: /docs/dev/game-dev/games-gamemme-rtm-connection-harmonyos-0000002338703681
format: md
upstream_id: dev/game-dev/games-gamemme-rtm-connection-harmonyos-0000002338703681
last_sync: 2026-06-07
sync_hash: f09c0d2f
---
当玩家登录、登出或者网络连接发生变化时，RTM连接状态会发生改变。因此，为了保证消息收发顺畅，需实时监听RTM的连接状态变化，确保RTM处于连接状态。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。

## 开发步骤

在EventHandler接口的[onRtmConnectionChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1975215428115)方法中，可监听RTM连接状态的变化。

```
onRtmConnectionChanged(status: ConnectionStatus, reason: string) {
  console.log(`onRtmConnectionChanged: status = ${status}`);
}
```
