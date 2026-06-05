---
title: "获取房间最新信息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-geroomdetail-csharp-0000002361510676
format: md
---


本章将指导您实现获取房间最新信息的功能。

## 前提条件

玩家已进入房间。

## 开发步骤

调用[Room.Update](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#section784813131994)方法获取房间最新信息。

```
Global.Room.Update(res => // 通过Global类的Room属性获取Room对象，绑定监听事件
{
	if (res.RtnCode == 0)
	{
		// 获取玩家房间最新信息成功，执行相关的游戏处理逻辑
	}
	else
	{
		// 获取玩家房间最新信息失败
	}
});
```
