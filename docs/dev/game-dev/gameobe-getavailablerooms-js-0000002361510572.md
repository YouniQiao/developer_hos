---
title: "获取可加入房间列表"
original_url: /docs/dev/game-dev/gameobe-getavailablerooms-js-0000002361510572
format: md
---


除通过房间ID加入房间外，玩家还可以通过获取当前可加入的房间列表，选择加入某一个房间。

## 前提条件

您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-js-0000002395350377)。

## 开发步骤

调用[Client.getAvailableRooms](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section660183871119)方法获取可加入的房间列表。

![](./img/21766f92.png)

当不传入roomType和roomTypeList这两个参数时，方法返回结果为当前应用下的所有可加入对战房间。不建议同时传入这两个参数，若同时传入，将返回两者合集中所有可加入对战房间。入参sync可用于查询帧同步中的房间和未开启帧同步的房间，默认为true。

```
let roomInfos = [];
let getAvailableRoomsConfig = {
   roomType: '蓝队',              // 房间类型
   offset: '0',                  // 偏移量
   limit: 30,                    // 单次请求获取的房间数量
   sync: true,                   // 是否返回帧同步中的房间
   roomTypeList: ['蓝队','红队'], // 房间类型列表
};
global.client.getAvailableRooms(getAvailableRoomsConfig).then((infos) => {
  // 查询房间列表成功
  roomInfos = infos.rooms;
  // 记录下次查询房间的偏移量
  getAvailableRoomsConfig.offset = infos.offset;
}).catch((e) => {
  // 查询房间列表失败
  roomInfos = [];
});
```
