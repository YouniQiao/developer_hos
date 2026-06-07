---
title: "获取可加入房间列表"
original_url: /docs/dev/game-dev/gameobe-getavailablerooms-csahrp-0000002395190533
format: md
---


除通过房间ID加入房间外，玩家还可以通过获取当前可加入的房间列表，选择加入其中某一个房间。

## 前提条件

您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-csharp-0000002361510612)。

## 开发步骤

调用[Client.GetAvailableRooms](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section660183871119)方法获取可加入房间列表。

![](./img/32c42321.png)

当不传入roomType和roomTypeList这两个参数时，方法返回结果为当前应用下的所有可加入对战房间。不建议同时传入这两个参数，若同时传入，将返回这两个参数合集范围内所有可加入对战房间。入参Sync可用于查询帧同步中的房间和未开启帧同步的房间，默认为true。

```
GetAvailableRoomsConfig getRoomReq = new GetAvailableRoomsConfig()
{
        RoomType = "蓝队", // 房间类型
        Limit = 30, // 单次请求获取的房间数量
        Sync = true, // 是否返回帧同步中的房间
        RoomTypeList = new List<string> { "高手区" } // 房间类型列表，比如“高手区”
};
Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
client.GetAvailableRooms(getRoomReq, res => {
	if (res.RtnCode == 0)
	{
		// 获取房间列表成功
	}
	else
	{
		// 获取房间列表失败
	}
});
```
