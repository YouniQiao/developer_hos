---
title: "更新玩家自定义属性"
original_url: /docs/dev/game-dev/gameobe-updatecustomproperties-csharp-0000002361670548
format: md
upstream_id: dev/game-dev/gameobe-updatecustomproperties-csharp-0000002361670548
last_sync: 2026-06-07
sync_hash: b0cd0218
---
通过更新玩家的自定义属性，可用于实现玩家自定义信息（如玩家昵称、等级等）的更新。

## 前提条件

玩家已进入房间。

## 开发步骤

1. 调用[Player.UpdateCustomProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-csharp-0000002395355957#section154168844210)方法更新玩家自定义属性。
   * 服务开通时，默认使用Web Socket协议，建议UpdateCustomProperties的第二个参数设置为null，更新结果可以通过步骤[2](#ZH-CN_TOPIC_0000002361670548__li1332513041610)、[3](#ZH-CN_TOPIC_0000002361670548__li185281438896)获取。

     ```
     Player player = Global.player; // 通过Global类的player属性获取Player对象
     string customProperties = "{customProperties}";
     player.UpdateCustomProperties(customProperties, null);
     ```
   * 如果您当前在使用UDP协议，建议您根据如下示例代码更新玩家自定义属性。

     ```
     Player player = Global.player; // 通过Global类的player属性获取Player对象
     string customProperties = "{customProperties}";
     player.UpdateCustomProperties(customProperties, res =>
     {
     	if (res.RtnCode == 0)
     	{
     		// 更新自定义属性成功
     	}
     	else
     	{
     		// 更新自定义属性失败
     	}
     });
     ```
2. 当更新自定义属性成功时，该玩家可通过实现[Player.OnCustomPropertiesChangeSuccess](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-csharp-0000002395355957#section1186131175316)委托收到更新成功的事件通知。

   ```
   Global.player.OnCustomPropertiesChangeSuccess= () =>{
        // 更新玩家自定义属性成功
   };
   ```
3. 当更新自定义属性失败时，该玩家可通过实现[Player.OnCustomPropertiesChangeFailed](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-csharp-0000002395355957#section5902337125215)委托收到更新失败的事件通知。

   ```
   Global.player.OnCustomPropertiesChangeFailed= () =>{
        // 更新玩家自定义属性失败
    };
   ```
4. 当玩家更新自定义属性成功时，房间内所有玩家可通过实现[Room.OnUpdateCustomProperties](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057#ZH-CN_TOPIC_0000002395196057__p435213421556)委托收到事件通知。

   ```
   Global.Room.OnUpdateCustomProperties(res => // 通过Global类的Room属性获取Room对象，绑定监听事件
   {
   	// 更新属性
   });
   ```
