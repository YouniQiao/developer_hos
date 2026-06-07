---
title: "事件监听"
original_url: /docs/dev/game-dev/gameobe-listener-real-time-server-0000002395350537
format: md
---


您可以使用GameServer相关方法监听客户端的相关事件，包括监听客户端的房间创建/销毁、帧同步开始/停止、客户端发送给实时服务器消息等事件。

## 监听创建房间事件

当客户端创建房间成功时，服务端可通过[GameServer.onCreateRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section323911317408)方法监听到该事件。

![](./img/6689067f.png)

在创建房间过程中，实时服务器正在进行初始化，请不要在创建房间的回调方法中进行修改房间属性、发送实时消息等操作。

```
gameServer.onCreateRoom(args: GOBERTS.ActionArgs) {
    // 业务逻辑实现
}
```

## 监听销毁房间事件

当客户端创建的房间销毁时，服务端可通过[GameServer.onDestroyRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section2159174074015)方法监听到该事件。

```
gameServer.onDestroyRoom(args: GOBERTS.ActionArgs) {
    // 业务逻辑实现
}
```

## 监听websocket连接建立事件

当客户端建立websocket连接时，服务端可在调用端侧SDK的onConnect回调的同时，通过[GameServer.onConnect](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section7472371007)方法监听到该事件。

```
gameServer.onConnect(args:GOBERTS.ActionArgs) {
    // 业务逻辑实现
}
```

## 监听websocket连接断开事件

当客户端断开websocket连接时，在调用端侧SDK的onDisconnect回调的同时，服务端可通过[GameServer.onDisconnect](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section1722145716019)方法监听到该事件。

```
gameServer.onDisconnect(args:GOBERTS.ActionArgs) {
    // 业务逻辑实现
}
```

## 监听开始帧同步事件

当客户端开始游戏时，服务端可通过[GameServer.onStartFrameSync](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section09714469485)方法监听到该事件。

```
gameServer.onStartFrameSync(args: GOBERTS.ActionArgs) {
    // 业务逻辑实现
}
```

## 监听停止帧同步事件

当客户端停止游戏时，服务端可通过[GameServer.onStopFrameSync](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section118892578485)方法监听到该事件。

```
gameServer.onStopFrameSync(args: GOBERTS.ActionArgs) {
    // 业务逻辑实现
}
```

## 监听客户端消息

当客户端发送消息到实时服务器时，服务端可通过[GameServer.onRecvFromClientV2](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section72025329413)方法监听客户端发送的消息。

![](./img/294f1f79.png)

实时服务器SDK还提供了[GameServer.onRecvFromClient](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section111603405404)方法，但GameServer.onRecvFromClientV2方法接口性能更好、处理效率更高。使用后者时，请在index脚本中删除onRecvFromClient回调。若两个方法同时存在，则默认使用GameServer.onRecvFromClient方法。

```
gameServer.onRecvFromClientV2(msg: GOBERTS.RecvFromClientInfo, args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听实时服务器websocket连接建立

当客户端创建房间或实时服务器websocket异常断开重连时，实时服务器与联机对战服务器建立websocket连接，服务端可通过[GameServer.onRealTimeServerConnected](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section6842185013211)方法监听到该事件。

```
gameServer.onRealTimeServerConnected(args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听实时服务器websocket连接断开

当实时服务器断开websocket连接时，服务端可通过[GameServer.onRealTimeServerDisconnected](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section19906614027)方法监听到该事件。

```
gameServer.onRealTimeServerDisconnected(args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听玩家加入房间

当客户端创建的房间中有玩家加入时，服务端可通过[GameServer.onJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section10228727154018)方法监听到该事件。

```
gameServer.onJoin(playerInfo: GOBERTS.FramePlayerInfo, args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听玩家离开房间

当客户端创建的房间中有玩家离开时，服务端可通过[GameServer.onLeave](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section149768351807)方法监听到该事件。

```
gameServer.onLeave(playerInfo: GOBERTS.FramePlayerInfo, args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听帧消息广播

当实时服务器接收到客户端广播的帧消息时，服务端可通过[GameServer.onRecvFrame](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section24024431611)方法监听到该事件。

```
gameServer.onRecvFrame(msg:GOBERTS.RecvFrameMessage | GOBERTS.RecvFrameMessage[], args: GOBERTS.ActionArgs):void {
    let unhandleFrames: GOBERTS.RecvFrameMessage[] = Array.isArray(msg)? msg : [msg];

    unhandleFrames.forEach(message => {
        // 若当前帧为空帧，则不做处理
        if (!message.frameInfo || message.frameInfo.length < 1) {
            return;
        };

        message.frameInfo.forEach((frameData: FrameInfo) => {
            let frameDataList: string[] = frameData.data;
            if (frameDataList && frameDataList.length > 0) {
                frameDataList.forEach(res => {
                    args.SDK.log.info('frameData=' + res);
                });
            }
        });
    });
}
```

## 监听房间信息更新

当房间信息更新时，服务端可通过[GameServer.onRoomPropertiesChange](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section1965812561132)方法监听到该事件。

```
gameServer.onRoomPropertiesChange(msg: GOBERTS.UpdateRoomInfo, args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听房间信息更新失败

当房间信息更新失败时，服务端可通过[GameServer.onRoomPropertiesChangeFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section1346172313510)方法监听到该事件。

```
gameServer.onRoomPropertiesChangeFailed(error: GOBERTS.GOBEError, args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听玩家自定义属性修改

当客户端玩家属性被修改时，服务端可通过[GameServer.onUpdateCustomProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section8802134012319)方法监听到该事件。

```
gameServer.onUpdateCustomProperties(player: GOBERTS.FramePlayerPropInfo, args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听玩家自定义状态修改

当客户端玩家自定义状态被修改时，服务端可通过[GameServer.onUpdateCustomStatus](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section6466131216311)方法监听到该事件。

```
gameServer.onUpdateCustomStatus(msg: GOBERTS.FramePlayerStatusInfo, args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听请求帧错误

当客户端请求补帧失败时，服务端可通过[GameServer.onRequestFrameError](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section962610192416)方法监听到该事件。

```
gameServer.onRequestFrameError(error: GOBERTS.GOBEError, args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```

## 监听发送实时消息失败

当实时服务器发送实时消息失败时，服务端可通过[GameServer.onInstantMessageFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-gameserver-server-ts-0000002361676140#section33615413514)方法监听到该事件。

```
gameServer.onInstantMessageFailed(error: GOBERTS.GOBEError, args: GOBERTS.ActionArgs): void {
    // 业务逻辑实现
}
```
