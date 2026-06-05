---
title: "监听RTM连接状态"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-rtm-connection-minigame-0000002393266949
format: md
---


当玩家登录、登出或者网络连接发生变化时，RTM连接状态会发生改变。因此，为了保证消息收发顺畅，需实时监听RTM的连接状态变化，确保RTM处于连接状态。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-minigame-0000002393266909)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-enginecreateparams-minigame-0000002359123496#ZH-CN_TOPIC_0000002359123496__p3284173213149)值为true（即RTM为开启状态）。

## 开发步骤

通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onRtmConnectionChanged](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section879010390325)”事件，可监听RTM连接状态的变化。

```
GameMediaEngine.on('onRtmConnectionChanged', (notify: RtmConnectionChangedNotify) =>
  this.onRtmConnectionChanged(notify)
);
onRtmConnectionChanged(notify: RtmConnectionChangedNotify) {
         // 可根据需求将数据进行处理
}
```
