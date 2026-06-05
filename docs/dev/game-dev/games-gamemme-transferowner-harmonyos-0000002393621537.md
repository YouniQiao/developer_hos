---
title: "转让房主身份"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-transferowner-harmonyos-0000002393621537
format: md
---


如果房主想让出房主权限，可将房主身份转让给房间中的其他玩家。

## 前提条件

* 您已[加入小队语音](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673#section644913141332)或[国战语音房间](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673#section429414312194)。
* 您为房主身份，且房间中已有其他玩家。

## 开发步骤

1. 调用[GameMediaEngine.transferOwner](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section876624518313)方法可直接转让房主身份给房间中的其他玩家。

   ```
   // 原房主无需离开房间，转让房主给其他玩家
   gameMediaEngine.transferOwner(roomId, ownerId);
   ```
2. 当玩家转让房主身份时，可在EventHandler接口的[onTransferOwner](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section144754436012)方法中实现相关回调处理。

   ```
   onTransferOwner(roomId: string, code: number, msg: string) {
     console.log('onTransferOwner : code=' + code + ', msg =' + msg + ', roomId=' + roomId);
   }
   ```
