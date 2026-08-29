---
title: "OH_AudioAccessoryCapabilities"
upstream_id: "harmonyos-references/capi-ohaudio-oh-audioaccessorycapabilities"
catalog: "harmonyos-references"
content_hash: "32dbc9f13a69"
synced_at: "2026-08-29T18:17:22.013373"
---

# OH_AudioAccessoryCapabilities

```
typedef struct OH_AudioAccessoryCapabilities {...} OH_AudioAccessoryCapabilities
```

#### 概述

定义音频配件的能力。

调用方需将structSize设置为sizeof(OH_AudioAccessoryCapabilities)。

起始版本： 26.0.0

相关模块： [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio)

所在头文件： [native_audio_accessory_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-accessory-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t structSize | 结构体大小，单位为字节（Byte）。 调用方需初始化此字段。 |
| const [OH_AudioStreamInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreaminfo) *streamProperties | 支持的音频流配置数组。 每个条目表示采样率、采样格式和声道数的有效组合。 系统会对此数组进行深拷贝。 |
| uint32_t streamPropertyCount | 支持的音频流配置数量。 |
