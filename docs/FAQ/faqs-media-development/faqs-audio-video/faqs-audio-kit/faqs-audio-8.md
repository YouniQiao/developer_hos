---
format: md
title: "播放短促提示音（如点赞、收藏、新消息等场景的提示音或音效），应该如何处理"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-audio-8
---


* 推荐优先使用[SoundPool](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-soundpool)，若应用使用SoundPool开发音频播放功能，且StreamUsage指定为Music、Movie、AudioBook等类型，播放短音，则其申请焦点时默认为并发模式，不会影响其他音频。
* 若应用不希望使用SoundPool，并且当前使用的流类型会打断其他音频播放，推荐使用[AudioSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-playback-concurrency)相关接口，指定为MIX\_WITH\_OTHERS策略。
