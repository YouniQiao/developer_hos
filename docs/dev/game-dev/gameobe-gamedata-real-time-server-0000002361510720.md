---
title: "消息通信"
original_url: /docs/dev/game-dev/gameobe-gamedata-real-time-server-0000002361510720
format: md
upstream_id: dev/game-dev/gameobe-gamedata-real-time-server-0000002361510720
last_sync: 2026-06-07
sync_hash: 06c523c1
---
您可以使用ActionArgs.SDK相关方法实现一些消息管理的业务逻辑，包括发送消息给客户端、请求补帧等使用场景。

## 发送消息给客户端

例如，当监听到客户端发送消息到实时服务器时，服务端可通过[ActionArgs.SDK.sendData](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section138221670168)方法将收到的消息发送给房间内所有玩家。

```
const gameData = '{gameData}';
args.SDK.sendData(gameData).then( ()=> {
    // 发送游戏数据成功
}).catch( err => {
    // 发送游戏数据失败
});
```

## 请求补帧

当实时服务器发现客户端丢帧时，服务端可通过[ActionArgs.SDK.requestFrame](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section131361212191616)方法请求补帧。

```
let beginFrameId = {beginFrameId};
let requestFrameSize = {requestFrameSize};
args.SDK.requestFrame(beginFrameId, requestFrameSize).then(() => {
// 请求补帧相关逻辑
}).catch(err => {
});
```

## 查询当前应用是否开启自动补帧

如需查询当前应用是否开启自动补帧，服务端可通过[ActionArgs.SDK.getAutoFrame](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section173899382185)方法进行获取。

```
if (args.SDK.getAutoFrame()) {
// 自动补帧相关逻辑处理
} else {
// 非自动补帧相关逻辑处理
}
```

## 获取当前应用的帧率

如需查询当前应用的帧率，服务端可通过[ActionArgs.SDK.getFrameRate](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section10733104271817)方法进行获取。

```
let frameRate = args.SDK.getFrameRate();
```
