---
title: "native_audiostreambuilder.h"
upstream_id: "harmonyos-references/capi-native-audiostreambuilder-h"
catalog: "harmonyos-references"
content_hash: "e9bd9e7e4d37"
synced_at: "2026-07-28T16:51:28.678921"
---

# native_audiostreambuilder.h

#### 概述

声明音频流构造器相关接口。

包含构造和销毁构造器，设置音频流属性，回调等相关接口。

引用文件： <ohaudio/native_audiostreambuilder.h>

库： libohaudio.so

系统能力： SystemCapability.Multimedia.Audio.Core

起始版本： 10

相关模块： [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [OH_AudioStream_Result OH_AudioStreamBuilder_Create(OH_AudioStreamBuilder** builder, OH_AudioStream_Type type)](#oh_audiostreambuilder_create) | 创建一个输入或者输出类型的音频流构造器。 当构造器不再使用时，需要调用[OH_AudioStreamBuilder_Destroy](#oh_audiostreambuilder_destroy)销毁。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_Destroy(OH_AudioStreamBuilder* builder)](#oh_audiostreambuilder_destroy) | 销毁一个音频流构造器。 当构造器不再使用时，需要调用该函数销毁。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetSamplingRate(OH_AudioStreamBuilder* builder, int32_t rate)](#oh_audiostreambuilder_setsamplingrate) | 设置音频流的采样率属性。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetChannelCount(OH_AudioStreamBuilder* builder, int32_t channelCount)](#oh_audiostreambuilder_setchannelcount) | 设置音频流的通道数属性。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetSampleFormat(OH_AudioStreamBuilder* builder, OH_AudioStream_SampleFormat format)](#oh_audiostreambuilder_setsampleformat) | 设置音频流的采样格式属性。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetEncodingType(OH_AudioStreamBuilder* builder, OH_AudioStream_EncodingType encodingType)](#oh_audiostreambuilder_setencodingtype) | 设置音频流的编码类型属性。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetLatencyMode(OH_AudioStreamBuilder* builder, OH_AudioStream_LatencyMode latencyMode)](#oh_audiostreambuilder_setlatencymode) | 设置音频流的时延模式。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetChannelLayout(OH_AudioStreamBuilder* builder, OH_AudioChannelLayout channelLayout)](#oh_audiostreambuilder_setchannellayout) | 设置音频流的声道布局。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInfo(OH_AudioStreamBuilder* builder, OH_AudioStream_Usage usage)](#oh_audiostreambuilder_setrendererinfo) | 设置输出音频流的工作场景。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetVolumeMode(OH_AudioStreamBuilder* builder, OH_AudioStream_VolumeMode volumeMode)](#oh_audiostreambuilder_setvolumemode) | 设置音频流音量模式。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerInfo(OH_AudioStreamBuilder* builder, OH_AudioStream_SourceType sourceType)](#oh_audiostreambuilder_setcapturerinfo) | 设置输入音频流的工作场景。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_Callbacks callbacks, void* userData)](#oh_audiostreambuilder_setrenderercallback) | 设置输出音频流的回调。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererOutputDeviceChangeCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OutputDeviceChangeCallback callback, void* userData)](#oh_audiostreambuilder_setrendereroutputdevicechangecallback) | 设置输出音频流设备变更的回调。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererPrivacy(OH_AudioStreamBuilder* builder, OH_AudioStream_PrivacyType privacy)](#oh_audiostreambuilder_setrendererprivacy) | 设置当前播放音频流是否会被其它应用录制。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_Callbacks callbacks, void* userData)](#oh_audiostreambuilder_setcapturercallback) | 设置输入音频流的回调。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetWriteDataWithMetadataCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_WriteDataWithMetadataCallback callback, void* userData)](#oh_audiostreambuilder_setwritedatawithmetadatacallback) | 设置同时写入音频数据和元数据的回调。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_GenerateRenderer(OH_AudioStreamBuilder* builder, OH_AudioRenderer** audioRenderer)](#oh_audiostreambuilder_generaterenderer) | 创建输出音频流实例。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_GenerateCapturer(OH_AudioStreamBuilder* builder, OH_AudioCapturer** audioCapturer)](#oh_audiostreambuilder_generatecapturer) | 创建输入音频流实例。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetFrameSizeInCallback(OH_AudioStreamBuilder* builder, int32_t frameSize)](#oh_audiostreambuilder_setframesizeincallback) | 用于播放时设置每次回调的帧长，帧长至少为音频硬件一次处理的数据大小，并且小于内部缓冲容量的一半。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInterruptMode(OH_AudioStreamBuilder* builder, OH_AudioInterrupt_Mode mode)](#oh_audiostreambuilder_setrendererinterruptmode) | 设置流客户端的中断模式。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererWriteDataCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnWriteDataCallback callback, void* userData)](#oh_audiostreambuilder_setrendererwritedatacallback) | 设置写入音频数据的回调函数。 此函数与[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)或者本函数，只有最后一次设置的回调才生效，其它回调不会生效。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnWriteDataCallbackAdvanced callback, void* userData)](#oh_audiostreambuilder_setrendererwritedatacallbackadvanced) | 设置写入音频数据的回调函数。 此函数与[OH_AudioStreamBuilder_SetRendererWriteDataCallback](#oh_audiostreambuilder_setrendererwritedatacallback)类似。 如果同时设置该回调和OH_AudioStreamBuilder_SetRendererWriteDataCallback，只有最后一次设置的回调生效。 与OH_AudioStreamBuilder_SetRendererWriteDataCallback不同，OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced设置的回调函数，允许应用传入可变长度的音频数据，并通知系统写入的数据长度。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInterruptCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnInterruptCallback callback, void* userData)](#oh_audiostreambuilder_setrendererinterruptcallback) | 设置输出音频流中断事件的回调函数。 此函数与[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)或者本函数，只有最后一次设置的回调才生效，其它回调不会生效。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererErrorCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnErrorCallback callback, void* userData)](#oh_audiostreambuilder_setrenderererrorcallback) | 设置输出音频流错误事件的回调函数。 此函数与[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerReadDataCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnReadDataCallback callback, void* userData)](#oh_audiostreambuilder_setcapturerreaddatacallback) | 设置输入音频流读取数据的回调函数。 此函数与[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerDeviceChangeCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnDeviceChangeCallback callback, void* userData)](#oh_audiostreambuilder_setcapturerdevicechangecallback) | 设置输入音频流设备变更的回调函数。 此函数与[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerInterruptCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnInterruptCallback callback, void* userData)](#oh_audiostreambuilder_setcapturerinterruptcallback) | 设置输入音频流中断事件的回调函数。 此函数与[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerErrorCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnErrorCallback callback, void* userData)](#oh_audiostreambuilder_setcapturererrorcallback) | 设置输入音频流错误事件的回调函数。 此函数与[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerWillMuteWhenInterrupted(OH_AudioStreamBuilder* builder, bool muteWhenInterrupted)](#oh_audiostreambuilder_setcapturerwillmutewheninterrupted) | 设置输入音频流是否启用静音打断模式。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererFastStatusChangeCallback(OH_AudioStreamBuilder* builder, OH_AudioRenderer_OnFastStatusChange callback, void* userData)](#oh_audiostreambuilder_setrendererfaststatuschangecallback) | 设置音频播放过程中低时延状态改变事件的回调函数。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerFastStatusChangeCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_OnFastStatusChange callback, void* userData)](#oh_audiostreambuilder_setcapturerfaststatuschangecallback) | 设置音频录制过程中低时延状态改变事件的回调函数。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerLoopbackEffectEnabled(OH_AudioStreamBuilder* builder, bool enabled)](#oh_audiostreambuilder_setcapturerloopbackeffectenabled) | 设置音频录制流是否采集带音频混响效果的音频数据。当音频环回设置为硬件模式并启用混响效果时，低时延模式的采集器可以获取到具备混响效果的录音数据。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetPlaybackCaptureMode(OH_AudioStreamBuilder* builder, uint32_t mode)](#oh_audiostreambuilder_setplaybackcapturemode) | 在使用内录（录制设备内部应用的声音）时设置可以录制的音频模式，该模式将决定要录制的音频流类型。此功能仅适用于[AudioStream_Type_Capturer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_type)类型。该API暂不对外支持。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetSensitiveRecordPermitCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_SensitiveRecordPermitCallback callback, void* userData)](#oh_audiostreambuilder_setsensitiverecordpermitcallback) | 设置蜂窝通话下行录音风险提示语播放结束的回调函数。仅在使用[OH_AudioStream_SourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_sourcetype).AUDIOSTREAM_SOURCE_TYPE_VOICE_DOWNLINK录制时需要设置此函数。此回调必须成功设置，否则采集器无法创建。音频采集器创建后，风险提示语将自动添加到发送给通话对方的语音数据中。应用应等待回调结果后再启动采集器，否则[OH_AudioCapturer_Start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiocapturer-h#oh_audiocapturer_start)将返回错误。请确保音频采集器在蜂窝通话开始后创建，否则[OH_AudioStreamBuilder_GenerateCapturer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generatecapturer)将返回错误。 |
| [OH_AudioStream_Result OH_AudioStreamBuilder_SetCellularRecordSecurityParams(OH_AudioStreamBuilder* builder, const char* cellularRecordPhoneNum, const char* cellularRecordToken)](#oh_audiostreambuilder_setcellularrecordsecurityparams) | 设置蜂窝通话下行录音的电话号码和安全令牌。仅在使用[OH_AudioStream_SourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_sourcetype).AUDIOSTREAM_SOURCE_TYPE_VOICE_DOWNLINK录制时需要设置此函数。电话号码和安全令牌将用于校验蜂窝通话下行采集器是否匹配对应的蜂窝通话，必须成功设置，否则采集器无法创建。 |

#### 函数说明

#### [h2]OH_AudioStreamBuilder_Create()

```
OH_AudioStream_Result OH_AudioStreamBuilder_Create(OH_AudioStreamBuilder** builder, OH_AudioStream_Type type)
```
 描述

创建一个输入或者输出类型的音频流构造器。

当构造器不再使用时，需要调用[OH_AudioStreamBuilder_Destroy](#oh_audiostreambuilder_destroy)销毁。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)** builder | 用于接收创建的构造器实例。 |
| [OH_AudioStream_Type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_type) type | 构造器的流类型。AUDIOSTREAM_TYPE_RENDERER或AUDIOSTREAM_TYPE_CAPTURER。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 |

#### [h2]OH_AudioStreamBuilder_Destroy()

```
OH_AudioStream_Result OH_AudioStreamBuilder_Destroy(OH_AudioStreamBuilder* builder)
```
 描述

销毁一个音频流构造器。

当构造器不再使用时，需要调用该函数销毁。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。 AUDIOSTREAM_ERROR_ILLEGAL_STATE：执行状态异常。 |

#### [h2]OH_AudioStreamBuilder_SetSamplingRate()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetSamplingRate(OH_AudioStreamBuilder* builder, int32_t rate)
```
 描述

设置音频流的采样率属性。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| int32_t rate | 音频流采样率。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. 参数rate无效。 |

#### [h2]OH_AudioStreamBuilder_SetChannelCount()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetChannelCount(OH_AudioStreamBuilder* builder, int32_t channelCount)
```
 描述

设置音频流的通道数属性。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| int32_t channelCount | 音频流通道数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. 参数channelCount无效。 |

#### [h2]OH_AudioStreamBuilder_SetSampleFormat()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetSampleFormat(OH_AudioStreamBuilder* builder,OH_AudioStream_SampleFormat format)
```
 描述

设置音频流的采样格式属性。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioStream_SampleFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_sampleformat) format | 音频流采样格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。 |

#### [h2]OH_AudioStreamBuilder_SetEncodingType()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetEncodingType(OH_AudioStreamBuilder* builder,OH_AudioStream_EncodingType encodingType)
```
 描述

设置音频流的编码类型属性。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioStream_EncodingType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_encodingtype) encodingType | 音频流编码类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。 |

#### [h2]OH_AudioStreamBuilder_SetLatencyMode()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetLatencyMode(OH_AudioStreamBuilder* builder,OH_AudioStream_LatencyMode latencyMode)
```
 描述

设置音频流的时延模式。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioStream_LatencyMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_latencymode) latencyMode | 音频流时延模式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。 |

#### [h2]OH_AudioStreamBuilder_SetChannelLayout()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetChannelLayout(OH_AudioStreamBuilder* builder,OH_AudioChannelLayout channelLayout)
```
 描述

设置音频流的声道布局。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioChannelLayout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-channel-layout-h#oh_audiochannellayout) channelLayout | 音频流声道布局。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。 |

#### [h2]OH_AudioStreamBuilder_SetRendererInfo()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInfo(OH_AudioStreamBuilder* builder,OH_AudioStream_Usage usage)
```
 描述

设置输出音频流的工作场景。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioStream_Usage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_usage) usage | 输出音频流的使用场景。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. 参数usage无效。 |

#### [h2]OH_AudioStreamBuilder_SetVolumeMode()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetVolumeMode(OH_AudioStreamBuilder* builder,OH_AudioStream_VolumeMode volumeMode)
```
 描述

设置音频流音量模式。

起始版本： 19

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioStream_VolumeMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_volumemode) volumeMode | 要设置的音频流音量模式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. 参数volumeMode无效。 |

#### [h2]OH_AudioStreamBuilder_SetCapturerInfo()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerInfo(OH_AudioStreamBuilder* builder,OH_AudioStream_SourceType sourceType)
```
 描述

设置输入音频流的工作场景。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioStream_SourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_sourcetype) sourceType | 输入音频流的使用场景。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. 参数sourceType无效。 |

#### [h2]OH_AudioStreamBuilder_SetRendererCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_Callbacks callbacks, void* userData)
```
 描述

设置输出音频流的回调。

起始版本： 10

废弃版本： 20

替代接口：

请分别使用以下接口设置回调函数：

[OH_AudioStreamBuilder_SetRendererWriteDataCallback](#oh_audiostreambuilder_setrendererwritedatacallback)、[OH_AudioStreamBuilder_SetRendererInterruptCallback](#oh_audiostreambuilder_setrendererinterruptcallback)、[OH_AudioStreamBuilder_SetRendererOutputDeviceChangeCallback](#oh_audiostreambuilder_setrendereroutputdevicechangecallback)以及 [OH_AudioStreamBuilder_SetRendererErrorCallback](#oh_audiostreambuilder_setrenderererrorcallback)。

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioRenderer_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiorenderer-callbacks-struct) callbacks | 将被用来处理输出音频流相关事件的回调函数。 |
| void* userData | 指向通过回调函数传递的应用数据指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. StreamType无效。 |

#### [h2]OH_AudioStreamBuilder_SetRendererOutputDeviceChangeCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererOutputDeviceChangeCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OutputDeviceChangeCallback callback, void* userData)
```
 描述

设置输出音频流设备变更的回调。

起始版本： 11

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioRenderer_OutputDeviceChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiorenderer_outputdevicechangecallback) callback | 将被用来处理输出流设备变更相关事件的回调函数。 |
| void* userData | 指向通过回调函数传递的应用数据指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. StreamType无效。 |

#### [h2]OH_AudioStreamBuilder_SetRendererPrivacy()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererPrivacy(OH_AudioStreamBuilder* builder,OH_AudioStream_PrivacyType privacy)
```
 描述

设置当前播放音频流是否会被其它应用录制。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioStream_PrivacyType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_privacytype) privacy | 标识对应播放音频流是否会被其它应用录制。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. StreamType无效。 |

#### [h2]OH_AudioStreamBuilder_SetCapturerCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_Callbacks callbacks, void* userData)
```
 描述

设置输入音频流的回调。

起始版本： 10

废弃版本： 20

替代接口：

请分别使用以下接口设置回调函数：

[OH_AudioStreamBuilder_SetCapturerReadDataCallback](#oh_audiostreambuilder_setcapturerreaddatacallback)、[OH_AudioStreamBuilder_SetCapturerDeviceChangeCallback](#oh_audiostreambuilder_setcapturerdevicechangecallback)、[OH_AudioStreamBuilder_SetCapturerInterruptCallback](#oh_audiostreambuilder_setcapturerinterruptcallback)以及 [OH_AudioStreamBuilder_SetCapturerErrorCallback](#oh_audiostreambuilder_setcapturererrorcallback)。

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioCapturer_Callbacks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiocapturer-callbacks-struct) callbacks | 将被用来处理输入音频流相关事件的回调函数。 |
| void* userData | 指向通过回调函数传递的应用数据指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. StreamType无效。 |

#### [h2]OH_AudioStreamBuilder_SetWriteDataWithMetadataCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetWriteDataWithMetadataCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_WriteDataWithMetadataCallback callback, void* userData)
```
 描述

设置同时写入音频数据和元数据的回调。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioRenderer_WriteDataWithMetadataCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiorenderer_writedatawithmetadatacallback) callback | 将被用来同时写入音频数据和元数据的回调函数。 |
| void* userData | 指向通过回调函数传递的应用数据指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. StreamType无效。 |

