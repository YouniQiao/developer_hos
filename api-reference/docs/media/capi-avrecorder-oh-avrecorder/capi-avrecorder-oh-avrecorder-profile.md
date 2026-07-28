---
title: "OH_AVRecorder_Profile"
upstream_id: "harmonyos-references/capi-avrecorder-oh-avrecorder-profile"
catalog: "harmonyos-references"
content_hash: "32799883a9e7"
synced_at: "2026-07-28T16:52:00.181654"
---

# OH_AVRecorder_Profile

```
typedef struct OH_AVRecorder_Profile {...} OH_AVRecorder_Profile
```

#### 概述

定义音视频录制的详细参数。通过配置音频比特率、采样率、视频帧率、分辨率等参数，可以灵活控制录制质量和视频文件大小，满足不同场景下的录制需求。

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
| int32_t audioBitrate | 音频比特率。单位为比特每秒（bit/s）。取值为0时不录制音频。 |
| int32_t audioChannels | 音频通道数。取值为0时不录制音频。 |
| [OH_AVRecorder_CodecMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_codecmimetype) audioCodec | 音频编码器MIME类型。 |
| int32_t audioSampleRate | 音频采样率。单位为赫兹（Hz）。 |
| [OH_AVRecorder_ContainerFormatType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_containerformattype) fileFormat | 容器格式类型。 |
| int32_t videoBitrate | 视频比特率。单位为比特每秒（bit/s）。数值越大视频质量越好，但文件也越大。 |
| [OH_AVRecorder_CodecMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_codecmimetype) videoCodec | 视频编码器MIME类型。 |
| int32_t videoFrameWidth | 视频宽度。单位为像素（px）。取值为0时不录制视频。 |
| int32_t videoFrameHeight | 视频高度。单位为像素（px）。取值为0时不录制视频。 |
| int32_t videoFrameRate | 视频帧率。单位为帧每秒（FPS）。 |
| bool isHdr | 是否录制HDR视频。 true表示录制HDR视频，false表示不录制HDR视频。 默认是false。 |
| bool enableTemporalScale | 是否启用时域分层编码功能。 true表示编码输出的码流中部分帧可被跳过不编码，false表示编码输出的码流中所有帧均需编码，详情请参考[时域可分层视频编码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding-temporal-scalability)。 默认是false。 |
