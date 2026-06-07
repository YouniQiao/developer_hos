---
title: "设置扬声器播放音量"
original_url: /docs/dev/game-dev/games-gamemme-setvolume-csharp-0000002393266933
format: md
---


进入语音房间后，玩家如果希望控制房间音量，可通过设置扬声器播放音量实现，房间中任意玩家的声音都按设置的音量大小通过扬声器播出。

## 前提条件

玩家已[加入](/docs/dev/game-dev/games-gamemme-voice-joinroom-roomid-csharp-0000002393227073)房间。

## 开发步骤

调用[GameMediaEngine.AdjustPlaybackVolume](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section92918215494)方法设置扬声器播放音量，调整房间扬声器播放音量增益值。

```
// volume：扬声器播放音量值，范围[0, 100]
engine.AdjustPlaybackVolume(volume,
new OpenHarmonyJSCallback(args => {
    OpenHarmonyJSObject data = args[0];
    var result = data.Get<int>("data");
    // 处理业务逻辑
}));
```

![](./img/d7ae534b.png)

* 进入语音房间后，扬声器播放音量默认是10，表示原始音量，无增益，10以下表示负增益，10以上表示正增益。
* 调用此接口设置音量值不影响系统音量。
