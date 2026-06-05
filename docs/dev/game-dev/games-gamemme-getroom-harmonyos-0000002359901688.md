---
title: "获取指定房间信息"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-getroom-harmonyos-0000002359901688
format: md
---


进入语音房间后，您可通过获取指定房间信息，实现房间信息页面展示功能。如需实现定时刷新房间信息功能，可自行通过轮询调用接口实现。

![](./img/4193003e.png)

获取指定房间信息时，范围语音房间不会返回房间内其他玩家的信息。

## 前提条件

您已[加入房间](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673)。

## 开发步骤

调用[GameMediaEngine.getRoom](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section129432591757)方法获取指定房间信息。

```
Room room = gameMediaEngine.getRoom(roomId);
```
