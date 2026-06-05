---
format: md
title: "如何实现录音监听"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-audio-5
---

系统音频监听功能在AudioStreamManager内，录音监听可以通过on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfoArray>): void订阅接口实现。详细可参考链接：[on('audioCapturerChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiostreammanager#onaudiocapturerchange9)。
