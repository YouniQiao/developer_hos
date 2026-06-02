---
title: "更新玩家自定义状态"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-updatecustomstatus-csharp-0000002395190585
---

通过对玩家的自定义状态进行更新，可用于实现房间内玩家准备和取消准备等功能。

## 前提条件

玩家已进入房间。

## 开发步骤

1. 调用[Player.UpdateCustomStatus](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-csharp-0000002395355957#section138221670168)方法更新玩家自定义状态。
   * 服务开通时，默认使用Web Socket协议，建议UpdateCustomStatus的第二个参数设置为null，更新结果可以通过步骤[2](#ZH-CN_TOPIC_0000002395190585__li1332513041610)、[3](#ZH-CN_TOPIC_0000002395190585__li185281438896)获取。

     ```
     Player player = Global.player; // 通过Global类的player属性获取Player对象
     int playerChangeStatus = 0;
     player.UpdateCustomStatus(playerChangeStatus, null);
     ```
   * 如果您当前在使用UDP协议，建议您根据如下示例代码更新玩家自定义状态。

     ```
     Player player = Global.player; // 通过Global类的player属性获取Player对象
     int playerChangeStatus = 0;
     player.UpdateCustomStatus(playerChangeStatus, res =>
     {
     	if (res.RtnCode == 0)
     	{
     		// 接口调用成功
     	}
     	else
     	{
     		// 接口调用失败
     	}
     });
     ```
2. 当更新自定义状态成功时，该玩家可通过实现[Player.OnCustomStatusChangeSuccess](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-csharp-0000002395355957#section11494112155219)委托收到更新成功的事件通知。

   ```
   Global.player.OnCustomStatusChangeSuccess = () => {
        // 更新玩家自定义状态成功
   };
   ```
3. 当更新自定义状态失败时，该玩家可通过实现[Player.OnCustomStatusChangeFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-csharp-0000002395355957#section172787338517)委托收到更新失败的事件通知。

   ```
   Global.player.OnCustomStatusChangeFailed = () => {
        // 更新玩家自定义状态失败
   };
   ```
4. 当玩家更新自定义状态成功时，房间内所有玩家可通过实现[Room.OnUpdateCustomStatus](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p12531123810557)委托收到事件通知。

   ```
   Global.Room.OnUpdateCustomStatus = (res) => {    // 通过Global类的Room属性获取Room对象，绑定监听事件
       // 更新消息
   };
   ```
