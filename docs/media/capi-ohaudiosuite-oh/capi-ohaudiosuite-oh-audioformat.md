---
title: "OH_AudioFormat"
upstream_id: "harmonyos-references/capi-ohaudiosuite-oh-audioformat"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:59.384740"
---

# OH_AudioFormat

```
typedef struct {...} OH_AudioFormat
```

#### 概述

定义音频编创的音频流信息，用于描述基本音频格式。

起始版本： 22

相关模块： [OHAudioSuite](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudiosuite)

所在头文件： [native_audio_suite_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_Audio_SampleRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h#oh_audio_samplerate) samplingRate | 音频流采样率。 |
| OH_AudioChannelLayout channelLayout | 音频流声道布局，当前只支持CH_LAYOUT_MONO 和 CH_LAYOUT_STEREO。 |
| uint32_t channelCount | 音频流声道个数，当前只支持1声道和2声道。 |
| [OH_Audio_EncodingType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h#oh_audio_encodingtype) encodingType | 音频流编码类型。 |
| [OH_Audio_SampleFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h#oh_audio_sampleformat) sampleFormat | 音频流采样格式。 |
