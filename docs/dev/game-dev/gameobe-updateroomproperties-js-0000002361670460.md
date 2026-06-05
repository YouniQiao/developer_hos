---
title: "更新房间信息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-updateroomproperties-js-0000002361670460
format: md
---


通过本章的指导开发，您可实现对房间的信息（如房间名称、房主ID、房间是否私有化、自定义房间属性、房间是否锁定等）进行更新操作。

## 前提条件

玩家为房主身份。

## 开发步骤

1. 调用[Room.updateRoomProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section850868112717)方法更新房间信息。

   ```
   const roomProperties = {
     roomName: '{roomName}',             // 房间名称
     customRoomProperties: '{customRoomProperties}', // 房间自定义属性
     ownerId: "{ownerId}",              // 房主ID
     isPrivate: 0,                // 房间私有：0表示公开，1表示私有
     isLock: 0,                   // 房间是否锁定：0表示非锁定，1表示锁定
     roomType: '{roomType}',            // 房间类型，比如“高手区”、“菜鸟区”
   }
   global.room.updateRoomProperties(roomProperties);
   ```
2. 当房主更新房间信息失败时，房主会通过[Room.onRoomPropertiesChangeFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section3289196192220)方法收到更新失败的事件通知。

   ```
   global.room.onRoomPropertiesChangeFailed(error => {
     // 更新房间信息失败
   });
   ```
3. 当房主更新房间信息成功后，房间内所有玩家将通过[Room.onRoomPropertiesChange](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section591542849)方法收到通知并同步更新房间信息。

   ```
   global.room.onRoomPropertiesChange(roomInfo =>
   {
      // 同步更新房间信息成功;
   });
   ```
