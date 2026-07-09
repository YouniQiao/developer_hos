---
title: "avcodec_audio_channel_layout.h"
upstream_id: "harmonyos-references/capi-avcodec-audio-channel-layout-h"
catalog: "harmonyos-references"
content_hash: "ade6ef2d5840"
synced_at: "2026-07-09T01:00:16.625935"
---

# avcodec_audio_channel_layout.h

#### 概述

音频编解码声道布局枚举的声明。

引用文件： <multimedia/player_framework/avcodec_audio_channel_layout.h>

库： libnative_media_codecbase.so

系统能力： SystemCapability.Multimedia.Media.CodecBase

起始版本： 10

废弃版本： 11

相关模块： [CodecBase](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase)

#### 汇总

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [AudioChannelSet](#audiochannelset) | 音频声道数集合，将每一个声道数映射为int64的变量。(API11废弃) |
| [AudioChannelLayout](#audiochannellayout) | 音频声道数类型，将用户申请的解码器输出格式表示为编解码器的声道类型。(API11废弃) |

#### 枚举类型说明

#### [h2]AudioChannelSet

```
enum AudioChannelSet : uint64_t
```
 描述

音频声道数集合，将每一个声道数映射为int64的变量。

系统能力： SystemCapability.Multimedia.Media.CodecBase

起始版本： 10

废弃版本： 11

替代接口： [OH_AudioChannelSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-channel-layout-h#oh_audiochannelset)

| 枚举项 | 描述 |
| --- | --- |
| FRONT_LEFT = 1ULL 描述

音频声道数类型，将用户申请的解码器输出格式表示为编解码器的声道类型。

系统能力： SystemCapability.Multimedia.Media.CodecBase

起始版本： 10

废弃版本： 11

替代接口： [OH_AudioChannelLayout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-channel-layout-h#oh_audiochannellayout)

| 枚举项 | 描述 |
| --- | --- |
| UNKNOWN_CHANNEL_LAYOUT = 0 | 未知通道布局。 |
| MONO = (AudioChannelSet::FRONT_CENTER) | 单通道布局。 |
| STEREO = (AudioChannelSet::FRONT_LEFT | AudioChannelSet::FRONT_RIGHT) | 立体声布局。 |
| CH_2POINT1 = (STEREO | AudioChannelSet::LOW_FREQUENCY) | 2.1布局。 |
| CH_2_1 = (STEREO | AudioChannelSet::BACK_CENTER) | 2_1布局。 |
| SURROUND = (STEREO | AudioChannelSet::FRONT_CENTER) | 环绕布局。 |
| CH_3POINT1 = (SURROUND | AudioChannelSet::LOW_FREQUENCY) | 3.1布局。 |
| CH_4POINT0 = (SURROUND | AudioChannelSet::BACK_CENTER) | 4.0布局。 |
| CH_4POINT1 = (CH_4POINT0 | AudioChannelSet::LOW_FREQUENCY) | 4.1布局。 |
| CH_2_2 = (STEREO | AudioChannelSet::SIDE_LEFT | AudioChannelSet::SIDE_RIGHT) | 2_2布局。 |
| QUAD = (STEREO | AudioChannelSet::BACK_LEFT | AudioChannelSet::BACK_RIGHT) | 四角形布局。 |
| CH_5POINT0 = (SURROUND | AudioChannelSet::SIDE_LEFT | AudioChannelSet::SIDE_RIGHT) | 5.0布局。 |
| CH_5POINT1 = (CH_5POINT0 | AudioChannelSet::LOW_FREQUENCY) | 5.1布局。 |
| CH_5POINT0_BACK = (SURROUND | AudioChannelSet::BACK_LEFT | AudioChannelSet::BACK_RIGHT) | 5.0后置布局。 |
| CH_5POINT1_BACK = (CH_5POINT0_BACK | AudioChannelSet::LOW_FREQUENCY) | 5.1后置布局。 |
| CH_6POINT0 = (CH_5POINT0 | AudioChannelSet::BACK_CENTER) | 6.0布局。 |
| CH_6POINT0_FRONT = (CH_2_2 | AudioChannelSet::FRONT_LEFT_OF_CENTER | AudioChannelSet::FRONT_RIGHT_OF_CENTER) | 6.0前置布局。 |
| HEXAGONAL = (CH_5POINT0_BACK | AudioChannelSet::BACK_CENTER) | 六角形布局。 |
| CH_6POINT1 = (CH_5POINT1 | AudioChannelSet::BACK_CENTER) | 6.1布局。 |
| CH_6POINT1_BACK = (CH_5POINT1_BACK | AudioChannelSet::BACK_CENTER) | 6.1后置布局。 |
| CH_6POINT1_FRONT = (CH_6POINT0_FRONT | AudioChannelSet::LOW_FREQUENCY) | 6.1前置布局。 |
| CH_7POINT0 = (CH_5POINT0 | AudioChannelSet::BACK_LEFT | AudioChannelSet::BACK_RIGHT) | 7.0布局。 |
| CH_7POINT0_FRONT = (CH_5POINT0 | AudioChannelSet::FRONT_LEFT_OF_CENTER | AudioChannelSet::FRONT_RIGHT_OF_CENTER) | 7.0前置布局。 |
| CH_7POINT1 = (CH_5POINT1 | AudioChannelSet::BACK_LEFT | AudioChannelSet::BACK_RIGHT) | 7.1布局。 |
| CH_7POINT1_WIDE = (CH_5POINT1 | AudioChannelSet::FRONT_LEFT_OF_CENTER | AudioChannelSet::FRONT_RIGHT_OF_CENTER) | 7.1宽布局。 |
| CH_7POINT1_WIDE_BACK = | 7.1后置宽布局。 |
| CH_3POINT1POINT2 = (CH_3POINT1 | AudioChannelSet::TOP_FRONT_LEFT | AudioChannelSet::TOP_FRONT_RIGHT) | 3.1.2布局。 |
| CH_5POINT1POINT2 = (CH_5POINT1 | AudioChannelSet::TOP_SIDE_LEFT | AudioChannelSet::TOP_SIDE_RIGHT) | 5.1.2布局。 |
| (CH_5POINT1 | AudioChannelSet::TOP_FRONT_LEFT | AudioChannelSet::TOP_FRONT_RIGHT |AudioChannelSet::TOP_BACK_LEFT | AudioChannelSet::TOP_BACK_RIGHT) | 5.1.4布局。 |
| CH_7POINT1POINT2 = (CH_7POINT1 | AudioChannelSet::TOP_SIDE_LEFT | AudioChannelSet::TOP_SIDE_RIGHT) | 7.1.2布局。 |
| CH_7POINT1POINT4 = (CH_7POINT1 | AudioChannelSet::TOP_FRONT_LEFT | AudioChannelSet::TOP_FRONT_RIGHT | AudioChannelSet::TOP_BACK_LEFT | AudioChannelSet::TOP_BACK_RIGHT) | 7.1.4布局。 |
| CH_9POINT1POINT4 = (CH_7POINT1POINT4 | AudioChannelSet::WIDE_LEFT | AudioChannelSet::WIDE_RIGHT) | 9.1.4布局。 |
| CH_9POINT1POINT6 = (CH_9POINT1POINT4 | AudioChannelSet::TOP_SIDE_LEFT | AudioChannelSet::TOP_SIDE_RIGHT) | 9.1.6布局。 |
| CH_10POINT2 = (AudioChannelSet::FRONT_LEFT | AudioChannelSet::FRONT_RIGHT | AudioChannelSet::FRONT_CENTER | AudioChannelSet::TOP_FRONT_LEFT | AudioChannelSet::TOP_FRONT_RIGHT | AudioChannelSet::BACK_LEFT | AudioChannelSet::BACK_RIGHT | AudioChannelSet::BACK_CENTER | AudioChannelSet::SIDE_LEFT | AudioChannelSet::SIDE_RIGHT | AudioChannelSet::WIDE_LEFT | AudioChannelSet::WIDE_RIGHT) | 10.2布局。 |
| CH_22POINT2 = (CH_7POINT1POINT4 | AudioChannelSet::FRONT_LEFT_OF_CENTER | AudioChannelSet::FRONT_RIGHT_OF_CENTER | AudioChannelSet::BACK_CENTER | AudioChannelSet::TOP_CENTER | AudioChannelSet::TOP_FRONT_CENTER | AudioChannelSet::TOP_BACK_CENTER | AudioChannelSet::TOP_SIDE_LEFT | AudioChannelSet::TOP_SIDE_RIGHT | AudioChannelSet::BOTTOM_FRONT_LEFT | AudioChannelSet::BOTTOM_FRONT_RIGHT | AudioChannelSet::BOTTOM_FRONT_CENTER | AudioChannelSet::LOW_FREQUENCY_2) | 22.2布局。 |
| OCTAGONAL = (CH_5POINT0 | AudioChannelSet::BACK_LEFT | AudioChannelSet::BACK_CENTER | AudioChannelSet::BACK_RIGHT) | 八边形布局。 |
| HEXADECAGONAL = (OCTAGONAL | AudioChannelSet::WIDE_LEFT | AudioChannelSet::WIDE_RIGHT | AudioChannelSet::TOP_BACK_LEFT | AudioChannelSet::TOP_BACK_RIGHT | AudioChannelSet::TOP_BACK_CENTER | AudioChannelSet::TOP_FRONT_CENTER | AudioChannelSet::TOP_FRONT_LEFT | AudioChannelSet::TOP_FRONT_RIGHT) | 十六边形布局。 |
| STEREO_DOWNMIX = (AudioChannelSet::STEREO_LEFT | AudioChannelSet::STEREO_RIGHT) | 立体声下混布局。 |
| HOA_FIRST = AudioChannelSet::AMBISONICS_ACN0 | AudioChannelSet::AMBISONICS_ACN1 | AudioChannelSet::AMBISONICS_ACN2 | AudioChannelSet::AMBISONICS_ACN3 | 高阶立体声一阶布局。 |
| HOA_SECOND = HOA_FIRST | AudioChannelSet::AMBISONICS_ACN4 | AudioChannelSet::AMBISONICS_ACN5 | AudioChannelSet::AMBISONICS_ACN6 | AudioChannelSet::AMBISONICS_ACN7 | AudioChannelSet::AMBISONICS_ACN8 | 高阶立体声二阶布局。 |
| HOA_THIRD = HOA_SECOND | AudioChannelSet::AMBISONICS_ACN9 | AudioChannelSet::AMBISONICS_ACN10 | AudioChannelSet::AMBISONICS_ACN11 | AudioChannelSet::AMBISONICS_ACN12 | AudioChannelSet::AMBISONICS_ACN13 | AudioChannelSet::AMBISONICS_ACN14 | AudioChannelSet::AMBISONICS_ACN15 | 高阶立体声三阶布局。 |
