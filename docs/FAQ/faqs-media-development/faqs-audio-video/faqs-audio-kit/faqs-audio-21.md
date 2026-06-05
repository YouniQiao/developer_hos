---
format: md
title: "如何播放PCM格式的音频"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-audio-21
---

**问题现象**

使用AVPlayer播放AudioCapturer录制的PCM格式音频时，发生异常错误。

**问题根因**

AVPlayer不支持直接播放PCM格式文件。

**解决方案**

* [AudioRenderer](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiorenderer-for-playback)：用于音频输出的ArkTS/JS API，仅支持PCM格式，需要应用持续写入音频数据进行工作。应用可以在输入前添加数据预处理，如设定音频文件的采样率、位宽等，要求开发者具备音频处理的基础知识，适用于更专业、更多样化的媒体播放应用开发。
* [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohaudio-for-playback)：用于音频输出的Native API，此API在设计上实现归一，同时支持普通音频通路和低时延通路。仅支持PCM格式，适用于依赖Native层实现音频输出功能的场景。
