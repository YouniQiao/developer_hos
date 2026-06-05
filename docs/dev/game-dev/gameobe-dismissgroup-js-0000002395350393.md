---
title: "解散队伍"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-dismissgroup-js-0000002395350393
format: md
---


当游戏未开始时，队长可以解散当前所处的队伍。

## 前提条件

* 您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-js-0000002395350377)。
* 玩家为队长身份。

## 开发步骤

1. 调用[Client.dismissGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section616118548720)方法解散队伍。

   ```
   global.client.dismissGroup()
   .then(() => {
     // 解散队伍成功
   }).catch((e) => {
     // 解散队伍失败
   });
   ```
2. 当队长解散当前队伍时，队伍内其他玩家可通过调用[Group.onDismiss](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section107791654151014)方法监听该事件。

   ```
   global.group.onDismiss(() => {
     // 解散队伍成功
   });
   ```
3. 当队长成功解散队伍后，原队伍内其他玩家可调用[Group.removeAllListeners](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section163041724173911)移除所有事件的监听。

   ```
   // 移除所有事件监听
   global.group.removeAllListeners();
   ```