#### [h2]OH_AudioStreamBuilder_GenerateRenderer()

```
OH_AudioStream_Result OH_AudioStreamBuilder_GenerateRenderer(OH_AudioStreamBuilder* builder,OH_AudioRenderer** audioRenderer)
```
 描述

创建输出音频流实例。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioRenderer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiorendererstruct)** audioRenderer | 指向输出音频流实例的指针，将被用来接收函数创建的结果。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. StreamType无效； 3. 创建OHAudioRenderer失败。 |

#### [h2]OH_AudioStreamBuilder_GenerateCapturer()

```
OH_AudioStream_Result OH_AudioStreamBuilder_GenerateCapturer(OH_AudioStreamBuilder* builder,OH_AudioCapturer** audioCapturer)
```
 描述

创建输入音频流实例。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioCapturer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiocapturerstruct)** audioCapturer | 指向输入音频流实例的指针，将被用来接收函数创建的结果。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. StreamType无效； 3. 创建OHAudioCapturer失败。 |

#### [h2]OH_AudioStreamBuilder_SetFrameSizeInCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetFrameSizeInCallback(OH_AudioStreamBuilder* builder,int32_t frameSize)
```
 描述

用于播放时设置每次回调的帧长，帧长至少为音频硬件一次处理的数据大小，并且小于内部缓冲容量的一半。

低时延播放：frameSize可设置为5ms、10ms、15ms、20ms音频数据对应的帧长。

普通通路播放：frameSize可设置为20ms-100ms音频数据对应的帧长。例如，当采样率48000Hz时，20ms音频数据对应的帧长计算方式为：frameSize = 48000 * 0.02，即960个采样点数。当frameSize为960时，对应的数据回调的长度为960 * 声道数 * 采样位宽（字节数）。比如双声道16bit时，length为960 * 2 * 2 = 3840。

起始版本： 11

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| int32_t frameSize | 要设置音频数据的帧长。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder为nullptr。 |

#### [h2]OH_AudioStreamBuilder_SetRendererInterruptMode()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInterruptMode(OH_AudioStreamBuilder* builder,OH_AudioInterrupt_Mode mode)
```
 描述

