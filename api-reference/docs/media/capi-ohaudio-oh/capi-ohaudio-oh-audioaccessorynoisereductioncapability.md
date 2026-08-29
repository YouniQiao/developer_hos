---
title: "OH_AudioAccessoryNoiseReductionCapability"
upstream_id: "harmonyos-references/capi-ohaudio-oh-audioaccessorynoisereductioncapability"
catalog: "harmonyos-references"
content_hash: "0ceaef123a12"
synced_at: "2026-08-29T18:17:21.929599"
---

# OH_AudioAccessoryNoiseReductionCapability

```
typedef struct OH_AudioAccessoryNoiseReductionCapability {...} OH_AudioAccessoryNoiseReductionCapability
```

#### 概述

定义音频配件的降噪能力。

起始版本： 26.0.0

相关模块： [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio)

所在头文件： [native_audio_accessory_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-accessory-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t structSize | 结构体大小，单位为字节（Byte）。 调用方需初始化此字段。 系统通过此字段校验结构体大小。 |
| const [OH_AudioNoiseReductionMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-common-h#oh_audionoisereductionmode) *supportedModes | 支持的降噪模式数组。 |
| uint32_t supportedModeCount | 支持的降噪模式数量。 |
| [OH_AudioNoiseReductionMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-common-h#oh_audionoisereductionmode) currentMode | 设备当前降噪模式。 表示注册能力时的初始状态。 |
