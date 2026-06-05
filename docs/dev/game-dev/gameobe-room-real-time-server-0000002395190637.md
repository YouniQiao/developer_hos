---
title: "房间管理"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-room-real-time-server-0000002395190637
format: md
---


您可以使用ActionArgs.SDK相关方法实现一些房间管理的业务逻辑，包括获取房间信息、修改房间属性、移除房间内玩家以及解散房间等使用场景。

## 获取房间信息

例如，当监听到客户端创建房间成功时，如需获取房间信息，可通过[ActionArgs.SDK.getRoomInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section159279374181)方法由实时服务器进行获取。

```
args.SDK.getRoomInfo().then( roomInfo => {
    // 获取房间信息成功
}).catch( err => {
    // 获取房间信息失败
});
```

## 修改房间属性

例如，当创建房间成功后，如需修改房间属性，可通过[ActionArgs.SDK.updateRoomProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section1274165844511)方法由实时服务器进行修改。

```
let roomProperties = {
    customRoomProperties: "newRoomProperties",
    isPrivate: 0,
    roomName: "newRoomName",
    ownerId: "{ownerId}",
    isLock: 0,
}
args.SDK.updateRoomProperties(roomProperties).then(() => {
    args.SDK.log.info('updateRoomProperties success');
}).catch(err => {
    args.SDK.log.error('updateRoomProperties fail ' + err);
})
```

## 移除房间内玩家

例如，当有玩家加入房间后，如需移除该玩家，可通过[ActionArgs.SDK.removePlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section57521544164712)方法由实时服务器进行移除操作。

```
args.SDK.removePlayer('123456').then(() => {
    args.SDK.log.info('removePlayer success');
}).catch(err => {
    args.SDK.log.error('removePlayer fail ' + err);
})
```

## 解散当前房间

例如，当所有玩家都退出房间后，如需解散房间，可通过[ActionArgs.SDK.dismiss](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-actionargs-server-ts-0000002361676148#section78098224496)方法由实时服务器进行解散。

```
args.SDK.dismiss().then(() => {
    args.SDK.log.info('dismiss success');
}).catch(err => {
    args.SDK.log.error('dismiss fail ' + err);
})
```
