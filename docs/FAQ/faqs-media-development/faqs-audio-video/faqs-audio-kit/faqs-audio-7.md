---
format: md
title: "AudioRenderer是否有跳转到某一帧的接口"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-7
---


AudioRenderer底层不支持跳转到某一帧。AudioRenderer接口由客户端主动发送数据，完成后即开始播放。而AvPlayer支持跳转到某一帧，因为它有数据源，例如文件。可使用avPlayer.seek()方法跳转到指定播放位置，只能在prepared/playing/paused/completed状态调用。

```
let seekTime: number = 1000
avPlayer.seek(seekTime,media.SeekMode.SEEK_PREV_SYNC)
```

**参考链接**

[seek](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#seek9)
