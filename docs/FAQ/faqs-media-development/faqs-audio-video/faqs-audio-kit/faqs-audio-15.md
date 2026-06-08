---
format: md
title: "设备切换后没有暂停"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-15
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-15
last_sync: 2026-06-07
sync_hash: fa59bec9
---
* 开发者可以了解音频流输出设备变更信息，并完成相应适配，确保应用在设备发生变更时的用户体验。开发者可使用AudioRenderer的[outputDeviceChangeWithInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer#onoutputdevicechangewithinfo11)，用于监听音频流输出设备变化及原因。当系统出现音频输出设备的上下线、用户强选、设备抢占或设备选择策略变更等情况，导致音频流输出设备变更时，系统将通过该接口通知应用当前音频流设备变更信息，包含当前音频流输出设备信息和设备变更原因。
* Webview策略：若应用实现播放按钮UI，需监听video播放状态以刷新UI按钮界面。

**参考链接**

[响应输出设备变更时合理暂停](/docs/dev/app-dev/media/audio-kit/audio-device/audio-output-device-change)
