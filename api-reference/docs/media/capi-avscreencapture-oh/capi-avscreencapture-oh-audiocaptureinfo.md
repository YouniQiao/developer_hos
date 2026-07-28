---
title: "OH_AudioCaptureInfo"
upstream_id: "harmonyos-references/capi-avscreencapture-oh-audiocaptureinfo"
catalog: "harmonyos-references"
content_hash: "38ce449c99b3"
synced_at: "2026-07-28T16:52:00.725291"
---

# OH_AudioCaptureInfo

```
typedef struct OH_AudioCaptureInfo {...} OH_AudioCaptureInfo
```

#### 概述

音频采样信息。

用于配置屏幕录制中的音频采集参数，包括采样率、声道数和音频源类型。开发者可通过设置audioSampleRate和audioChannels参数来控制录制音频的质量和声道布局，适用于屏幕录制时需要采集系统音频或麦克风音频的场景。

当audioSampleRate和audioChannels同时为0时，忽略该类型音频相关参数，不录制该类型音频数据。

起始版本： 10

相关模块： [AVScreenCapture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture)

所在头文件： [native_avscreen_capture_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t audioSampleRate | 音频采样率，支持列表请查阅Audio Kit的[AudioSamplingRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiosamplingrate8)。单位为赫兹（Hz）。当audioSampleRate与audioChannels同时为0时，将忽略该类型音频相关参数。 |
| int32_t audioChannels | 音频声道数，用于配置音频录制的声道数量。取值范围为1或2，1表示单声道，2表示双声道。具体支持的范围请参考相关音频设备的能力[AudioChannel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiochannel8)。当audioSampleRate与audioChannels同时为0时，将忽略该类型音频相关参数。 |
| [OH_AudioCaptureSourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_audiocapturesourcetype) audioSource | 音频源，用于指定录制的音频来源，如内录音频或麦克风录音等。可选值请参考[OH_AudioCaptureSourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_audiocapturesourcetype)。 |
