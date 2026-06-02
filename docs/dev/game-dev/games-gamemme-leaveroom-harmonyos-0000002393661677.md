---
title: "离开房间"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-leaveroom-harmonyos-0000002393661677
---

进入房间后，不论是否已进入游戏中，房间内玩家均可离开房间。

![](./img/cd63b8ce.png)

房间中所有玩家全部离开后，房间将会自动销毁。

## 前提条件

您已[加入房间](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673)。

## 开发步骤

1. 调用[GameMediaEngine.leaveRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section12973194414512)方法离开房间。

   ![](./img/b20154d4.png)

   * 普通玩家离开房间时，参数ownerId传null、空字符串或不传即可。
   * 房主离开房间时，参数ownerId传null、空字符串或不传，则表示随机指定新房主。

   ```
   gameMediaEngine.leaveRoom(roomId, ownerId);
   ```
2. 当玩家离开房间时，可在EventHandler接口的[onLeaveRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section18454134013)方法中实现相关回调处理。

   ```
   onLeaveRoom(roomId: string, code: number, msg: string) {
     console.log('onLeaveRoom : code=' + code + ', msg=' + msg + ', roomId = ' + roomId);
   }
   ```

   当玩家成功离开房间时，房间内其他玩家可在EventHandler接口的[onPlayerOffline](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section3571539508)方法中收到该事件的回调通知，并可根据需求对数据进行处理。

   ```
   onPlayerOffline(roomId: string, openId: string) {
     console.log('onPlayerOffline : openId=' + openId + ', roomId=' + roomId);
   }
   ```
