---
title: "OH_AVRecorder_Profile"
upstream_id: "harmonyos-references/capi-avrecorder-oh-avrecorder-profile"
catalog: "harmonyos-references"
content_hash: "23d9d99081bf"
synced_at: "2026-08-03T17:12:02.608828"
---

# OH_AVRecorder_Profile

```
typedef struct OH_AVRecorder_Profile {...} OH_AVRecorder_Profile
```

#### 概述

定义音视频录制的详细参数。通过配置音频/视频编码格式、比特率、采样率、帧率、分辨率、容器格式、HDR录制、时域分层编码等参数，可以灵活控制录制质量和视频文件大小，适用于需要自定义录制质量、选择录制内容类型（仅音频/仅视频/音视频同时录制）、启用HDR录制或时域分层编码的场景。

通过参数设置可以选择仅录制音频或视频，或者同时录制音视频：

1. 当 audioBitrate 或 audioChannels 为 0 时，不录制音频。
2. 当 videoFrameWidth 或 videoFrameHeight 为 0 时，不录制视频。

各参数的范围请参见[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)。

起始版本： 18

相关模块： [AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder)

所在头文件： [avrecorder_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t audioBitrate | 音频编码比特率。单位为比特每秒（bit/s）。数值越大音频质量越好，但文件也越大。取值范围请参见[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)，默认值为0，取值为0时不录制音频，超出有效范围时录制失败。 |
| int32_t audioChannels | 音频通道数。取值范围请参见[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)，默认值为0，取值为0时不录制音频，超出有效范围时录制失败。 |
| [OH_AVRecorder_CodecMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_codecmimetype) audioCodec | 音频编码器MIME类型。选择不同的音频编码器将影响录制的音频质量、文件大小和兼容性，各编码器类型详见[OH_AVRecorder_CodecMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_codecmimetype)。仅在录制音频时有效。 |
| int32_t audioSampleRate | 音频采样率。取值范围请参见[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)，超出有效范围时录制失败。单位为赫兹（Hz）。仅在录制音频时有效。 |
| [OH_AVRecorder_ContainerFormatType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_containerformattype) fileFormat | 容器格式类型。选择不同的容器格式将决定录制文件的存储格式和支持的音视频编码类型，各格式类型详见[OH_AVRecorder_ContainerFormatType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_containerformattype)。 |
| int32_t videoBitrate | 视频编码比特率。单位为比特每秒（bit/s）。取值范围请参见[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)，数值越大视频质量越好，但文件也越大，低比特率适合网络传输或存储受限场景，高比特率适合本地高质量存储场景。超出有效范围时录制失败。仅在录制视频时有效。 |
| [OH_AVRecorder_CodecMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_codecmimetype) videoCodec | 视频编码器MIME类型。选择不同的视频编码器将影响录制的视频压缩效率、画质和兼容性，各编码器类型详见[OH_AVRecorder_CodecMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_codecmimetype)。仅在录制视频时有效。 |
| int32_t videoFrameWidth | 视频帧宽度。单位为像素（px）。取值范围请参见[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)，默认值为0，取值为0时不录制视频。超出有效范围时录制失败。 |
| int32_t videoFrameHeight | 视频帧高度。单位为像素（px）。取值范围请参见[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)，默认值为0，取值为0时不录制视频。超出有效范围时录制失败。 |
| int32_t videoFrameRate | 视频帧率。单位为帧每秒（fps）。取值范围请参见[AVRecorderProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-i#avrecorderprofile9)，超出有效范围时录制失败。仅在录制视频时有效。 |
| bool isHdr | 是否录制HDR视频。 true表示启用HDR编码，此时videoCodec必须为AVRECORDER_VIDEO_HEVC；false表示不启用HDR编码，对编码格式无要求。 默认是false。仅在录制视频时有效。 |
| bool enableTemporalScale | 是否启用时域可分层视频编码功能。 true表示编码输出的码流中时域增强层帧可被跳过不编码，适用于需要根据网络带宽或设备性能动态调整编码帧率的场景（如视频直播、视频会议等），false表示编码输出的码流中所有帧均需编码，详情请参考[时域可分层视频编码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-temporal-scalability)。 默认是false。仅在录制视频时有效。 |
