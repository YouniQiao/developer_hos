---
title: "多端登录导致下线"
original_url: /docs/dev/game-dev/gameobe-onkickoff-js-0000002361510604
format: md
---


使用同一个玩家账号在不同终端设备上登录时，新登录的设备会将之前登录的旧设备已登录的账号踢下线，旧设备上登录的玩家将会收到离线通知。如需使用当前玩家账号继续在旧设备上游戏，则需要重新登录。

## 前提条件

* 您已[开通联机对战服务](/docs/dev/game-dev/gameobe-enable-0000002395350369)。
* 您已[集成联机对战SDK](/docs/dev/game-dev/gameobe-integratingsdk-js-0000002361670432)。
* 您已成功登录游戏。

## 开发步骤

当多端登录导致被踢下线时，旧设备上登录的玩家可通过[Client.onKickOff](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section1900183817396)方法收到离线通知。

```
// 通过Global类的client属性获取Group对象,绑定监听事件
Global.client.OnKickOff() => {
    // 玩家收到多端离线的通知，提示玩家已离线，需要重新登录
});
```
