---
title: "查询已订阅频道列表"
original_url: /docs/dev/game-dev/games-gamemme-getrtmsubscribedchannel-harmonyos-0000002338703697
format: md
upstream_id: dev/game-dev/games-gamemme-getrtmsubscribedchannel-harmonyos-0000002338703697
last_sync: 2026-06-07
sync_hash: 3e927b3d
---
当订阅若干频道后，可通过查询已订阅的频道列表信息，查看频道的订阅情况。

## 前提条件

* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。

## 开发步骤

如需查询已订阅的频道列表，调用[GameMediaEngine.getRtmSubscribedChannelInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section78665154216)方法，即可获取当前已订阅的所有频道列表。

```
gameMediaEngine.getRtmSubscribedChannelInfo().then((result) => {
        // 可根据需求将数据进行处理
});
```
