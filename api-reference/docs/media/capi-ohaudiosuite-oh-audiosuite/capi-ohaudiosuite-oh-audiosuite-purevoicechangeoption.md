---
title: "OH_AudioSuite_PureVoiceChangeOption"
upstream_id: "harmonyos-references/capi-ohaudiosuite-oh-audiosuite-purevoicechangeoption"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:00.011810"
---

# OH_AudioSuite_PureVoiceChangeOption

```
typedef struct {...} OH_AudioSuite_PureVoiceChangeOption
```

#### 概述

定义音频编创传统变声选项。

起始版本： 23

相关模块： [OHAudioSuite](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudiosuite)

所在头文件： [native_audio_suite_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_AudioSuite_PureVoiceChangeGenderOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h#oh_audiosuite_purevoicechangegenderoption) optionGender | 定义传统变声性别。 |
| [OH_AudioSuite_PureVoiceChangeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h#oh_audiosuite_purevoicechangetype) optionType | 定义传统变声类型。 |
| float pitch | 定义传统变声音调。如果使用系统中的默认音调以获得最佳效果, 设置为[OH_PURE_VOICE_DEFAULT_PITCH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h#宏定义)。 设置自定义音调的取值范围为[0.3f, 3.0f]。 |
