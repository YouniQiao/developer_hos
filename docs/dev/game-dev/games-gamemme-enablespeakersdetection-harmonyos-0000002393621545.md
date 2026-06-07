---
title: "获取当前发言玩家列表"
original_url: /docs/dev/game-dev/games-gamemme-enablespeakersdetection-harmonyos-0000002393621545
format: md
---


通过本章的开发指导，您可实现获取房间内当前发言玩家列表以及对应的音量分贝的功能。

## 前提条件

您已[加入房间](/docs/dev/game-dev/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673)。

## 开发步骤

开启音量回调，并通过音量回调接口获取当前发言玩家ID列表以及对应的音量分贝。

1. 调用[GameMediaEngine.enableSpeakersDetection](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section927910184710)方法设置回调时间间隔来开启音量回调，用于获取当前房间发言玩家列表。

   ```
   gameMediaEngine.enableSpeakersDetection(String roomId, int interval); // roomId：房间ID; interval:当前发言玩家列表回调的时间间隔,有效值范围为[100, 10000],单位: 毫秒,当传入0时,即关闭音量回调
   ```
2. 当成功开启音量回调时，在EventHandler接口的[onSpeakersDetection](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1453918816402)方法中可获得当前发言玩家的ID列表以及对应的音量分贝。

   ![](./img/a8684d08.png)

   * 根据当前发言玩家的音量大小降序排序，列表中最多可展示当前4个发言玩家。
   * 音量分贝大小区间为[1,100]。

   ```
   onSpeakersDetection(userVolumeInfos: Array<VolumeInfo>) {
     if (!userVolumeInfos) {
       userVolumeInfos = [];
     }
     for (let i = 0; i < userVolumeInfos.length; i++) {
       console.log('onSpeakersDetection : openId=' + userVolumeInfos[i].openId + ', volume=' + userVolumeInfos[i].volume);
     }
   }
   ```
