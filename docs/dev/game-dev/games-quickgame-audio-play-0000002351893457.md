---
title: "音频播放"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-audio-play-0000002351893457
---

快游戏中使用 InnerAudioContext 播放音频。通过[qg.createInnerAudioContext()](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-audio-0000002366156904#section855144817217)可以获取到全局唯一的 InnerAudioContext 实例。支持的属性和方法请参见[音频](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-audio-0000002366156904)。

## 前后台切换

当游戏被隐藏到后台时，所有音频都会暂停，并在回到前台之前都不能再次播放成功。回到前台后，被暂停的音频会自动继续播放。

如果希望回到前台后，音频处于暂停的状态，则调用下列代码：

```
const audio = qg.createInnerAudioContext();
qg.onShow(()=>{
    audio.pause();
});
```

## 处理音频中断

音频中断事件指的是在游戏期间，音频被系统打断时触发的事件。音频中断事件分为中断开始和中断结束事件，分别使用[qg.onAudioInterruptionBegin](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-sysevent-0000002366156864#section14491184211221)和[qg.onAudioInterruptionEnd](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-sysevent-0000002366156864#section395320711180)来监听。

以下事件会触发音频中断开始事件：接到电话、闹钟响起、系统提醒。

用户可在中断事件中处理音频：

```
const audio = qg.createInnerAudioContext();
qg.onAudioInterruptionEnd(()=>{
    //继续播放音乐，代码省略…
});
qg.onAudioInterruptionBegin(()=>{
    //暂停播放音乐，代码省略…
});
```