设置流客户端的中断模式。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioInterrupt_Mode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiointerrupt_mode) mode | 音频中断模式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. 参数mode无效； 3. StreamType无效。 |

#### [h2]OH_AudioStreamBuilder_SetRendererWriteDataCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererWriteDataCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnWriteDataCallback callback, void* userData)
```
 描述

设置写入音频数据的回调函数。

此函数与[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)或者本函数，只有最后一次设置的回调才生效，其它回调不会生效。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioRenderer_OnWriteDataCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiorenderer_onwritedatacallback) callback | 将被用来写入音频数据的回调函数。 |
| void* userData | 指向通过回调函数传递的应用数据指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM： 1. 参数builder为nullptr； 2. StreamType无效。 |

#### [h2]OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnWriteDataCallbackAdvanced callback, void* userData)
```
 描述

设置写入音频数据的回调函数。

此函数与[OH_AudioStreamBuilder_SetRendererWriteDataCallback](#oh_audiostreambuilder_setrendererwritedatacallback)类似。

如果同时设置该回调和OH_AudioStreamBuilder_SetRendererWriteDataCallback，只有最后一次设置的回调生效。

与OH_AudioStreamBuilder_SetRendererWriteDataCallback不同，OH_AudioStreamBuilder_SetRendererWriteDataCallbackAdvanced设置的回调函数，允许应用传入可变长度的音频数据，并通知系统写入的数据长度。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioRenderer_OnWriteDataCallbackAdvanced](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiorenderer-h#oh_audiorenderer_onwritedatacallbackadvanced) callback | 将被用来写入音频数据的回调函数。 |
| void* userData | 指向通过回调函数传递的应用数据指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数非法，比如builder为空指针，等等。 |

#### [h2]OH_AudioStreamBuilder_SetRendererInterruptCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererInterruptCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnInterruptCallback callback, void* userData)
```
 描述

设置输出音频流中断事件的回调函数。

此函数与[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)或者本函数，只有最后一次设置的回调才生效，其它回调不会生效。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioRenderer_OnInterruptCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiorenderer-h#oh_audiorenderer_oninterruptcallback) callback | 用于接收中断事件的回调函数。 |
| void* userData | 指向应用程序数据结构的指针，该结构将传递给回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetRendererErrorCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererErrorCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnErrorCallback callback, void* userData)
```
 描述

设置输出音频流错误事件的回调函数。

此函数与[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetRendererCallback](#oh_audiostreambuilder_setrenderercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioRenderer_OnErrorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiorenderer-h#oh_audiorenderer_onerrorcallback) callback | 用于接收错误事件的回调函数。 |
| void* userData | 指向应用程序数据结构的指针，该结构将传递给回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetCapturerReadDataCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerReadDataCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnReadDataCallback callback, void* userData)
```
 描述

设置输入音频流读取数据的回调函数。

此函数与[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioCapturer_OnReadDataCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiocapturer-h#oh_audiocapturer_onreaddatacallback) callback | 用于接收读取数据事件的回调函数。 |
| void* userData | 指向应用程序数据结构的指针，该结构将传递给回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetCapturerDeviceChangeCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerDeviceChangeCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnDeviceChangeCallback callback, void* userData)
```
 描述

设置输入音频流设备变更的回调函数。

此函数与[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioCapturer_OnDeviceChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiocapturer-h#oh_audiocapturer_ondevicechangecallback) callback | 用于接收设备变更事件的回调函数。 |
| void* userData | 指向应用程序数据结构的指针，该结构将传递给回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetCapturerInterruptCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerInterruptCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnInterruptCallback callback, void* userData)
```
 描述

设置输入音频流中断事件的回调函数。

此函数与[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioCapturer_OnInterruptCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiocapturer-h#oh_audiocapturer_oninterruptcallback) callback | 用于接收中断事件的回调函数。 |
| void* userData | 指向应用程序数据结构的指针，该结构将传递给回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetCapturerErrorCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerErrorCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnErrorCallback callback, void* userData)
```
 描述

设置输入音频流错误事件的回调函数。

此函数与[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)类似。如果同时使用[OH_AudioStreamBuilder_SetCapturerCallback](#oh_audiostreambuilder_setcapturercallback)或者本函数，那么只有最后一次设置的回调才生效，其它回调不会生效。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioCapturer_OnErrorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiocapturer-h#oh_audiocapturer_onerrorcallback) callback | 用于接收错误事件的回调函数。 |
| void* userData | 指向应用程序数据结构的指针，该结构将传递给回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetCapturerWillMuteWhenInterrupted()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerWillMuteWhenInterrupted(OH_AudioStreamBuilder* builder,bool muteWhenInterrupted)
```
 描述

设置输入音频流是否启用静音打断模式。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| bool muteWhenInterrupted | 设置当前录制音频流是否启用静音打断模式。true表示启用；false表示不启用，保持为默认打断模式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetRendererFastStatusChangeCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetRendererFastStatusChangeCallback(OH_AudioStreamBuilder* builder,OH_AudioRenderer_OnFastStatusChange callback, void* userData)
```
 描述

设置音频播放过程中低时延状态改变事件的回调函数。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioRenderer_OnFastStatusChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiorenderer-h#oh_audiorenderer_onfaststatuschange) callback | 用于接收播放低时延状态改变事件的回调函数。 |
| void* userData | 指向应用程序数据结构的指针，该结构将传递给回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetCapturerFastStatusChangeCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerFastStatusChangeCallback(OH_AudioStreamBuilder* builder,OH_AudioCapturer_OnFastStatusChange callback, void* userData)
```
 描述

设置音频录制过程中低时延状态改变事件的回调函数。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](#oh_audiostreambuilder_create)创建的构造器实例。 |
| [OH_AudioCapturer_OnFastStatusChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiocapturer-h#oh_audiocapturer_onfaststatuschange) callback | 用于接收录制低时延状态改变事件的回调函数。 |
| void* userData | 指向应用程序数据结构的指针，该结构将传递给回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效，比如，builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetCapturerLoopbackEffectEnabled()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCapturerLoopbackEffectEnabled(OH_AudioStreamBuilder* builder, bool enabled)
```
 描述

设置音频录制流是否采集带音频混响效果的音频数据。当音频环回设置为硬件模式并启用混响效果时，低时延模式的采集器可以获取到具备混响效果的录音数据。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h#oh_audiostreambuilder_create)创建的构造器实例。 |
| bool enabled | 设置应用程序是否采集带混响效果的音频数据。true表示采集，false表示不采集。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效。如builder为空指针。 |

#### [h2]OH_AudioStreamBuilder_SetPlaybackCaptureMode()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetPlaybackCaptureMode(OH_AudioStreamBuilder* builder, uint32_t mode)
```
 描述

在使用内录（录制设备内部应用的声音）时设置可以录制的音频模式，该模式将决定要录制的音频流类型。此功能仅适用于[AudioStream_Type_Capturer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_type)类型。该API暂不对外支持。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h#oh_audiostreambuilder_create)创建的构造器实例。 |
| uint32_t mode | 要设置的内录模式，可为[OH_AudioStream_PlaybackCaptureMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_playbackcapturemode)中多个值的组合。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | AUDIOSTREAM_SUCCESS：函数执行成功。 AUDIOSTREAM_ERROR_INVALID_PARAM：参数无效。例如，builder为空指针或mode值无效。 |

#### [h2]OH_AudioStreamBuilder_SetSensitiveRecordPermitCallback()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetSensitiveRecordPermitCallback(OH_AudioStreamBuilder* builder, OH_AudioCapturer_SensitiveRecordPermitCallback callback, void* userData)
```
 描述

设置蜂窝通话下行录音风险提示语播放结束的回调函数。仅在使用[OH_AudioStream_SourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_sourcetype).AUDIOSTREAM_SOURCE_TYPE_VOICE_DOWNLINK录制时需要设置此函数。此回调必须成功设置，否则采集器无法创建。音频采集器创建后，风险提示语将自动添加到发送给通话对方的语音数据中。应用应等待回调结果后再启动采集器，否则[OH_AudioCapturer_Start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiocapturer-h#oh_audiocapturer_start)将返回错误。请确保音频采集器在蜂窝通话开始后创建，否则[OH_AudioStreamBuilder_GenerateCapturer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h#oh_audiostreambuilder_generatecapturer)将返回错误。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h#oh_audiostreambuilder_create)创建的构造器实例。 |
| OH_AudioCapturer_SensitiveRecordPermitCallback callback | 用于接收风险提示语播放结束的回调函数，不允许为空指针。 |
| void* userData | 用户数据指针，将在回调中回传给应用。若无需传递数据，可传入空指针。若数据不为空指针，调用方应在收到回调时确认数据是否仍然有效。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | - - AUDIOSTREAM_SUCCESS：函数执行成功。 - - - AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder或callback为空指针。 - - |

#### [h2]OH_AudioStreamBuilder_SetCellularRecordSecurityParams()

```
OH_AudioStream_Result OH_AudioStreamBuilder_SetCellularRecordSecurityParams(OH_AudioStreamBuilder* builder, const char* cellularRecordPhoneNum, const char* cellularRecordToken)
```
 描述

设置蜂窝通话下行录音的电话号码和安全令牌。仅在使用[OH_AudioStream_SourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_sourcetype).AUDIOSTREAM_SOURCE_TYPE_VOICE_DOWNLINK录制时需要设置此函数。电话号码和安全令牌将用于校验蜂窝通话下行采集器是否匹配对应的蜂窝通话，必须成功设置，否则采集器无法创建。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AudioStreamBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiostreambuilderstruct)* builder | 指向[OH_AudioStreamBuilder_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h#oh_audiostreambuilder_create)创建的构造器实例。 |
| const char* cellularRecordPhoneNum | 目标蜂窝通话的电话号码，用于makeCallWithToken()中，不允许为空指针。 |
| const char* cellularRecordToken | 目标蜂窝通话的安全令牌，可通过通话管理的makeCallWithToken()函数获取，不允许为空指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AudioStream_Result](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_result) | - - AUDIOSTREAM_SUCCESS：函数执行成功。 - - - AUDIOSTREAM_ERROR_INVALID_PARAM：参数builder、cellularRecordPhoneNum或cellularRecordToken为空指针。 - - |
