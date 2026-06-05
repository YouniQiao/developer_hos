---
title: "设置扬声器播放音量"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-setvolume-harmonyos-0000002359901692
format: md
---


进入语音房间后，玩家如果希望控制房间音量，可通过设置扬声器播放音量实现，房间中任意玩家的声音都按设置的音量大小通过扬声器播出。

## 前提条件

您已[加入房间](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673)。

## 开发步骤

调用[GameMediaEngine.adjustPlaybackvolume](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section13405102019395)方法设置扬声器播放音量，调整房间扬声器播放音量增益值，并通过返回值获得操作结果。

```
let result = gameMediaEngine.adjustPlaybackVolume(volume); //volume 扬声器播放音量值, 取值范围为[0,100], 默认音量值为10
```

![](./img/e991ccad.png)

* 进入语音房间后，扬声器播放音量默认是10，表示原始音量，无增益，10以下表示负增益，10以上表示正增益。
* 调用此接口设置音量值不影响系统音量。
