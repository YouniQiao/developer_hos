---
format: md
title: "音频焦点如何适配"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-audio-13
---

为确保应用提供良好的音频焦点体验，需要注意：

（1）应用在启动播放或录制前，需根据音频用途，正确指定StreamUsage或SourceType。

（2）应用需监听音频焦点事件，并在收到音频焦点事件时做出必要响应。

（3）若应用需要对音频焦点进行主动管理，可以使用音频会话（AudioSession）相关接口。

**参考链接**

[音频焦点和音频会话介绍](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-playback-concurrency)
