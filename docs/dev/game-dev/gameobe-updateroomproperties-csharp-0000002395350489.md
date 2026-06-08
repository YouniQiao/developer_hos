---
title: "更新房间信息"
original_url: /docs/dev/game-dev/gameobe-updateroomproperties-csharp-0000002395350489
format: md
upstream_id: dev/game-dev/gameobe-updateroomproperties-csharp-0000002395350489
last_sync: 2026-06-07
sync_hash: 55da9ae4
---
通过本章的指导开发，您可实现对房间的信息（如房间名称、房间ID、房主ID、房间是否私有化、自定义房间属性、房间是否锁定等）进行更新操作。

## 前提条件

玩家为房主身份。

## 开发步骤

1. 调用[Room.UpdateRoomProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#section850868112717)方法更新房间信息。
   * 服务开通时，默认使用Web Socket协议，建议UpdateRoomProperties的第二个参数设置为null，更新结果可以通过步骤[2](#ZH-CN_TOPIC_0000002395350489__li185281438896)、[3](#ZH-CN_TOPIC_0000002395350489__li7511164264815)获取。

     ```
     Room room = Global.Room; // 通过Global类的room属性获取Room对象

     UpdateRoomPropertiesConfig updateRoomPropertiesConfig = new UpdateRoomPropertiesConfig() {
         CustomRoomProperties = "{CustomRoomProperties}", // 房间自定义属性
         OwnerId = "{OwnerId}",              // 房主ID
         IsPrivate = 0,                // 房间是否私有：0表示公开，1表示私有
         RoomName = "{RoomName}",             // 房间名称
         IsLock = 0,                   // 房间是否锁定：0表示非锁定，1表示锁定
         RoomType = "{RoomType}",            // 房间类型，比如“高手区”、“菜鸟区”
     };
     Room.UpdateRoomProperties(updateRoomPropertiesConfig, null);
     ```
   * 如果您当前在使用UDP协议，建议您根据如下示例代码更新玩家自定义属性。

     ```
     Room room = Global.Room; // 通过Global类的room属性获取Room对象

     UpdateRoomPropertiesConfig updateRoomPropertiesConfig = new UpdateRoomPropertiesConfig() {
         CustomRoomProperties = "{CustomRoomProperties}", // 房间自定义属性
         OwnerId = "{OwnerId}",              // 房主ID
         IsPrivate = 0,                // 房间私有：0表示公开，1表示私有
         RoomName = "{RoomName}",             // 房间名称
         IsLock = 0,                   // 房间是否锁定：0表示非锁定，1表示锁定
         RoomType = "{RoomType}",            // 房间类型，比如“高手区”、“菜鸟区”
     };
     Room.UpdateRoomProperties(updateRoomPropertiesConfig, res =>
     {
     	if (res.RtnCode == 0)
     	{
     		// 更新房间信息成功
     	}
     	else
     	{
     		// 更新房间信息失败
     	}
     });
     ```
2. 当更新房间信息成功时，该玩家（即房主）可通过实现[Room.OnRoomPropChangeSuccess](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#section114521245104318)委托收到更新成功的事件通知。

   ```
   Global.room.OnRoomPropChangeSuccess = () => {
        // 更新房间信息成功
   };
   ```
3. 当更新房间信息失败时，该玩家（即房主）可通过实现[Room.OnRoomPropChangeFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#section144807613436)委托收到更新失败的事件通知。

   ```
   Global.room.OnRoomPropChangeFailed = () => {
        // 更新房间信息失败
   };
   ```
4. 当房主更新房间信息成功后，房间所有玩家可通过实现[Room.OnRoomPropertiesChange](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p1770784215213)委托收到通知并同步更新房间信息。

   ```
   Global.Room.OnRoomPropertiesChange = roomInfo =>
   // 通过Global类的Room属性获取Room对象，绑定监听事件
   {
      // 同步更新房间信息;
   };
   ```
