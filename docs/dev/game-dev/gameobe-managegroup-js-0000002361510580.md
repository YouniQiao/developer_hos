---
title: "管理队伍"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-managegroup-js-0000002361510580
format: md
---


通过队伍信息查询，可获取当前所处队伍的相关信息。同时，队长还可以通过修改队伍名称、队长身份、队伍自定义属性等队伍相关属性，更新队伍相关信息。

## 前提条件

* 您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-js-0000002395350377)。
* 更新队伍信息时，玩家需为队长身份。

## 查询队伍信息

调用[Group.query](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section13774175719619)方法查询玩家所在队伍的信息。

```
let players;
global.group.query().then((groupInfo) => {
  // 队伍信息查询成功，并更新队伍及玩家信息
  global.group = groupInfo;
  players = groupInfo.players;
}).catch(() => {
  // 队伍信息查询失败
});
```

## 更新队伍信息

1. 调用[Group.updateGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section149471253318)方法更新队伍的信息。

   ```
   // 更新队伍信息参数
   const updateGroupConfig = {
     groupName: '红队',
     ownerId: '{ownerId}',
     customGroupProperties: '{customGroupProperties}',
     isLock: 0,
   }
   global.group.updateGroup(updateGroupConfig).then(() => {
     // 更新队伍信息中...
   }).catch(() => {
     // 更新队伍信息失败
   });
   ```
2. 当队长更新当前队伍信息时，可通过调用[Group.onUpdate](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section14195409115)方法监听该事件。

   ![](./img/ad978bc2.png)

   当监听到队伍信息更新事件后，队长即成功更新当前队伍信息。

   ```
   global.group.onUpdate((res) => {
     // 更新队伍信息成功
   });
   ```
