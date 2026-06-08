---
format: md
title: "静音播放音频时，如何做到不抢音频焦点"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-9
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-9
last_sync: 2026-06-07
sync_hash: 09d4d4f1
---
若应用以静音状态开始播放音频或视频，并且希望静音阶段不影响其他音频，后续解除静音时，再以正常策略申请音频焦点，可以调用静音并发播放模式的相关接口。

* 若使用[AVPlayer开发音频播放功能(ArkTS)](/docs/dev/app-dev/media/media-kit/media-kit-dev-arkts/media-playback-arkts/using-avplayer-for-playback)，可以调用[setMediaMuted](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#setmediamuted12)函数。
* 若使用[AudioRenderer开发音频播放功能](/docs/dev/app-dev/media/audio-kit/audio-playback/using-audiorenderer-for-playback)，可调用[setSilentModeAndMixWithOthers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer#setsilentmodeandmixwithothers12)函数。
* 若使用WebView开发音频播放功能，播放前将流音量设为0，系统默认优先与其他音频流并发，解除静音时申请音频焦点。
